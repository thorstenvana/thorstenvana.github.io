function resizeDiv(maindiv,subdiv) {
	vpw = $(window).width();
	$(maindiv).css({'width': vpw + 'px'});
	$(maindiv).css({'top': '0'});
	$(subdiv).css({'top': '40%'});
	$('.wrapper').css({'marginTop': $(maindiv).height() + 'px'});
}
