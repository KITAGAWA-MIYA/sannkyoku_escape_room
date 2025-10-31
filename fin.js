// 小説データ:白い部屋(導入)版
// これを script.js として保存し、HTMLで window.js より前に読み込む
window.STORY_FIN = {
  meta: { areaName: "白い部屋" },
  chars:{
    みや:{ 
      defaultSize:"500px", 
      defaultX:"50%", 
      defaultY:"43%", 
      faces:{ 
        normal:"miya.normal.jpg", 
        smile:"miya.smile.jpg", 
        kind:"miya.kind.jpg", 
        fear:"miya.fear.jpg", 
        confuse:"miya.confuse.jpg"
      }
    },
    みや_bad:{ 
      defaultSize:"500px", 
      defaultX:"50%", 
      defaultY:"43%",
      faces:{ 
        normal:"miya.狂.jpg", 
        angry:"miya.angry.狂.jpg", 
        tear:"miya.tear.狂.jpg", 
        smile:"miya.smile.狂.jpg"
      } 
    }
  },

  // 章固有の情報(情報タブで表示)
  info: {
    fin_book_story: { 
      title: "『小さな雫 -最終話-』", icon: "./chiisanashizuku_fin.png", image: "./chiisanashizuku_fin.png",
      desc: "少女がお母さまを助けるために薬を作るお話。", 
      area: "白い部屋" 
    },
    R_look_book1: { 
      title: "小さな雫【表紙】", 
      desc: "壱の表紙が赤、弐の表紙が青、参の表紙が緑、最後の表紙が青…なにか意味がありそうだ。", 
      area: "白い部屋" 
    },
    fin_photograph: {
      title: "机の上の写真立て",icon: "./shashinntate.png", image: "./shashinntate.png",
      desc: "白髪の可愛らしい女の子が映っている。"
    },
    fin_brown_bou: {
      title: "棒",icon: "./bou.png", image: "./bou.png",
      desc: "机の上に置かれた棒。"
    },
    fin_otegami: {
      title: "お手紙",icon: "./otegami.png", image: "./otegami.png",
      desc: "二人とも頑張っているようで嬉しい!決して音楽を独り占めしないこと。3種類の音が混ざり合って、君達二人で演奏するの。演奏、楽しみにしてるね。"
    }
  },

  nodes: [
    // ===== 傍ノ間:導入 =====

    { id: "fin_from_r3", name: " ", set: { bg: "./shiroima.png" }, text: "......", next: "fin_from_r3_2" },
    { id: "fin_from_r3_2", name: "あなた", text: "あれ…?", next: "fin_from_r3_3" },
    { id: "fin_from_r3_3", name: "あなた", text: "この部屋…こんな感じだったっけ…?", next: "fin_from_r3_4" },
    { id: "fin_from_r3_4", name: "みや", text: "いや…違ったと思います。",portrait:{ who:"みや", face:"confuse", size:"500px" },  next: "fin_from_r3_5" },
    { id: "fin_from_r3_5", name: "みや", text: "家具は机しかなかったはずですし…", portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_from_r3_6" },
    { id: "fin_from_r3_6", name: "みや", text: "脱出に向けて着実に進んでるってことでしょうか…?",portrait:{ who:"みや", face:"kind", size:"500px" },  next: "fin_from_r3_7" },
    { id: "fin_from_r3_7", name: " ", text: "ピーンポーンパーンポーン",se:"bell", next: "fin_from_r3_8" },
    { id: "fin_from_r3_8", name: "あなた", text: "チャイムが…なった?", next: "fin_from_r3_9" },
    { id: "fin_from_r3_9", name: "みや", text: "この部屋スピーカーないですよね…",portrait:{ who:"みや", face:"confuse", size:"500px" },  next: "fin_from_r3_10" },
    { id: "fin_from_r3_10", name: " ", text: "『ご来場の皆様にお知らせでございます。』", next: "fin_from_r3_11" },
    { id: "fin_from_r3_11", name: " ", text: "『まもなく、舞台の開演時間でございます。』", next: "fin_from_r3_12" },
    { id: "fin_from_r3_12", name: " ", text: "『観客の皆様は席にお着き頂き、そのままお待ちください。』", next: "fin_from_r3_13" },
    { id: "fin_from_r3_13", name: " ", text: "『そして、演者の方はご準備をお願い致します。』", next: "fin_from_r3_14" },
    { id: "fin_from_r3_14", name: "あなた", text: "観客…役者…", next: "fin_from_r3_15" },
    { id: "fin_from_r3_15", name: "あなた", text: "(最初のメモを思い出すな…)", next: "fin_from_r3_16" },
    { id: "fin_from_r3_16", name: "みや", text: "準備…もしかして…最後の謎解きでしょうか…?", portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "fin_from_r3_17" },
    { id: "fin_from_r3_17", name: "あなた", text: "今までの情報を見返す必要がありそうだ…", next: "fin_from_r3_18" },
    { id: "fin_from_r3_18", name: "あなた", text: "(場合によっては、他の部屋に移動することも必要かもしれない。)", set: { flags: ["fin_started"]},next: "fin_hub" },
   
    // ===== 探索(傍の間) =====
    { 
      id: "fin_hub",
      ui: { silent: true },
      explore: {
        spots: [
          { id: "fin_book", x: "33%", y: "90%", size: "48px", icon: "./kirakira.png", next: "fin_look_book", nextRepeat: "fin_look_book_again" },
          { id: "fin_saidann", x: "50%", y: "40%", size: "48px", icon: "./kirakira.png", next: "fin_look_saidann", nextRepeat: "fin_look_saidann_again" },
          { id: "fin_ichinoma", x: "18%", y: "20%", size: "48px", icon: "./kirakira.png", next: "fin_look_ichinoma" },
          { id: "fin_ninoma", x: "40%", y: "12%", size: "48px", icon: "./kirakira.png", next: "fin_look_ninoma"},
          { id: "fin_sannoma", x: "83%", y: "30%", size: "48px", icon: "./kirakira.png", next: "fin_look_sannnoma"}
        ],
        talk: { sprite: "./miya.stand.jpg", x: "72%", y: "72%", size: "501px", next: "fin_talk1" }
      }
    },

    // 『小さな雫 -最終話-』
    { id: "fin_look_book", name: " ", text: "床には本が落ちている", overlay: { sprite: "./chiisanashizuku_fin.png", withText: true }, next: "fin_look_book2" },
    { id: "fin_look_book2", name: " ", text: "『小さな雫 -最終話-』",  overlay: { sprite: "./chiisanashizuku_fin.png", withText: true },next: "fin_look_book3" },
    { id: "fin_look_book3", name: "みや", text: "これで、最後ですね…",  overlay: { sprite: "./chiisanashizuku_fin.png", withText: true },next: "fin_look_book4" },
    { id: "fin_look_book4", name: "あなた", text: "読んでみるか…",  overlay: { sprite: "./chiisanashizuku_fin.png", withText: true },next: "fin_look_book5" },
    { id: "fin_look_book5", name: " ", text: "本を開いた。",se:"paper", next: "fin_look_book6" },
    { id: "fin_look_book6", name: " ", text: "『家に帰った少女は早速お母さまへ薬を作ることにしました。』", next: "fin_look_book7" },
    { id: "fin_look_book7", name: " ", text: "『お母さまからもらった大事なエプロンをつけ、キッチンからボウルを持ってきます。』", next: "fin_look_book8" },
    { id: "fin_look_book8", name: " ", text: "『「お母さまのためだもの!よく効く薬を作ってあげましょ!」少女はやる気十分です。』", next: "fin_look_book9" },
    { id: "fin_look_book9", name: " ", text: "『まず初めに、少女はボウルの中に「べべーん」と音が鳴る液体を注ぎます。』", next: "fin_look_book10" },
    { id: "fin_look_book10", name: " ", text: "『次に、「ぽーん」と音が鳴る液体を注いで混ぜます。薬は2つの音が混ざり合って、素敵なハーモニーを奏で始めます。』", next: "fin_look_book11" },
    { id: "fin_look_book11", name: " ", text: "『そして、「ぶうぉーん」と音が鳴る液体を注ぎます。この時、一度に全て混ぜるのではなく、二回に分けて注ぎます。』", next: "fin_look_book12" },
    { id: "fin_look_book12", name: " ", text: "『全ての液体を混ぜ合わせ、ボウルの中で三重奏を始めたら、魔女様秘蔵の「魔法のお薬」の完成です。』", next: "fin_look_book13" },
    { id: "fin_look_book13", name: " ", text: "『「凄い…綺麗だ!!これでお母さまもきっとよくなるはず…!!」』", next: "fin_look_book14" },
    { id: "fin_look_book14", name: " ", text: "『少女は早速、お母さまに自分の作った薬を飲ませました。』", next: "fin_look_book15" },
    { id: "fin_look_book15", name: " ", text: "『「早く元気になあれ!」』", next: "fin_look_book16" },
    { id: "fin_look_book16", name: " ", text: "『少女はお母さまが良くなるのを、いつまでも、いつまでも待ち続けたのでした。』", next: "fin_look_book17" },
    { id: "fin_look_book17", name: " ", text: "『-終-』", next: "fin_look_book18" },
    { id: "fin_look_book18", name: "あなた", text: "…え?終わり…?", next: "fin_look_book19" },
    { id: "fin_look_book19", name: "みや", text: "お母さまがどうなったか分からないのが…後味が悪いというか…",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "fin_look_book20" },
    { id: "fin_look_book20", name: "あなた", text: "(この物語の作家は、一体どういう想いでこの絵本を描いたんだ…?)", next: "fin_look_book21" },
    { id: "fin_look_book21", name: " ", text: "情報:『小さな雫 -最終話-』を手に入れた!",se: "infomation",  set: { flags: ["fin_book"], info: ["fin_book_story"] }, next: "fin_hub" },

    { id: "fin_look_book_again", name: "みや", text: "『小さな雫 -最終話-』だ。", choices: [
        { label: "もう一回読み直す", next: "fin_look_book5" },
        { label: "戻る", next: "fin_hub" },
        { label: "表紙をよく見てみる", next: "fin_look_book_again2", requires: { flags: ["fin_book","megane","r2_case_open","r3_chiisanashizuku_san"] } },
    ]},
    { id: "fin_look_book_again2", name: "あなた", text: "元が結構短いストーリーなのに、どうしてこんなにストーリーが細かく区切られているんだ…?", next: "fin_look_book_again3" },
    { id: "fin_look_book_again3", name: "あなた", text: "しかも表紙の色全部違うし…", next: "fin_look_book_again4" },
    { id: "fin_look_book_again4", name: "あなた", text: "…ん?待てよ?", next: "fin_look_book_again5" },
    { id: "fin_look_book_again5", name: "あなた", text: "壱の表紙の色は、赤…だよな?", next: "fin_look_book_again6" },
    { id: "fin_look_book_again6", name: "あなた", text: "それで、弐の表紙が青、参の表紙が緑、最後の表紙が青…", next: "fin_look_book_again7" },
    { id: "fin_look_book_again7", name: "あなた", text: "これ、集まった液体瓶の色と同じじゃないか…?", next: "fin_look_book_again8" },
    { id: "fin_look_book_again8", name: "あなた", text: "何か関係しているのか…?", next: "fin_look_book_again9" },
    { id: "fin_look_book_again9", name: " ", text: "情報:『小さな雫、表紙』を手に入れた!",se: "infomation",  set: { flags: ["fin_book_covering"], info: ["R_look_book1"] }, next: "fin_hub" },

    // 祭壇(二回目以降)
    { id: "fin_look_saidann", name: "あなた", text: "机の上には色々な物が置かれている。", next: "fin_look_saidann2" },
    { id: "fin_look_saidann2", name: "あなた", text: "最初来た時、こんなもの置かれていなかったですよね…",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "fin_look_saidann3" },
    { id: "fin_look_saidann3", name: "あなた", text: "うん。机だけだったはず…", portrait:{ who:"みや", face:"confuse", size:"500px" },next: "fin_look_saidann4" },
    { id: "fin_look_saidann4", name: "あなた", text: "私達がこの部屋を離れている間に一体何が……",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "fin_look_saidann5" },
    { id: "fin_look_saidann5", name: "あなた", text: "とりあえず、机に何があるか確認してみよう。",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "fin_look_saidann6" },
    { id: "fin_look_saidann6", name: "あなた", text: "そうですね…", portrait:{ who:"みや", face:"normal", size:"500px" },next: "fin_look_saidann_again" },

    { 
      id: "fin_look_saidann_again", 
      name: "あなた",
      text: "机のどこを調べようか…",
      choices: [
        { label: "写真立てについて", next: "fin_look_shashinntate", nextRepeat: "fin_look_shashinntate_again" },
        { label: "棒について", next: "fin_look_bou",nextRepeat:"fin_look_bou_again" },
        { label: "布について", next: "fin_look_nuno",nextRepeat:"fin_look_nuno_again" },
        { label: "探索に戻る。", next: "fin_hub" },
        { label: "調合を始める。", next: "fin_ready_medicine", requires: { flags: ["fin_otegami"] } },
      ]
    },

    // ===== 写真立て =====
    { id: "fin_look_shashinntate", name: " ", text: "写真立てが置かれている。", next: "fin_look_shashinntate2" },
    { id: "fin_look_shashinntate2", name: "あなた", text: "写真には白髪の可愛らしい女の子が映っている", nextIfFlags: [
        { flags: ["deep_blue"], next: "fin_look_shashinntate_あなた" },
        { flags: [], next: "fin_look_shashinntate_みや" }
    ]},
    { id: "fin_look_shashinntate_あなた", name: "あなた", text: "この子…掛け軸の裏にあったポスターの女の子じゃないか…!!",overlay: { sprite: "./deep_bule.png", withText: true }, next: "fin_look_shashinntate_あなた2" },
    { id: "fin_look_shashinntate_あなた2", name: "みや", text: "本当ですね!ここにもいるなんて…",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "fin_look_shashinntate3" },
    { id: "fin_look_shashinntate_みや", name: "みや", text: "この子…掛け軸の裏にあったポスターの女の子じゃ…",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_look_shashinntate_みや2" },
    { id: "fin_look_shashinntate_みや2", name: "あなた", text: "女の子…?そんなのあったっけ?",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_look_shashinntate_みや3" },
    { id: "fin_look_shashinntate_みや3", name: "みや", text: "箱の部屋の掛け軸の裏にこの女の子のポスターがあるんです!もしよければ、確認してみて下さい‼",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "fin_look_shashinntate3" },
    { id: "fin_look_shashinntate3", name: "みや", text: "この女の子も何かと関わってくるのでしょうか…?",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_look_shashinntate4" },
    { id: "fin_look_shashinntate4", name: "あなた", text: "どうだろう…でも何も情報らしい情報は見てないけど…", next: "fin_look_shashinntate5" },
    { id: "fin_look_shashinntate5", name: "あなた", text: "っ!", next: "fin_look_shashinntate6" },
    { id: "fin_look_shashinntate6", name: "みや", text: "どうかしましたか?", portrait:{ who:"みや", face:"normal", size:"500px" },next: "fin_look_shashinntate7" },
    { id: "fin_look_shashinntate7", name: "あなた", text: "いや、何でもない…多分疲れてるだけだと思うから。",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_look_shashinntate8" },
    { id: "fin_look_shashinntate8", name: "あなた", text: "(写真の中の女の子と目が合った気がしたが…気のせいだよな)", next: "fin_look_shashinntate9" },
    { id: "fin_look_shashinntate9", name: " ", text: "情報:『机の上の写真立て』を手に入れた!",se: "infomation",  set: { flags: ["fin_photo_stand"], info: ["fin_photograph"] }, next: "fin_hub" },

    { id: "fin_look_shashinntate_again", name: "みや", text: "写真立てが置かれている。", next: "fin_look_shashinntate_again2" },
    { id: "fin_look_shashinntate_again2", name: "みや", text: "…っ!!", next: "fin_look_shashinntate_again3" },
    { id: "fin_look_shashinntate_again3", name: "みや", text: "また目があった気がする。", next: "fin_look_shashinntate_again4" },
    { id: "fin_look_shashinntate_again4", name: "みや", text: "…いや、流石に気のせい…だよね?", next: "fin_hub" },
    //棒
    { id: "fin_look_bou", name: "あなた", text: "机の上に棒が置かれている。", next: "fin_look_bou2" },
    { id: "fin_look_bou2", name: "あなた", text: "どこから見ても普通の棒だけど…", next: "fin_look_bou3" },
    { id: "fin_look_bou3", name: "あなた", text: "何かに使うのだろうか…?", next: "fin_look_bou4" },
    { id: "fin_look_bou4", name: " ", text: "情報:『棒』を手に入れた!",se: "infomation",  set: { flags: ["fin_mixer"], info: ["fin_brown_bou"] }, next: "fin_hub" },

    //布(ランチョンマット)
    { id: "fin_look_nuno", name: " ", text: "机の上に布が広げられている。", next: "fin_look_nuno2" },
    { id: "fin_look_nuno2", name: "あなた", text: "青い布はかっこいい刺繍が入ってる…見るからに高級そうだ…", next: "fin_look_nuno3" },
    { id: "fin_look_nuno3", name: "あなた", text: "一方、もう一枚はボロ雑巾かと思うくらい使い古された形跡が残ってる。", next: "fin_look_nuno4" },
    { id: "fin_look_nuno4", name: "あなた", text: "なんで二枚も置かれてあるんだ…?", next: "fin_look_nuno5" },
    { id: "fin_look_nuno5", name: "あなた", text: "…あれ?布と布の間に封筒が挟まってる...",overlay: { sprite: "./otegami.png", withText: true },  next: "fin_look_nuno6" },
    { id: "fin_look_nuno6", name: "あなた", text: "しかもちゃんとお手紙はいってるし...",overlay: { sprite: "./otegami.png", withText: true },  next: "fin_look_nuno7" },
    { id: "fin_look_nuno7", name: " ", text: "『二人ともちゃんと情報を集めてるみたいで凄い!!』",  se:"paper", next: "fin_look_nuno8" },
    { id: "fin_look_nuno8", name: " ", text: "『二人の準備が出来たら、机の上で調合を始めてね。』", next: "fin_look_nuno9" },
    { id: "fin_look_nuno9", name: " ", text: "『盃を置いて、そこに3つの音を混ぜるの。』", next: "fin_look_nuno10" },
    { id: "fin_look_nuno10", name: " ", text: "『そして出来た音楽を体に取り入れるの。そしたら、演奏は完成!簡単でしょ?』", next: "fin_look_nuno11" },
    { id: "fin_look_nuno11", name: " ", text: "『ちなみに、机の上のものはサプライズ!棒は薬を混ぜるときに使ってね』", next: "fin_look_nuno12" },
    { id: "fin_look_nuno12", name: " ", text: "『…頑張る君達に私から最大級のヒントをあげちゃう!』", next: "fin_look_nuno13" },
    { id: "fin_look_nuno13", name: " ", text: "『決して音楽を独り占めしないこと!』", next: "fin_look_nuno14" },
    { id: "fin_look_nuno14", name: " ", text: "『3種類の音が混ざり合って、君達二人で演奏するの。』", next: "fin_look_nuno15" },
    { id: "fin_look_nuno15", name: " ", text: "『心配しなくても大丈夫!きっといいものになるよ』", next: "fin_look_nuno16" },
    { id: "fin_look_nuno16", name: " ", text: "『演奏、楽しみにしてるね』", next: "fin_look_nuno17" },
    { id: "fin_look_nuno17", name: "あなた", text: "…これは、誰からの手紙だろう?", next: "fin_look_nuno18" },
    { id: "fin_look_nuno18", name: "あなた", text: "でも、確かにヒントになる気がする。", next: "fin_look_nuno19" },
    { id: "fin_look_nuno19", name: " ", text: "情報:『お手紙』を手に入れた!",se: "infomation",  set: { flags: ["fin_otegami"], info: ["fin_otegami"] }, next: "fin_hub" },

    { id: "fin_look_nuno_again", name: "みや", text: "布の隙間からお手紙を見つけた。", choices: [
        { label: "もう一回読み直す", next: "fin_look_nuno7" },
        { label: "戻る", next: "fin_hub" },
    ]},

    // 他の部屋へのリンク
    { id: "fin_look_sannnoma", name: " ", text: "尺八の部屋に移動する?", choices: [
      { label: "はい", next: "fin_take" },
      { label: "いいえ", next: "fin_hub" }
    ]},
    { id: "fin_take", name: " ", text: "尺八の部屋に移動した。", set:{ bg: "./sannnoma.png" }, next: "r3_hub" },
    { id: "fin_look_ninoma", name: " ", text: "三味線の部屋に移動する?", choices: [
      { label: "はい", next: "fin_shami" },
      { label: "いいえ", next: "fin_hub" }
    ]},
    { id: "fin_shami", name: " ", text: "三味線の部屋に移動した。",  set:{ bg: "./ninoma.png" },next: "r2_hub" },
    { id: "fin_look_ichinoma", name: "あなた", text: "箏の部屋に移動する?", choices: [
      { label: "はい", next: "fin_koto" },
      { label: "いいえ", next: "fin_hub" }
    ]},
    { id: "fin_koto", name: " ", text: "箏の部屋に移動した。",  set:{ bg: "./Ichinoma.png" },next: "r1_inspect" },

    //調合開始
    { id: "fin_ready_medicine", name: "みや", text: "私達がやらなくちゃいけないことは…恐らく...", portrait:{ who:"みや", face:"normal", size:"500px" },next: "fin_start_medicine4" },
    { id: "fin_start_medicine4", name: "あなた", text: "調合すること...だよな。", portrait:{ who:"みや", face:"normal", size:"500px" },next: "fin_start_medicine5" },
    { id: "fin_start_medicine5", name: "あなた", text: "材料はもうすでに箱の部屋、三味線の部屋、尺八の部屋から集まってる。", next: "fin_start_medicine6" },
    { id: "fin_start_medicine6", name: "あなた", text: "(一先ず、布の上に盃を置いて...)", next: "fin_start_medicine7" },
    { id: "fin_start_medicine7", name: " ", text: "この中に混ぜていくんだよな…", next: "fin_start_medicine8" },
    
    //調合一回目(正解は赤全て)
    { id: "fin_start_medicine8", name: "あなた", text: "さて、何をいれようか。", choices: [
        { label: "緑の液体を注ぐ", next: "fin_green_water" },
        { label: "赤の液体を注ぐ", next: "fin_red_water" },
        { label: "青の液体を注ぐ", next: "fin_blue_water" }
      ]},
    
    { id: "fin_green_water", name: "あなた", text: "さて、どれくらい注ごうか。", choices: [
        { label: "全て注ぐ", next: "fin_bad_end" },
        { label: "半分だけ注ぐ", next: "fin_bad_end" },
        { label: "やっぱり、別の液体を注ぐ", next: "fin_start_medicine8" }
      ]},{ id: "fin_red_water", name: "あなた", text: "さて、どれくらい注ごうか。", choices: [
        { label: "全て注ぐ", next: "fin_red_water_full" },
        { label: "半分だけ注ぐ", next: "fin_red_water_half" },
        { label: "やっぱり、別の液体を注ぐ", next: "fin_start_medicine8" }
      ]},

    { id: "fin_blue_water", name: "あなた", text: "さて、どれくらい注ごうか。", choices: [
        { label: "全て注ぐ", next: "fin_bad_end" },
        { label: "半分だけ注ぐ", next: "fin_bad_end" },
        { label: "やっぱり、別の液体を注ぐ", next: "fin_start_medicine8" }
      ]},

    // 赤を全て注いだ場合
    { id: "fin_red_water_full", name: "あなた", text: "赤い液体を全部注ぎ込んだ。", se: "pour", next: "fin_medicine_step2" },
    
    // 赤を半分注いだ場合
    { id: "fin_red_water_half", name: "あなた", text: "赤い液体を半分注ぎ込んだ。",  se: "pour",next: "fin_red_half_step2" },

    // 赤を半分注いだ後の選択
    { id: "fin_red_half_step2", name: "あなた", text: "さて、何をいれようか。", choices: [
        { label: "緑の液体を注ぐ", next: "fin_green_water_after_red_half" },
        { label: "赤の液体の残りを注ぐ", next: "fin_red_water_full" },
        { label: "青の液体を注ぐ", next: "fin_blue_water_after_red_half" }
      ]},

    { id: "fin_green_water_after_red_half", name: "あなた", text: "さて、どれくらい注ごうか。", choices: [
        { label: "全て注ぐ", next: "fin_bad_end" },
        { label: "半分だけ注ぐ", next: "fin_bad_end" },
        { label: "やっぱり、別の液体を注ぐ", next: "fin_red_half_step2" }
      ]},

    { id: "fin_blue_water_after_red_half", name: "あなた", text: "さて、どれくらい注ごうか。", choices: [
        { label: "全て注ぐ", next: "fin_bad_end" },
        { label: "半分だけ注ぐ", next: "fin_bad_end" },
        { label: "やっぱり、別の液体を注ぐ", next: "fin_red_half_step2" }
      ]},

    // 二回目の調合(青を半分)
    { id: "fin_medicine_step2", name: "あなた", text: "さて、何をいれようか。", choices: [
        { label: "緑の液体を注ぐ", next: "fin_green_water_step2" },
        { label: "青の液体を注ぐ", next: "fin_blue_water_step2" }
      ]},

    { id: "fin_green_water_step2", name: "あなた", text: "さて、どれくらい注ごうか。", choices: [
        { label: "全て注ぐ", next: "fin_bad_end" },
        { label: "半分だけ注ぐ", next: "fin_bad_end" },
        { label: "やっぱり、別の液体を注ぐ", next: "fin_medicine_step2" }
      ]},

    { id: "fin_blue_water_step2", name: "あなた", text: "さて、どれくらい注ごうか。", choices: [
        { label: "全て注ぐ", next: "fin_bad_end" },
        { label: "半分だけ注ぐ", next: "fin_blue_half_done" },
        { label: "やっぱり、別の液体を注ぐ", next: "fin_medicine_step2" }
      ]},

    { id: "fin_blue_half_done", name: "あなた", text: "青い液体を半分注ぎ込んだ。",  se: "pour",next: "fin_medicine_step3" },

    // 三回目の調合(緑を全部)
    { id: "fin_medicine_step3", name: "あなた", text: "さて、何をいれようか。", choices: [
        { label: "緑の液体を注ぐ", next: "fin_green_water_step3" },
        { label: "青の液体の残りを注ぐ", next: "fin_bad_end" }
      ]},

    { id: "fin_green_water_step3", name: "あなた", text: "さて、どれくらい注ごうか。", choices: [
        { label: "全て注ぐ", next: "fin_green_full_done" },
        { label: "半分だけ注ぐ", next: "fin_green_half_step3" },
        { label: "やっぱり、別の液体を注ぐ", next: "fin_medicine_step3" }
      ]},

    { id: "fin_green_full_done", name: "あなた", text: "緑の液体を全部注ぎ込んだ。", se: "pour", next: "fin_medicine_step4" },

    // 緑を半分注いだ場合
    { id: "fin_green_half_step3", name: "あなた", text: "緑の液体を半分注ぎ込んだ。",  se: "pour",next: "fin_green_half_choice" },

    { id: "fin_green_half_choice", name: "あなた", text: "さて、何をいれようか。", choices: [
        { label: "緑の液体の残りを注ぐ", next: "fin_green_full_done" },
        { label: "青の液体の残りを注ぐ", next: "fin_bad_end" }
      ]},

    // 最後の調合(青の残り全て)
    { id: "fin_medicine_step4", name: "あなた", text: "さて、何をいれようか。", choices: [
        { label: "青の液体の残り全てを注ぐ", next: "fin_medicine_complete" }
      ]},

    //みやに渡す(正解:渡さない)
    { id: "fin_medicine_complete", name: "あなた", text: "全ての液体を混ぜ終わる…", next: "fin_medicine_complete2" },
    { id: "fin_medicine_complete2", name: "あなた", text: "混ぜ終わった液体の色は、透明───", next: "fin_medicine_complete3" },
    { id: "fin_medicine_complete3", name: "あなた", text: "透明な液体からは小さくはあるものの、箏・三味線・尺八の綺麗な三重奏が聞こえる。", next: "fin_medicine_complete4" },
    { id: "fin_medicine_complete4", name: "あなた", text: "成功…したのか?", next: "fin_medicine_complete5" },
    { id: "fin_medicine_complete5", name: "あなた", text: "みや!!ちょっと来て!", next: "fin_medicine_complete6" },
    { id: "fin_medicine_complete6", name: "みや", text: "出来ましたか…?",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_medicine_complete7" },
    { id: "fin_medicine_complete7", name: "みや", text: "っ!!凄い…!!綺麗に透き通っていますね…",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "fin_medicine_complete8" },
    { id: "fin_medicine_complete8", name: "あなた", text: "ふふ…まるで鏡みたい。", portrait:{ who:"みや", face:"kind", size:"500px" },next: "fin_medicine_complete9" },
    { id: "fin_medicine_complete9", name: "みや", text: "それで…それを私達が飲む…で合ってましたっけ?",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_medicine_complete10" },
    { id: "fin_medicine_complete10", name: "あなた", text: "うん、自分達が演奏者だとすれば、二人で分け合わないといけないと思う。",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_medicine_complete11" },
    { id: "fin_medicine_complete11", name: "みや", text: "あの…突然なんですけど、",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "fin_medicine_complete12" },
    { id: "fin_medicine_complete12", name: "みや", text: "あなたに、お願いがあって…", portrait:{ who:"みや", face:"normal", size:"500px" },next: "fin_medicine_complete13" },
    { id: "fin_medicine_complete13", name: "あなた", text: "お願い……?",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_medicine_complete14" },
    { id: "fin_medicine_complete14", name: "みや", text: "はい!お願いです!", portrait:{ who:"みや", face:"smile", size:"500px" },next: "fin_medicine_complete15" },
    { id: "fin_medicine_complete15", name: "みや", text: "その透明な薬なんですけど…", portrait:{ who:"みや", face:"normal", size:"500px" },next: "fin_medicine_complete16" },
    { id: "fin_medicine_complete16", name: "みや", text: "私から飲んでもいいですか…?",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "fin_medicine_complete17" },
    { id: "fin_medicine_complete17", name: "あなた", text: "みやから───?", next: "fin_medicine_complete18" },
    { id: "fin_medicine_complete18", name: "みや", text: "はい!先程から、その透明な液体から美味しそうな匂いを感じて…",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "fin_medicine_complete19" },
    { id: "fin_medicine_complete19", name: "みや", text: "その…涎が止まらなくなってしまって…",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "fin_medicine_complete20" },
    { id: "fin_medicine_complete20", name: "あなた", text: "…みや?",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "fin_medicine_complete21" },
    { id: "fin_medicine_complete21", name: "みや", text: "とにかく、早く飲みたいんです…",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "fin_medicine_complete22" },
    { id: "fin_medicine_complete22", name: "みや", text: "盃の中身の半分を飲んでお渡しするので、私から飲んでもいいですか…?",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_medicine_complete23" },
    { id: "fin_medicine_complete23", name: "あなた", text: "(確か、飲む順番について書かれたものはなかった筈...)", next: "fin_medicine_complete24" },
    { id: "fin_medicine_complete24", name: "あなた", text: "(恐らく自分から飲んでも、みやから飲んでも大丈夫なのだろう...)", next: "fin_medicine_complete25" },
    { id: "fin_medicine_complete25", name: "あなた", text: "ただ、このまま渡してもいいのだろうか…", next: "fin_medicine_complete26" },
    { id: "fin_medicine_complete26", name: "あなた", text: "みやに渡す...?", choices: [
        { label: "渡す", next: "fin_normal_end" },
        { label: "ちょっと考えたい。", next: "fin_count1" },
        { label: "渡さない", next: "fin_true_end", requires: { flags: ["r2_day_book_seen", "r3_voice_recording"] } }
      ]},

    { id: "fin_count1", name: "みや", text: "分かりました…",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_count1_2" },
    { id: "fin_count1_2", name: "あなた", text: "……",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_count1_3" },
    { id: "fin_count1_3", name: "あなた", text: "……", portrait:{ who:"みや", face:"normal", size:"500px" },next: "fin_count1_4" },
    { id: "fin_count1_4", name: "みや", text: "……まだですか?", portrait:{ who:"みや", face:"confuse", size:"500px" },next: "fin_count1_5" },
    { id: "fin_count1_5", name: "みや", text: "早く渡して下さい!", portrait:{ who:"みや", face:"fear", size:"500px" },next: "fin_medicine_complete27" },
    { id: "fin_medicine_complete27", name: "あなた", text: "みやに渡す...?", choices: [
        { label: "渡す", next: "fin_normal_end" },
        { label: "ちょっと考えたい。", next: "fin_count2" },
        { label: "渡さない", next: "fin_true_end", requires: { flags: ["r2_day_book_seen", "r3_voice_recording"] } }
      ]},
    { id: "fin_count2", name: "みや", text: "分かりました…",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_count2_2" },
    { id: "fin_count2_2", name: "あなた", text: "……",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_count2_3" },
    { id: "fin_count2_3", name: "あなた", text: "……", portrait:{ who:"みや", face:"normal", size:"500px" },next: "fin_count2_4" },
    { id: "fin_count2_4", name: "みや", text: "……まだですか?", portrait:{ who:"みや", face:"confuse", size:"500px" },next: "fin_count2_5" },
    { id: "fin_count2_5", name: "みや", text: "早く渡して下さい!", portrait:{ who:"みや", face:"fear", size:"500px" },next: "fin_medicine_complete28" },
    { id: "fin_medicine_complete28", name: "あなた", text: "みやに渡す...?", choices: [
        { label: "渡す", next: "fin_normal_end" },
        { label: "ちょっと考えたい。", next: "fin_hidden_end" },
        { label: "渡さない", next: "fin_true_end", requires: { flags: ["r2_day_book_seen", "r3_voice_recording"] } }
      ]},
    // ノーマルエンド
    { id: "fin_normal_end", name: "あなた", text: "(ただ半分ずつ飲めばいいだけだ、渡さない理由なんてないだろう。)", next: "fin_normal_end2" },
    { id: "fin_normal_end2", name: "あなた", text: "(それに、これは得体の知れない液体なんだ…最初に飲むのはちょっと怖い)", next: "fin_normal_end3" },
    { id: "fin_normal_end3", name: "あなた", text: "(先に飲んでもらえるなら、ありがたいかも)", next: "fin_normal_end4" },
    { id: "fin_normal_end4", name: "あなた", text: "分かったよ、はい、どうぞ。", next: "fin_normal_end5" },
    { id: "fin_normal_end5", name: "みや", text: "やった!ふふ...ありがとうございます!", portrait:{ who:"みや", face:"smile", size:"500px" },next: "fin_normal_end6" },
    { id: "fin_normal_end6", name: "あなた", text: "半分飲み終わったら、こっちにも頂戴。", portrait:{ who:"みや", face:"smile", size:"500px" },next: "fin_normal_end7" },
    { id: "fin_normal_end7", name: "みや", text: "勿論です!すぐ飲んじゃうのでちょっと待っててくださいね。",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "fin_normal_end8" },
    { id: "fin_normal_end8", name: " ", text: "みやはそう言うと、盃に口を当てる。",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "fin_normal_end9" },
    { id: "fin_normal_end9", name: "みや", text: "…!!", portrait:{ who:"みや", face:"fear", size:"500px" },next: "fin_normal_end10" },
    { id: "fin_normal_end10", name: "あなた", text: "…味とかどうなの?見た目は完全に水だけど…",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "fin_normal_end11" },
    { id: "fin_normal_end11", name: "みや", text: "美味しい…凄く美味しいです!!", portrait:{ who:"みや", face:"smile", size:"500px" },next: "fin_normal_end12" },
    { id: "fin_normal_end12", name: "あなた", text: "お、美味しいんだ…", portrait:{ who:"みや", face:"smile", size:"500px" },next: "fin_normal_end13" },
    { id: "fin_normal_end13", name: "みや", text: "味は…なんていうんでしょう?でも、とにかく美味しい!!って感じです。",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "fin_normal_end14" },
    { id: "fin_normal_end14", name: "みや", text: "ふふふ...もっと飲みたい…",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "fin_normal_end15" },
    { id: "fin_normal_end15", name: "みや", text: "ごくごく...",next: "fin_normal_end16" },
    { id: "fin_normal_end16", name: "あなた", text: "……", next: "fin_normal_end17" },
    { id: "fin_normal_end17", name: "みや", text: "ごくごく...", next: "fin_normal_end18" },
    { id: "fin_normal_end18", name: "あなた", text: "そろそろ半分じゃない?", next: "fin_normal_end19" },
    { id: "fin_normal_end19", name: "みや", text: "そうですね…",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_normal_end20" },
    { id: "fin_normal_end20", name: "みや", text: "でも、あとちょっとだけ...",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "fin_normal_end21" },
    { id: "fin_normal_end21", name: "みや", text: "ごくごく…ふふふ...美味しい。…まだ足りない。",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "fin_normal_end22" },
    { id: "fin_normal_end22", name: "あなた", text: "み、みや?そろそろ───",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "fin_normal_end23" },
    { id: "fin_normal_end23", name: "みや", text: "もっと、もっと…", portrait:{ who:"みや", face:"smile", size:"500px" },next: "fin_normal_end24" },
    { id: "fin_normal_end24", name: "あなた", text: "(まずい…盃の中身が半分を切ろうとしてるのに、みやが止まらない。)", next: "fin_normal_end25" },
    { id: "fin_normal_end25", name: "あなた", text: "(まさか、何かに乗まれている...?)", next: "fin_normal_end26" },
    { id: "fin_normal_end26", name: "あなた", text: "みや!自分も半分飲まなくちゃいけないから───", next: "fin_normal_end27" },
    { id: "fin_normal_end27", name: "みや", text: "…五月蠅い!!!",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "fin_normal_end28" },
    { id: "fin_normal_end28", name: "あなた", text: "ッ!?", portrait:{ who:"みや", face:"fear", size:"500px" },next: "fin_normal_end29" },
    { id: "fin_normal_end29", name: "みや", text: "ちゃんと半分残せばいいんですよね?ちゃんとわかってますから!",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "fin_normal_end30" },
    { id: "fin_normal_end30", name: "あなた", text: "いや、もう盃の中身半分も残ってないよ…それでいいから、こっちに…",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "fin_normal_end31" },
    { id: "fin_normal_end31", name: "みや", text: "…あれ?本当ですね。半分も残ってない...?失敗しちゃいましたね…",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_normal_end32" },
    { id: "fin_normal_end32", name: "みや", text: "じゃあ、これは失敗作ということで、私が全部飲みますね",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "fin_normal_end33" },
    { id: "fin_normal_end33", name: "あなた", text: "え!?みや!?", next: "fin_normal_end34" },
    { id: "fin_normal_end34", name: "みや", text: "ごくごく...ごっくん!!", next: "fin_normal_end35" },
    { id: "fin_normal_end35", name: "みや", text: "ぷはぁ...あれ?無くなっちゃいましたね…?じゃあ新しいやつを作らないと…", portrait:{ who:"みや", face:"kind", size:"500px" },next: "fin_normal_end36" },
    { id: "fin_normal_end36", name: "あなた", text: "作らないとって、材料もうないよ…!!",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "fin_normal_end37" },
    { id: "fin_normal_end37", name: "あなた", text: "さっき作ったので全部だよ…!!どうするの!三重奏できないじゃないか!!", next: "fin_normal_end38" },
    { id: "fin_normal_end38", name: "みや", text: "材料…ないんですか…?そうですね…", portrait:{ who:"みや", face:"normal", size:"500px" },next: "fin_normal_end39" },
    { id: "fin_normal_end39", name: " ", text: "みやはそういうと机の上にあった棒を手に取った。", next: "fin_normal_end40" },
    { id: "fin_normal_end40", name: "みや", text: "最初に混ぜるのが…確か、赤い液体ですよね?",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_normal_end41" },
    { id: "fin_normal_end41", name: "みや", text: "なら、人間の血液で代用できそうじゃないですか…?",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "fin_normal_end42" },
    { id: "fin_normal_end42", name: "あなた", text: "…え?", portrait:{ who:"みや", face:"kind", size:"500px" },next: "fin_normal_end43" },
    { id: "fin_normal_end43", name: "あなた", text: "な、何を言って───", portrait:{ who:"みや", face:"kind", size:"500px" },next: "fin_normal_end44" },
    { id: "fin_normal_end44", name: " ", text: "みやは清々しいほどの笑顔でこっちに近づいてくる。", se:"walk",portrait:{ who:"みや", face:"smile", size:"500px" },next: "fin_normal_end45" },
    { id: "fin_normal_end45", name: "みや", text: "大丈夫ですよ。盃分しかもらわないから、致死量には至らないと思います。",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "fin_normal_end46" },
    { id: "fin_normal_end46", name: "あなた", text: "まさか…殺す気か…?", portrait:{ who:"みや", face:"kind", size:"500px" },next: "fin_normal_end47" },
    { id: "fin_normal_end47", name: "みや", text: "殺したら、犯罪になっちゃうじゃないですか?", portrait:{ who:"みや", face:"normal", size:"500px" },next: "fin_normal_end48" },
    { id: "fin_normal_end48", name: "みや", text: "それに、こんなに美味しいもの、あなたにもぜひ飲んでもらいたいんです。",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "fin_normal_end49" },
    { id: "fin_normal_end49", name: "みや", text: "だから、協力してくれますよね…", portrait:{ who:"みや", face:"smile", size:"500px" },next: "fin_normal_end50" },
    { id: "fin_normal_end50", name: "あなた", text: "だ、誰が自分が痛い思いをするのに協力するんだ…!!",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "fin_normal_end51" },
    { id: "fin_normal_end51", name: "みや", text: "…そうですか…半分ごしたら、脱出できるのに───",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "fin_normal_end52" },
    { id: "fin_normal_end52", name: "みや", text: "そこまで拒むのなら…", portrait:{ who:"みや", face:"kind", size:"500px" },next: "fin_normal_end53" },
    { id: "fin_normal_end53", name: "みや", text: "無理やりにでも奪うしかないですね。",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "fin_normal_end54" },
    { id: "fin_normal_end54", name: "あなた", text: "(…みやが迫ってくる!!)", next: "fin_normal_end55" },
    { id: "fin_normal_end55", name: "あなた", text: "(どこか、隠れられるところ...あ、後ろに三味線の部屋の扉が…)", next: "fin_normal_end56" },
    { id: "fin_normal_end56", name: "あなた", text: "(一旦この部屋に行って───)", next: "fin_normal_end57" },
    { id: "fin_normal_end57", name: "あなた", text: "…あれ、開かない?", next: "fin_normal_end58" },
    { id: "fin_normal_end58", name: "あなた", text: "な、なんで、鍵なんてどこにもなかった筈...!!", next: "fin_normal_end59" },
    { id: "fin_normal_end59", name: "みや", text: "逃げられませんよ?",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "fin_normal_end60" },
    { id: "fin_normal_end60", name: " ", text: "部屋の角に追いやられた...逃げ道がない。", next: "fin_normal_end61" },
    { id: "fin_normal_end61", name: " ", text: "みやはゆっくり棒を振り下ろす...",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "fin_normal_end62" },
    { id: "fin_normal_end62", name: "あなた", text: "(こ、殺される───)", next: "fin_normal_end63" },
    { id: "fin_normal_end63", name: " ", text: "……",se:"panchi" ,set: { bg: "#000" },next: "fin_normal_end64" },
    { id: "fin_normal_end64", name: "???", text: "「…あーあ、みやちゃんダメじゃないか。独り占めしちゃったら。」", next: "fin_normal_end65" },
    { id: "fin_normal_end65", name: "???", text: "「今回は出血大サービスで、君のことを助けてあげる。」", next: "fin_normal_end66" },
    { id: "fin_normal_end66", name: "???", text: "「君は真相に近づけてたしね。よく頑張りました。」", next: "fin_normal_end67" },
    { id: "fin_normal_end67", name: "???", text: "「けど...みやちゃんには残ってもらうよ?」", next: "fin_normal_end68" },
    { id: "fin_normal_end68", name: "あなた", text: "……っ",se:"magic",set: { bg: "./izumi_bushitsu.jpg" }, next: "fin_normal_end69" },
    { id: "fin_normal_end69", name: "あなた", text: "ちゃんと頭を殴って来られたせいで、まだ視界がくらんくらんする...", next: "fin_normal_end70" },
    { id: "fin_normal_end70", name: "あなた", text: "…あれ?ここは───", next: "fin_normal_end71" },
    { id: "fin_normal_end71", name: "あなた", text: "和泉部室の中───?", next: "fin_normal_end72" },
    { id: "fin_normal_end72", name: " ", text: "自分は靴も脱がず、入口の前で立っている。", next: "fin_normal_end73" },
    { id: "fin_normal_end73", name: "あなた", text: "…ここでみやが三味線を練習していた筈だ。", next: "fin_normal_end74" },
    { id: "fin_normal_end74", name: "あなた", text: "でも、三味線が出された跡すら残っていない。", next: "fin_normal_end75" },
    { id: "fin_normal_end75", name: "三曲部員", text: "うわぁ…!!び、びっくりした...", next: "fin_normal_end76" },
    { id: "fin_normal_end76", name: "三曲部員", text: "まさか入口に突っ立ってるとは思わなかったよ。お疲れ様", next: "fin_normal_end77" },
    { id: "fin_normal_end77", name: "あなた", text: "ねぇ、みやって見た?", next: "fin_normal_end78" },
    { id: "fin_normal_end78", name: "三曲部員", text: "みや?", next: "fin_normal_end79" },
    { id: "fin_normal_end79", name: "三曲部員", text: "……いや、見てないな。", next: "fin_normal_end79b" },
    { id: "fin_normal_end79b", name: "三曲部員", text: "……",  set: { bg: "#000" },next: "fin_normal_end80" },
    { id: "fin_normal_end80", name: " ", text: "───その後彼女は練習会に参加することはなく、行方不明になったらしい。",next: "fin_normal_end81" },
    { id: "fin_normal_end81", name: "あなた", text: "一体、どこに行ったんだ…?", next: "fin_normal_end_final" },
    { id: "fin_normal_end_final", name: " ", text: "-NORMAL END-", ui: { endScreen: true }, next: "fin_normal_end_final2" },
    { id: "fin_normal_end_final2", name: " ", text: " ", ui: { endScreen: true }, next: "__TITLE__" },

    // トゥルーエンド
    { id: "fin_true_end", name: "あなた", text: "(……いや、みやの様子が明らかに様子がおかしい。)", next: "fin_true_end2" },
    { id: "fin_true_end2", name: "あなた", text: "(得体の知れない液体を飲むのは怖いけど…)", next: "fin_true_end3" },
    { id: "fin_true_end3", name: "あなた", text: "(自分が先に半分飲んで、渡して飲んでもらう方がいいだろう)", next: "fin_true_end4" },
    { id: "fin_true_end4", name: "あなた", text: "…今渡すからちょっと待ってて。", next: "fin_true_end5" },
    { id: "fin_true_end5", name: " ", text: "勇気を振り絞って盃に口を付ける───", next: "fin_true_end6" },
    { id: "fin_true_end6", name: "あなた", text: "(…!!これ、美味しい)", next: "fin_true_end7" },
    { id: "fin_true_end7", name: "みや", text: "あ…先に飲みたかったのに…",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "fin_true_end8" },
    { id: "fin_true_end8", name: "あなた", text: "ぷはっ…半分ってこれくらいかな…?", next: "fin_true_end9" },
    { id: "fin_true_end9", name: "あなた", text: "ごめんね、先に飲んじゃって。", next: "fin_true_end10" },
    { id: "fin_true_end10", name: "みや", text: "自分も先に飲みたくなっちゃった…", next: "fin_true_end11"},
    { id: "fin_true_end11", name: "あなた", text: "(こんな言い訳で大丈夫か…?)", next: "fin_true_end12" },
    { id: "fin_true_end12", name: "みや", text: "…いえ、やっぱり美味しそうですもんね。", portrait:{ who:"みや", face:"smile", size:"500px" },next: "fin_true_end13" },
    { id: "fin_true_end13", name: "みや", text: "先に飲みたくなるのも分かります!",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_true_end14" },
    { id: "fin_true_end14", name: "みや", text: "今回は無断で先に飲んだこと許しますが、その代わり残りは全部私の分ですよ…?",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "fin_true_end15" },
    { id: "fin_true_end15", name: "あなた", text: "勿論勿論!はい、どうぞ。", portrait:{ who:"みや", face:"kind", size:"500px" },next: "fin_true_end16" },
    { id: "fin_true_end16", name: "みや", text: "ありがとうございます!", portrait:{ who:"みや", face:"smile", size:"500px" },next: "fin_true_end17" },
    { id: "fin_true_end17", name: "みや", text: "それじゃあ…いただきます。",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_true_end18" },
    { id: "fin_true_end18", name: "みや", text: "……!!美味しい!!それに飲みやすいです!!",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "fin_true_end20" },
    { id: "fin_true_end20", name: "あなた", text: "凄い勢いで盃の中身が無くなっていくな…", next: "fin_true_end21" },
    { id: "fin_true_end21", name: "みや", text: "…ふぅ、美味しかった。", portrait:{ who:"みや", face:"smile", size:"500px" },next: "fin_true_end22" },
    { id: "fin_true_end22", name: "みや", text: "この材料…どこかに売ってないんですかね…ここから出ても飲めたらいいな…",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "fin_true_end23" },
    { id: "fin_true_end23", name: "あなた", text: "うーん…流石に音が鳴る液体とか見たことないしな…", portrait:{ who:"みや", face:"kind", size:"500px" },next: "fin_true_end24" },
    { id: "fin_true_end24", name: "あなた", text: "さて、ここから何を…", next: "fin_true_end25" },
    { id: "fin_true_end25", name: "あなた", text: "……あれ?急に眠気が。…", next: "fin_true_end26" },
    { id: "fin_true_end26", name: "あなた", text: "(まだ脱出できてないのに…)", next: "fin_true_end27" },
    { id: "fin_true_end27", name: "あなた", text: "(まずい…倒れ…)", next: "fin_true_end28" },
    { id: "fin_true_end28", name: " ", text: "ガシッ…", next: "fin_true_end29" },
    { id: "fin_true_end29", name: "あなた", text: "(誰かが支えてくれてる…?)", next: "fin_true_end30" },
    { id: "fin_true_end30", name: "みや", text: "…色々と思い出させてくれて、本当にありがとう。", next: "fin_true_end31" },
    { id: "fin_true_end31", name: "あなた", text: "(───みや?)", next: "fin_true_end32" },
    { id: "fin_true_end32", name: "みや", text: "───そのまま眠って大丈夫だよ。", next: "fin_true_end33" },
    { id: "fin_true_end33", name: "みや", text: "───あとのことは、”みや”に任せて?",set: { bg: "#000" }, next: "fin_true_end34" },
    { id: "fin_true_end34", name: " ", text: "……", next: "fin_true_end36" },
    { id: "fin_true_end36", name: " ", text: "……先が見えない暗闇が続いてる。", next: "fin_true_end37" },
    { id: "fin_true_end37", name: "あなた", text: "ここは一体…どこだ?", next: "fin_true_end38" },
    { id: "fin_true_end38", name: "???", text: "「───!!」", next: "fin_true_end39" },
    { id: "fin_true_end39", name: "あなた", text: "どこを歩いているか分からない。", next: "fin_true_end40" },
    { id: "fin_true_end40", name: "あなた", text: "果たしてこの先に道は続いてるのだろうか…?", next: "fin_true_end41" },
    { id: "fin_true_end41", name: "???", text: "「───い───て」", next: "fin_true_end42" },
    { id: "fin_true_end42", name: "あなた", text: "どこからか声が聞こえる…気がする。", next: "fin_true_end43" },
    { id: "fin_true_end43", name: "みや", text: "「おーい!!起きてー!!」",se:"magic",set: { bg: "./izumi_bushitsu.jpg" },portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "fin_true_end44" },
    { id: "fin_true_end44", name: "あなた", text: "…!!…みや?", next: "fin_true_end45" },
    { id: "fin_true_end45", name: "みや", text: "あ、やっと起きた!", portrait:{ who:"みや", face:"normal", size:"500px" },next: "fin_true_end46" },
    { id: "fin_true_end46", name: "みや", text: "あと30分で和泉キャンパス閉まるよ。", portrait:{ who:"みや", face:"kind", size:"500px" },next: "fin_true_end47" },
    { id: "fin_true_end47", name: "みや", text: "そろそろ帰らないと閉じ込められちゃう",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_true_end48" },
    { id: "fin_true_end48", name: "あなた", text: "(ここは…和泉部室…?)", next: "fin_true_end49" },
    { id: "fin_true_end49", name: "あなた", text: "みや!!どうやってあそこ出れたの?", next: "fin_true_end50" },
    { id: "fin_true_end50", name: "あなた", text: "それに、記憶…戻って?", next: "fin_true_end51" },
    { id: "fin_true_end51", name: "みや", text: "記憶…?なんの話?",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "fin_true_end52" },
    { id: "fin_true_end52", name: "みや", text: "もしかして、まだ寝ぼけてる?", portrait:{ who:"みや", face:"smile", size:"500px" },next: "fin_true_end53" },
    { id: "fin_true_end53", name: "あなた", text: "寝ぼけて…?",next: "fin_true_end54" },
    { id: "fin_true_end54", name: "あなた", text: "自分は…寝てたのか…?",next: "fin_true_end55" },
    { id: "fin_true_end55", name: "みや", text: "寝てたのかって…私が部室に来たら、君がここで寝てたんじゃん。",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "fin_true_end56" },
    { id: "fin_true_end56", name: "みや", text: "一向に声かけても、三味線鳴らしても起きないからどうしようと思ったよ…",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "fin_true_end57" },
    { id: "fin_true_end57", name: "みや", text: "ま、起きてくれてよかったけど。", portrait:{ who:"みや", face:"kind", size:"500px" },next: "fin_true_end58" },
    { id: "fin_true_end58", name: "みや", text: "あと一分起きなかったら、一発殴ってたかな?",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_true_end59" },
    { id: "fin_true_end59", name: "あなた", text: "な、殴る…!!",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "fin_true_end60" },
    { id: "fin_true_end60", name: "みや", text: "あと、5分で帰宅準備できなかったら、ビンタかグーパンチかキックか…",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "fin_true_end61" },
    { id: "fin_true_end61", name: "あなた", text: "す、すぐ準備します…!!!",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "fin_true_end62" },
    { id: "fin_true_end62", name: "みや", text: "…ハハッ、冗談だよ、冗談。", portrait:{ who:"みや", face:"smile", size:"500px" },next: "fin_true_end63" },
    { id: "fin_true_end63", name: "あなた", text: "(あれ…?この会話、)", next: "fin_true_end64" },
    { id: "fin_true_end64", name: "みや", text: "まだ寝ぼけてそうだったから、起こしてあげようと思って", portrait:{ who:"みや", face:"kind", size:"500px" },next: "fin_true_end65" },
    { id: "fin_true_end65", name: "あなた", text: "(…凄く既視感を感じる)", next: "fin_true_end66" },
    { id: "fin_true_end66", name: "みや", text: "時間はまだ余裕があるし、ゆっくり支度して大丈夫だよ。", portrait:{ who:"みや", face:"normal", size:"500px" },next: "fin_true_end67" },
    { id: "fin_true_end67", name: "あなた", text: "…うん、ありがとう。", portrait:{ who:"みや", face:"normal", size:"500px" },next: "fin_true_end68" },
    { id: "fin_true_end68", name: "みや", text: "…‼ふふ、礼を言われるほどじゃないですよ〜",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "fin_true_end69" },
    { id: "fin_true_end69", name: "あなた", text: "(あれはもしかしたら、夢だったのか…?)", next: "fin_true_end70" },
    { id: "fin_true_end70", name: "あなた", text: "(それにしては、まだ口の中に薬の味が残ってる気がする。)", next: "fin_true_end71" },
    { id: "fin_true_end71", name: "あなた", text: "(ま、どちらにしても、記憶を失っても、みやは変わらないんだな)", next: "fin_true_end72" },
    { id: "fin_true_end72", name: "あなた", text: "(とりあえず今は…)", set: { bg: "#000" },next: "fin_true_end73" },
    { id: "fin_true_end73", name: "あなた", text: "(……家に帰って早く寝たいな。)", next: "fin_true_end_final" },
    { id: "fin_true_end_final", name: " ", text: "-TRUE END-", ui: { endScreen: true }, next: "fin_true_end_final2" },
     { id: "fin_true_end_final2", name: " ", text: " ", ui: { endScreen: true }, next: "__TITLE__" },

    // バッドエンド
    { id: "fin_bad_end", name: " ", text: "ゴゴゴゴゴゴゴ…", se: "wall_crack",fx:"quake", fxMs:1600, next: "fin_bad_end1" },
    { id: "fin_bad_end1", name: "あなた", text: "な、なんだ!", next: "fin_bad_end2" },
    { id: "fin_bad_end2", name: "みや", text: "また、白い部屋が揺れて…!!",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "fin_bad_end3" },
    { id: "fin_bad_end3", name: " ", text: "ピーンポーンパーンポーン",se:"bell", next: "fin_bad_end4" },
    { id: "fin_bad_end4", name: "あなた", text: "ま、またチャイム?", next: "fin_bad_end5" },
    { id: "fin_bad_end5", name: "みや", text: "今度は…なんでしょう?", portrait:{ who:"みや", face:"confuse", size:"500px" },next: "fin_bad_end6" },
    { id: "fin_bad_end6", name: " ", text: "『ご来場の皆様に大事なお知らせがございます。』", next: "fin_bad_end7" },
    { id: "fin_bad_end7", name: " ", text: "『たった今、演奏者の不手際により、』", next: "fin_bad_end8" },
    { id: "fin_bad_end8", name: " ", text: "『三重奏を中止させていただきます』", next: "fin_bad_end9" },
    { id: "fin_bad_end9", name: "あなた", text: "中止…まさか…!!", next: "fin_bad_end10" },
    { id: "fin_bad_end10", name: "あなた", text: "調合を…間違えた?", next: "fin_bad_end11" },
    { id: "fin_bad_end11", name: " ", text: "『観客の皆様には、大へ…し…訳…ざい…が』", next: "fin_bad_end12" },
    { id: "fin_bad_end12", name: " ", text: "アナウンスが途切れ途切れになる。", next: "fin_bad_end13" },
    { id: "fin_bad_end13", name: " ", text: "『…奏内…を…うさ…いただ…』", next: "fin_bad_end14" },
    { id: "fin_bad_end14", name: "あなた", text: "もはや何を言ってるのかすら聞き取れない…", next: "fin_bad_end15" },
    { id: "fin_bad_end15", name: " ", text: "もはや、何も聞き取れない。", next: "fin_bad_end16" },
    { id: "fin_bad_end16", name: " ", text: "…揺れもどんどん強くなっていく。立つことも難しい。", next: "fin_bad_end17" },
    { id: "fin_bad_end17", name: "あなた", text: "壁も崩れていってるし…一体どうしたら…", next: "fin_bad_end18" },
    { id: "fin_bad_end18", name: "あなた", text: "とりあえず…みや、一回机の中に隠れよう!!", next: "fin_bad_end19" },
    { id: "fin_bad_end19", name: " ", text: "……", next: "fin_bad_end20" },
    { id: "fin_bad_end20", name: "あなた", text: "…みや?", next: "fin_bad_end21" },
    { id: "fin_bad_end21", name: "あなた", text: "みやが…いない?", next: "fin_bad_end22" },
    { id: "fin_bad_end22", name: "あなた", text: "どうして…!さっきで隣にいたはず…", next: "fin_bad_end23" },
    { id: "fin_bad_end23", name: "あなた", text: "まさか、他の部屋に移動したのか…?", next: "fin_bad_end24" },
    { id: "fin_bad_end24", name: "あなた", text: "ひ、ひとまず、箱の部屋から探して…", next: "fin_bad_end25" },
    { id: "fin_bad_end25", name: "???", text: "───その必要はないよ。", next: "fin_bad_end26" },
    { id: "fin_bad_end26", name: "あなた", text: "…!",se:"knife", next: "fin_bad_end27" },
    { id: "fin_bad_end27", name: "あなた", text: "(腹部が苦しい…熱い……痛い…)", next: "fin_bad_end28" },
    { id: "fin_bad_end28", name: " ", text: "状況を把握しようと下を向く。", next: "fin_bad_end29" },
    { id: "fin_bad_end29", name: " ", text: "そこには、ナイフで刺されている自身の腹があった。", next: "fin_bad_end30" },
    { id: "fin_bad_end30", name: " ", text: "足元には真っ赤な水たまりが時間が経つたび徐々に大きくなっていってる。", next: "fin_bad_end31" },
    { id: "fin_bad_end31", name: " ", text: "後ろを振り返れば、血濡れたナイフを持ったみやが、生気の無い目でこっちを見ている。",portrait:{ who:"みや_bad", face:"normal", size:"500px" }, next: "fin_bad_end32" },
    { id: "fin_bad_end32", name: "あなた", text: "みや…どうして…", portrait:{ who:"みや_bad", face:"normal", size:"500px" },next: "fin_bad_end33" },
    { id: "fin_bad_end33", name: "みや(?)", text: "……",portrait:{ who:"みや_bad", face:"normal", size:"500px" }, next: "fin_bad_end34" },
    { id: "fin_bad_end34", name: "あなた", text: "(だめだ…足に力が…入らな…)",portrait:{ who:"みや_bad", face:"normal", size:"500px" }, next: "fin_bad_end35" },
    { id: "fin_bad_end35", name: " ", text: "バタン(視界暗転)",set: { bg: "#000" }, next: "fin_bad_end36" },
    { id: "fin_bad_end36", name: " ", text: "……", portrait:{ who:"みや_bad", face:"normal", size:"500px" },next: "fin_bad_end37" },
    { id: "fin_bad_end37", name: " ", text: "……実験は失敗。",portrait:{ who:"みや_bad", face:"normal", size:"500px" }, next: "fin_bad_end38" },
    { id: "fin_bad_end38", name: "みや(?)", text: "…ふふ…",portrait:{ who:"みや_bad", face:"normal", size:"500px" }, next: "fin_bad_end39" },
    { id: "fin_bad_end39", name: "みや(?)", text: "…あはははははは!!",portrait:{ who:"みや_bad", face:"smile", size:"500px" }, next: "fin_bad_end40" },
    { id: "fin_bad_end40", name: "みや(?)", text: "……", portrait:{ who:"みや_bad", face:"smile", size:"500px" },next: "fin_bad_end41" },
    { id: "fin_bad_end41", name: "みや(?)", text: "…ぜんぶ、あなたのせいだから。",portrait:{ who:"みや_bad", face:"angry", size:"500px" }, next: "fin_bad_end42" },
    { id: "fin_bad_end42", name: "みや(?)", text: "……はぁ、疲れた。", portrait:{ who:"みや_bad", face:"normal", size:"500px" },next: "fin_bad_end43" },
    { id: "fin_bad_end43", name: "みや(?)", text: "…材料、集め直さないと。", next: "fin_bad_end44" },
    { id: "fin_bad_end44", name: " ", text: "……", next: "fin_bad_end_final" },
    { id: "fin_bad_end_final", name: " ", text: "-BAD END-", ui: { endScreen: true }, next: "fin_bad_end_final2" },
     { id: "fin_bad_end_final2", name: " ", text: " ", ui: { endScreen: true }, next: "__TITLE__" },

    // === HIDDEN END(隠されたエンド) ===
    { id: "fin_hidden_end", name: "みや", text: "……なんでそんなに、躊躇うんですか!!",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "fin_hidden_end2" },
    { id: "fin_hidden_end2", name: "あなた", text: "もしかして…先に飲もうとしてます…?", portrait:{ who:"みや", face:"confuse", size:"500px" },next: "fin_hidden_end3" },
    { id: "fin_hidden_end3", name: "あなた", text: "ちょっと待って!!間違ったら大変じゃないか!",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "fin_hidden_end4" },
    { id: "fin_hidden_end4", name: "みや", text: "本当に順番に関して何かなかったかって思い返してるから…",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "fin_hidden_end5" },
    { id: "fin_hidden_end5", name: "あなた", text: "だとしても長すぎます…!!", portrait:{ who:"みや", face:"fear", size:"500px" },next: "fin_hidden_end6" },
    { id: "fin_hidden_end6", name: "みや", text: "さっきから我慢して我慢して…もう耐えられません…!!",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "fin_hidden_end7" },
    { id: "fin_hidden_end7", name: "あなた", text: "だから、待てって…!!", next: "fin_hidden_end8" },
    { id: "fin_hidden_end8", name: " ", text: "───パリン", next: "fin_hidden_end9" },
    { id: "fin_hidden_end9", name: "あなた", text: "さ、盃が…", next: "fin_hidden_end10" },
    { id: "fin_hidden_end10", name: "みや", text: "……割れた?", portrait:{ who:"みや", face:"confuse", size:"500px" },next: "fin_hidden_end11" },
    { id: "fin_hidden_end11", name: "あなた", text: "(みやが盃に手を伸ばして自分がそれを防ごうと、みやの手を掴もうとした───)", next: "fin_hidden_end12" },
    { id: "fin_hidden_end12", name: "あなた", text: "(…その時机にぶつかってしまい、その衝撃で机から盃が…)", next: "fin_hidden_end13" },
    { id: "fin_hidden_end13", name: " ", text: "床には盃の破片と、透明な液体が散らばっている。", next: "fin_hidden_end14" },
    { id: "fin_hidden_end14", name: "みや", text: "ど、どうしましょう…",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "fin_hidden_end15" },
    { id: "fin_hidden_end15", name: "あなた", text: "盃が割れたら、飲めるものも飲めない…", next: "fin_hidden_end16" },
    { id: "fin_hidden_end16", name: "あなた", text: "このままじゃ…三重奏ができない。", next: "fin_hidden_end17" },
    { id: "fin_hidden_end17", name: "あなた", text: "何か、代わりになるものが他の部屋になかったか…?", next: "fin_hidden_end18" },
    { id: "fin_hidden_end18", name: "みや", text: "わ、私、液体を掬いあげるスプーンみたいなの探してきます", portrait:{ who:"みや", face:"fear", size:"500px" },next: "fin_hidden_end19" },
    { id: "fin_hidden_end19", name: "あなた", text: "助かる!自分はとりあえず、破片を拾って、", next: "fin_hidden_end20" },
    { id: "fin_hidden_end20", name: "???", text: "「…君たちは恩を仇で返すんだね。」", next: "fin_hidden_end21" },
    { id: "fin_hidden_end21", name: "あなた", text: "…‼", portrait:{ who:"みや", face:"fear", size:"500px" },next: "fin_hidden_end22" },
    { id: "fin_hidden_end22", name: "みや", text: "頭の中に声が響いてる感じがします…!!",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "fin_hidden_end23" },
    { id: "fin_hidden_end23", name: "あなた", text: "だ、誰!", next: "fin_hidden_end24" },
    { id: "fin_hidden_end24", name: "???", text: "「別に覚えなくてもいいよ。むしろ君たちには名前を覚えてもらいたくないな。」",set:{bgm:"kirarasan"} ,next: "fin_hidden_end25" },
    { id: "fin_hidden_end25", name: "みや", text: "…これ、見てください!!写真立ての人が!!", next: "fin_hidden_end26" },
    { id: "fin_hidden_end26", name: "あなた", text: "…動いてる?",overlay: { sprite: "./miya.ormal.png", withText: true ,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)"}, next: "fin_hidden_end27" },
    { id: "fin_hidden_end27", name: "???", text: "「あ…やっと気づいた?」",overlay: { sprite: "./miya.mile.png", withText: true ,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)"}, next: "fin_hidden_end28" },
    { id: "fin_hidden_end28", name: "???", text: "「君たちのこと、ここからずっと見させてもらってたよ。」",overlay: { sprite: "./miya.ormal.png", withText: true ,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)"},  next: "fin_hidden_end29" },
    { id: "fin_hidden_end29", name: "???", text: "「私は、君たちには期待していたんだけどな…きっといい演奏してくるって。」", overlay: { sprite: "./miya.shock.png", withText: true ,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)"}, next: "fin_hidden_end30" },
    { id: "fin_hidden_end30", name: "???", text: "「それなのに……君たちは君たち自身で演奏を台無しにした。」",overlay: { sprite: "./miya.angry.png", withText: true ,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)"}, next: "fin_hidden_end31" },
    { id: "fin_hidden_end31", name: "???", text: "「今回は期待はずれだったかな?」", overlay: { sprite: "./miya.ind.png", withText: true ,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)"} ,next: "fin_hidden_end32" },
    { id: "fin_hidden_end32", name: "???", text: "「君たちは、私の時間を期待を、想いを無駄にした。」",overlay: { sprite: "./miya.angry.png", withText: true ,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)"}, next: "fin_hidden_end33" },
    { id: "fin_hidden_end33", name: "???", text: "「どうやら、君たちには…」",overlay: { sprite: "./miya.ind.png", withText: true ,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)"},  next: "fin_hidden_end34" },
    { id: "fin_hidden_end34", name: "???", text: "「…お仕置きが必要そうだね」",overlay: { sprite: "./miya.magic.png", withText: true ,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)"},  next: "fin_hidden_end35" },
    { id: "fin_hidden_end35", name: "あなた", text: "…‼", se:"magic",set: { bg: "HIDDEN.png" },next: "fin_hidden_end36" },
    { id: "fin_hidden_end36", name: " ", text: "瞬きをした瞬間───世界が変わった。", next: "fin_hidden_end37" },
    { id: "fin_hidden_end37", name: "あなた", text: "ここはお花畑…?でも、世界がモノクロだ。", next: "fin_hidden_end38" },
    { id: "fin_hidden_end38", name: " ", text: "隣にはみやが不安そうな顔でいる。", next: "fin_hidden_end39" },
    { id: "fin_hidden_end39", name: "あなた", text: "───────‼", next: "fin_hidden_end40" },
    { id: "fin_hidden_end40", name: "あなた", text: "あれ…?喋れない?", next: "fin_hidden_end41" },
    { id: "fin_hidden_end41", name: " ", text: "みやも驚いた表情をしてる。", next: "fin_hidden_end42" },
    { id: "fin_hidden_end42", name: " ", text: "みやも口を動かしてるけど、声が聞こえない。話せない。", next: "fin_hidden_end43" },
    { id: "fin_hidden_end43", name: " ", text: "するとみやが自分を指差したあとに身体を指差した。", next: "fin_hidden_end44" },
    { id: "fin_hidden_end44", name: "あなた", text: "自身の身体を見て…ってことか…?", next: "fin_hidden_end45" },
    { id: "fin_hidden_end45", name: "あなた", text: "……!透けてる……", next: "fin_hidden_end46" },
    { id: "fin_hidden_end46", name: " ", text: "自分の身体を通して景色が見える。まるで幽霊みたいだ。", next: "fin_hidden_end47" },
    { id: "fin_hidden_end47", name: "あなた", text: "もし、このまま消えたら…自分は───", next: "fin_hidden_end48" },
    { id: "fin_hidden_end48", name: "あなた", text: "…あれ?急に眠気が。…", next: "fin_hidden_end49" },
    { id: "fin_hidden_end49", name: " ", text: "…頭の中で警告音が鳴り響く。", next: "fin_hidden_end50" },
    { id: "fin_hidden_end50", name: "あなた", text: "ここで寝たら、絶対よくないことが起きる…!!", next: "fin_hidden_end51" },
    { id: "fin_hidden_end51", name: " ", text: "だめなのに……",set: { bg: "#000" }, next: "fin_hidden_end52" },
    { id: "fin_hidden_end52", name: " ", text: "数年後───",set: { bg: "./izumi_bushitsu.jpg" }, next: "fin_hidden_end53" },
    { id: "fin_hidden_end53", name: "三曲部員A", text: "ねぇねぇ、三曲七不思議って知ってる…?", next: "fin_hidden_end54" },
    { id: "fin_hidden_end54", name: "三曲部員B", text: "え、このサークルってそんなのあるんですか?", next: "fin_hidden_end55" },
    { id: "fin_hidden_end55", name: "三曲部員A", text: "そうそう!っていっても、今のところ一つしかないんだけど…", next: "fin_hidden_end56" },
    { id: "fin_hidden_end56", name: "三曲部員B", text: "それ、七不思議じゃなくないっすか…?", next: "fin_hidden_end57" },
    { id: "fin_hidden_end57", name: "三曲部員A", text: "まぁまぁ、でもその一個が結構怖くてね、", next: "fin_hidden_end58" },
    { id: "fin_hidden_end58", name: "三曲部員A", text: "実は、部員名簿に載ってない人のプロフ帳が部室から出てきたんだって〜‼", next: "fin_hidden_end59" },
    { id: "fin_hidden_end59", name: "三曲部員B", text: "え、辞めた人とかじゃな…ってことですか?", next: "fin_hidden_end60" },
    { id: "fin_hidden_end60", name: "三曲部員A", text: "それがそうなんだよね…しかも、2人。", next: "fin_hidden_end61" },
    { id: "fin_hidden_end61", name: "三曲部員A", text: "その代の集合写真にその人がいた痕跡みたいなのも残ってるらしいんだけど、誰もその人のこと覚えてないんだって。", next: "fin_hidden_end62" },
    { id: "fin_hidden_end62", name: "三曲部員B", text: "へぇ…今度OBOGさんに聞いたらもっと詳細分かったりするんですかね…?", next: "fin_hidden_end63" },
    { id: "fin_hidden_end63", name: "三曲部員A", text: "確かに…!!今度会った時聞いてみよ!!", next: "fin_hidden_end64" },
    { id: "fin_hidden_end64", name: " ", text: "......", set: { bg: "#000" }, next: "fin_hidden_end65" },
    { id: "fin_hidden_end65", name: "???", text: "…二人がどうなったのかって?", overlay: { sprite: "./miya.ormal.png", withText: true ,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)"}, next: "fin_hidden_end66" },
    { id: "fin_hidden_end66", name: "???", text: "あれ?…どうして、君があの子たちのことを覚えているの?",overlay: { sprite: "./miya.angry.png", withText: true ,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)"},  next: "fin_hidden_end67" },
    { id: "fin_hidden_end67", name: "???", text: "おかしいな…みんなの記憶から消してあげたんだけど。",overlay: { sprite: "./miya.shock.png", withText: true ,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)"},  next: "fin_hidden_end68" },
    { id: "fin_hidden_end68", name: "???", text: "ふふ…心配しなくても大丈夫",overlay: { sprite: "./miya.ind.jpg", withText: true ,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)"},  next: "fin_hidden_end69" },
    { id: "fin_hidden_end69", name: "???", text: "すぐ、分からなくしてあげるから", se:"magic",overlay: { sprite: "./miya.mile.png", withText: true ,size: "60vh",left: "75%", bottom: "0",transform: "translateX(-50%)"}, next: "fin_hidden_end_final" },
    { id: "fin_hidden_end_final", name: " ", text: "-SECRET END-", ui: { endScreen: true }, next: "fin_hidden_end_final2" },
    { id: "fin_hidden_end_final2", name: " ", text: " ", ui: { endScreen: true }, next: "__TITLE__" },

    // ===== みやとの会話 =====
    {
      id: "fin_talk1",
      name: "みや",
      text: "どうしましたか?",
      choices: [
        { label: "みやと雑談", next: "fin_talk_chat1" },
        { label: "戻る", next: "fin_hub" }
      ]
    },

    // みやとの雑談(テーマ:独り言)
    { id: "fin_talk_chat1", name: "みや", text: "これが、最後の謎…なんですかね…", portrait: { who: "みや", face: "confuse", size: "500px" }, next: "fin_talk_chat2" },
    { id: "fin_talk_chat2", name: "あなた", text: "どうだろう…いまいちどうやったら出れるのか、あんまりよくわかってないんだけど…", portrait: { who: "みや", face: "confuse", size: "500px" }, next: "fin_talk_chat3" },
    { id: "fin_talk_chat3", name: "あなた", text: "(もしかして、推理すれば分かるのか…?)",next: "fin_talk_chat4" },
    { id: "fin_talk_chat4", name: "あなた", text: "…そういえば記憶は…?", next: "fin_talk_chat5" },
    { id: "fin_talk_chat5", name: "みや", text: "正直、まだ戻っていないんです。どうやったら戻るのかもわかっていませんが…",  portrait: { who: "みや", face: "fear", size: "500px" },next: "fin_talk_chat6" },
    { id: "fin_talk_chat6", name: "みや", text: "ひとまず今は、脱出することに集中しましょう!", portrait: { who: "みや", face: "kind", size: "500px" }, next: "fin_talk_chat7" },
    { id: "fin_talk_chat7", name: "みや", text: "思い出すのはあとででもできます!", portrait: { who: "みや", face: "normal", size: "500px" }, next: "fin_talk_chat8" },
    { id: "fin_talk_chat8", name: "あなた", text: "みやって…強いよね…",  portrait: { who: "みや", face: "normal", size: "500px" },next: "fin_talk_chat9" },
    { id: "fin_talk_chat9", name: "あなた", text: "記憶がないのに、冷静に物事判断出来てるし…", portrait: { who: "みや", face: "normal", size: "500px" }, next: "fin_talk_chat10" },
    { id: "fin_talk_chat10", name: "みや", text: "うーん、何も覚えてないから、失うものがない…というのが大きいとは思いますが…", portrait: { who: "みや", face: "normal", size: "500px" }, next: "fin_talk_chat11" },
    { id: "fin_talk_chat11", name: "みや", text: "むしろ、記憶がない私をずっと気に掛けてくれてありがとうございます。", portrait: { who: "みや", face: "smile", size: "500px" }, next: "fin_talk_chat12" },
    { id: "fin_talk_chat12", name: "あなた", text: "いや、普通、気に掛けるでしょ…知り合いの可能性が高いんだし、", portrait: { who: "みや", face: "smile", size: "500px" }, next: "fin_talk_chat13" },
    { id: "fin_talk_chat13", name: "みや", text: "ふふ…そうかもしれませんね", portrait: { who: "みや", face: "kind", size: "500px" }, next: "fin_talk_chat14" },
    { id: "fin_talk_chat14", name: "みや", text: "最後まで、頼りにさせていただきます!", portrait: { who: "みや", face: "smile", size: "500px" }, next: "fin_talk_chat15" },
    { id: "fin_talk_chat15", name: "あなた", text: "こちらこそ、よろしくね。", portrait: { who: "みや", face: "smile", size: "500px" }, next: "fin_hub" }
  ]
};