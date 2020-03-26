$(function(){
	var $container = $('.slideshow');//슬라이더쇼 전체컨테이너
	var $slideGroup = $('.slideshow-slides');//슬라이더 그룹
	var $slides = $container.find('.slide');//각각의 슬라이더
	var $indicator = $container.find('.slideshow-indicator');//인디게이터
	
	var currentIndex = 0;
	var slideCount = $slides.length;
	var indicatorHtml = '';
	var timer;
	
	$slides.each(function(i){
		$(this).css('left', 100 * i + '%');
		indicatorHtml += '<a href="#">' + (i+1) + '</a>';		
	});
	
	$indicator.html(indicatorHtml);
	
	//슬라이더 이동함수
	function goToSlide(index){
		$slideGroup.animate({
			left: -100 * index + '%'
		}, 500);	
		currentIndex = index;
			
	}


	
	//인디게이터 이벤트
	$indicator.on('click', 'a', function(event){
		event.preventDefault();
		goToSlide($(this).index());
	});
	
	//타이머 시작함수
	function startTimer(){
		timer = setInterval(function(){
			var nextIndex = (currentIndex + 1) % slideCount;
			goToSlide(nextIndex);
		}, 4000);
	}
	
	//타이머 중지하는 함수
	function stopTimer(){
		clearTimeout(timer);
	}
	
	//마우스이벤트 설정 : mouseenter, mouseleave
	$container.on({
		mouseenter : stopTimer,
		mouseleave : startTimer 
	});
	
	
	
	goToSlide(currentIndex);
	startTimer();
});