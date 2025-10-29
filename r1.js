// story/r1.js — 壱ノ間（風の部屋）
// 『白い部屋→壱ノ間』の章データ。window.js の動的ロード/静的マージのどちらにも対応。
// area = "壱の間" として情報タブでフィルタ表示できるようにしています。

window.STORY_R1 = {
  meta: { areaName: "箏の部屋" },
  chars:{
    みや:{ defaultSize:"500px", defaultX:"50%", defaultY:"43%", faces:{ normal:"みや.normal.png", smile:"みや.smile.png", kind:"みや.kind.png", fear:"みや.fear.png", confuse:"みや.confuse.png"}},
    みや_bad:{ defaultSize:"360px", faces:{ normal:"みや.狂.png", angry:"みや.angry.狂.png", tear:"みや.tear.狂.png", smile:"みや.smile.狂.png"} }
 },

  // 章固有の情報（情報タブで表示）
  info: {
    koto_manual: { 
      title: "箏 操作要領", icon: "./koto_manual.png", image: "./koto_manual.png",
      desc: "黒漆の箏について書かれた冊子。指輪を3つ装着して演奏すれば、誰でも美しい音色を奏でられるらしい。", 
      notes: {
        again: "黒漆の箏について書かれた冊子。指輪を3つ装着して演奏すれば、誰でも美しい音色を奏でられるらしい。呪いの箏を指輪が3つ揃う前に演奏すると…嫌な予感がする。"
      },
      area: "箏の部屋" 
    },
    R_koto1: { 
      title: "黒漆の箏_1", icon: "./kuro_koto.png", image: "./kuro_koto.png",
      desc: "箏に文字が彫られている。『我の望みは箏の音である。さすれば、道は切り開かれる。』", 
      area: "箏の部屋" 
    },
    R_koto2: { 
      title: "黒漆の箏_2", icon: "./kuro_koto_all.png", image: "./kuro_koto_all.png",
      desc: "凄く重い箏。持ち運ぶことは出来なさそうだ。", 
      area: "箏の部屋" 
    },
    ring_big: { 
      title: "指輪(大)", icon: "./yubiwa_silver.png", image: "./yubiwa_silver.png",
      desc: "観葉植物の土の中から見つけた銀色の指輪。", 
      area: "箏の部屋" 
    },
    ring_middle: { 
      title: "指輪(中)", icon: "./yubiwa_silver.png", image: "./yubiwa_silver.png",
      desc: "花瓶の近くで見つけた銀色の指輪。", 
      area: "箏の部屋" 
    },
    ring_small: { 
      title: "指輪(小)", icon: "./yubiwa_silver.png", image: "./yubiwa_silver.png",
      desc: "行燈の中から見つけた銀色の指輪。", 
      area: "箏の部屋" 
    },
    ki_box: { 
      title: "壁の穴の中の木箱", icon: "./akazunokibako.png", image: "./akazunokibako.png",
      desc: "カーテンの裏、壁に埋め込まれた手のひらサイズの木箱。鍵がかかっていて開かない。", 
      notes: {
        opening: "カーテンの裏の壁に埋め込まれた手のひらサイズの木箱。中には謎の液体が入っていた。"
      },
      area: "箏の部屋" 
    },
    drink_green: { 
      title: "謎の液体(緑)", icon: "./GREEN.png", image: "./GREEN.png",
      desc: "鍵のついた木箱から見つけた。毒々しい色をしている。耳を近づけるとぽーんと音が聞こえる。", 
      area: "箏の部屋" 
    },
    shizuku_ichi: { 
      title: "小さな雫 -壱-", icon: "./chiisanashizuku_ichi.png", image: "./chiisanashizuku_ichi.png",
      desc: "古い物語が書かれた本。心優しい女の子が、不治の病の母を救うため、隣町の魔女を訪ねる旅に出る話。続きはどこに…？", 
      area: "箏の部屋" 
    },
     Megane: { 
      title: "眼鏡", icon: "./mega_ne.png", image: "./mega_ne.png",
      desc: "度は入っていなさそうだ。本と一緒に床に置かれていた。よく踏まなかったな。", 
      area: "箏の部屋" 
    },
    posta_kirara: { 
      title: "謎のポスター", icon: "./deep_bule.png", image: "./deep_bule.png",
      desc: "『ディープブルーにキラめいて』と書かれたアイドルのポスター。掛け軸の裏に隠されていた。", 
      notes: {
        opening: "『ディープブルーにキラめいて』と書かれたアイドルのポスター。このアイドルの衣装を身にまとったみやを見た。"
      },
      area: "箏の部屋" 
    }
  },

  nodes: [
    // ===== 壱ノ間：導入 =====
    { id: "r1_from_intro", name: " ", text: "扉をくぐると、世界が変わった。", set:{ bg: "Ichinoma.png" },next: "r1_from_intro3" },
    { id: "r1_from_intro3", name: " ", text: "白い光が柔らかく揺らぎ、木と砂の香りがかすかに混じる。", next: "r1_from_intro4" },
    { id: "r1_from_intro4", name: "あなた", text: "ここは…？", next: "r1_from_intro5" },
    { id: "r1_from_intro5", name: "みや", text: "出口…ではなさそうですね。", portrait:{ who:"みや", face:"fear", size:"500px" },next: "r1_from_intro6" },
    { id: "r1_from_intro6", name: "みや", text: "でも、調べられる箇所が一気に増えた気がします！",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r1_from_intro7" },
    { id: "r1_from_intro7", name: "あなた", text: "確かに…脱出の手がかりが見つかる可能性が増えたかもしれない。",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r1_from_intro8" },
    { id: "r1_from_intro8", name: "あなた", text: "それより…中央にあるのは…あれは…", next: "r1_from_intro9" },
    { id: "r1_from_intro9", name: "みや", text: "……箏？",next: "r1_from_intro10" },
    { id: "r1_from_intro10", name: "あなた", text: "黒い箏なんてはじめて見た…", next: "r1_from_intro11" },
    { id: "r1_from_intro11", name: "みや", text: "見るからに高そうですね…",next: "r1_from_intro12" },
    { id: "r1_from_intro12", name: "あなた", text: "（どうして箏が中央に…？）", next: "r1_from_intro13" },
    { id: "r1_from_intro13", name: "あなた", text: "調べてみる価値はありそうだ。",  set: { flags:["r1_already_opened"]},next: "r1_scene_hub" },

    // =====　仮探索(壱の間) =====
    { 
      id: "r1_scene_hub",
      ui: { silent: true },set:{bgm:"tannsaku"},
      explore: {
        spots: [
          { id: "kurokoto", x: "55%", y: "57%", size: "48px", icon: "./kirakira.png", next: "r1_koto" }
        ],
        talk: { sprite: "./みや.stand.png", x: "10%", y: "72%", size: "270px", next: "r1_talk1" }
      }
    },

    // 箏（最初）
    { id: "r1_koto", name: " ", text: "部屋の中央には黒漆の箏が整然と置かれている。", next: "r1_koto2" },
    { id: "r1_koto2", name: " ", text: "きちんと手入れはされているのか、ほこりや汚れは見当たらない。", next: "r1_koto3" },
    { id: "r1_koto3", name: "あなた", text: "ちゃんと柱も立ってる…", next: "r1_koto4" },
    { id: "r1_koto4", name: "みや", text: "柱…？", next: "r1_koto5" },
    { id: "r1_koto5", name: "あなた", text: "うん。”箏柱”って言って、箏の弦の音の高低を調整するための道具。", next: "r1_koto6" },
    { id: "r1_koto6", name: "みや", text: "凄い…お箏に詳しいんですね！",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r1_koto7" },
    { id: "r1_koto7", name: "あなた", text: "まぁ、三曲研究部にいるしね…",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r1_koto8" },
    { id: "r1_koto8", name: "あなた", text: "なんなら、みやも中高時代箏曲部じゃなかったっけ？",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r1_koto9" },
    { id: "r1_koto9", name: "みや", text: "中高…箏…",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r1_koto10" },
    { id: "r1_koto10", name: "あなた", text: "……もしかして、覚えてない？",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r1_koto11" },
    { id: "r1_koto11", name: "みや", text: "…すみません。", portrait:{ who:"みや", face:"confuse", size:"500px" },next: "r1_koto12" },
    { id: "r1_koto12", name: "あなた", text: "大丈夫だよ、ゆっくり思い出していこう。",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "r1_koto13" },
    { id: "r1_koto13", name: "あなた", text: "(脱出する手がかりだけじゃなく、みやの様子も気にかけないとな…）", next: "r1_koto14" },
    { id: "r1_koto14", name: " ", text: "追加：探索可能箇所が追加されました。",se: "infomation", set:{flags:["r1_add_spot"]},next: "r1_inspect" },

    // ===== 本探索（壱の間）　=====
    { 
      id: "r1_inspect",
      ui: { silent: true },set:{bgm:"tannsaku"},
      explore: {
        spots: [
          { id: "r1_uekibachi", x: "95%", y: "54%", size: "48px", icon: "./kirakira.png", next: "r1_ki", nextRepeat: "r1_ki_again" },
          { id: "r1_shuuji", x: "56%", y: "85%", size: "48px", icon: "./kirakira.png", next: "r1_fude" },
          { id: "r1_honn", x: "33%", y: "70%", size: "48px", icon: "./kirakira.png", next: "r1_book_glasses", nextRepeat: "r1_book_glasses_again" },
          { id: "r1_Kakejiku", x: "51%", y: "10%", size: "48px", icon: "./kirakira.png", next: "r1_kakejiku" },
          { id: "r1_ka_tenn", x: "38%", y: "20%", size: "48px", icon: "./kirakira.png", next: "r1_white_hirahira", nextRepeat: "r1_white_hirahira_again" },
          { id: "r1_anndonn", x: "45%", y: "37%", size: "48px", icon: "./kirakira.png", next: "r1_light", nextRepeat: "r1_light_again" },
          { id: "r1_book_boxes", x: "25%", y: "45%", size: "48px", icon: "./kirakira.png", next: "r1_honndana", nextRepeat: "r1_honndana_again" },
          { id: "r1_kazari", x: "21%", y: "17%", size: "48px", icon: "./kirakira.png", next: "r1_hachi_binn_kami", nextRepeat: "r1_hachi_binn_kami_again" },
          { id: "kuro_urushi", x: "55%", y: "57%", size: "48px", icon: "./kirakira.png", next: "r1_13genn" }
        ],
        talk: { sprite: "./みや.stand.png", x: "10%", y: "72%", size: "270px", next: "r1_talk1" }
      }
    },

    // ===== 冊子（箏マニュアル） =====
    { id: "r1_honndana", name: "あなた", text: "小さいけれど本棚だ。", next: "r1_honndana2" },
    { id: "r1_honndana2", name: "あなた", text: "本の大きさ、厚さ、色…言語ですら様々だ。", next: "r1_honndana3" },
    { id: "r1_honndana3", name: "みや", text: "この本、明らかにアラビア圏の言語っぽい本ですね…", portrait:{ who:"みや", face:"normal", size:"500px" },next: "r1_honndana4" },
    { id: "r1_honndana4", name: "みや", text: "アラビア語とか読めたりしますか？",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r1_honndana5" },
    { id: "r1_honndana5", name: "あなた", text: "いや…さすがに分からないな…",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r1_honndana6" },
    { id: "r1_honndana6", name: "みや", text: "ですよね…",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r1_honndana7" },
    { id: "r1_honndana7", name: "あなた", text: "…ん？この本日本語だ。", overlay: { sprite: "./koto_manual.png", withText: true },next: "r1_honndana8" },
    { id: "r1_honndana8", name: "あなた", text: "えーっと…『箏 操作要領』…？",overlay: { sprite: "./koto_manual.png", withText: true }, next: "r1_honndana9" },
    { id: "r1_honndana9", name: "みや", text: "そ、操作…？楽器なのに妙な表現ですね…",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r1_honndana10" },
    { id: "r1_honndana10", name: "あなた", text: "せっかくだし、読んでみるか…", next: "r1_honndana11" },
    { id: "r1_honndana11", name: " ", text: "",se:"paper", next: "r1_honndana12" },
    { id: "r1_honndana12", name: " ", text: "『……壱の間に置かれた箏はただの楽器ではない。』", next: "r1_honndana13" },
    { id: "r1_honndana13", name: " ", text: "『古(いにしえ)の呪術師によって、その全てが闇に覆われ、特別な儀式を経て作られたと伝わる。』", next: "r1_honndana14" },
    { id: "r1_honndana14", name: " ", text: "『その強固な構造は、人の力はおろか、時の流れにさえ容易には壊されない。』", next: "r1_honndana15" },
    { id: "r1_honndana15", name: " ", text: "『この黒漆の箏が特別なのは、ただその素材ゆえではない。これは、演奏者の技量を問わない「魔法の楽器」である。』", next: "r1_honndana16" },
    { id: "r1_honndana16", name: " ", text: "『玄人だろうと素人だろうと、この箏の前に座し、定められた作法に従えば、百戦錬磨のプロの演奏家すら凌駕する音色を奏でられるという。』", next: "r1_honndana17" },
    { id: "r1_honndana17", name: " ", text: "『しかし、その作法こそが、この箏の真に異質な点である。』", next: "r1_honndana18" },
    { id: "r1_honndana18", name: " ", text: "『通常の箏が象牙の爪を用いて弾かれるのに対し、この黒漆の箏は、右手の親指・人差し指・中指の三か所に、特製の指輪をはめて演奏しなければならない』", next: "r1_honndana19" },
    { id: "r1_honndana19", name: " ", text: "『この指輪は演奏者の指に合わせて輪の大きさを自動で調整する。』", next: "r1_honndana20" },
    { 
      id: "r1_honndana20", 
      name: " ", 
      text: "『一度指輪をはめれば、まるで自分の指の一部になったかのように、自由自在に箏を操れるだろう。』", 
      nextIfFlags: [
        { flags: ["koto_manual"], next: "r1_honndana_again1" },
        { flags: [], next: "r1_honndana21" }
      ], 
      next: "r1_honndana21" 
    },
    { id: "r1_honndana21", name: "あなた", text: "...だって。", next: "r1_honndana22" },
    { id: "r1_honndana22", name: "みや", text: "ひとまず、凄い箏であることは分かりました…!!",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r1_honndana23" },
    { id: "r1_honndana23", name: "あなた", text: "この本の内容が本当か嘘かは置いといて、なんでそんな箏がこんなところに…",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r1_honndana24" },
    { id: "r1_honndana24", name: "みや", text: "何か脱出の手がかりになるんでしょうか？",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r1_honndana25" },
    { id: "r1_honndana25", name: "みや", text: "この箏を演奏したら、鍵がもらえたりして。", portrait:{ who:"みや", face:"smile", size:"500px" },next: "r1_honndana26" },
    { id: "r1_honndana26", name: "あなた", text: "うーん…だとしても、3つの指輪が必要らしい。",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r1_honndana27" },
    { id: "r1_honndana27", name: "あなた", text: "もう少し、この部屋のことを調べてみるか…", next: "r1_honndana28" },
    { id: "r1_honndana28", name: " ", text: "情報：『箏 操作要領』を手に入れた！",se: "infomation",  set: { flags:["koto_manual"],info: ["koto_manual"] }, next: "r1_inspect" },

    // 本棚（二回目以降）
    { 
      id: "r1_honndana_again", 
      name: "あなた",
      text: "『箏 操作要領』が置いてあった場所だ。",
      choices: [
        { label: "もう一回読み直す", next: "r1_honndana11" },
        { label: "戻る", next: "r1_inspect" }
      ]
    },

    { id: "r1_honndana_again1", name: "あなた", text: "そもそもこの箏はなんの為にあるんだ…？", next: "r1_honndana_again2" },
    { id: "r1_honndana_again2", name: "あなた", text: "…あれ？裏表紙に何か書いてある。", next: "r1_honndana_again3" },
    { id: "r1_honndana_again3", name: " ", text: "『—―黒漆の箏は別名「呪いの箏」とも呼ばれており、真の力を引き出すには厳格な手順が必要である。』", next: "r1_honndana_again4" },
    { id: "r1_honndana_again4", name: " ", text: "『万が一、指輪が3つ揃う前に、演奏を試みた時――(ここで、記録は途切れている）』", next: "r1_honndana_again5" },
    { id: "r1_honndana_again5", name: "あなた", text: "なんだこれ…", next: "r1_honndana_again6" },
    { id: "r1_honndana_again6", name: "あなた", text: "とりあえず、慎重に行動するべきなんだろうな。", next: "r1_honndana_again7" },
    { id: "r1_honndana_again7", name: " ", text: "情報：『箏 操作要領』を更新しました。",se: "infomation", set: { flags: ["koto_manual_again"] ,infoNotes: ["koto_manual:again"] }, next: "r1_inspect" },

    // ===== 箏をどうする？ =====
    { 
      id: "r1_13genn", 
      name: "あなた",
      text: "目の前には、黒漆の箏が置かれている。",
      choices: [
        { label: "箏を観察する", next: "r1_look_koto" },
        { label: "箏を動かす", next: "r1_touch_koto" },
        { 
          label: "箏を演奏する", 
          nextIfFlags: [
            { flags: ["ring_big", "ring_middle", "ring_small", "koto_manual"], next: "r1_play_koto" },
            { flags: [], next: "r1_try_koto" }], 
          next: "r1_try_koto", }
      ]
    },

    //箏を観察する
    { id: "r1_look_koto", name: "みや", text: "やっぱり、箏っておいてあるだけで迫力凄いですね…", portrait:{ who:"みや", face:"kind", size:"500px" },next: "r1_look_koto2" },
    { id: "r1_look_koto2", name: "あなた", text: "確かに…普通に自分の身長より大きいもんな…",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r1_look_koto3" },
    { id: "r1_look_koto3", name: "あなた", text: "（立てかけてある箏が倒れてきたら流石に無傷はないだろうし…）", next: "r1_look_koto4" },
    { id: "r1_look_koto4", name: "みや", text: "…あれ？箏に何か彫られてません…？", portrait:{ who:"みや", face:"normal", size:"500px" },next: "r1_look_koto5" },
    { id: "r1_look_koto5", name: "あなた", text: "本当だ!これは……文字？", next: "r1_look_koto6" },
    { id: "r1_look_koto6", name: "みや", text: "『我の望みは箏の音である。さすれば、道は切り開かれる。』…ですかね。", next: "r1_look_koto7" },
    { id: "r1_look_koto7", name: "あなた", text: "箏の音……この箏を演奏を弾けってことか？", next: "r1_look_koto8" },
    { id: "r1_look_koto8", name: "みや", text: "で、でも私は、箏のことを覚えていないですし…", portrait:{ who:"みや", face:"fear", size:"500px" },next: "r1_look_koto9" },
    { id: "r1_look_koto9", name: "みや", text: "弾くにしたって何を演奏すればいいのか…", portrait:{ who:"みや", face:"confuse", size:"500px" },next: "r1_look_koto10" },
    { id: "r1_look_koto10", name: "あなた", text: "(なんかこういうのって、間違った音弾いたらOUTみたいなのありそうじゃないか…?)", next: "r1_look_koto11" },
    { id: "r1_look_koto11", name: "あなた", text: "(何を弾くべきか…手がかりはないのか…?)", next: "r1_look_koto12" },
    { id: "r1_look_koto12", name: " ", text: "情報:『黒漆の箏_1』が追加されました。", se: "infomation", set: { info: ["R_koto1"] }, next: "r1_inspect" },

    //箏を動かす
    { id: "r1_touch_koto", name: "あなた", text: "このカーペットの下気になるな…", next: "r1_touch_koto2" },
    { id: "r1_touch_koto2", name: "あなた", text: "ちょっと箏移動させるか…", next: "r1_touch_koto3" },
    { id: "r1_touch_koto3", name: "あなた", text: "…って重!?", next: "r1_touch_koto4" },
    { id: "r1_touch_koto4", name: "あなた", text: "まったく動かないんだけど…!!", next: "r1_touch_koto5" },
    { id: "r1_touch_koto5", name: "あなた", text: "え…これ何キロあるの…？多分これ、みやと二人がかりでも全く動かせないんじゃ…", next: "r1_touch_koto6" },
    { id: "r1_touch_koto6", name: "あなた", text: "それより…この箏、めっちゃ質感いい……絶対高級箏じゃん。",next: "r1_touch_koto7" },
    { id: "r1_touch_koto7", name: "みや", text: "凄い…よく分かりますね!",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r1_touch_koto8" },
    { id: "r1_touch_koto8", name: "あなた", text: "み、みや!?", portrait:{ who:"みや", face:"kind", size:"500px" },next: "r1_touch_koto9" },
    { id: "r1_touch_koto9", name: "あなた", text: "いつから背後に!?", portrait:{ who:"みや", face:"kind", size:"500px" },next: "r1_touch_koto10" },
    { id: "r1_touch_koto10", name: "みや", text: "「ちょっと箏移動させるか…、って重!?」", portrait:{ who:"みや", face:"fear", size:"500px" },next: "r1_touch_koto11" },
    { id: "r1_touch_koto11", name: "みや", text: "のあたりからです",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r1_touch_koto12" },
    { id: "r1_touch_koto12", name: "あなた", text: "(ほぼ最初からじゃん…）",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r1_touch_koto13" },
    { id: "r1_touch_koto13", name: "あなた", text: "…それで、みやはこの箏に用があったの？",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r1_touch_koto14" },
    { id: "r1_touch_koto14", name: "みや", text: "あ、いえ、箏ではなくて…", portrait:{ who:"みや", face:"normal", size:"500px" },next: "r1_touch_koto15" },
    { id: "r1_touch_koto15", name: "みや", text: "あなたにちょっと見せたいものがありまして…", portrait:{ who:"みや", face:"kind", size:"500px" },next: "r1_touch_koto16" },
    { id: "r1_touch_koto16", name: "あなた", text: "自分に…？", portrait:{ who:"みや", face:"kind", size:"500px" },next: "r1_touch_koto17" },
    { id: "r1_touch_koto17", name: "みや", text: "はい!お時間のある時でいいので、掛け軸の所まで来ていただけますか…？", portrait:{ who:"みや", face:"normal", size:"500px" },next: "r1_touch_koto18" },
    { id: "r1_touch_koto18", name: "あなた", text: "分かった!…というか、全然今でも―――", next: "r1_touch_koto19" },
    { id: "r1_touch_koto19", name: " ", text: "…って行ってしまった。", next: "r1_touch_koto20" },
    { id: "r1_touch_koto20", name: "あなた", text: "(記憶が無い状態で、よくあんなに元気になれるな…)", next: "r1_touch_koto21" },
    { id: "r1_touch_koto21", name: " ", text: "情報:『黒漆の箏_2』が追加されました。",se: "infomation",  set: { flags: ["kakejiku_みや"], info: ["R_koto2"] }, next: "r1_inspect" },

    //箏を演奏する(不完全)
    { id: "r1_try_koto", name: "あなた", text: "(まだ、この部屋の全てを調べ終えたわけではないが…）", next: "r1_try_koto2" },
    { id: "r1_try_koto2", name: "あなた", text: "(この箏の音色がどうしても気になる…）", next: "r1_try_koto3" },
    { id: "r1_try_koto3", name: "あなた", text: "(そういえば、弦を指ではじく技法とかもあるよな…？)",nextIfFlags: [
            { flags: ["koto_noroi"], next: "r1_try_koto_again" },
            { flags: [], next: "r1_try_koto4" }], next: "r1_try_koto4" },
    { id: "r1_try_koto4", name: "あなた", text: "(試しに一音だけ弾いてみようか)", next: "r1_try_koto5" },
    { id: "r1_try_koto5",stopBgm:true, name: " ", text: "キーン…", next: "r1_try_koto6" },
    { id: "r1_try_koto6", name: "あなた", text: "!!!", next: "r1_try_koto7" },
    { id: "r1_try_koto7", name: "あなた", text: "これは…!?", next: "r1_try_koto8" },
    { id: "r1_try_koto8", name: " ", text: "自分が弦に触れた瞬間、耳を劈くような音が響き渡る。", next: "r1_try_koto9" },
    { id: "r1_try_koto9", name: " ", text: "大きい音ではないが、鼓膜が破れそうなくらい煩く感じる。", next: "r1_try_koto10" },
    { id: "r1_try_koto10", name: " ", text: "一音しか鳴らしてないが、頭にずっと響き渡っている。", next: "r1_try_koto11" },
    { id: "r1_try_koto11", name: " ", text: "明らかに普通の和楽器からは鳴らない不快な音であるのに、", next: "r1_try_koto12" },
    { id: "r1_try_koto12", name: " ", text: "なぜかずっと聞いていたいと思う。", next: "r1_try_koto13" },
    { id: "r1_try_koto13", name: " ", text: "鼓膜や思考は拒絶反応を起こしているのに、身体が言うことを聞かない。", next: "r1_try_koto14" },
    { id: "r1_try_koto14", name: "あなた", text: "…いや、思考も喜んでいるのか？", next: "r1_try_koto15" },
    { id: "r1_try_koto15", name: "あなた", text: "弾きたい…弾きたくない…聞きたくない、聞きたい、聞きたい弾きたい聞きたい弾きたい。", next: "r1_try_koto16" },
    { id: "r1_try_koto16", name: "あなた", text: "もっともっともっと――", next: "r1_try_koto17" },
    { id: "r1_try_koto17", name: "みや", text: "やめて下さい…!!", portrait:{ who:"みや", face:"fear", size:"500px" },next: "r1_try_koto18" },
    { id: "r1_try_koto18", name: " ", text: "......", portrait:{ who:"みや", face:"fear", size:"500px" },next: "r1_try_koto19" },
    { id: "r1_try_koto19", name: " ", text: ".....みや?",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r1_try_koto20" },
    { id: "r1_try_koto20", name: "みや", text: "大丈夫ですか…?", portrait:{ who:"みや", face:"confuse", size:"500px" },next: "r1_try_koto21" },
    { id: "r1_try_koto21", name: " ", text: "大丈．．．あれ、自分は一体何を．．．?",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "r1_try_koto22" },
    { id: "r1_try_koto22", name: "あなた", text: "(試しに箏の音が気になって…触って……なんであんなに奇怪な音を弾き続けてた?)", next: "r1_try_koto23" },
    { id: "r1_try_koto23", name: " ", text: "(…待てよ、そもそもなんで曲が弾けた?", next: "r1_try_koto24" },
    { id: "r1_try_koto24", name: " ", text: "(譜面なんてもの見ていないぞ…)", next: "r1_try_koto25" },
    { id: "r1_try_koto25", name: "みや", text: "…演奏を止めてしまってすみません。",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "r1_try_koto26" },
    { id: "r1_try_koto26", name: "みや", text: "ただ…ちょっと、これ以上聞いていると、頭がおかしくなりそうな音だったので…",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r1_try_koto27" },
    { id: "r1_try_koto27", name: "みや", text: "勿論、演奏そのものが嫌だった訳では無いんですけど…", portrait:{ who:"みや", face:"confuse", size:"500px" },next: "r1_try_koto28" },
    { id: "r1_try_koto28", name: "みや", text: "頭に直接響き渡る…と言いますか、ちょっと…刺激が強くて…",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r1_try_koto29" },
    { id: "r1_try_koto29", name: "あなた", text: "(弾いてる時は確かに、心地よかった。けど聞いてる側が不快な音楽を生み出すなんて…)", next: "r1_try_koto30" },
    { id: "r1_try_koto30", name: "あなた", text: "まるで呪いじゃないか…", next: "r1_try_koto31" },
    { id: "r1_try_koto31", name: "みや", text: "どうかしました…?", portrait:{ who:"みや", face:"normal", size:"500px" },next: "r1_try_koto32" },
    { id: "r1_try_koto32", name: "あなた", text: "ううん、なんでもないよ。それと、演奏を止めてくれてありがとう。", portrait:{ who:"みや", face:"normal", size:"500px" },next: "r1_try_koto33" },
    { id: "r1_try_koto33", name: "みや", text: "ふふ…演奏を止めてお礼を言われると思っていませんでした。",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r1_try_koto34" },
    { id: "r1_try_koto34", name: "みや", text: "どういたしまして、ですかね?",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r1_try_koto35" },
    { id: "r1_try_koto35", name: "あなた", text: "(自分の直感を信じるとあのまま演奏し続けていたら、ちょっと不味いことになっていた…かもしれない。)", next: "r1_try_koto36" },
    { id: "r1_try_koto36", name: "あなた", text: "(ちゃんとこの部屋の事を調べてからまた来よう。)",set: { flags: ["koto_noroi"] }, next: "r1_inspect" },

    //箏を演奏する(不完全＿二回目)
    { id: "r1_try_koto_again", name: "みや", text: "え、もう一回弾くんですか…？",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "r1_try_koto_again2" },
    { id: "r1_try_koto_again2", name: "あなた", text: "(みやが凄く嫌そうな顔をしている…)",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "r1_try_koto_again3" },
    { id: "r1_try_koto_again3", name: "あなた", text: "(もう少し調べてから演奏しに戻ろう…)", next: "r1_inspect" },
    
    // === 箏(演奏） ===
    { id: "r1_play_koto", name: "あなた", text: "みや、指輪3つ集まったよ。", next: "r1_play_koto2" },
    { id: "r1_play_koto2", name: "みや", text: "本当ですか!!ありがとうございます!!", portrait:{ who:"みや", face:"smile", size:"500px" },next: "r1_play_koto3" },
    { id: "r1_play_koto3", name: "あなた", text: "これで…いいんだよな?",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r1_play_koto4" },
    { id: "r1_play_koto4", name: "みや", text: "先ほど見つけた本によると…恐らく大丈夫なはずです。",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r1_play_koto5" },
    { id: "r1_play_koto5", name: "みや", text: "それにしても、指輪を3つ装着するだけで、本当に箏が弾けるんですかね…",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r1_play_koto6" },
    { id: "r1_play_koto6", name: "あなた", text: "資料には確かに書いてあったけど、実際出来るのかもよく分かってないしな。",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r1_play_koto7" },
    { id: "r1_play_koto7", name: "みや", text: "うーん、どちらにしてもそれを付けて演奏しないと分からないですよね。",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "r1_play_koto8" },
    { id: "r1_play_koto8", name: "みや", text: "一回弾いてみるのがいいんじゃないでしょうか?", portrait:{ who:"みや", face:"normal", size:"500px" },next: "r1_play_koto9" },
    { id: "r1_play_koto9", name: "あなた", text: "それもそうだな。", portrait:{ who:"みや", face:"normal", size:"500px" },next: "r1_play_koto10" },
    { id: "r1_play_koto10", name: "みや", text: "それで…どちらが演奏します?",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r1_play_koto11" },
    { id: "r1_play_koto11", name: "あなた", text: "(…確かに。指輪は3つだけ。二人分の指輪はないな。)", portrait:{ who:"みや", face:"normal", size:"500px" },next: "r1_play_koto12" },
    { id: "r1_play_koto12", name: "あなた", text: "箏の側面にも、どっちが弾けとか書かれてなかったし…",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r1_play_koto13" },
    { id: "r1_play_koto13", name: "あなた", text: "みやは演奏したいとかある…?",portrait:{ who:"みや", face:"normal", size:"500px" },next: "r1_play_koto14" },
    { id: "r1_play_koto14", name: "みや", text: "うーん、特に希望はないですね。",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r1_play_koto15" },
    { id: "r1_play_koto15", name: "みや", text: "むしろ逆に何か希望はありますか…？",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r1_play_koto16" },
    { id: "r1_play_koto16", name: "みや", text: "指輪を見つけたのはあなたですし、決めてもらった方が私もありがたいです。", portrait:{ who:"みや", face:"kind", size:"500px" },next: "r1_play_koto17" },
    { id: "r1_play_koto17", name: "みや", text: "どっちが弾け…のように書かれた資料は見当たらなかったですし、本当にどちらでも大丈夫なんだと思います。", portrait:{ who:"みや", face:"smile", size:"500px" },next: "r1_play_koto18" },
    { id: "r1_play_koto18", name: "あなた", text: "指輪を付けると弾き方が分かるらしいので、もし本当であれば、あなたが箏を弾いたことがあってもなくても、きっと演奏が出来ると思いますよ。",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r1_play_koto19" },
    { id: "r1_play_koto19", name: "あなた", text: "(自分が弾くか…それともみやが弾くか…)", next: "r1_play_koto20" },
    { 

      id: "r1_play_koto20", 
      name: "あなた", 
      text: "(どうしようか…)",
      choices: [
        { label: "自分が演奏する", next: "r1_あなた_koto" },
        { label: "みやに演奏してもらう。", next: "r1_みや_koto" }
      ]
    },

    // === 自分が演奏する　===
    { id: "r1_あなた_koto", name: "あなた", text: "今回は自分が演奏しようかな。", next: "r1_あなた_koto2" },
    { id: "r1_あなた_koto2", name: "みや", text: "はい!!", portrait:{ who:"みや", face:"smile", size:"500px" },next: "r1_あなた_koto3" },
    { id: "r1_あなた_koto3", name: "あなた", text: "…あれ、なんか嬉しそう?", portrait:{ who:"みや", face:"smile", size:"500px" },next: "r1_あなた_koto4" },
    { id: "r1_あなた_koto4", name: "みや", text: "あ…実は、ちょっと安心してて…",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r1_あなた_koto5" },
    { id: "r1_あなた_koto5", name: "あなた", text: "安心?",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r1_あなた_koto6" },
    { id: "r1_あなた_koto6", name: "みや", text: "記憶が戻っていないので…上手く弾ける自信がなかったのと、",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r1_あなた_koto7" },
    { id: "r1_あなた_koto7", name: "みや", text: "もし私に箏に対する記憶があるなら…あなたの演奏を聴いて、何か思い出すかもしれないなと思って。", portrait:{ who:"みや", face:"kind", size:"500px" },next: "r1_あなた_koto8" },
    { id: "r1_あなた_koto8", name: "あなた", text: "そっか…",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r1_あなた_koto9" },
    { id: "r1_あなた_koto9", name: "あなた", text: "みやが何か感じられるようになるべく頑張るね!",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r1_あなた_koto10" },
    { id: "r1_あなた_koto10", name: "あなた", text: "って言っても、どう頑張るのか分からないけど…", portrait:{ who:"みや", face:"kind", size:"500px" },next: "r1_あなた_koto11" },
    { id: "r1_あなた_koto11", name: "みや", text: "ふふ…ありがとうございます!", next: "r1_あなた_koto12" },
    { id: "r1_あなた_koto12", name: "みや", text: "私も何か感じられるように頑張りますね…!!", next: "r1_あなた_koto13" },
    { id: "r1_あなた_koto13", stopBgm:true,name: "あなた", text: "(とりあえず…箏の方に向かうか)", next: "r1_あなた_koto14" },
    { id: "r1_あなた_koto14", name: " ", text: "", se:"walk",next: "r1_あなた_koto15" },
    { id: "r1_あなた_koto15", name: "あなた", text: "(箏の前に座って、指輪を付けて…思ってたよりちゃんとなじむな)", next: "r1_あなた_koto16" },
    { id: "r1_あなた_koto16", name: "あなた", text: "(……)", next: "r1_あなた_koto17" },
    { id: "r1_あなた_koto17", name: "あなた", text: "(……。さて、ここからどうするんだ?)", next: "r1_あなた_koto18" },
    { id: "r1_あなた_koto18", name: "あなた", text: "(と、とりあえず一番奥の弦に触ってみるか…)", next: "r1_あなた_koto19" },
    { id: "r1_あなた_koto19", name: " ", text: "", se:"koto",next: "r1_あなた_koto20" },
    { id: "r1_あなた_koto20", name: "あなた", text: "!!", next: "r1_あなた_koto21" },
    { id: "r1_あなた_koto21", name: " ", text: "――みやの息を呑む音が聞こえた気がした。", next: "r1_あなた_koto22" },
    { id: "r1_あなた_koto22", name: " ", text: "しかし、自分はみやの方を向くことはなかった。", next: "r1_あなた_koto23" },
    { id: "r1_あなた_koto23", name: "あなた", text: "分かる。次に弾くべき音が。", next: "r1_あなた_koto24" },
    { id: "r1_あなた_koto24", name: " ", text: "手が勝手に動く。", next: "r1_あなた_koto25" },
    { id: "r1_あなた_koto25", name: " ", text: "音を連ねる、奏でる、だんだんと音がまじりあう。", next: "r1_あなた_koto26" },
    { id: "r1_あなた_koto26", name: " ", text: "どんな音楽を奏でてるか、それがいい演奏なのかもよく分からない。", next: "r1_あなた_koto27" },
    { id: "r1_あなた_koto27", name: " ", text: "自分はただ、箏を弾くことに没頭していた。", next: "r1_あなた_koto28" },
    { id: "r1_あなた_koto28", name: " ", text: "――", set: { bg: "#000" }, next: "r1_あなた_koto29" },
    { id: "r1_あなた_koto29", name: " ", text: "――",  set: { bg: "ichinoma.png" },next: "r1_あなた_koto30" },
    { id: "r1_あなた_koto30", name: "あなた", text: "(次に演奏するべき音が分からない…)", next: "r1_あなた_koto31" },
    { id: "r1_あなた_koto31", name: "あなた", text: "(これで終わり…なのか?)", next: "r1_あなた_koto32" },
    { id: "r1_あなた_koto32", name: " ", text: "",se:"clap", next: "r1_あなた_koto33" },
    { id: "r1_あなた_koto33", name: "みや", text: "お疲れ様です…!!",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r1_あなた_koto34" },
    { id: "r1_あなた_koto34", name: "あなた", text: "お、終わったのか?", portrait:{ who:"みや", face:"kind", size:"500px" },next: "r1_あなた_koto35" },
    { id: "r1_あなた_koto35", name: "みや", text: "凄かったですよ!!迫力もあって…圧倒されてました。",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r1_あなた_koto36" },
    { id: "r1_あなた_koto36", name: "あなた", text: "(そ、そんな風に聞こえてたんだ…指輪の力を借りたとはいえ、ちょっと嬉しいな)",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r1_あなた_koto37" },
    { id: "r1_あなた_koto37", name: "あなた", text: "それで…みやは、何か思い出せた?", portrait:{ who:"みや", face:"smile", size:"500px" },next: "r1_あなた_koto38" },
    { id: "r1_あなた_koto38", name: "みや", text: "…うーん、まだ、思い出せていないです。こんな素敵な演奏をしてくださったのに、すみません。", portrait:{ who:"みや", face:"confuse", size:"500px" },next: "r1_あなた_koto39" },
    { id: "r1_あなた_koto39", name: "あなた", text: "…ううん、大丈夫だよ。",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "r1_あなた_koto40" },
    { id: "r1_あなた_koto40", name: "みや", text: "ありがとうございます。…ただ、", portrait:{ who:"みや", face:"kind", size:"500px" },next: "r1_あなた_koto41" },
    { id: "r1_あなた_koto41", name: "あなた", text: "…ただ？",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r1_あなた_koto42" },
    { id: "r1_あなた_koto42", name: "みや", text: "あなたの箏を聞いてると――", portrait:{ who:"みや", face:"normal", size:"500px" },next: "r1_あなた_koto43" },
    { id: "r1_あなた_koto43", name: "みや", text: "…少し懐かしいような気がしたんです。",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r1_あなた_kagi" },

    // === みやに演奏してもらう ===
    { id: "r1_みや_koto", name: "あなた", text: "みやにお願いしてもいいかな?", next: "r1_みや_koto2" },
    { id: "r1_みや_koto2", name: "みや", text: "え…!!本当に言ってます!?",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r1_みや_koto3" },
    { id: "r1_みや_koto3", name: "みや", text: "まだ記憶戻ってませんし…和楽器のことあなたよりも分からないですし…", portrait:{ who:"みや", face:"confuse", size:"500px" },next: "r1_みや_koto4" },
    { id: "r1_みや_koto4", name: "あなた", text: "さっきの本には、誰でも演奏できるって書いてあるから、箏のことを分かってなくても弾けると思うよ。", portrait:{ who:"みや", face:"confuse", size:"500px" },next: "r1_みや_koto5" },
    { id: "r1_みや_koto5", name: "あなた", text: "それに、自分の知ってるみやだったら、箏を弾いたことがあるはずなんだ。", portrait:{ who:"みや", face:"confuse", size:"500px" },next: "r1_みや_koto6" },
    { id: "r1_みや_koto6", name: "あなた", text: "箏を弾いたら、もしかしたら何か感じられるかもしれないし…", portrait:{ who:"みや", face:"confuse", size:"500px" },next: "r1_みや_koto7" },
    { id: "r1_みや_koto7", name: "みや", text: "……",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r1_みや_koto8" },
    { id: "r1_みや_koto8", name: "みや", text: "確かに…一理ありますね。",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r1_みや_koto9" },
    { id: "r1_みや_koto9", name: "みや", text: "でも…本当にいいんですか?",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r1_みや_koto10" },
    { id: "r1_みや_koto10", name: "みや", text: "記憶が無い人に任せても。",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "r1_みや_koto11" },
    { id: "r1_みや_koto11", name: "あなた", text: "…うん。むしろ多分みやの方が上手に弾けるんじゃないかな?",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "r1_みや_koto12" },
    { id: "r1_みや_koto12", name: "みや", text: "それだけは絶対ありえないです!",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r1_みや_koto13" },
    { id: "r1_みや_koto13", name: "みや", text: "でも…ありがとうございます。", portrait:{ who:"みや", face:"kind", size:"500px" },next: "r1_みや_koto14" },
    { id: "r1_みや_koto14", name: "みや", text: "私、やってみますね!",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r1_みや_koto15" },
    { id: "r1_みや_koto15", name: "あなた", text: "うん!頑張って!",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r1_みや_koto16" },
    { id: "r1_みや_koto16",stopBgm:true, name: " ", text: "自分はみやに指輪を渡した。", next: "r1_みや_koto17" },
    { id: "r1_みや_koto17", name: " ", text: "みやは箏の前に移動すると、指輪を手にはめる", next: "r1_みや_koto18" },
    { id: "r1_みや_koto18", name: " ", text: "緊張しているのか険しい顔つきだ。", next: "r1_みや_koto19" },
    { id: "r1_みや_koto19", name: " ", text: "みやはじっと箏の弦を見つめると、一本の弦に手を掛ける。", next: "r1_みや_koto20" },
    { id: "r1_みや_koto20", name: " ", text: "そして―—", next: "r1_みや_koto21" },
    { id: "r1_みや_koto21", name: " ", text: "",se:"koto", next: "r1_みや_koto22" },
    { id: "r1_みや_koto22", name: "あなた", text: "!!", next: "r1_みや_koto23" },
    { id: "r1_みや_koto23", name: " ", text: "澱みのない澄んだ音が響き渡る。", next: "r1_みや_koto24" },
    { id: "r1_みや_koto24", name: "みや", text: "…なんででしょう。",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r1_みや_koto25" },
    { id: "r1_みや_koto25", name: "みや", text: "…どこか、懐かしく思います。", portrait:{ who:"みや", face:"kind", size:"500px" },next: "r1_みや_koto26" },
    { id: "r1_みや_koto26", name: " ", text: "みやの目つきが変わった。", next: "r1_みや_koto27" },
    { id: "r1_みや_koto27", name: " ", text: "彼女は一心不乱に箏を見つめ、音を奏でている。", next: "r1_みや_koto28" },
    { id: "r1_みや_koto28", name: " ", text: "自分はただただ、その演奏に圧倒されていた。", next: "r1_みや_koto29" },
    { id: "r1_みや_koto29", name: " ", text: "――",  set: { bg: "#FFF" }, next: "r1_みや_koto30" },
    { id: "r1_みや_koto29", name: " ", text: "――",  set: { bg: "ichinoma.png" }, next: "r1_みや_koto30" },
    { id: "r1_みや_koto30", name: " ", text: "(…演奏が止まった?)", next: "r1_みや_koto31" },
    { id: "r1_みや_koto31", name: " ", text: "……", portrait:{ who:"みや", face:"confuse", size:"500px" },next: "r1_みや_koto32" },
    { id: "r1_みや_koto32", name: " ", text: "えっと……",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "r1_みや_koto33" },
    { id: "r1_みや_koto33", name: "みや", text: "…多分、終わりました。",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r1_みや_koto34" },
    { id: "r1_みや_koto34", name: "あなた", text: "お疲れ様!凄かったよ!", portrait:{ who:"みや", face:"normal", size:"500px" },next: "r1_みや_koto35" },
    { id: "r1_みや_koto35", name: "みや", text: "ありがとうございます…",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r1_みや_koto36" },
    { id: "r1_みや_koto36", name: "みや", text: "箏を演奏するのに夢中で、自分の音は殆ど耳に入らなかったんですけど…", portrait:{ who:"みや", face:"smile", size:"500px" },next: "r1_みや_koto37" },
    { id: "r1_みや_koto37", name: "みや", text: "いい演奏が出来ていたのなら…よかったです。",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r1_みや_koto38" },
    { id: "r1_みや_koto38", name: "あなた", text: "ちなみに、何か思い出せたりは…",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r1_みや_koto39" },
    { id: "r1_みや_koto39", name: "みや", text: "…それが、まだ何も思い出せていなくて…",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "r1_みや_koto40" },
    { id: "r1_みや_koto40", name: "あなた", text: "そっか…",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "r1_みや_koto41" },
    { id: "r1_みや_koto41", name: "みや", text: "でも、とても楽しかったです!",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r1_みや_koto42" },
    { id: "r1_みや_koto42", name: "みや", text: "弾かせてくれて、ありがとうございました。",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r1_みや_koto43" },
    { id: "r1_みや_koto43", name: "あなた", text: "いやいや…お礼を言われるほどのことは…", next: "r1_あなた_kagi" },

    // 木箱
    { id: "r1_あなた_kagi", name: " ", text: "――カチャ", se:"unlocked",next: "r1_あなた_kagi2" },
    { id: "r1_あなた_kagi2", name: "あなた", text: "ん?鍵が開いた音…?", next: "r1_あなた_kagi3" },
    { id: "r1_あなた_kagi3", name: "みや", text: "もしかしたら、箏を弾いたことで、何か変わったのかもしれません…!!",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r1_あなた_kagi4" },
    { id: "r1_あなた_kagi4", name: "あなた", text: "そうだね!", portrait:{ who:"みや", face:"kind", size:"500px" },next: "r1_あなた_kagi5" },
    { id: "r1_あなた_kagi5", name: "あなた", text: "鍵がかかっていた場所…どこかにあったっけ?", set: { flags: ["r1_Playing"] }, next: "r1_inspect" },

    // ==== 植木鉢 ====
    { id: "r1_ki", name: "あなた", text: "部屋の隅に観葉植物が置かれている。", next: "r1_ki2" },
    { id: "r1_ki2", name: "あなた", text: "土は乾いているが、葉っぱを見る限り、きちんと手入れはされてそうだ。", next: "r1_ki3" },
    { id: "r1_ki3", name: "あなた", text: "異質な空間だが、こういった普通の家具があると、少し安心感を覚える。", next: "r1_ki4" },
    { id: "r1_ki4", name: "あなた", text: "…ん？土の中になにか埋まっている？", next: "r1_ki5" },
    { id: "r1_ki5", name: "あなた", text: "土の中に手を突っ込むのちょっと気が引けるけど…今は仕方ないよね", next: "r1_ki6" },
    { id: "r1_ki6", name: "あなた", text: "これは…指輪？",overlay: { sprite: "./yubiwa_silver.png", withText: true }, next: "r1_ki7" },
    { id: "r1_ki7", name: "あなた", text: "一体何に使うんだろう?", next: "r1_ki8" },
    { id: "r1_ki8", name: " ", text: "情報:『指輪(大)』を手に入れた。", se: "infomation", set: { flags: ["ring_big"], info: ["ring_big"] }, next: "r1_inspect" },

    // 植木鉢（二回目）
    { id: "r1_ki_again", name: "あなた", text: "観葉植物が置かれている。指輪はもう取った。", next: "r1_inspect" },

    // ==== カーテン ====
    { id: "r1_white_hirahira", name: "あなた", text: "(カーテンだ)", next: "r1_white_hirahira2" },
    { id: "r1_white_hirahira2", name: "あなた", text: "もしかして、カーテンの内側には窓が…", next: "r1_white_hirahira3" },
    { id: "r1_white_hirahira3", name: " ", text: "シャッ", next: "r1_white_hirahira4" },
    { id: "r1_white_hirahira4", name: "あなた", text: "……", next: "r1_white_hirahira5" },
    { id: "r1_white_hirahira5", name: "あなた", text: "……ない。", next: "r1_white_hirahira6" },
    { id: "r1_white_hirahira6", name: "あなた", text: "で、ですよね…ここまで来て、そう簡単に出れないか…", next: "r1_white_hirahira7" },
    { id: "r1_white_hirahira7", name: "あなた", text: "って…これは…木箱?", overlay: { sprite: "./akazunokibako.png", withText: true },next: "r1_white_hirahira8" },
    { id: "r1_white_hirahira8", name: "あなた", text: "大きさは、手のひらサイズで割と小さめ。",overlay: { sprite: "./akazunokibako.png", withText: true }, next: "r1_white_hirahira9" },
    { id: "r1_white_hirahira9", name: "あなた", text: "壁に埋まっていて、どこにも運べない…",nextIfFlags: [
        { flags: ["r1_Playing",], next: "r1_kibako_hatsu" },
        { flags: [], next: "r1_white_hirahira10" }
      ], next: "r1_white_hirahira10" },
    { id: "r1_white_hirahira10", name: " ", text: "ガチャガチャ", next: "r1_white_hirahira11" },
    { id: "r1_white_hirahira11", name: "あなた", text: "鍵も開かないし…鍵穴っぽいものも見当たらない。", next: "r1_white_hirahira12" },
    { id: "r1_white_hirahira12", name: "あなた", text: "この中には何が入ってるんだ…?", next: "r1_white_hirahira13" },
    { id: "r1_white_hirahira13", name: " ", text: "情報:『壁の穴の中の木箱』を手に入れた！",se: "infomation",  set: { info: ["ki_box"]}, next: "r1_inspect" },

    // カーテン(二回目)
    { 
      id: "r1_white_hirahira_again", 
      name: "あなた", 
      text: "カーテンだ。",
      nextIfFlags: [
        { flags: ["Green",], next: "r1_kibako16" },
        { flags: ["r1_Playing",], next: "r1_kibako" },
        { flags: [], next: "r1_white_hirahira_again2" }
      ],
      next: "r1_white_hirahira_again2" 
    },
    { id: "r1_white_hirahira_again2", name: "あなた", text: "この裏には手のひらサイズの木箱があった", overlay: { sprite: "./akazunokibako.png", withText: true },next: "r1_white_hirahira_again3" },
    { id: "r1_white_hirahira_again3", name: "あなた", text: "鍵はかかっているが、開ける方法が分からない。", next: "r1_white_hirahira_again4" },
    { id: "r1_white_hirahira_again4", name: "あなた", text: "カーテンの後ろに窓があったら、今頃出れてるのかな…", next: "r1_inspect" },

    { id: "r1_kibako", name: "あなた", text: "この裏には木箱があったはず…", next: "r1_kibako2" },
    { id: "r1_kibako2", name: "あなた", text: "(もしかして…)", next: "r1_kibako3" },
    { id: "r1_kibako3", name: " ", text: "カチャ", next: "r1_kibako4" },
    { id: "r1_kibako4", name: "あなた", text: "やっぱり!空いてる!", next: "r1_kibako5" },
    { id: "r1_kibako5", name: "みや", text: "こんなところに木箱があったんですね!",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r1_kibako6" },
    { id: "r1_kibako6", name: "あなた", text: "そうそう、自分が見た時は鍵がかかってて開かなかったんだよね",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r1_kibako7" },
    { id: "r1_kibako7", name: "みや", text: "中には何が入ってますか?",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r1_kibako8" },
    { id: "r1_kibako8", name: "あなた", text: "これは―――", overlay: { sprite: "./GREEN.png", withText: true }, next: "r1_kibako9" },
    { id: "r1_kibako9", name: "あなた", text: "液体…?",overlay: { sprite: "./GREEN.png", withText: true }, next: "r1_kibako10" },
    { id: "r1_kibako10", name: "みや", text: "随分と毒々しい色をしていますね…", overlay: { sprite: "./GREEN.png", withText: true },next: "r1_kibako11" },
    { id: "r1_kibako11", name: "あなた", text: "でも、箏を弾いて得られたってことは、重要なものなんじゃないか?", next: "r1_kibako12" },
    { id: "r1_kibako12", name: "みや", text: "確かに…その可能性は高いですね。", next: "r1_kibako13" },
    { id: "r1_kibako13", name: "みや", text: "そうですね…大事にとっておきましょう。何か今後脱出の手がかりになるかもしれません。", next: "r1_kibako14" },
    { id: "r1_kibako14", name: "あなた", text: "そうだね。", next: "r1_kibako15" },
    { id: "r1_kibako15", name: " ", text: "情報:『謎の液体(緑)』を手に入れた!",se: "infomation",  set: { flags: ["Green"], info: ["drink_green"] ,infoNotes: ["ki_box:opening"]}, next: "r1_inspect" },
    
    //木箱を初めて見た時にすでに空いてた場合。
    { id: "r1_kibako_hatsu", name: "あなた", text: "あ、空いてる。", next: "r1_kibako_hatsu2" },
    { id: "r1_kibako_hatsu2", name: "みや", text: "カーテンの後ろに何かありましたか？", ortrait:{ who:"みや", face:"normal", size:"500px" }, next: "r1_kibako_hatsu3" },
    { id: "r1_kibako_hatsu3", name: "あなた", text: "鍵がついてる小さな木箱があったんだけど…今は鍵が掛かってないんだよね。",portrait:{ who:"みや", face:"normal", size:"500px" },  next: "r1_kibako_hatsu4" },
    { id: "r1_kibako_hatsu4", name: "あなた", text: "もしかしたら、さっきの演奏が終わった後の「カチャ」って音はこの木箱かも。", portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r1_kibako_hatsu5" },
    { id: "r1_kibako_hatsu5", name: "あなた", text: "なるほど…！！見つかってよかったですね！",portrait:{ who:"みや", face:"kind", size:"500px" },  next: "r1_kibako7" },

    // 緑の液体取得後の会話(Greenを手に入れた後のagain)
    { id: "r1_kibako16", name: "みや", text: "ところで…この液体、どうやって使うんでしょうか？", overlay: { sprite: "./GREEN.png", withText: true },next: "r1_kibako17" },
    { id: "r1_kibako17", name: "あなた", text: "うーん…飲むのか？それとも何かにかけるのか？",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r1_kibako18" },
    { id: "r1_kibako18", name: "みや", text: "見た目が毒々しいので、飲むのはちょっと…",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "r1_kibako19" },
    { id: "r1_kibako19", name: "あなた", text: "確かに。何かに使う時が来るまで、大切に持っておこう。", next: "r1_inspect" },

    // ==== 本(古文書) ====
    { id: "r1_book_glasses", name: "あなた", text: "箏の前に本と眼鏡が置かれている。", next: "r1_book_glasses2" },
    { id: "r1_book_glasses2", name: "あなた", text: "この眼鏡…度が入ってないっぽい。", overlay: { sprite: "./mega_ne.png", withText: true },next: "r1_book_glasses3" },
    { id: "r1_book_glasses3", name: "あなた", text: "どうして伊達メガネがこんなところに…", next: "r1_book_glasses4" },
    { id: "r1_book_glasses4", name: "あなた", text: "そもそも、眼鏡を床に置いてるの相当危険じゃないか…?", next: "r1_book_glasses5" },
    { id: "r1_book_glasses5", name: "あなた", text: "そして、この本――",overlay: { sprite: "./chiisanashizuku_ichi.png", withText: true }, next: "r1_book_glasses6" },
    { id: "r1_book_glasses6", name: "あなた", text: "紙の質感からして、物凄く古そう…",overlay: { sprite: "./chiisanashizuku_ichi.png", withText: true }, next: "r1_book_glasses7" },
    { id: "r1_book_glasses7", name: "あなた", text: "表紙には何も書かれていないけど...読んでみるか", next: "r1_book_glasses8" },
    { id: "r1_book_glasses8", name: " ", text: "",se:"paper", next: "r1_book_glasses9" },
    { id: "r1_book_glasses9", name: " ", text: "『小さな雫 -壱-』", next: "r1_book_glasses10" },
    { id: "r1_book_glasses10", name: " ", text: "『むかしむかし、ある街に心優しい女の子が住んでいました。』", next: "r1_book_glasses11" },
    { id: "r1_book_glasses11", name: " ", text: "『女の子は街中の人から愛されて、学校の人気者です。』", next: "r1_book_glasses12" },
    { id: "r1_book_glasses12", name: " ", text: "『しかし、ある時、女の子のお母さんが不治の病になってしまいました。』", next: "r1_book_glasses13" },
    { id: "r1_book_glasses13", name: " ", text: "『お医者様に見せても首を横に振られ、魔女様に見せても知らんぷりをされ、近所の人に見せてもそそくさの逃げられてしまいます。』", next: "r1_book_glasses14" },
    { id: "r1_book_glasses14", name: " ", text: "『皆、女の子を助けてあげたい気持ちはあるのですが、不治の病を移されたくないのです。』", next: "r1_book_glasses15" },
    { id: "r1_book_glasses15", name: " ", text: "『女の子は途方にくれてしまいました。』", next: "r1_book_glasses16" },
    { id: "r1_book_glasses16", name: " ", text: "『しかしある時、たまたま街を訪れていた旅人さんから、いいことを教えていただけました。』", next: "r1_book_glasses17" },
    { id: "r1_book_glasses17", name: " ", text: "『「隣町に腕のきく魔女様がいらっしゃる。もし困ったことがあるなら彼女に聞いてみるといい。」』", next: "r1_book_glasses18" },
    { id: "r1_book_glasses18", name: " ", text: "『心優しい女の子は、お母さんを助ける為、隣町へ旅にでることにしました。』", next: "r1_book_glasses19" },
    { id: "r1_book_glasses19", name: " ", text: "……ここで、ページは途切れている。", next: "r1_book_glasses20" },
    { id: "r1_book_glasses20", name: "あなた", text: "これも何かのヒント…なのか?",nextIfFlags: [
        { flags: ["megane"], next: "r1_inspect" },
        { flags: [], next: "r1_book_glasses21" }], next: "r1_book_glasses21" },
    { id: "r1_book_glasses21", name: " ", text: "情報：『小さな雫 -壱- 』『眼鏡』を手に入れた！", se: "infomation", set: { flags: ["megane"], info: ["shizuku_ichi","Megane"] }, next: "r1_inspect" },

    // 本（二回目）
    { 
      id: "r1_book_glasses_again", 
      name: "あなた",
      text: "『小さな雫 -壱-』が置いてあった場所だ。",
      choices: [
        { label: "もう一回読み直す", next: "r1_book_glasses9" },
        { label: "戻る", next: "r1_inspect" }
      ]
    },

    // ==== 習字 (お前はずっとこのままでいい)====
    { id: "r1_fude", name: "あなた", text: "赤いカーペットの上に習字セットが置かれている。", next: "r1_fude2" },
    { id: "r1_fude2", name: "あなた", text: "あまりに危険すぎないか…?", next: "r1_fude3" },
    { id: "r1_fude3", name: "あなた", text: "これは…いつかカーペットに黒い染みが出来るぞ…", next: "r1_inspect" },

    // ==== 掛け軸 ====
    { 
      id: "r1_kakejiku", 
      name: "あなた", 
      text: "壁に掛け軸が掛けられている。", 
      nextIfFlags: [
        { flags: ["deep_blue", "kakejiku_みや"], next: "r1_kakejiku_kirara" },
        { flags: ["kakejiku_みや"], next: "r1_kirara" },
        { flags: [], next: "r1_kakejiku2" }
      ],
      next: "r1_kakejiku2" 
    },
    { id: "r1_kakejiku2", name: "あなた", text: "掛け軸を見ると、ついなんて書かれてあるか解読したくなるんだよな…", next: "r1_kakejiku3" },
    { id: "r1_kakejiku3", name: "あなた", text: "えーっとこれは……", next: "r1_kakejiku4" },
    { id: "r1_kakejiku4", name: "あなた", text: "......", next: "r1_kakejiku5" },
    { id: "r1_kakejiku5", name: "あなた", text: ".....うん。全然読めない。", next: "r1_kakejiku6" },
    { id: "r1_kakejiku6", name: "あなた", text: "掛け軸の漢字ってこんなに読めなかったっけ…?", next: "r1_inspect" },

    { id: "r1_kirara", name: "みや", text: "来て下さったんですね！ありがとうございます！",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r1_kirara2" },
    { id: "r1_kirara2", name: "あなた", text: "…それで?見せたいものって",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r1_kirara3" },
    { id: "r1_kirara3", name: "みや", text: "はい、これなんですけど…",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r1_kirara4" },
    { id: "r1_kirara4", name: " ", text: "みやはそういうと、掛け軸をめくる。",se:"paper", next: "r1_kirara5" },
    { id: "r1_kirara5", name: "みや", text: "掛け軸の裏にこんなものが――", next: "r1_kirara6" },
    { id: "r1_kirara6", name: " ", text: "", overlay: { sprite: "./deep_bule.png", withText: true },next: "r1_kirara7" },
    { id: "r1_kirara7", name: "あなた", text: "これは…?ポスター…?", overlay: { sprite: "./deep_bule.png", withText: true },next: "r1_kirara8" },
    { id: "r1_kirara8", name: "あなた", text: "えーっと『ディープブルーにキラめいて』…なんだこれ?", overlay: { sprite: "./deep_bule.png", withText: true },next: "r1_kirara9" },
    { id: "r1_kirara9", name: "みや", text: "見た感じアイドルのポスターだとは思いますが、日時であったり、アイドルの名前も書かれてなくて…",overlay: { sprite: "./deep_bule.png", withText: true }, next: "r1_kirara10" },
    { id: "r1_kirara10", name: "みや", text: "この子は一体誰なんでしょう…?",overlay: { sprite: "./deep_bule.png", withText: true }, next: "r1_kirara11" },
    { id: "r1_kirara11", name: "あなた", text: "そもそも、このポスターだけ、なんか部屋に馴染んでいないような気がするな。",next: "r1_kirara12" },
    { id: "r1_kirara12", name: "あなた", text: "ちなみに、みやはこの子に見覚えはある…?", next: "r1_kirara13" },
    { id: "r1_kirara13", name: "みや", text: "いえ…全く。記憶が戻ってないので何ともいえませんが…",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r1_kirara14" },
    { id: "r1_kirara14", name: "あなた", text: "そっか…",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r1_kirara15" },
    { id: "r1_kirara15", name: "みや", text: "これも何かの手がかり…なんでしょうか?",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r1_kirara16" },
    { id: "r1_kirara16", name: "あなた", text: "(うーん、気のせいだとは思うんだけど、)", next: "r1_kirara17" },
    { id: "r1_kirara17", name: "あなた", text: "(自分はこの子をどこかで見たことがあるような…気がする)", next: "r1_kirara18" },
    { id: "r1_kirara18", name: " ", text: "情報:『謎のポスター』を手に入れた。",se: "infomation", set: { flags: ["deep_blue"], info: ["posta_kirara"] }, next: "r1_inspect" },

    { id: "r1_kakejiku_kirara", name: "あなた", text: "(うーん。この子どこかで…)", overlay: { sprite: "./deep_bule.png", withText: true }, next: "r1_kakejiku_kirara2" },
    { id: "r1_kakejiku_kirara2", name: "あなた", text: "(気のせいだとは思うけど…)", overlay: { sprite: "./deep_bule.png", withText: true }, next: "r1_kakejiku_kirara3" },
    { id: "r1_kakejiku_kirara3", name: "あなた", text: "......",  overlay: { sprite: "./deep_bule.png", withText: true },next: "r1_kakejiku_kirara4" },
    { id: "r1_kakejiku_kirara4", name: "あなた", text: "…あ、", next: "r1_kakejiku_kirara5" },
    { id: "r1_kakejiku_kirara5", name: "みや", text: "どうしました?",portrait:{ who:"みや", face:"normal", size:"500px" },  next: "r1_kakejiku_kirara6" },
    { id: "r1_kakejiku_kirara6", name: "あなた", text: "服…", portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r1_kakejiku_kirara7" },
    { id: "r1_kakejiku_kirara7", name: "みや", text: "服…?ああ！可愛いですよね！", portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r1_kakejiku_kirara8" },
    { id: "r1_kakejiku_kirara8", name: "あなた", text: "いや、そうじゃなくて…", portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r1_kakejiku_kirara9" },
    { id: "r1_kakejiku_kirara9", name: "あなた", text: "さっきの白い部屋で、自分が金縛りにあった時に、この服を着たみやを見たんだよ。",portrait:{ who:"みや", face:"smile", size:"500px" },  next: "r1_kakejiku_kirara10" },
    { id: "r1_kakejiku_kirara10", name: "みや", text: "……",portrait:{ who:"みや", face:"fear", size:"500px" },  next: "r1_kakejiku_kirara11" },
    { id: "r1_kakejiku_kirara11", name: "あなた", text: "そんな怪訝な目で見ないで…本当だから…",portrait:{ who:"みや", face:"fear", size:"500px" },  next: "r1_kakejiku_kirara12" },
    { id: "r1_kakejiku_kirara12", name: "あなた", text: "あの時、四方八方から視線を感じたって思ったら、目の前に、この服を着たみやが現れたんだ。", next: "r1_kakejiku_kirara13" },
    { id: "r1_kakejiku_kirara13", name: "あなた", text: "しかも髪は結んでいなくて、服もこんな綺麗じゃなかったけど、多分同じ服…だと思う。", next: "r1_kakejiku_kirara14" },
    { id: "r1_kakejiku_kirara14", name: "あなた", text: "あと、確か手に刃物みたいなの持ってた…気が…", next: "r1_kakejiku_kirara15" },
    { id: "r1_kakejiku_kirara15", name: "みや", text: "……", portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "r1_kakejiku_kirara16" },
    { id: "r1_kakejiku_kirara16", name: "あなた", text: "み、みや?", next: "r1_kakejiku_kirara17" },
    { id: "r1_kakejiku_kirara17", name: "みや", text: "なんでそんな重要そうなことを共有しないんですか!!!",portrait:{ who:"みや", face:"fear", size:"500px" },  next: "r1_kakejiku_kirara18" },
    { id: "r1_kakejiku_kirara18", name: "あなた", text: "ご、ごめん…伝えようとは思ってたんだよ。", portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r1_kakejiku_kirara19" },
    { id: "r1_kakejiku_kirara19", name: "あなた", text: "でも、あまりに非現実的だったし…気のせいかもしれないし…", portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r1_kakejiku_kirara20" },
    { id: "r1_kakejiku_kirara20", name: "みや", text: "だったら、この空間に居ること自体、非現実的じゃないですか!!",portrait:{ who:"みや", face:"confuse", size:"500px" },  next: "r1_kakejiku_kirara21" },
    { id: "r1_kakejiku_kirara21", name: "みや", text: "それに、もし刃物だったとしたら、怪我をしていたかもしれないんですよ!!",portrait:{ who:"みや", face:"fear", size:"500px" },  next: "r1_kakejiku_kirara22" },
    { id: "r1_kakejiku_kirara22", name: "みや", text: "ただでさえ、こんな状況なんですから…心配を掛けさせないでくださいよ…",portrait:{ who:"みや", face:"confuse", size:"500px" },  next: "r1_kakejiku_kirara23" },
    { id: "r1_kakejiku_kirara23", name: "あなた", text: "ごめんってば…", next: "r1_kakejiku_kirara24" },
    { id: "r1_kakejiku_kirara24", name: "あなた", text: "(この心配の仕方は…みやだな)", next: "r1_kakejiku_kirara25" },
    { id: "r1_kakejiku_kirara25", name: "みや", text: "…今、別のこと考えてません?", portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "r1_kakejiku_kirara26" },
    { id: "r1_kakejiku_kirara26", name: "あなた", text: "いやいや！考えてない考えてない!!",portrait:{ who:"みや", face:"confuse", size:"500px" },  next: "r1_kakejiku_kirara27" },
    { id: "r1_kakejiku_kirara27", name: "みや", text: "もし、次同じようなことがあったら、必ず教えて下さいね!!",portrait:{ who:"みや", face:"fear", size:"500px" },  next: "r1_kakejiku_kirara28" },
    { id: "r1_kakejiku_kirara28", name: "あなた", text: "わ、分かりました…", portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r1_kakejiku_kirara29" },
    { id: "r1_kakejiku_kirara29", name: "あなた", text: "(……圧が凄い)", portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r1_kakejiku_kirara30" },
    { id: "r1_kakejiku_kirara30", name: "あなた", text: "情報:『謎のポスター』の内容が更新されました。",se: "infomation", set:{infoNotes: ["posta_kirara:deep"]},next:"r1_inspect"},

    // ==== 花瓶 ====
    { id: "r1_hachi_binn_kami", name: "あなた", text: "本棚の上には様々なものが置かれている。", next: "r1_hachi_binn_kami2" },
    { id: "r1_hachi_binn_kami2", name: "あなた", text: "小さな鉢と、花瓶と、紙…?", next: "r1_hachi_binn_kami3" },
    { id: "r1_hachi_binn_kami3", name: "あなた", text: "ここを探せば何かしら見つかるんじゃないか…?", next: "r1_hachi_binn_kami4" },
    { id: "r1_hachi_binn_kami4", name: "あなた", text: "そしたら、まずは花瓶でも…", next: "r1_hachi_binn_kami5" },
    { id: "r1_hachi_binn_kami5", name: " ", text: "ズルッ",se:"suberu", next: "r1_hachi_binn_kami6" },
    { id: "r1_hachi_binn_kami6", name: " ", text: "コトン",se:"kotonn", next: "r1_hachi_binn_kami7" },
    { id: "r1_hachi_binn_kami7", name: "あなた", text: "わ、割れなかった…よかった…", next: "r1_hachi_binn_kami8" },
    { id: "r1_hachi_binn_kami8", name: "あなた", text: "床がカーペットだったから衝撃を和らげたのかな…", next: "r1_hachi_binn_kami9" },
    { id: "r1_hachi_binn_kami9", name: "あなた", text: "…あれ?花瓶のそばに何か落ちてる。", next: "r1_hachi_binn_kami10" },
    { id: "r1_hachi_binn_kami10", name: "あなた", text: "これは…指輪?", overlay: { sprite: "./yubiwa_silver.png", withText: true },  next: "r1_hachi_binn_kami11" },
    { id: "r1_hachi_binn_kami11", name: "あなた", text: "何かに使うんだろうか…?", next: "r1_hachi_binn_kami12" },
    { id: "r1_hachi_binn_kami12", name: " ", text: "情報:『指輪(中)』を手に入れた！", se: "infomation", set: { flags: ["ring_middle"], info: ["ring_middle"] }, next: "r1_inspect" },

    // 花瓶（二回目）
    { id: "r1_hachi_binn_kami_again", name: "あなた", text: "本棚の上。花瓶はもう調べた。", next: "r1_inspect" },

    // ==== 行燈 ====
    { id: "r1_light", name: "あなた", text: "部屋の隅に行燈が置かれている。明かりはついているようだ。", next: "r1_light2" },
    { 
      id: "r1_light2", 
      name: "あなた", 
      text: "箏があるからか、不思議と部屋になじんでる…気がする。", 
      nextIfFlags: [
        { flags: ["megane"], next: "r1_light3" },
        { flags: [], next: "r1_inspect" }
      ],
      next: "r1_inspect" 
    },
    { id: "r1_light3", name: "あなた", text: "そういえば、さっき拾った伊達眼鏡…",overlay: { sprite: "./mega_ne.png", withText: true },  next: "r1_light4" },
    { id: "r1_light4", name: "あなた", text: "一体何に使うんだろう…", next: "r1_light5" },
    { id: "r1_light5", name: "あなた", text: "試しにかけてみるか…", next: "r1_light6" },
    { id: "r1_light6", name: "あなた", text: "うーん、伊達眼鏡って視界が狭まって案外見えずらいんだな。", next: "r1_light7" },
    { id: "r1_light7", name: "あなた", text: "あれ…?行燈の中に何か影が見える?", next: "r1_light8" },
    { id: "r1_light8", name: "あなた", text: "あと花瓶の中と…観葉植物の土の中にも何か光ってる気がする。", next: "r1_light9" },
    { id: "r1_light9", name: "あなた", text: "行燈の近くにいるし、調べてみるか。", next: "r1_light10" },
    { id: "r1_light10", name: "あなた", text: "これは…指輪?",overlay: { sprite: "./yubiwa_silver.png", withText: true },  next: "r1_light11" },
    { id: "r1_light11", name: "あなた", text: "何かに使うんだろうか?", next: "r1_light12" },
    { id: "r1_light12", name: " ", text: "情報:『指輪(小)』を手に入れた！", se: "infomation", set: { flags: ["ring_small"], info: ["ring_small"] }, next: "r1_inspect" },

    // 行燈（二回目）
    { id: "r1_light_again", name: "あなた", nextIfFlags: [
        { flags: ["ring_small"], next: "r1_light_again2" },
        { flags: ["megane"], next: "r1_light3" },
        { flags: [], next: "r1_inspect" }
      ],text: "部屋の隅に行燈が置かれている。", next: "r1_inspect" },
      { id: "r1_light_again2", name: "あなた",text: "行燈。ほのかに明るい。指輪はもう取った。", next: "r1_inspect" },

    // ===== みやとの会話 =====
    {
      id: "r1_talk1",
      name: "みや",
      text: "どうしましたか？",
      choices: [
        { label: "ヒントが欲しい", next: "r1_encourage" },
        { label: "みやと雑談", next: "r1_talk_chat1" },
        { label: "白い部屋に戻る",nextIfFlags: [
        { flags: ["BLUE"], next: "r1_shiro_fin" },
        { flags: [],next: "r1_shiro" }],next: "r1_shiro" },
        { label: "なんでもない", nextIfFlags: [
        { flags: ["r1_add_spot"], next: "r1_inspect" },
        { flags: [], next: "r1_scene_hub" }],next: "r1_scene_hub" },]
    },

    //壱の間⇒白い部屋
    { id: "r1_shiro", name: "あなた", text: "白い部屋に戻った。",set: { bg: "./Three_Doors.png" }, se:"door_open", nextIfFlags: [
        { flags: ["Green"],next: "ninoma_kagi" },
        { flags: [], next: "intro_doors" }],next: "intro_doors" },
     //壱の間⇒最後の白い部屋
    { id: "r1_shiro_fin", name: "あなた", text: "白い部屋に戻った。",set: { bg: "./shiroima.png" }, se:"door_open", next: "fin_hub" },
    //白い部屋⇒壱の間
     { id: "r1_come_back", name: "あなた", text: "箏の部屋に戻った",set: { bg: "./Ichinoma.png" }, se:"door_open",  nextIfFlags: [
        { flags: ["r1_add_spot"], next: "r1_inspect" },
        { flags: [], next: "r1_scene_hub" }],next: "r1_scene_hub" },
    
    // ヒント
    { id: "r1_encourage", name: "あなた", text: "探索に行き詰まっちゃって…なにかアイデアない？", next: "r1_encourage2" },
    { id: "r1_encourage2", name: "みや", text: "そうですね…", portrait: { who: "みや", face: "normal", size: "500px" }, next: "r1_encourage3" },
    { id: "r1_encourage3", name: "みや", text: "まだ探索しきれていない箇所がありそうです。", portrait: { who: "みや", face: "kind", size: "500px" }, next: "r1_encourage4" },
    { id: "r1_encourage4", name: "みや", text: "そこを確認すると、何か情報が得られるかもしれません。", portrait: { who: "みや", face: "normal", size: "500px" }, next: "r1_encourage5" },
    { id: "r1_encourage5", name: "あなた", text: "ありがとう！もう少し探してみる！", next: "r1_inspect" },

    // 雑談1：記憶について
    { id: "r1_talk_chat1", name: "あなた", text: "あのさ、変な質問だったら言ってほしいんだけど、", next: "r1_talk_chat2" },
    { id: "r1_talk_chat2", name: "あなた", text: "『記憶がない』ってどういう感じなの？", next: "r1_talk_chat3" },
    { id: "r1_talk_chat3", name: "みや", text: "うーん…一言では表しづらいですが、とても不思議な感覚です。", portrait: { who: "みや", face: "confuse", size: "500px" }, next: "r1_talk_chat4" },
    { id: "r1_talk_chat4", name: "みや", text: "自分が『きたがわみや』という人間だというのは分かるんです。", portrait: { who: "みや", face: "normal", size: "500px" }, next: "r1_talk_chat5" },
    { id: "r1_talk_chat5", name: "みや", text: "でも、記憶がないからか、自分が『きたがわみや』であることに正直実感が湧いてなくて…",  portrait: { who: "みや", face: "confuse", size: "500px" },next: "r1_talk_chat6" },
    { id: "r1_talk_chat6", name: "みや", text: "まるで、第二の人生を歩み始めた段階というか…記憶を失って『きたがわみや』という人間に転生した！って感じです。",  portrait: { who: "みや", face: "kind", size: "500px" },next: "r1_talk_chat7" },
    { id: "r1_talk_chat7", name: "みや", text: "……うーん、これじゃあ全然伝わりませんよね、なんか上手な言葉が見つからなくて。", portrait: { who: "みや", face: "fear", size: "500px" }, next: "r1_talk_chat8" },
    { id: "r1_talk_chat8", name: "あなた", text: "いや、こっちこそ難しい質問しちゃってごめんね。", portrait: { who: "みや", face: "fear", size: "500px" }, next: "r1_talk_chat9" },
    { id: "r1_talk_chat9", name: "みや", text: "いえいえ、やっぱり気になりますよね。", portrait: { who: "みや", face: "normal", size: "500px" }, next: "r1_talk_chat10" },
    { id: "r1_talk_chat10", name: "みや", text: "もし、逆の立場だったら、私もあなたに同じ質問をしていたと思いますし、", portrait: { who: "みや", face: "smile", size: "500px" }, next: "r1_talk_chat11" },
    { id: "r1_talk_chat11", name: "あなた", text: "記憶喪失って…やっぱり怖い？", portrait: { who: "みや", face: "smile", size: "500px" }, next: "r1_talk_chat12" },
    { id: "r1_talk_chat12", name: "みや", text: "怖いもありますが…人間関係が全く分からないので、寂しい…ですかね？", portrait: { who: "みや", face: "normal", size: "500px" }, next: "r1_talk_chat13" },
    { id: "r1_talk_chat13", name: "みや", text: "連絡もなにも出来ないですし、会っても相手の顔を覚えていないので分からないですし…", portrait: { who: "みや", face: "confuse", size: "500px" }, next: "r1_talk_chat14" },
    { id: "r1_talk_chat14", name: "みや", text: "…でも…かつての私が友達0人の可能性も…", portrait: { who: "みや", face: "fear", size: "500px" }, next: "r1_talk_chat15" },
    { id: "r1_talk_chat15", name: "みや", text: "いや、誰にも迷惑を掛けないからいいのか…？ということは交友関係が広かったら、色々な人に迷惑をかけてしまうってこと…",  portrait: { who: "みや", face: "confuse", size: "500px" },next: "r1_talk_chat16" },
    { id: "r1_talk_chat16", name: "みや", text: "と、とりあえず、自分に友達がいなかったことに出来ないか…いや、出来ないじゃないんです。したいんです。", portrait: { who: "みや", face: "fear", size: "500px" }, next: "r1_talk_chat17" },
    { id: "r1_talk_chat17", name: "みや", text: "じゃあするためには―――", portrait: { who: "みや", face: "normal", size: "500px" }, next: "r1_talk_chat18" },
    { id: "r1_talk_chat18", name: "あなた", text: "(……一人で考え込んでしまった。)",  next: "r1_talk_chat19" },
    { id: "r1_talk_chat19", name: "あなた", text: "(思うところはあるが…とりあえず、探索に戻るか)", next: "r1_talk_chat20" },
    { id: "r1_talk_chat20", name: "あなた", text: "(みやが記憶を取り戻せれば、全て解決するんだし。)",nextIfFlags: [
        { flags: ["r1_add_spot"], next: "r1_inspect" },
        { flags: [], next: "r1_hub" }],next: "r1_hub" },
    ]
};