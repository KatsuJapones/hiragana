
// かなのデータ表
const kana = [
    { char: ["あ", "ア"], answers: ["a"] },
    { char: ["い", "イ"], answers: ["i"] },
    { char: ["う", "ウ"], answers: ["u"] },
    { char: ["え", "エ"], answers: ["e"] },
    { char: ["お", "オ"], answers: ["o"] },
    { char: ["か", "カ"], answers: ["ka"] },
    { char: ["き", "キ"], answers: ["ki"] },
    { char: ["く", "ク"], answers: ["ku"] },
    { char: ["け", "ケ"], answers: ["ke"] },
    { char: ["こ", "コ"], answers: ["ko"] },
    { char: ["さ", "サ"], answers: ["sa"] },
    { char: ["し", "シ"], answers: ["si", "shi"] },
    { char: ["す", "ス"], answers: ["su"] },
    { char: ["せ", "セ"], answers: ["se"] },
    { char: ["そ", "ソ"], answers: ["so"] },
    { char: ["た", "タ"], answers: ["ta"] },
    { char: ["ち", "チ"], answers: ["ti", "chi"] },
    { char: ["つ", "ツ"], answers: ["tu", "tsu"] },
    { char: ["て", "テ"], answers: ["te"] },
    { char: ["と", "ト"], answers: ["to"] },
    { char: ["な", "ナ"], answers: ["na"] },
    { char: ["に", "ニ"], answers: ["ni"] },
    { char: ["ぬ", "ヌ"], answers: ["nu"] },
    { char: ["ね", "ネ"], answers: ["ne"] },
    { char: ["の", "ノ"], answers: ["no"] },
    { char: ["は", "ハ"], answers: ["ha"] },
    { char: ["ひ", "ヒ"], answers: ["hi"] },
    { char: ["ふ", "フ"], answers: ["hu", "fu"] },
    { char: ["へ", "ヘ"], answers: ["he"] },
    { char: ["ほ", "ホ"], answers: ["ho"] },
    { char: ["ま", "マ"], answers: ["ma"] },
    { char: ["み", "ミ"], answers: ["mi"] },
    { char: ["む", "ム"], answers: ["mu"] },
    { char: ["め", "メ"], answers: ["me"] },
    { char: ["も", "モ"], answers: ["mo"] },
    { char: ["や", "ヤ"], answers: ["ya"] },
    { char: ["ゆ", "ユ"], answers: ["yu"] },
    { char: ["よ", "ヨ"], answers: ["yo"] },
    { char: ["ら", "ラ"], answers: ["ra"] },
    { char: ["り", "リ"], answers: ["ri"] },
    { char: ["る", "ル"], answers: ["ru"] },
    { char: ["れ", "レ"], answers: ["re"] },
    { char: ["ろ", "ロ"], answers: ["ro"] },
    { char: ["わ", "ワ"], answers: ["wa"] },
    { char: ["を", "ヲ"], answers: ["wo", "o"] },
    { char: ["ん", "ン"], answers: ["n", "nn"] },
    { char: ["が", "ガ"], answers: ["ga"] },
    { char: ["ぎ", "ギ"], answers: ["gi"] },
    { char: ["ぐ", "グ"], answers: ["gu"] },
    { char: ["げ", "ゲ"], answers: ["ge"] },
    { char: ["ご", "ゴ"], answers: ["go"] },
    { char: ["ざ", "ザ"], answers: ["za"] },
    { char: ["じ", "ジ"], answers: ["zi", "ji"] },
    { char: ["ず", "ズ"], answers: ["zu"] },
    { char: ["ぜ", "ゼ"], answers: ["ze"] },
    { char: ["ぞ", "ゾ"], answers: ["zo"] },
    { char: ["だ", "ダ"], answers: ["da"] },
    { char: ["で", "デ"], answers: ["de"] },
    { char: ["ど", "ド"], answers: ["do"] },
    { char: ["ば", "バ"], answers: ["ba"] },
    { char: ["び", "ビ"], answers: ["bi"] },
    { char: ["ぶ", "ブ"], answers: ["bu"] },
    { char: ["べ", "ベ"], answers: ["be"] },
    { char: ["ぼ", "ボ"], answers: ["bo"] },
    { char: ["ぱ", "パ"], answers: ["pa"] },
    { char: ["ぴ", "ピ"], answers: ["pi"] },
    { char: ["ぷ", "プ"], answers: ["pu"] },
    { char: ["ぺ", "ペ"], answers: ["pe"] },
    { char: ["ぽ", "ポ"], answers: ["po"] },

];

// かなモード
let currentMode = 0;

// かなモード表示
let modeCode = ["ひらがな", "カタカナ"];
let modeDisplay = document.getElementById("mode-display");

// ランダムなかなを生成
let randomIndex = Math.floor(Math.random() * kana.length);
let randomKana = kana[randomIndex].char[currentMode];

// ランダムなかなを表示
let question = document.getElementById("question");
question.textContent = randomKana;

// かな変更スイッチ
function kanaMode(mode) {
    currentMode = mode;
    modeDisplay.textContent = modeCode[mode];
    randomKana = kana[randomIndex].char[currentMode];
    question.textContent = randomKana;
    resultMuyBien.style.display = "none";
    resultError.style.display = "none";
    mistake.textContent = "";
    tuRespuesta.style.display = "none";
    respuestaCorrecta.style.display = "none";
    currentStreakDisplay.textContent = currentStreak[currentMode];
    maxStreakDisplay.textContent = maxStreak[currentMode];
}

// もう出した問題の管理リスト
let usedChars = [];
usedChars.push(randomIndex);

// 間違えた文字のリスト
let equivocadosList = [];
let equivocados = document.getElementById("equivocado");

// 今のストリークの生成
let currentStreakDisplay = document.getElementById("current-streak-js");
let currentStreak = JSON.parse(sessionStorage.getItem("currentStreak")) || [0, 0];

currentStreakDisplay.textContent = currentStreak[currentMode];

// 最高ストリークの生成
let maxStreakDisplay = document.getElementById("max-streak-js");
let maxStreak = JSON.parse(localStorage.getItem("maxStreak")) || [0, 0];

maxStreakDisplay.textContent = maxStreak[currentMode];

// やった数
let vecesDisplay = document.getElementById("veces");
let veces = 0;

// ボタンの挙動
let checkButton = document.getElementById("checkButton");
let result = document.getElementById("result");
let resultCorrecto = document.getElementById("result-correcto");
let resultIncorrecto = document.getElementById("result-incorrecto");
let input = document.getElementById("answer");
let resultMuyBien = document.getElementById("result-muybien");
let resultError = document.getElementById("result-error");
let mistake = document.getElementById("mistake-kana");
let respuestaCorrecta = document.getElementById("respuesta-correcta");
let tuRespuesta = document.getElementById("tu-respuesta");
let yourAnswer = document.getElementById("yourAnswer");
let correctAnswer = document.getElementById("correctAnswer");

checkButton.addEventListener("click", function () {

    // ここに「回答を押したときの処理」を書く

    // 空欄の時は入力するように言う
    if (input.value === "") {
        result.textContent = "¡Escribe algo!";
        result.className = "escribe";
        return;
    }

    // 回答が正解と一緒だった場合
    if (kana[randomIndex].answers.includes(input.value.trim().toLowerCase())) {
        resultMuyBien.style.display = "flex";
        resultError.style.display = "none";
        resultCorrecto.textContent = "¡Correcto!";
        resultIncorrecto.textContent = "";
        currentStreak[currentMode]++;
        sessionStorage.setItem("currentStreak", JSON.stringify(currentStreak));
        mistake.textContent = "";
        tuRespuesta.style.display = "none";
        yourAnswer.textContent = "";
        respuestaCorrecta.style.display = "none";
        correctAnswer.textContent = "";
        if (currentStreak[currentMode] > maxStreak[currentMode]) {
            maxStreak[currentMode] = currentStreak[currentMode];
            localStorage.setItem("maxStreak", JSON.stringify(maxStreak));
        }
    }

    // 回答が間違っていた場合
    else {
        resultMuyBien.style.display = "none";
        resultError.style.display = "flex";
        resultIncorrecto.textContent = "Incorrecto...";
        resultCorrecto.textContent = "";
        mistake.textContent = kana[randomIndex].char[currentMode];
        tuRespuesta.style.display = "block";
        yourAnswer.textContent = input.value;
        respuestaCorrecta.style.display = "block";
        correctAnswer.textContent = kana[randomIndex].answers[0];
        currentStreak[currentMode] = 0;
        sessionStorage.setItem("currentStreak", JSON.stringify(currentStreak));
        equivocadosList.push(randomKana);
        equivocados.textContent = "Respuestas incorrectas: " + equivocadosList.join(", ");
    }

    // ストリークの表示
    currentStreakDisplay.textContent = currentStreak[currentMode];
    maxStreakDisplay.textContent = maxStreak[currentMode];

    // 全部使ったらリセット
    if (usedChars.length === kana.length) {
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

    // ランダムなかなを生成
    randomIndex = Math.floor(Math.random() * kana.length);

    // 既に使われた奴なら引き直す
    while (usedChars.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * kana.length);
    }
    usedChars.push(randomIndex);

    randomKana = kana[randomIndex].char[currentMode];

    // ランダムなかなを表示
    question.textContent = randomKana;

    // 入力欄をリセットする
    input.value = "";
});

// エンターで入力される仕組み
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkButton.click();
    }
});
