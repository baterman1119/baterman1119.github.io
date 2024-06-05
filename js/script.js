// 郵便番号入力フィールドからフォーカスを移動したときの処理(全角→半角)
document.getElementById('zipcode').addEventListener('blur', function() {
    const zipcodeField = document.getElementById('zipcode');

    // 全角数字を半角に変換
    const newzipcode = convertToHalfWidth(zipcodeField.value);

    // 更新された値を設定
    zipcodeField.value = newzipcode;
});

// 電話番号入力フィールドからフォーカスを移動したときの処理(全角→半角)
document.getElementById('phone').addEventListener('blur', function() {
    const phoneField = document.getElementById('phone');

    // 全角数字を半角に変換
    const newphone = convertToHalfWidth(phoneField.value);

    // 更新された値を設定
    phoneField.value = newphone;
});

// 郵便番号検索ボタンが押されたときの動作(住所検索)
document.getElementById('search').addEventListener('click', function() {
    const zipcode = document.getElementById('zipcode').value;
    const apiURL = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`;

    if(zipcode === '') {
        alert("郵便番号が入力されていません")
    } else {
        fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            if (data.results) {
                const address = data.results[0].address1 + data.results[0].address2 + data.results[0].address3;
                document.getElementById('address').value = address;
            } else {
                alert('住所が見つかりませんでした。');
            }
        })
        .catch(error => {
            console.error('Error:',
