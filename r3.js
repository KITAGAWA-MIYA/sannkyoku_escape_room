// story/r3.js — 壱ノ間(風の部屋)
// 『白い部屋→壱ノ間』の章データ。window.js の動的ロード/静的マージのどちらにも対応。
// area = "壱の間" として情報タブでフィルタ表示できるようにしています。

window.STORY_R3 = {
  meta: { areaName: "尺八の部屋" },
  chars:{
    みや:{ defaultSize:"500px", defaultX:"50%", defaultY:"43%", faces:{ normal:"miya.normal.jpg", smile:"miya.smile.jpg", kind:"miya.kind.jpg", fear:"miya.fear.jpg", confuse:"miya.confuse.jpg"}},
    みや_bad:{ defaultSize:"360px", faces:{ normal:"miya.狂.jpg", angry:"miya.angry.狂.jpg", tear:"miya.tear.狂.jpg", smile:"miya.smile.狂.jpg"} }
 },

  // 章固有の情報(情報タブで表示)
  info: {
    shakuhachi_case: { 
      title: "ショーケース",  icon: "./shakuhachi_showcase.png", image: "./shakuhachi_showcase.png",
      desc: "尺八が入ったショーケースだ。", 
      area: "尺八の部屋" 
    },
    r3_memo_sannjusou: { 
      title: "メモ(三重奏)",  icon: "./sannju_memo.png", image: "./sannju_memo.png",
      desc: "三重奏についての説明がかかれている。", 
      area: "尺八の部屋" 
    },
     r3_sakazuki: { 
      title: "盃",  icon: "./sakazuki.png", image: "./sakazuki.png",
      desc: "尺八のショーケースの中に入っていた。", 
      area: "尺八の部屋" 
    },
    shakuhachi_map: { 
      title: "尺八運指表",  icon: "./shakuhachi_finger.jpg", image: "./shakuhachi_finger.jpg",
      desc: "尺八の音と指の形についての表。犬小屋の中にあった。犬はいなかった。", 
      area: "尺八の部屋" 
    },
    r3_red_button: { 
      title: "変な形のボタン",  icon: "./red_button.png", image: "./red_button.png",
      desc: "ショーケース前に置かれたボタン。これは、ボタンです。", 
      area: "尺八の部屋" 
    },
    r3_horu: { 
      title: "スコップ",  icon: "./shaberu.png", image: "./shaberu.png",
      desc: "床に先っぽが刺さっていた。", 
      area: "尺八の部屋" 
    },
    r3_nazonazo_2: { 
      title: "謎の紙",  icon: "./r3_nazonazo.png", image: "./r3_nazonazo.png",
      desc: "筒の中からでてきた。何を表しているのだろうか?", 
      area: "尺八の部屋" 
    },
    r3_tennjo_moji: { 
      title: "天井の文字",  icon: "./tennjo_ji.png", image: "./tennjo_ji.png",
      desc: "天井に文字が書かれている。『私が望むのは大きい音。さすれば、きなたらの支える力となるだろう』", 
      area: "尺八の部屋" 
    },
    r3_big_circle_wood: { 
      title: "丸い板1",  icon: "./maruiita.png", image: "./maruiita.png",
      desc: "まるい、いた。", 
      area: "尺八の部屋" 
    },
    r3_small_circle_wood1: { 
      title: "丸い板2",  icon: "./maruiita.png", image: "./maruiita.png",
      desc: "まるい、いた。", 
      area: "尺八の部屋" 
    },
    r3_small_circle_wood2: { 
      title: "丸い板3",  icon: "./maruiita.png", image: "./maruiita.png",
      desc: "まるい、いた。", 
      area: "尺八の部屋" 
    },
    r3_small_circle_wood3: { 
      title: "丸い板4",  icon: "./maruiita.png", image: "./maruiita.png",
      desc: "まるい、いた。", 
      area: "尺八の部屋" 
    },
    r3_small_circle_wood4: { 
      title: "丸い板5",  icon: "./maruiita.png", image: "./maruiita.png",
      desc: "まるい、いた。", 
      area: "尺八の部屋" 
    },
    drink_blue: { 
      title: "謎の液体(青)",  icon: "./BULE.png", image: "./BULE.png",
      desc: "鍵のついた木箱から見つけた。毒々しい色をしている。ぶうぉーん、と音がなる。", 
      area: "尺八の部屋" 
    },
    shizuku_san: { 
      title: "小さな雫 –参-",  icon: "./chiisanashizuku_san.png", image: "./chiisanashizuku_san.png",
      desc: "魔女の家を訪れ、お母様を治す薬を貰うお話。", 
      area: "尺八の部屋" 
    },
    r3_voice_recorder: {  
      icon: "./voice_recorder.png", image: "./voice_recorder.png",
      title: "ボイスレコーダー", 
      desc: "床に埋まっていたボイスレコーダー。映画についての録音が残っている。", 
      area: "尺八の部屋" 
    },
    r3_nazotoki_tsuduki: {  
      icon: "./nazo_continue.png", image: "./nazo_continue.png",
      title: "謎の紙2", 
      desc: "この紙と文字、どこかで見たような気がする。", 
      area: "尺八の部屋" 
    },
    r3_card_QR: {  
      icon: "./card_key.png", image: "./card_key.png",
      title: "カードキー", 
      desc: "上からカードキーが落ちてきた。シャンデリアにでも引っかかっていたのか…?", 
      area: "尺八の部屋" 
    }
  },

  nodes: [
    // ===== 参ノ間:導入 =====

    { id: "r3_from_intro", name: " ", set: { bg: "#FFF" }, text: "......", next: "r3_from_intro1" },
    { id: "r3_from_intro1", name: " ", text: "扉をくぐると空気が変わった――。",set:{bgm:"intro"}, next: "r3_from_intro2" },
    { id: "r3_from_intro2", name: " ", set: { bg: "sannnoma.png" }, text: "天井からは人工の光、そして視界は緑に包まれる。", next: "r3_from_intro3" },
    { id: "r3_from_intro3", name: "あなた", text: "ここはまた、変わった雰囲気の部屋…だな。", next: "r3_from_intro4" },
    { id: "r3_from_intro4", name: "みや", text: "シャンデリアがあるので、外ではなさそうですね。",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "r3_from_intro5" },
    { id: "r3_from_intro5", name: "みや", text: "もしかして、この竹の壁って壁紙だったりします?",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r3_from_intro6" },
    { id: "r3_from_intro6", name: "あなた", text: "凄い…精巧に作られてる。",portrait:{ who:"みや", face:"kind", size:"500px" },nextIfFlags: [
        { flags: ["r2_shouji"], next: "r3_from_intro7" },
        { flags: [], next: "r3_from_intro7_2" }], next: "r3_from_intro7_2" },
    { id: "r3_from_intro7", name: "あなた", text: "(そういえば、三味線の部屋にもよく作られた障子の壁紙があった)",next: "r3_from_intro8" },
    { id: "r3_from_intro7_2", name: "あなた", text: "そういえば、三味線の部屋にもよく作られた障子の壁紙がありましたね",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r3_from_intro7_3" },
    { id: "r3_from_intro7_3", name: "あなた", text:"え、そんなのあったの?全然気づかなかった…",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r3_from_intro8" },
    { id: "r3_from_intro8", name: "あなた", text: "(ここの持ち主は、壁紙にこだわりがあるのか…?)", set: { flags:["r3_started"] }, next: "r3_hub" },
   

    // =====  探索(参の間) =====
    { 
      id: "r3_hub",
      ui: { silent: true },set:{bgm:"tannsaku"},
      explore: {
        spots: [
          { id: "r3_look_shakuhachi", x: "45%", y: "20%", size: "48px", icon: "./kirakira.png", next: "r3_shakuhachi", nextRepeat: "r3_shakuhachi_again" },
          { id: "r3_inugoya", x: "83%", y: "43%", size: "48px", icon: "./kirakira.png", next: "r3_look_inugoya", nextRepeat: "r3_look_inugoya_again" },
          { id: "r3_botann", x: "40%", y: "74%", size: "48px", icon: "./kirakira.png", next: "r3_look_botann", nextRepeat: "r3_look_botann_again" },
          { id: "r3_sukoppu", x: "4%", y: "55%", size: "48px", icon: "./kirakira.png", next: "r3_look_sukoppu", nextRepeat: "r3_look_sukoppu_again" },
          
          { id: "r3_ana_dai", x: "8%", y: "26%", size: "48px", icon: "./kirakira.png", nextIfFlags: [
        { flags: ["r3_cover_dai"], next: "r3_covering_dai" },
        { flags: [], next: "r3_look_ana_dai" }], next: "r3_look_ana_dai", nextRepeat: "r3_look_ana_dai_again", nextRepeatIfFlags:[
        {flags:["r3_cover_dai"], next:"r3_covering_dai"},
        {flags:[], next:"r3_look_ana_dai_again"}]},
        
        { id: "r3_ana_shou1", x: "77%", y: "12%", size: "48px", icon: "./kirakira.png", nextIfFlags: [
        { flags: ["r3_cover_shou1"], next: "r3_covering_shou1" },
        { flags: [], next: "r3_look_ana_shou1" }], next: "r3_look_ana_shou1", nextRepeat: "r3_look_ana_shou1_again", nextRepeatIfFlags:[
        {flags:["r3_cover_shou1"], next:"r3_covering_shou1"},
        {flags:[], next:"r3_look_ana_shou1_again"}]},
        
        { id: "r3_ana_shou2", x: "82%", y: "26%", size: "48px", icon: "./kirakira.png", nextIfFlags: [
        { flags: ["r3_cover_shou2"], next: "r3_covering_shou2" },
        { flags: [], next: "r3_look_ana_shou2" }], next: "r3_look_ana_shou2", nextRepeat: "r3_look_ana_shou2_again", nextRepeatIfFlags:[
        {flags:["r3_cover_shou2"], next:"r3_covering_shou2"},
        {flags:[], next:"r3_look_ana_shou2_again"}]},
        
        { id: "r3_ana_shou3", x: "89%", y: "10%", size: "48px", icon: "./kirakira.png", nextIfFlags: [
        { flags: ["r3_cover_shou3"], next: "r3_covering_shou3" },
        { flags: [], next: "r3_look_ana_shou3" }], next: "r3_look_ana_shou3", nextRepeat: "r3_look_ana_shou3_again", nextRepeatIfFlags:[
        {flags:["r3_cover_shou3"], next:"r3_covering_shou3"},
        {flags:[], next:"r3_look_ana_shou3_again"}]},
        
        { id: "r3_ana_shou4", x: "95%", y: "18%", size: "48px", icon: "./kirakira.png", nextIfFlags: [
        { flags: ["r3_cover_shou4"], next: "r3_covering_shou4" },
        { flags: [], next: "r3_look_ana_shou4" }], next: "r3_look_ana_shou4", nextRepeat: "r3_look_ana_shou4_again", nextRepeatIfFlags:[
        {flags:["r3_cover_shou4"], next:"r3_covering_shou4"},
        {flags:[], next:"r3_look_ana_shou4_again"}]},

          { id: "r3_tsutsu", x: "47%", y: "81%", size: "48px", icon: "./kirakira.png", next: "r3_look_tsutsu", nextRepeat: "r3_look_tsutsu_again" },
          { id: "r3_light", x: "49%", y: "5%", size: "48px", icon: "./kirakira.png", next: "r3_look_light", nextRepeat: "r3_look_light_again" },
          { id: "r3_batsu_1", x: "5%", y: "85%", size: "48px", icon: "./kirakira.png", nextIfFlags: [
        { flags: ["r3_ita_dai"], next: "r3_look_batsu1_again" },
        { flags: [], next: "r3_look_batsu1" }], next: "r3_look_batsu1" },
          { id: "r3_batsu_2", x: "19%", y: "76%", size: "48px", icon: "./kirakira.png",nextIfFlags: [
        { flags: ["r3_voice_recording"], next: "r3_look_batsu2_again" },
        { flags: [], next: "r3_look_batsu1" }], next: "r3_look_batsu2" },
          { id: "r3_batsu_3", x: "28%", y: "74%", size: "48px", icon: "./kirakira.png",nextIfFlags: [
        { flags: ["r3_ita_shou1"], next: "r3_look_batsu3_again" },
        { flags: [], next: "r3_look_batsu1" }], next: "r3_look_batsu3" },
          { id: "r3_batsu_4", x: "20%", y: "85%", size: "48px", icon: "./kirakira.png",nextIfFlags: [
        { flags: ["r3_chiisanashizuku_san"], next: "r3_look_batsu4_again" },
        { flags: [], next: "r3_look_batsu1" }], next: "r3_look_batsu4" },
          { id: "r3_batsu_5", x: "65%", y: "78%", size: "48px", icon: "./kirakira.png",nextIfFlags: [
        { flags: ["r3_ita_shou2"], next: "r3_look_batsu5_again" },
        { flags: [], next: "r3_look_batsu1" }], next: "r3_look_batsu5" },
          { id: "r3_batsu_6", x: "96%", y: "83%", size: "48px", icon: "./kirakira.png", nextIfFlags: [
        { flags: ["r3_memo_sannjusou"], next: "r3_look_batsu6_again" },
        { flags: [], next: "r3_look_batsu1" }], next: "r3_look_batsu6" },
          { id: "r3_batsu_7", x: "77%", y: "85%", size: "48px", icon: "./kirakira.png", nextIfFlags: [
        { flags: ["r3_ita_shou3"], next: "r3_look_batsu7_again" },
        { flags: [], next: "r3_look_batsu1" }], next: "r3_look_batsu7" },
          { id: "r3_batsu_8", x: "66%", y: "92%", size: "48px", icon: "./kirakira.png",nextIfFlags: [
        { flags: ["r3_nazo_tsuduki"], next: "r3_look_batsu8_again" },
        { flags: [], next: "r3_look_batsu1" }], next: "r3_look_batsu8" },
          { id: "r3_batsu_9", x: "87%", y: "89%", size: "48px", icon: "./kirakira.png",nextIfFlags: [
        { flags: ["r3_ita_shou4"], next: "r3_look_batsu9_again" },
        { flags: [], next: "r3_look_batsu1" }], next: "r3_look_batsu9" },
        ],
        talk: { sprite: "./miya.stand.jpg", x: "58%", y: "75%", size: "501px", next: "r3_talk1" }
      }
    },

    // 尺八ショーケース
    { id: "r3_shakuhachi", name: " ", text: "部屋の中央には豪華なショーケースが置かれている。", next: "r3_shakuhachi2" },
    { id: "r3_shakuhachi2", name: "みや", text: "これは、尺八…ですか?",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r3_shakuhachi3" },
    { id: "r3_shakuhachi3", name: "あなた", text: "うん…多分尺八…だと思う。",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r3_shakuhachi4" },
    { id: "r3_shakuhachi4", name: "あなた", text: "(けど、穴の数が違うし、明らかに大きい。子供の身長くらいあるんじゃないか…?)", next: "r3_shakuhachi5" },
    { id: "r3_shakuhachi5", name: "あなた", text: "(こんなに大きい尺八ってあるんだっけ?)", next: "r3_shakuhachi6" },
    { id: "r3_shakuhachi6", name: "みや", text: "うーん、やはり各部屋和楽器をイメージされてるんですね。",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r3_shakuhachi7" },
    { id: "r3_shakuhachi7", name: "あなた", text: "そうだね、それも三曲研究部に全部関わりがある和楽器だ。", portrait:{ who:"みや", face:"normal", size:"500px" },next: "r3_shakuhachi8" },
    { id: "r3_shakuhachi8", name: "みや", text: "え!?尺八を吹いてる方もいるんですか!?凄いですね!!",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r3_shakuhachi9" },
    { id: "r3_shakuhachi9", name: "みや", text: "演奏とかはそれぞれ楽器ごとって感じなんですか?",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r3_shakuhachi10" },
    { id: "r3_shakuhachi10", name: "あなた", text: "それぞれで演奏するときもあるけど、基本は合奏形態かな。", portrait:{ who:"みや", face:"normal", size:"500px" },next: "r3_shakuhachi11" },
    { id: "r3_shakuhachi11", name: "みや", text: "合奏...かっこいいですね!", portrait:{ who:"みや", face:"smile", size:"500px" },next: "r3_shakuhachi12" },
    { id: "r3_shakuhachi12", name: "あなた", text: "そ、そうかな……あの、話が急に変わるんだけど、さっきからショーケースペタペタ触って何してるの?",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r3_shakuhachi13" },
    { id: "r3_shakuhachi13", name: "みや", text: "あ!!開けられるところがないか調べてたんです。",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r3_shakuhachi14" },
    { id: "r3_shakuhachi14", name: "みや", text: "中にある尺八を取り出せないかなと…", portrait:{ who:"みや", face:"kind", size:"500px" },next: "r3_shakuhachi15" },
    { id: "r3_shakuhachi15", name: "みや", text: "でも、何処にも扉がないんですけどね…", portrait:{ who:"みや", face:"confuse", size:"500px" },next: "r3_shakuhachi16" },
    { id: "r3_shakuhachi16", name: "あなた", text: "ショーケースの扉がない…?でも尺八が入ってるってことは、どこかに開閉できる場所がある筈だよね…", portrait:{ who:"みや", face:"confuse", size:"500px" },next: "r3_shakuhachi17" },
    { id: "r3_shakuhachi17", name: "みや", text: "うーん…そうなんですよね…",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r3_shakuhachi18" },
    { id: "r3_shakuhachi18", name: "みや", text: "私、もう少しショーケース周り調べてみます。なのであなたはその他の場所をお願いしてもいいですか?", portrait:{ who:"みや", face:"normal", size:"500px" },next: "r3_shakuhachi19" },
    { id: "r3_shakuhachi19", name: "あなた", text: "分かった!他にも調べられそうな所がないかみてみるよ。",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r3_shakuhachi20" },
    { id: "r3_shakuhachi20", name: "あなた", text: "(ここはみやに任せて別の場所を調べよう)", next: "r3_shakuhachi21" },
    { id: "r3_shakuhachi21", name: " ", text: "情報:『ショーケース』を手に入れた!",se: "infomation",  set: { flags: ["shakuhachi_cage"], info: ["shakuhachi_case"] }, next: "r3_hub" },

    { id: "r3_shakuhachi_again", name: "みや", text: "うーん…どこにもないな…", nextIfFlags: [
        { flags: ["r3_card_key","BLUE"], next: "r3_open_showcase_again" },
        { flags: ["r3_card_key"], next: "r3_open_showcase" },
        { flags: [], next: "r3_shakuhachi_again2" }], next: "r3_shakuhachi_again2" },
    { id: "r3_shakuhachi_again2", name: "あなた", text: "(みやはショーケースを開けることに夢中になっている。)", next: "r3_shakuhachi_again3" },
    { id: "r3_shakuhachi_again3", name: "あなた", text: "(ここはみやに任せて、他の所を調べよう。)", next: "r3_hub" },


    // ===== 犬小屋(尺八運指表) =====
    { id: "r3_look_inugoya", name: " ", text: "犬小屋が置かれている。", next: "r3_look_inugoya2" },
    { id: "r3_look_inugoya2", name: "あなた", text: "木で出来ていて、普通に頑丈そうだ。", next: "r3_look_inugoya3" },
    { id: "r3_look_inugoya3", name: "あなた", text: "中に犬は…流石に居ないか…", next: "r3_look_inugoya4" },
    { id: "r3_look_inugoya4", name: "あなた", text: "…ん?本がおいてある。しかも結構分厚い", next: "r3_look_inugoya5" },
    { id: "r3_look_inugoya5", name: "あなた", text: "『尺八の演奏手法』…か", next: "r3_look_inugoya6" },
    { id: "r3_look_inugoya6", name: "あなた", text: "目次を…って、え!?200ページもあるの!?", next: "r3_look_inugoya7" },
    { id: "r3_look_inugoya7", name: "あなた", text: "尺八の概要、歴史、吹くときの姿勢、楽譜の読み方…色々書いてある…", next: "r3_look_inugoya8" },
    { id: "r3_look_inugoya8", name: "あなた", text: "それにしても量が多すぎる…つ、使いそうになったら読もうかな…", next: "r3_look_inugoya9" },
    { id: "r3_look_inugoya9", name: "あなた", text: "…あれ?本に紙が挟まってる。", next: "r3_look_inugoya10" },
    { id: "r3_look_inugoya10", name: "あなた", text: "これは…『尺八運指表…?』", overlay: { sprite: "./shakuhachi_finger.jpg", withText: true }, next: "r3_look_inugoya11" },
    { id: "r3_look_inugoya11", name: "あなた", text: "「ロ、ツ、レ、チ…」塞ぐ所が黒丸で描かれている。",overlay: { sprite: "./shakuhachi_finger.jpg", withText: true }, next: "r3_look_inugoya12" },
    { id: "r3_look_inugoya12", name: "あなた", text: "これだけでもちゃんと見ておくか…", next: "r3_look_inugoya13" },
    { id: "r3_look_inugoya13", name: " ", text: "情報:『尺八運指表』を手に入れた!", se: "infomation", set: { flags: ["shakuhachi_glaf"], info: ["shakuhachi_map"] }, next: "r3_hub" },
   
   //犬小屋(二回目)
    { id: "r3_look_inugoya_again", name: " ", text: "犬小屋で、『尺八運指表』を拾った。", overlay: { sprite: "./shakuhachi_finger.jpg", withText: true },next: "r3_look_inugoya_again2" },
    { id: "r3_look_inugoya_again2", name: "あなた", text: "『尺八の演奏方法』は…必要になったら読もう。", next: "r3_hub" },
    
    //赤いボタン
    { id: "r3_look_botann", name: " ", text: "ショーケースの前に赤いハンドルのようなものが置いてある。", next: "r3_look_botann2" },
    { id: "r3_look_botann2", name: "あなた", text: "これは…なんだ?ちょっと触ってみるか。", next: "r3_look_botann3" },
    { id: "r3_look_botann3", name: "あなた", text: "うーん…", next: "r3_look_botann4" },
    { id: "r3_look_botann4", name: "あなた", text: "!!", next: "r3_look_botann5" },
    { id: "r3_look_botann5", name: "あなた", text: "上から体重を掛けたら凹んだ…もしかして、ボタン!?", next: "r3_look_botann6" },
    { id: "r3_look_botann6", name: "あなた", text: "……", next: "r3_look_botann7" },
    { id: "r3_look_botann7", name: "あなた", text: "…な、何も起こらない。", next: "r3_look_botann8" },
    { id: "r3_look_botann8", name: "あなた", text: "よ、よかった…もしかしたら、ちゃんと押せていなかったのかも", next: "r3_look_botann9" },
    { id: "r3_look_botann9", name: "あなた", text: "それにしても随分へんな形をしているな…", next: "r3_look_botann10" },
    { id: "r3_look_botann10", name: "あなた", text: "このボタン…一体何に使うんだ?", next: "r3_look_botann11" },
    { id: "r3_look_botann11", name: " ", text: "情報:『変な形のボタン』を手に入れた",se: "infomation",  set: { flags: ["r3_pushing"], info: ["r3_red_button"] }, next: "r3_hub" },
    
    // 赤いボタン(二回目以降)
    { id: "r3_look_botann_again", name: "あなた", text: "ショーケースの前に赤いボタンが置かれている", next: "r3_look_botann_again2" },
    { 
      id: "r3_look_botann_again2", 
      name: "あなた",
      text: "押してみる…?",
      choices: [
        { label: "押す", next: "r3_botann_pushed" },
        { label: "押さない", next: "r3_hub" }
      ]
    },

    { id: "r3_botann_pushed", name: "あなた", text: "…ボタンを押した。",se:"button", nextIfFlags: [
        { flags: ["r3_cover_dai","r3_cover_shou1","r3_cover_shou2","r3_cover_shou3","r3_cover_shou4"], next: "r3_play_shakuhachi" },
        { flags: [], next: "r3_bad_song" }], next: "r3_bad_song" },

    { id: "r3_no_song", name: " ", text: "――しかし、何も起こらない。", next: "r3_no_song2" },
    { id: "r3_no_song2", name: " ", text: "(一体…どうすればいいんだ?)", next: "r3_hub" },

    // ===== スコップ =====

    { id: "r3_look_sukoppu", name: " ", text: "床に大きなスコップが刺さっている。", next: "r3_look_sukoppu2" },
    { id: "r3_look_sukoppu2", name: "あなた", text: "まさか土の床にスコップが刺さってるとは思わなかったな…", next: "r3_look_sukoppu3" },
    { id: "r3_look_sukoppu3", name: "あなた", text: "そういえば、床に×印がいくつかあるよな…", next: "r3_look_sukoppu4" },
    { id: "r3_look_sukoppu4", name: "あなた", text: "そこの下に何かあるとしたら…", next: "r3_look_sukoppu5" },
    { id: "r3_look_sukoppu5", name: "あなた", text: "え、もしかしなくても、掘れってこと…?", next: "r3_look_sukoppu6" },
    { id: "r3_look_sukoppu6", name: " ", text: "情報:『スコップ』を手に入れた!",se: "infomation",  set: { flags:["r3_horu_sukoppu"], info: ["r3_horu"] }, next: "r3_hub" },

    { id: "r3_look_sukoppu_again", name: "あなた", text: "スコップがあった場所だ。", next: "r3_hub" },

    //壁の穴道。穴を調べた時の分岐(板をもってるか否か)
    { id: "r3_look_ana_dai", name: "あなた", text: "壁に穴が開いてる…", nextIfFlags: [
        { flags: ["r3_ita_dai"], next: "r3_fusagu_dai" },
        { flags: [], next: "r3_look_ana_dai2" }], next: "r3_look_ana_dai2" },

    { id: "r3_look_ana_dai_again", name: "あなた", text: "壁に穴が開いてる。", nextIfFlags: [
        { flags: ["r3_ita_dai"], next: "r3_fusagu_dai" },
        { flags: [], next: "r3_hub" }], next: "r3_hub" },

    { id: "r3_look_ana_shou1", name: "あなた", text: "壁に穴が開いてる…", nextIfFlags: [
        { flags: ["r3_ita_shou1"], next: "r3_fusagu_shou1" },
        { flags: [], next: "r3_look_ana_dai2" }], next: "r3_look_ana_dai2" },
    
    { id: "r3_look_ana_shou1_again", name: "あなた", text: "壁に穴が開いてる…", nextIfFlags: [
        { flags: ["r3_ita_shou1"], next: "r3_fusagu_shou1" },
        { flags: [], next: "r3_hub" }], next: "r3_hub" },

    { id: "r3_look_ana_shou2", name: "あなた", text: "壁に穴が開いてる…", nextIfFlags: [
        { flags: ["r3_ita_shou2"], next: "r3_fusagu_shou2" },
        { flags: [], next: "r3_look_ana_dai2" }], next: "r3_look_ana_dai2" },
    
    { id: "r3_look_ana_shou2_again", name: "あなた", text: "壁に穴が開いてる…", nextIfFlags: [
        { flags: ["r3_ita_shou2"], next: "r3_fusagu_shou2" },
        { flags: [], next: "r3_hub" }], next: "r3_hub" },

    { id: "r3_look_ana_shou3", name: "あなた", text: "壁に穴が開いてる…", nextIfFlags: [
        { flags: ["r3_ita_shou3"], next: "r3_fusagu_shou3" },
        { flags: [], next: "r3_look_ana_dai2" }], next: "r3_look_ana_dai2" },
    { id: "r3_look_ana_shou3_again", name: "あなた", text: "壁に穴が開いてる…", nextIfFlags: [
        { flags: ["r3_ita_shou3"], next: "r3_fusagu_shou3" },
        { flags: [], next: "r3_hub" }], next: "r3_hub" },
   
    { id: "r3_look_ana_shou4", name: "あなた", text: "壁に穴が開いてる…", nextIfFlags: [
        { flags: ["r3_ita_shou4"], next: "r3_fusagu_shou4" },
        { flags: [], next: "r3_look_ana_dai2" }], next: "r3_look_ana_dai2" },
    { id: "r3_look_ana_shou4_again", name: "あなた", text: "壁に穴が開いてる…", nextIfFlags: [
        { flags: ["r3_ita_shou4"], next: "r3_fusagu_shou4" },
        { flags: [], next: "r3_hub" }], next: "r3_hub" },

    //壁の穴(板を持っていなかった時一回目)
    { id: "r3_look_ana_dai2", name: "あなた", text: "中を覗いても、何も見えない…", next: "r3_look_ana_dai3" },
    { id: "r3_look_ana_dai3", name: "あなた", text: "この穴、一体どこに繋がっているんだ?", next: "r3_hub" },

    //壁の穴(板を持っている。塞ぐか否か)
    { id: "r3_fusagu_dai", name: "あなた", text: "そういえば、さっき掘った所から、丸い板を見つけたな…", overlay: { sprite: "./maruiita.png", withText: true },next: "r3_fusagu_dai2" },
    { id: "r3_fusagu_dai2", name: "あなた", text: "もしかしたら、はめられるんじゃないか?", choices: [
        { label: "はめてみる", next: "r3_fusagu_dai3" },
        { label: "やめとく", next: "r3_hub" } ] },
    { id: "r3_fusagu_dai3", name: "あなた", text: "形はぴったりだ…", next: "r3_fusagu_dai4" },
    { id: "r3_fusagu_dai4", name: "あなた", text: "穴を塞ぐことに成功した。", set: { flags:["r3_cover_dai"], takeItems: ["r3_big_circle_wood"] }, next: "r3_hub" },

    { id: "r3_fusagu_shou1", name: "あなた", text: "そういえば、さっき掘った所から、丸い板を見つけたな…",  overlay: { sprite: "./maruiita.png", withText: true },next: "r3_fusagu_shou1_2" },
    { id: "r3_fusagu_shou1_2", name: "あなた", text: "もしかしたら、はめられるんじゃないか?", choices: [
        { label: "はめてみる", next: "r3_fusagu_shou1_3" },
        { label: "やめとく", next: "r3_hub" } ] },
    { id: "r3_fusagu_shou1_3", name: "あなた", text: "形はぴったりだ…", next: "r3_fusagu_shou1_4" },
    { id: "r3_fusagu_shou1_4", name: "あなた", text: "穴を塞ぐことに成功した。", set: { flags:["r3_cover_shou1"], takeItems: ["r3_small_circle_wood1"] }, next: "r3_hub" },

    { id: "r3_fusagu_shou2", name: "あなた", text: "そういえば、さっき掘った所から、丸い板を見つけたな…", overlay: { sprite: "./maruiita.png", withText: true }, next: "r3_fusagu_shou2_2" },
    { id: "r3_fusagu_shou2_2", name: "あなた", text: "もしかしたら、はめられるんじゃないか?", choices: [
        { label: "はめてみる", next: "r3_fusagu_shou2_3" },
        { label: "やめとく", next: "r3_hub" } ] },
    { id: "r3_fusagu_shou2_3", name: "あなた", text: "形はぴったりだ…", next: "r3_fusagu_shou2_4" },
    { id: "r3_fusagu_shou2_4", name: "あなた", text: "穴を塞ぐことに成功した。", set: { flags:["r3_cover_shou2"], takeItems: ["r3_small_circle_wood2"] }, next: "r3_hub" },

    { id: "r3_fusagu_shou3", name: "あなた", text: "そういえば、さっき掘った所から、丸い板を見つけたな…",  overlay: { sprite: "./maruiita.png", withText: true },next: "r3_fusagu_shou3_2" },
    { id: "r3_fusagu_shou3_2", name: "あなた", text: "もしかしたら、はめられるんじゃないか?", choices: [
        { label: "はめてみる", next: "r3_fusagu_shou3_3" },
        { label: "やめとく", next: "r3_hub" } ] },
    { id: "r3_fusagu_shou3_3", name: "あなた", text: "形はぴったりだ…", next: "r3_fusagu_shou3_4" },
    { id: "r3_fusagu_shou3_4", name: "あなた", text: "穴を塞ぐことに成功した。", set: { flags:["r3_cover_shou3"], takeItems: ["r3_small_circle_wood3"] }, next: "r3_hub" },

     { id: "r3_fusagu_shou4", name: "あなた", text: "そういえば、さっき掘った所から、丸い板を見つけたな…", overlay: { sprite: "./maruiita.png", withText: true }, next: "r3_fusagu_shou4_2" },
    { id: "r3_fusagu_shou4_2", name: "あなた", text: "もしかしたら、はめられるんじゃないか?", choices: [
        { label: "はめてみる", next: "r3_fusagu_shou4_3" },
        { label: "やめとく", next: "r3_hub" } ] },
    { id: "r3_fusagu_shou4_3", name: "あなた", text: "形はぴったりだ…", next: "r3_fusagu_shou4_4" },
    { id: "r3_fusagu_shou4_4", name: "あなた", text: "穴を塞ぐことに成功した。", set: { flags:["r3_cover_shou4"], takeItems: ["r3_small_circle_wood4"] }, next: "r3_hub" },

    { id: "r3_covering_dai", name: "あなた", text: "穴は塞がっている", choices: [
        { label: "取り外す", next: "r3_pick_dai" },
        { label: "やめとく", next: "r3_hub" } ] },
    { id: "r3_pick_dai", name: "あなた", text: "板を取り外した。", set: { unsetFlags:["r3_cover_dai"], items: ["r3_big_circle_wood"] }, next: "r3_hub" },
   
   { id: "r3_covering_shou1", name: "あなた", text: "穴は塞がっている", choices: [
        { label: "取り外す", next: "r3_pick_shou1" },
        { label: "やめとく", next: "r3_hub" } ] },
    { id: "r3_pick_shou1", name: "あなた", text: "板を取り外した。", set: { unsetFlags:["r3_cover_shou1"], items: ["r3_small_circle_wood1"] }, next: "r3_hub" },

    { id: "r3_covering_shou2", name: "あなた", text: "穴は塞がっている", choices: [
        { label: "取り外す", next: "r3_pick_shou2" },
        { label: "やめとく", next: "r3_hub" } ] },
    { id: "r3_pick_shou2", name: "あなた", text: "板を取り外した。", set: { unsetFlags:["r3_cover_shou2"], items: ["r3_small_circle_wood2"] }, next: "r3_hub" },

    { id: "r3_covering_shou3", name: "あなた", text: "穴は塞がっている", choices: [
        { label: "取り外す", next: "r3_pick_shou3" },
        { label: "やめとく", next: "r3_hub" } ] },
    { id: "r3_pick_shou3", name: "あなた", text: "板を取り外した。", set: { unsetFlags:["r3_cover_shou3"], items: ["r3_small_circle_wood3"] }, next: "r3_hub" },

    { id: "r3_covering_shou4", name: "あなた", text: "穴は塞がっている", choices: [
        { label: "取り外す", next: "r3_pick_shou4" },
        { label: "やめとく", next: "r3_hub" } ] },
    { id: "r3_pick_shou4", name: "あなた", text: "板を取り外した。", set: { unsetFlags:["r3_cover_shou4"], items: ["r3_small_circle_wood4"] }, next: "r3_hub" },

    //謎解き【答:ロ(くにがまえ)】
    { id: "r3_look_tsutsu", name: " ", text: "ショーケースのそばに筒が置かれている。", next: "r3_look_tsutsu2" },
    { id: "r3_look_tsutsu2", name: "あなた", text: "中に紙が入ってる…", next: "r3_look_tsutsu3" },
    { id: "r3_look_tsutsu3", name: "あなた", text: "『以下で表されるカタカナ一文字を答えなさい』…謎解きか?", overlay: { sprite: "./r3_nazonazo.png", withText: true }, next: "r3_look_tsutsu4" },
    { id: "r3_look_tsutsu4", name: "あなた", text: "えーっと、○が「口、人、寸、古...」",  overlay: { sprite: "./r3_nazonazo.png", withText: true },next: "r3_look_tsutsu5" },
    { id: "r3_look_tsutsu5", name: "あなた", text: "✕が「手、物、尺、新...」", overlay: { sprite: "./r3_nazonazo.png", withText: true }, next: "r3_look_tsutsu6" },
    { id: "r3_look_tsutsu6", name: "あなた", text: "「口、人、寸、古」が出来て「手、物、尺、新」に出来ないカタカナを探せってことか…?", overlay: { sprite: "./r3_nazonazo.png", withText: true }, next: "r3_look_tsutsu7" },
    { id: "r3_look_tsutsu7", name: "あなた", text: "うーん…全然分からない。", next: "r3_look_tsutsu8" },
    { id: "r3_look_tsutsu8", name: "あなた", text: "(もう少し考えて分からかったら、みやに手伝ってもらうのもありかもしれない...)", next: "r3_look_tsutsu10" },
    { id: "r3_look_tsutsu10", name: " ", text: "情報:『謎の紙』を手に入れた!",se: "infomation",  set: { flags:["r3_nazo_2"], info: ["r3_nazonazo_2"] }, next: "r3_hub" },

    { id: "r3_look_tsutsu_again", name: "あなた", text: "中に謎解きが書かれた紙が書かれている。",
         choices: [
        { label: "もう一度よく見てみる", next: "r3_look_tsutsu_again_2" },
        { label: "探索に戻る", next: "r3_hub" } ] },
    { id: "r3_look_tsutsu_again_2", name: "あなた", text: "",  overlay: { sprite: "./r3_nazonazo.png", withText: true },next: "r3_hub" },

    //シャンデリア
    { id: "r3_look_light", name: " ", text: "天井には豪華なシャンデリアが飾られている。", next: "r3_look_light2" },
    { id: "r3_look_light2", name: "あなた", text: "凄く綺麗なんだけど、この部屋の雰囲気には合ってないな…", next: "r3_look_light3" },
    { id: "r3_look_light3", name: "あなた", text: "…ん?天井に何か書いてある!", next: "r3_look_light4" },
    { id: "r3_look_light4", name: "あなた", text: "『私が望むのは大きい音。さすれば、きなたらの支える力となるだろう』", next: "r3_look_light5" },
    { id: "r3_look_light5", name: "あなた", text: "大きい音…か。全力で声を出してみる…?", next: "r3_look_light6" },
    { id: "r3_look_light6", name: "あなた", text: "あああああああああ", next: "r3_look_light7" },
    { id: "r3_look_light7", name: "あなた", text: "……", next: "r3_look_light8" },
    { id: "r3_look_light8", name: "あなた", text: "…ま、何も起こらないですよね。", next: "r3_look_light9" },
    { id: "r3_look_light9", name: " ", text: "情報:『天井の文字』が追加されました。",se: "infomation",  set: { flags: ["r3_tennjo"], info: ["r3_tennjo_moji"] }, next: "r3_hub" },

    { id: "r3_look_light_again", name: "あなた", text: "天井には『私が望むのは大きい音。さすれば、きなたらの支える力となるだろう』と書かれている。", next: "r3_hub" },

    //×印(丸い板)
    { id: "r3_look_batsu1", name: "あなた", text: "床に×印が書いてある…",  nextIfFlags: [
        { flags: ["r3_horu_sukoppu"], next: "r3_shirushi1" },
        { flags: [], next: "r3_batsutsu" }], next: "r3_batsutsu" },
    { id: "r3_shirushi1", name: "あなた", text: "せっかくだし、スコップで掘ってみるか", next: "r3_shirushi1_2" },
    { id: "r3_shirushi1_2", name: "あなた", text: "……", se:"dig",next: "r3_shirushi1_3" },
    { id: "r3_shirushi1_3", name: "あなた", text: "…‼なにか、埋まってる!。", next: "r3_shirushi1_4" },
    { id: "r3_shirushi1_4", name: "あなた", text: "これは…丸い板?", overlay: { sprite: "./maruiita.png", withText: true }, next: "r3_shirushi1_5" },
    { id: "r3_shirushi1_5", name: "あなた", text: "丸い板…?一体何に使えるんだ?", overlay: { sprite: "./maruiita.png", withText: true }, next: "r3_shirushi1_6" },
    { id: "r3_shirushi1_6", name: " ", text: "情報:『丸い板1』を手に入れた!",se: "infomation",  set: { flags: ["r3_ita_dai"], info: ["r3_big_circle_wood"] },  next: "r3_hub" },
    
    { id: "r3_look_batsu1_again", name: "あなた", text: "床の×印。掘って丸い板を見つけた。",overlay: { sprite: "./maruiita.png", withText: true }, next: "r3_hub" },

    // (ボイスレコーダー)
    { id: "r3_look_batsu2", name: "あなた", text: "床に×印が書いてある…",  nextIfFlags: [
        { flags: ["r3_horu_sukoppu"], next: "r3_shirushi2" },
        { flags: [], next: "r3_batsutsu" }], next: "r3_batsutsu" },
    { id: "r3_shirushi2", name: "あなた", text: "せっかくだし、スコップで掘ってみるか", next: "r3_shirushi2_2" },
    { id: "r3_shirushi2_2", name: "あなた", text: "……",se:"dig", next: "r3_shirushi2_3" },
    { id: "r3_shirushi2_3", name: "あなた", text: "…ん?何か埋まってる。", next: "r3_shirushi2_4" },
    { id: "r3_shirushi2_4", name: "あなた", text: "これは…ボイスレコーダ?", overlay: { sprite: "./voice_recorder.png", withText: true }, next: "r3_shirushi2_5" },
    { id: "r3_shirushi2_5", name: "あなた", text: "なんでこんなものが、土に埋まってるんだ…?", next: "r3_shirushi2_6" },
    { id: "r3_shirushi2_6", name: "あなた", text: "…流せるのかな?", next: "r3_shirushi2_7" },
    { id: "r3_shirushi2_7", name: "あなた", text: "……", se:"button",next: "r3_shirushi2_8" },
    { id: "r3_shirushi2_8", name: " ", text: "「…おい、この映画知ってるか?」", next: "r3_shirushi2_9" },
    { id: "r3_shirushi2_9", name: " ", text: "「『小さな雫』…?聞いたことねぇな。これがどうしたんだ?」", next: "r3_shirushi2_10" },
    { id: "r3_shirushi2_10", name: " ", text: "「実はな。これの題材がある研究らしいんだ…それも国家機密の。」", next: "r3_shirushi2_11" },
    { id: "r3_shirushi2_11", name: " ", text: "「国家機密!?おいおいまじかよ…」", next: "r3_shirushi2_12" },
    { id: "r3_shirushi2_12", name: " ", text: "「ああ、なんせ、麻薬の研究らしいくてよ。」", next: "r3_shirushi2_13" },
    { id: "r3_shirushi2_13", name: " ", text: "「この映画に、魔法の薬が出てくるんだが、その薬が実際に作れるらしいんだ。」", next: "r3_shirushi2_14" },
    { id: "r3_shirushi2_14", name: " ", text: "「材料、作り方を間違えなければ、酒の100倍美味いものが作れるらしい。」", next: "r3_shirushi2_15" },
    { id: "r3_shirushi2_15", name: " ", text: "「なんだって!最高じゃねぇか!!」", next: "r3_shirushi2_16" },
    { id: "r3_shirushi2_16", name: " ", text: "「ただ、研究者はその副作用が強くって狂っちまったらしいんがな。」", next: "r3_shirushi2_17" },
    { id: "r3_shirushi2_17", name: " ", text: "「狂った?どういうことだ?」", next: "r3_shirushi2_18" },
    { id: "r3_shirushi2_18", name: " ", text: "「要するに廃人てやつだな。噂によると、ずっと虚空に向かって語り続けてたらしいぞ。」", next: "r3_shirushi2_19" },
    { id: "r3_shirushi2_19", name: " ", text: "「後の研究によって、その原因は研究者が脳に障害を負ってたせいで、副作用に強く反応したからだって判明したらしいんだがな。」", next: "r3_shirushi2_20" },
    { id: "r3_shirushi2_20", name: " ", text: "「じゃあ、健康な俺たちには大丈夫だってことじゃねぇかよ!」", next: "r3_shirushi2_21" },
    { id: "r3_shirushi2_21", name: " ", text: "「酒の100倍美味いものとか、興味しかねぇだろ!なんで俺たちにまで隠そうとするのかよ…」", next: "r3_shirushi2_22" },
    { id: "r3_shirushi2_22", name: " ", text: "「さあな、俺たち庶民にとって、知っても意味ないだろ。」",  nextIfFlags: [
        { flags: ["r3_voice_recording"], next: "r3_hub" },
        { flags: [], next: "r3_shirushi2_23" }], next: "r3_shirushi2_23" },
    { id: "r3_shirushi2_23", name: "あなた", text: "…ボイスレコーダーはここで止まる。", next: "r3_shirushi2_24" },
    { id: "r3_shirushi2_24", name: "あなた", text: "小さな雫…さっきの本か?映画になったんだな。", next: "r3_shirushi2_25" },
    { id: "r3_shirushi2_25", name: " ", text: "情報:『ボイスレコーダ』を手に入れた!",se: "infomation",  set: { flags: ["r3_voice_recording"], info: ["r3_voice_recorder"] },  next: "r3_hub" },
    
    { id: "r3_look_batsu2_again", name: "あなた", text: "床の×印。ボイスレコーダーを見つけた。", overlay: { sprite: "./voice_recorder.png", withText: true }, choices: [
        { label: "もう一度聞く", next: "r3_shirushi2_7" },
        { label: "戻る", next: "r3_hub" }]},

    //(丸い板)
    { id: "r3_look_batsu3", name: "あなた", text: "床に×印が書いてある…",  nextIfFlags: [
        { flags: ["r3_horu_sukoppu"], next: "r3_shirushi3" },
        { flags: [], next: "r3_batsutsu" }], next: "r3_batsutsu" },
    { id: "r3_shirushi3", name: "あなた", text: "せっかくだし、スコップで掘ってみるか", next: "r3_shirushi3_2" },
    { id: "r3_shirushi3_2", name: "あなた", text: "……",se:"dig", next: "r3_shirushi3_3" },
    { id: "r3_shirushi3_3", name: "あなた", text: "…ん?何か埋まってる。", next: "r3_shirushi3_4" },
    { id: "r3_shirushi3_4", name: "あなた", text: "これは…丸い板?", overlay: { sprite: "./maruiita.png", withText: true }, next: "r3_shirushi3_5" },
    { id: "r3_shirushi3_5", name: "あなた", text: "ちょっといびつだな。", overlay: { sprite: "./maruiita.png", withText: true }, next: "r3_shirushi3_6" },
    { id: "r3_shirushi3_6", name: " ", text: "情報:『丸い板2』を手に入れた!",se: "infomation",  set: { flags: ["r3_ita_shou1"], info: ["r3_small_circle_wood1"] },  next: "r3_hub" },
    
    { id: "r3_look_batsu3_again", name: "あなた", text: "床の×印。丸い板を見つけた。",overlay: { sprite: "./maruiita.png", withText: true }, next: "r3_hub" },

    //(小さな雫―参―)
    { id: "r3_look_batsu4", name: "あなた", text: "床に×印が書いてある…", nextIfFlags: [
        { flags: ["r3_horu_sukoppu"], next: "r3_shirushi4" },
        { flags: [], next: "r3_batsutsu" }], next: "r3_batsutsu" },
    { id: "r3_shirushi4", name: "あなた", text: "せっかくだし、スコップで掘ってみるか", next: "r3_shirushi4_2" },
    { id: "r3_shirushi4_2", name: "あなた", text: "……",se:"dig", next: "r3_shirushi4_3" },
    { id: "r3_shirushi4_3", name: "あなた", text: "…ん?何か埋まってる。", next: "r3_shirushi4_4" },
    { id: "r3_shirushi4_4", name: "あなた", text: "これは…本?",  overlay: { sprite: "./chiisanashizuku_san.png", withText: true },next: "r3_shirushi4_5" },
    { id: "r3_shirushi4_5", name: "あなた", text: "『小さな雫 -参-』…やっぱり続きがあったのか。",  overlay: { sprite: "./chiisanashizuku_san.png", withText: true },next: "r3_shirushi4_6" },
    { id: "r3_shirushi4_6", name: "あなた", text: "…せっかくだし、読んでみるか…", next: "r3_shirushi4_7" },
    { id: "r3_shirushi4_7", name: " ", text: "",  se: "paper",next: "r3_shirushi4_8" },
    { id: "r3_shirushi4_8", name: " ", text: "『「誰かいるのかしら…?」トントンと、小さな少女は、そっと扉をノックしました。』", next: "r3_shirushi4_9" },
    { id: "r3_shirushi4_9", name: " ", text: "『しばらくすると、ギィィ…と扉が開き、背の低い、おばあさんが出てきました。』", next: "r3_shirushi4_10" },
    { id: "r3_shirushi4_10", name: " ", text: "『あら…可愛いお客さんだこと…一体どうしたんだい?』", next: "r3_shirushi4_11" },
    { id: "r3_shirushi4_11", name: " ", text: "『少女は一生懸命に話しました。「あのね、隣町の魔女に会いに行きたいの!でも道に迷ってしまって…」』", next: "r3_shirushi4_12" },
    { id: "r3_shirushi4_12", name: " ", text: "『あらら、隣町まで、大変じゃのう。一体どのような用事でそこまで行くんだい?』", next: "r3_shirushi4_13" },
    { id: "r3_shirushi4_13", name: " ", text: "『「あのね、お母さまが病気で倒れてしまったの。お医者さまにも見てもらったけど、誰も治せる薬を持っていなくて…」』", next: "r3_shirushi4_14" },
    { id: "r3_shirushi4_14", name: " ", text: "『そうしたら、旅の人が、『魔女様なら助けてくれるかも』って教えてくれたから、お薬をもらいに行きたいの!』", next: "r3_shirushi4_15" },
    { id: "r3_shirushi4_15", name: " ", text: "『おばあさんは目を細めて言いました。「あらあらまあまあ、お嬢ちゃんは優しいね。」』", next: "r3_shirushi4_16" },
    { id: "r3_shirushi4_16", name: " ", text: "『こんなに心優しいお客様は初めてだよ…いかにも、私が魔女だよ。』", next: "r3_shirushi4_17" },
    { id: "r3_shirushi4_17", name: " ", text: "『なんと、たまたま訪れたお家が、探していた魔女様のお家だったのです!』", next: "r3_shirushi4_18" },
    { id: "r3_shirushi4_18", name: " ", text: "『あなたが魔女様なのね!でもどうしてこんなところに?」少女はびっくりして、興味津々で尋ねました。』", next: "r3_shirushi4_19" },
    { id: "r3_shirushi4_19", name: " ", text: "『「魔女には魔女なりの理由があるんだよ。」魔女はそう言ってニッコリと笑いました。』", next: "r3_shirushi4_20" },
    { id: "r3_shirushi4_20", name: " ", text: "『「さて、欲しいのは薬かい?ちょっと待ってな。」魔女はそう言って、家の奥の方へスタスタと薬を取りに行ってくれました。』", next: "r3_shirushi4_21" },
    { id: "r3_shirushi4_21", name: " ", text: "『「これは風のお導きかしら?」少女はとても嬉しくなりました。』", next: "r3_shirushi4_22" },
    { id: "r3_shirushi4_22", name: " ", text: "『しばらくして、魔女は3つの不思議な瓶を持ってきてくれました。色も大きさも様々でしたが、3つの瓶からはチリンチリンと優しい音が鳴っています。』", next: "r3_shirushi4_23" },
    { id: "r3_shirushi4_23", name: " ", text: "『「まぁ、綺麗な音楽ね!」嬉しそうな少女に、魔女は優しく微笑みます。』", next: "r3_shirushi4_24" },
    { id: "r3_shirushi4_24", name: " ", text: "『「私が丹精込めて作った材料だからね。お嬢ちゃん、お料理は好きかい?」』", next: "r3_shirushi4_25" },
    { id: "r3_shirushi4_25", name: " ", text: "『「ええ!よくお母さまにアップルパイを作ったりするわ!」』", next: "r3_shirushi4_26" },
    { id: "r3_shirushi4_26", name: " ", text: "『「そうかいそうかい。そうしたら薬のレシピを渡すから、お家で作れるかい?」』", next: "r3_shirushi4_27" },
    { id: "r3_shirushi4_27", name: " ", text: "『「ええ!分かった!お母さまのためだもの!魔女様ありがとう!」』", next: "r3_shirushi4_28" },
    { id: "r3_shirushi4_28", name: " ", text: "『少女は魔女から薬の材料とレシピを貰ってお家に帰りました。』",  nextIfFlags: [
        { flags: ["r3_chiisanashizuku_san"], next: "r3_hub" },
        { flags: [], next: "r3_shirushi4_29" }], next: "r3_shirushi4_29" },
    { id: "r3_shirushi4_29", name: "あなた", text: "ここで途切れている…もしかして、まだ続きがあるのか…?", next: "r3_shirushi4_30" },
    { id: "r3_shirushi4_30", name: "あなた", text: "一体どこにあるんだ…", next: "r3_shirushi4_31" },
    { id: "r3_shirushi4_31", name: " ", text: "情報:『小さな雫 -参-』を手に入れた!",se: "infomation",  set: { flags: ["r3_chiisanashizuku_san"], info: ["shizuku_san"] },  next: "r3_hub" },
    
    { id: "r3_look_batsu4_again", name: "あなた", text: "床の×印。『小さな雫 -参-』を見つけた。",choices: [
        { label: "もう一度読む", next: "r3_shirushi4_7" },
        { label: "戻る", next: "r3_hub" }
      ]},

    //(丸い板)
    { id: "r3_look_batsu5", name: "あなた", text: "床に×印が書いてある…", nextIfFlags: [
        { flags: ["r3_horu_sukoppu"], next: "r3_shirushi5" },
        { flags: [], next: "r3_batsutsu" }], next: "r3_batsutsu" },
    { id: "r3_shirushi5", name: "あなた", text: "せっかくだし、スコップで掘ってみるか", next: "r3_shirushi5_2" },
    { id: "r3_shirushi5_2", name: "あなた", text: "……",se:"dig", next: "r3_shirushi5_3" },
    { id: "r3_shirushi5_3", name: "あなた", text: "…ん?何か埋まってる。", next: "r3_shirushi5_4" },
    { id: "r3_shirushi5_4", name: "あなた", text: "これは…丸い板?", overlay: { sprite: "./maruiita.png", withText: true }, next: "r3_shirushi5_5" },
    { id: "r3_shirushi5_5", name: "あなた", text: "何かに使うんだろうか…", overlay: { sprite: "./maruiita.png", withText: true }, next: "r3_shirushi5_6" },
    { id: "r3_shirushi5_6", name: " ", text: "情報:『丸い板3』を手に入れた!",se: "infomation",  set: { flags: ["r3_ita_shou2"], info: ["r3_small_circle_wood2"] },  next: "r3_hub" },
    
    { id: "r3_look_batsu5_again", name: "あなた", text: "床の×印。丸い板を見つけた。", overlay: { sprite: "./maruiita.png", withText: true }, next: "r3_hub" },

    //(メモ:三重奏)
    { id: "r3_look_batsu6", name: "あなた", text: "床に×印が書いてある…", nextIfFlags: [
        { flags: ["r3_horu_sukoppu"], next: "r3_shirushi6" },
        { flags: [], next: "r3_batsutsu" }], next: "r3_batsutsu" },
    { id: "r3_shirushi6", name: "あなた", text: "せっかくだし、スコップで掘ってみるか", next: "r3_shirushi6_2" },
    { id: "r3_shirushi6_2", name: "あなた", text: "……",se:"dig", next: "r3_shirushi6_3" },
    { id: "r3_shirushi6_3", name: "あなた", text: "…ん?何か埋まってる。", next: "r3_shirushi6_4" },
    { id: "r3_shirushi6_4", name: "あなた", text: "これは…紙?何かのメモみたいだ。",  overlay: { sprite: "./memomemo.png", withText: true },next: "r3_shirushi6_5" },
    { id: "r3_shirushi6_5", name: "あなた", text: "『三重奏(名詞):室内楽の一つ。』", next: "r3_shirushi6_6" },
    { id: "r3_shirushi6_6", name: "あなた", text: "『三人の奏者による演奏で、ピアノ、バイオリン、チェロによるピアノ三重奏、』", next: "r3_shirushi6_7" },
    { id: "r3_shirushi6_7", name: "あなた", text: "『バイオリン、ビオラ、チェロによる弦楽三重奏のほか、クラリネットやホルン、ハープなどを含む三重奏がある。トリオ。』", next: "r3_shirushi6_8" },
    { id: "r3_shirushi6_8", name: "あなた", text: "『また、比喩的に、三つの要素が働き合って効果をあげることも言う。〔現代新語小辞典(1936)〕』", next: "r3_shirushi6_9" },
    { id: "r3_shirushi6_9", name: "あなた", text: "三重奏の説明が書かれている。", next: "r3_shirushi6_10" },
    { id: "r3_shirushi6_10", name: "あなた", text: "どうしてこんなところに…", next: "r3_shirushi6_11" },
    { id: "r3_shirushi6_11", name: " ", text: "情報:『メモ(三重奏)』を手に入れた!",se: "infomation",  set: { flags: ["r3_memo_sannjusou"], info: ["r3_memo_sannjusou"] },  next: "r3_hub" },

    { id: "r3_look_batsu6_again", name: "あなた", text: "床の×印。三重奏のメモを見つけた。",  overlay: { sprite: "./memomemo.png", withText: true },next: "r3_hub" },

    //(丸い板4)
    { id: "r3_look_batsu7", name: "あなた", text: "床に×印が書いてある…", nextIfFlags: [
        { flags: ["r3_horu_sukoppu"], next: "r3_shirushi7" },
        { flags: [], next: "r3_batsutsu" }], next: "r3_batsutsu" },
    { id: "r3_shirushi7", name: "あなた", text: "せっかくだし、スコップで掘ってみるか", next: "r3_shirushi7_2" },
    { id: "r3_shirushi7_2", name: "あなた", text: "……",se:"dig", next: "r3_shirushi7_3" },
    { id: "r3_shirushi7_3", name: "あなた", text: "…ん?何か埋まってる。", next: "r3_shirushi7_4" },
    { id: "r3_shirushi7_4", name: "あなた", text: "これは…丸い板?", overlay: { sprite: "./maruiita.png", withText: true }, next: "r3_shirushi7_5" },
    { id: "r3_shirushi7_5", name: "あなた", text: "ちょっとボロイな…",  overlay: { sprite: "./maruiita.png", withText: true },next: "r3_shirushi7_6" },
    { id: "r3_shirushi7_6", name: " ", text: "情報:『丸い板4』を手に入れた!",se: "infomation",  set: { flags: ["r3_ita_shou3"], info: ["r3_small_circle_wood3"] },  next: "r3_hub" },
    
    { id: "r3_look_batsu7_again", name: "あなた", text: "床の×印。丸い板を見つけた。", overlay: { sprite: "./maruiita.png", withText: true }, next: "r3_hub" },

    //(謎解き―続き―)
    { id: "r3_look_batsu8", name: "あなた", text: "床に×印が書いてある…", nextIfFlags: [
        { flags: ["r3_horu_sukoppu"], next: "r3_shirushi8" },
        { flags: [], next: "r3_batsutsu" }], next: "r3_batsutsu" },
    { id: "r3_shirushi8", name: "あなた", text: "せっかくだし、スコップで掘ってみるか", next: "r3_shirushi8_2" },
    { id: "r3_shirushi8_2", name: "あなた", text: "……",se:"dig", next: "r3_shirushi8_3" },
    { id: "r3_shirushi8_3", name: "あなた", text: "…ん?何か埋まってる。", next: "r3_shirushi8_4" },
    { id: "r3_shirushi8_4", name: "あなた", text: "これは…紙?しかも破れてる。", overlay: { sprite: "./nazo_continue.png", withText: true }, next: "r3_shirushi8_5" },
    { id: "r3_shirushi8_5", name: "あなた", text: "これは…なんだろう?",  overlay: { sprite: "./nazo_continue.png", withText: true },next: "r3_shirushi8_6" },
    { id: "r3_shirushi8_6", name: "あなた", text: "似た紙をどこかで見たような気が…", next: "r3_shirushi8_7" },
    { id: "r3_shirushi8_7", name: " ", text: "情報:『謎の紙2』を手に入れた!", se: "infomation", set: { flags: ["r3_nazo_tsuduki"], info: ["r3_nazotoki_tsuduki"] },  next: "r3_hub" },
    
    { id: "r3_look_batsu8_again", name: "あなた", text: "床の×印。謎の紙を見つけた。",  overlay: { sprite: "./nazo_continue.png", withText: true },next: "r3_hub" },

    //(丸い板5)
    { id: "r3_look_batsu9", name: "あなた", text: "床に×印が書いてある…", nextIfFlags: [
        { flags: ["r3_horu_sukoppu"], next: "r3_shirushi9" },
        { flags: [], next: "r3_batsutsu" }], next: "r3_batsutsu" },
    { id: "r3_shirushi9", name: "あなた", text: "せっかくだし、スコップで掘ってみるか", next: "r3_shirushi9_2" },
    { id: "r3_shirushi9_2", name: "あなた", text: "……",se:"dig", next: "r3_shirushi9_3" },
    { id: "r3_shirushi9_3", name: "あなた", text: "…ん?何か埋まってる。", next: "r3_shirushi9_4" },
    { id: "r3_shirushi9_4", name: "あなた", text: "これは…丸い板?", overlay: { sprite: "./maruiita.png", withText: true }, next: "r3_shirushi9_5" },
    { id: "r3_shirushi9_5", name: "あなた", text: "この板、色合いが竹に似て…ないか。",  overlay: { sprite: "./maruiita.png", withText: true },next: "r3_shirushi9_6" },
    { id: "r3_shirushi9_6", name: " ", text: "情報:『丸い板5』を手に入れた!",se: "infomation",  set: { flags: ["r3_ita_shou4"], info: ["r3_small_circle_wood4"] },  next: "r3_hub" },
   
    { id: "r3_look_batsu9_again", name: "あなた", text: "床の×印。丸い板を見つけた。", overlay: { sprite: "./maruiita.png", withText: true }, next: "r3_hub" },

    { id: "r3_batsutsu", name: "あなた", text: "何か意味があるのだろうか…", next: "r3_hub" },
    
    //尺八(BAD_演奏)
    { id: "r3_bad_song", name: " ", text: "ゴゴゴゴゴゴゴ…",  se: "wall_crark",fx:"quake", fxMs:1600,next: "r3_bad_song1" },
    { id: "r3_bad_song1", name: "みや", text: "この音は…一体…", portrait:{ who:"みや", face:"confuse", size:"500px" },next: "r3_bad_song2_5" },
    { id: "r3_bad_song2_5", name: "あなた", text: "地面が揺れてる…?", next: "r3_bad_song2" },
    { id: "r3_bad_song2", name: " ", text: "ふさがっていない穴から部屋の中に強風が送りこまれる。", next: "r3_bad_song3" },
    { id: "r3_bad_song3", name: " ", text: "強風はそのまま、土を巻き上げ、あなたをも巻き込む", next: "r3_bad_song4" },
    { id: "r3_bad_song4", name: "あなた", text: "これは…砂埃…?", next: "r3_bad_song5" },
    { id: "r3_bad_song5", name: "みや", text: "そ、そうか、床が土だから…",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r3_bad_song6" },
    { id: "r3_bad_song6", name: "あなた", text: "ま、まずい…!!!",portrait:{ who:"みや", face:"fear", size:"500px" }, next: "r3_bad_song7" },
    { id: "r3_bad_song7", name: " ", text: "......", set: { bg: "#000" },next: "r3_bad_song8" },
    { id: "r3_bad_song8", name: "みや", text: "ゴホッ…みや…大丈夫…?", set: { bg: "sannnoma.png" },next: "r3_bad_song9" },
    { id: "r3_bad_song9", name: "みや", text: "うぅ…口の中に砂が…", portrait:{ who:"みや", face:"fear", size:"500px" },next: "r3_bad_song10" },
    { id: "r3_bad_song10", name: "みや", text: "それに、全身に土埃が直撃して…若干痛いです…",portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "r3_bad_song11" },
    { id: "r3_bad_song11", name: "あなた", text: "自分も…目が痛い…", next: "r3_bad_song12" },
    { id: "r3_bad_song12", name: "あなた", text: "(今のは…ハズレ…ってことだよな?)", next: "r3_bad_song13" },
    { id: "r3_bad_song13", name: "あなた", text: "(どうやったら、先に進めるんだ…?)", next: "r3_hub" },
    

    // === 尺八(演奏) ===
    { id: "r3_play_shakuhachi", name: " ", text: "ぶぉーん",  se: "take",next: "r3_play_shakuhachi2" },
    { id: "r3_play_shakuhachi2", name: " ", text: "部屋中に大きな音が響き渡る", next: "r3_play_shakuhachi3" },
    { id: "r3_play_shakuhachi3", name: "あなた", text: "これは…尺八の音…", next: "r3_play_shakuhachi4" },
    { id: "r3_play_shakuhachi4", name: "あなた", text: "壁の穴を全部塞いで、真ん中のボタンを押してみたけど…", next: "r3_play_shakuhachi5" },
    { id: "r3_play_shakuhachi5", name: "あなた", text: "これで合ってたのか…?", next: "r3_play_shakuhachi6" },
    { id: "r3_play_shakuhachi6", name: "あなた", text: "痛っ!!…", next: "r3_play_shakuhachi7" },
    { id: "r3_play_shakuhachi7", name: "あなた", text: "…なんか上から何か落ちてきた…", next: "r3_play_shakuhachi8" },
    { id: "r3_play_shakuhachi8", name: "あなた", text: "これは…カードキー?",overlay: { sprite: "./card_key.png", withText: true }, next: "r3_play_shakuhachi9" },
    { id: "r3_play_shakuhachi9", name: "あなた", text: "一体どこから…シャンデリアにでも引っかかってたのか…?", overlay: { sprite: "./card_key.png", withText: true },next: "r3_play_shakuhachi10" },
    { id: "r3_play_shakuhachi10", name: " ", text: "情報:『カードキー』を手に入れた。",se: "infomation",  set: { flags: ["r3_card_key"], info: ["r3_card_QR"] }, next: "r3_hub" },
    
  
    // === ショーケースを開ける  ===
    { id: "r3_open_showcase", name: "あなた", text: "みや…ちょっといい?", next: "r3_open_showcase2" },
    { id: "r3_open_showcase2", name: "みや", text: "はい、どうしましたか?",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r3_open_showcase3" },
    { id: "r3_open_showcase3", name: "あなた", text: "ちょっとこんなの、見つけたんだけど…", next: "r3_open_showcase4" },
    { id: "r3_open_showcase4", name: "あなた", text: "謎を解いたら、カードキーを見つけて…", next: "r3_open_showcase5" },
    { id: "r3_open_showcase5", name: "あなた", text: "もしかしたら、ショーケースのなんじゃないかなーと", next: "r3_open_showcase6" },
    { id: "r3_open_showcase6", name: "みや", text: "あ———!!!それです———!!!!!", portrait:{ who:"みや", face:"smile", size:"500px" },next: "r3_open_showcase7" },
    { id: "r3_open_showcase7", name: "あなた", text: "おぉ…び、びっくりした…",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r3_open_showcase8" },
    { id: "r3_open_showcase8", name: "みや", text: "あ…突然大きい声を出してすみません…", portrait:{ who:"みや", face:"fear", size:"500px" },next: "r3_open_showcase9" },
    { id: "r3_open_showcase9", name: "みや", text: "でも、これで開くと思います!",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r3_open_showcase10" },
    { id: "r3_open_showcase10", name: "あなた", text: "そっか…よかった。",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r3_open_showcase11" },
    { id: "r3_open_showcase11", name: "あなた", text: "ちなみに、どこにかざすの…?",portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r3_open_showcase12" },
    { id: "r3_open_showcase12", name: "みや", text: "恐らく、ここかと…",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r3_open_showcase13" },
    { id: "r3_open_showcase13", name: "あなた", text: "え、ショーケースの下…!?", next: "r3_open_showcase14" },
    { id: "r3_open_showcase14", name: "みや", text: "はい、ここにQRコードを読み取る機械が置かれてありまして…",portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r3_open_showcase15" },
    { id: "r3_open_showcase15", name: "あなた", text: "よ、よく見つけたね…", next: "r3_open_showcase16" },
    { id: "r3_open_showcase16", name: "あなた", text: "(下に潜り込んで、カードキーをかざしてる…)", next: "r3_open_showcase17" },
    { id: "r3_open_showcase17", name: " ", text: "", se:"unlocked",next: "r3_open_showcase18" },
    { id: "r3_open_showcase18", name: "みや", text: "あ!開いたみたいです!!",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r3_open_showcase19" },
    { id: "r3_open_showcase19", name: "あなた", text: "確に空きました!!みたいな音はしたけど…扉はどこに?", portrait:{ who:"みや", face:"normal", size:"500px" },next: "r3_open_showcase20" },
    { id: "r3_open_showcase20", name: "みや", text: "扉は上にあります!!", portrait:{ who:"みや", face:"smile", size:"500px" },next: "r3_open_showcase21" },
    { id: "r3_open_showcase21", name: "あなた", text: "う、上なんだ…", portrait:{ who:"みや", face:"smile", size:"500px" },next: "r3_open_showcase22" },
    { id: "r3_open_showcase22", name: "みや", text: "早速取り出してみますか?",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r3_open_showcase23" },
    { id: "r3_open_showcase23", name: "あなた", text: "うーん…取り出したいけど…結構高いよ?", portrait:{ who:"みや", face:"normal", size:"500px" },next: "r3_open_showcase24" },
    { id: "r3_open_showcase24", name: "あなた", text: "多分よじ登らないと取り出せない気が…",portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r3_open_showcase25" },
    { id: "r3_open_showcase25", name: "みや", text: "大丈夫です!先ほど、三味線の部屋から登れる台を持ってきたので、取り出せると思います!",portrait:{ who:"みや", face:"smile", size:"500px" },  next: "r3_open_showcase26" },
    { id: "r3_open_showcase26", name: "あなた", text: "(よ、用意周到だ…!!)",portrait:{ who:"みや", face:"smile", size:"500px" },  next: "r3_open_showcase27" },
    { id: "r3_open_showcase27", name: "あなた", text: "そ、そっか!じゃあ、取り出してみよう‼", next: "r3_open_showcase28" },
    { id: "r3_open_showcase28", name: "あなた", text: "(台に乗って、ショーケースの上蓋を取って…)", next: "r3_open_showcase29" },
    { id: "r3_open_showcase29", name: "みや", text: "あれ…?", next: "r3_open_showcase30" },
    { id: "r3_open_showcase30", name: "あなた", text: "尺八がない…?", next: "r3_open_showcase31" },
    { id: "r3_open_showcase31", name: "あなた", text: "なんで!?横から見ると確にあるはずだけど…", next: "r3_open_showcase32" },
    { id: "r3_open_showcase32", name: "みや", text: "…目の錯覚かなんかを利用して、ショーケースの中に尺八があるかのように見せているのでしょうか?",portrait:{ who:"みや", face:"confuse", size:"500px" },  next: "r3_open_showcase33" },
    { id: "r3_open_showcase33", name: "みや", text: "でも、一体どういう仕組みで…",portrait:{ who:"みや", face:"fear", size:"500px" },  next: "r3_open_showcase34" },
    { id: "r3_open_showcase34", name: "あなた", text: "さっぱり分からないけど、とにかく騙されたってこと…?",portrait:{ who:"みや", face:"fear", size:"500px" },  next: "r3_open_showcase35" },
    { id: "r3_open_showcase35", name: "みや", text: "そういうことになりますね…",portrait:{ who:"みや", face:"confuse", size:"500px" },  next: "r3_open_showcase36" },
    { id: "r3_open_showcase36", name: "あなた", text: "うぁ…まじか…",portrait:{ who:"みや", face:"confuse", size:"500px" },  next: "r3_open_showcase37" },
    { id: "r3_open_showcase37", name: "みや", text: "あれ…?でも中に何か入ってるみたいですよ。", portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r3_open_showcase38" },
    { id: "r3_open_showcase38", name: "あなた", text: "ほんと!?どれどれ…", next: "r3_open_showcase39" },
    { id: "r3_open_showcase39", name: "あなた", text: "これは…瓶と盃…?", next: "r3_open_showcase40" },
    { id: "r3_open_showcase40", name: "みや", text: "今回は青色の液体なんですね…",overlay: { sprite: "./BULE.png", withText: true }, next: "r3_open_showcase41" },
    { id: "r3_open_showcase41", name: "あなた", text: "青色の液体って、水とかイメージするけど、真っ青ってなると…おいしそうと思えないな…", overlay: { sprite: "./BULE.png", withText: true },next: "r3_open_showcase42" },
    { id: "r3_open_showcase42", name: "みや", text: "それに、盃は初めて見ましたね…",overlay: { sprite: "./sakazuki.png", withText: true }, next: "r3_open_showcase43" },
    { id: "r3_open_showcase43", name: "みや", text: "どこかで使うのでしょうか…?",overlay: { sprite: "./sakazuki.png", withText: true }, next: "r3_open_showcase44" },
    { id: "r3_open_showcase44", name: "あなた", text: "一応、それぞれの部屋から液体瓶は集め終わったね…", next: "r3_open_showcase45" },
    { id: "r3_open_showcase45", name: "みや", text: "そうですね…",portrait:{ who:"みや", face:"normal", size:"500px" },  next: "r3_open_showcase46" },
    { id: "r3_open_showcase46", name: "みや", text: "ある程度、この部屋を探索し終わったら、白い部屋に戻ってみますか?", portrait:{ who:"みや", face:"kind", size:"500px" }, next: "r3_open_showcase47" },
    { id: "r3_open_showcase47", name: "みや", text: "なにか変わっている所があるかもしれません。",portrait:{ who:"みや", face:"normal", size:"500px" },  next: "r3_open_showcase48" },
    { id: "r3_open_showcase48", name: "あなた", text: "そうだな…一度戻ってみるのもありなのかもしれない。", portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r3_open_showcase49" },
    { id: "r3_open_showcase49", name: " ", text: "情報:『液体の入った瓶(青)』『盃』を手に入れた!", se: "infomation", set: { flags: ["BLUE","r3_sakazuki"], info: ["drink_blue","r3_sakazuki"] }, next: "r3_hub" },

    { id: "r3_open_showcase_again", name: "みや", text: "ショーケースから液体瓶と盃を手に入れた。", next: "r3_open_showcase_again2" },
    { id: "r3_open_showcase_again2", name: "みや", text: "(そういえば、この液体瓶も音がなるのか…?)", next: "r3_open_showcase_again3" },
    { id: "r3_open_showcase_again3", name: "みや", text: "ぶうぉーん",se:"take", next: "r3_open_showcase_again4" },
    { id: "r3_open_showcase_again4", name: "みや", text: "これは…尺八の音…か?", next: "r3_open_showcase_again5" },
    { id: "r3_open_showcase_again5", name: "みや", text: "一体どういう仕組みで鳴っているんだ…?", next: "r3_hub" },


    // ===== みやとの会話 =====
    {
      id: "r3_talk1",
      name: "みや",
      text: "どうしましたか?",
      choices: [
        { label: "ヒントが欲しい", next: "r3_encourage" },
        { label: "みやと雑談", next: "r3_talk_chat1" },
        { label: "白い部屋に戻る", nextIfFlags: [
        { flags: ["BLUE"], next: "r3_to_final" },
        { flags: [], next: "r3_shiro" }], next: "r3_shiro" },
        { label: "探索に戻る", next: "r3_hub" },
      ],
    },

    //参の間⇒白い部屋
    { id: "r3_shiro", name: "あなた", text: "白い部屋に戻った。",set: { bg: "./Three_Doors.png" },  se:"door_open",next: "intro_doors" },
    
    //白い部屋⇒参の間
    { id: "r3_come_back", name: "あなた", text: "尺八の部屋に戻った。", set: { bg: "./sannnoma.png" }, se:"door_open", next: "r3_hub" },

    //参の間⇒最終章へ
    { id: "r3_to_final", name: "あなた", text: "白い部屋に戻った。",set: { bg: "shiroima.png" }, se:"door_open",  nextIfFlags: [
        { flags: ["fin_started"],   next: "fin_hub" },
        { flags: [], next: "fin_from_r3" }], next: "fin_from_r3" },

    // ヒント
    { id: "r3_encourage", name: "あなた", text: "探索に行き詰まっちゃって…なにかアイデアない?", next: "r3_encourage2" },
    { id: "r3_encourage2", name: "みや", text: "そうですね…",portrait:{ who:"みや", face:"confuse", size:"500px" },  nextIfFlags: [
        { flags: ["r3_nazo_2"], next: "r3_bushu" },
        { flags: [], next: "r3_encourage3" }], next: "r3_encourage3" },
    { id: "r3_encourage3", name: "みや", text: "まだ探索しきれていない箇所がありそうです。",portrait:{ who:"みや", face:"kind", size:"500px" },  next: "r3_encourage4" },
    { id: "r3_encourage4", name: "みや", text: "そこを確認すると、何か情報が得られるかもしれません。",portrait:{ who:"みや", face:"normal", size:"500px" },  next: "r3_encourage5" },
    { id: "r3_encourage5", name: "あなた", text: "ありがとう!もう少し探してみる!", next: "r3_hub" },

    { id: "r3_bushu", name: "みや", text: "漢字からカタカナを連想する…ですか。",portrait:{ who:"みや", face:"normal", size:"500px" },  next: "r3_bushu2" },
    { id: "r3_bushu2", name: "みや", text: "あくまで一案なんですけど、一つカタカナを足した時、〇の漢字だと成立するけど、×だと成立しない…みたいな?",portrait:{ who:"みや", face:"kind", size:"500px" },  next: "r3_bushu3" },
    { id: "r3_bushu3", name: "みや", text: "例えば「本」に「イ」を足したら「体」になるというような感じです!…今回、本はないですけど…", portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r3_bushu4" },
    { id: "r3_bushu4", name: "みや", text: "もしこの部屋の情報でカタカナが出てきたら、その文字が怪しいかもしれませんね",portrait:{ who:"みや", face:"smile", size:"500px" },  next: "r3_bushu5" },
    { id: "r3_bushu5", name: "みや", text: "なるほど…ありがとう!",portrait:{ who:"みや", face:"smile", size:"500px" },  next: "r3_hub" },
   

    // みやとの雑談(テーマ:独り言)
    { id: "r3_talk_chat1", name: "あなた", text: "うーん…ここじゃないのか…",portrait:{ who:"みや", face:"confuse", size:"500px" },  next: "r3_talk_chat2" },
    { id: "r3_talk_chat2", name: "みや", text: "鍵穴はどこにもないし、ガラスも頑丈でたたいても壊れない…銃で撃っても壊れないのかな…", portrait: { who: "みや", face: "normal", size: "500px" }, next: "r3_talk_chat3" },
    { id: "r3_talk_chat3", name: "みや", text: "ま、まさか…下とか…ふふ、この下に入り込むとか…工事現場の人みたいで楽しそう…", portrait: { who: "みや", face: "kind", size: "500px" }, next: "r3_talk_chat4" },
    { id: "r3_talk_chat4", name: "あなた", text: "(みやは独り言を言いながら、ショーケースの周りを徘徊している。)", portrait: { who: "みや", face: "kind", size: "500px" }, next: "r3_talk_chat5" },
    { id: "r3_talk_chat5", name: "みや", text: "うーん、これは…随分と近未来な予感。",portrait:{ who:"みや", face:"normal", size:"500px" },  next: "r3_talk_chat6" },
    { id: "r3_talk_chat6", name: "あなた", text: "み、みや…", portrait:{ who:"みや", face:"normal", size:"500px" }, next: "r3_talk_chat7" },
    { id: "r3_talk_chat7", name: "みや", text: "…!!", portrait: { who: "みや", face: "fear", size: "500px" }, next: "r3_talk_chat8" },
    { id: "r3_talk_chat8", name: "みや", text: "ご、ごめん…一人の世界に入っていたら…", portrait: { who: "みや", face: "fear", size: "500px" }, next: "r3_talk_chat9" },
    { id: "r3_talk_chat9", name: "みや", text: "いえいえ!!全然大丈夫です…!!", portrait: { who: "みや", face: "confuse", size: "500px" }, next: "r3_talk_chat10" },
    { id: "r3_talk_chat10", name: "みや", text: "お恥ずかしい所をお見せしました…", portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r3_talk_chat11" },
    { id: "r3_talk_chat11", name: "あなた", text: "いや…自分も独り言言っちゃうタイプだから…気持ち分かるよ。", portrait:{ who:"みや", face:"smile", size:"500px" }, next: "r3_talk_chat12" },
    { id: "r3_talk_chat12", name: "みや", text: "うーん、自分では心の中で話してるつもりなんですけど、いつの間にか口が動いてるんですよね…", portrait: { who: "みや", face: "normal", size: "500px" }, next: "r3_talk_chat13" },
    { id: "r3_talk_chat13", name: "みや", text: "恐らくもう癖がついてしまっているのでしょうが…", portrait: { who: "みや", face: "confuse", size: "500px" }, next: "r3_talk_chat14" },
    { id: "r3_talk_chat14", name: "みや", text: "うぅ…せめて外では直したい…", portrait: { who: "みや", face: "fear", size: "500px" }, next: "r3_talk_chat15" },
    { id: "r3_talk_chat15", name: "あなた", text: "…今気づいたけど、一人称”私”になってるね。",portrait:{ who:"みや", face:"fear", size:"500px" },  next: "r3_talk_chat16" },
    { id: "r3_talk_chat16", name: "みや", text: "...?もしかして、一人称違ったんですか…?",portrait:{ who:"みや", face:"normal", size:"500px" },  next: "r3_talk_chat17" },
    { id: "r3_talk_chat17", name: "あなた", text: "うん…確か一人称”みや”だったはず…", portrait: { who: "みや", face: "normal", size: "500px" }, next: "r3_talk_chat18" },
    { id: "r3_talk_chat18", name: "みや", text: "え!そうなんですか!!", portrait: { who: "みや", face: "fear", size: "500px" }, next: "r3_talk_chat19" },
    { id: "r3_talk_chat19", name: "あなた", text: "記憶が戻ったら、一人称も戻るのかな…", portrait: { who: "みや", face: "fear", size: "500px" }, next: "r3_talk_chat20" },
    { id: "r3_talk_chat20", name: "みや", text: "うーん…そこは戻らなくていいかもです…", portrait:{ who:"みや", face:"confuse", size:"500px" }, next: "r3_talk_chat21" },
    { id: "r3_talk_chat21", name: "あなた", text: "(”みや”になってたら、一発で自分の知るみやだって分かるから、こっち的にはありがたいんだよな…)", next: "r3_talk_chat22" },
    { id: "r3_talk_chat22", name: "あなた", text: "(絶対言わないけど。)", next: "r3_hub" },
  
  ]
};