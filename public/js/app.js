
$('.Menu-item').click(notification)
$('.prevent').click(preventDefault)
$('.Location-mobileDrop').click(addActive)
$('.Location-mobileDrop').click(scrollTo)
function scrollTo(e){
	$id=$(this).attr('data-scroll')
	$('html, body').animate({
        scrollTop: $('#'+$id).offset().top
    }, 300);}
function prueba(e){
	console.log('jejee')
}
function addActive(e){
	$(this).toggleClass('active')
	$(this).children('.disable, .active').toggleClass('disable active')
}
function notification(e){
	e.stopPropagation()
	$parents = $(this).parents('*')
	$(this).toggleClass('active')
	$(this).find('.icon-menu').toggleClass('active')
	$(this).parents('.Menu-option').siblings().find('*').removeClass('active')
	$(this).siblings().removeClass('active')
	$(this).find('.notifcount').removeClass('pending')
	$parents.click(close)
}
function close(e){
	e.stopPropagation()
	$(this).find('*').removeClass('active')
	console.log('click out')
}
function preventDefault(e){
	e.preventDefault()
}
