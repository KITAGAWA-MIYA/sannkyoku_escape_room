// 小本データ:白い部屋(導入)版
// これを script.js として保存し、HTMLで window.js より前に読み込む
window.STORY = {
  meta: { areaName: "白い部屋" }, 
  start: "intro_wake",

  //キャラ辞書
  chars:{
    miya:{ defaultSize:"500px", defaultX:"50%", defaultY:"43%", faces:{ normal:"miya.normal.png", smile:"miya.smile.png", kind:"miya.kind.png", fear:"miya.fear.png", confuse:"miya.confuse.png"}},
    miya_bad:{ defaultSize:"360px", faces:{ normal:"miya.狂.png", angry:"miya.angry.狂.png", tear:"miya.tear.狂.png", smile:"miya.smile.狂.png"} }
 },
  info: {
    paper: {title: "紙",icon: "./paper.png", image: "./paper.png",desc: "白い紙。端が少し折れている。",area:"白い部屋",
      notes: {
        backtext: "白い紙。端が少し折れている。裏面に『素晴らしい三重奏を楽しみにしているよ』と粗い文字で書かれてある。"
      }
    },
    desk_shadow: {title: "机の影",icon: "./dark_shadow.png", image: "./dark_shadow.png", desc: "机の下に丸い影がある。これは机の影だろうか…?",area:"白い部屋",
      notes: {
        desk: "机の下に丸い影がある。みやによると、これは照明焼け...らしい。"
      }
    },
    white_wall: {title: "白い壁",icon: "./WhiteRoom.png", image: "./WhiteRoom.png",desc: "真っ白い壁だ。外と繋がりそうな場所は見当たらない。みやが何か考えてる様子だったが…",area:"白い部屋",
      notes: {
        eye: "真っ白い壁だ。外と繋がりそうな場所は見当たらない。まだ若干視線を感じる…気がする。"
      }
    },
     ichi_doors: {title: "水色の扉",icon: "./ichi_door.png", image: "./ichi_door.png",desc: "壁のヒビと共に3つの扉が現れた",
      notes: {
        one: "ドアの柄は渦巻き模様で、ドアノブに『壱』と書かれている。",
      }
    },
     ni_doors: {title: "青色の扉",icon: "./ni_door.png", image: "./ni_door.png",desc: "壁のヒビと共に3つの扉が現れた",
      notes: {
        one: "ドアの柄は雫模様で、ドアノブに『弐』と書かれている。",
      }
    },
     san_doors: {title: "茶色の扉",icon: "./san_door.png", image: "./san_door.png",desc: "壁のヒビと共に3つの扉が現れた",
      notes: {
        one: "ドアの柄は山模様で、ドアノブに『参』と書かれている。",
      }
    },
  },


  nodes: [
    // 起きる
    { id: "intro_wake", name: " ", text: "目を開けると、世界は白で満ちていた。", set:{bgm:"white_room"}, next: "intro_あなた1" },
    { id: "intro_あなた1", name: "あなた",    text: "ここは一体…", next: "intro_sys1" },
    { id: "intro_sys1", name: " ", text: "視界は白一色。他の色も音も聞こえない。", next: "intro_sys2" },
    { id: "intro_sys2", name: " ", text: "まるで一人取り残されたみたいに――", next: "intro_あなた2" },
    { id: "intro_あなた2", name: "あなた",    text: "早く元の世界に帰らなきゃ。", next: "intro_あなた3" },
    { id: "intro_あなた3", name: "あなた",    text: "とりあえず、何かしないと…", next: "intro_あなた5" },
    { id: "intro_あなた5", name: "あなた",    text: "周辺を探索してみよう。", set: { flags: ["heard_silence_1"] }, next: "intro_choice_start" },

    { id: "intro_choice_start",
  name: "",
  text: "",
  ui: { silent: true },
  explore: {
    spots: [
      {
        id: "spot_start",
        x: "75%",
        y: "82%",
        size: "48px",
        icon: "./kirakira.png",
        next: "intro_scan1",
      }
    ]
   }
 },
    // 見回す→寒さ→紙→観客の文
    { id: "intro_scan1", name: "あなた", text: "それにしても静かな空間だ。", next: "intro_scan2" },
    { id: "intro_scan2", name: "あなた", text: "部屋の大きさはだいたい一教室くらいか。", next: "intro_scan3" },
    { id: "intro_scan3", name: "あなた", text: "結構広いな", next: "intro_scan4" },
    { id: "intro_scan4", name: "あなた", text: "それにしてもなんだか寒い気がする。", set: { flags: ["noticed_cold_1"] }, next: "intro_scan5" },
    { id: "intro_scan5", name: "あなた", text: "エアコンなんてどこにもないよな…", next: "intro_paper1" },
  

    { id: "intro_paper1", 
      name: "あなた", 
      text: "...ん?足元に紙が落ちている。", 
      next: "intro_paper2" 
    },
    { id: "intro_paper2", name: "あなた", text: "部屋の中が白一色過ぎて気づかなかった。", next: "intro_paper3" },
    { id: "intro_paper3", name: "あなた", text: "えーっと、どれどれ．．．",se:"paper",next: "intro_quote1" },
    { id: "intro_quote1", name: " ", text: "『私は観客。あなたは役者。さあ、幕が開く時間だ。』", next: "intro_あなた_quote1" },
    { id: "intro_あなた_quote1", name: "あなた", text: "……観客?役者?幕?", next: "intro_あなた_quote2" },
    { id: "intro_あなた_quote2", name: "あなた", text: "”あなた”は自分のことを指しているのだろうか…そうなると、自分は役者?", next: "intro_あなた_quote3" },
    { id: "intro_あなた_quote3", name: "あなた", text: "でも他に観客っぽい人なんでいないし、幕らしきものも全く見当たらない…", next: "intro_あなた_quote4" },
    { id: "intro_あなた_quote4", name: "あなた", text: "なにか意味があるのだろうか?", next: "intro_paper_get" },

    // 効果音(後でrenderNodeにフック)
    { id: "intro_paper_get", name: " ", text: "『紙』を手に入れた!", set: { items: ["paper"] }, next: "intro_みや_appear", se: "infomation" },

    // みや登場
    { id: "intro_みや_appear", name: "???", text: "……あの、すみません。", next: "intro_あなた_surprise" },
    { id: "intro_あなた_surprise", name: "あなた", text: "うわっ!?誰!?",next: "intro_あなた_surprise2" },
    { id: "intro_あなた_surprise2", name: "あなた", text: "(背後に人いたの!?全然気づかなかった…)", next: "intro_あなた_surprise3" },
    { id: "intro_あなた_surprise3", name: "あなた", text: "す、すみません!気づかなくて…", next: "intro_あなた_no_voice" },
    { id: "intro_あなた_no_voice", name: "あなた", text: "...え?",stopBgm:true, next: "intro_みや_apology" },
    { id: "intro_みや_apology", name: "???", text: "ご、ごめんなさい!びっくりさせちゃいましたよね!", next: "intro_あなた_note" },
    { id: "intro_あなた_note", name: "あなた", text: "(どうして、君が、ここに?)", next: "intro_みや_intro1" },

    { id: "intro_みや_intro1", name: "みや", text: "あの…私、気がついたらここにいて…", portrait:{ who:"miya", face:"confuse", size:"500px" },next: "intro_あなた_みや" },
    { id: "intro_あなた_みや", name: "みや", text: "ここがどこだか分かりますか?", portrait:{ who:"miya", face:"confuse", size:"500px" },next: "intro_あなた_みや2" },
    { id: "intro_あなた_みや2", name: "あなた", text: "…みや? ", next: "intro_あなた_みや3" },
    { id: "intro_あなた_みや3", name: "あなた", text: "(そこにいたのは、あなたを連れ去った張本人、”きたがわ みや”だった)", next: "intro_みや_intro2" },

    { id: "intro_みや_intro2", name: "みや", text: "あ、はい!みやです!きたがわみやです!",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_みや_intro2-2" },
    { id: "intro_みや_intro2-2", name: "みや", text: "…あれ?どこかでお会いしたことありましたっけ?",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_attitude_choice" },

    // 態度選択
    {
      id: "intro_attitude_choice",
      name: " ",
      text: "どう返す?",
      choices: [
        { label: "同じ三曲研究部だよ!", next: "intro_att_warm" },
        { label: "なんでそんなこと言うのさ!", next: "intro_att_cool" },
        { label: "よくも連れてきやがったな!", next: "intro_att_probe" }
      ]
    },

    // 態度結果(trust/suspicionフラグ化)
    { id: "intro_att_warm",  name: "あなた", text: "同じ三曲研究部だよ!流石に覚えてるって!",  next: "intro_att_warm2" },
    { id: "intro_att_warm2", name: "みや", text: "三曲…え?",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_att_warm3" },
    { id: "intro_att_warm3",  name: "あなた", text: " しかも今日、和泉部室で会ったじゃん!",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_att_warm4" },
    { id: "intro_att_warm4",  name: "あなた", text: " 忘れたとは言わせないからね!",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_loop" },


    { id: "intro_att_cool",  name: "あなた", text: "なんでそんなこと言うのさ!",next: "intro_att_cool2" },
    { id: "intro_att_cool2", name: "みや", text: "す、すみません…私、会った人を覚えるの苦手で…",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_att_cool3" },
    { id: "intro_att_cool3", name: "あなた", text: "あんまり喋ったことなかったかもしれないけど、顔くらい覚えてててよお…",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_att_cool4" },
    { id: "intro_att_cool4", name: "あなた", text: "しかも今日和泉部室で会ったんだし、",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_loop" },
    
    { id: "intro_att_probe", name: "あなた", text: "よくも連れてきやがったな!",next: "intro_att_probe2" },
    { id: "intro_att_probe2", name: "みや", text: "…え?",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_att_probe3" },
    { id: "intro_att_probe3", name: "あなた", text: "「…え?」じゃねえよ!あんたが連れてきたんだろうが!",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_att_probe4" },
    { id: "intro_att_probe4", name: "みや", text: "そ、そんな!誤解です!私も被害者側です!!", portrait:{ who:"miya", face:"confuse", size:"500px" },next: "intro_att_probe5" },
    { id: "intro_att_probe5", name: "あなた", text: "嘘つけ!TRPGについて意気揚々と語り出したと思ったら、こんなところまで連れてきやがって!",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_att_probe6" },
    { id: "intro_att_probe6", name: "みや", text: "絶対、和泉部室でなんか変なことしただろ!!", portrait:{ who:"miya", face:"confuse", size:"500px" },next: "intro_loop" },

    // 記憶が曖昧という流れ
    { id: "intro_loop", name: "みや", text: "...和泉部室?",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_loop2" },
    { id: "intro_loop2", name: "みや", text: "あの、和泉部室って何ですか?", portrait:{ who:"miya", face:"confuse", size:"500px" },next: "intro_loop3" },
    { id: "intro_loop3", name: "あなた", text: "…え?", se:{bgm:"forgot"},portrait:{ who:"miya", face:"confuse", size:"500px" },next: "intro_loop4" },
    { id: "intro_loop4", name: "あなた", text: "(和泉部室が分からない?)", portrait:{ who:"miya", face:"confuse", size:"500px" },next: "intro_loop5" },
    { id: "intro_loop5", name: "みや", text: "こんなこと言うのもあれですけど、本当に私と会ったことありますか?",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_loop6" },
    { id: "intro_loop6", name: "みや", text: "人違いとかではなくて?",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_loop7" },
    { id: "intro_loop7", name: "あなた", text: "(今日和泉部室で会った時は、自分のことを知っている様子だった。)",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_loop8" },
    { id: "intro_loop8", name: "あなた", text: "(…自分が人違いをしているのか?)", portrait:{ who:"miya", face:"confuse", size:"500px" },next: "intro_loop9" },
    { id: "intro_loop9", name: "あなた", text: "(だとしたら、目の前にいる彼女は一体誰なんだ?)", portrait:{ who:"miya", face:"confuse", size:"500px" },next: "intro_loop10" },
    { id: "intro_loop10", name: "あなた", text: "じゃあ、あなたは一体、誰ですか?",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_loop11" },
    { id: "intro_loop11", name: "みや", text: "私は――",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_loop12" },
    { id: "intro_loop12", name: "みや", text: "……",portrait:{ who:"miya", face:"fear", size:"500px" }, next: "intro_loop13" },
    { id: "intro_loop13", name: "あなた", text: "(固まった?)",portrait:{ who:"miya", face:"fear", size:"500px" }, next: "intro_loop14" },
    { id: "intro_loop14", name: "みや", text: "ど、どうしました?",portrait:{ who:"miya", face:"fear", size:"500px" }, next: "intro_loop15" },
    { id: "intro_loop15", name: "みや", text: "…分からない", portrait:{ who:"miya", face:"confuse", size:"500px" },next: "intro_loop16" },
    { id: "intro_loop16", name: "あなた", text: "分からない?",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_loop17" },
    { id: "intro_loop17", name: "みや", text: "私の名前以外、思い出せないんです…", portrait:{ who:"miya", face:"fear", size:"500px" },next: "intro_loop18" },
    { id: "intro_loop18", name: "みや", text: "噓でしょ．．．.",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_loop19" },
    { id: "intro_loop19", name: "みや", text: "そ、そんなこと本当にありえるの...",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_loop20" },
    { id: "intro_loop20", name: "みや", text: "ね、年齢とか、性別とか、職業とか、あとは家族構成とか…!!", portrait:{ who:"miya", face:"confuse", size:"500px" },next: "intro_loop21" },
    { id: "intro_loop21", name: "みや", text: "…年齢は20歳で、性別は女性です。職業は、大学生、家族構成は、父、母、弟が2人…のはず", portrait:{ who:"miya", face:"confuse", size:"500px" },next: "intro_loop22" },
    { id: "intro_loop22", name: "みや", text: "私自身の基本的な情報とか、一般的な知識は頭に入ってます",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_loop23" },
    { id: "intro_loop23", name: "みや", text: "ただ、私がどこから来て、だれと、何をしていたか、全く分からなくて…",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_loop24" },
    { id: "intro_loop24", name: "みや", text: "私は一体、「だれ」なんでしょう…", portrait:{ who:"miya", face:"fear", size:"500px" },next: "intro_loop25" },
    { id: "intro_loop25", name: "みや", text: "みや…",portrait:{ who:"miya", face:"fear", size:"500px" }, next: "intro_loop26" },
    { id: "intro_loop26", name: "みや", text: "…ごめんなさい。不安がらせてしまいましたね。", portrait:{ who:"miya", face:"normal", size:"500px" },next: "intro_loop27" },
    { id: "intro_loop27", name: "みや", text: "あなたは、記憶など何か影響を受けていたりしませんか?", portrait:{ who:"miya", face:"confuse", size:"500px" },next: "intro_loop28" },
    { id: "intro_loop28", name: "あなた", text: "(自分は明大生で、さっきまで和泉部室にいて、その前は――)", portrait:{ who:"miya", face:"confuse", size:"500px" },next: "intro_loop29" },
    { id: "intro_loop29", name: "あなた", text: "(…うん、ちゃんと思い出せる。)",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_loop30" },
    { id: "intro_loop30", name: "あなた", text: "自分は何も影響はないみたい、です。",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_loop31" },
    { id: "intro_loop31", name: "みや", text: "そうですか…よかったです‼",portrait:{ who:"miya", face:"kind", size:"500px" }, next: "intro_loop32" },
    { id: "intro_loop32", name: "みや", text: "二人とも記憶喪失だと、ここから出る手がかりが見つからないかもしれないと思ったので、",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_loop33" },
    { id: "intro_loop33", name: "みや", text:"みやは大丈夫なんですか?",portrait:{ who:"miya", face:"kind", size:"500px" }, next: "intro_loop34" },
    { id: "intro_loop34", name: "みや", text: "私は大丈夫ですよ。むしろ、あなたのことを思い出せなくて、ごめんなさい。",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_loop35" },
    { id: "intro_loop35", name: "みや", text: "い、いや、自分は大丈夫だけど…",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_loop36" },
    { id: "intro_loop36", name: "みや", text: "うーん、ひとまずここから出る方法を探してみませんか?",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_loop37" },
    { id: "intro_loop37", name: "みや", text:"このまま立ち話を続けても、何も変わりませんし…",portrait:{ who:"miya", face:"kind", size:"500px" }, next: "intro_loop38" },
    { id: "intro_loop38", name: "みや", text: "もしかしたら、私も何か思い出せるかも…というのは、ちょっと期待しすぎですかね",portrait:{ who:"miya", face:"smile", size:"500px" }, next: "intro_loop39" },
    { id: "intro_loop39", name: "みや", text: "…いや、案外思い出せるかもしれない。", portrait:{ who:"miya", face:"normal", size:"500px" },next: "intro_loop40" },
    { id: "intro_loop40", name: "あなた", text: "(彼女が自分のしるみやなのか、そうでないのかは分からない。)",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_loop41" },
    { id: "intro_loop41", name: "あなた", text: "(けど、どちらにしても、目の前にいる”みや”は明らかに無理してそうだ。)",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_loop42" },
    { id: "intro_loop42", name: "あなた", text: "(何か言うべきなのかもしれないけれど、彼女を傷つけてしまいかねない。)",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_loop43" },
    { id: "intro_loop43", name: "あなた", text:"(今は、そっとしておこう。)", portrait:{ who:"miya", face:"normal", size:"500px" },next: "intro_loop44" },
    { id: "intro_loop44", name: "みや", text: "何か思い出す手がかりもあるかもしれないし、この部屋のことを調べてみましょう。", portrait:{ who:"miya", face:"normal", size:"500px" },next: "intro_loop45" },
    { id: "intro_loop45", name: "みや", text: "はい!よろしくお願いします!", portrait:{ who:"miya", face:"kind", size:"500px" },next: "intro_hub" },

    // 探索ハブ(紙/見回す/話す/所持品)
    {
  id: "intro_hub",
  ui: { silent: true },set:{bgm:"tannsaku"},
  explore: {
    spots: [
      { id:"spot_paper", x:"75%", y:"82%", size:"48px", icon:"./kirakira.png",next:"intro_backtext", nextRepeat:"intro_backtext_again" },
      { id:"spot_circle", x:"50%", y:"40%", size:"48px",  icon:"./kirakira.png",next:"intro_scan_circle" , nextRepeat:"intro_scan_circle_again", nextRepeatIfFlags:[
          {flags:["circle_info"],next:"intro_scan_circle_3rd"},
          {flags:[],next:"intro_scan_circle_again"}
        ]},
      { id:"spot_wall",   x:"80%", y:"30%", size:"48px",  icon:"./kirakira.png", next:"intro_wall",
        nextRepeatIfFlags:[
         {flags:["intro_wall_miya"],next:"intro_wall_again_afterTalk"},
          {flags:[],next:"intro_wall_again_beforeTalk"}
        ]
       }
    ],
    talk: { sprite:"./みや.stand.png", x:"30%", y:"72%", size:"270px", next:"intro_talk1" },
   
    requireFlags: ["paper_backtext", "circle_info", "intro_wall_miya"],
    completeNext: "intro_move"
  }
},

        // 紙の裏
    { id: "intro_backtext", name: "あなた", text: "そういえば、さっき紙を拾ったんだ。", next: "intro_backtext2" },
    { id: "intro_backtext2", name: "みや", text: "紙…ですか?",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_backtext3" },
    { id: "intro_backtext3", name: "あなた", text: "そう。この紙なんだけど、ここら辺に落ちてたんだよね。",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_backtext4" },
    { id: "intro_backtext4", name: "みや", text: "それには何か書かれてあったりしましたか?",portrait:{ who:"miya", face:"kind", size:"500px" }, next: "intro_backtext5" },
    { id: "intro_backtext5", name: "あなた", text: "えっと．．．『私は観客。あなたは役者。さあ、幕が開く時間だ。』",next: "intro_backtext6" },
    { id: "intro_backtext6", name: "みや", text: "うーん、謎解きですかね?",portrait:{ who:"miya", face:"confuse", size:"500px" },next: "intro_backtext7" },
    { id: "intro_backtext7", name: "あなた", text: "あなたが自分を指してた時とか色々考えてみたんだけど、よく分からなくて…", next: "intro_backtext8" },
    { id: "intro_backtext8", name: "あなた", text: "幕なんてどこにもないし…",next: "intro_backtext9" },
    { id: "intro_backtext9", name: "みや", text: "…あれ?裏に何か書いてありませんか?", next: "intro_backtext10" },
    { id: "intro_backtext10", name: "あなた", text: "裏…?", se:"paper", next: "intro_backtext11" },
    { id: "intro_backtext11", name: " ", text: "紙をめくると、端に殴り書きのような粗い文字が書かれてあった。", next: "intro_backtext12" },
    { id: "intro_backtext12", name: "みや", text: "本当だ!書いてある!えーどれどれ…", next: "intro_backtext13" },
    { id: "intro_backtext13", name: "みや", text: "『素晴らしい三重奏を楽しみにしているよ』", next: "intro_backtext14" },
    { id: "intro_backtext14", name: "あなた", text: "三重奏…?",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_backtext15" },
    { id: "intro_backtext15", name: "みや", text: "何かを演奏するのでしょうか?",portrait:{ who:"miya", face:"normal", size:"500px" }, next:"intro_backtext16" },
    { id: "intro_backtext16", name: "みや", text: "うーん、楽器も見当たらないしなあ…",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_backtext17" },
    { id: "intro_backtext17", name: "みや", text: "まだ分からないのかもしれません。他のところも探してみませんか",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_backtext18" },
    { id: "intro_backtext18", name: "みや", text: "何か新しい情報が得られるかもしれませんし",portrait:{ who:"miya", face:"kind", size:"500px" }, next: "intro_backtext19" },
    { id: "intro_backtext19", name: "あなた", text: "そうだな、一つの謎に拘っても仕方ないし、他の所もさがしてみよう。", portrait:{ who:"miya", face:"kind", size:"500px" },next: "intro_backtext20" },
    { id: "intro_backtext20", name: " ", text: "情報:『紙』の内容が更新されました。",se: "infomation", set: { flags: ["paper_backtext"] ,infoNotes: ["paper:backtext"] }, next: "intro_hub" },

    // 紙(二回目)
    { id: "intro_backtext_again", name: " ", text: "『私は観客。あなたは役者。さあ、幕が開く時間だ。』", next: "intro_backtext_again2" },
    { id: "intro_backtext_again2", name: " ", text: "裏には『素晴らしい三重奏を楽しみにしているよ』", next: "intro_backtext_again3" },
    { id: "intro_backtext_again3", name: " ", text: "一体何を表しているんだろう…", next: "intro_hub" },
   
    // 床の円跡
    { id: "intro_scan_circle", name: " ", text: "部屋の中央には机が置いてある。", next: "intro_scan_circle2" },
    { id: "intro_scan_circle2", name: " ", text: "机の上には何もない。引き出しとかも置いてない。",  next: "intro_scan_circle3" },
    { id: "intro_scan_circle3", name: "あなた", text: "…ん?机の下に丸い影がある。",next: "intro_scan_circle4" },
    { id: "intro_scan_circle4", name: " ", text: "机自体は四角いけど…光の当たり方の問題かな?",  next: "intro_scan_circle5" },
    { id: "intro_scan_circle5", name: " ", text: "情報:『机の影』が追加されました。",se: "infomation",  set: { items: ["desk_shadow"] }, next: "intro_hub" },

    // 床の円跡(二回目)
    { id: "intro_scan_circle_again", name: "あなた", text: "うーん、やっぱり丸い影っておかしくないか?",next: "intro_scan_circle_again2" },
    { id: "intro_scan_circle_again2", name: " ", text: "一回机をどかしてみるか。",  next: "intro_scan_circle_again3" },
    { id: "intro_scan_circle_again3", name: "あなた", text: "(よいしょ)", next: "intro_scan_circle_again4" },
    { id: "intro_scan_circle_again4", name: "みや", text: "机の下になにかあるんですか?", portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_scan_circle_again5" },
    { id: "intro_scan_circle_again5", name: "あなた", text: "みや！ちょっとこれ見てみてよ", portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_scan_circle_again6" },
    { id: "intro_scan_circle_again6", name: "あなた", text: "机の下に丸い影があるんだけど、ちょっと違和感あるなって思って…", next: "intro_scan_circle_again7" },
    { id: "intro_scan_circle_again7", name: "あなた", text: "ほら!机を動かしても影が動かない!",  next: "intro_scan_circle_again8" },
    { id: "intro_scan_circle_again8", name: "あなた", text: "影じゃないとなると随分と大きな染みだな…",  next: "intro_scan_circle_again9" },
    { id: "intro_scan_circle_again9", name: "みや", text: "これは…照明焼けですかね?",portrait:{ who:"miya", face:"confuse", size:"500px" },next: "intro_scan_circle_again10" },
    { id: "intro_scan_circle_again10", name: "あなた", text: "照明焼け?", next: "intro_scan_circle_again11" },
    { id: "intro_scan_circle_again11", name: "みや", text: "はい。”明かり焼け”とも言うんですけど、強いライトを同じ場所に当て続けると、床や壁の色が変わってしまうことがあって、",portrait:{ who:"miya", face:"normal", size:"500px" },next: "intro_scan_circle_again12" },
    { id: "intro_scan_circle_again12", name: "みや", text: "ここ、円形に変色していて、染みにしては綺麗すぎる円形だと思うんです。",portrait:{ who:"miya", face:"kind", size:"500px" },next: "intro_scan_circle_again13" },
    { id: "intro_scan_circle_again13", name: "みや", text: "仮に照明焼けなのであれば、光の跡なので、綺麗な円形になるのも辻褄が合いますし、床全体ではなく一部分が焼かれているので、長時間何かしらの強い光で照らされていたのではないかと",portrait:{ who:"miya", face:"normal", size:"500px" },portrait:{ who:"miya", face:"kind", size:"500px" },  next: "intro_scan_circle_again14" },
    { id: "intro_scan_circle_again14", name: "あなた", text: "凄い…詳しいんだね!", portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_scan_circle_again15" },
    { id: "intro_scan_circle_again15", name: "あなた", text: "自分じゃそこまで分からなかったよ", portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_scan_circle_again16" },
    { id: "intro_scan_circle_again16", name: "みや", text: "いえいえそんな!これはあくまで私の憶測にすぎないので!", portrait:{ who:"miya", face:"fear", size:"500px" }, next: "intro_scan_circle_again17" },
    { id: "intro_scan_circle_again17", name: "みや", text: "私、記憶喪失なんですから…照明焼けについての知識も間違ってるかもしれないですし…", portrait:{ who:"miya", face:"kind", size:"500px" }, next: "intro_scan_circle_again18" },
    { id: "intro_scan_circle_again18", name: "みや", text: "あまり鵜呑みにしないでくださいね。", portrait:{ who:"miya", face:"fear", size:"500px" }, next: "intro_scan_circle_again19" },
    { id: "intro_scan_circle_again19", name: "あなた", text: "(謙遜の仕方がみやそっくりなんだよな…)", portrait:{ who:"miya", face:"fear", size:"500px" }, next: "intro_scan_circle_again20" },
    { id: "intro_scan_circle_again20", name: " ", text: "情報:『机の影』が更新されました。",se: "infomation",  set: { flags: ["circle_info"],infoNotes: ["desk_shadow:desk"] },  next: "intro_hub" },

    // 床の跡(三回目)
    { id: "intro_scan_circle_3rd", name: "あなた", text: "机の下には大きな丸い影があった。", next: "intro_scan_circle_3rd_2" },
    { id: "intro_scan_circle_3rd_2", name: "あなた", text: "みやによると、照明焼けらしい。", next: "intro_scan_circle_3rd_3" },
    { id: "intro_scan_circle_3rd_3", name: "あなた", text: "これだけの情報でよく分かったな…", next: "intro_hub" },
   
    // 壁探索 視線イベント
    { id: "intro_wall", name: " ", text: "辺り一面真っ白い壁で囲まれている。", next: "intro_wall2" },
    { id: "intro_wall2", name: "あなた", text: "扉、窓、排気口…外と繋がっていきそうなものは見当たらないな。完全に密室だ。", next: "intro_wall3" },
    { id: "intro_wall3", name: "あなた", text: "換気が出来ないから、空気が籠ってしまいそうだけど…今のところ息苦しさは感じない。", next: "intro_wall4" },
    { id: "intro_wall4", name: "あなた", text: "それとも時間の問題なのか…?", next: "intro_wall5" },
    { id: "intro_wall5", name: "みや", text: "うーん…",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_wall6" },
    { id: "intro_wall6", name: "あなた", text: "(さっきからみやが壁を見ながらずっと考え込んでるようだ…)",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_wall7" },
    { id: "intro_wall7", name: "あなた", text: "(なにか見つけたのだろうか…)",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_wall8" },
    { id: "intro_wall8", name: " ", text: "情報:『白い壁』を追加しました。",se: "infomation",  set: { flags: ["wall_info"],items: ["white_wall"] },next: "intro_hub" },
    

    // 壁探索 視線イベント(二回目・会話前)
    { id: "intro_wall_again_beforeTalk", name: "あなた", text: "汚れ一つない真っ白い壁だ", next: "intro_wall_again_beforeTalk2" },
  { id: "intro_wall_again_beforeTalk2", name: "あなた", text: "出入口はない…空気の入れ替えすら出来なさそうだ。", next: "intro_wall_again_beforeTalk3" },
    { id: "intro_wall_again_beforeTalk3", name: "あなた", text: "そういえば、みやは一体何を考えていたんだ…?",  next: "intro_hub" },

    // 壁探索 視線イベント(二回目・会話後)
    { id: "intro_wall_again_afterTalk", name: "あなた", text: "さっきまでの視線…あれは一体なんなんだ?", next: "intro_wall_again_afterTalk2" },
    { id: "intro_wall_again_afterTalk2", name: "あなた", text: "…あまり思い出したくないな。", next: "intro_hub" },


    // みやと会話(要約)
    {
      id: "intro_talk1",
      name: "みや",
      text: "どうしましたか?",
      choices: [
        { label: "ヒントが欲しい", next: "intro_encourage" },
        { label: "みやと雑談", next: "intro_press" },
         { label: "なんでもない",nextIfFlags: [
          { flags: ["three_doors"], next: "intro_doors" },
          { flags: [], next: "intro_hub" }],  next: "intro_hub" },
        { label: "壁について聞く", nextIfFlags: [
        { flags: ["intro_wall_miya"], next: "intro_talk_wall_again" },
        { flags: [], next: "intro_talk_wall" }], next: "intro_talk_wall",requires: { flags: ["wall_info"] } },
      ],
    },

    //壁withみや
    { id: "intro_talk_wall", name: "あなた", text: "さっきから壁が気になってるみたいだけど、何かあったの?",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_talk_wall_alt3_1" },
    { id: "intro_talk_wall_alt3_1", name: "みや", text: "うーん…私の気のせいかもしれないんですけど…",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_talk_wall_alt3_2" },
    { id: "intro_talk_wall_alt3_2", name: "みや", text: "さっきから何か視線を感じませんか…?",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_talk_wall_alt3_3" },
    { id: "intro_talk_wall_alt3_3", name: "あなた", text: "…視線?",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_talk_wall_alt3_4" },
    { id: "intro_talk_wall_alt3_4", name: "みや", text: "はい、壁の向こう側から誰かに見られてる気がして…",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_talk_wall_alt3_5" },
    { id: "intro_talk_wall_alt3_5", name: "あなた", text: "見られている…",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_talk_wall_alt3_6" },
    { id: "intro_talk_wall_alt3_6", name: "あなた", text: "(改めて辺りを見渡してみるけど、監視カメラ等はないな)", portrait:{ who:"miya", face:"normal", size:"500px" },next: "intro_talk_wall_alt3_7" },
    { id: "intro_talk_wall_alt3_7", name: "あなた", text: "(視線は…感じない。みやの思い込みか…?)",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_talk_wall_alt3_8" },
    { id: "intro_talk_wall_alt3_8", name: "あなた", text: "いや、自分は感じないな…",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_talk_wall_alt3_9" },
    { id: "intro_talk_wall_alt3_9", name: "あなた", text: "……",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_talk_wall_alt3_10" },
    { id: "intro_talk_wall_alt3_10", name: "あなた", text: "(あれ…?反応がない?)",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_talk_wall_alt3_11" },
    { id: "intro_talk_wall_alt3_11", name: "あなた", text: "みや?",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_talk_wall_alt3_12" },
    { id: "intro_talk_wall_alt3_12", name: "あなた", text: "……", portrait:{ who:"miya", face:"normal", size:"500px" },next: "intro_talk_wall_alt3_13" },
    { id: "intro_talk_wall_alt3_13", name: "あなた", text: "(自分の声に反応しない…よく見たら、瞬きもしてないんじゃないか〜)",portrait:{ who:"miya", face:"normal", size:"500px" },next: "intro_talk_wall_alt3_14" },
    { id: "intro_talk_wall_alt3_14", name: "あなた", text: "(まるでみやだけ時間が止まってるみたいだ…)",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_talk_wall_alt3_15" },
    { id: "intro_talk_wall_alt3_15", name: "あなた", text: "みや!!大丈夫――",next: "intro_talk_wall_alt3_16" },
    { id: "intro_talk_wall_alt3_16", name: "あなた", text: "!!?", next: "intro_talk_wall_alt3_17" },
    { id: "intro_talk_wall_alt3_17", name: "あなた", text: "(な、なんだこれ…空気が重い…)", next: "intro_talk_wall_alt3_18" },
    { id: "intro_talk_wall_alt3_18", name: "あなた", text: "(壁から、天井から、床から…視線を感じる。)", next: "intro_talk_wall_alt3_19" },
    { id: "intro_talk_wall_alt3_19", name: "あなた", text: "(それも一つじゃない3人…5…20…無数の視線が突き刺してくる。)", next: "intro_talk_wall_alt3_20" },
    { id: "intro_talk_wall_alt3_20", name: "あなた", text: "(手の先から足のつま先、頭の中まで見透かされてるようだ。)", next: "intro_talk_wall_alt3_21" },
    { id: "intro_talk_wall_alt3_21", name: "あなた", text: "(恐怖で体が動かない…喉が渇いて声が上げられない…視線が痛い…)", next: "intro_talk_wall_alt3_22" },
    { id: "intro_talk_wall_alt3_22", name: "あなた", text: "(誰か……誰か…‼)", next: "intro_talk_wall_alt3_23" },
    { id: "intro_talk_wall_alt3_23", name: "???", text: "…大丈夫ですか?", next: "intro_talk_wall_alt3_24" },
    { id: "intro_talk_wall_alt3_24", name: "あなた", text: "(みや…‼動けるように…!!!)", next: "intro_talk_wall_alt3_25" },
    { id: "intro_talk_wall_alt3_25", name: "あなた", text: "……",portrait:{ who:"miya_bad", face:"normal", size:"500px" }, next: "intro_talk_wall_alt3_26" },
    { id: "intro_talk_wall_alt3_26", name: "みや(?)", text: "(……みや?)",portrait:{ who:"miya_bad", face:"normal", size:"500px" }, next: "intro_talk_wall_alt3_27" },
    { id: "intro_talk_wall_alt3_27", name: "みや(?)", text: "――安心して。",portrait:{ who:"miya_bad", face:"normal", size:"500px" }, next: "intro_talk_wall_alt3_28" },
    { id: "intro_talk_wall_alt3_28", name: "みや(?)", text: "(その恰好は――)",portrait:{ who:"miya_bad", face:"normal", size:"500px" }, next: "intro_talk_wall_alt3_29" },
    { id: "intro_talk_wall_alt3_29", name: "みや(?)", text: "――動けるようにしてあげる。",portrait:{ who:"miya_bad", face:"normal", size:"500px" }, next: "intro_talk_wall_alt3_30" },
    { id: "intro_talk_wall_alt3_30", name: "みや", text: "大丈夫ですか!!!",portrait:{ who:"miya", face:"fear", size:"500px" }, next: "intro_talk_wall_alt3_31" },
    { id: "intro_talk_wall_alt3_31", name: "あなた", text: "っ!!?",portrait:{ who:"miya", face:"fear", size:"500px" }, next: "intro_talk_wall_alt3_32" },
    { id: "intro_talk_wall_alt3_32", name: "みや", text: "私の声が聞こえますか!!",portrait:{ who:"miya", face:"fear", size:"500px" },next: "intro_talk_wall_alt3_33" },
    { id: "intro_talk_wall_alt3_33", name: "あなた", text: "み、みや…!?",portrait:{ who:"miya", face:"fear", size:"500px" }, next: "intro_talk_wall_alt3_34" },
    { id: "intro_talk_wall_alt3_34", name: "みや", text: "よかった…",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_talk_wall_alt3_35" },
    { id: "intro_talk_wall_alt3_35", name: "みや", text: "視線の話をしたら突然壁を見つめて動かなくなって…",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_talk_wall_alt3_36" },
    { id: "intro_talk_wall_alt3_36", name: "みや", text: "私の声にも反応しないし…瞬きすらしていなかったので…", portrait:{ who:"miya", face:"confuse", size:"500px" },next: "intro_talk_wall_alt3_37" },
    { id: "intro_talk_wall_alt3_37", name: "あなた", text: "(自分が動かなくなった...だと!?)",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_talk_wall_alt3_38" },
    { id: "intro_talk_wall_alt3_38", name: "あなた", text: "(自分視点では、みやが動いていなかった。自分が動けなかったのはその後だ。確か、あちこちから視線を感じて…)",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_talk_wall_alt3_39" },
    { id: "intro_talk_wall_alt3_39", name: "あなた", text: "(それに、あのみやは―――)", portrait:{ who:"miya", face:"fear", size:"500px" },next: "intro_talk_wall_alt3_40" },
    { id: "intro_talk_wall_alt3_40", name: "みや", text: "もしもし!!!",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_talk_wall_alt3_41" },
    { id: "intro_talk_wall_alt3_41", name: "みや", text: "!?!?",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_talk_wall_alt3_42" },
    { id: "intro_talk_wall_alt3_42", name: "みや", text: "大丈夫ですか!!!!",portrait:{ who:"miya", face:"confuse", size:"500px" },next: "intro_talk_wall_alt3_43" },
    { id: "intro_talk_wall_alt3_43", name: "あなた", text: "大丈夫‼大丈夫‼考え事してただけだから‼", portrait:{ who:"miya", face:"confuse", size:"500px" },next: "intro_talk_wall_alt3_44" },
    { id: "intro_talk_wall_alt3_44", name: "あなた", text: "そ、それよりさ、みやの声ってすごい通るよね", portrait:{ who:"miya", face:"normal", size:"500px" },next: "intro_talk_wall_alt3_45" },
    { id: "intro_talk_wall_alt3_45", name: "みや", text: "そうですか?自分ではあまり分からないですが…", portrait:{ who:"miya", face:"normal", size:"500px" },next: "intro_talk_wall_alt3_46" },
    { id: "intro_talk_wall_alt3_46", name: "あなた", text: "まあ、もし声が通らなかったときは、一発殴ろうかなと思ってたので",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_talk_wall_alt3_47" },
    { id: "intro_talk_wall_alt3_47", name: "みや", text: "な、殴る!?",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_talk_wall_alt3_48" },
    { id: "intro_talk_wall_alt3_48", name: "みや", text: "はい!ビンタかグーパンか、あるいはキックか…",portrait:{ who:"miya", face:"kind", size:"500px" }, next: "intro_talk_wall_alt3_49" },
    { id: "intro_talk_wall_alt3_49", name: "あなた", text: "ええ…怖…",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_talk_wall_alt3_50" },
    { id: "intro_talk_wall_alt3_50", name: "みや", text: "…ふふ、冗談ですよ。殴る訳ないじゃないですか。", portrait:{ who:"miya", face:"smile", size:"500px" },next: "intro_talk_wall_alt3_51" },
    { id: "intro_talk_wall_alt3_51", name: "みや", text: "私はそんな凶暴な人じゃないですから。", portrait:{ who:"miya", face:"kind", size:"500px" },next: "intro_talk_wall_alt3_52" },
    { id: "intro_talk_wall_alt3_52", name: "あなた", text: "で、ですよね~ハハハ…", portrait:{ who:"miya", face:"kind", size:"500px" },next: "intro_talk_wall_alt3_53" },
    { id: "intro_talk_wall_alt3_53", name: "あなた", text: "(冗談に聞こえなかったというのは黙った方がいいか…)",portrait:{ who:"miya", face:"smile", size:"500px" }, next: "intro_talk_wall_alt3_54" },
    { id: "intro_talk_wall_alt3_54", name: " ", text: "情報:『白い壁』が更新されました。", se: "infomation", set: { flags: ["intro_wall_miya"] ,infoNotes: ["white_wall:eye"] }, next: "intro_hub" },
    
    //壁withみや(二回目)
    { id: "intro_talk_wall_again", name: "あなた", text: "そういえば、視線を感じたって言ってたけど、いつ気づいたの?", next: "intro_talk_wall_again_1" },
    { id: "intro_talk_wall_again_1", name: "みや", text: "うーん…私はこの部屋を調べ始めたタイミングですね。", portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_talk_wall_again_2" },
    { id: "intro_talk_wall_again_2", name: "みや", text: "誰かから見られてるて思った時、あなたは別の方向を見ていましたし、",  portrait:{ who:"miya", face:"kind", size:"500px" },next: "intro_talk_wall_again_3" },
    { id: "intro_talk_wall_again_3", name: "みや", text: "それも一人から見られているという感じではなかったので…", portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_talk_wall_again_4" },
    { id: "intro_talk_wall_again_4", name: "みや", text: "恐らく、壁の向こう側から見ているのかなと。", portrait:{ who:"miya", face:"kind", size:"500px" }, next: "intro_talk_wall_again_5" },
    { id: "intro_talk_wall_again_5", name: "みや", text: "でも、窓とかもありませんし、こちら側からは何も見えないので、本当に見られているかどうかも分かりませんが…", portrait:{ who:"miya", face:"fear", size:"500px" }, next: "intro_talk_wall_again_6" },
    { id: "intro_talk_wall_again_6", name: "あなた", text: "…みやは、視線を感じてなんともないの?", portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_talk_wall_again_7" },
    { id: "intro_talk_wall_again_7", name: "みや", text: "誰かから見られていると感じる以外は何も…", portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "intro_talk_wall_again_8" },
    { id: "intro_talk_wall_again_8", name: "みや", text: "それに、悪い感じはしないんですよね……",  portrait:{ who:"miya", face:"kind", size:"500px" },next: "intro_talk_wall_again_9" },
    { id: "intro_talk_wall_again_9", name: "みや", text: "観察されているというよりも、見守っているというか…",  portrait:{ who:"miya", face:"normal", size:"500px" },next: "intro_talk_wall_again_10" },
    { id: "intro_talk_wall_again_10", name: "みや", text: "勿論、緊張というか…やりずらいとは感じますけどね…", portrait:{ who:"miya", face:"smile", size:"500px" }, next: "intro_talk_wall_again_11" },
    { id: "intro_talk_wall_again_11", name: "あなた", text: "(あの視線を感じて不快感すら覚えないのか…)", portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_talk_wall_again_12" },
    { id: "intro_talk_wall_again_12", name: "あなた", text: "(みやって何者なんだ…?)", portrait:{ who:"miya", face:"smile", size:"500px" }, nextIfFlags: [
    { flags: ["three_doors"], next: "intro_doors" },
    { flags: [], next: "intro_hub" }
  ], next: "intro_hub" },

    //ヒント
    { id: "intro_encourage", name: "あなた", text: "探索に行き詰まっちゃって…なにかアイデアない?", next: "intro_encourage2" },
    { id: "intro_encourage2", name: "みや", portrait:{ who:"miya", face:"normal", size:"500px" }, text: "そうですね…", next: "intro_encourage3" },
    { id: "intro_encourage3", name: "みや",  portrait:{ who:"miya", face:"kind", size:"500px" },text: "まだ探索しきれていない箇所がありそうです。", next: "intro_encourage4" },
    { id: "intro_encourage4", name: "みや", portrait:{ who:"miya", face:"normal", size:"500px" }, text: "そこを確認すると、何か情報が得られるかもしれません。", next: "intro_encourage5" },
  { id: "intro_encourage5", name: "あなた", portrait:{ who:"miya", face:"smile", size:"500px" }, text: "なるほど…ありがとう!", nextIfFlags: [
    { flags: ["three_doors"], next: "intro_doors" },
    { flags: [], next: "intro_hub" }
  ],next: "intro_hub" },

  //雑談
    { id: "intro_press", name: "あなた", text: "あの…", next: "intro_press2" },
    { id: "intro_press2", name: "みや", text: "……?",  portrait:{ who:"miya", face:"normal", size:"500px" },next: "intro_press3" },
    { id: "intro_press3", name: "あなた", text: "(気まずい…)", next: "intro_press4" },
    { id: "intro_press4", name: "あなた", text: "(自分の知っているみやかどうか定かじゃない以上、もし自分の知らないみやだったときが気まずい…)", next: "intro_press5" },
    { id: "intro_press5", name: "あなた", text: "(もし初対面だった場合、あんなに馴れ馴れしく接してしまった…もう少し遠慮するべきだったかも…)", next: "intro_press6" },
    { id: "intro_press6", name: "みや",  portrait:{ who:"miya", face:"kind", size:"500px" },text: "あの…", next: "intro_press7" },
    { id: "intro_press7", name: "あなた",  portrait:{ who:"miya", face:"kind", size:"500px" },text: "は、はい!", next: "intro_press8" },
    { id: "intro_press8", name: "みや", portrait:{ who:"miya", face:"confuse", size:"500px" }, text: "私から一つお願いがあって…", next: "intro_press9" },
    { id: "intro_press9", name: "あなた", portrait:{ who:"miya", face:"confuse", size:"500px" }, text: "なんでしょう!!", next: "intro_press10" },
    { id: "intro_press10", name: "みや",  portrait:{ who:"miya", face:"kind", size:"500px" },text: "…丁寧語、外して頂けますか?", next: "intro_press11" },
    { id: "intro_press11", name: "あなた", portrait:{ who:"miya", face:"kind", size:"500px" },text: "…え?", next: "intro_press12" },
    { id: "intro_press12", name: "みや",  portrait:{ who:"miya", face:"fear", size:"500px" },text: "先ほどまで、タメ口で話していた人が丁寧語に変わると、距離が遠くなってしまったかのように感じてしまって…", next: "intro_press13" },
    { id: "intro_press13", name: "みや",  portrait:{ who:"miya", face:"normal", size:"500px" },text: "それに私達が知り合いだった場合、タメ口の方が話しやすいんじゃないですか?", next: "intro_press14" },
    { id: "intro_press14", name: "あなた",  portrait:{ who:"miya", face:"normal", size:"500px" },text: "でも、もしかしたら初対面かもしれないし、どちらにしても、みやにとっては初対面じゃ…?", next: "intro_press15" },
    { id: "intro_press15", name: "みや",  portrait:{ who:"miya", face:"smile", size:"500px" },text: "私は全然気にしないですよ。それに、タメ口で話してくださった方が私も接しやすいので…", next: "intro_press16" },
    { id: "intro_press16", name: "みや", portrait:{ who:"miya", face:"normal", size:"500px" }, text: "タメ口で話して下さると私が助かるんです", next: "intro_press17" },
    { id: "intro_press17", name: "みや",  portrait:{ who:"miya", face:"kind", size:"500px" },text: "お願いしてもいいですか…?", next: "intro_press18" },
    { id: "intro_press18", name: "あなた", portrait:{ who:"miya", face:"normal", size:"500px" }, text: "…分かった。これからはタメ口で話すね。", next: "intro_press19" },
    { id: "intro_press19", name: "みや",  portrait:{ who:"miya", face:"smile", size:"500px" },text: "ありがとうございます!", next: "intro_press20" },
    { id: "intro_press20", name: "あなた",  portrait:{ who:"miya", face:"normal", size:"500px" },text: "いや、こっちこそありがとう。一度どうしようか悩んでいた所だったから…", next: "intro_press21" },
    { id: "intro_press21", name: "あなた",  portrait:{ who:"miya", face:"normal", size:"500px" },text: "それと、みやも全然タメ口で話していいからね!", next: "intro_press22" },
    { id: "intro_press22", name: "みや", portrait:{ who:"miya", face:"confuse", size:"500px" }, text: "うーん、私のタメ口は記憶を取り戻せるまで少し待って頂けませんか?", next: "intro_press23" },
    { id: "intro_press23", name: "みや",  portrait:{ who:"miya", face:"normal", size:"500px" },text: "今はどうしても、丁寧語の方が…安心するんです…", next: "intro_press24" },
    { id: "intro_press24", name: "みや", portrait:{ who:"miya", face:"confuse", size:"500px" }, text: "人にお願いしておきながら…すみません。", next: "intro_press25" },
    { id: "intro_press25", name: "あなた",  portrait:{ who:"miya", face:"confuse", size:"500px" },text: "全然謝ることじゃないよ!", next: "intro_press26" },
    { id: "intro_press26", name: "あなた",  portrait:{ who:"miya", face:"confuse", size:"500px" },text: "ゆっくり思い出そう。", next: "intro_press27" },
    { id: "intro_press27", name: "みや",  portrait:{ who:"miya", face:"smile", size:"500px" },text: "…はい。ありがとうございます!", next: "intro_press28" },
    { id: "intro_press28", name: "あなた", text: "(みやの記憶が戻ったら、いっぱいタメ口喋らせよう。)",  nextIfFlags: [
    { flags: ["three_doors"], next: "intro_doors" },
    { flags: [], next: "intro_hub" }
  ],next: "intro_hub" },

    // 三扉が現れる
    { id: "intro_move", name: "あなた", text: "うーん…一応一通り調べ終わったけど、出口は見当たらなかったな…", next: "intro_wall_open1" },
    { id: "intro_wall_open1", name: "あなた", text: "そっちはどう?", next:"intro_wall_open2" },
    { id: "intro_wall_open2", name: "みや",portrait:{ who:"miya", face:"fear", size:"500px" }, text: "私も出口らしきものは見つかっていません。手がかりですら…まだですね…", next:"intro_wall_open3" },
    { id: "intro_wall_open3", name: "あなた",portrait:{ who:"miya", face:"fear", size:"500px" }, text: "ちなみに、記憶の方は…", next:"intro_wall_open4" },
    { id: "intro_wall_open4", name: " ", text: "みやは気まずそうに首を横に振った。", next:"intro_wall_open5" },
    { id: "intro_wall_open5", name: "みや", portrait:{ who:"miya", face:"confuse", size:"500px" },text: "すみません…まだ何も", next:"intro_wall_open6" },
    { id: "intro_wall_open6", name: "あなた", portrait:{ who:"miya", face:"confuse", size:"500px" },text: "謝る必要はないよ。ゆっくり思い出そう。", next:"intro_wall_open7" },
    { id: "intro_wall_open7", name: "みや", portrait:{ who:"miya", face:"kind", size:"500px" },text: "…はい。ありがとうございます。", next:"intro_wall_open8" },
    { id: "intro_wall_open8", name: "あなた", text: "それにしても、完全に行き詰まったな。", next:"intro_wall_open9" },
    { id: "intro_wall_open9", name: "あなた", text: "他に探せる場所も見当たらないし…", next:"intro_wall_open10" },
    { id: "intro_wall_open10", name: " ", text: "",se:"wall_crack", fx:"quake", fxMs:1600, next:"intro_wall_open11" },
    { id: "intro_wall_open11", name: "あなた", text: "…!!?", next:"intro_wall_open12" },
    { id: "intro_wall_open12", name: "あなた", text: "な、なんだ!?", next:"intro_wall_open13" },
    { id: "intro_wall_open13", name: "みや", portrait:{ who:"miya", face:"fear", size:"500px" },text: "突然地面が…揺れて…!!", next:"intro_wall_open14" },
    { id: "intro_wall_open14", name: "あなた", text: "まさか地震!?こんなときに…しかも結構大きい…!!", next:"intro_wall_open15" },
    { id: "intro_wall_open15", name: "みや", portrait:{ who:"miya", face:"kind", size:"500px" },text: "一回、机の下に隠れませんか…?", next:"intro_wall_open16" },
    { id: "intro_wall_open16", name: "みや", text: "壁にヒビが入ってて、当たったら大事故です…!!", next:"intro_wall_open17" },
    { id: "intro_wall_open17", name: "あなた", text: "そうしよう!!", next:"intro_wall_open18" },
    { id: "intro_wall_open18", name: " ", text: "", set: { bg: "#000" }, next:"intro_wall_open19" },
    { id: "intro_wall_open19", name: "みや", text: "…揺れ、おさまりましたね。", next:"intro_wall_open20" },
    { id: "intro_wall_open20", name: "あなた", text: "そうだな、一回出るか。", next:"intro_wall_open21" },
    { id: "intro_wall_open21", name: " ", text: "",set: { bg: "#FFF" },  next:"intro_wall_open22" },
    { id: "intro_wall_open22", name: "みや", text: "…え?", next:"intro_wall_open23" },
    { id: "intro_wall_open23", name: "あなた", text: "なんだこれ…", next:"intro_wall_open24" },
    { id: "intro_wall_open24", name: " ", text: "",set: { bg: "./Three_Doors.png" },  next:"intro_wall_open25" },
    { id: "intro_wall_open25", name: "あなた", text: "…扉?", next:"intro_wall_open26" },
    { id: "intro_wall_open26", name: "みや",portrait:{ who:"miya", face:"confuse", size:"500px" }, text: "もしかして、出口でしょうか?", next:"intro_wall_open27" },
    { id: "intro_wall_open27", name: "あなた", portrait:{ who:"miya", face:"confuse", size:"500px" },text: "いや、だとしても3つも扉があるのはおかしくないか?", next:"intro_wall_open28" },
    { id: "intro_wall_open28", name: "みや",portrait:{ who:"miya", face:"fear", size:"500px" }, text: "どれか1つが当たり…ということでしょうか?", next:"intro_wall_open29" },
    { id: "intro_wall_open29", name: "あなた", portrait:{ who:"miya", face:"fear", size:"500px" },text: "…調べてみないと分からないな。", next:"intro_wall_open30" },
    { id: "intro_wall_open30", name: "あなた", text: "下手すると壁が崩れるかもしれない…慎重に進もう。",set:{ flags: ["three_doors"] }, next: "intro_doors" },

    // 三扉ハブ(ここから各ルートへ)
    {
      id: "intro_doors",
      ui: { silent: true },
      explore: {
      spots: [
        { id:"Door_ichi", x:"15%", y:"20%", size:"48px", icon:"./kirakira.png",next:"door_ichi"},
        { id:"Door_ni", x:"40%", y:"12%", size:"48px",  icon:"./kirakira.png",next:"door_ni"},
        { id:"Door_san",   x:"83%", y:"30%", size:"48px",  icon:"./kirakira.png", next:"door_san"}
         ],
       talk: { sprite:"./みや.stand.png", x:"30%", y:"72%", size:"270px", next:"intro_talk1" },
     },
    },

    // 扉の前(プレースホルダ:ここから各間へ遷移を作る)
    //白い部屋(最初)⇒壱の間
    { id: "door_ichi", name: " ", text: "扉の前に来た。",  choices: [
        { label: "扉を観察する",nextIfFlags:[
        { flags: ["OneRoom"], next: "door_inspect_ichi_again" },
        { flags: [], next: "door_inspect_ichi" },],next:"door_inspect_ichi",},
        { label: "扉を開けてみる", nextIfFlags:[
        { flags: ["r1_already_opened"], next: "r1_come_back" },
        { flags: ["intro_ichi_checked"], next: "r1_enter_0" },
        { flags: [], next: "door_enter_ichi" },],next:"door_enter_ichi",},],},
    
    //白い部屋(最初)⇒弐の間
    { id: "door_ni", name: " ", text: "扉の前に来た。",  choices: [
        { label: "扉を観察する", nextIfFlags:[
        { flags: ["TwoRoom"], next: "door_inspect_ni_again" },
        { flags: [], next: "door_inspect_ni" },],next:"door_inspect_ni",},
        { label: "扉を開けてみる", nextIfFlags:[
        { flags: ["r2_started"], next: "r2_come_back" },
        { flags: ["ninoma_opened"], next: "intro_r2_will_open" },
        { flags: ["Green"], next: "intro_r2_unlocked" },
         { flags: ["intro_ni_checked"], next: "r2_enter_0" },
        { flags: [], next: "door_enter_ni" },],next:"door_enter_ni"},]},

    //白い部屋(最初)⇒参の間
    { id: "door_san", name: " ", text: "扉の前に来た。",  choices: [
       { label: "扉を観察する", nextIfFlags:[
        { flags: ["ThreeRoom"], next: "door_inspect_san_again" },
        { flags: [], next: "door_inspect_san" },],next:"door_inspect_san",},
        { label: "扉を開けてみる", nextIfFlags: [
        { flags: ["r3_started"], next: "r3_come_back" },
        { flags: ["sannnoma_opened"], next: "intro_r3_will_open" },
        { flags: ["Red"], next: "intro_r3_unlocked" },
        { flags: ["intro_san_checked"], next: "r3_enter_0" },
        { flags: [], next: "door_enter_san" },],next:"door_enter_san"},]},
    

      //壱の間のドアを調べる
    { id: "door_inspect_ichi", name: " ",text: "水色に渦巻模様の扉だ。",next: "door_inspect_ichi_2" },
    { id: "door_inspect_ichi_2", name: "みや", text: "隣の扉と色合いが似ていますね", next: "door_inspect_ichi_3" },
    { id: "door_inspect_ichi_3", name: "あなた", text: "そうだね…この扉の模様は何かを表しているのか?", next: "door_inspect_ichi_4" },
    { id: "door_inspect_ichi_4", name: "あなた", text: "…ん?なんかドアノブに書かれていないか?", next: "door_inspect_ichi_5" },
    { id: "door_inspect_ichi_5", name: "あなた", text: "これは…漢字の『壱』?", next: "door_inspect_ichi_6" },
    { id: "door_inspect_ichi_6", name: "みや", text: "数字の1を表している…のでしょうか?",next: "door_inspect_ichi_7" },
    { id: "door_inspect_ichi_7", name: "あなた", text: "何か意味があるのだろうか…?",next: "door_inspect_ichi_8" },
    { id: "door_inspect_ichi_8", name: " ", text: "情報:『水色の扉』が追加されました。",se: "infomation",  set: { flags: ["OneRoom"] ,items:["ichi_doors"],infoNotes: ["ichi_doors:one"] },next: "intro_doors" },
    
    //壱の間のドアを調べる(弐回目以降)
    { id: "door_inspect_ichi_again", name: " ", text: "水色に渦巻模様の扉だ。", next: "door_inspect_ichi_again_2" },
    { id: "door_inspect_ichi_again_2", name: " ", text: "ドアノブには『壱』と書かれている。", next: "intro_doors" },
    
    //壱の間に入る
    { id: "door_enter_ichi", name: " ", text: "ドアノブに手を掛ける――", next: "door_enter_ichi_2" },
    { id: "door_enter_ichi_2", name: " ", text: "ギギー…", next: "door_enter_ichi_3" },
    { id: "door_enter_ichi_3", name: " ", text: "鍵は…掛かってないみたい", next: "door_enter_ichi_4" },
    { id: "door_enter_ichi_4", name: "みや", text: "中に入れそうですね…",portrait:{ who:"miya", face:"kind", size:"500px" }, set:{flags:["intro_ichi_checked"]},next: "r1_enter" },
    
    //弐の間の扉を調べる
    { id: "door_inspect_ni", name: " ", text: "青色にしずく模様の扉だ。",next: "door_inspect_ni_2" },
    { id: "door_inspect_ni_2", name: "みや", text: "梅雨模様みたいな扉ですね", next: "door_inspect_ni_3" },
    { id: "door_inspect_ni_3", name: "あなた", text: "そうだね…まるで雨みたいだ…?", next: "door_inspect_ni_4" },
    { id: "door_inspect_ni_4", name: "あなた", text: "…ん?なんかドアノブに書かれていないか?", next: "door_inspect_ni_5" },
    { id: "door_inspect_ni_5", name: "あなた", text: "これは…漢字の『弐』?", next: "door_inspect_ni_6" },
    { id: "door_inspect_ni_6", name: "みや", text: "数字の2を表している…のでしょうか?", next: "door_inspect_ni_7" },
    { id: "door_inspect_ni_7", name: "あなた", text: "何か意味があるのだろうか…?", next: "door_inspect_ni_8" },
    { id: "door_inspect_ni_8", name: " ", text: "情報:『青い扉』が追加されました。", se: "infomation", set: { flags: ["TwoRoom"] ,items:["ni_doors"],infoNotes: ["ni_doors:two"] },next: "intro_doors" },
    
    //弐の間の扉を調べる(弐回目以降)
    { id: "door_inspect_ni_again", name: " ", text: "青色にしずく模様の扉だ。", next: "door_inspect_ni_again_2" },
    { id: "door_inspect_ni_again_2", name: " ", text: "ドアノブには『弐』と書かれている。", next: "intro_doors" },
    
    //弐の間に入ろうとする(鍵かかってる)
    { id: "door_enter_ni", name: " ", text: "ドアノブに手を掛ける――", next: "door_enter_ni_2" },
    { id: "door_enter_ni_2", name: " ", text: "ガチャガチャ", next: "door_enter_ni_3" },
    { id: "door_enter_ni_3", name: "あなた", text: "あれ…?鍵がかかっている。", next: "door_enter_ni_4" },
    { id: "door_enter_ni_4", name: "みや", text: "鍵が必要みたいですね…でも、鍵なんてどこにもなかったと思いますが…",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "door_enter_ni_5" },
    { id: "door_enter_ni_5", name: "あなた", text: "(まだ探せしていない所なんてあったか…?)", portrait:{ who:"miya", face:"confuse", size:"500px" },next: "door_enter_ni_6" },
    { id: "door_enter_ni_6", name: "あなた", text: "他の場所も見てみるか…", set:{flags:["intro_ni_checked"]},next: "intro_doors" },

    //戻ってきたら開いてる(弐の間)
    { id: "ninoma_kagi", name: " ", text: "ガチャ", next: "ninoma_kagi2" },
    { id: "ninoma_kagi2", name: "あなた", text: "―――あれ?今鍵の音がした．．．?", next: "ninoma_kagi3" },
    { id: "ninoma_kagi3", name: "みや", text: "どこか開いたのでしょうか…?",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "ninoma_kagi4" },
    { id: "ninoma_kagi4", name: "みや", text: "もう一度調べなおしてみませんか?",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_doors" },
    
    //参の間を調べる
    { id: "door_inspect_san", name: " ", text: "茶色に山模様の扉だ", next: "door_inspect_san_2" },
    { id: "door_inspect_san_2", name: "みや", text: "山といったら緑を想像しますが、ここでは茶色なんですね…", next: "door_inspect_san_3" },
    { id: "door_inspect_san_3", name: "あなた", text: "そうだね…色合いにも何かしら意味があるのか?", next: "door_inspect_san_4" },
    { id: "door_inspect_san_4", name: "あなた", text: "…ん?なんかドアノブに書かれていないか?", next: "door_inspect_san_5" },
    { id: "door_inspect_san_5", name: "あなた", text: "これは…漢字の『参』?", next: "door_inspect_san_6" },
    { id: "door_inspect_san_6", name: "みや", text: "数字の3を表している…のでしょうか?", next: "door_inspect_san_7" },
    { id: "door_inspect_san_7", name: "あなた", text: "何か意味があるのだろうか…?", next: "door_inspect_san_8" },
    { id: "door_inspect_san_8", name: " ", text: "情報:『3つの扉』が追加されました。", se: "infomation", set: { flags: ["ThreeRoom"] ,items:["san_doors"],infoNotes: ["san_doors:three"] },next: "intro_doors" },

    //参の間を調べる(弐回目以降)
    { id: "door_inspect_san_again", name: " ", text: "茶色に山模様の扉だ。", next: "door_inspect_san_again_2" },
    { id: "door_inspect_san_again_2", name: " ", text: "ドアノブには『参』と書かれている。", next: "intro_doors" },

    //参の間に入ろうとする(鍵がかかってる)
    { id: "door_enter_san", name: " ", text: "ドアノブに手を掛ける――", next: "door_enter_san_2" },
    { id: "door_enter_san_2", name: " ", text: "ガチャガチャ", next: "door_enter_san_3" },
    { id: "door_enter_san_3", name: "あなた", text: "あれ…?鍵がかかっている。", next: "door_enter_san_4" },
    { id: "door_enter_san_4", name: "みや", text: "鍵は見ていないですね…そもそも鍵なんてこの部屋にありましたっけ?",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "door_enter_san_5" },
    { id: "door_enter_san_5", name: "あなた", text: "(どうなんだろう．．．でも、見つけ出さないと中に入ることは出来ない。)",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "door_enter_san_6" },
    { id: "door_enter_san_6", name: "あなた", text: "他の場所も見てみるか…", set:{flags:["intro_san_checked"]},next: "intro_doors" },

    //戻ってきたら開いてる(参の間)
    { id: "sannnoma_kagi", name: " ", text: "ガチャ", next: "sannnoma_kagi2" },
    { id: "sannnoma_kagi2", name: "あなた", text: "―――あれ?今鍵の音がした．．．?", next: "sannnoma_kagi3" },
    { id: "sannnoma_kagi3", name: "みや", text: "どこか開いたのでしょうか…?",portrait:{ who:"miya", face:"confuse", size:"500px" }, next: "sannnoma_kagi4" },
    { id: "sannnoma_kagi4", name: "みや", text: "もう一度調べなおしてみませんか?", portrait:{ who:"miya", face:"normal", size:"500px" },next: "intro_doors" },

    // 扉を開ける(壱)
    { id:"r1_enter_0", name:"あなた", text :"(扉に鍵はかかっていない…)",next:"r1_enter"},
    { id: "r1_enter", name: " ", text: "(どうしよう…中に入ってしまおうか…?)",choices: [
        { label: "入る", next: "ichinoma" },
        { label: "もう少し白い部屋を探索する。", next: "intro_doors" },
      ] },
    { id: "r2_enter_0", name: " ", text: "鍵がかかっていて開かない。", next:"intro_doors" },
    { id: "r3_enter_0", name: " ", text: "鍵がかかっていて開かない。", next: "intro_doors" },

    //扉を開ける(弐)
    { id: "intro_r2_unlocked", name: " ", text: "ギギー…", next: "intro_r2_unlocked2" },
    { id: "intro_r2_unlocked2", name: "あなた", text: "鍵が…かかってない!?", next: "intro_r2_unlocked3" },
    { id: "intro_r2_unlocked3", name: "みや", text: "箏の部屋に行くまでは確か空いていなかったはずです…", portrait:{ who:"miya", face:"fear", size:"500px" },next: "intro_r2_unlocked4" },
    { id: "intro_r2_unlocked4", name: "みや", text: "何かがトリガーになって、鍵が解除されたのでしょうか…",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_r2_unlocked5" },
    { id: "intro_r2_unlocked5", name: "あなた", text: "(どうやって鍵が開いたのかは分からないけど…とりあえず、先にはすすめそうだ。",portrait:{ who:"miya", face:"normal", size:"500px" }, set:{flags:["ninoma_opened"]},next: "intro_r2_will_open" },
    { id: "intro_r2_will_open", name: "あなた", text: "(どうしよう…中に入ってしまおうか…?)",choices: [
        { label: "入る", next: "ninoma" },
        { label: "もう少し白い部屋を探索する。", next: "intro_doors" },
      ] },

    //扉を開ける(参)
    { id: "intro_r3_unlocked", name: " ", text: "ギギー…", next: "intro_r3_unlocked2" },
    { id: "intro_r3_unlocked2", name: " ", text: "鍵が…かかってない!?", next: "intro_r3_unlocked3" },
    { id: "intro_r3_unlocked3", name: " ", text: "箏の部屋に行くまでは確か空いていなかったはずです…", portrait:{ who:"miya", face:"fear", size:"500px" },next: "intro_r3_unlocked4" },
    { id: "intro_r3_unlocked4", name: " ", text: "何かがトリガーになって、鍵が解除されたのでしょうか…",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "intro_r3_unlocked5" },
    { id: "intro_r3_unlocked5", name: " ", text: "(どうやって鍵が開いたのかは分からないけど…とりあえず、先にはすすめそうだ。",portrait:{ who:"miya", face:"normal", size:"500px" }, set: { flags: ["sannnoma_opened"]  },next: "intro_r3_will_open" },
    { id: "intro_r3_will_open", name: " ", text: "(どうしよう…中に入ってしまおうか…?)",choices: [
        { label: "入る", next: "sannnoma" },
        { label: "もう少し白い部屋を探索する。", next: "intro_doors" },
      ] },


    //壱の間に入る
    { id: "ichinoma", name: "あなた", text: "白い部屋はある程度調べつくした。", next: "ichinoma_2" },
    { id: "ichinoma_2", name: "あなた", text: "他の場所も調べた方がいいだろう。", next: "ichinoma_3" },
    { id: "ichinoma_3", name: "あなた", text: "それに扉の向こうは出口かもしれない。", next: "ichinoma_4" },
    { id: "ichinoma_4", name: "みや", text: "…入ってみますか" ,portrait:{ who:"miya", face:"kind", size:"500px" },next: "ichinoma_5" },
    { id: "ichinoma_5", name: "あなた", text: "…そうだな。",portrait:{ who:"miya", face:"kind", size:"500px" }, next: "ichinoma_6" },
    { id: "ichinoma_6", name: " ", text: "おくるおくる扉を開ける――", next: "ichinoma_7" },
    { id: "ichinoma_7", name: " ", text: "", se:"door_open", set: { bg: "#fff" },  next: "r1_from_intro" },

     //弐の間に入る
    { id: "ninoma", name: "あなた", text: "この部屋、入ってみない?", next: "ninoma_2" },
    { id: "ninoma_2", name: "あなた", text: "さっきの箏の部屋みたいに何か情報を拾えるかもしれないし、", next: "ninoma_3" },
    { id: "ninoma_3", name: "あなた", text: "それに、鍵が開いたってことは…恐らく、ここに入れ、というメッセージだと思うんだ。", next: "ninoma_4" },
    { id: "ninoma_4", name: "みや", text: "そうですね…何か脱出の手がかりもあるかもしれません。" ,portrait:{ who:"miya", face:"kind", size:"500px" },next: "ninoma_5" },
    { id: "ninoma_5", name: "みや", text: "入ってみましょう。",portrait:{ who:"miya", face:"normal", size:"500px" }, next: "ninoma_6" },
    { id: "ninoma_6", name: "あなた", text: "みやと一度視線を交わした後、おくるおくる扉を開ける――", next: "ninoma_7" },
    { id: "ninoma_7", name: " ", text: "", se:"door_open",  next: "r2_from_intro" },

     //参の間に入る
    { id: "sannnoma", name: "みや", text: "ここが最後の扉…でしょうか…", portrait:{ who:"miya", face:"normal", size:"500px" },next: "sannnoma_2" },
    { id: "sannnoma_2", name: "あなた", text: "分からないよ?今度は壁が崩壊して、大きい扉がドーンと出てきたりして．．．", portrait:{ who:"miya", face:"normal", size:"500px" },next: "sannnoma_3" },
    { id: "sannnoma_3", name: " ", text: "ふふ．．．ありえますね。",portrait:{ who:"miya", face:"smile", size:"500px" }, next: "sannnoma_4" },
    { id: "sannnoma_4", name: "みや", text: "…それでも、きっと何か手がかりがあるはずだ。",next: "sannnoma_5" },
    { id: "sannnoma_5", name: "あなた", text: "入ってみよう。", next: "sannnoma_6" },
    { id: "sannnoma_6", name: " ", text: "鍵の開いた扉をゆっくりと開ける――", next: "sannnoma_7" },
    { id: "sannnoma_7", name: " ", text: "", se:"door_open", next: "r3_from_intro" },
  ]
};