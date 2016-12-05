var checkKey = function(e){
	 switch (e.keyCode) {
		case 37:
			$('#previous, #prevport, .use-as-setas .seta.esq').trigger('click');
			return false;
			break;
		case 39:
			$('#next, #nextport, .use-as-setas .seta.dir').trigger('click');
			return false;
			break;
		case 27:
			$('.backtoall').trigger('click');
			return false;
			break;
		}      
}

$(document).ready(function(){
   $(document).keydown (checkKey);
});