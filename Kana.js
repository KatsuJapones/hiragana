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
    { char: ["ぽ", "ポ"], answers: ["po"] }
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

// かな変更スイッチを押したときに何をするのか
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
    equivocados.textContent = "Respuestas incorrectas (" + equivocadosList[currentMode].length + ")";
    equivocadoListDisplay.innerHTML = "";
    equivocadosList[currentMode].forEach(function (equivocado) {
        let character = document.createElement("span");
        character.className = "equivocado-character";
        character.textContent = equivocado;
        equivocadoListDisplay.appendChild(character);
    });
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

    // モーダル用
    modalEquivocado = equivocadosList[currentMode][0];
    modalQuestion.textContent = modalEquivocado;
    modalRespuesta = kana.find(item => item.char[currentMode] === modalEquivocado);
    modalResultMuyBien.style.display = "none";
    modalResultError.style.display = "none";
    modalMistake.textContent = "";
    modalTuRespuesta.style.display = "none";
    modalRespuestaCorrecta.style.display = "none";
}

// もう出した問題の管理リスト
let usedChars = [];
usedChars.push(randomIndex);

// 間違えた文字のリストとその辺の表示あれこれ
let equivocadosList = JSON.parse(sessionStorage.getItem("equivocadosList")) || [[], []];
let equivocadoButton = document.getElementById("equivocado-button");
let equivocados = document.getElementById("equivocado");
let equivocadoArrow = document.getElementById("equivocado-arrow");
let equivocadoListDisplay = document.getElementById("equivocado-list");
let letterButtonContainer = document.querySelector(".letter-button-container");

// 変更スイッチの機能保全
letterButtonContainer.style.maxHeight = "0px";

equivocadoArrow.textContent = "▶";
equivocadoListDisplay.innerHTML = "";

equivocadosList[currentMode].forEach(function (equivocado) {
    let character = document.createElement("span");
    character.className = "equivocado-character";
    character.textContent = equivocado;
    equivocadoListDisplay.appendChild(character);
});


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

equivocados.textContent = "Respuestas incorrectas (" + equivocadosList[currentMode].length + ")";

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
let resultCorrecto = document.getElementById("result-correcto");
let resultIncorrecto = document.getElementById("result-incorrecto");
let input = document.getElementById("answer");
let resultMuyBien = document.getElementById("result-muybien");
const muybienMensaje = ["¡Muy bien!", "¡Excelente!", "¡Perfecto!", "¡Genial!", "¡Buen trabajo!", "¡Correcto!"];
let mensaje;
let mensajeUsado = [];
let resultError = document.getElementById("result-error");
let mistake = document.getElementById("mistake-kana");
let respuestaCorrecta = document.getElementById("respuesta-correcta");
let tuRespuesta = document.getElementById("tu-respuesta");
let yourAnswer = document.getElementById("yourAnswer");
let correctAnswer = document.getElementById("correctAnswer");

checkButton.addEventListener("click", function () {

    // ここに「回答を押したときの処理」を書く

    // 空欄の時は送信しない
    if (input.value === "") {
        return;
    }

    // 回答が正解と一緒だった場合
    if (kana[randomIndex].answers.includes(input.value.trim().toLowerCase())) {
        clearResult();
        resultMuyBien.style.display = "flex";
        do { mensaje = muybienMensaje[Math.floor(Math.random() * muybienMensaje.length)]; } while (mensajeUsado.includes(mensaje));
        resultCorrecto.textContent = mensaje;
        mensajeUsado.push(mensaje);
        currentStreak[currentMode]++;
        sessionStorage.setItem("currentStreak", JSON.stringify(currentStreak));
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
        equivocadosList[currentMode].push(randomKana);
        sessionStorage.setItem("equivocadosList", JSON.stringify(equivocadosList));
        equivocados.textContent = "Respuestas incorrectas (" + equivocadosList[currentMode].length + ")";
        equivocadoListDisplay.innerHTML = "";
        equivocadosList[currentMode].forEach(function (equivocado) {
            let character = document.createElement("span");
            character.className = "equivocado-character";
            character.textContent = equivocado;
            equivocadoListDisplay.appendChild(character);
        });
        if (equivocadoArrow.style.transform == "rotate(90deg)" && equivocadosList[currentMode].length === 1) {
            letterButtonContainer.style.maxHeight = letterButtonContainer.scrollHeight + "px";
            letterButtonContainer.style.transition = "max-height 0.2s ease";
        }
    }

    // ストリークの表示
    currentStreakDisplay.textContent = currentStreak[currentMode];
    maxStreakDisplay.textContent = maxStreak[currentMode];

    // 全部使ったらリセット
    if (usedChars.length === kana.length) {
        usedChars = [];
        equivocadosList[currentMode] = [];
        sessionStorage.setItem("equivocadosList", JSON.stringify(equivocadosList));

        // やった回数表示
        veces++;
        if (veces === 1) {
            vecesDisplay.textContent = "Hiciste  " + veces + "  vez";
        }
        if (veces >= 2) {
            vecesDisplay.textContent = "Hiciste  " + veces + "  veces";
        }
    }

    // メッセージの管理
    if (mensajeUsado.length === muybienMensaje.length) {
        mensajeUsado = [];
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

// 復習モーダルを開く
let repasar = document.getElementById("repasar");
let repasarModal = document.getElementById("repasar-modal")
repasar.addEventListener("click", function () {
    repasarModal.showModal();
    setTimeout(function () {
        repasarModal.classList.add("modal-open");
    }, 10);
    // 間違えたかなを取得
    modalEquivocado = equivocadosList[currentMode][0];
    modalRespuesta = kana.find(item => item.char[currentMode] === modalEquivocado);

    // 間違えたかなを表示
    let modalQuestion = document.getElementById("modal-question");
    modalQuestion.textContent = modalEquivocado;

    // カウンターを取得し設定
    let repasoCounter = document.getElementById("repaso-counter");
    let count = 1;
    repasoCounter.textContent = count + "/" + equivocadosList[currentMode].length;
});

// 復習モーダルを閉じる
let salirButton = document.getElementById("salir-modal");
salirButton.addEventListener("click", function () {
    repasarModal.classList.remove("modal-open");
    setTimeout(function () {
        repasarModal.close();
    }, 100);

    clearResult();
    clearModalResult();
    count = 1;
    equivocadosList = JSON.parse(sessionStorage.getItem("equivocadosList"));
});

// かなモード表示
let modalModeDisplay = document.getElementById("modal-mode-display");
modalModeDisplay.textContent = modeCode[currentMode];

// 間違えたかなを取得
let modalEquivocado = equivocadosList[currentMode][0];
let modalRespuesta = kana.find(item => item.char[currentMode] === modalEquivocado);

// 間違えたかなを表示
let modalQuestion = document.getElementById("modal-question");
modalQuestion.textContent = modalEquivocado;

// カウンターを取得し設定
let repasoCounter = document.getElementById("repaso-counter");
let count = 1;
let cantidad = equivocadosList[currentMode].length;

// ボタンの挙動
let modalCheckButton = document.getElementById("modal-checkButton");
let modalResultCorrecto = document.getElementById("modal-result-correcto");
let modalResultIncorrecto = document.getElementById("modal-result-incorrecto");
let modalInput = document.getElementById("modal-answer");
let modalResultMuyBien = document.getElementById("modal-result-muybien");
let modalResultError = document.getElementById("modal-result-error");
let modalMistake = document.getElementById("modal-mistake-kana");
let modalRespuestaCorrecta = document.getElementById("modal-respuesta-correcta");
let modalTuRespuesta = document.getElementById("modal-tu-respuesta");
let modalYourAnswer = document.getElementById("modal-yourAnswer");
let modalCorrectAnswer = document.getElementById("modal-correctAnswer");
let modalEquivocadosList = [];

modalCheckButton.addEventListener("click", function () {

    // ここに「回答を押したときの処理」を書く

    // 空欄の時は送信しない
    if (modalInput.value === "") {
        return;
    }

    // 回答が正解と一緒だった場合
    if (modalRespuesta.answers.includes(modalInput.value.trim().toLowerCase())) {
        clearModalResult();
        modalResultMuyBien.style.display = "flex";
        do { mensaje = muybienMensaje[Math.floor(Math.random() * muybienMensaje.length)]; } while (mensajeUsado.includes(mensaje));
        modalResultCorrecto.textContent = mensaje;
        mensajeUsado.push(mensaje);
        equivocadosList[currentMode].shift();
    }

    // 回答が間違っていた場合
    else {
        modalResultMuyBien.style.display = "none";
        modalResultError.style.display = "flex";
        modalResultIncorrecto.textContent = "Incorrecto...";
        modalResultCorrecto.textContent = "";
        modalMistake.textContent = modalEquivocado;
        modalTuRespuesta.style.display = "block";
        modalYourAnswer.textContent = modalInput.value;
        modalRespuestaCorrecta.style.display = "block";
        modalCorrectAnswer.textContent = modalRespuesta.answers[0];
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
        modalRespuesta = kana.find(item => item.char[currentMode] === modalEquivocado);

        // 画面の表示を更新
        modalQuestion.textContent = modalEquivocado;
        count++;
        repasoCounter.textContent = count + "/" + cantidad;
    }

    // 不正解をequivocadosListにコピー
    else if (equivocadosList[currentMode].length === 0 && modalEquivocadosList.length > 0) {
        equivocadosList[currentMode] = modalEquivocadosList;
        modalEquivocadosList = [];
        modalEquivocado = equivocadosList[currentMode][0];
        modalRespuesta = kana.find(item => item.char[currentMode] === modalEquivocado);
        modalQuestion.textContent = modalEquivocado;
        count = 1;
        cantidad = equivocadosList[currentMode].length;
        repasoCounter.textContent = count + "/" + cantidad;
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

        // いろいろなもののクリア
        clearResult();
        clearModalResult();
        count = 1;
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