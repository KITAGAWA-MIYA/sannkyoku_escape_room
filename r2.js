// story/r2.js — 三味線の部屋(雨の部屋)
window.STORY_R2 = {
  meta: { areaName: "三味線の部屋" },
  chars:{
    みや:{ defaultSize:"500px", defaultX:"50%", defaultY:"43%", faces:{ normal:"miya.normal.jpeg", smile:"miya.smile.jpeg", kind:"miya.kind.jpeg", fear:"miya.fear.jpeg", confuse:"miya.confuse.jpeg",ormal:"./kirara.normal.jpeg",mile:"./kirara_smile.jpeg",ind:"./kirara_kind.jpeg"}},
    みや_bad:{ defaultSize:"500px",defaultX:"50%", defaultY:"43%",  faces:{ normal:"miya.狂.jpeg", angry:"miya.angry.狂.jpeg", tear:"miya.tear.狂.jpeg", smile:"miya.smile.狂.jpeg",} }
 },
  info: {
    hekiga: { 
      title: "壁画", icon: "./shami_irasuto.png", image: "./shami_irasuto.png",
      desc: "白い壁に三味線らしき絵が描かれている。なんか不格好だ。", 
      area: "三味線の部屋" 
    },
    tori_kago: { 
      title: "鳥籠", icon: "./birdcase.png", image: "./birdcase.png",
      desc: "金色の鳥籠。中に鳥はいない。鍵がかかっている。", 
      notes: {
        unlocked: "金色の鳥籠。中に鳥はいないが、紙が入っていた。"
      },
      area: "三味線の部屋" 
    },
    shami_box: { 
      title: "三味線のケース?", icon: "./shami_case.png", image: "./shami_case.png", 
      desc: "黒くて頑丈そう。開けるには3桁の番号が必要そうだ。", 
      area: "三味線の部屋" 
    },
    r2_paper_ni: { 
      title: "鳥籠の中の紙", icon: "./memomemo.png", image: "./memomemo.png",
      desc: "「私の望みは正しい音。さすれば雨音があなたを癒すだろう。」と書かれている。", 
      area: "三味線の部屋" 
    },
    r2_mikann_doll: { 
      title: "みかんのぬいぐるみ。", icon: "./orange.png", image: "./orange.png",
      desc: "ぼく、みかん。", 
      notes: {
        D: "ぼく、みかん。Dの音を出せるんだ。"
      },
      area: "三味線の部屋" 
    },
    r2_kuma_doll: { 
      title: "くまのぬいぐるみ。", icon: "./bear.png", image: "./bear.png",
      desc: "おれ、くま。",
      notes: {
        G: "おれ、くま。Gの音を出せるんだ。"
      }, 
      area: "三味線の部屋" 
    },
    r2_neko_doll: { 
      title: "ねこのぬいぐるみ。", icon: "./cat.png", image: "./cat.png",
      desc: "うち、ねこ。", 
      notes: {
        C: "うち、ねこ。Cの音を出せるんだ。"
      },
      area: "三味線の部屋" 
    },
    tuner: { 
      title: "チューナー", icon: "./tune_adjust.png", image: "./tune_adjust.png",
      desc: "ポーチの中にチューナーが入ってる。電源はつきそうだ。", 
      area: "三味線の部屋" 
    },
    r2_nazonazo: { 
      title: "障子(裏)", icon: "./shouji_nazotoki.png", image: "./shouji_nazotoki.png",
      desc: "鶴が217、檻が3175、サイコロが4935、卵が577...何を表しているんだ?", 
      area: "三味線の部屋" 
    },
    makimono: { 
      title: "三味線の調弦", icon: "./r2_makimono.png", image: "./r2_makimono.png",
      desc: "俺が調弦を紹介するぞ!本調子:DGD、二上り:DGA、三下がり:DGC、六下がり:DGA…", 
      area: "三味線の部屋" 
    },
    shouji_kabegami: { 
      title: "障子", icon: "./shouji_kabegami.png", image: "./shouji_kabegami.png",
      desc: "凹凸がない。近くで見たら、障子の壁紙だった。", 
      area: "三味線の部屋" 
    },
    r2_kinnkagi: { 
      title: "鍵", icon: "./key.png", image: "./key.png",
      desc: "金色の鍵。ダミーじゃない...と思う。", 
      area: "三味線の部屋" 
    },
    r2_nikking: { 
      title: "謎の日記", icon: "./daliy.png", image: "./daliy.png",
      desc: "研究者の日記。内容は…ちょっと不穏そうだ。", 
      area: "三味線の部屋" 
    },
    drink_red: { 
      title: "謎の液体(赤)", icon: "./RED.png", image: "./RED.png",
      desc: "三味線のケースの中に入っていた。相変わらず毒々しい色をしている。耳を近づけるとべべーんと音が微かに聞こえる。", 
      notes:{
        shami_song:"三味線ケースの中に入っていた。耳を近づけるとべべーんと音が微かに聞こえる。他の瓶からも音が鳴っていきそうだ。",
      },
      area: "三味線の部屋" 
    },
    shizuku_ni: { 
      title: "小さな雫 -弐-", icon: "./chiisanashizuku_ni.png", image: "./chiisanashizuku_ni.png",
      desc: "三味線ケースの中に入ってた。", 
      notes:{
        content:"隣町へ向かってた少女だが、途中で迷子になってしまう。その先で木々に囲まれた家を見つける。",
      },
      area: "三味線の部屋" 
    },
  },

  nodes: [
    // ===== 弐ノ間:導入 =====
    { id: "r2_from_intro", name: " ", set: { bg: "#FFF" }, text: "......", next: "r2_from_intro2" },
    { id: "r2_from_intro2", name: " ", text: "扉をくぐると、途端に空気がひやりと湿り、肌を撫でる。",set:{bgm:"intro"}, set: { bg: "./ninoma.png" }, next: "r2_intro3" },
    { id: "r2_intro3", name: "あなた", text: "さっきの部屋に比べると、随分と暗いな…", next: "r2_intro4" },
    { id: "r2_intro4", name: "みや", text: "そうですね…それに、さっきよりも肌寒さ感じます。",portrait:{ who:"みや", face:"confuse" }, next: "r2_intro5" },
    { id: "r2_intro5", name: "あなた", text: "障子、畳…さっきは箏があったけど、この部屋はより和要素が強い気がする。",portrait:{ who:"みや", face:"confuse" }, next: "r2_intro6" },
    { id: "r2_intro6", name: "みや", text: "でも、和に関連していないものもありますよ…ぬいぐるみとか。", portrait:{ who:"みや", face:"normal" },next: "r2_intro7" },
    { id: "r2_intro7", name: "あなた", text: "(このぬいぐるみ達の仲間外れ感が凄いな…)", next: "r2_intro8" },
    { id: "r2_intro8", name: "あなた", text: "…随分と調べがいのありそうな部屋だね。", next: "r2_intro9" },
    { id: "r2_intro9", name: "みや", text: "そうですね、先ほどの部屋と同じように探索してみましょうか。", portrait:{ who:"みや", face:"kind" },set: { flags:["r2_started"] }, portrait:{ who:"みや", face:"confuse" }, next: "r2_hub" },

    // ===== 探索ハブ =====
    { id: "r2_hub", ui: { silent: true },set:{bgm:"tannsaku"},
      explore: {
        spots: [
          { id:"r2_case", x:"45%", y:"60%", size:"48px", icon:"./kirakira.png", next:"r2_peek_case", nextRepeat:"r2_try_code_hub", nextRepeatIfFlags:[
            {flags:["r2_case_open"],next:"r2_finish_code_hub"},
            {flags:["r2_candle_backup"],next:"r2_open_case"},
            {flags:[],next:"r2_try_code_hub"}
          ] },
          { id:"r2_torikago", x:"87%", y:"25%", size:"48px", icon:"./kirakira.png", next:"r2_look_torikago", nextRepeat:"r2_look_torikago_again" },
          { id:"r2_tennkei", x:"20%", y:"20%", size:"48px", icon:"./kirakira.png", next:"r2_look_tennkei", nextRepeat:"r2_hub" },
          { id:"r2_doll1", x:"35%", y:"55%", size:"48px", icon:"./kirakira.png", next:"r2_look_doll1", nextRepeat:"r2_look_doll1_again" },
          { id:"r2_doll2", x:"12%", y:"53%", size:"48px", icon:"./kirakira.png", next:"r2_look_doll2", nextRepeat:"r2_look_doll2_again" },
          { id:"r2_doll3", x:"80%", y:"53%", size:"48px", icon:"./kirakira.png", next:"r2_look_doll3", nextRepeat:"r2_look_doll3_again" },
          { id:"r2_tuner", x:"24%", y:"82%", size:"48px", icon:"./kirakira.png", next:"r2_look_tuner", nextRepeat:"r2_hub" },
          { id:"r2_manual", x:"60%", y:"62%", size:"48px", icon:"./kirakira.png", next:"r2_shami_manual", nextRepeat:"r2_shami_manual_again" },
          { id:"r2_look_shouji", x:"60%", y:"20%", size:"48px", icon:"./kirakira.png", next:"r2_shouji", nextRepeat:"r2_shouji_again" },
          { id:"r2_look_kagi", x:"95%", y:"40%", size:"48px", icon:"./kirakira.png", next:"r2_kagi", nextRepeat:"r2_kagi_again" },
          { id:"r2_look_daliy", x:"2%", y:"50%", size:"48px", icon:"./kirakira.png", next:"r2_nikki", nextRepeat:"r2_nikki_again" },
        ],
        talk: { sprite:"./miya.stand.jpeg", x:"23%", y:"75%", size:"501px", next:"r2_talk_みや1" },
      }
    },

    // ===== ケース観察 =====
    { id: "r2_peek_case", name: " ", text: "畳の部屋に細長いケースが置かれている。", next: "r2_peek_case2" },
    { id: "r2_peek_case2", name: "みや", text: "これは…何でしょう?スーツケースにしては随分と細長いですね。", portrait:{ who:"みや", face:"normal" },next: "r2_peek_case3" },
    { id: "r2_peek_case3", name: "みや", text: "それに結構頑丈そうです。",portrait:{ who:"みや", face:"kind" }, next: "r2_peek_case4" },
    { id: "r2_peek_case4", name: "あなた", text: "…もしかして、三味ケース?", next: "r2_peek_case5" },
    { id: "r2_peek_case5", name: "みや", text: "三味ケース…?",portrait:{ who:"みや", face:"normal" }, next: "r2_peek_case6" },
    { id: "r2_peek_case6", name: "あなた", text: "三味線のケースだよ。中に三味線と備品が入ってるはず。", portrait:{ who:"みや", face:"normal" }, next: "r2_peek_case7" },
    { id: "r2_peek_case7", name: "みや", text: "そうなんですね!", portrait:{ who:"みや", face:"kind" }, next: "r2_peek_case8" },
    { id: "r2_peek_case8", name: "みや", text: "三味線のケースって結構大きいんですね。しかも頑丈そうですし…", portrait:{ who:"みや", face:"normal" }, next: "r2_peek_case9" },
    { id: "r2_peek_case9", name: "みや", text: "これに入れたら雨の中でも持ち運べそうですね!",portrait:{ who:"みや", face:"smile" }, next: "r2_peek_case10" },
    { id: "r2_peek_case10", name: "あなた", text: "…本当に覚えてないんだな。", portrait:{ who:"みや", face:"smile" },next: "r2_peek_case11" },
    { id: "r2_peek_case11", name: "みや", text: "…ん?今何か言いました?",portrait:{ who:"みや", face:"normal" }, next: "r2_peek_case12" },
    { id: "r2_peek_case12", name: "あなた", text: "あ、ううん!!何でもない!",portrait:{ who:"みや", face:"normal" }, next: "r2_peek_case13" },
    { id: "r2_peek_case13", name: "あなた", text: "(みやは、三味線パートだ。三味線ケースについて、自分よりもみやの方が詳しいかもしれない。)", next: "r2_peek_case14" },
    { id: "r2_peek_case14", name: "あなた", text: "(まさか自分がみやに三味線ケースについて教える日がくるとは…)", next: "r2_peek_case15" },
    { id: "r2_peek_case15", name: "みや", text: "…あれ?ここ見てください!", portrait:{ who:"みや", face:"normal" },next: "r2_peek_case16" },
    { id: "r2_peek_case16", name: "あなた", text: "これは…南京錠?", next: "r2_peek_case17" },
    { id: "r2_peek_case17", name: "みや", text: "はい、3桁の番号が必要みたいです。",portrait:{ who:"みや", face:"normal" }, next: "r2_peek_case18" },
    { id: "r2_peek_case18", name: "あなた", text: "今回は3桁の番号を探し出せ…ってことか?",portrait:{ who:"みや", face:"normal" }, next: "r2_peek_case19" },
    { id: "r2_peek_case19", name: "みや", text: "番号…3桁の番号なんて、見てないですね",portrait:{ who:"みや", face:"confuse" }, next: "r2_peek_case20" },
    { id: "r2_peek_case20", name: "あなた", text: "探す…ってよりも謎解きっぽいな…", next: "r2_peek_case21" },
    { id: "r2_peek_case21", name: "あなた", text: "(この部屋についてもっと調べる必要がありそうだ。)", next: "r2_peek_case22" },
    { id: "r2_peek_case22", name: " ", text: "情報:『三味線のケース?』を手に入れた!", se: "infomation", set:{flags:["shami_box"],info:["shami_box"]}, next: "r2_hub" },

    // ===== 壁の文字 =====
    { id: "r2_look_tennkei", name: " ", text: "白い壁に何か描かれている。", next: "r2_look_tennkei2" },
    { id: "r2_look_tennkei2", name: "みや", text: "これは三味線…のように見えますが…",portrait:{ who:"みや", face:"confuse" }, next: "r2_look_tennkei3" },
    { id: "r2_look_tennkei3", name: "あなた", text: "(なんか弾く部分が妙に大きいな…)", next: "r2_look_tennkei4" },
    { id: "r2_look_tennkei4", name: "あなた", text: "(確か、胴…っていうんだっけ?)", next: "r2_look_tennkei5" },
    { id: "r2_look_tennkei5", name: "みや", text: "さっきの部屋が箏の部屋だとすると、ここは三味線の部屋…ですかね?",portrait:{ who:"みや", face:"normal" }, portrait:{ who:"みや", face:"normal" }, next: "r2_look_tennkei6" },
    { id: "r2_look_tennkei6", name: "あなた", text: "どっちも和楽器だね。",portrait:{ who:"みや", face:"normal" }, portrait:{ who:"みや", face:"normal" }, next: "r2_look_tennkei7" },
    { id: "r2_look_tennkei7", name: "みや", text: "なにかテーマのようなものがあるのでしょうか?", portrait:{ who:"みや", face:"kind" },portrait:{ who:"みや", face:"normal" }, next: "r2_look_tennkei8" },
    { id: "r2_look_tennkei8", name: "あなた", text: "その可能性が高いね…",portrait:{ who:"みや", face:"kind" }, portrait:{ who:"みや", face:"normal" }, next: "r2_look_tennkei9" },
    { id: "r2_look_tennkei9", name: "みや", text: "(だとすると、次の部屋も和楽器に関した部屋…なのか?)", portrait:{ who:"みや", face:"confuse" }, next: "r2_look_tennkei10" },
    { id: "r2_look_tennkei10", name: "あなた", text: "今回は三味線を演奏すると、何かが起こったりするのかな?", portrait:{ who:"みや", face:"normal" }, next: "r2_look_tennkei11" },
    { id: "r2_look_tennkei11", name: "みや", text: "うーん、どうでしょう…", portrait:{ who:"みや", face:"confuse" }, next: "r2_look_tennkei12" },
    { id: "r2_look_tennkei12", name: "みや", text: "今この部屋に三味線が見つかっていない以上、演奏するとは限らないと思います。", portrait:{ who:"みや", face:"kind" }, next: "r2_look_tennkei13" },
    { id: "r2_look_tennkei13", name: "みや", text: "…もう少し、この部屋を見て回りませんか?", portrait:{ who:"みや", face:"normal" }, next: "r2_look_tennkei14" },
    { id: "r2_look_tennkei14", name: "あなた", text: "そうだね。", portrait:{ who:"みや", face:"normal" }, next: "r2_look_tennkei15" },
    { id: "r2_look_tennkei15", name: " ", text: "情報:『壁画』を手に入れた!",se: "infomation", set: { flags:["r2_irasuto_text_seen"],info:["hekiga"] }, next: "r2_hub" },

    // 鳥籠
    { id: "r2_look_torikago", name: " ", text: "金色の鳥籠が置かれている。", next: "r2_look_torikago2" },
    { id: "r2_look_torikago2", name: " ", text: "中に鳥はいない。", next: "r2_look_torikago3" },
    { id: "r2_look_torikago3", name: "あなた", text: "どうして鳥籠がこんなところに…?", next: "r2_look_torikago4" },
    { id: "r2_look_torikago4", name: "あなた", text: "しかもちゃんと鍵がかかってる。", next: "r2_look_torikago5" },
    { id: "r2_look_torikago5", name: "あなた", text: "鍵があれば空きそうだけど…", next: "r2_look_torikago6" },
    { id: "r2_look_torikago6", name: " ", text: "情報:『鳥籠』を手に入れた!", se: "infomation", set: { flags:["r2_bird_case"],info:["tori_kago"] }, next: "r2_hub" },

    // 鳥籠(弐回目)
    { id: "r2_look_torikago_again", name: " ", text: "鍵のついた金色の鳥籠が置かれている。", nextIfFlags: [
        { flags: ["r2_torikago_paper","r2_kagi"], next: "r2_look_torikago_again_ni" },
        { flags: ["r2_kagi"], next: "r2_look_torikago_again2" },
        { flags: [], next: "r2_hub" }], next: "r2_hub" },
    { id: "r2_look_torikago_again2", name: "あなた", text: "この鍵…しか考えられないけれど、本当に使えるのか?", next: "r2_look_torikago_again3" },
    { id: "r2_look_torikago_again3", name: " ", text: "えい!", se:"unlocked",next: "r2_look_torikago_again4" },
    { id: "r2_look_torikago_again4", name: "あなた", text: "…使えた。", next: "r2_look_torikago_again5" },
    { id: "r2_look_torikago_again5", name: "あなた", text: "中に紙が入ってるな。", next: "r2_look_torikago_again6" },
    { id: "r2_look_torikago_again6", name: " ", text: "「私の望みは正しい音。さすれば雨音があなたを癒すだろう。」",se:"paper", next: "r2_look_torikago_again7" },
    { id: "r2_look_torikago_again7", name: "あなた", text: "…何か意味はあるのだろうか?", next: "r2_look_torikago_again8" },
    { id: "r2_look_torikago_again8", name: " ", text: "情報:『鳥籠の中の紙』を手に入れた!",se: "infomation",  set:{flags:["r2_torikago_paper"],info:["r2_paper_ni"],infoNote:["tori_kago:unlocked"]}, next: "r2_hub" },

    { id: "r2_look_torikago_again_ni", name: " ", text: "金色の鳥籠が置かれている。", next: "r2_look_torikago_again_ni2" },
    { id: "r2_look_torikago_again_ni2", name: " ", text: "中に入っていた紙には、「私の望みは正しい音。さすれば雨音があなたを癒すだろう。」と書かれている。", next: "r2_hub" },

    // ===== ぬいぐるみ1:ミカン(D音) =====
    { id: "r2_look_doll1", name: " ", text: "みかんのぬいぐるみが置かれている。", next: "r2_look_doll1_2" },
    { id: "r2_look_doll1_2", name: "あなた", text: "(…ぬいぐるみの中でも、一番奇抜だ。)", next: "r2_look_doll1_3" },
    { id: "r2_look_doll1_3", name: "あなた", text: "いいクッションになりそうだな。", next: "r2_look_doll1_4" },
    { id: "r2_look_doll1_4", name: "あなた", text: "…ん?へたの葉っぱが回せる?", next: "r2_look_doll1_5" },
    { id: "r2_look_doll1_5", name: " ", text: "回してみると、カタカタと音を鳴らす。", next: "r2_look_doll1_6" },
    { id: "r2_look_doll1_6", name: "あなた", text: "もしかして…これ、ねじ巻き?", next: "r2_look_doll1_7" },
    { id: "r2_look_doll1_7", name: "あなた", text: "(ミカンが動くのか…?)", next: "r2_look_doll1_8" },
    { id: "r2_look_doll1_8", name: "あなた", text: "ある程度回したところで、手を放してみる。", next: "r2_look_doll1_9" },
    { id: "r2_look_doll1_9", name: " ", text: "",se:"D",  next: "r2_look_doll1_10" },
    { id: "r2_look_doll1_10", name: "あなた", text: "音が鳴った…だけか。", next: "r2_look_doll1_11" },
    { id: "r2_look_doll1_11", name: "あなた", text: "(ミカンが動くって期待したんだけどな…)",  next: "r2_look_doll1_12" },
    { id: "r2_look_doll1_12", name: " ", text: "情報:『みかんのぬいぐるみ』を手に入れた!",se: "infomation",  set: { flags:["r2_mikann"],info:["r2_mikann_doll"] }, next: "r2_hub" },

    { id: "r2_look_doll1_again", name: " ", text: "みかんのぬいぐるみが置かれている。", nextIfFlags: [
        { flags: ["r2_tuner_seen"], next: "r2_tune_doll1" },
        { flags: [], next: "r2_mikann_0" }], next: "r2_mikann_0" },
    { id: "r2_mikann_0", name: " ", text: "ねじ巻きがみかんのヘタとは…製作者は頭がいいんだな", next: "r2_hub" },

    // ===== ぬいぐるみ2:クマ(G音) =====
    { id: "r2_look_doll2", name: " ", text: "茶色いクマのぬいぐるみが置かれている。", next: "r2_look_doll2_2" },
    { id: "r2_look_doll2_2", name: "あなた", text: "背中に糸巻きがついているな…", next: "r2_look_doll2_3" },
    { id: "r2_look_doll2_3", name: "あなた", text: "試しに回してみるか。", next: "r2_look_doll2_4" },
    { id: "r2_look_doll2_4", name: " ", text: "",se:"G", next: "r2_look_doll2_5" },
    { id: "r2_look_doll2_5", name: "あなた", text: "音が鳴った…", next: "r2_look_doll2_6" },
    { id: "r2_look_doll2_6", name: "あなた", text: "(昔こんな人形で遊んでた…気がする。)", next: "r2_look_doll2_7" },
    { id: "r2_look_doll2_7", name: " ", text: "情報:『くまのぬいぐるみ』を手に入れた。", se: "infomation", portrait:{ who:"みや", face:"confuse" }, set: { flags:["r2_kuma"],info:["r2_kuma_doll"] }, next: "r2_hub" },

    { id: "r2_look_doll2_again", name: " ", text: "茶色のクマのぬいぐるみが置かれている。", nextIfFlags: [
        { flags: ["r2_tuner_seen"], next: "r2_tune_doll2" },
        { flags: [], next: "r2_kuma_0" }], next: "r2_kuma_0" },
    { id: "r2_kuma_0", name: " ", text: "背中のねじを回すと音が鳴るおもちゃだ。", next: "r2_hub" },

    // ===== ぬいぐるみ3:ねこ(C音) =====
    { id: "r2_look_doll3", name: " ", text: "青い猫のぬいぐるみが置かれている。", next: "r2_look_doll3_2" },
    { id: "r2_look_doll3_2", name: "あなた", text: "背中に糸巻きがついているな…", next: "r2_look_doll3_3" },
    { id: "r2_look_doll3_3", name: "あなた", text: "試しに回してみるか。", next: "r2_look_doll3_4" },
    { id: "r2_look_doll3_4", name: " ", text: "", se:"C",next: "r2_look_doll3_5" },
    { id: "r2_look_doll3_5", name: "あなた", text: "音が鳴った…", next: "r2_look_doll3_6" },
    { id: "r2_look_doll3_6", name: "あなた", text: "(昔こんな人形で遊んでた…気がする。)", next: "r2_look_doll3_7" },
    { id: "r2_look_doll3_7", name: " ", text: "情報:『猫のぬいぐるみ』を手に入れた。", se: "infomation", set: { flags:["r2_neko"],info:["r2_neko_doll"] }, next: "r2_hub" },

    { id: "r2_look_doll3_again", name: " ", text: "青いねこのぬいぐるみが置かれている。", nextIfFlags: [
        { flags: ["r2_tuner_seen"], next: "r2_tune_doll3" },
        { flags: [], next: "r2_neko_0" }], next: "r2_neko_0" },
    { id: "r2_neko_0", name: " ", text: "背中のねじを回すと音が鳴るおもちゃだ。", next: "r2_hub" },

    // ===== チューナー =====
    { id: "r2_look_tuner", name: " ", text: "床にポーチが落ちている。", next: "r2_look_tuner2" },
    { id: "r2_look_tuner2", name: "あなた", text: "…ん?中に何か入ってる。", next: "r2_look_tuner3" },
    { id: "r2_look_tuner3", name: " ", text: "これは…チューナー?", overlay: { sprite: "./tune_adjust.png", withText: true },next: "r2_look_tuner4" },
    { id: "r2_look_tuner4", name: " ", text: "電源はつきそうだ。", next: "r2_look_tuner5" },
    { id: "r2_look_tuner5", name: "みや", text: "何に使うか分からないけど、一応持っとくか。", next: "r2_look_tuner6" },
    { id: "r2_look_tuner6", name: " ", text: "情報:『チューナー』を手に入れた!",se: "infomation",  
      set: { flags:["r2_tuner_seen"], info:["tuner"] }, next: "r2_hub" },

    // ===== チューナーで測定 =====
    // みかん(D)
    { id: "r2_tune_doll1", name: " ", text: "このみかんのぬいぐるみ…確かねじを回すと音がでたよな…", nextIfFlags: [
        { flags: ["r2_kuma_seen"], next: "r2_tune_mikan1_2" },
        { flags: ["r2_neko_seen"], next: "r2_tune_mikan1_2" },
        { flags: [], next: "r2_tune_doll1_2" }], next: "r2_tune_doll1_2" },
    { id: "r2_tune_doll1_2", name: "あなた", text: "せっかくだし、さっき拾ったチューナーを使って、音程を確かめてみようかな。", overlay: { sprite: "./tune_adjust.png", withText: true },next: "r2_tune_doll1_3" },
    { id: "r2_tune_doll1_3", name: "あなた", text: "チューナーを付けて、ねじを回して…よし、鳴らすぞ", next: "r2_tune_doll1_4" },
    { id: "r2_tune_doll1_4", name: " ", text: "", se:"D",next: "r2_tune_doll1_5" },
    { id: "r2_tune_doll1_5", name: "あなた", text: "チューナーには『D』と表示されている。", next: "r2_tune_doll1_6" },
    { id: "r2_tune_doll1_6", name: "あなた", text: "ちゃんとチューナーは動くのか…", next: "r2_tune_doll1_7" },
    { id: "r2_tune_doll1_7", name: " ", text: "情報:『みかんのぬいぐるみ』の内容が更新されました。",se: "infomation",  set: { flags:["r2_mikan_seen"],infoNote:["r2_mikann_doll:D"] }, next: "r2_hub" },
    
    { id: "r2_tune_mikan1_2", name: " ", text: "この音程も確かめてみるか", next: "r2_tune_doll1_4" },

    // くま(G)
    { id: "r2_tune_doll2", name: " ", text: "このくまのぬいぐるみ…確かねじを回すと音がでたよな…", nextIfFlags: [
        { flags: ["r2_mikan_seen"], next: "r2_tune_kuma1_2" },
        { flags: ["r2_neko_seen"], next: "r2_tune_kuma1_2" },
        { flags: [], next: "r2_tune_doll2_2" }], next: "r2_tune_doll2_2" },
    { id: "r2_tune_doll2_2", name: "あなた", text: "せっかくだし、さっき拾ったチューナーを使って、音程を確かめてみようかな。",overlay: { sprite: "./tune_adjust.png", withText: true }, next: "r2_tune_doll2_3" },
    { id: "r2_tune_doll2_3", name: "あなた", text: "チューナーを付けて、ねじを回して…よし、鳴らすぞ", next: "r2_tune_doll2_4" },
    { id: "r2_tune_doll2_4", name: " ", text: "",se:"G", next: "r2_tune_doll2_5" },
    { id: "r2_tune_doll2_5", name: "あなた", text: "チューナーには『G』と表示されている。", portrait:{ who:"みや", face:"normal" }, next: "r2_tune_doll2_6" },
    { id: "r2_tune_doll2_6", name: "あなた", text: "ちゃんとチューナーは動くのか…", next: "r2_tune_doll2_7" },
    { id: "r2_tune_doll2_7", name: " ", text: "情報:『くまのぬいぐるみ』の内容が更新されました。",se: "infomation",  set: { flags:["r2_kuma_seen"],infoNote:["r2_kuma_doll:G"] }, next: "r2_hub" },
    
    { id: "r2_tune_kuma1_2", name: " ", text: "これも音程確かめてみるか", next: "r2_tune_doll2_4" },

    // ねこ(C)
    { id: "r2_tune_doll3", name: " ", text: "このねこのぬいぐるみ…確かねじを回すと音がでたよな…", nextIfFlags: [
        { flags: ["r2_kuma_seen"], next: "r2_tune_neko1_2" },
        { flags: ["r2_mikan_seen"], next: "r2_tune_neko1_2" },
        { flags: [], next: "r2_tune_doll3_2" }], next: "r2_tune_doll3_2" },
    { id: "r2_tune_doll3_2", name: "あなた", text: "せっかくだし、さっき拾ったチューナーを使って、音程を確かめてみようかな。", overlay: { sprite: "./tune_adjust.png", withText: true },next: "r2_tune_doll3_3" },
    { id: "r2_tune_doll3_3", name: "あなた", text: "チューナーを付けて、ねじを回して…よし、鳴らすぞ", next: "r2_tune_doll3_4" },
    { id: "r2_tune_doll3_4", name: " ", text: "", se:"C",next: "r2_tune_doll3_5" },
    { id: "r2_tune_doll3_5", name: "あなた", text: "チューナーには『C』と表示されている。",  next: "r2_tune_doll3_6" },
    { id: "r2_tune_doll3_6", name: "あなた", text: "ちゃんとチューナーは動くのか…", next: "r2_tune_doll3_7" },
    { id: "r2_tune_doll3_7", name: " ", text: "情報:『ねこのぬいぐるみ』の内容が更新されました。",se: "infomation",  set: { flags:["r2_neko_seen"],infoNote:["r2_neko_doll:C"] }, next: "r2_hub" },
    
    { id: "r2_tune_neko1_2", name: " ", text: "これも音程確かめてみるか", next: "r2_tune_doll3_4" },

    // ===== 巻物(初心者マニュアル) =====
    { id: "r2_shami_manual", name: "あなた", text: "三味ケースのそばに丸められた紙がおかれている。", next: "r2_shami_manual2" },
    { id: "r2_shami_manual2", name: "あなた", text: "巻き物か…?広げてみるか",next: "r2_shami_manual3" },
    { id: "r2_shami_manual3", name: "あなた", text: "…えーっと、『誰でも分かる!三味線調弦マニュアル -その9-』",  next: "r2_shami_manual4" },
    { id: "r2_shami_manual4", name: " ", text: "『みんな!三味線を弾いてみたいって思ったことはないかい?うんうん、きっとあるはずだ!』", portrait:{ who:"みや", face:"kind" }, next: "r2_shami_manual5" },
    { id: "r2_shami_manual5", name: " ", text: "『そんな君たちに、今日は三味線の調弦について教えちゃうぞー!!』", next: "r2_shami_manual6" },
    { id: "r2_shami_manual6", name: " ", text: "『まずは本調子!これは一の糸がD、二の糸がG、参の糸がDの調弦だ!』", next: "r2_shami_manual7" },
    { id: "r2_shami_manual7", name: " ", text: "『一番基本の調弦で、六段の調べとか八千代獅子が有名だ!』",  next: "r2_shami_manual8" },
    { id: "r2_shami_manual8", name: " ", text: "『次に二上り!!これは一の糸がD、二の糸がA、参の糸がDの調弦だ!』", next: "r2_shami_manual9" },
    { id: "r2_shami_manual9", name: " ", text: "『夕顔とかが有名だな!』",  next: "r2_shami_manual10" },
    { id: "r2_shami_manual10", name: " ", text: "『そして三下がり!!これは一の糸がD、二の糸がG、参の糸がCの調弦だ!』", next: "r2_shami_manual11" },
    { id: "r2_shami_manual11", name: " ", text: "『軒の雫かなんかが有名だな!』",next: "r2_shami_manual12" },
    { id: "r2_shami_manual12", name: " ", text: "『他にも、曲によってはD、G、Aのような六下がりや、演奏途中で調弦を変えなくてはならないこともあるんだ!』",  next: "r2_shami_manual13" },
    { id: "r2_shami_manual13", name: " ", text: "『次回は、絶対に弦がきゅるきゅるにならない三味線の糸巻きの巻き方についてやるぞ!』",  next: "r2_shami_manual14" },
    { id: "r2_shami_manual14", name: " ", text: "『三味線が好きなそこの諸君!!ぜひ来てくれよな!』",  next: "r2_shami_manual15" },
    { id: "r2_shami_manual15", name: " ", text: "…おかしいな、読んでただけなのにちょっと熱い気がしてきた。",  next: "r2_shami_manual16" },
    { id: "r2_shami_manual16", name: "あなた", text: "これも…何かのヒント…なのか?",  next: "r2_shami_manual17" }, 
    { id: "r2_shami_manual17", name: " ", text: "情報:『三味線の調弦』を手に入れた!", se: "infomation",  set: { flags:["r2_makimono"],info:["makimono"] }, next: "r2_hub" },

    { id: "r2_shami_manual_again", name: " ", text: "三味線の調弦について書かれている巻物だ。", next: "r2_shami_manual_again2" },
    { id: "r2_shami_manual_again2", name: " ", text: "随分と熱く語られている。", next: "r2_hub" },

     // ===== 謎の日記 =====
    { id: "r2_nikki", name: "あなた", text: "二冊の本と箱が置かれている。", next: "r2_nikki2" },
    { id: "r2_nikki2", name: "あなた", text: "この本、二冊とも中身が白紙ですね…しかも表紙にも何も描かれてないです。", portrait:{ who:"みや", face:"normal" }, next: "r2_nikki3" },
    { id: "r2_nikki3", name: "あなた", text: "箱に鍵等はかかっていない。すぐにでも開けられそうだ。", next: "r2_nikki4" },
    { id: "r2_nikki4", name: " ", text: "", se:"open_box", next: "r2_nikki5" },
    { id: "r2_nikki5", name: " ", text: "これは…ノート?", overlay: { sprite: "./daliy.png", withText: true },next: "r2_nikki6" },
    { id: "r2_nikki6", name: " ", text: "題名とか書かれていますか?", overlay: { sprite: "./daliy.png", withText: true }, next: "r2_nikki7" },
    { id: "r2_nikki7", name: " ", text: "いや、表紙には何も書かれてないな…", overlay: { sprite: "./daliy.png", withText: true }, next: "r2_nikki8" },
    { id: "r2_nikki8", name: " ", text: "ただ、中を見る限り日記っぽい。しかも結構長そうだ。",overlay: { sprite: "./daliy.png", withText: true }, next: "r2_nikki9" },
    { id: "r2_nikki9", name: " ", text: "何か手がかりが得られるかもしれませんね…", overlay: { sprite: "./daliy.png", withText: true }, next: "r2_nikki10" },
    { id: "r2_nikki10", name: " ", text: "試しに読んでみるか。",  next: "r2_nikki11" },
    { id: "r2_nikki11", name: " ", text: "",se:"paper", next: "r2_nikki12" },
    { id: "r2_nikki12", name: " ", text: "『——19XX年1月17日、』",  next: "r2_nikki13" },
    { id: "r2_nikki13", name: " ", text: "『今日は王宮から研究の依頼を受けた。』",  next: "r2_nikki14" },
    { id: "r2_nikki14", name: " ", text: "『どうやら労働者が喜びそうなものを開発してほしい、らしい。』",  next: "r2_nikki15" },
    { id: "r2_nikki15", name: " ", text: "『なんでも、いつも国の為、懸命に働いてくれる労働者に恩返しがしたい…と。』",next: "r2_nikki16" },
    { id: "r2_nikki16", name: " ", text: "『…どうせ「褒美をやったら、労働者はもっと働いてくれるようになる」と思っているのだろう。』",next: "r2_nikki17" }, 
    { id: "r2_nikki17", name: " ", text: "『王宮の考えることはいつも分かりやすい。それでもって、私達のような研究者に厄介事を押し付けてくる。』",  next: "r2_nikki18" }, 
    { id: "r2_nikki18", name: " ", text: "『私もその労働者の一人だ。こんな研究やりたいとも思わない。』",next: "r2_nikki19" }, 
    { id: "r2_nikki19", name: " ", text: "『しかし、「あなたの命令を聞きたくないので断る。」なんて言った次の日には、私の住所は天国になっているだろう。』", next: "r2_nikki20" }, 
    { id: "r2_nikki20", name: " ", text: "『かといって、研究者が単に「出来ない」と言うと「ポンコツだから研究出来なかった」と思われてしまう。特に有権者からの依頼だと。』", next: "r2_nikki21" }, 
    { id: "r2_nikki21", name: " ", text: "『私のプライドがそれを許すはずがないだろう。』", next: "r2_nikki22" }, 
    { id: "r2_nikki22", name: " ", text: "『依頼を受けたからには、特別喜ぶものを作るが…さて、どうしたものか。』", next: "r2_nikki23" }, 
    { id: "r2_nikki23", name: " ", text: "『——19XX年1月19日』", next: "r2_nikki24" }, 
    { id: "r2_nikki24", name: " ", text: "『この日記に研究案をまとめることにした。』",next: "r2_nikki25" }, 
    { id: "r2_nikki25", name: " ", text: "『最近、年のせいか、物忘れが酷くなったからな、日にちという経過が見れる日記が一番いいだろう。』", next: "r2_nikki26" }, 
    { id: "r2_nikki26", name: " ", text: "『まず、労働者が喜ぶものといったら、金だな。』", next: "r2_nikki27" }, 
    { id: "r2_nikki27", name: " ", text: "『ただ、金関連は、当初の目的も忘れて、あのがめつい王様が技術を独り占めしようとするだろう。』",next: "r2_nikki28" }, 
    { id: "r2_nikki28", name: " ", text: "『これじゃあ、富裕層が超富裕層に進化するだけだ。なんの意味もない。』",  next: "r2_nikki29" }, 
    { id: "r2_nikki29", name: " ", text: "『王に程よく受け入れられ、庶民がもっと喜ぶもの．．．やっぱ酒か?』", next: "r2_nikki30" }, 
    { id: "r2_nikki30", name: " ", text: "『理想は一口飲んだだけで昇天する程美味い酒．．．実際、酒の研究は初めてではない。』", next: "r2_nikki31" }, 
    { id: "r2_nikki31", name: " ", text: "『自分を被験者にしやすいし、なんせ研究費で美味い酒が飲めるんだ。これ以上お得な研究テーマはないだろう。』",next: "r2_nikki32" }, 
    { id: "r2_nikki32", name: " ", text: "『そういえば音楽が流れる酒を開発したこともあった。』", next: "r2_nikki33" }, 
    { id: "r2_nikki33", name: " ", text: "『結果、人の騒ぎやら環境音やらで酒に含まれた音が全然聞こえなかったからほぼ意味をなさなかったが…懐かしいな』",  next: "r2_nikki34" },
    { id: "r2_nikki34", name: " ", text: "(――何ページか破られた跡が残っている。)", next: "r2_nikki35" }, 
    { id: "r2_nikki35", name: " ", text: "『——19XX年9月7日』",  next: "r2_nikki36" }, 
    { id: "r2_nikki36", name: " ", text: "『実験は成功した!』",next: "r2_nikki37" }, 
    { id: "r2_nikki37", name: " ", text: "『私はかつて、アルコールが脳のGABA受容体を刺激して、グルタミン酸の働きを解明していた。』", next: "r2_nikki38" }, 
    { id: "r2_nikki38", name: " ", text: "『その仕組みを元にして、同じ働きを促す…味覚と脳神経を直接刺激する音階と音の周波数見つけ出すことに成功した。』", next: "r2_nikki39" }, 
    { id: "r2_nikki39", name: " ", text: "『酒にその音を混ぜ込むことで、ドーパミンが共鳴し、聴覚と味覚が脳の報酬系で融合させることで、酒の上位互換バージョンを生み出すことに成功した!』",  next: "r2_nikki40" }, 
    { id: "r2_nikki40", name: " ", text: "『試しにのんでみたが、これは格別だ。酒の100倍は美味い!』",  next: "r2_nikki41" }, 
    { id: "r2_nikki41", name: " ", text: "『何なら、お子ちゃま用のジュースに音楽を入れるだけでも、酒よりも美味いかもしれない。』", next: "r2_nikki42" }, 
    { id: "r2_nikki42", name: " ", text: "『それで、作り方が…あれ?思い出せない。』",  next: "r2_nikki43" }, 
    { id: "r2_nikki43", name: " ", text: "『研究レポートを見れば全て書いてあるし、私が発明した3つの液体を混ぜるだけで誰でも作れるようになっている。』", next: "r2_nikki44" }, 
    { id: "r2_nikki44", name: " ", text: "『これは、いい研究をしたんじゃないか?』",  next: "r2_nikki45" }, 
    { id: "r2_nikki45", name: " ", text: "『——19XX年10月14日』",  next: "r2_nikki46" }, 
    { id: "r2_nikki46", name: " ", text: "『今回は珍しくいい依頼だった。』",  next: "r2_nikki47" }, 
    { id: "r2_nikki47", name: " ", text: "『王宮も庶民も喜んだし、謝礼も弾んだ。』",  next: "r2_nikki48" }, 
    { id: "r2_nikki48", name: " ", text: "『しかし、やはりあの王は酒の作り方を王宮のものにしようと魂胆している。』", next: "r2_nikki49" }, 
    { id: "r2_nikki49", name: " ", text: "『私はあなたのために研究をしていない．．．って言えたらな。』",  next: "r2_nikki50" }, 
    { id: "r2_nikki50", name: " ", text: "『その代わりに、先に色々とヒントを隠させてもらった。』", next: "r2_nikki51" }, 
    { id: "r2_nikki51", name: " ", text: "『本は便利だ。子供も大人も手に取るからな。』",  next: "r2_nikki52" }, 
    { id: "r2_nikki52", name: " ", text: "『一応、教養が無くとも分かるようにしたが…ま、気づく人がいてもいなくても、私は酒が飲めれば満足だ。』",  next: "r2_nikki53" }, 
    { id: "r2_nikki53", name: " ", text: "『それにしても、最近酒がやめられない。ここの所毎日飲んでいる。』", next: "r2_nikki54" }, 
    { id: "r2_nikki54", name: " ", text: "『それだけ美味いものを発明したんだ。ちょっとくらい自分への褒美としていいだろう。』", next: "r2_nikki55" }, 
    { id: "r2_nikki55", name: " ", text: "『——19XX年12月22日』", next: "r2_nikki56" }, 
    { id: "r2_nikki56", name: " ", text: "『ここのところ酒を飲み過ぎている。』", next: "r2_nikki57" }, 
    { id: "r2_nikki57", name: " ", text: "『研究が手につかないんだ。飲みすぎという自覚はある。』", next: "r2_nikki58" }, 
    { id: "r2_nikki58", name: " ", text: "『なのに、やめられない。』", next: "r2_nikki59" }, 
    { id: "r2_nikki59", name: " ", text: "『ここまで酒にハマるのは長い人生の中で初めてだ。』", next: "r2_nikki60" }, 
    { id: "r2_nikki60", name: " ", text: "『酒を飲むと、とても心地がいい。』", next: "r2_nikki61" }, 
    { id: "r2_nikki61", name: " ", text: "『そして、酒を飲んだ夜は、決まっていい夢を見る。』",next: "r2_nikki62" }, 
    { id: "r2_nikki62", name: " ", text: "『内容は一切覚えていない。しかし、起きた時、必ずいい夢だったと確信できる。』",  next: "r2_nikki63" }, 
    { id: "r2_nikki63", name: " ", text: "『……そういえば、今日って何日だ?後で、カレンダーで確認しないとな。』", next: "r2_nikki64" }, 
    { id: "r2_nikki64", name: " ", text: "『確か、ちょっと前に健康診断があった。』", next: "r2_nikki65" }, 
    { id: "r2_nikki65", name: " ", text: "『再検査の日が10...じゃない、20…でもないか…30…』", next: "r2_nikki66" }, 
    { id: "r2_nikki66", name: " ", text: "『……』", next: "r2_nikki67" }, 
    { id: "r2_nikki67", name: " ", text: "『…なぜ、私は今、日記を書いているんだ?』", next: "r2_nikki68" }, 
    { id: "r2_nikki68", name: " ", text: "『——XXXX年X月X日(字が乱雑で読めない)』",  next: "r2_nikki69" }, 
    { id: "r2_nikki69", name: " ", text: "『やってしまった』", next: "r2_nikki70" }, 
    { id: "r2_nikki70", name: " ", text: "『じっけんはしっぱいだ』", next: "r2_nikki71" }, 
    { id: "r2_nikki71", name: " ", text: "『のんだら、のまれる』",  nextIfFlags: [
        { flags: ["r2_day_book_seen"], next: "r2_hub" },
        { flags: [], next: "r2_nikki72" }], next: "r2_nikki72" },
    { id: "r2_nikki72", name: "みや", text: "…ここで、日記は終わってますね。", portrait:{ who:"みや", face:"confuse" }, next: "r2_nikki73" }, 
    { id: "r2_nikki73", name: "あなた", text: "…なんだか、不穏な日記だな。", portrait:{ who:"みや", face:"confuse" }, next: "r2_nikki74" }, 
    { id: "r2_nikki74", name: "あなた", text: "どうしてこんなものが、この部屋にあるんだ――?",  next: "r2_nikki75" }, 
    { id: "r2_nikki75", name: " ", text: "情報:『研究者の日記』を手に入れた!",se: "infomation",set: { flags:["r2_day_book_seen"],info:["r2_nikking"] }, next: "r2_hub" },

    { id: "r2_nikki_again", name: " ", text: "研究者の日記が置かれている。",overlay: { sprite: "./daliy.png", withText: true },
      choices: [
        { label: "もう一度読み直す", next: "r2_nikki11" },
        { label: "戻る", next: "r2_hub" }
      ]},
    // ===== 障子 =====
    { id: "r2_shouji", name: " ", text: "壁の一面に障子がある。", next: "r2_shouji_2" },
    { id: "r2_shouji_2", name: "あなた", text: "この奥になにかあったりしないか…?", next: "r2_shouji_3" },
    { id: "r2_shouji_3", name: " ", text: ".....", next: "r2_shouji_4" },
    { id: "r2_shouji_4", name: "あなた", text: "あれ…?凸凹がない…", next: "r2_shouji_5" },
    { id: "r2_shouji_5", name: "あなた", text: "まさか、障子の壁紙…!", next: "r2_shouji_6" },
    { id: "r2_shouji_6", name: "あなた", text: "近づかないと分からなかった…こんなリアルな壁紙あるんだな。",  next: "r2_shouji_7" },
    { id: "r2_shouji_7", name: " ", text: "情報:『障子』を手に入れた。",se: "infomation", set: { flags:["r2_shouji"],info:["shouji_kabegami"] }, next: "r2_hub" },

    { id: "r2_shouji_again", name: " ", text: "壁の一面に障子がある。", next: "r2_shouji_again2" },
    { id: "r2_shouji_again2", name: " ", text: "でもこれ壁紙なんだよな…", 
      nextIfFlags: [
        { flags: ["r2_nazo"], next: "r2_broken_kabegami_nazo" },
        { flags: ["r2_kagi"], next: "r2_broken_kabegami" },
        { flags: [], next: "r2_shouji_again3" }], next:"r2_shouji_again3" },
    { id: "r2_shouji_again3", name: " ", text: "近くで見ないと分からないくらいリアルだ。", next: "r2_hub" },

    { id: "r2_broken_kabegami", name: "あなた", text: "…これ、壁紙だよな?", next: "r2_broken_kabegami2" },
    { id: "r2_broken_kabegami2", name: "あなた", text: "さっき拾った鍵の尖った部分で壁紙はがせるんじゃないか?", next: "r2_broken_kabegami3" },
    { id: "r2_broken_kabegami3", name: "あなた", text: "それとも…壊さない方がいい?", next: "r2_broken_kabegami4" },
    { id: "r2_broken_kabegami4", name: "あなた", text: "……", next: "r2_broken_kabegami5" },
    { id: "r2_broken_kabegami5", name: "あなた", text: "…いや!気になる!一度気にしたら気になっちゃう…!!", next: "r2_broken_kabegami6" },
    { id: "r2_broken_kabegami6", name: "あなた", text: "ま、まあ、壁紙だから、自然と戻しておけばなんとかなるでしょう…と信じて!!", next: "r2_broken_kabegami7" },
    { id: "r2_broken_kabegami7", name: " ", text: "鍵の鋭利な部分を使い慎重に剥がした。", next: "r2_broken_kabegami8" },
    { id: "r2_broken_kabegami8", name: "あなた", text: "ッ!!何か書いてある!!", overlay: { sprite: "./shouji_nazotoki.png", withText: true },next: "r2_broken_kabegami9" },
    { id: "r2_broken_kabegami9", name: "あなた", text: "えーっと…", overlay: { sprite: "./shouji_nazotoki.png", withText: true },next: "r2_broken_kabegami10" },
    { id: "r2_broken_kabegami10", name: "あなた", text: "鶴が217、折が3175、サイコロが4935、卵が577...",overlay: { sprite: "./shouji_nazotoki.png", withText: true }, next: "r2_broken_kabegami11" },
    { id: "r2_broken_kabegami11", name: "あなた", text: "これは…謎解き?",overlay: { sprite: "./shouji_nazotoki.png", withText: true }, next: "r2_broken_kabegami12" },
    { id: "r2_broken_kabegami12", name: "あなた", text: "でも何を導き出すか、何も書いてない…", overlay: { sprite: "./shouji_nazotoki.png", withText: true },next: "r2_broken_kabegami13" },
    { id: "r2_broken_kabegami13", name: "あなた", text: "どこかで使うのかもしれないな…", next: "r2_broken_kabegami14" },
    { id: "r2_broken_kabegami14", name: " ", text: "情報:『障子(裏)』を手に入れた!",se: "infomation",  set: { flags:["r2_nazo"],info:["r2_nazonazo"] }, next: "r2_hub" },

    { id: "r2_broken_kabegami_nazo", name: " ", text: "壁紙の裏に謎があった。",  choices: [
        { label: "謎を確認する。", next: "r2_broken_kabegami_nazo2" },
        { label: "戻る", next: "r2_hub" }
      ]},
    { id: "r2_broken_kabegami_nazo2", name: " ", text: "", overlay: { sprite: "./shouji_nazotoki.png", withText: true },next: "r2_hub" },

    // ===== 鍵 =====
    { id: "r2_kagi", name: " ", text: "金色の鍵が置いてある。", next: "r2_kagi_2" },
    { id: "r2_kagi_2", name: "あなた", text: "脱出系でこんな露骨に鍵おいてあることあるか…?", next: "r2_kagi_3" },
    { id: "r2_kagi_3", name: "あなた", text: "ダミーな気もするけど…", next: "r2_kagi_4" },
    { id: "r2_kagi_4", name: "あなた", text: "…一応持っとくか。", next: "r2_kagi_5" },
    { id: "r2_kagi_5", name: " ", text: "情報:『鍵』を手に入れた!",se: "infomation",
      set: { flags:["r2_kagi"],info:["r2_kinnkagi"] }, next: "r2_hub" },

    { id: "r2_kagi_again", name: " ", text: "金色の鍵がおいてあった場所だ。", next: "r2_hub" },

    // ===== みやとの会話 =====
    { id: "r2_talk_みや1", name: "みや", text: "どうしました?", 
      choices: [
        { label: "ヒントが欲しい。", next: "r2_hint" },
        { label: "白い部屋に戻る。", nextIfFlags: [
          { flags: ["BLUE"], next: "r2_shiro_fin" },
          { flags: [], next: "r2_shiro" }], next: "r2_shiro" },
        { label: "みやと雑談したい。", next: "r2_talking" },
        { label: "なんでもない", next: "r2_hub" }
      ]},
    
    { id: "r2_hint", name: "あなた", text: "探索に行き詰まっちゃって…何かいいヒントないかな?", next: "r2_talk_tuning2" },
    { id: "r2_talk_tuning2", name: "みや", text: "そうですね…", portrait:{ who:"みや", face:"confuse" }, nextIfFlags: [
        { flags: ["r2_kagi"], next: "r2_nazotoki_hint" },
        { flags: [], next: "r2_nocomplete" }], next: "r2_nocomplete" },

    { id: "r2_nocomplete", name: "みや", text: "まだ、探せていない所があるかもしれません。", portrait:{ who:"みや", face:"normal" }, next: "r2_nocomplete2" },
    { id: "r2_nocomplete2", name: "みや", text: "もう一度探してみませんか?", portrait:{ who:"みや", face:"kind" }, next: "r2_nocomplete3" },
    { id: "r2_nocomplete3", name: "あなた", text: "なるほど…ありがとう!", portrait:{ who:"みや", face:"kind" }, next: "r2_hub" },

    { id: "r2_nazotoki_hint", name: "みや", text: "謎解きはちょっと見方を変えてみると分かりやすいかと…", portrait:{ who:"みや", face:"kind" }, next: "r2_nazotoki_hint2" },
    { id: "r2_nazotoki_hint2", name: "みや", text: "例えばですけど、イラストをアルファベットに置き換えてみるとか…", portrait:{ who:"みや", face:"kind" }, next: "r2_nazotoki_hint3" },
    { id: "r2_nazotoki_hint3", name: "みや", text: "実際に紙に書いてみると分かりやすいかもしれませんね", portrait:{ who:"みや", face:"kind" }, next: "r2_nazotoki_hint4" },
    { id: "r2_nazotoki_hint4", name: "あなた", text: "なるほど…ありがとう!!", portrait:{ who:"みや", face:"smile" }, next: "r2_hub" },

    // 白い部屋へ戻る
    { id: "r2_shiro", name: "あなた", text: "白い部屋に戻った。", set: { bg: "./Three_Doors.png" }, se:"door_open",  nextIfFlags: [
        { flags: ["Red"], next: "sannnoma_kagi" },
        { flags: [], next: "intro_doors" }], next: "intro_doors" },
     //白い部屋⇒弐の間
     { id: "r2_come_back", name: "あなた", text: "三味線の部屋に戻った", set: { bg: "./ninoma.png" },  se:"door_open",next: "r2_hub" },

     { id: "r2_shiro_fin", name: "あなた", text: "白い部屋に戻った。", set: { bg: "./shiroima.png" }, se:"door_open", next: "fin_hub" },

    // ===== 暗証番号入力ハブ =====
    { id: "r2_try_code_hub", name: "あなた", text: "目の前にケースがある。", next: "r2_try_code_hub2" },
    { id: "r2_try_code_hub2", name: "みや", text: "開けるには3桁の番号が必要そうです。", next: "r2_try_code_hub3" },
    
    { 
      id: "r2_try_code_hub3",
      name: " ",
      text: "番号を入力してください。",
      ui: {
        input: "dial",
        digits: 3,
        correct: "437",
        successNext: "r2_code_ 437",
        failNext: "r2_code_wrong"
      }
    },

    // ===== 間違った番号(ろうそくが消える) =====
    { id: "r2_code_wrong", name: " ", text: "カチ、カチ、カチ……", next: "r2_code_wrong2" },
    { id: "r2_code_wrong2",stopBgm:true, name: " ", text: "あれ…?開かない?", 
      set: { flags:["r2_wrong_try"] },
      nextIfFlags: [
        { flags: ["r2_candle2_off","r2_candle1_off"], next: "r2_candle_all_off" },
        { flags: ["r2_candle2_off"], next: "r2_candle2_gone" },
        { flags: [], next: "r2_candle1_gone" }
      ], next: "r2_candle1_gone" },

    // 1本目消える
    { id: "r2_candle1_gone", name: "みや", text: "番号が違ったのでしょうか…?", next: "r2_candle1_gone2" },
    { id: "r2_candle1_gone2", name: " ", text: "フッ…", se:"delete_fire",next: "r2_candle1_gone3" },
    { id: "r2_candle1_gone3", name: "あなた", text: "蠟燭の炎が…消えた…?", next: "r2_candle1_gone4" },
    { id: "r2_candle1_gone4", name: "みや", text: "でも、一本だけのようですね…", portrait:{ who:"みや", face:"fear" }, next: "r2_candle1_gone5" },
    { id: "r2_candle1_gone5", name: "あなた", text: "もしかして、間違える度に、炎が消えるのか…?", portrait:{ who:"みや", face:"fear" }, next: "r2_candle1_gone6" },
    { id: "r2_candle1_gone6", name: "みや", text: "なるほど…その可能性が高いですね。",portrait:{ who:"みや", face:"confuse" },  next: "r2_candle1_gone7" },
    { id: "r2_candle1_gone7", name: "あなた", text: "だとすると、もし残り二回間違えたら…",portrait:{ who:"みや", face:"confuse" },  next: "r2_candle1_gone8" },
    { id: "r2_candle1_gone8", name: "みや", text: "炎が全て消える…だけで済むんでしょうか。", portrait:{ who:"みや", face:"fear" }, next: "r2_candle1_gone9" },
    { id: "r2_candle1_gone9", name: "みや", text: "全部の炎が消えた時……", next: "r2_candle1_gone10" },
    { id: "r2_candle1_gone10", name: "あなた", text: "……", next: "r2_candle1_gone11" },
    { id: "r2_candle1_gone11", name: "みや", text: "す、すみません!変なこと考えてしまいました…!!",portrait:{ who:"みや", face:"fear" },  portrait:{ who:"みや", face:"fear" }, next: "r2_candle1_gone12" },
    { id: "r2_candle1_gone12", name: "あなた", text: "い、いや!自分も嫌な妄想をしてた…!", portrait:{ who:"みや", face:"fear" }, next: "r2_candle1_gone13" },
    { id: "r2_candle1_gone13", name: "あなた", text: "は、早く答えを見つければいいだけだもんね!!",portrait:{ who:"みや", face:"fear" },  next: "r2_candle1_gone14" },
    { id: "r2_candle1_gone14", name: "みや", text: "そ、そうですよね!!調べなおしましょう!", portrait:{ who:"みや", face:"kind" }, next: "r2_candle1_gone15" },
    { id: "r2_candle1_gone15", name: "あなた", text: "(早く正しい答えを見つけたい…)",  set: { flags:["r2_candle2_off"] }, next: "r2_hub" },

    // 2本目消える
    { id: "r2_candle2_gone", name: "みや", text: "これも違うんですね。", next: "r2_candle2_gone2" },
    { id: "r2_candle2_gone2", name: " ", text: "フッ…", se:"delete_fire",next: "r2_candle2_gone3" },
    { id: "r2_candle2_gone3", name: "あなた", text: "また消えた…", next: "r2_candle2_gone4" },
    { id: "r2_candle2_gone4", name: "あなた", text: "あと…一本。", next: "r2_candle2_gone5" },
    { id: "r2_candle2_gone5", name: "みや", text: "…恐らく間違えていいのはあと一回だけです。", portrait:{ who:"みや", face:"fear" }, next: "r2_candle2_gone6" },
    { id: "r2_candle2_gone6", name: "みや", text: "頑張って答えを見つけましょう…!!", portrait:{ who:"みや", face:"kind" }, next: "r2_candle2_gone7" },
    { id: "r2_candle2_gone7", name: "あなた", text: "そうだな…",portrait:{ who:"みや", face:"kind" },  next: "r2_candle2_gone8" },
    { id: "r2_candle2_gone8", name: "あなた", text: "(元々暗かったのに、だいぶ暗くなってしまった…)",next: "r2_candle2_gone9" },
    { id: "r2_candle2_gone9", name: "あなた", text: "(もう、間違えられない気がする)", set: { flags:["r2_candle1_off"] }, next: "r2_hub" },

    // 3本全部消える(恐怖演出)
    { id: "r2_candle_all_off", name: "あなた", text: "まさか…間違えた…?", next: "r2_candle_all_off2" },
    { id: "r2_candle_all_off2", name: "みや", text: "いけない!!…最後の蠟燭が…!!",portrait:{ who:"みや", face:"confuse" },  next: "r2_candle_all_off3" },
    { id: "r2_candle_all_off3", name: " ", text: "フッ…",se:"delete_fire", set: { bg: "#000" }, next: "r2_candle_all_off4" },
    { id: "r2_candle_all_off4", name: " ", text: "部屋が、闇に包まれる。", next: "r2_candle_all_off5" },
    { id: "r2_candle_all_off5", name: "あなた", text: "…何も見えない。", next: "r2_candle_all_off6" },
    { id: "r2_candle_all_off6", name: "あなた", text: "自分の手のひらが限界だ", next: "r2_candle_all_off7" },
    { id: "r2_candle_all_off7", name: "あなた", text: "みやー!!いるー?", next: "r2_candle_all_off8" },
    { id: "r2_candle_all_off8", name: "あなた", text: "ーーだめだ、返事が聞こえない。", next: "r2_candle_all_off9" },
    { id: "r2_candle_all_off9", name: "あなた", text: "この展開は、だいぶやばいのでは…?", next: "r2_candle_all_off10" },
    { id: "r2_candle_all_off10", name: "あなた", text: "そうはいっても、暗闇で動き回るのも危険な気もする…", next: "r2_candle_all_off11" },
    { id: "r2_candle_all_off11", name: "???", text: "…っ……っ……", next: "r2_candle_all_off12" },
    { id: "r2_candle_all_off12", name: "あなた", text: "…泣き声?", next: "r2_candle_all_off13" },
    { id: "r2_candle_all_off13", name: "あなた", text: "(なんとなく、みやの声に似てる…気がする。)",  next: "r2_candle_all_off14" },
    { id: "r2_candle_all_off14", name: "あなた", text: "(声を頼りに近づいてみるか…)",  next: "r2_candle_all_off15" },
    { id: "r2_candle_all_off15", name: "あなた", text: "みやー?どこにいるー?", next: "r2_candle_all_off16" },
    { id: "r2_candle_all_off16", name: "???", text: "…っ…っ……っ…", next: "r2_candle_all_off17" },
    { id: "r2_candle_all_off17", name: "あなた", text: "(相変わらず返事はないが…それでも、着実に声は大きくなってる)", next: "r2_candle_all_off18" },
    { id: "r2_candle_all_off18", name: "あなた", text: "みやーどこに…",  next: "r2_candle_all_off19" },
    { id: "r2_candle_all_off19", name: "あなた", text: "…!!",portrait:{ who:"みや_bad", face:"tear" }, next: "r2_candle_all_off20" },
    { id: "r2_candle_all_off20", name: "みや(?)", text: "…っ…っ……っ…", portrait:{ who:"みや_bad", face:"tear" }, next: "r2_candle_all_off21" },
    { id: "r2_candle_all_off21", name: "あなた", text: "(白い部屋であったみやが…泣いてる?)", portrait:{ who:"みや_bad", face:"tear" }, next: "r2_candle_all_off22" },
    { id: "r2_candle_all_off22", name: "あなた", text: "(髪はぼさぼさで、刃物を持っていることは変わらない…)",portrait:{ who:"みや_bad", face:"tear" }, next: "r2_candle_all_off23" },
    { id: "r2_candle_all_off23", name: "あなた", text: "(けど、目の前のみやは泣いている)", next: "r2_candle_all_off24" },
    { id: "r2_candle_all_off24", name: "あなた", text: "ど、どうしよう…", choices: [
        { label: "近づいて慰める", next: "r2_close_みや" },
        { label: "一回距離を置く", next: "r2_chase_みや" }] },
    
    { id: "r2_close_みや", name: "???", text: "君は優しいね。", next: "r2_candle_all_off25" },
    { id: "r2_chase_みや", name: "???", text: "ふーん、逃げちゃうんだ。", next: "r2_candle_all_off25" },

    { id: "r2_candle_all_off25",set:{bgm:"kirarasan"} , name: "あなた", text: "…!!…だ、誰!?", next: "r2_candle_all_off26" },
    { id: "r2_candle_all_off26", name: "???", text: "ふふっ…突然話しかけてごめんなさい。",overlay: { sprite: "./miya.mile.jpeg", withText: true ,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)"}, next: "r2_candle_all_off27" },
    { id: "r2_candle_all_off27", name: "???", text: "こんにちは。はじめまして。",overlay: { sprite: "./miya.ormal.jpeg", withText: true ,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)"}, next: "r2_candle_all_off28" },
    { id: "r2_candle_all_off28", name: "???", text: "あ、でも、ポスターを見てくれたなら、君は私をみたことあるかも。",overlay: { sprite: "./miya.ind.jpeg", withText: true ,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)"}, next: "r2_candle_all_off29" },
    { id: "r2_candle_all_off29", name: "あなた", text: "君はーー。",overlay: { sprite: "./miya.ind.jpeg", withText: true,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)" },next: "r2_candle_all_off30" },
    { id: "r2_candle_all_off30", name: "???", text: "私は、君の味方でも敵でもないの。だから、君のことを助けないし、殺しもしない。", overlay: { sprite: "./miya.ormal.jpeg", withText: true,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)" }, next: "r2_candle_all_off31" },
    { id: "r2_candle_all_off31", name: "???", text: "けれど、君に夢を与えることは出来るんだよ。", overlay: { sprite: "./miya.ind.jpeg", withText: true ,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)"}, next: "r2_candle_all_off32" },
    { id: "r2_candle_all_off32", name: "あなた", text: "(夢…?)",overlay: { sprite: "./miya.ind.jpeg", withText: true,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)" }, next: "r2_candle_all_off33" },
    { id: "r2_candle_all_off33", name: "???", text: "…君もその子も、私の大好きなヒト。",overlay: { sprite: "./miya.mile.jpeg", withText: true ,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)"}, next: "r2_candle_all_off34" },
    { id: "r2_candle_all_off34", name: "???", text: "ねぇ…もっと…", overlay: { sprite: "./miya.ormal.jpeg", withText: true,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)" },next: "r2_candle_all_off35" },
    { id: "r2_candle_all_off35", name: "???", text: "私を楽しませて?", overlay: { sprite: "./miya.ind.jpeg", withText: true ,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)"},next: "r2_candle_all_off36" },
    { id: "r2_candle_all_off36",stopBgm:true, name: "あなた", text: "…!!!!", se:"magic",set: { bg: "./ninoma.png" }, next: "r2_candle_all_off37" },
    { id: "r2_candle_all_off37", name: "あなた", text: "今の音…ってあれ?", next: "r2_candle_all_off38" },
    { id: "r2_candle_all_off38", name: "あなた", text: "(蠟燭の明かりが…戻ってる…?)", next: "r2_candle_all_off39" },
    { id: "r2_candle_all_off39", name: "みや", text: "…あれ?明かりが…",portrait:{ who:"みや", face:"fear" }, next: "r2_candle_all_off40" },
    { id: "r2_candle_all_off40", name: "あなた", text: "みや!!大丈夫だった…?", next: "r2_candle_all_off41" },
    { id: "r2_candle_all_off41", name: "みや", text: "はい…ずっと暗闇を彷徨ってましたが…",portrait:{ who:"みや", face:"kind" }, next: "r2_candle_all_off42" },
    { id: "r2_candle_all_off42", name: "みや", text: "明かりが戻ってますね…?",portrait:{ who:"みや", face:"fear" }, next: "r2_candle_all_off43" },
    { id: "r2_candle_all_off43", name: "あなた", text: "そうだね…一体どうして…?", portrait:{ who:"みや", face:"fear" },next: "r2_candle_all_off44" },
    { id: "r2_candle_all_off44", name: "みや", text: "…って、あれ!見てください!!", portrait:{ who:"みや", face:"normal" },next: "r2_candle_all_off45" },
    { id: "r2_candle_all_off45", name: "みや", text: "三味線ケースが…開いてます!!", portrait:{ who:"みや", face:"smile" },next: "r2_candle_all_off46" },
    { id: "r2_candle_all_off46", name: "あなた", text: "本当だ…!!でも、正しい番号を入力することが条件じゃなかったっけ…", next: "r2_candle_all_off47" },
    { id: "r2_candle_all_off47", name: "", text: "(「けれど、君に夢を与えることは出来るの。」)", next: "r2_candle_all_off48" },
    { id: "r2_candle_all_off48", name: "あなた", text: "(まさか…これが、夢?)", next: "r2_candle_all_off49" },
    { id: "r2_candle_all_off49", name: "あなた", text: "(いや、彼女がやったとしてもどうやって…)", next: "r2_candle_all_off50" },
    { id: "r2_candle_all_off50", name: "あなた", text: "(いや、考えた所で分からないだろう。なら、目先のことをやるべきだ。)", next: "r2_candle_all_off51" },
    { id: "r2_candle_all_off51", name: " ", text: "一先ず、三味ケースの中をみてみよう。", set: { flags:["r2_candle_backup"] }, next: "r2_hub" },

    // ===== 正解の番号( 437) =====
    { id: "r2_code_ 437", name: " ", text: "カチ、カチ、カチ……", next: "r2_code_ 437_unlock2" },
    { id: "r2_code_ 437_unlock2", name: " ", text: "カチャン。",se:"unlocked", next: "r2_code_ 437_unlock3" },
    { id: "r2_code_ 437_unlock3", name: " ", text: "小さく、確かな解錠音。",nextIfFlags: [
        { flags: ["r2_candle2_off"], next: "r2_candles_relight" },
        { flags: [], next: "r2_open_normal" }
      ], next: "r2_open_normal" },

    // ろうそく再点灯
    { id: "r2_candles_relight2", name: " ", text: "ボッ、ボッ、ボッ…",se:"delete_fire", next: "r2_candles_relight3" },
    { id: "r2_candles_relight3", name: "あなた", text: "ろうそくが戻った…!", next: "r2_candles_relight4" },
    { id: "r2_candles_relight4", name: "みや", text: "ですね...!!良かった…", portrait:{ who:"みや", face:"smile" }, next: "r2_candles_relight5" },
    { id: "r2_candles_relight5", name: "みや", text: "それに、ケースも開いてます!!", portrait:{ who:"みや", face:"kind" },next: "r2_candles_relight6" },
    { id: "r2_candles_relight6", name: "あなた", text: "中を確認してみるか", next: "r2_open_case" },

    // 通常オープン
    { id: "r2_open_normal", name: "みや", text: "開きました…!", portrait:{ who:"みや", face:"smile" }, next: "r2_open_normal2" },
    { id: "r2_open_normal2", name: "あなた", text: "やった!!", portrait:{ who:"みや", face:"kind" }, next: "r2_open_case" },

    // ケース内確認
    { id: "r2_open_case", name: " ", text: "ケースの中を恐る恐る覗く…", next: "r2_open_case2" },
    { id: "r2_open_case2", name: "みや", text: "三味線が…",portrait:{ who:"みや", face:"normal" }, next: "r2_open_case3" },
    { id: "r2_open_case3", name: "あなた", text: "ない!", next: "r2_open_case4" },
    { id: "r2_open_case4", set:{bgm:"forgot"} ,name: "みや", text: "空の三味線ケースだった...ということでしょうか?",portrait:{ who:"みや", face:"confuse" }, next: "r2_open_case5" },
    { id: "r2_open_case5", name: "あなた", text: "三味線を包む布はあるけど、三味線特有の膨らみがないね…", next: "r2_open_case6" },
    { id: "r2_open_case6", name: "あなた", text: "じゃあ、なおさらなんでこんなところに三味ケースがあるんだ…?", next: "r2_open_case7" },
    { id: "r2_open_case7", name: "みや", text: "…あれ?ちょっと待ってください!布の中になにか入ってます!",portrait:{ who:"みや", face:"normal" }, next: "r2_open_case8" },
    { id: "r2_open_case8", name: "あなた", text: "これは…液体の入った瓶と本?", next: "r2_open_case9" },
    { id: "r2_open_case9", name: "みや", text: "箏の部屋にも液体の入った瓶がありましたよね。", overlay: { sprite: "./RED.png", withText: true }, next: "r2_open_case10" },
    { id: "r2_open_case10", name: "あなた", text: "うん。さっきは緑だったけど、今度は赤色だ。", overlay: { sprite: "./RED.png", withText: true }, portrait:{ who:"みや", face:"normal" }, next: "r2_open_case11" },
    { id: "r2_open_case11", name: "あなた", text: "さらに毒々しくなってないか…?",  overlay: { sprite: "./RED.png", withText: true },next: "r2_open_case12" },
    { id: "r2_open_case12", name: "みや", text: "...もしかしたら、部屋ごとにこの瓶を集めていくんじゃないですか?", portrait:{ who:"みや", face:"normal" },next: "r2_open_case13" },
    { id: "r2_open_case13", name: "みや", text: "とはいっても、集めたあとにどうするのか分かっていないですけど…", portrait:{ who:"みや", face:"confuse" },next: "r2_open_case14" },
    { id: "r2_open_case14", name: "あなた", text: "なるほど…確かにありえそうだ。",next: "r2_open_case15" },
    { id: "r2_open_case15", name: "あなた", text: "さっきも瓶を取ったあとに白いに戻ったら、ここの鍵が開いてたもんね", next: "r2_open_case16" },
    { id: "r2_open_case16", name: "あなた", text: "もしかしたら、この瓶が次の部屋が開くトリガーなのかもしれない。", next: "r2_open_case17" },
    { id: "r2_open_case17", name: "みや", text: "ある程度調べ終わったら、白い部屋に戻ってみませんか?",portrait:{ who:"みや", face:"normal" }, next: "r2_open_case18" },
    { id: "r2_open_case18", name: "みや", text: "何か変わっているかもしれません。",portrait:{ who:"みや", face:"kind" }, next: "r2_open_case19" },
    { id: "r2_open_case19", name: "あなた", text: "そうだね。",portrait:{ who:"みや", face:"kind" }, next: "r2_open_case20" },
    { id: "r2_open_case20", name: "あなた", text: "(次の部屋の探索が終わったら、何か変わるのだろうか?)", next: "r2_open_case21" },
    { id: "r2_open_case21", name: "あなた", text: "(早く脱出できるといいけど…)", next: "r2_open_case22" },
    { id: "r2_open_case22", name: " ", text: "情報:『液体の入った瓶(赤)』『本』を手に入れた!", se: "infomation", set: { flags:["Red","r2_case_open"],info:["drink_red","shizuku_ni"] }, next: "r2_hub" },

    // 三味ケースを開けた後
    { id: "r2_finish_code_hub", name: "あなた", text: "目の前には開かれた三味ケースがある。", choices: [
        { label: "三味ケースを調べる", next: "r2_opened_boxes" },
        { label: "瓶を調べる", next: "r2_bottle", nextRepeat:"r2_bottle_again" },
        { label: "本を調べる", next: "r2_read_rain", nextRepeat:"r2_read_rain_again" },
        { label: "戻る", next: "r2_hub" }
      ] },

    { id: "r2_opened_boxes", name: "みや", text: "うーん…ちゃんと探しても三味線はないですね…", next: "r2_opened_boxes2" },
    { id: "r2_opened_boxes2", name: "あなた", text: "ちゃんと、というか、あったら絶対分かるんだけどね。", next: "r2_opened_boxes3" },
    { id: "r2_opened_boxes3", name: "あなた", text: "(なんで、三味線ケースにしたんだ…?)", next: "r2_hub" },
   
    // ===== 古文書『雨ノ章』 =====
    { id: "r2_read_rain", name: "みや", text: "その本は…三味線のケースの中にあった本ですか?",overlay: { sprite: "./chiisanashizuku_ni.png", withText: true }, next: "r2_read_rain2" },
    { id: "r2_read_rain2", name: "あなた", text: "うん。ちゃんと読んでおこうと思って。", overlay: { sprite: "./chiisanashizuku_ni.png", withText: true },next: "r2_read_rain3" },
    { id: "r2_read_rain3", name: "あなた", text: "えっと、タイトルは…『小さな雫 -弐-』", overlay: { sprite: "./chiisanashizuku_ni.png", withText: true },next: "r2_read_rain4" },
    { id: "r2_read_rain4", name: "みや", text: "…弐?壱じゃないんですね", overlay: { sprite: "./chiisanashizuku_ni.png", withText: true },next: "r2_read_rain5" },
    { id: "r2_read_rain5", name: "あなた", text: "壱は箏の部屋にあったんだ。", overlay: { sprite: "./chiisanashizuku_ni.png", withText: true },next: "r2_read_rain6" },
    { id: "r2_read_rain6", name: "あなた", text: "(話が途中で終わってたから、続きが気になっていたんだけど…こんなところにあったとは…)", next: "r2_read_rain7" },
    { id: "r2_read_rain7", name: "あなた", text: "(早速読んでみるか)", next: "r2_read_rain8" },
    { id: "r2_read_rain8", name: " ", text: "", se:"paper", next: "r2_read_rain9" },
    { id: "r2_read_rain9", name: " ", text: "『次の日、少女はお母さまを助けるため、隣町へ出かけていきました。』",  next: "r2_read_rain10" },
    { id: "r2_read_rain10", name: " ", text: "『隣町へ行くためには大きな山を登らなければなりません。』",  next: "r2_read_rain11" },
    { id: "r2_read_rain11", name: " ", text: "『急な傾もあり、大人でさえ大変な道のりです。』", next: "r2_read_rain12" },
    { id: "r2_read_rain12", name: " ", text: "『しかし、少女は、「これで、お母さまが助けられるかもしれない!」と思うと、不思議なことに、疲れが全部吹っ飛んでしまうのです。』",  next: "r2_read_rain13" },
    { id: "r2_read_rain13", name: " ", text: "『心優しい旅人は少女にあらかじめ地図を渡していました。』",  next: "r2_read_rain14" },
    { id: "r2_read_rain14", name: " ", text: "『少女は、その地図を頼りに隣町まで足をはこびます。』",  next: "r2_read_rain15" },
    { id: "r2_read_rain15", name: " ", text: "『しかし、あとちょっとの所で、少女にビューと強い風が襲い掛かりました。』",  next: "r2_read_rain16" },
    { id: "r2_read_rain16", name: " ", text: "『「きゃー」少女は悲鳴をあげるのと同時に、地図を手放してしまいました。』", next: "r2_read_rain17" },
    { id: "r2_read_rain17", name: " ", text: "『風は少女が手放した地図をまるで自分のものだというように、どんどん少女から離していきます。』",  next: "r2_read_rain18" },
    { id: "r2_read_rain18", name: " ", text: "『「いけない、風さんが地図を持って行ってしまった!早く追いかけないと!」少女は大慌てで地図を追いかけます。』", next: "r2_read_rain19" },
    { id: "r2_read_rain19", name: " ", text: "『しかし、隣町までの道のりは山の中。地図との距離はどんどんと離れていき、遂には見失ってしまいました。』",next: "r2_read_rain20" },
    { id: "r2_read_rain20", name: " ", text: "『「困ったわ...どうしましょう」少女は困り果ててしまいました。地図が無ければ、隣町へ行くことができません。』", next: "r2_read_rain21" },
    { id: "r2_read_rain21", name: " ", text: "『「誰かいないかしら?」少女は助けを求めるため、辺りに人がいないかを見渡します。』",  next: "r2_read_rain22" },
    { id: "r2_read_rain22", name: " ", text: "『人を探ししばらく経った後、少女は木々に囲まれてぽつんと立っている小さな家を見つけました。』", next: "r2_read_rain23" },
    { id: "r2_read_rain23", name: "あなた", text: "…これで終わりだ。",  next: "r2_read_rain24" },
    { id: "r2_read_rain24", name: "みや", text: "続きがあるかのような終わり方ですね…", portrait:{ who:"みや", face:"normal" }, next: "r2_read_rain25" },
    { id: "r2_read_rain25", name: "あなた", text: "もしかしたら参、肆...があるのかもしれないね。", portrait:{ who:"みや", face:"normal" }, next: "r2_read_rain26" },
    { id: "r2_read_rain26", name: "あなた", text: "(壱が箏の部屋、弐が三味線の部屋にあった。)",  next: "r2_read_rain27" },
    { id: "r2_read_rain27", name: "あなた", text: "(もし参があるとしたら、次の部屋にあるかもしれないな。)", next: "r2_read_rain28" },
    { id: "r2_read_rain28", name: " ", text: "情報:『小さな雫 -弐-』を手に入れた!", se: "infomation", set: { infoNotes:["shizuku_ni:content"] }, portrait:{ who:"みや", face:"normal" }, next: "r2_hub" },

    { id: "r2_read_rain_again", name: " ", text: "もう一度、『小さな雫 -弐-』を読む?", 
      choices: [
        { label: "読む", next: "r2_read_rain9" },
        { label: "やめておく", next: "r2_finish_code_hub" }
      ]
    },

    // 瓶確認
    { id: "r2_bottle", name: "あなた", text: "やっぱり毒々しい色をしている。", overlay: { sprite: "./RED.png", withText: true }, next: "r2_bottle2" },
    { id: "r2_bottle2", name: "あなた", text: "(これを使うったって、どうやって使うんだ?)", next: "r2_bottle3" },
    { id: "r2_bottle3", name: "みや", text: "うーん…", portrait:{ who:"みや", face:"confuse" }, next: "r2_bottle4" },
    { id: "r2_bottle4", name: "あなた", text: "そんなに悩んで、どうしたの?", portrait:{ who:"みや", face:"confuse" }, next: "r2_bottle5" },
    { id: "r2_bottle5", name: "みや", text: "あの…どこからか音が聞こえませんか?",  portrait:{ who:"みや", face:"normal" },next: "r2_bottle6" },
    { id: "r2_bottle6", name: "あなた", text: "音?どんな?", portrait:{ who:"みや", face:"normal" }, next: "r2_bottle7" },
    { id: "r2_bottle7", name: "みや", text: "弦を弾く…感じですかね。私の気のせいかもしれないですけど…",  portrait:{ who:"みや", face:"fear" },next: "r2_bottle8" },
    { id: "r2_bottle8", name: "あなた", text: "(あれ…この流れどっかであった気がするぞ?)", portrait:{ who:"みや", face:"fear" }, next: "r2_bottle9" },
    { id: "r2_bottle9", name: "あなた", text: "…し、視線じゃなくて?", portrait:{ who:"みや", face:"fear" }, next: "r2_bottle10" },
    { id: "r2_bottle10", name: "みや", text: "視線じゃないです!それにさっきよりも悪意みたいなの感じにくいですし…", portrait:{ who:"みや", face:"confuse" }, next: "r2_bottle11" },
    { id: "r2_bottle11", name: "あなた", text: "(みやは反応しなかったけど、自分は金縛りにあったんだよな…)", portrait:{ who:"みや", face:"confuse" }, next: "r2_bottle12" },
    { id: "r2_bottle12", name: "みや", text: "とにかく、一回耳を立ててみてください!絶対聞こえるはずです!!", portrait:{ who:"みや", face:"kind" }, next: "r2_bottle13" },
    { id: "r2_bottle13", name: "あなた", text: "えぇ…、わかったよ…", portrait:{ who:"みや", face:"kind" }, next: "r2_bottle14" },
    { id: "r2_bottle14", name: " ", text: "", se:"sanngenn", next: "r2_bottle15" },
    { id: "r2_bottle15", name: "あなた", text: "…本当だ、音が聞こえる。",  next: "r2_bottle16" },
    { id: "r2_bottle16", name: "みや", text: "ほら!やっぱり!", portrait:{ who:"みや", face:"smile" }, next: "r2_bottle17" },
    { id: "r2_bottle17", name: "あなた", text: "…しかもこれ、三味線の音だ。", portrait:{ who:"みや", face:"smile" }, next: "r2_bottle18" },
    { id: "r2_bottle18", name: "みや", text: "なるほど…でもどこから鳴っているんでしょう…?この部屋に来たときは鳴っていなかったと思います。", portrait:{ who:"みや", face:"normal" }, next: "r2_bottle19" },
    { id: "r2_bottle19", name: "あなた", text: "この音の発生源は…", 
      choices: [
        { label: "三味線の壁画", next: "r2_hazure" },
        { label: "液体の入った瓶", next: "r2_bottle21" },
        { label: "ぬいぐるみ", next: "r2_hazure" },
        { label: "鳥籠の中", next: "r2_hazure" }] },

    { id: "r2_hazure", name: "みや", text: "流石に…それは…違くないですか?", portrait:{ who:"みや", face:"fear" }, next: "r2_hazure2" },
    { id: "r2_hazure2", name: "みや", text: "耳を当てても聞こえないです", portrait:{ who:"みや", face:"confuse" }, next: "r2_hazure3" },
    { id: "r2_hazure3", name: "あなた", text: "(うっ…確かに、耳を当てても聞こえない)",  next: "r2_hazure4" },
    { id: "r2_hazure4", name: "あなた", text: "(もう一度考えてみよう)",next: "r2_bottle19" },
    
    { id: "r2_bottle21", name: "あなた", text: "この液体の入った瓶から…じゃないか?", next: "r2_bottle22" },
    { id: "r2_bottle22", name: "みや", text: "これ…ですか?ちょっと借りてもいいですか?", portrait:{ who:"みや", face:"normal" }, next: "r2_bottle23" },
    { id: "r2_bottle23", name: "あなた", text: "勿論!どうぞ。", portrait:{ who:"みや", face:"normal" }, next: "r2_bottle24" },
    { id: "r2_bottle24", name: "みや", text: "…!これです!私が聞こえた音!", portrait:{ who:"みや", face:"smile" }, next: "r2_bottle25" },
    { id: "r2_bottle25", name: "あなた", text: "よかった…", portrait:{ who:"みや", face:"smile" }, next: "r2_bottle26" },
    { id: "r2_bottle26", name: "あなた", text: "(部屋に入ってから聞いてないってことは、部屋に入った時にはそこになかったか、遠隔で操作されているか、)", portrait:{ who:"みや", face:"normal" }, next: "r2_bottle27" },
    { id: "r2_bottle27", name: "あなた", text: "(あるいは、音が聞こえないような環境に置かれているか。)", portrait:{ who:"みや", face:"normal" }, next: "r2_bottle28" },
    { id: "r2_bottle28", name: "あなた", text: "三味ケースって分厚いから小さい音なら聞こえなくなるのかな…って思って。", portrait:{ who:"みや", face:"normal" }, next: "r2_bottle29" },
    { id: "r2_bottle29", name: "みや", text: "なるほど…流石です!", portrait:{ who:"みや", face:"kind" }, next: "r2_bottle30" },
    { id: "r2_bottle30", name: "みや", text: "でも、液体瓶から音…ということは?", portrait:{ who:"みや", face:"normal" }, next: "r2_bottle31" },
    { id: "r2_bottle31", name: "あなた", text: "箏の部屋で手に入った瓶も聞こえるんじゃないか…であってる?", portrait:{ who:"みや", face:"normal" }, next: "r2_bottle32" },
    { id: "r2_bottle32", name: "みや", text: "…お見事!!完全に読まれてしまいましたね。", portrait:{ who:"みや", face:"smile" }, next: "r2_bottle33" },
    { id: "r2_bottle33", name: "あなた", text: "試しにきいてみよっか...",next: "r2_bottle34" },
    { id: "r2_bottle34", name: " ", text: "",se:"KT", next: "r2_bottle35" },
    { id: "r2_bottle35", name: "みや", text: "これも音が聞こえます…!!", portrait:{ who:"みや", face:"smile" }, next: "r2_bottle36" },
    { id: "r2_bottle36", name: "あなた", text: "これは…箏の音…かな?", portrait:{ who:"みや", face:"normal" }, next: "r2_bottle37" },
    { id: "r2_bottle37", name: "あなた", text: "(さっきの部屋は箏を弾いて、箏の音が聞こえる瓶を手に入れた。)" , next: "r2_bottle38" },
    { id: "r2_bottle38", name: "あなた", text: "(そして今回、三味線の音が鳴る瓶を手に入れた。)",next: "r2_bottle39" },
    { id: "r2_bottle39", name: "あなた", text: "(なにか関係があるのか…?)",next: "r2_bottle40" },
    { id: "r2_bottle40", name: "みや", text: "やっぱり流石ですね…私も、もっと頑張らないと…!!", portrait:{ who:"みや", face:"kind" }, next: "r2_bottle41" },
    { id: "r2_bottle41", name: "あなた", text: "(役に立った感じがして、ちょっと嬉しい…)", portrait:{ who:"みや", face:"kind" }, next: "r2_bottle42" },
    { id: "r2_bottle42", name: " ", text: "情報:『謎の液体(赤)』の内容が更新されました!",se: "infomation",  portrait:{ who:"みや", face:"normal" }, 
      set: { flags:["shamisenn"], infoNote:["drink_red:shami_song"] }, next: "r2_hub" },

    { id: "r2_bottle_again", name: " ", text: "赤い液体から三味線の音が聞こえる。",next: "r2_bottle_again2" },
    { id: "r2_bottle_again2", name: "あなた", text: "色は毒々しいけど、音だけ聞くとすごく綺麗なんだよな。",  next: "r2_finish_code_hub" },
   
    // ===== みやとの雑談 =====
    { id: "r2_talking", name: "あなた", text: "そういえばみやって、暗い所って平気なの?",  next: "r2_talking2" },
    { id: "r2_talking2", name: "みや", text: "暗いところは大丈夫ですよ", portrait:{ who:"みや", face:"normal" }, next: "r2_talking3" },
    { id: "r2_talking3", name: "みや", text: "一体どうして、そんなこと…?", portrait:{ who:"みや", face:"confuse" }, next: "r2_talking4" },
    { id: "r2_talking4", name: "あなた", text: "いや、閉所恐怖症とかありえるじゃん。", portrait:{ who:"みや", face:"confuse" }, next: "r2_talking5" },
    { id: "r2_talking5", name: "あなた", text: "もしみやが、何か抱えてて、忘れていたりしたら、大丈夫かな…っていう", portrait:{ who:"みや", face:"confuse" }, next: "r2_talking6" },
    { id: "r2_talking6", name: "みや", text: " 成程…!心配してくれてありがとうございます。", portrait:{ who:"みや", face:"kind" }, next: "r2_talking7" },
    { id: "r2_talking7", name: "あなた", text: "それならよかったよ。", portrait:{ who:"みや", face:"kind" }, next: "r2_talking8" },
    { id: "r2_talking8", name: "あなた", text: "…ん?さっき「暗い所”は”」って言ったよね?。", portrait:{ who:"みや", face:"kind" }, next: "r2_talking9" },
    { id: "r2_talking9", name: "あなた", text: "もしかして、何か他で苦手なことでも…?", portrait:{ who:"みや", face:"kind" }, next: "r2_talking10" },
    { id: "r2_talking10", name: "みや", text: "あはは…よく気づきましたね。", portrait:{ who:"みや", face:"normal" }, next: "r2_talking11" },
    { id: "r2_talking11", name: "みや", text: "私、ただ暗いだけなら大丈夫なんですけど…", portrait:{ who:"みや", face:"confuse" }, next: "r2_talking12" },
    { id: "r2_talking12", name: "みや", text: "こういう場所とか特に…出そうだな…と", portrait:{ who:"みや", face:"fear" }, next: "r2_talking13" },
    { id: "r2_talking13", name: "あなた", text: "出そう…?", portrait:{ who:"みや", face:"fear" }, next: "r2_talking14" },
    { id: "r2_talking14", name: "みや", text: "その...お、お化けが…", portrait:{ who:"みや", face:"confuse" }, next: "r2_talking15" },
    { id: "r2_talking15", name: "あなた", text: "な、なるほど…", portrait:{ who:"みや", face:"confuse" }, next: "r2_talking16" },
    { id: "r2_talking16", name: "あなた", text: "(みやがお化け苦手なの、ちょっと意外かも…)", portrait:{ who:"みや", face:"confuse" }, next: "r2_talking17" },
    { id: "r2_talking17", name: "みや", text: "…今、馬鹿にしましたか…?", portrait:{ who:"みや", face:"fear" }, next: "r2_talking18" },
    { id: "r2_talking18", name: "あなた", text: "してないしてない!!みやの思い込みだよ…!!", portrait:{ who:"みや", face:"fear" }, next: "r2_talking19" },
    { id: "r2_talking19", name: "あなた", text: "(ま…でも、記憶がないことよりもお化けにビビるのか…とは、ちょっと思った。)", next: "r2_hub" },
  ]
};
   
   
   
   
   
  