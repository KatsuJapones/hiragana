
// ひらがなのデータ表
const hiragana = [
    { char: "あ", answers: ["a"] },
    { char: "い", answers: ["i"] },
    { char: "う", answers: ["u"] },
    { char: "え", answers: ["e"] },
    { char: "お", answers: ["o"] },
    { char: "か", answers: ["ka"] },
    { char: "き", answers: ["ki"] },
    { char: "く", answers: ["ku"] },
    { char: "け", answers: ["ke"] },
    { char: "こ", answers: ["ko"] },
    { char: "さ", answers: ["sa"] },
    { char: "し", answers: ["si", "shi"] },
    { char: "す", answers: ["su"] },
    { char: "せ", answers: ["se"] },
    { char: "そ", answers: ["so"] },
    { char: "た", answers: ["ta"] },
    { char: "ち", answers: ["ti", "chi"] },
    { char: "つ", answers: ["tu", "tsu"] },
    { char: "て", answers: ["te"] },
    { char: "と", answers: ["to"] },
    { char: "な", answers: ["na"] },
    { char: "に", answers: ["ni"] },
    { char: "ぬ", answers: ["nu"] },
    { char: "ね", answers: ["ne"] },
    { char: "の", answers: ["no"] },
    { char: "は", answers: ["ha"] },
    { char: "ひ", answers: ["hi"] },
    { char: "ふ", answers: ["hu", "fu"] },
    { char: "へ", answers: ["he"] },
    { char: "ほ", answers: ["ho"] },
    { char: "ま", answers: ["ma"] },
    { char: "み", answers: ["mi"] },
    { char: "む", answers: ["mu"] },
    { char: "め", answers: ["me"] },
    { char: "も", answers: ["mo"] },
    { char: "や", answers: ["ya"] },
    { char: "ゆ", answers: ["yu"] },
    { char: "よ", answers: ["yo"] },
    { char: "ら", answers: ["ra"] },
    { char: "り", answers: ["ri"] },
    { char: "る", answers: ["ru"] },
    { char: "れ", answers: ["re"] },
    { char: "ろ", answers: ["ro"] },
    { char: "わ", answers: ["wa"] },
    { char: "を", answers: ["wo", "o"] },
    { char: "ん", answers: ["n", "nn"] },
    { char: "が", answers: ["ga"] },
    { char: "ぎ", answers: ["gi"] },
    { char: "ぐ", answers: ["gu"] },
    { char: "げ", answers: ["ge"] },
    { char: "ご", answers: ["go"] },
    { char: "ざ", answers: ["za"] },
    { char: "じ", answers: ["zi", "ji"] },
    { char: "ず", answers: ["zu"] },
    { char: "ぜ", answers: ["ze"] },
    { char: "ぞ", answers: ["zo"] },
    { char: "だ", answers: ["da"] },
    { char: "で", answers: ["de"] },
    { char: "ど", answers: ["do"] },
    { char: "ば", answers: ["ba"] },
    { char: "び", answers: ["bi"] },
    { char: "ぶ", answers: ["bu"] },
    { char: "べ", answers: ["be"] },
    { char: "ぼ", answers: ["bo"] },
    { char: "ぱ", answers: ["pa"] },
    { char: "ぴ", answers: ["pi"] },
    { char: "ぷ", answers: ["pu"] },
    { char: "ぺ", answers: ["pe"] },
    { char: "ぽ", answers: ["po"] },

];

// ランダムなひらがなを生成
let randomIndex = Math.floor(Math.random() * hiragana.length);
let randomHiragana = hiragana[randomIndex].char;

// ランダムなひらがなを表示
let question = document.getElementById("question");
question.textContent = randomHiragana;

// もう出した問題の管理リスト
let usedChars = [];
usedChars.push(randomIndex);

// 間違えた文字のリスト
let equivocadosList = [];
let equivocados = document.getElementById("equivocado");

// 今のストリークの生成
let currentStreakDisplay = document.getElementById("current-streak-js");
let currentStreak = 0;

// 最高ストリークの生成
let maxStreakDisplay = document.getElementById("max-streak-js");
let maxStreak = 0;

// やった数
let vecesDisplay = document.getElementById("veces");
let veces = 0;

// ボタンの挙動
let checkButton = document.getElementById("checkButton");
let result = document.getElementById("result");
let input = document.getElementById("answer");
let mistake = document.getElementById("mistake-hiragana")
let respuestaCorrecta = document.getElementById("respuesta-correcta");
let tuRespuesta = document.getElementById("tu-respuesta");

checkButton.addEventListener("click", function () {

    // ここに「回答を押したときの処理」を書く

    // 空欄の時は入力するように言う
    if (input.value === "") {
        result.textContent = "¡Escribe algo!";
        result.className = "escribe";
        return;
    }

    // 回答が正解と一緒だった場合
    if (hiragana[randomIndex].answers.includes(input.value.trim().toLowerCase())) {
        result.textContent = "¡Correcto!";
        result.className = "correcto";
        currentStreak++;
        mistake.textContent = "";
        tuRespuesta.textContent = "";
        respuestaCorrecta.textContent = "";
        if (currentStreak > maxStreak) {
            maxStreak = currentStreak;
        }
    }

    // 回答が間違っていた場合
    else {
        result.textContent = "Incorrecto...";
        mistake.textContent = hiragana[randomIndex].char;
        tuRespuesta.textContent = "Tu respuesta: " + input.value;
        respuestaCorrecta.textContent = "Respuesta correcta: " + hiragana[randomIndex].answers[0];
        result.className = "incorrecto";
        currentStreak = 0;
        equivocadosList.push(randomHiragana);
        equivocados.textContent = "Respuestas incorrectas: " + equivocadosList.join(", ");
    }

    // ストリークの表示
    currentStreakDisplay.textContent = currentStreak;
    maxStreakDisplay.textContent = maxStreak;

    // 全部使ったらリセット
    if (usedChars.length === hiragana.length) {
        usedChars = [];
        equivocadosList = [];

        // やった回数表示
        veces++;
        if (veces === 1) {
            vecesDisplay.textContent = "Hiciste  " + veces + "  vez";
        }
        if (veces >= 2) {
            vecesDisplay.textContent = "Hiciste  " + veces + "  veces";
        }
    }

    // ランダムなひらがなを生成
    randomIndex = Math.floor(Math.random() * hiragana.length);

    // 既に使われた奴なら引き直す
    while (usedChars.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * hiragana.length);
    }
    usedChars.push(randomIndex);

    randomHiragana = hiragana[randomIndex].char;

    // ランダムなひらがなを表示
    question.textContent = randomHiragana;

    // 入力欄をリセットする
    input.value = "";
});

// エンターで入力される仕組み
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkButton.click();
    }
});
