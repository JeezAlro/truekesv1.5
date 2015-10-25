
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
	$id_Activate = '#'+$(this).attr('data-activate')
	$(this).toggleClass('active')
	$($id_Activate).toggleClass('active')
}
function notification(e){
	e.stopPropagation()
	$parents = $(this).parents('body')
	$(this).toggleClass('active')
	$(this).find('.icon-menu').toggleClass('active')
	$(this).parents('.Menu-option').siblings().find('*').removeClass('active')
	$(this).siblings().removeClass('active')
	$(this).find('.notifcount').removeClass('pending')
	$parents.one('click',close)
	console.log('jajaj')
}
function close(e){
	
	$('body').find('*').removeClass('active')
	console.log('click out')	
}
function preventDefault(e){
	e.preventDefault()
}
function showMap(n){
	zone = 'zone'+n
	title = $('#'+zone).attr('title')
	$('#MapSprites').addClass(zone)
	$('#LocationTitle').html(title)
}
function resetMap(n){
	zone = 'zone'+n
	$('#MapSprites').removeClass(zone)
	$('#LocationTitle').html('todo El Salvador')
}
