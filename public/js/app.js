
$('.Menu-item').click(notification)
$('.prevent').click(preventDefault)
function notification(e){
	e.stopPropagation()
	$parents = $(this).parents('*')
	$(this).toggleClass('active')
	$(this).find('.icon-menu').toggleClass('active')
	$(this).parents('.Menu-option').siblings().find('.Menu-item').removeClass('active')
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
