    
    var getUrlIndex = function(){
        var item = jQuery(window.location.hash);
		//console.log(item);
        if( item.length ){
            var itens    = jQuery('.itemDestacado li');
            return itens.index(item); 
        }
        return -1;
    }
    

jQuery(document).ready(function() {



	//escondendo elementos...
	jQuery('.itemDestacado').fadeOut(0);
	jQuery('.itemDestacadoFuncoes').fadeOut(0);
	jQuery('#SetasDoTeclado').fadeOut(0);
	
	//imagens 'serviços'
	jQuery('#servicos ul li').animate({'opacity':'0.8'}, 0);

	jQuery('#servicos ul li').hover(function(){
		jQuery(this).animate({'opacity':'1'}, 100);
	},
	function(){
		jQuery(this).animate({'opacity':'0.8'}, 100);
	});

	
	//hide destaque - show lista
	jQuery('.backtoall').click(function(){
		jQuery('.itemDestacadoFuncoes').fadeOut(200);
		jQuery('.portfolioForSlide').fadeIn(200);
		jQuery('.itemDestacado').fadeOut(200);
		jQuery('#navport').fadeIn(200);
	});

	//hide input file (atendimento)
	jQuery('#form3 form input[type=file]').css({opacity:0});

	//footer conditions
	jQuery('#form2, #form3').hide(0);
	jQuery('#outrosAssuntos, #trabalheConosco').css({opacity:0.6});
	
	jQuery('#atendimento').click(function(){
		jQuery('#atendimento').addClass('activeFooter');
		jQuery(this).css({opacity:1});
		jQuery('#outrosAssuntos, #trabalheConosco').removeClass('activeFooter');
		jQuery('#outrosAssuntos, #trabalheConosco').css({opacity:0.6});
		jQuery('#form2, #form3').fadeOut(200);
		jQuery('#form1').fadeIn(200);
	});
	jQuery('#outrosAssuntos').click(function(){
		jQuery('#outrosAssuntos').addClass('activeFooter');
		jQuery(this).css({opacity:1});
		jQuery('#atendimento, #trabalheConosco').removeClass('activeFooter');
		jQuery('#atendimento, #trabalheConosco').css({opacity:0.6});
		jQuery('#form1, #form3').fadeOut(200);
		jQuery('#form2').fadeIn(200);
	});
	jQuery('#trabalheConosco').click(function(){
		jQuery('#trabalheConosco').addClass('activeFooter');
		jQuery(this).css({opacity:1});
		jQuery('#atendimento, #outrosAssuntos').removeClass('activeFooter');
		jQuery('#atendimento, #outrosAssuntos').css({opacity:0.6});
		jQuery('#form1, #form2').fadeOut(200);
		jQuery('#form3').fadeIn(200);
	});
	
	
	//Slide da página inicial
	jQuery('#slide')
	.before('<div id="nav">') 
	.cycle({
		fx:     'scrollHorz',
		speed:  400,
		timeout: 0,
		pager:  '#nav',
		prev:	'#previous',
		next:	'#next',
		easing:	'easeInOutCirc'
	});
	
	//slide porfolio (todos os itens)
	jQuery('.portfolioForSlide')
	.before('<div id="navport">') 
	.cycle({ 
		fx:     'scrollHorz', 
		speed:  'slow', 
		timeout: 0, 
		pager:  '#navport',
		prev:	'#prevport',
		next:	'#nextport'
		
	});
	
	//slide porfolio (item destacado)
    var start_slide = 0;
    if(getUrlIndex() != -1){
        start_slide = getUrlIndex();
        jQuery('.itemDestacado').fadeIn(200);
		jQuery('.itemDestacadoFuncoes').fadeIn(200);
		jQuery('#navport').fadeOut(200);
		jQuery('.portfolioForSlide').fadeOut(200);
    }
	jQuery('.itemDestacado')
	.before('<div id="navdestaq">') 
	.cycle({ 
		fx:     'scrollHorz', 
		speed:  'slow', 
		timeout: 0, 
        startingSlide: start_slide,
		pager:  '#navdestaq',
		prev:	'#prevport',
		next:	'#nextport',
		easing:	'easeInOutCirc'
	});
	
    jQuery('.itemPortfolio').click(function(){
	   var obj      = jQuery(this);
       var itens    = jQuery('.itemDestacado li');
       var _index    = itens.index( jQuery(obj.attr('target'))); 
       jQuery('.itemDestacado').cycle(_index); 
       
		jQuery('.itemDestacado').fadeIn(200);
		jQuery('.itemDestacadoFuncoes').fadeIn(200);
		jQuery('#navport').fadeOut(200);
		jQuery('.portfolioForSlide').fadeOut(200);
        return false;
	});
    
	/*show porfolio destaque (ampliado)
	jQuery('.itemPortfolio').click(function(){
		jQuery('.itemDestacado').fadeIn(200);
		jQuery('.itemDestacadoFuncoes').fadeIn(200);
		jQuery('#navport').fadeOut(200);
		jQuery('.portfolioForSlide').fadeOut(200);
        return false;
	});*/
    
	//social animation
	jQuery("#twitter, #facebook, #gplus").css({opacity:0.7});
	jQuery("#marcas ul li img").css({opacity:0.7});
	
	jQuery("#twitter, #facebook, #gplus").mouseover(function(){
		jQuery(this).animate({opacity:1, marginTop:-2},70);
	});
	
	jQuery("#twitter, #facebook, #gplus").mouseout(function(){
		jQuery(this).animate({opacity:0.7, marginTop:0},70);
	});
	
	//marcas animation
	jQuery("#marcas ul li img").mouseover(function(){
		jQuery(this).animate({opacity:1, marginTop:0},100);
	});
	
	jQuery("#marcas ul li img").mouseout(function(){
		jQuery(this).animate({opacity:0.7, marginTop:0},200);
	});

	//atendimento scroll
	jQuery.fn.scrollView = function () {
    return this.each(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(this).offset().top
        }, 1000);
    });
    }
	
	jQuery('a[href=#atendimento]').click(function(){
		jQuery('#footer').scrollView();
	});
	
	
	//aparecer | desaparecer 'setas do teclado' home page slide.
	jQuery('#nav').hover(function(){
		jQuery('#SetasDoTeclado').fadeIn(1000);
	},
	function(){
		jQuery('#SetasDoTeclado').fadeOut(1000);
	});
	
	if ( jQuery.browser.msie ) {} else {
	
		function depois() {
			jQuery('.slide-2013 ul li .imagem').stop().animate({"marginTop":0,"opacity":1});
			jQuery('.slide-2013 ul li h3').stop().animate({"marginLeft":0,"opacity":1});
			jQuery('.slide-2013 ul li .botao-link').stop().animate({"marginLeft":0, "opacity":1});
			jQuery('.slide-2013 ul li .checklist').stop().animate({"marginLeft":0, "opacity":1});
			
		}
		
		function antes() {
			jQuery('.slide-2013 ul li .imagem').stop().animate({"marginTop":20+"px","opacity":0});
			jQuery('.slide-2013 ul li h3').stop().animate({"marginLeft":"-"+40+"px","opacity":0});
			jQuery('.slide-2013 ul li .botao-link').stop().animate({"marginLeft":"-"+40+"px", "opacity":0});		
			jQuery('.slide-2013 ul li .checklist').stop().animate({"marginLeft":"+"+40+"px", "opacity":0});
		}
	
	}
	
	
	//slide porfolio (todos os itens)
	jQuery('.slide-2013 ul')
	.cycle({ 
		sync:	false,
		fx:     'fade', 
		speed:  1000, 
		timeout: 10000, 
		pager:  '.guia .itens',
		prev:	'.slide-2013 ul li.azul .use-as-setas .seta.esq',
		next:	'.slide-2013 ul li.azul .use-as-setas .seta.dir',
		before:	antes,
		after:	depois
	});
	
	jQuery('.slide-2013 .guia .itens a').eq(0).addClass('azul');
	jQuery('.slide-2013 .guia .itens a').eq(1).addClass('verde');
	jQuery('.slide-2013 .guia .itens a').eq(2).addClass('laranja');
	jQuery('.slide-2013 .guia .itens a').eq(3).addClass('amarelo');
	
	var setas = jQuery('.slide-2013 ul li.azul .use-as-setas');
	var tempo = 300;
	setas.fadeOut(0);
	
	jQuery('.slide-2013 .guia .itens').hover(function(){		
		setas.fadeIn(tempo);
	},function(){
		setas.fadeOut(tempo);
	});
	
	//seta a largura quando a tela é redimensionada
	jQuery(window).resize(function(){
		var largura = jQuery(window).width();
		jQuery('.slide-2013 ul > li').css({"width":largura}, 100);
	});

});