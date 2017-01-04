/*
	スライドショー
*/

window.onload = function() {

	// ----------------------
	// VERS
	// ----------------------

	// 画像リストの定義

	var photoList = [	// 配列 に オブジェクトを入れる
		{ src: 'img/Roncamp_28.jpg', title: 'Roncamp_28' },
		{ src: 'img/Roncamp_21.jpg', title: 'Roncamp_21' },
		{ src: 'img/Roncamp_40.jpg', title: 'Roncamp_40' },
		{ src: 'img/Roncamp_50.jpg', title: 'Roncamp_50' },
		{ src: 'img/Roncamp_55.jpg', title: 'Roncamp_55' },
		{ src: 'img/Roncamp_56.jpg', title: 'Roncamp_56' },
		{ src: 'img/Roncamp_57.jpg', title: 'Roncamp_57' },
		{ src: 'img/Roncamp_62.jpg', title: 'Roncamp_62' },
		{ src: 'img/Roncamp_64.jpg', title: 'Roncamp_64' },
		{ src: 'img/Roncamp_66.jpg', title: 'Roncamp_66' },
		{ src: 'img/Roncamp_75.jpg', title: 'Roncamp_75' },
	];

	var photoLength = photoList.length; // プロパティ → 値を返すもの

	// html 要素を取得
	var photoFrame = document.getElementById('imgFrame');
	var nextBtn = document.getElementById('nextBtn');
	var title = document.getElementById('imgTitle')

	// 現在のインデックスを保存するための変数
	var currentIndex = 0;

	// ----------------------
	// 関数の定義
	// ----------------------

	function showPhoto(index) {
		// すべての画像→ラップ要素を非表示
		for ( var i = 0; i < photoLength; i = i + 1 ) {
			photoList[i].element.style.opacity = 0;
		}

		// 表示する対象の要素を取得
		var targetPhoto = photoList[index];

		// タイトルの表示
		var viewNumber = index + 1;
		title.innerHTML = 'item No.' + viewNumber + ' / ' + targetPhoto.title;

		// 画像の表示
		targetPhoto.element.style.opacity = 1;

	}

	// ----------------------
	// イベントの設定
	// ----------------------

	// next ボタンを押したときの処理
	nextBtn.onclick = function() {
		event.preventDefault();

		// 表示する次の画像のインデックスを計算

		currentIndex = currentIndex + 1;

		if ( currentIndex === photoLength ) {
			currentIndex = 0;
		}

		// 画像の切り替え
		showPhoto(currentIndex);

	}


	// ----------------------
	// 初期化処理
	// ----------------------

	// img要素をHTMLに追加
  // → CSSの backGround に敷くようにする。

	for ( var i = 0; i < photoLength; i++) {
		var item = photoList[i];

		// img要素の作成
		var img = document.createElement('img');
		// imgWrap要素の作成
		var imgWrap =  document.createElement('div');

		// 作成したimg要素に属性を設定
		img.src = item.src;
		img.alt = item.title;
		img.style.visibility = 'hidden';

		imgWrap.style.backgroundImage = 'url(' + item.src + ')';

		// 作成したimg要素をHTMLに追加
		photoFrame.appendChild(imgWrap).appendChild(img);

		// 作成したimgWrap 要素を photoList にオブジェクトとして追加
		 item.element = imgWrap;
	}

	console.log("ADD" + photoList);

	// 初期表示のために showPhoto 関数を実行する
	showPhoto(currentIndex);

	// 日付を出す。
	var date = new Date();
	var year = date.getFullYear();
	var yyyyWrap = document.getElementById('yyyy-wrap');

	yyyyWrap.innerHTML = year ;

};


// alert('hello,word!');
console.log(navigator.userAgent);
