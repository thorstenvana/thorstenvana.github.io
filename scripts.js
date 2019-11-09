function resizeDiv(maindiv,subdiv) {
	vpw = $(window).width();
	vph = $(window).height();
	$(maindiv).css({'height': vph + 'px'});
	$(maindiv).css({'width': vpw + 'px'});
	$(maindiv).css({'top': '0'});
	$(subdiv).css({'top': '40%'});
	$('.wrapper').css({'marginTop': vph + 'px'});
}
