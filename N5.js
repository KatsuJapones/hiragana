// N5のデータ表
const wordsN5 = [
    // 人・家族
    { word: ["私"], reading: ["watashi", "わたし"], meaning: ["yo", "mí"] },
    { word: ["僕"], reading: ["boku", "ぼく"], meaning: ["yo"] },
    { word: ["あなた"], reading: ["anata", "あなた"], meaning: ["tú", "usted"] },
    { word: ["人"], reading: ["hito", "ひと"], meaning: ["persona"] },
    { word: ["子ども"], reading: ["kodomo", "こども"], meaning: ["niño", "niña"] },
    { word: ["男の人"], reading: ["otokonohito", "おとこのひと"], meaning: ["hombre"] },
    { word: ["女の人"], reading: ["onnanohito", "おんなのひと"], meaning: ["mujer"] },
    { word: ["友達"], reading: ["tomodachi", "ともだち"], meaning: ["amigo", "amiga"] },
    { word: ["先生"], reading: ["sensei", "せんせい"], meaning: ["profesor", "profesora"] },
    { word: ["学生"], reading: ["gakusei", "がくせい"], meaning: ["estudiante"] },
    { word: ["会社員"], reading: ["kaishain", "かいしゃいん"], meaning: ["empleado de empresa"] },
    { word: ["医者"], reading: ["isha", "いしゃ"], meaning: ["médico", "médica"] },
    { word: ["家族"], reading: ["kazoku", "かぞく"], meaning: ["familia"] },
    { word: ["父"], reading: ["chichi", "ちち"], meaning: ["mi padre"] },
    { word: ["母"], reading: ["haha", "はは"], meaning: ["mi madre"] },
    { word: ["お父さん"], reading: ["otousan", "おとうさん"], meaning: ["padre", "papá"] },
    { word: ["お母さん"], reading: ["okaasan", "おかあさん"], meaning: ["madre", "mamá"] },
    { word: ["兄"], reading: ["ani", "あに"], meaning: ["mi hermano mayor"] },
    { word: ["姉"], reading: ["ane", "あね"], meaning: ["mi hermana mayor"] },
    { word: ["弟"], reading: ["otouto", "おとうと"], meaning: ["hermano menor"] },
    { word: ["妹"], reading: ["imouto", "いもうと"], meaning: ["hermana menor"] },
    { word: ["夫"], reading: ["otto", "おっと"], meaning: ["marido", "esposo"] },
    { word: ["妻"], reading: ["tsuma", "つま"], meaning: ["esposa"] },

    // 時間・日付
    { word: ["朝"], reading: ["asa", "あさ"], meaning: ["la mañana"] },
    { word: ["昼"], reading: ["hiru", "ひる"], meaning: ["mediodía", "el día"] },
    { word: ["夜"], reading: ["yoru", "よる"], meaning: ["la noche"] },
    { word: ["晩"], reading: ["ban", "ばん"], meaning: ["la noche"] },
    { word: ["今日"], reading: ["kyou", "きょう"], meaning: ["hoy"] },
    { word: ["明日"], reading: ["ashita", "あした"], meaning: ["mañana", "el día siguiente"] },
    { word: ["昨日"], reading: ["kinou", "きのう"], meaning: ["ayer"] },
    { word: ["今"], reading: ["ima", "いま"], meaning: ["ahora"] },
    { word: ["今朝"], reading: ["kesa", "けさ"], meaning: ["esta mañana"] },
    { word: ["今晩"], reading: ["konban", "こんばん"], meaning: ["esta noche"] },
    { word: ["毎日"], reading: ["mainichi", "まいにち"], meaning: ["todos los días"] },
    { word: ["毎朝"], reading: ["maiasa", "まいあさ"], meaning: ["todas las mañanas"] },
    { word: ["毎晩"], reading: ["maiban", "まいばん"], meaning: ["todas las noches"] },
    { word: ["時間"], reading: ["jikan", "じかん"], meaning: ["tiempo", "horas"] },
    { word: ["時"], reading: ["ji", "じ"], meaning: ["hora"] },
    { word: ["分"], reading: ["fun", "ぷん"], meaning: ["minuto"] },
    { word: ["半"], reading: ["han", "はん"], meaning: ["mitad"] },
    { word: ["午前"], reading: ["gozen", "ごぜん"], meaning: ["por la mañana", "antes del mediodía"] },
    { word: ["午後"], reading: ["gogo", "ごご"], meaning: ["por la tarde", "después del mediodía"] },
    { word: ["今週"], reading: ["konshuu", "こんしゅう"], meaning: ["esta semana"] },
    { word: ["先週"], reading: ["senshuu", "せんしゅう"], meaning: ["la semana pasada"] },
    { word: ["来週"], reading: ["raishuu", "らいしゅう"], meaning: ["la próxima semana"] },
    { word: ["今月"], reading: ["kongetsu", "こんげつ"], meaning: ["este mes"] },
    { word: ["来月"], reading: ["raigetsu", "らいげつ"], meaning: ["el próximo mes"] },
    { word: ["先月"], reading: ["sengetsu", "せんげつ"], meaning: ["el mes pasado"] },
    { word: ["今年"], reading: ["kotoshi", "ことし"], meaning: ["este año"] },
    { word: ["去年"], reading: ["kyonen", "きょねん"], meaning: ["el año pasado"] },
    { word: ["来年"], reading: ["rainen", "らいねん"], meaning: ["el próximo año"] },
    { word: ["週末"], reading: ["shuumatsu", "しゅうまつ"], meaning: ["fin de semana"] },

    // 曜日
    { word: ["月曜日"], reading: ["getsuyoubi", "げつようび"], meaning: ["lunes"] },
    { word: ["火曜日"], reading: ["kayoubi", "かようび"], meaning: ["martes"] },
    { word: ["水曜日"], reading: ["suiyoubi", "すいようび"], meaning: ["miércoles"] },
    { word: ["木曜日"], reading: ["mokuyoubi", "もくようび"], meaning: ["jueves"] },
    { word: ["金曜日"], reading: ["kinyoubi", "きんようび"], meaning: ["viernes"] },
    { word: ["土曜日"], reading: ["doyoubi", "どようび"], meaning: ["sábado"] },
    { word: ["日曜日"], reading: ["nichiyoubi", "にちようび"], meaning: ["domingo"] },

    // 場所・位置
    { word: ["家"], reading: ["ie", "いえ"], meaning: ["casa"] },
    { word: ["うち"], reading: ["uchi", "うち"], meaning: ["casa", "mi hogar"] },
    { word: ["部屋"], reading: ["heya", "へや"], meaning: ["habitación"] },
    { word: ["学校"], reading: ["gakkou", "がっこう"], meaning: ["escuela"] },
    { word: ["大学"], reading: ["daigaku", "だいがく"], meaning: ["universidad"] },
    { word: ["教室"], reading: ["kyoushitsu", "きょうしつ"], meaning: ["aula", "salón de clase"] },
    { word: ["図書館"], reading: ["toshokan", "としょかん"], meaning: ["biblioteca"] },
    { word: ["駅"], reading: ["eki", "えき"], meaning: ["estación"] },
    { word: ["病院"], reading: ["byouin", "びょういん"], meaning: ["hospital"] },
    { word: ["銀行"], reading: ["ginkou", "ぎんこう"], meaning: ["banco"] },
    { word: ["郵便局"], reading: ["yuubinkyoku", "ゆうびんきょく"], meaning: ["oficina de correos"] },
    { word: ["会社"], reading: ["kaisha", "かいしゃ"], meaning: ["empresa", "compañía"] },
    { word: ["店"], reading: ["mise", "みせ"], meaning: ["tienda"] },
    { word: ["公園"], reading: ["kouen", "こうえん"], meaning: ["parque"] },
    { word: ["スーパー"], reading: ["suupaa", "スーパー"], meaning: ["supermercado"] },
    { word: ["デパート"], reading: ["depaato", "デパート"], meaning: ["grandes almacenes"] },
    { word: ["レストラン"], reading: ["resutoran", "レストラン"], meaning: ["restaurante"] },
    { word: ["食堂"], reading: ["shokudou", "しょくどう"], meaning: ["comedor"] },
    { word: ["国"], reading: ["kuni", "くに"], meaning: ["país"] },
    { word: ["外国"], reading: ["gaikoku", "がいこく"], meaning: ["país extranjero"] },
    { word: ["町"], reading: ["machi", "まち"], meaning: ["pueblo", "ciudad"] },
    { word: ["道"], reading: ["michi", "みち"], meaning: ["camino", "calle"] },
    { word: ["地図"], reading: ["chizu", "ちず"], meaning: ["mapa"] },
    { word: ["山"], reading: ["yama", "やま"], meaning: ["montaña"] },
    { word: ["川"], reading: ["kawa", "かわ"], meaning: ["río"] },
    { word: ["海"], reading: ["umi", "うみ"], meaning: ["mar"] },
    { word: ["空"], reading: ["sora", "そら"], meaning: ["cielo"] },
    { word: ["上"], reading: ["ue", "うえ"], meaning: ["arriba", "parte superior"] },
    { word: ["下"], reading: ["shita", "した"], meaning: ["abajo", "parte inferior"] },
    { word: ["中"], reading: ["naka", "なか"], meaning: ["dentro", "interior"] },
    { word: ["外"], reading: ["soto", "そと"], meaning: ["fuera", "exterior"] },
    { word: ["右"], reading: ["migi", "みぎ"], meaning: ["derecha"] },
    { word: ["左"], reading: ["hidari", "ひだり"], meaning: ["izquierda"] },
    { word: ["前"], reading: ["mae", "まえ"], meaning: ["delante", "antes"] },
    { word: ["後ろ"], reading: ["ushiro", "うしろ"], meaning: ["detrás"] },
    { word: ["隣"], reading: ["tonari", "となり"], meaning: ["al lado", "vecino"] },
    { word: ["近く"], reading: ["chikaku", "ちかく"], meaning: ["cerca", "cercanías"] },

    // 日用品・乗り物
    { word: ["本"], reading: ["hon", "ほん"], meaning: ["libro"] },
    { word: ["新聞"], reading: ["shinbun", "しんぶん"], meaning: ["periódico"] },
    { word: ["雑誌"], reading: ["zasshi", "ざっし"], meaning: ["revista"] },
    { word: ["ノート"], reading: ["nooto", "ノート"], meaning: ["cuaderno"] },
    { word: ["紙"], reading: ["kami", "かみ"], meaning: ["papel"] },
    { word: ["鉛筆"], reading: ["enpitsu", "えんぴつ"], meaning: ["lápiz"] },
    { word: ["ペン"], reading: ["pen", "ペン"], meaning: ["bolígrafo"] },
    { word: ["辞書"], reading: ["jisho", "じしょ"], meaning: ["diccionario"] },
    { word: ["時計"], reading: ["tokei", "とけい"], meaning: ["reloj"] },
    { word: ["机"], reading: ["tsukue", "つくえ"], meaning: ["escritorio", "mesa de estudio"] },
    { word: ["椅子"], reading: ["isu", "いす"], meaning: ["silla"] },
    { word: ["鞄"], reading: ["kaban", "かばん"], meaning: ["bolso", "mochila"] },
    { word: ["傘"], reading: ["kasa", "かさ"], meaning: ["paraguas"] },
    { word: ["鍵"], reading: ["kagi", "かぎ"], meaning: ["llave"] },
    { word: ["財布"], reading: ["saifu", "さいふ"], meaning: ["cartera", "billetera"] },
    { word: ["電話"], reading: ["denwa", "でんわ"], meaning: ["teléfono"] },
    { word: ["写真"], reading: ["shashin", "しゃしん"], meaning: ["fotografía", "foto"] },
    { word: ["手紙"], reading: ["tegami", "てがみ"], meaning: ["carta"] },
    { word: ["切手"], reading: ["kitte", "きって"], meaning: ["sello postal"] },
    { word: ["車"], reading: ["kuruma", "くるま"], meaning: ["coche", "auto"] },
    { word: ["電車"], reading: ["densha", "でんしゃ"], meaning: ["tren"] },
    { word: ["地下鉄"], reading: ["chikatetsu", "ちかてつ"], meaning: ["metro"] },
    { word: ["バス"], reading: ["basu", "バス"], meaning: ["autobús"] },
    { word: ["自転車"], reading: ["jitensha", "じてんしゃ"], meaning: ["bicicleta"] },
    { word: ["飛行機"], reading: ["hikouki", "ひこうき"], meaning: ["avión"] },
    { word: ["切符"], reading: ["kippu", "きっぷ"], meaning: ["billete", "boleto"] },
    { word: ["服"], reading: ["fuku", "ふく"], meaning: ["ropa"] },
    { word: ["靴"], reading: ["kutsu", "くつ"], meaning: ["zapatos"] },
    { word: ["帽子"], reading: ["boushi", "ぼうし"], meaning: ["sombrero", "gorra"] },
    { word: ["眼鏡"], reading: ["megane", "めがね"], meaning: ["gafas", "anteojos"] },
    { word: ["窓"], reading: ["mado", "まど"], meaning: ["ventana"] },
    { word: ["ドア"], reading: ["doa", "ドア"], meaning: ["puerta"] },

    // 食べ物・飲み物
    { word: ["ご飯"], reading: ["gohan", "ごはん"], meaning: ["arroz cocido", "comida"] },
    { word: ["パン"], reading: ["pan", "パン"], meaning: ["pan"] },
    { word: ["肉"], reading: ["niku", "にく"], meaning: ["carne"] },
    { word: ["牛肉"], reading: ["gyuuniku", "ぎゅうにく"], meaning: ["carne de res"] },
    { word: ["豚肉"], reading: ["butaniku", "ぶたにく"], meaning: ["carne de cerdo"] },
    { word: ["魚"], reading: ["sakana", "さかな"], meaning: ["pescado", "pez"] },
    { word: ["野菜"], reading: ["yasai", "やさい"], meaning: ["verduras"] },
    { word: ["果物"], reading: ["kudamono", "くだもの"], meaning: ["fruta"] },
    { word: ["卵"], reading: ["tamago", "たまご"], meaning: ["huevo"] },
    { word: ["牛乳"], reading: ["gyuunyuu", "ぎゅうにゅう"], meaning: ["leche"] },
    { word: ["水"], reading: ["mizu", "みず"], meaning: ["agua"] },
    { word: ["お茶"], reading: ["ocha", "おちゃ"], meaning: ["té verde"] },
    { word: ["紅茶"], reading: ["koucha", "こうちゃ"], meaning: ["té negro"] },
    { word: ["コーヒー"], reading: ["koohii", "コーヒー"], meaning: ["café"] },
    { word: ["ジュース"], reading: ["juusu", "ジュース"], meaning: ["zumo", "jugo"] },
    { word: ["朝ご飯"], reading: ["asagohan", "あさごはん"], meaning: ["desayuno"] },
    { word: ["昼ご飯"], reading: ["hirugohan", "ひるごはん"], meaning: ["almuerzo"] },
    { word: ["晩ご飯"], reading: ["bangohan", "ばんごはん"], meaning: ["cena"] },
    { word: ["弁当"], reading: ["bentou", "べんとう"], meaning: ["comida en caja", "bento"] },

    // 動詞
    { word: ["行く"], reading: ["iku", "いく"], meaning: ["ir"] },
    { word: ["来る"], reading: ["kuru", "くる"], meaning: ["venir"] },
    { word: ["帰る"], reading: ["kaeru", "かえる"], meaning: ["volver", "regresar"] },
    { word: ["食べる"], reading: ["taberu", "たべる"], meaning: ["comer"] },
    { word: ["飲む"], reading: ["nomu", "のむ"], meaning: ["beber", "tomar"] },
    { word: ["見る"], reading: ["miru", "みる"], meaning: ["ver", "mirar"] },
    { word: ["聞く"], reading: ["kiku", "きく"], meaning: ["escuword", "preguntar"] },
    { word: ["読む"], reading: ["yomu", "よむ"], meaning: ["leer"] },
    { word: ["書く"], reading: ["kaku", "かく"], meaning: ["escribir"] },
    { word: ["話す"], reading: ["hanasu", "はなす"], meaning: ["hablar"] },
    { word: ["言う"], reading: ["iu", "いう"], meaning: ["decir"] },
    { word: ["買う"], reading: ["kau", "かう"], meaning: ["comprar"] },
    { word: ["売る"], reading: ["uru", "うる"], meaning: ["vender"] },
    { word: ["する"], reading: ["suru", "する"], meaning: ["hacer"] },
    { word: ["ある"], reading: ["aru", "ある"], meaning: ["haber", "existir (cosas)"] },
    { word: ["いる"], reading: ["iru", "いる"], meaning: ["haber", "estar (personas y animales)"] },
    { word: ["起きる"], reading: ["okiru", "おきる"], meaning: ["levantarse", "despertarse"] },
    { word: ["寝る"], reading: ["neru", "ねる"], meaning: ["dormir", "acostarse"] },
    { word: ["勉強する"], reading: ["benkyousuru", "べんきょうする"], meaning: ["estudiar"] },
    { word: ["働く"], reading: ["hataraku", "はたらく"], meaning: ["trabajar"] },
    { word: ["休む"], reading: ["yasumu", "やすむ"], meaning: ["descansar", "tomarse el día libre"] },
    { word: ["遊ぶ"], reading: ["asobu", "あそぶ"], meaning: ["jugar", "divertirse"] },
    { word: ["会う"], reading: ["au", "あう"], meaning: ["encontrarse con", "quedar con"] },
    { word: ["待つ"], reading: ["matsu", "まつ"], meaning: ["esperar"] },
    { word: ["使う"], reading: ["tsukau", "つかう"], meaning: ["usar", "utilizar"] },
    { word: ["作る"], reading: ["tsukuru", "つくる"], meaning: ["hacer", "crear"] },
    { word: ["持つ"], reading: ["motsu", "もつ"], meaning: ["tener", "llevar"] },
    { word: ["開ける"], reading: ["akeru", "あける"], meaning: ["abrir"] },
    { word: ["閉める"], reading: ["shimeru", "しめる"], meaning: ["cerrar"] },
    { word: ["入る"], reading: ["hairu", "はいる"], meaning: ["entrar"] },
    { word: ["出る"], reading: ["deru", "でる"], meaning: ["salir"] },
    { word: ["乗る"], reading: ["noru", "のる"], meaning: ["subir a un vehículo", "montar"] },
    { word: ["降りる"], reading: ["oriru", "おりる"], meaning: ["bajar de un vehículo"] },
    { word: ["歩く"], reading: ["aruku", "あるく"], meaning: ["caminar"] },
    { word: ["泳ぐ"], reading: ["oyogu", "およぐ"], meaning: ["nadar"] },
    { word: ["分かる"], reading: ["wakaru", "わかる"], meaning: ["entender", "comprender"] },
    { word: ["教える"], reading: ["oshieru", "おしえる"], meaning: ["enseñar", "decir"] },
    { word: ["習う"], reading: ["narau", "ならう"], meaning: ["aprender"] },
    { word: ["覚える"], reading: ["oboeru", "おぼえる"], meaning: ["memorizar", "recordar"] },
    { word: ["忘れる"], reading: ["wasureru", "わすれる"], meaning: ["olvidar"] },
    { word: ["住む"], reading: ["sumu", "すむ"], meaning: ["vivir", "residir"] },
    { word: ["洗う"], reading: ["arau", "あらう"], meaning: ["lavar"] },

    // い形容詞
    { word: ["大きい"], reading: ["ookii", "おおきい"], meaning: ["grande"] },
    { word: ["小さい"], reading: ["chiisai", "ちいさい"], meaning: ["pequeño", "pequeña"] },
    { word: ["新しい"], reading: ["atarashii", "あたらしい"], meaning: ["nuevo", "nueva"] },
    { word: ["古い"], reading: ["furui", "ふるい"], meaning: ["viejo", "antiguo"] },
    { word: ["高い"], reading: ["takai", "たかい"], meaning: ["alto", "caro"] },
    { word: ["安い"], reading: ["yasui", "やすい"], meaning: ["barato", "barata"] },
    { word: ["長い"], reading: ["nagai", "ながい"], meaning: ["largo", "larga"] },
    { word: ["短い"], reading: ["mijikai", "みじかい"], meaning: ["corto", "corta"] },
    { word: ["早い"], reading: ["hayai", "はやい"], meaning: ["temprano"] },
    { word: ["遅い"], reading: ["osoi", "おそい"], meaning: ["tarde", "lento"] },
    { word: ["暑い"], reading: ["atsui", "あつい"], meaning: ["caluroso", "calurosa"] },
    { word: ["寒い"], reading: ["samui", "さむい"], meaning: ["frío", "fría (clima)"] },
    { word: ["熱い"], reading: ["atsui", "あつい"], meaning: ["caliente (al tacto)"] },
    { word: ["冷たい"], reading: ["tsumetai", "つめたい"], meaning: ["frío", "fría (al tacto)"] },
    { word: ["忙しい"], reading: ["isogashii", "いそがしい"], meaning: ["ocupado", "ocupada"] },
    { word: ["楽しい"], reading: ["tanoshii", "たのしい"], meaning: ["divertido", "divertida"] },
    { word: ["面白い"], reading: ["omoshiroi", "おもしろい"], meaning: ["interesante", "divertido"] },
    { word: ["難しい"], reading: ["muzukashii", "むずかしい"], meaning: ["difícil"] },
    { word: ["近い"], reading: ["chikai", "ちかい"], meaning: ["cerca", "cercano"] },
    { word: ["遠い"], reading: ["tooi", "とおい"], meaning: ["lejos", "lejano"] },
    { word: ["おいしい"], reading: ["oishii", "おいしい"], meaning: ["delicioso", "deliciosa"] },

    // な形容詞
    { word: ["元気"], reading: ["genki", "げんき"], meaning: ["sano", "con energía"] },
    { word: ["好き"], reading: ["suki", "すき"], meaning: ["gustar", "favorito"] },
    { word: ["嫌い"], reading: ["kirai", "きらい"], meaning: ["no gustar", "desagradar"] },
    { word: ["上手"], reading: ["jouzu", "じょうず"], meaning: ["hábil", "bueno en algo"] },
    { word: ["下手"], reading: ["heta", "へた"], meaning: ["poco hábil", "malo en algo"] },
    { word: ["静か"], reading: ["shizuka", "しずか"], meaning: ["tranquilo", "tranquila", "silencioso"] },
    { word: ["きれい"], reading: ["kirei", "きれい"], meaning: ["bonito", "bonita", "limpio"] },
    { word: ["有名"], reading: ["yuumei", "ゆうめい"], meaning: ["famoso", "famosa"] },
    { word: ["便利"], reading: ["benri", "べんり"], meaning: ["práctico", "práctica", "conveniente"] },
    { word: ["大丈夫"], reading: ["daijoubu", "だいじょうぶ"], meaning: ["estar bien", "estar bien de salud"] },
    { word: ["簡単"], reading: ["kantan", "かんたん"], meaning: ["fácil", "sencillo"] },
    { word: ["大切"], reading: ["taisetsu", "たいせつ"], meaning: ["importante"] },

    // 副詞・疑問詞・その他の語彙
    { word: ["いつ"], reading: ["itsu", "いつ"], meaning: ["cuándo"] },
    { word: ["どこ"], reading: ["doko", "どこ"], meaning: ["dónde"] },
    { word: ["誰"], reading: ["dare", "だれ"], meaning: ["quién"] },
    { word: ["何"], reading: ["nani", "なに"], meaning: ["qué"] },
    { word: ["いくら"], reading: ["ikura", "いくら"], meaning: ["cuánto", "cuánto cuesta"] },
    { word: ["いくつ"], reading: ["ikutsu", "いくつ"], meaning: ["cuántos", "cuántos años"] },
    { word: ["これ"], reading: ["kore", "これ"], meaning: ["esto"] },
    { word: ["それ"], reading: ["sore", "それ"], meaning: ["eso"] },
    { word: ["あれ"], reading: ["are", "あれ"], meaning: ["aquello"] },
    { word: ["ここ"], reading: ["koko", "ここ"], meaning: ["aquí"] },
    { word: ["そこ"], reading: ["soko", "そこ"], meaning: ["ahí"] },
    { word: ["あそこ"], reading: ["asoko", "あそこ"], meaning: ["allí"] },
    { word: ["いつも"], reading: ["itsumo", "いつも"], meaning: ["siempre"] },
    { word: ["時々"], reading: ["tokidoki", "ときどき"], meaning: ["a veces"] },
    { word: ["たくさん"], reading: ["takusan", "たくさん"], meaning: ["mucho", "muchos"] },
    { word: ["少し"], reading: ["sukoshi", "すこし"], meaning: ["un poco"] },
    { word: ["とても"], reading: ["totemo", "とても"], meaning: ["muy"] },
    { word: ["ゆっくり"], reading: ["yukkuri", "ゆっくり"], meaning: ["despacio", "lentamente"] },
    { word: ["すぐ"], reading: ["sugu", "すぐ"], meaning: ["enseguida", "inmediatamente"] },
    { word: ["もう"], reading: ["mou", "もう"], meaning: ["ya"] },
    { word: ["まだ"], reading: ["mada", "まだ"], meaning: ["todavía"] },
    { word: ["一緒に"], reading: ["isshoni", "いっしょに"], meaning: ["juntos", "juntas"] },
    { word: ["本当に"], reading: ["hontouni", "ほんとうに"], meaning: ["realmente", "de verdad"] },
    { word: ["天気"], reading: ["tenki", "てんき"], meaning: ["tiempo", "clima"] },
    { word: ["雨"], reading: ["ame", "あめ"], meaning: ["lluvia"] },
    { word: ["雪"], reading: ["yuki", "ゆき"], meaning: ["nieve"] },
    { word: ["風"], reading: ["kaze", "かぜ"], meaning: ["viento"] },
    { word: ["花"], reading: ["hana", "はな"], meaning: ["flor"] },
    { word: ["犬"], reading: ["inu", "いぬ"], meaning: ["perro"] },
    { word: ["猫"], reading: ["neko", "ねこ"], meaning: ["gato"] },
    { word: ["赤"], reading: ["aka", "あか"], meaning: ["rojo"] },
    { word: ["青"], reading: ["ao", "あお"], meaning: ["azul"] },
    { word: ["白"], reading: ["shiro", "しろ"], meaning: ["blanco"] },
    { word: ["黒"], reading: ["kuro", "くろ"], meaning: ["negro"] }
];

// モード
let currentMode = 0;

// モード表示
let modeCode = ["よみ", "いみ"];
const modeDisplay = document.getElementById("mode-display");

// ランダムな問題を生成
let randomIndex = Math.floor(Math.random() * wordsN5.length);
let randomQuestion = wordsN5[randomIndex].word[currentMode];

// ランダムなかなを表示
const question = document.getElementById("question");
question.textContent = randomQuestion;

// かな変更スイッチを押したときに何をするのか
function modeSwitch(mode) {
    currentMode = mode;
    if (usedWords[mode].length >= wordsN5.length) {
        usedWords[mode] = [];
        sessionStorage.setItem("usedWords", JSON.stringify(usedWords));

        correctasIniciales[mode] = [];
        sessionStorage.setItem("correctasIniciales", JSON.stringify(correctasIniciales));

        equivocadosList[mode] = [];
        sessionStorage.setItem("equivocadosList", JSON.stringify(equivocadosList));
    }
    modeDisplay.textContent = modeCode[mode];
    resultMuyBien.style.display = "none";
    resultError.style.display = "none";
    mistake.textContent = "";
    tuRespuesta.style.display = "none";
    respuestaCorrecta.style.display = "none";
    currentStreakDisplay.textContent = currentStreak[currentMode];
    maxStreakDisplay.textContent = maxStreak[currentMode];
    equivocados.textContent = "Respuestas incorrectas (" + equivocadosList[currentMode].length + ")";
    setEquivocadosList();
    input.value = "";

    // まだ間違えてない場合はしまう
    if (equivocadosList[currentMode].length === 0) {
        letterButtonContainer.style.transition = "none";
        letterButtonContainer.style.maxHeight = "0px";
        equivocadoArrow.style.transform = "rotate(0deg)";
    }

    // モードを変えたときに変えた先の高さに合わせる
    if (equivocadoArrow.style.transform === "rotate(90deg)") {
        letterButtonContainer.style.transition = "none";
        letterButtonContainer.style.maxHeight = letterButtonContainer.scrollHeight + "px";
    }

    // usedWordsに基づいて出してないやつを表示する
    do {
        randomIndex = Math.floor(Math.random() * wordsN5.length);
    } while (usedWords[mode].includes(randomIndex))
    randomQuestion = wordsN5[randomIndex].word[currentMode];
    question.textContent = randomQuestion;

    // モーダル用
    modalModeDisplay.textContent = modeCode[mode];
    modalEquivocado = equivocadosList[currentMode][0];
    modalQuestion.textContent = modalEquivocado;
    modalRespuesta = wordsN5.find(item => item.word[currentMode] === modalEquivocado);
    modalResultMuyBien.style.display = "none";
    modalResultError.style.display = "none";
    modalMistake.textContent = "";
    modalTuRespuesta.style.display = "none";
    modalRespuestaCorrecta.style.display = "none";
}

// もう出した問題の管理リスト
let usedWords = JSON.parse(sessionStorage.getItem("usedWords")) || [[], []];

// 初回に正解した文字を記録する
let correctasIniciales = JSON.parse(sessionStorage.getItem("correctasIniciales")) || [[], []];

// 間違えた文字のリストとその辺の表示あれこれ
let equivocadosList = JSON.parse(sessionStorage.getItem("equivocadosList")) || [[], []];
const equivocadoButton = document.getElementById("equivocado-button");
const equivocados = document.getElementById("equivocado");
const equivocadoArrow = document.getElementById("equivocado-arrow");
const equivocadoListDisplay = document.getElementById("equivocado-list");
let letterButtonContainer = document.querySelector(".letter-button-container");

// リザルトモーダル後にボタンを押さずに更新した時のための防止策
if (usedWords[currentMode].length === wordsN5.length) {
    usedWords[currentMode] = [];
    sessionStorage.setItem("usedWords", JSON.stringify(usedWords));
    correctasIniciales[currentMode] = [];
    sessionStorage.setItem("correctasIniciales", JSON.stringify(correctasIniciales));
    equivocadosList[currentMode] = [];
    sessionStorage.setItem("equivocadosList", JSON.stringify(equivocadosList));
}

// 初期表示で未出題のかなを選ぶ
do {
    randomIndex = Math.floor(Math.random() * wordsN5.length);
} while (usedWords[currentMode].includes(randomIndex));

randomQuestion = wordsN5[randomIndex].word[currentMode];
question.textContent = randomQuestion;

// 間違いリストスイッチの機能保全
letterButtonContainer.style.maxHeight = "0px";

setEquivocadosList();

equivocados.textContent = "Respuestas incorrectas (" + equivocadosList[currentMode].length + ")";

// 今のストリークの生成
const currentStreakDisplay = document.getElementById("current-streak-js");
let currentStreak = JSON.parse(sessionStorage.getItem("currentStreak")) || [0, 0];

currentStreakDisplay.textContent = currentStreak[currentMode];

// 最高ストリークの生成
const maxStreakDisplay = document.getElementById("max-streak-js");
let maxStreak = JSON.parse(localStorage.getItem("maxStreak")) || [0, 0];

maxStreakDisplay.textContent = maxStreak[currentMode];

// ボタンの挙動
const checkButton = document.getElementById("checkButton");
const resultCorrecto = document.getElementById("result-correcto");
const resultIncorrecto = document.getElementById("result-incorrecto");
const input = document.getElementById("answer");
const resultMuyBien = document.getElementById("result-muybien");
const muybienMensaje = ["¡Muy bien!", "¡Excelente!", "¡Perfecto!", "¡Genial!", "¡Buen trabajo!", "¡Correcto!"];
let mensaje;
let mensajeUsado = [];
const resultError = document.getElementById("result-error");
const mistake = document.getElementById("mistake-kana");
const respuestaCorrecta = document.getElementById("respuesta-correcta");
const tuRespuesta = document.getElementById("tu-respuesta");
const yourAnswer = document.getElementById("yourAnswer");
const correctAnswer = document.getElementById("correctAnswer");

// リザルトモーダルの準備
const resultModal = document.getElementById("result-modal");
const losCorrectos = document.getElementById("los-correctos");
const losIncorrectos = document.getElementById("los-incorrectos");
const cuantoCorrecto = document.getElementById("cuanto-correcto");
const lengthContent = document.getElementById("length");
const porcentaje = document.getElementById("porcentaje");
const resultMensaje = document.getElementById("result-mensaje");
const resultRepasar = document.getElementById("result-repasar");
const resultSalir = document.getElementById("result-salir");
const resultEquivocadoContainer = document.getElementById("result-equivocado-container");
const resultEquivocadoButton = document.getElementById("result-equivocado-button");
const resultEquivocados = document.getElementById("result-equivocado");
const resultEquivocadoArrow = document.getElementById("result-equivocado-arrow");
const resultEquivocadoListDisplay = document.getElementById("result-equivocado-list");
let resultLetterButtonContainer = document.querySelector(".result-letter-button-container");
let isDoingResult = false;

// 円グラフのためのやつ
const progressCircle = document.getElementById("progress-circle");
const backgroundCircle = document.getElementById("background-circle");
const radius = progressCircle.getAttribute("r");
const circumference = 2 * Math.PI * radius;

// 回答を送信した時の処理
checkButton.addEventListener("click", function () {

    // 空欄の時は送信しない
    if (input.value.trim() === "") {
        input.value = "";
        return;
    }

    // 回答が正解と一緒だった場合
    if (wordsN5[randomIndex].reading.includes(input.value.trim().toLowerCase())) {
        clearResult();
        if (!usedWords[currentMode].includes(randomIndex)) {
            usedWords[currentMode].push(randomIndex);
            sessionStorage.setItem("usedWords", JSON.stringify(usedWords));
        }
        if (!correctasIniciales[currentMode].includes(randomQuestion)) {
            correctasIniciales[currentMode].push(randomQuestion);
            sessionStorage.setItem("correctasIniciales", JSON.stringify(correctasIniciales));
        }

        // 正解メッセージの表示（使った正解メッセージの管理も）とアニメーション
        resultMuyBien.style.display = "flex";
        resultMuyBien.classList.remove("correcto-mensaje");
        resultMuyBien.offsetWidth;
        resultMuyBien.classList.add("correcto-mensaje");
        if (mensajeUsado.length >= muybienMensaje.length) { mensajeUsado = []; }
        do { mensaje = muybienMensaje[Math.floor(Math.random() * muybienMensaje.length)]; } while (mensajeUsado.includes(mensaje));
        resultCorrecto.textContent = mensaje;
        mensajeUsado.push(mensaje);

        // ストリーク関連の操作
        currentStreak[currentMode]++;
        currentStreakDisplay.classList.remove("es-incorrecto");
        maxStreakDisplay.classList.remove("es-incorrecto");
        currentStreakDisplay.classList.remove("es-correcto");
        currentStreakDisplay.offsetWidth;
        currentStreakDisplay.classList.add("es-correcto");
        sessionStorage.setItem("currentStreak", JSON.stringify(currentStreak));
        if (currentStreak[currentMode] > maxStreak[currentMode]) {
            maxStreak[currentMode] = currentStreak[currentMode];
            localStorage.setItem("maxStreak", JSON.stringify(maxStreak));
            maxStreakDisplay.classList.remove("es-correcto");
            maxStreakDisplay.offsetWidth;
            maxStreakDisplay.classList.add("es-correcto");
        }
    }

    // 回答が間違っていた場合
    else {
        if (!usedWords[currentMode].includes(randomIndex)) {
            usedWords[currentMode].push(randomIndex);
            sessionStorage.setItem("usedWords", JSON.stringify(usedWords));
        }

        // メッセージの管理
        resultMuyBien.style.display = "none";
        resultError.style.display = "flex";
        resultError.classList.remove("incorrecto-mensaje");
        resultError.offsetWidth;
        resultError.classList.add("incorrecto-mensaje");
        resultIncorrecto.textContent = "Incorrecto...";
        resultCorrecto.textContent = "";
        mistake.textContent = wordsN5[randomIndex].word[currentMode];
        tuRespuesta.style.display = "block";
        yourAnswer.textContent = input.value;
        respuestaCorrecta.style.display = "block";
        correctAnswer.textContent = wordsN5[randomIndex].reading[0];

        // 更新していたストリークのアニメーション
        currentStreakDisplay.classList.remove("es-correcto");
        maxStreakDisplay.classList.remove("es-correcto");
        if (currentStreak[currentMode] != 0) {
            currentStreakDisplay.classList.remove("es-incorrecto");
            currentStreakDisplay.offsetWidth;
            currentStreakDisplay.classList.add("es-incorrecto");
        }
        if (currentStreak[currentMode] === maxStreak[currentMode]) {
            maxStreakDisplay.classList.remove("es-incorrecto");
            maxStreakDisplay.offsetWidth;
            maxStreakDisplay.classList.add("es-incorrecto");
        }

        // ストリークをリセット
        currentStreak[currentMode] = 0;
        sessionStorage.setItem("currentStreak", JSON.stringify(currentStreak));

        // 間違えた問題への追加
        equivocadosList[currentMode].push(randomQuestion);
        sessionStorage.setItem("equivocadosList", JSON.stringify(equivocadosList));
        equivocados.textContent = "Respuestas incorrectas (" + equivocadosList[currentMode].length + ")";
        setEquivocadosList();

        // equivocadosListの表示関連（リストの高さの調節）
        if (equivocadoArrow.style.transform == "rotate(90deg)" && equivocadosList[currentMode].length === 1) {
            letterButtonContainer.style.maxHeight = letterButtonContainer.scrollHeight + "px";
            letterButtonContainer.style.transition = "max-height 0.2s ease";
        }
        if (equivocadoArrow.style.transform == "rotate(90deg)") {
            letterButtonContainer.style.maxHeight = letterButtonContainer.scrollHeight + "px";
        }
    }

    // ストリークの表示
    currentStreakDisplay.textContent = currentStreak[currentMode];
    maxStreakDisplay.textContent = maxStreak[currentMode];

    // 全部使ったらリセット
    if (usedWords[currentMode].length === wordsN5.length) {
        let percentage = (correctasIniciales[currentMode].length / wordsN5.length * 100).toFixed(1);
        resultEquivocados.textContent = "Respuestas incorrectas (" + equivocadosList[currentMode].length + ")";
        // リザルトモーダルを開く
        setTimeout(() => {
            resultModal.showModal();
            resultModal.classList.add("modal-open");
        }, 10);

        losCorrectos.textContent = correctasIniciales[currentMode].length;
        losIncorrectos.textContent = wordsN5.length - correctasIniciales[currentMode].length;
        cuantoCorrecto.textContent = correctasIniciales[currentMode].length;
        lengthContent.textContent = " / " + wordsN5.length;
        porcentaje.textContent = percentage + "%";
        isDoingResult = true;
        progressCircle.style.strokeDasharray = circumference;
        progressCircle.style.strokeDashoffset = circumference * (1 - percentage / 100);
        if (equivocadosList[currentMode].length > 0) {

            // 間違いリストスイッチの機能保全
            resultLetterButtonContainer.style.maxHeight = "0px";

            // 間違えた問題をspanにして追加する
            resultEquivocadoListDisplay.innerHTML = "";

            // 消えたボタンの再表示
            resultRepasar.style.display = "flex";
            resultEquivocadoContainer.style.display = "flex";

            equivocadosList[currentMode].forEach(function (equivocado) {
                let character = document.createElement("span");
                character.className = "equivocado-character";
                character.textContent = equivocado;
                resultEquivocadoListDisplay.appendChild(character);
            });
        }
        else {
            resultEquivocadoContainer.style.display = "none";
            resultRepasar.style.display = "none";
        }

        // 結果に応じた変更
        if (percentage == 100.0) {
            resultMensaje.textContent = "¡Perfecto! ¡Dominado por completo!";
            porcentaje.style.color = "#f5c84b";
            progressCircle.style.stroke = "#f5c84b";
        }
        else if (percentage >= 90.0) {
            resultMensaje.textContent = "¡Excelente! ¡Ya casi lo dominas!";
            porcentaje.style.color = "#0a9158";
            progressCircle.style.stroke = "#0a9158";
            backgroundCircle.style.stroke = "#cdece1";
        }
        else if (percentage >= 70.0) {
            resultMensaje.textContent = "¡Muy bien! ¡Buen ritmo!";
            porcentaje.style.color = "var(--textColorLight)";
            progressCircle.style.stroke = "var(--textColorLight)";
            backgroundCircle.style.stroke = "#d7ebfd";
        }
        else if (percentage >= 50.0) {
            resultMensaje.textContent = "¡Un poco más de esfuerzo y lo lograrás!";
            porcentaje.style.color = "#dfa126";
            progressCircle.style.stroke = "#dfa126";
            backgroundCircle.style.stroke = "#fae9ca";
        }
        else if (percentage >= 30.0) {
            resultMensaje.textContent = "¡Vas bien! ¡Sigue practicando!";
            porcentaje.style.color = "#fc8c37";
            progressCircle.style.stroke = "#fc8c37";
            backgroundCircle.style.stroke = "#fcd7bf";
        }
        else {
            resultMensaje.textContent = "¡Ánimo! ¡Poco a poco vas aprendiendo!";
            porcentaje.style.color = "#ec6573";
            progressCircle.style.stroke = "#ec6573";
            backgroundCircle.style.stroke = "#f6d3da";
        }
    }

    // フリーズ防止
    else {

        // メッセージの管理
        if (mensajeUsado.length === muybienMensaje.length) {
            mensajeUsado = [];
        }

        // ランダムなかなを生成
        randomIndex = Math.floor(Math.random() * wordsN5.length);

        // 既に使われた奴なら引き直す
        while (usedWords[currentMode].includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * wordsN5.length);
        }

        randomQuestion = wordsN5[randomIndex].word[currentMode];

        // ランダムなかなを表示
        question.textContent = randomQuestion;

        // 入力欄をリセットする
        input.value = "";
    }
});

// エンターで入力される仕組み
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkButton.click();
    }
});

// 復習モーダルを開く
const repasar = document.getElementById("repasar");
const repasarModal = document.getElementById("repasar-modal")
repasar.addEventListener("click", function () {
    openRepasarModal();
});

// 復習モーダルを閉じる
const salirButton = document.getElementById("salir-modal");
const enserioModal = document.getElementById("enserio-sales");
const confirmMensaje = document.getElementById("confirm-mensaje");
const dialogContainer = document.getElementById("dialog-container");
const salgoButton = document.getElementById("confirm-yes");
const noSalgoButton = document.getElementById("confirm-no");
salirButton.addEventListener("click", function () {

    // まだ何も操作してなかったらそのまま閉じる
    if (count === 1 && !isDoingResult) {
        repasarModal.classList.remove("modal-open");
        setTimeout(function () {
            repasarModal.close();
            input.focus();
        }, 100);
        clearResult();
        clearModalResult();
        count = 1;
        equivocadosList = JSON.parse(sessionStorage.getItem("equivocadosList"));
        cantidad = equivocadosList[currentMode].length;
        repasoCounter.textContent = count + "/" + cantidad;
    }

    // 操作してたらメッセージを出す
    else {
        // 閉じていいのかモーダルを開く
        enserioModal.showModal();

        // メッセージの切り替え
        if (!isDoingResult) {
            confirmMensaje.textContent = "Si abandonas ahora, las preguntas que ya respondiste bien seguirán en la lista de incorrectas."
        } else {
            confirmMensaje.textContent = "¡Las respuestas incorrectas se reiniciarán!"
        }

        // 枠の外クリックでモーダル閉じる操作
        enserioModal.addEventListener('click', (event) => {
            if (event.target === dialogContainer) {
                return;
            }
            else if (event.target === enserioModal) {
                enserioModal.close();
                modalInput.focus();
            }
        });
    }
});

// かなモード表示
const modalModeDisplay = document.getElementById("modal-mode-display");
modalModeDisplay.textContent = modeCode[currentMode];

// 間違えたかなを取得
let modalEquivocado = equivocadosList[currentMode][0];
let modalRespuesta = wordsN5.find(item => item.word[currentMode] === modalEquivocado);

// 間違えたかなを表示
const modalQuestion = document.getElementById("modal-question");
modalQuestion.textContent = modalEquivocado;

// カウンターを取得し設定
const repasoCounter = document.getElementById("repaso-counter");
let count = 1;
let cantidad = equivocadosList[currentMode].length;

// ボタンの挙動
const modalCheckButton = document.getElementById("modal-checkButton");
const modalResultCorrecto = document.getElementById("modal-result-correcto");
const modalResultIncorrecto = document.getElementById("modal-result-incorrecto");
const modalInput = document.getElementById("modal-answer");
const modalResultMuyBien = document.getElementById("modal-result-muybien");
const modalResultError = document.getElementById("modal-result-error");
const modalMistake = document.getElementById("modal-mistake-kana");
const modalRespuestaCorrecta = document.getElementById("modal-respuesta-correcta");
const modalTuRespuesta = document.getElementById("modal-tu-respuesta");
const modalYourAnswer = document.getElementById("modal-yourAnswer");
const modalCorrectAnswer = document.getElementById("modal-correctAnswer");
let modalEquivocadosList = [];

// 続ける？モーダルの用意
const continuasModal = document.getElementById("continuas");
const continuasYes = document.getElementById("continuas-confirm-yes");
const continuasNo = document.getElementById("continuas-confirm-no");

modalCheckButton.addEventListener("click", function () {

    // ここに「回答を押したときの処理」を書く

    // 空欄の時は送信しない
    if (modalInput.value.trim() === "") {
        modalInput.value = "";
        return;
    }

    // 回答が正解と一緒だった場合
    if (modalRespuesta.reading.includes(modalInput.value.trim().toLowerCase())) {
        clearModalResult();
        modalResultMuyBien.style.display = "flex";
        modalResultMuyBien.classList.remove("correcto-mensaje");
        modalResultMuyBien.offsetWidth;
        modalResultMuyBien.classList.add("correcto-mensaje");
        if (mensajeUsado.length >= muybienMensaje.length) { mensajeUsado = []; }
        do { mensaje = muybienMensaje[Math.floor(Math.random() * muybienMensaje.length)]; } while (mensajeUsado.includes(mensaje));
        modalResultCorrecto.textContent = mensaje;
        mensajeUsado.push(mensaje);
        equivocadosList[currentMode].shift();
    }

    // 回答が間違っていた場合
    else {
        modalResultMuyBien.style.display = "none";
        modalResultError.style.display = "flex";
        modalResultError.classList.remove("incorrecto-mensaje");
        modalResultError.offsetWidth;
        modalResultError.classList.add("incorrecto-mensaje");
        modalResultIncorrecto.textContent = "Incorrecto...";
        modalResultCorrecto.textContent = "";
        modalMistake.textContent = modalEquivocado;
        modalTuRespuesta.style.display = "block";
        modalYourAnswer.textContent = modalInput.value;
        modalRespuestaCorrecta.style.display = "block";
        modalCorrectAnswer.textContent = modalRespuesta.reading[0];
        equivocadosList[currentMode].shift();
        modalEquivocadosList.push(modalEquivocado);
    }

    // メッセージの管理
    if (mensajeUsado.length === muybienMensaje.length) {
        mensajeUsado = [];
    }

    // 入力欄をリセットする
    modalInput.value = "";

    if (equivocadosList[currentMode].length > 0) {
        // 次の問題の文字と答えをセットし直す
        modalEquivocado = equivocadosList[currentMode][0];
        modalRespuesta = wordsN5.find(item => item.word[currentMode] === modalEquivocado);

        // 画面の表示を更新
        modalQuestion.textContent = modalEquivocado;
        count++;
        repasoCounter.textContent = count + "/" + cantidad;
    }

    // 不正解をequivocadosListにコピー
    else if (equivocadosList[currentMode].length === 0 && modalEquivocadosList.length > 0) {

        // これがないとすぐにモーダルが閉じちゃう
        setTimeout(() => {
            continuasModal.showModal();
            continuasModal.classList.add("modal-open");
        }, 10);
    }

    // 復習が終了したら
    else {
        repasarModal.classList.remove("modal-open");
        setTimeout(function () {
            repasarModal.close();
        }, 100);

        // リストをクリアして、間違えた問題欄を閉じる
        equivocadosList[currentMode] = [];
        sessionStorage.setItem("equivocadosList", JSON.stringify(equivocadosList));
        equivocados.textContent = "Respuestas incorrectas (" + equivocadosList[currentMode].length + ")";
        letterButtonContainer.style.maxHeight = "0px";
        letterButtonContainer.style.transition = "max-height 0.2s ease";
        equivocadoArrow.style.transform = "rotate(0deg)";
        equivocadoListDisplay.innerHTML = "";

        // いろいろなもののクリア
        clearResult();
        clearModalResult();
        count = 1;
        isDoingResult = false;

        // 新しい問題をだす
        do {
            randomIndex = Math.floor(Math.random() * wordsN5.length);
        } while (usedWords[currentMode].includes(randomIndex))
        randomQuestion = wordsN5[randomIndex].word[currentMode];
        question.textContent = randomQuestion;

        // 入力欄にフォーカス
        input.focus();
        input.value = "";
    }
});

// エンターで入力される仕組み
modalInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        modalCheckButton.click();
    }
});

// 結果をクリアする
function clearResult() {
    resultMuyBien.style.display = "none";
    resultError.style.display = "none";
    resultCorrecto.textContent = "";
    resultIncorrecto.textContent = "";
    mistake.textContent = "";
    tuRespuesta.style.display = "none";
    yourAnswer.textContent = "";
    respuestaCorrecta.style.display = "none";
    correctAnswer.textContent = "";
}

// モーダルの結果をクリアする
function clearModalResult() {
    modalResultMuyBien.style.display = "none";
    modalResultError.style.display = "none";
    modalResultCorrecto.textContent = "";
    modalResultIncorrecto.textContent = "";
    modalMistake.textContent = "";
    modalTuRespuesta.style.display = "none";
    modalYourAnswer.textContent = "";
    modalRespuestaCorrecta.style.display = "none";
    modalCorrectAnswer.textContent = "";
}

// 間違えた問題をspanにして追加する
function setEquivocadosList() {
    equivocadoListDisplay.innerHTML = "";

    equivocadosList[currentMode].forEach(function (equivocado) {
        let character = document.createElement("span");
        character.className = "equivocado-character";
        character.textContent = equivocado;
        equivocadoListDisplay.appendChild(character);
    });
}

// 復習モーダルを開く
function openRepasarModal() {
    if (equivocadosList[currentMode].length === 0) {
        return;
    }
    modalEquivocadosList = [];
    count = 1;

    repasarModal.showModal();
    setTimeout(function () {
        repasarModal.classList.add("modal-open");
    }, 10);

    modalInput.focus();

    // 間違えたかなを取得
    modalEquivocado = equivocadosList[currentMode][0];
    modalRespuesta = wordsN5.find(item => item.word[currentMode] === modalEquivocado);

    // 間違えたかなを表示
    const modalQuestion = document.getElementById("modal-question");
    modalQuestion.textContent = modalEquivocado;

    // カウンターを取得し設定
    const repasoCounter = document.getElementById("repaso-counter");
    equivocadosList = JSON.parse(sessionStorage.getItem("equivocadosList"));
    cantidad = equivocadosList[currentMode].length;
    repasoCounter.textContent = count + "/" + cantidad;
}

// equivocadosListを開くためのボタン
equivocadoButton.addEventListener("click", function () {

    // 一つ以上間違えてるときは文字と復習ボタンを表示
    if (equivocadosList[currentMode].length > 0) {
        if (letterButtonContainer.style.maxHeight === "0px") {
            letterButtonContainer.style.maxHeight = letterButtonContainer.scrollHeight + "px";
            letterButtonContainer.style.transition = "max-height 0.2s ease";
            equivocadoArrow.style.transform = "rotate(90deg)";
        } else {
            letterButtonContainer.style.maxHeight = "0px";
            letterButtonContainer.style.transition = "max-height 0.2s ease";
            equivocadoArrow.style.transform = "rotate(0deg)";
        }
    }

    // そうじゃないときは何も表示しない（0の時に復習ボタンを表示させないため）
    else {
        if (equivocadoArrow.style.transform === "rotate(0deg)" || equivocadoArrow.style.transform === "") {
            equivocadoArrow.style.transform = "rotate(90deg)";
        } else {
            equivocadoArrow.style.transform = "rotate(0deg)";
        }
    }
});

// result-repasarボタンを押したときの挙動
resultRepasar.addEventListener("click", function () {
    resultModal.classList.remove("modal-open");
    setTimeout(function () {
        resultModal.close();
    }, 100);
    openRepasarModal();
    usedWords[currentMode] = [];
    sessionStorage.setItem("usedWords", JSON.stringify(usedWords));
    correctasIniciales[currentMode] = [];
    sessionStorage.setItem("correctasIniciales", JSON.stringify(correctasIniciales));
});

// result-salirボタンを押したときの挙動
resultSalir.addEventListener("click", function () {
    resultModal.classList.remove("modal-open");
    setTimeout(function () {
        resultModal.close();
        input.focus();
    }, 100);
    clearResult();
    clearModalResult();
    input.value = "";
    letterButtonContainer.style.maxHeight = "0px";
    letterButtonContainer.style.transition = "max-height 0.2s ease";
    equivocadoArrow.style.transform = "rotate(0deg)";
    usedWords[currentMode] = [];
    correctasIniciales[currentMode] = [];
    equivocadosList[currentMode] = [];
    sessionStorage.setItem("usedWords", JSON.stringify(usedWords));
    sessionStorage.setItem("correctasIniciales", JSON.stringify(correctasIniciales));
    sessionStorage.setItem("equivocadosList", JSON.stringify(equivocadosList));
    setEquivocadosList();
    equivocados.textContent = "Respuestas incorrectas (" + equivocadosList[currentMode].length + ")";
    randomIndex = Math.floor(Math.random() * wordsN5.length);
    randomQuestion = wordsN5[randomIndex].word[currentMode];
    question.textContent = randomQuestion;
    isDoingResult = false;
    input.focus();
});

// resultEquivocadosListを開くためのボタン
resultEquivocadoButton.addEventListener("click", function () {
    if (resultLetterButtonContainer.style.maxHeight === "0px") {
        resultLetterButtonContainer.style.maxHeight = resultLetterButtonContainer.scrollHeight + "px";
        resultLetterButtonContainer.style.transition = "max-height 0.2s ease";
        resultEquivocadoArrow.style.transform = "rotate(90deg)";
    } else {
        resultLetterButtonContainer.style.maxHeight = "0px";
        resultLetterButtonContainer.style.transition = "max-height 0.2s ease";
        resultEquivocadoArrow.style.transform = "rotate(0deg)";
    }
});

// Salir押したらどっちのモーダルも閉じる
salgoButton.addEventListener("click", function () {
    repasarModal.classList.remove("modal-open");
    setTimeout(function () {
        repasarModal.close();
        input.focus();
    }, 100);
    enserioModal.close();
    clearResult();
    clearModalResult();
    count = 1;
    if (!isDoingResult) {
        equivocadosList = JSON.parse(sessionStorage.getItem("equivocadosList"));
    } else {
        randomIndex = Math.floor(Math.random() * wordsN5.length);
        while (usedWords[currentMode].includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * wordsN5.length);
        }
        randomQuestion = wordsN5[randomIndex].word[currentMode];
        question.textContent = randomQuestion;
        input.value = "";
        usedWords[currentMode] = [];
        sessionStorage.setItem("usedWords", JSON.stringify(usedWords));
        correctasIniciales[currentMode] = [];
        sessionStorage.setItem("correctasIniciales", JSON.stringify(correctasIniciales));
        equivocadosList[currentMode] = [];
        sessionStorage.setItem("equivocadosList", JSON.stringify(equivocadosList));
        equivocados.textContent = "Respuestas incorrectas (" + equivocadosList[currentMode].length + ")";
        setEquivocadosList();
        letterButtonContainer.style.maxHeight = "0px";
        letterButtonContainer.style.transition = "max-height 0.2s ease";
        equivocadoArrow.style.transform = "rotate(0deg)";
        isDoingResult = false;
        input.focus();
    }
    cantidad = equivocadosList[currentMode].length;
    repasoCounter.textContent = count + "/" + cantidad;
})

// Continuar押したら閉じていいのかモーダルだけ閉じる
noSalgoButton.addEventListener("click", function () {
    enserioModal.close();
    modalInput.focus();
})

// Yesボタンを押したときの挙動
continuasYes.addEventListener("click", function () {
    continuasModal.classList.remove("modal-open");
    setTimeout(function () {
        continuasModal.close();
    }, 100);
    modalInput.focus();
    equivocadosList[currentMode] = modalEquivocadosList;
    modalEquivocado = equivocadosList[currentMode][0];
    modalRespuesta = wordsN5.find(item => item.word[currentMode] === modalEquivocado);
    modalQuestion.textContent = modalEquivocado;
    count = 1;
    cantidad = equivocadosList[currentMode].length;
    repasoCounter.textContent = count + "/" + cantidad;
    sessionStorage.setItem("equivocadosList", JSON.stringify(equivocadosList));
    clearResult();
    clearModalResult();
    setEquivocadosList();
    equivocados.textContent = "Respuestas incorrectas (" + cantidad + ")";
    modalEquivocadosList = [];
});

// Noボタンを押したときの挙動
continuasNo.addEventListener("click", function () {
    repasarModal.classList.remove("modal-open");
    continuasModal.classList.remove("modal-open");
    setTimeout(function () {
        repasarModal.close();
        continuasModal.close();
        input.focus();
    }, 100);
    clearResult();
    clearModalResult();
    equivocadosList[currentMode] = modalEquivocadosList;
    count = 1;
    cantidad = equivocadosList[currentMode].length;
    repasoCounter.textContent = count + "/" + cantidad;
    sessionStorage.setItem("equivocadosList", JSON.stringify(equivocadosList));
    setEquivocadosList();
    equivocados.textContent = "Respuestas incorrectas (" + cantidad + ")";
    modalEquivocadosList = [];
    isDoingResult = false;
    letterButtonContainer.style.maxHeight = "0px";
    letterButtonContainer.style.transition = "max-height 0.2s ease";
    equivocadoArrow.style.transform = "rotate(0deg)";
});