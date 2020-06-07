function init() {
    // イベントリスナーの登録
    document.getElementById('1').addEventListener('click', inputNumber, false);
    document.getElementById('2').addEventListener('click', inputNumber, false);
    document.getElementById('3').addEventListener('click', inputNumber, false);
    document.getElementById('4').addEventListener('click', inputNumber, false);
    document.getElementById('5').addEventListener('click', inputNumber, false);
    document.getElementById('6').addEventListener('click', inputNumber, false);
    document.getElementById('7').addEventListener('click', inputNumber, false);
    document.getElementById('8').addEventListener('click', inputNumber, false);
    document.getElementById('9').addEventListener('click', inputNumber, false);
    document.getElementById('0').addEventListener('click', inputNumber, false);
    document.getElementById('taxon_calc').addEventListener('click', calc, false);
    document.getElementById('taxoff_calc').addEventListener('click', calc, false);
    document.getElementById('backspace').addEventListener('click', backspace, false);
    document.getElementById('clear').addEventListener('click', clear, false);

}
window.onload = init;

// 数値ボタンの値を価格欄に入力
function inputNumber() {
    document.getElementById('price').value += this.textContent;
}

// 税抜き、税込み価格を計算
function calc(e) {
    const tax = document.getElementById('tax').value;
    const price = parseInt(document.getElementById('price').value);

    if (e.target.id === 'taxon_calc') { // 税込み価格を計算
        const sum = price * (1 + (tax / 100));
        document.getElementById('taxoff').textContent = price;
        document.getElementById('taxon').textContent = Math.floor(sum);
    } else if (e.target.id === 'taxoff_calc') { // 税抜き価格を計算
        const sum = price - Math.floor(price - (price / (1 + (tax / 100))));
        document.getElementById('taxoff').textContent = Math.floor(sum);
        document.getElementById('taxon').textContent = price;
    }
}

// 価格欄の数値を末尾から1文字削除
function backspace() {
    const str = String(document.getElementById('price').value);
    const result = str.slice(0, -1);
    document.getElementById('price').value = result;
}

// 価格欄の入力値をすべて削除
function clear() {
    document.getElementById('price').value = '';
}