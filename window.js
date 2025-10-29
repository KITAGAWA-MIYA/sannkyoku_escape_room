// =============================================
// window_fixed.js — MENU透過 + 探索完了判定 + 安全化
// 修正点:
//  - resolveNext の二重定義を解消（1か所に統一）
//  - seStory -> setStory に改名し、起動フローで必ず呼ぶ
//  - DOM 未準備/要素未取得時の安全ガードを追加
//  - modal 開閉時の入力ブロックを追加（マップ/テキスト/Enter）
//  - r1.js 動的ロード条件を強化（id.startsWith("r1_"))
//  - 背景レイヤーの初期化を DOMContentLoaded 後に実行
//  - 選択肢の next / nextIfFlags 解決処理を一元化
// =============================================

(() => {
  // ---- ユーティリティ ----
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));
  // ---- SE（効果音） ----
const SE = {
  door_open: new Audio("./se/door_open.mp3"),
  koto: new Audio("./se/koto.mp3"),
  kotonn: new Audio("./se/kotonn.mp3"),
  unlocked: new Audio("./se/unlocked.mp3"),
  suberu: new Audio("./se/suberu.mp3"),
  bell: new Audio("./se/bell.mp3"),
  take: new Audio("./se/take.mp3"),
  pour: new Audio("./se/pour.mp3"),
  information: new Audio("./se/information.mp3"),
  paper: new Audio("./se/paper.mp3"),
  wall_crack: new Audio("./se/wall_crack.mp3"),
  quake_rumble: new Audio("./se/quake_rumble.mp3"),
  ui_click: new Audio("./se/button.mp3"),
  walk: new Audio("./se/walk.mp3"),
  clap: new Audio("./se/clap.mp3"),
  D: new Audio("./se/D.mp3"),
  G: new Audio("./se/G.mp3"),
  C: new Audio("./se/C.mp3"),
  delete_fire: new Audio("./se/delete_fire.mp3"),
  open_box: new Audio("./se/open_box.mp3"),
  magic: new Audio("./se/magic.mp3"),
  button: new Audio("./se/button.mp3"),
  sangenn: new Audio("./se/KT.mp3"),
  knife: new Audio("./se/knife.mp3"),
  KT: new Audio("./se/KT.mp3"),
  panchi: new Audio("./se/panchi.mp3"),
  dig: new Audio("./se/dig.mp3"),
};
function playSE(name) {
  const a = SE?.[name];
  if (!a) return;
  try {
    a.volume = 0.8; // ← 音量を80%に設定
    a.currentTime = 0;
    a.play();
  } catch (err) {
    console.warn("音再生に失敗:", name, err);
  }
}
// ユーザー操作後に音を解禁する
window.addEventListener("click", () => {
  Object.values(SE).forEach(a => {
    a.play().then(() => a.pause()).catch(()=>{});
  });
}, { once: true });

// ---- BGM（音楽） ----
const BGM = {
  white_room: new Audio("./bgm/intro.mp3"),
  koto_room: new Audio("./bgm/intro.mp3"),
  shamisen_room: new Audio("./bgm/intro.mp3"),
  shakuhachi_room: new Audio("./bgm/intro.mp3"),
  finale: new Audio("./bgm/fin.mp3"),
  みや_theme: new Audio("./bgm/intro.mp3"),     // 例：登場ジングル
  stinger: new Audio("./bgm/intro.mp3") ,
  kirarasan: new Audio("./bgm/kirara.mp3"),
  forgot: new Audio("./bgm/forgot.mp3"),
  looking: new Audio("./bgm/tannsaku.mp3")               // 例：短い演出曲
};

let currentBGM = null;
let resumeInfo = null; // 一時差し替え（bgmOnce）から戻すため

function playBGM(name, volume = 0.6, { loop = true, from = 0 } = {}) {
  stopBGM();
  const a = BGM[name];
  if (!a) return;
  a.loop = loop;
  a.volume = volume;
  a.currentTime = from;
  currentBGM = a;
  a.play().catch(()=>{});
}

function stopBGM() {
  if (!currentBGM) return;
  try {
    currentBGM.pause();
    currentBGM.currentTime = 0;
  } finally {
    currentBGM = null;
  }
}

function fadeBGM(to = 0, ms = 500, cb) {
  if (!currentBGM) return cb && cb();
  const a = currentBGM;
  const start = a.volume;
  const steps = Math.max(1, Math.floor(ms / 30));
  let i = 0;
  const t = setInterval(() => {
    i++;
    a.volume = start + (to - start) * (i / steps);
    if (i >= steps) {
      clearInterval(t);
      cb && cb();
    }
  }, 30);
}

/** 一時的に別BGMを流し、終わったら元に戻す */
function playBGMOnce(name, { volume = 0.7 } = {}) {
  const a = BGM[name];
  if (!a) return;
  // 退避
  resumeInfo = currentBGM
    ? { name: Object.keys(BGM).find(k => BGM[k] === currentBGM), time: currentBGM.currentTime, volume: currentBGM.volume }
    : null;

  stopBGM();
  a.loop = false;
  a.volume = volume;
  currentBGM = a;
  a.currentTime = 0;
  a.play().then(() => {
    a.onended = () => {
      currentBGM = null;
      if (resumeInfo) {
        playBGM(resumeInfo.name, resumeInfo.volume, { loop: true, from: resumeInfo.time });
        resumeInfo = null;
      }
    };
  }).catch(()=>{});
}

function setBGMVolume(v) {
  if (currentBGM) currentBGM.volume = v;
}

// 既存の「初回クリックで音を解禁」にBGMも追加
window.addEventListener("click", () => {
  Object.values(BGM).forEach(a => { a.play().then(() => a.pause()).catch(()=>{}); });
}, { once: true });

// ---- 画面エフェクト ----
function quake(ms = 1400) {
  const gc = document.querySelector("#game-container");
  if (!gc) return;
  gc.classList.add("is-quaking");
  // 連続再生したいときは rumble も鳴らす
  playSE("quake_rumble");
  setTimeout(() => gc.classList.remove("is-quaking"), ms);
}


  // === ステージ/要素参照（DOM 取得は後で再評価する） ===
  let canvas, ctx,
      modalBg,
      tabs, panels,
      mapArea, textBox, speakerBox, choicesBox, autoBadge, overlay,
      hotspot, hotspot2, みやSpot,
      hotspotLayer,
      infoList, infoDetail,
      optTextSpeed, optAuto, optBright, btnApply, btnReset,
      bgLayer;
    // === INFOメニュー関連 ===
  let __currentInfoArea = "すべて";
  let awaitingChoices = false;



  // ---- 背景 ----
  const DEFAULT_BG = "./bg/white_room.jpg";
  const TITLE_URL = "index.html"; // タイトルHTML

  function setBackground(src) {
    if (!bgLayer) return;
    const isColor =
      typeof src === "string" &&
      (src.startsWith("#") || src.startsWith("rgb(") || src.toLowerCase() === "black");

    bgLayer.style.opacity = "0";
    setTimeout(() => {
      if (isColor) {
        bgLayer.style.backgroundImage = "none";
        bgLayer.style.backgroundColor = src;
      } else {
        const url = src || DEFAULT_BG;
        bgLayer.style.backgroundColor = "transparent";
        bgLayer.style.backgroundImage = `url("${url}")`;
        bgLayer.style.backgroundPosition = "center";
        bgLayer.style.backgroundSize = "cover";
        bgLayer.style.backgroundRepeat = "no-repeat";
      }
      bgLayer.style.opacity = "1";
    }, 120);
  }

  function preloadBackgrounds(srcs = []) {
    srcs.forEach((s) => { const img = new Image(); img.src = s; });
  }

  // === タイプライタ & AUTO ===
  function speedToMs(v) {
    const n = Number(v || 3);
    return 10 + n * 15; // 25〜85ms程度
  }
  let typeMs = speedToMs(3);
  let typing = false;
  let autoMode = false;

  function updateAutoBadge() {
    if (!autoBadge) return;
    autoBadge.textContent = `AUTO: ${autoMode ? "ON" : "OFF"}`;
    if (autoMode) autoBadge.removeAttribute("hidden");
    else autoBadge.setAttribute("hidden", "");
  }

  function typeWriter(text, cb) {
    if (!textBox) return;
    typing = true;
    textBox.textContent = "";
    let i = 0;
    const tick = () => {
      if (!typing) { textBox.textContent = text; typing = false; cb && cb(); return; }
      textBox.textContent += text.charAt(i++);
      if (i < text.length) setTimeout(tick, typeMs);
      else { typing = false; cb && cb(); }
    };
    setTimeout(tick, typeMs);
  }

  // ===== 動的モジュールローダ =====
  const __loadedModules = new Set();

  function loadScriptTag(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error("Failed to load " + src));
      document.head.appendChild(s);
    });
  }

  // STORY_R* を現在の STORY にマージ
  function mergeStoryData(mod) {
    if (!mod || !window.story) return;
    // info
    if (mod.info) {
      window.story.info = window.story.info || {};
      for (const k of Object.keys(mod.info)) window.story.info[k] = mod.info[k];
    }
    // nodes
    if (Array.isArray(mod.nodes)) {
      for (const n of mod.nodes) {
        window.nodesById.set(n.id, n);
        if (!window.story.nodes.find((x) => x.id === n.id)) window.story.nodes.push(n);
      }
    }
  }

  // id から必要な章ファイルを推定してロード
  async function ensureModuleForId(id) {
    if (!id) return;
    // r1: 先頭が r1_ ならロード（厳密に startsWith で判定）
    if (id.startsWith("r1_") || id === "r1_from_intro") {
      if (!__loadedModules.has("r1")) {
        await loadScriptTag("r1.js");
        mergeStoryData(window.STORY_R1);
        __loadedModules.add("r1");
      }
    }
    // r2/r3 は必要になったら同様に追加
     if (id.startsWith("r2_") || id === "r2_from_intro") {
      if (!__loadedModules.has("r2")) {
        await loadScriptTag("r2.js");
        mergeStoryData(window.STORY_R2);
        __loadedModules.add("r2");
      }
    }
     if (id.startsWith("r3_") || id === "r3_from_intro") {
      if (!__loadedModules.has("r3")) {
        await loadScriptTag("r3.js");
        mergeStoryData(window.STORY_R3);
        __loadedModules.add("r3");
      }
    }
    if (id.startsWith("fin_") || id === "r3_to_final") {
      if (!__loadedModules.has("fin")) {
        await loadScriptTag("fin.js");
        mergeStoryData(window.STORY_FIN);
        __loadedModules.add("fin");
      }
    }
  }

  // 条件付き next を解決（choices と Enter 進行で共通利用）
 function resolveNext(nodeLike) {
  if (!nodeLike) return undefined;

  if (Array.isArray(nodeLike.nextIfFlags)) {
    for (const cond of nodeLike.nextIfFlags) {
      // 🔹追加部分：いずれかのフラグがあれば進む
      if (cond.flagsAny && cond.flagsAny.some(f => window.state.flags.has(f))) {
        return cond.next;
      }
      // 🔹既存処理：全フラグが揃っていたら進む
      if (cond.flags && cond.flags.every(f => window.state.flags.has(f))) {
        return cond.next;
      }
    }
  }

  return nodeLike.next;
}


  // === 情報（MENU：統合） ===

  // === 情報（MENU：統合） ===

// ←ここに追加！
const INFO_AREAS_ORDER = ["すべて", "白い部屋", "箏の部屋", "三味線の部屋", "尺八の部屋"];

const areaOf = (id, meta) => {
  if (meta && meta.area) return meta.area;
  if (id.startsWith("r1_")) return "箏の部屋";
  if (id.startsWith("r2_")) return "三味線の部屋";
  if (id.startsWith("r3_")) return "尺八の部屋";
  if (id.startsWith("fin_")) return "白い部屋";
  if (id.startsWith("start_") || id.startsWith("info_") || id.startsWith("intro_")) return "白い部屋";
  return "白い部屋";
};

// ←この下に renderInfoMenu() 関数本体が続く
function renderInfoMenu() {
  if (!infoList || !infoDetail) return;
  const areaTabs = document.querySelector("#info-area-tabs");

  infoList.innerHTML = "";
  if (window.state.info.size === 0) {
    infoList.textContent = "（まだ情報はありません）";
    infoDetail.innerHTML = "<p>情報を選ぶと詳細が表示されます。</p>";
    if (areaTabs) areaTabs.innerHTML = "";
    return;
  }

  const entries = Array.from(window.state.info).map((id) => {
    const meta = (window.story.info?.[id] || window.story.items?.[id]) || { title: id };
    return { id, meta };
  });

  // 各エリアの件数集計
  const counts = new Map();
  for (const e of entries) {
    const a = areaOf(e.id, e.meta);
    counts.set(a, (counts.get(a) || 0) + 1);
  }

  // タブは固定順。「すべて」は常に出し、各エリアは件数>0のものだけ出す
  const areas = ["すべて", ...INFO_AREAS_ORDER.filter(a => a !== "すべて" && counts.get(a) > 0)];

  if (areaTabs) {
    areaTabs.innerHTML = "";
    areas.forEach((a) => {
      const cnt = (a === "すべて") ? entries.length : (counts.get(a) || 0);
      const b = document.createElement("button");
      b.className = "area-tab" + (a === __currentInfoArea ? " is-active" : "");
      b.textContent = `${a} (${cnt})`;
      b.addEventListener("click", () => {
        __currentInfoArea = a;
        renderInfoMenu();
      });
      areaTabs.appendChild(b);
    });
    // もし現在選択が無効になっていたら「すべて」に戻す
    if (!areas.includes(__currentInfoArea)) {
      __currentInfoArea = "すべて";
    }
  }

  // リスト描画
  const filtered = __currentInfoArea === "すべて"
    ? entries
    : entries.filter(e => areaOf(e.id, e.meta) === __currentInfoArea);

  infoList.innerHTML = "";
  if (filtered.length === 0) {
    infoList.textContent = "（このエリアの情報は未取得です）";
    infoDetail.innerHTML = "<p>情報を選ぶと詳細が表示されます。</p>";
    return;
  }

  const drawDetail = (id) => {
    const meta = (window.story.info?.[id] || window.story.items?.[id]) || { title: id, desc: "説明はありません。" };
    const notes = window.state.infoNotes.get(id);
    const dict = meta.notes || {};
    let displayDesc = meta.desc;
    if (notes && notes.size > 0) {
      const lastKey = Array.from(notes).slice(-1)[0];
      if (dict[lastKey]) displayDesc = dict[lastKey];
    }

    infoDetail.innerHTML = "";
    const h = document.createElement("h4");
    h.textContent = meta.title || meta.name || id;
    infoDetail.appendChild(h);

    if (meta.image) {
      const img = document.createElement("img");
      img.src = meta.image;
      img.style.height = meta.detailHeight || "160px";
      img.style.width = "auto";
      img.style.objectFit = "contain";
      img.style.display = "block";
      img.style.margin = "8px 0";
      infoDetail.appendChild(img);
    }

    if (displayDesc) {
      const p = document.createElement("p");
      p.textContent = displayDesc;
      infoDetail.appendChild(p);
    }
  };

  filtered
    .sort((a,b) => (a.meta.title || a.id).localeCompare(b.meta.title || b.id, "ja"))
    .forEach(({id, meta}) => {
      const btn = document.createElement("button");
      btn.className = "info-item";
      btn.textContent = meta.title || meta.name || id;
      btn.addEventListener("click", () => drawDetail(id));
      infoList.appendChild(btn);
    });

  drawDetail(filtered[0].id);
}

// ====== セーブ / ロード ======
const SAVE_KEY_PREFIX = "sankyo_escape_save_";

function snapshotState() {
  // 取り出し可能な最小セット（拡張OK）
  return {
    nodeId: window.currentNodeId || window.story?.start || "intro_wake",
    flags: Array.from(window.state?.flags || []),
    items: Array.from(window.state?.items || []),
    info:  Array.from(window.state?.info  || []),
    visited: Array.from(window.state?.visited || []),
    autoMode,
    typeMs,
  };
}
async function restoreState(snap) {
  if (!snap) return false;
  // state を再構築
  window.state.flags   = new Set(snap.flags || []);
  window.state.items   = new Set(snap.items || []);
  window.state.info    = new Set(snap.info  || []);
  window.state.visited = new Set(snap.visited || []);
  autoMode = !!snap.autoMode;
  typeMs   = snap.typeMs || typeMs;
  updateAutoBadge?.();
  window.state.currentId = snap.nodeId || window.story.start;
  await renderNode();
  return true;
}
function saveToSlot(n) {
  try {
    const data = snapshotState();
    localStorage.setItem(SAVE_KEY_PREFIX + n, JSON.stringify(data));
    showSaveStatus(`スロット${n}にセーブしました。`);
  } catch (e) { showSaveStatus("セーブに失敗しました。"); }
}
async function loadFromSlot(n) {
  const raw = localStorage.getItem(SAVE_KEY_PREFIX + n);
  if (!raw) { showSaveStatus(`スロット${n}にデータがありません。`); return; }
  try {
    const snap = JSON.parse(raw);
    await restoreState(snap);
    showSaveStatus(`スロット${n}をロードしました。`);
  } catch { showSaveStatus("ロードに失敗しました。"); }
}
function deleteSlot(n) {
  localStorage.removeItem(SAVE_KEY_PREFIX + n);
  showSaveStatus(`スロット${n}を削除しました。`);
}
function showSaveStatus(msg) {
  const el = document.querySelector("#save-status"); if (el) el.textContent = msg;
}

// UI結線（メニュー生成後に呼ぶ）
function wireSaveButtons() {
  const bind = (id, fn) => { const b = document.querySelector(id); if (b) b.addEventListener("click", fn); };
  bind("#save-slot1", () => saveToSlot(1));
  bind("#save-slot2", () => saveToSlot(2));
  bind("#save-slot3", () => saveToSlot(3));
  bind("#load-slot1", () => loadFromSlot(1));
  bind("#load-slot2", () => loadFromSlot(2));
  bind("#load-slot3", () => loadFromSlot(3));
  bind("#del-slot1", () => deleteSlot(1));
  bind("#del-slot2", () => deleteSlot(2));
  bind("#del-slot3", () => deleteSlot(3));

  // Export / Import
  const importBtn = document.querySelector("#import-save");
  const fileInput = document.querySelector("#import-file");
  const exportBtn = document.querySelector("#export-save");
  if (exportBtn) exportBtn.addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(snapshotState(), null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "save.json"; a.click();
    URL.revokeObjectURL(a.href);
  });
  if (importBtn && fileInput) {
    importBtn.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", async (e) => {
      const f = e.target.files?.[0]; if (!f) return;
      const snap = JSON.parse(await f.text());
      await restoreState(snap);
      showSaveStatus("JSONからロードしました。");
    });
  }
}

// ゲーム終了時のオートセーブ（最後に遊んだ状態）
window.addEventListener("beforeunload", () => {
  try { localStorage.setItem(SAVE_KEY_PREFIX + "auto", JSON.stringify(snapshotState())); } catch {}
});

// 起動時にボタン結線（DOM準備後に呼ぶ初期化の最後で）
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(wireSaveButtons, 0);
});


  // === flags/items/info 反映（items→infoへも登録） ===
  function applySet(set = {}) {
    if (set.flags) for (const f of set.flags) window.state.flags.add(f);

    if (set.items) {
      for (const it of set.items) {
        window.state.items.add(it);
        window.state.info.add(it);
      }
    // window.js の applySet に追記（※既存のapplySet内にこのブロックを追加）
     if (set.unsetFlags) {
      for (const f of set.unsetFlags) window.state.flags.delete(f);
      }
     if (set.takeItems) {
      for (const it of set.takeItems) {
    window.state.items.delete(it);
    window.state.info.delete(it); // 情報欄からも消すなら
  }
  renderInfoMenu();
}

      renderInfoMenu();
    }

    if (set.info) {
      for (const k of set.info) window.state.info.add(k);
      renderInfoMenu();
    }

    if (set.infoNotes) {
      for (const key of set.infoNotes) {
        const [id, note] = String(key).split(":");
        if (!id || !note) continue;
        window.state.info.add(id);
        if (!window.state.infoNotes.has(id)) window.state.infoNotes.set(id, new Set());
        window.state.infoNotes.get(id).add(note);
      }
      renderInfoMenu();
    }

    if (set.bg) setBackground(set.bg);
  }

  function hasAllFlags(required = []) { return required.every((f) => window.state.flags.has(f)); }

  // === 選択肢 ===
  function clearChoices() {
    if (!choicesBox) return;
    choicesBox.innerHTML = "";
    choicesBox.style.display = "none";
  }

  function showChoices(node) {
    if (choicesBox) {
    choicesBox.innerHTML = "";
    choicesBox.style.display = "none";
  }
  // 新：ゲーム画面上の選択肢レイヤに描画
  return showChoicesInMap(node);
  }

  // === 旧固定スロットは使わない（存在すれば隠す） ===
  function hideFixedSlots() {
    if (hotspot) { hotspot.hidden = true; hotspot.onclick = null; }
    if (hotspot2) { hotspot2.hidden = true; hotspot2.onclick = null; }
    if (みやSpot) { みやSpot.hidden = true; みやSpot.onclick = null; }
  }

  // === マルチスポット：レイヤー制御 ===
  function clearExploreLayer() {
    if (!hotspotLayer) return;
    hotspotLayer.innerHTML = "";
    hotspotLayer.style.pointerEvents = "none";
    hotspotLayer.style.zIndex = "80"; // MENUより下
  }
  function clearChoicesInMap() {
  const layer = document.querySelector("#choices-layer");
  if (!layer) return;
  layer.innerHTML = "";
  layer.style.display = "none";
}


  function renderExplore(node) {
    if (!hotspotLayer || !node.explore) return false;

    clearExploreLayer();
    hideFixedSlots();

    const spots = node.explore.spots || [];

    const allExplored = spots.length > 0 && spots.every((s) => window.state.explored.has(s.id));
    const hasAllReqFlags = Array.isArray(node.explore.requireFlags)
      ? node.explore.requireFlags.every((f) => window.state.flags.has(f))
      : false;

    const shouldComplete = Array.isArray(node.explore.requireFlags) ? hasAllReqFlags : allExplored;
    if (node.explore.completeNext && shouldComplete) {
      window.state.currentId = node.explore.completeNext;
      renderNode();
      return true;
    }

    spots.forEach((sp) => {
      const done = window.state.explored.has(sp.id);

      const img = document.createElement("img");
      img.className = "spot" + (done ? " done" : "");
      img.dataset.role = "spot";
      img.src = sp.icon || "./kirakira.png";
      img.alt = sp.id;
      img.style.position = "absolute";
      img.style.left = sp.x || "50%";
      img.style.top = sp.y || "50%";
      img.style.transform = "translate(-50%,-50%)";
      if (sp.size) { img.style.height = sp.size; img.style.width = "auto"; }
      img.style.objectFit = "contain";
      img.style.cursor = "pointer";
      img.style.imageRendering = "pixelated";
      img.style.zIndex = sp.z || 95;
      if (done) img.style.opacity = ".78";

      img.style.pointerEvents = "auto";
      img.addEventListener("click", () => {
        const id = sp.id;
        window.state.explored.add(id);
        window.state.clickCounts = window.state.clickCounts || {};
        const count = (window.state.clickCounts[id] || 0) + 1;
        window.state.clickCounts[id] = count;

        let go;
        if (count === 1) {
          go = sp.next;
        } else if (count === 2 && sp.nextRepeat2) {
          go = sp.nextRepeat2;
        } else if (count >= 3 && sp.nextRepeat3) {
          go = sp.nextRepeat3;
        } else {
          if (Array.isArray(sp.nextRepeatIfFlags)) {
            const hit = sp.nextRepeatIfFlags.find((cond) =>
              (cond.flags || []).every((f) => window.state.flags.has(f))
            );
            if (hit) go = hit.next;
          }
          if (!go) go = sp.nextRepeat || sp.next;
        }

        window.state.currentId = go;
        renderNode();
      });

      hotspotLayer.appendChild(img);
      laあなたtSpots();
    });

    if (node.explore.talk) {
      const t = node.explore.talk;
      const mi = document.createElement("img");
      mi.className = "spot";
      mi.dataset.role = "みや";
      mi.src = t.sprite || "./06.与田かすみ立ち.png";
      mi.alt = "みや";
      mi.style.position = "absolute";
      mi.style.left = t.x || "50%";
      mi.style.top = t.y || "72%";
      mi.style.transform = "translate(-50%,-50%)";
      if (t.size) { mi.style.height = t.size; mi.style.width = "auto"; }
      mi.style.objectFit = "contain";
      mi.style.cursor = "pointer";
      mi.style.zIndex = t.z || 96;
      mi.style.pointerEvents = "auto";
      mi.addEventListener("click", () => {
        clearExploreLayer();
        window.state.currentId = t.next;
        renderNode();
      });
      hotspotLayer.appendChild(mi);
      laあなたtSpots();
    }
    return hotspotLayer.childElementCount > 0;
  }

  // === オーバーレイ（立ち絵/アイテム等） ===
  let stageClickEnabled = false;
function clearOverlay() {
  if (!overlay) return;
  overlay.hidden = true;
  overlay.onclick = null;
  overlay.style.pointerEvents = "auto";
  overlay.dataset.block = "0";
  overlay.style.position = "fixed";
  overlay.style.left = "50%";
  overlay.style.top = "50%";
  overlay.style.transform = "translate(-50%)";
  stageClickEnabled = false;
}

// 画面サイズや #map-area にフィットさせるためのレイアウト調整
function laあなたtOverlay() {
  if (!overlay || !mapArea) return;
  const mapR = mapArea.getBoundingClientRect();
  const txtR = textBox ? textBox.getBoundingClientRect() : null;

  // サイズ上限（親にフィット）
  const maxH = Math.max(160, Math.floor(mapR.height * 0.65)); // 親の65%
  const maxW = Math.max(160, Math.floor(mapR.width  * 0.90)); // 親の90%
  overlay.style.maxHeight = `${maxH}px`;
  overlay.style.maxWidth  = `${maxW}px`;

  // 画像実寸を取得（スタイル反映後の高さ）
  const h = overlay.getBoundingClientRect().height || maxH;

  // テキストボックスの上面に接するように配置
  if (txtR) {
    // ビューポート基準（overlay は position: fixed）
    const desiredTop = mapR.bottom-h;
    overlay.style.top = `${desiredTop}px`;
    // 横方向は従来どおり center ベース（left は既存値を尊重）
    overlay.style.transform = "translateX(-50%)"; // Y はピクセル指定に任せる
  }
}

// === 探索アイコン・立ち絵の自動スケール ===
function laあなたtSpots() {
  if (!hotspotLayer || !mapArea) return;
  const r = mapArea.getBoundingClientRect();

  // kirakira等の基準は控えめに戻す
  const base = Math.max(24, Math.min(60, Math.floor(r.width * 0.03))); // 6%
  const big  = Math.max(80, Math.min(560, Math.floor(r.height * 0.60))); // みや用：少し大きめ

  hotspotLayer.querySelectorAll("img.spot").forEach(img => {
    const role = img.dataset.role || "spot";

    // ★サイズ指定が明示（inline styleで高さが設定済み）なら尊重して上書きしない
    if (img.style.height && img.style.height.trim() !== "") return;

    if (role === "みや") {
      img.style.height = `${big}px`;
      img.style.width  = "auto";
    } else {
      img.style.height = `${base}px`;
      img.style.width  = "auto";
    }
  });
}



function showOverlay(sprite, size = "clamp(160px, 50vh, 420px)", opts = {}) {
  if (!overlay) return;
  const { block = true, onClose = null } = opts;
  overlay.onload = () => laあなたtOverlay();
  overlay.src = sprite;
  overlay.style.height = size;     // 高さは可変（ビューポート追随）
  overlay.style.width  = "auto";   // アスペクト比維持
  overlay.hidden = false;
  overlay.dataset.block = block ? "1" : "0";
  overlay.style.pointerEvents = block ? "auto" : "none";
 overlay.onclick = block ? () => { clearOverlay(); onClose && onClose();} : null;
  laあなたtOverlay();
}

function showPortraitFromRegistry(node) {
  if (!node.portrait || !window.story?.chars) return false;
  const { who, face, size, x, y } = node.portrait;
  const conf = window.story.chars[who]; if (!conf) return false;
  const src  = conf.faces?.[face];     if (!src)  return false;

  let h;
  if (who === "みや") {
    h = size ? `calc(${size} * 1.8)` : "clamp(160px, 60vh, 600px)";
  } else {
    h = size || conf.defaultSize || "clamp(160px, 50vh, 420px)";
  }

  // ★ここを必ず呼ぶ：srcセット＆表示＆レイアウト計算の起点
  showOverlay(src, h, { block: false });

  // 位置指定（必要なら）
  overlay.style.left = (x ?? conf.defaultX ?? "50%");
  overlay.style.top  = (y ?? conf.defaultY ?? "43%");

  laあなたtOverlay();
  return true;
}


// === 進行クールダウン ===
  let __lastAdvanceAt = 0;
  function __safeAdvance(nextMessageFn) {
    const now = Date.now();
    if (now - __lastAdvanceAt < 140) return;
    __lastAdvanceAt = now;
    nextMessageFn();
  }

  function applyNodeBGM(node) {
  if (!node) return;
  if (node.stopBgm) {            // 無音にする
    stopBGM();
    return;
  }
  if (node.bgmOnce) {            // ジングルなど一時曲
    playBGMOnce(node.bgmOnce);
    return;
  }
  if (node.set && typeof node.set.bgm === "string") {  // 常時BGM切替
    playBGM(node.set.bgm);
  }
}

  // === ノード描画 ===
  async function renderNode() {
    if (!window.nodesById || !window.state) return;

    clearChoices?.();
    clearChoicesInMap?.();
    clearOverlay?.();
    clearExploreLayer?.();

    if (!window.nodesById.has(window.state.currentId)) {
      try { await ensureModuleForId(window.state.currentId); } catch (e) { console.error(e); }
    }

    const node = window.nodesById.get(window.state.currentId);

    if (!node) {
      if (speakerBox) speakerBox.textContent = " ";
      if (textBox) textBox.textContent = "（この先は未実装です）";
      return;
    }
    // SE / FX トリガ
if (node.se) playSE(node.se);
if (node.fx === "quake") quake(node.fxMs || 1400);


    if (node.set) applySet(node.set);
    applyNodeBGM(node);
    if (speakerBox) {
  const name = node.name?.trim();
  if (!name) {
    speakerBox.textContent = "";
    // displayは消さない（高さを残すため）
    speakerBox.style.visibility = "hidden";   // ←見えないけど場所は取る
  } else {
    speakerBox.textContent = name;
    speakerBox.style.visibility = "visible";  // ←見える
  }
}
    
    showPortraitFromRegistry(node);

    if (node.overlay && node.overlay.withText) {
      showOverlay(node.overlay.sprite, node.overlay.size || "320px", { block: false });
      stageClickEnabled = true;
    }
    if (node.overlay && node.overlay.passive) {
      showOverlay(node.overlay.sprite, node.overlay.size || "320px", { block: false });
    }

    if (node.explore) {
      if (node.ui?.silent) { if (textBox) { textBox.textContent = ""; typing = false; } }
      else { typing = true; typeWriter(node.text || "", () => { typing = false; }); }
      renderExplore(node);
      return;
    }
    // typeWriterの直前あたり
      awaitingChoices = Array.isArray(node.choices) && node.choices.length > 0;

    typing = true;
    typeWriter(node.text || "", () => {
      typing = false;

      if (node.end) {
        if (!choicesBox) return;
        const retry = document.createElement("button");
        retry.textContent = "最初から";
        retry.addEventListener("click", () => {
          window.state.flags.clear();
          window.state.items.clear();
          window.state.explored.clear();
          window.state.info.clear();
          window.state.infoNotes.clear();
          renderInfoMenu();
          window.state.currentId = window.story.start;
          renderNode();
        });
        choicesBox.innerHTML = "";
        choicesBox.style.display = "block";
        choicesBox.appendChild(retry);
        return;
      }

      if (node.overlay && !node.overlay.withText && !node.overlay.passive) {
        showOverlay(node.overlay.sprite, node.overlay.size || "320px", {
          block: true,
          onClose: () => {
            const nx = resolveNext(node);
            if (nx) { window.state.currentId = nx; renderNode(); }
          },
        });
        return;
      }
      if (!showChoices(node)) {
  const nx = resolveNext(node);
  if (nx === "__TITLE__") {
    window.location.href = TITLE_URL;
    return;
  }
  if (nx && autoMode) {
    setTimeout(() => { window.state.currentId = nx; renderNode(); }, 1200);
  }
}


    });
  }

  // === 進行（Enter/クリック） ===
  function nextMessage() {
    if(awaitingChoices) return;
    const layer = document.querySelector("#choices-layer");
if (layer && layer.style.display !== "none" && layer.childElementCount > 0) return;

    if (typing) { typing = false; return; }
    if (overlay && !overlay.hidden && overlay.dataset.block === "1") return;
    if (hotspotLayer && hotspotLayer.childElementCount > 0) return;
    if (choicesBox && choicesBox.style.display !== "none" && choicesBox.childElementCount > 0) return;

    const node = window.nodesById.get(window.state.currentId);
const nx = node && resolveNext(node);
if (nx === "__TITLE__") { window.location.href = TITLE_URL; return; }
if (nx) { window.state.currentId = nx; renderNode(); }

  }

  // ---- 起動時のベースストーリー確保（script.jsを必ず読む） ----
  async function setStory() {
    if (!window.STORY) {
      await new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = "script.js"; // ルート直下想定
        s.onload = resolve;
        s.onerror = () => reject(new Error("script.js を読み込めませんでした"));
        document.head.appendChild(s);
      });
    }
  }

  // ==== script.js(=window.STORY) を元にゲーム状態を初期化する ====
  async function loadScriptJSON() {
    if (!window.STORY) throw new Error("window.STORY が未定義です（script.jsの読込順/パスを確認）");

    window.story = window.STORY; // ベース台本

    window.nodesById = new Map();
    if (Array.isArray(window.story.nodes)) {
      for (const n of window.story.nodes) window.nodesById.set(n.id, n);
    }

    window.state = {
      currentId: window.story.start,
      flags: new Set(),
      items: new Set(),
      explored: new Set(),
      info: new Set(),
      infoNotes: new Map(),
    };
  }

  // === 初期化 ===
  function wireUIRefs() {
    canvas = $("#map-canvas");
    ctx = canvas ? canvas.getContext("2d") : null;

    modalBg = $("#menu-modal-bg");
    tabs = $$(".tab");
    panels = $$(".panel");

    mapArea = $("#map-area");
    textBox = $("#type-text");
    speakerBox = $("#text-speaker");
    choicesBox = $("#choices");
    autoBadge = $("#auto-badge");
    overlay = $("#overlay");

    hotspot = $("#hotspot");
    hotspot2 = $("#hotspot2");
    みやSpot = $("#みや_hotspot");

    hotspotLayer = $("#hotspot-layer");
    if (!hotspotLayer && mapArea) {
      hotspotLayer = document.createElement("div");
      hotspotLayer.id = "hotspot-layer";
      hotspotLayer.style.position = "absolute";
      hotspotLayer.style.inset = "0";
      hotspotLayer.style.zIndex = "80"; // MENU(100)より下
      hotspotLayer.style.pointerEvents = "none";
      mapArea.appendChild(hotspotLayer);
    }
    // 選択肢レイヤ
let choicesLayer = document.querySelector("#choices-layer");
if (!choicesLayer && mapArea) {
  choicesLayer = document.createElement("div");
  choicesLayer.id = "choices-layer";
  Object.assign(choicesLayer.style, {
    position: "absolute",
    left: "50%",
    bottom: "8%",                 // 画面内の出し位置（好みで）
    transform: "translateX(-50%)",
    width: "90%",
    display: "none",
    gridTemplateColumns: "1fr",
    gap: "8px",
    zIndex: "97000",
    pointerEvents: "auto",
  });
  mapArea.appendChild(choicesLayer);
}


    infoList = $("#menu-info-list");
    infoDetail = $("#menu-info-detail");

    optTextSpeed = $("#opt-text-speed");
    optAuto = $("#opt-auto");
    optBright = $("#opt-bright");
    btnApply = $("#settings-apply");
    btnReset = $("#settings-reset");

    // 背景レイヤー
    bgLayer = $("#bg-layer");
    if (!bgLayer && mapArea) {
      bgLayer = document.createElement("div");
      bgLayer.id = "bg-layer";
      Object.assign(bgLayer.style, {
        position: "absolute",
        inset: "0",
        zIndex: "10",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        transition: "opacity 250ms linear",
        opacity: "1",
      });
      mapArea.prepend(bgLayer);
    }
  }

  function wireMenuAndTabs() {
    const menuBtn = $("#menu-btn");
    const menuClose = $("#menu-close");
    if (menuBtn) menuBtn.addEventListener("click", () => { if (modalBg) modalBg.hidden = false; });
    if (menuClose) menuClose.addEventListener("click", () => { if (modalBg) modalBg.hidden = true; });

    if (tabs && panels) {
      tabs.forEach((t) => {
        t.addEventListener("click", () => {
          tabs.forEach((a) => a.classList.remove("is-active"));
          panels.forEach((p) => p.classList.remove("is-active"));
          t.classList.add("is-active");
          const pnl = document.querySelector(`.panel[data-panel="${t.dataset.tab}"]`);
          if (pnl) pnl.classList.add("is-active");
        });
      });
    }
  }

  function wireCanvasResize() {
  if (!canvas) return;
  function resizeCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    // キャンバスと一緒に立ち絵のレイアウトも再計算
    laあなたtOverlay();
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
}
    

  function wireInputHandlers() {
    // テキストボックス
    const textBoxWrap = $("#text-box");
    if (textBoxWrap) {
      textBoxWrap.addEventListener("click", () => {
        if (modalBg && modalBg.hidden === false) return;
        __safeAdvance(nextMessage);
      });
    }

    // マップ
    if (mapArea) {
      mapArea.addEventListener("click", () => {
        if (modalBg && modalBg.hidden === false) return;
        if (stageClickEnabled) __safeAdvance(nextMessage);
      });
    }

    // キー：Enter
    document.addEventListener("keydown", (e) => {
      if (overlay && !overlay.hidden && overlay.dataset.block === "1") return;
      if (hotspotLayer && hotspotLayer.childElementCount > 0) return;
      if (modalBg && modalBg.hidden === false) return;

      if (e.key === "Enter") {
        if (e.repeat) return;
        __safeAdvance(nextMessage);
      }
    });

    // 設定
    if (optTextSpeed) optTextSpeed.addEventListener("input", () => { typeMs = speedToMs(optTextSpeed.value); });
    if (optAuto) optAuto.addEventListener("change", () => { autoMode = optAuto.checked; updateAutoBadge(); });
    if (btnApply) btnApply.addEventListener("click", () => {
      if (!optBright || !mapArea) return;
      const bright = parseFloat(optBright.value);
      mapArea.style.filter = `brightness(${bright})`;
      alert("設定を適用しました");
    });
    if (btnReset) btnReset.addEventListener("click", () => {
      if (optTextSpeed) { optTextSpeed.value = 3; typeMs = speedToMs(3); }
      if (optAuto) { optAuto.checked = false; autoMode = false; }
      if (optBright && mapArea) { optBright.value = 1; mapArea.style.filter = "none"; }
      updateAutoBadge();
    });
  }

  async function boot() {
  try {
    wireUIRefs();
    wireMenuAndTabs();
    wireCanvasResize();

    await setStory();
    await loadScriptJSON();

    updateAutoBadge();
    setBackground(DEFAULT_BG);
    preloadBackgrounds([DEFAULT_BG]);

    wireInputHandlers();
    window.addEventListener("resize", () => { laあなたtSpots(); laあなたtOverlay(); });

    // ウィンドウサイズ変更時にも立ち絵を再レイアウト

    if(window.ResizeObserver){
      const ro = new ResizeObserver(() => laあなたtOverlay());
      if(mapArea) ro.observe(mapArea);
      if(textBox) ro.observe(textBox);
    }
    window.addEventListener("resize", laあなたtOverlay);

    // 初回レンダ
    renderNode();
    // 初回も親領域にフィット
    laあなたtOverlay();
    wireSaveButtons();  // ←セーブボタン結線

  } catch (e) {
      console.error(e);
      alert(e.message || e);
    }
  }

  document.addEventListener("DOMContentLoaded", boot);

  // ---- 露出（デバッグ用途） ----
  window.__VN = {
    renderNode,
    setBackground,
    preloadBackgrounds,
    ensureModuleForId,
    resolveNext,
    clearChoicesInMap,
    updateAutoBadge,   // ← これを追加
  };
})();

function showChoicesInMap(node) {
  if (node.ui?.input === 'dial') return showDialLock(node);
  const layer = document.querySelector("#choices-layer");

  if (!layer || !node?.choices) return false;

  // IIFE外からは window.__VN 経由で呼ぶ
  window.__VN?.clearChoicesInMap?.();

  const choices = node.choices.filter((c) => {
    const need = c.requires?.flags;
    return !(Array.isArray(need) && !need.every((f) => window.state.flags.has(f)));
  });

  if (choices.length === 0) return false;

  layer.style.display = "grid";

  for (const choice of choices) {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.label;

    Object.assign(btn.style, {
      padding: "10px 12px",
      fontSize: "16px",
      borderRadius: "10px",
      background: "rgba(0,0,0,0.45)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.25)",
      backdropFilter: "blur(4px)",
      cursor: "pointer",
      transition: "background 0.2s",
    });

    btn.addEventListener("click", () => {
       (typeof playSE === "function" ? playSE("ui_click") : (window.playUIClick && playUIClick()));
      // これも window.__VN 経由で
      window.__VN?.clearChoicesInMap?.();

      try {
        const next = window.__VN?.resolveNext
          ? window.__VN.resolveNext({ next: choice.next, nextIfFlags: choice.nextIfFlags })
          : choice.next;
        if (next) {
          window.state.currentId = next;
          window.__VN?.renderNode?.();
        }
      } catch (e) {
        console.error(e);
      }
    });

    layer.appendChild(btn);
  }

  // AUTOは切る（既存仕様どおり）
  autoMode = false;
  window.__VN?.updateAutoBadge?.();
  return true;
}

/* ---------- ダイヤル錠入力 UI ---------- */
/* 依存: #choices-layer が存在すること (window.js の既存初期化で作られている) */
function showDialLock(node) {
  const layer = document.querySelector("#choices-layer");
  if (!layer) return false;

  // 既存の選択肢をクリア
  window.__VN?.clearChoicesInMap?.();

  const digits = (node.ui && node.ui.digits) || 3;
  const correct = String(node.ui && node.ui.correct || "");
  const successNext = node.ui && node.ui.successNext;
  const failNext = node.ui && node.ui.failNext;

  // コンテナ
  layer.style.display = "grid";
  layer.style.gridTemplateColumns = "1fr";
  layer.innerHTML = "";

  const wrap = document.createElement("div");
  wrap.style.display = "flex";
  wrap.style.justifyContent = "center";
  wrap.style.gap = "12px";
  wrap.style.alignItems = "center";
  wrap.style.padding = "8px";

  // 各桁のホイールを作る（上下ボタン＋数値表示）
  const wheels = [];
  for (let i = 0; i < digits; i++) {
    const col = document.createElement("div");
    col.style.display = "grid";
    col.style.gridTemplateRows = "auto auto auto";
    col.style.placeItems = "center";
    col.style.gap = "6px";

    const up = document.createElement("button");
    up.textContent = "▲";
    up.className = "choice-btn";
    up.style.padding = "6px 10px";
    up.style.fontSize = "14px";

    const display = document.createElement("div");
    display.textContent = "0";
    display.style.fontSize = "20px";
    display.style.minWidth = "40px";
    display.style.textAlign = "center";
    display.style.background = "rgba(255,255,255,0.04)";
    display.style.borderRadius = "8px";
    display.style.padding = "6px 8px";

    const down = document.createElement("button");
    down.textContent = "▼";
    down.className = "choice-btn";
    down.style.padding = "6px 10px";
    down.style.fontSize = "14px";

    let val = 0;
    const setVal = (v) => {
      val = ((v % 10) + 10) % 10;
      display.textContent = String(val);
    };

    up.addEventListener("click", () => setVal(val + 1));
    down.addEventListener("click", () => setVal(val - 1));

    // マウスホイールでも回せる
    display.addEventListener("wheel", (ev) => {
      ev.preventDefault();
      setVal(val + (ev.deltaY > 0 ? -1 : 1));
    });

    col.appendChild(up);
    col.appendChild(display);
    col.appendChild(down);

    wrap.appendChild(col);
    wheels.push({ get: () => display.textContent, set: setVal });
  }

  // リセットボタン
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "リセット";
  resetBtn.className = "choice-btn";
  resetBtn.addEventListener("click", () => wheels.forEach((w,i)=>w.set(0)));

  // 確定ボタン
  const okBtn = document.createElement("button");
  okBtn.textContent = "確定";
  okBtn.className = "choice-btn";
  okBtn.style.padding = "10px 14px";
  okBtn.style.fontWeight = "700";

  okBtn.addEventListener("click", () => {
    const entered = wheels.map(w => w.get()).join("");
    window.__VN?.clearChoicesInMap?.();

    // 正誤判定
    if (entered === correct) {
      if (successNext) {
        window.state.currentId = successNext;
        window.__VN?.renderNode?.();
      }
    } else {
      if (failNext) {
        window.state.currentId = failNext;
        window.__VN?.renderNode?.();
      }
    }
  });

  // ヘルプ/キャンセル
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "やめる";
  cancelBtn.className = "choice-btn";
  cancelBtn.addEventListener("click", () => {
    window.__VN?.clearChoicesInMap?.();
    // 次が定義されていれば進めたい（node.nextがあれば）
    const nx = window.__VN?.resolveNext ? window.__VN.resolveNext(node) : node.next;
    if (nx) { window.state.currentId = nx; window.__VN?.renderNode?.(); }
  });

  // レイアウト：上にホイール、下にボタン群
  const topBox = document.createElement("div");
  topBox.style.display = "flex";
  topBox.style.justifyContent = "center";
  topBox.style.marginBottom = "10px";
  topBox.appendChild(wrap);

  const btnRow = document.createElement("div");
  btnRow.style.display = "flex";
  btnRow.style.justifyContent = "center";
  btnRow.style.gap = "8px";
  btnRow.appendChild(resetBtn);
  btnRow.appendChild(okBtn);
  btnRow.appendChild(cancelBtn);

  layer.appendChild(topBox);
  layer.appendChild(btnRow);

  // 初期値 0 にする
  wheels.forEach((w,i)=>w.set(0));

  // オートモード解除（既存仕様）
  autoMode = false;
  window.__VN?.updateAutoBadge?.();

  return true;
}

/* ---------- showChoicesInMap からの呼び出し差分メモ ---------- */
/* showChoicesInMap(node) の冒頭で下記チェックを入れてください：
   if (node.ui?.input === 'dial') return showDialLock(node);
   こうすると台本の ui: { input:'dial', ... } を使ってダイヤルを出せます。 */

