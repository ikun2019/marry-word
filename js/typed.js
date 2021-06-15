function word(){
	var options = {
		strings: ['佐藤なつ子さん','ご結婚おめでとうございます!','末永くお幸せに<i class="fas fa-heart"></i>'],
		typeSpeed: 120,
		backSpeed: 60,
		backDelay: 500,
		contentType: 'html',
		showCursor: false
	};
	var typed = new Typed('.ityped', options);
}

window.addEventListener("keypress", word);
