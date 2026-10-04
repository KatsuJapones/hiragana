// このサイト自体でお金は稼げないかもしれないが日本語を学ぶコミュニティを作って
// そこで何か広告をしたりビジネスにつなげるチャンスがあるかもしれない！

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
const modeDisplay = document.getElementById("mode-display");

// ランダムなかなを生成
let randomIndex = Math.floor(Math.random() * kana.length);
let randomKana = kana[randomIndex].char[currentMode];

// ランダムなかなを表示
const question = document.getElementById("question");
question.textContent = randomKana;

// かな変更スイッチを押したときに何をするのか
function kanaMode(mode) {
    currentMode = mode;
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

    // usedCharsに基づいて出してないやつを表示する
    do {
        randomIndex = Math.floor(Math.random() * kana.length);
    } while (usedChars[mode].includes(randomIndex))
    randomKana = kana[randomIndex].char[currentMode];
    question.textContent = randomKana;

    // リザルトモーダル後にボタンを押さずに更新した時のための防止策
    if (usedChars[currentMode].length === kana.length) {
        usedChars[currentMode] = [];
        sessionStorage.setItem("usedChars", JSON.stringify(usedChars));
        equivocadosList[currentMode] = [];
        sessionStorage.setItem("equivocadosList", JSON.stringify(equivocadosList));
    }

    // モーダル用
    modalModeDisplay.textContent = modeCode[mode];
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
let usedChars = JSON.parse(sessionStorage.getItem("usedChars")) || [[], []];

// 間違えた文字のリストとその辺の表示あれこれ
let equivocadosList = JSON.parse(sessionStorage.getItem("equivocadosList")) || [[], []];
const equivocadoButton = document.getElementById("equivocado-button");
const equivocados = document.getElementById("equivocado");
const equivocadoArrow = document.getElementById("equivocado-arrow");
const equivocadoListDisplay = document.getElementById("equivocado-list");
let letterButtonContainer = document.querySelector(".letter-button-container");

// リザルトモーダル後にボタンを押さずに更新した時のための防止策
if (usedChars[currentMode].length === kana.length) {
    usedChars[currentMode] = [];
    sessionStorage.setItem("usedChars", JSON.stringify(usedChars));
    equivocadosList[currentMode] = [];
    sessionStorage.setItem("equivocadosList", JSON.stringify(equivocadosList));
}

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
    if (input.value === "") {
        return;
    }

    // 回答が正解と一緒だった場合
    if (kana[randomIndex].answers.includes(input.value.trim().toLowerCase())) {
        clearResult();
        if (!usedChars[currentMode].includes(randomIndex)) {
            usedChars[currentMode].push(randomIndex);
            sessionStorage.setItem("usedChars", JSON.stringify(usedChars));
        }

        // 正解メッセージの表示（使った正解メッセージの管理も）とアニメーション
        resultMuyBien.style.display = "flex";
        resultMuyBien.classList.remove("correcto-mensaje");
        resultMuyBien.offsetWidth;
        resultMuyBien.classList.add("correcto-mensaje");
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
        if (!usedChars[currentMode].includes(randomIndex)) {
            usedChars[currentMode].push(randomIndex);
            sessionStorage.setItem("usedChars", JSON.stringify(usedChars));
        }

        // メッセージの管理
        resultMuyBien.style.display = "none";
        resultError.style.display = "flex";
        resultError.classList.remove("incorrecto-mensaje");
        resultError.offsetWidth;
        resultError.classList.add("incorrecto-mensaje");
        resultIncorrecto.textContent = "Incorrecto...";
        resultCorrecto.textContent = "";
        mistake.textContent = kana[randomIndex].char[currentMode];
        tuRespuesta.style.display = "block";
        yourAnswer.textContent = input.value;
        respuestaCorrecta.style.display = "block";
        correctAnswer.textContent = kana[randomIndex].answers[0];

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
        equivocadosList[currentMode].push(randomKana);
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
    if (usedChars[currentMode].length === kana.length) {
        let percentage = ((kana.length - equivocadosList[currentMode].length) / kana.length * 100).toFixed(1);
        resultEquivocados.textContent = "Respuestas incorrectas (" + equivocadosList[currentMode].length + ")";
        // リザルトモーダルを開く
        setTimeout(() => {
            resultModal.showModal();
            resultModal.classList.add("modal-open");
        }, 10);

        losCorrectos.textContent = (kana.length - equivocadosList[currentMode].length);
        losIncorrectos.textContent = equivocadosList[currentMode].length;
        cuantoCorrecto.textContent = (kana.length - equivocadosList[currentMode].length);
        lengthContent.textContent = " / " + kana.length;
        porcentaje.textContent = "Precisión " + percentage + "%";
        isDoingResult = true;
        progressCircle.style.strokeDasharray = circumference;
        progressCircle.style.strokeDashoffset = circumference * (1 - percentage / 100);
        if (equivocadosList[currentMode].length > 0) {

            // 間違いリストスイッチの機能保全
            resultLetterButtonContainer.style.maxHeight = "0px";

            // 間違えた問題をspanにして追加する
            resultEquivocadoListDisplay.innerHTML = "";

            // 消えたボタンの再表示
            resultRepasar.style.display = "inline-block";

            equivocadosList[currentMode].forEach(function (equivocado) {
                let character = document.createElement("span");
                character.className = "equivocado-character";
                character.textContent = equivocado;
                resultEquivocadoListDisplay.appendChild(character);
            });
        }
        else {
            resultEquivocadoContainer.style.display = "none";
        }

        // 結果に応じた変更
        if (percentage == 100.0) {
            resultMensaje.textContent = "¡Perfecto! ¡Dominado por completo!";
            porcentaje.style.color = "#f5c84b";
            progressCircle.style.stroke = "#f5c84b";
            backgroundCircle.style.stroke = "#d7ebfd";

            // 全問正解の場合repasarボタンを消す
            resultRepasar.style.display = "none";
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
            resultMensaje.textContent = "¡Un poco más de esfuerzo y lo logras!";
            porcentaje.style.color = "#dfa126";
            progressCircle.style.stroke = "#dfa126";
            backgroundCircle.style.stroke = "#fae9ca";
        }
        else if (percentage >= 30.0) {
            resultMensaje.textContent = "¡Estás cerca! ¡No te detengas ahora!";
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
        randomIndex = Math.floor(Math.random() * kana.length);

        // 既に使われた奴なら引き直す
        while (usedChars[currentMode].includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * kana.length);
        }

        randomKana = kana[randomIndex].char[currentMode];

        // ランダムなかなを表示
        question.textContent = randomKana;

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
let modalRespuesta = kana.find(item => item.char[currentMode] === modalEquivocado);

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
    if (modalInput.value === "") {
        return;
    }

    // 回答が正解と一緒だった場合
    if (modalRespuesta.answers.includes(modalInput.value.trim().toLowerCase())) {
        clearModalResult();
        modalResultMuyBien.style.display = "flex";
        modalResultMuyBien.classList.remove("correcto-mensaje");
        modalResultMuyBien.offsetWidth;
        modalResultMuyBien.classList.add("correcto-mensaje");
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

        // 入力欄にフォーカス
        input.focus()
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
    repasarModal.showModal();
    setTimeout(function () {
        repasarModal.classList.add("modal-open");
    }, 10);

    modalInput.focus();

    // 間違えたかなを取得
    modalEquivocado = equivocadosList[currentMode][0];
    modalRespuesta = kana.find(item => item.char[currentMode] === modalEquivocado);

    // 間違えたかなを表示
    const modalQuestion = document.getElementById("modal-question");
    modalQuestion.textContent = modalEquivocado;

    // カウンターを取得し設定
    const repasoCounter = document.getElementById("repaso-counter");
    let count = 1;
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
    usedChars[currentMode] = [];
    sessionStorage.setItem("usedChars", JSON.stringify(usedChars));
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
    question.textContent = randomKana;
    input.value = "";
    letterButtonContainer.style.maxHeight = "0px";
    letterButtonContainer.style.transition = "max-height 0.2s ease";
    equivocadoArrow.style.transform = "rotate(0deg)";
    usedChars[currentMode] = [];
    equivocadosList[currentMode] = [];
    sessionStorage.setItem("usedChars", JSON.stringify(usedChars));
    sessionStorage.setItem("equivocadosList", JSON.stringify(equivocadosList));
    setEquivocadosList();
    equivocados.textContent = "Respuestas incorrectas (" + equivocadosList[currentMode].length + ")";
    randomKana = kana[randomIndex].char[currentMode];
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
        randomIndex = Math.floor(Math.random() * kana.length);
        while (usedChars[currentMode].includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * kana.length);
        }
        randomKana = kana[randomIndex].char[currentMode];
        question.textContent = randomKana;
        input.value = "";
        equivocadosList[currentMode] = [];
        sessionStorage.setItem("equivocadosList", JSON.stringify(equivocadosList));
        usedChars[currentMode] = [];
        sessionStorage.setItem("usedChars", JSON.stringify(usedChars));
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
    modalRespuesta = kana.find(item => item.char[currentMode] === modalEquivocado);
    modalQuestion.textContent = modalEquivocado;
    count = 1;
    cantidad = equivocadosList[currentMode].length;
    repasoCounter.textContent = count + "/" + cantidad;
    sessionStorage.setItem("equivocadosList", JSON.stringify(equivocadosList));
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
    letterButtonContainer.style.maxHeight = "0px";
    letterButtonContainer.style.transition = "max-height 0.2s ease";
    equivocadoArrow.style.transform = "rotate(0deg)";
});