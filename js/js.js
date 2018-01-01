$(document).ready(function(){
	updateCenterContent();

  var myVar = setInterval(myTimer, 4000);
  var m1 = "We are your Digital Partner";
  var m2 = "We Build Scalable Mobile Apps";
  var m3 = "Unique and Attractive Designes";
  var m4 = "Create your Brand Identity";
  var m5 = "Improve your online Business";
  var m6 = "Utilize power of Social Media";
  var m7 = "We Build Responsive websites";
  var IsCardAnimStarted = false ;

  function updateCenterContent(){
	var messCenterLocation=(($('.headerBack').height()-$(".myMess").height())/2);
	$(".myAnim").css({"top":messCenterLocation+"px"});
  	$(".anim").height($(".myMess").height()/3);
	}
//	$('.changeBackgroundColor').hover(
	//	$(this).css({"color":'GreenYellow'});
		//alert("his");
	//);


	$(window).scroll(function(){
			checkAnimation($('#ourLogo'),'animated once fadeInUp');
			checkAnimation($('#aboutUs'),'animated once fadeInUp');
			checkAnimation($('#doYouKnow'),'animated once fadeInUp');
			checkAnimation($('#animatedLine1'),'lineStyle');
			checkAnimation($('#animatedLine2'),'lineStyle');
			checkAnimation($('#aboutContentP1'),'animated once fadeInLeft');
			checkAnimation($('#aboutContentP2'),'animated once fadeInLeft');
			checkAnimation($('#infoLines1'),'animated once fadeInUp');
			checkAnimation($('#infoLines2'),'animated once  fadeInUp');
			checkAnimation($('#infoLines3'),'animated once  fadeInUp');
			checkAnimation($('#infoLines4'),'animated once  fadeInUp');
			checkAnimation($('#infoLines5'),'animated once  fadeInUp');
			checkAnimation($('#infoLines6'),'animated once  fadeInUp');
			checkAnimation($('#infoLines7'),'animated once  fadeInUp');
			checkAnimation($('#infoLines8'),'animated once  fadeInUp');
			checkAnimation($('#yrOfExp'),'animated once jello counting');
			checkAnimation($('#yrOfExpTag'),'counting');
			checkAnimation($('#CustSatisfation'),'animated once jello counting');
			checkAnimation($('#CustSatisfationTag'),'counting');
			checkAnimation($('#noOfCust'),'animated once jello counting');
			checkAnimation($('#noOfCustTag'),'counting');
	});

  function myTimer() {
            var currText = $("#mess").text();
			updateCenterContent();

            $("#mess").fadeOut(0);
            if (currText == m1){
              $("#mess").html('We Build </br>Scalable Mobile Apps');$("#mess").fadeIn(1500);return;
            }
            if (currText == m2){
              $("#mess").html("Unique <br>and Attractive Designes");$("#mess").fadeIn(1500);return;
            }
            if (currText == m3){
              $("#mess").html("Create </br>your Brand Identity");$("#mess").fadeIn(1500);return;
            }
            if (currText == m4){
              $("#mess").html("Improve </br>your online Business");$("#mess").fadeIn(1500);return;
            }
            if (currText == m5){
              $("#mess").html("Utilize power </br>of Social Media");$("#mess").fadeIn(1500);return;
            }
            if (currText == m6){
              $("#mess").html("We Build </br>Responsive websites");$("#mess").fadeIn(1500);return;
            }
            if (currText == m7){
              $("#mess").html("We are </br>your Digital Partner");$("#mess").fadeIn(1500);return;
            }
            if(currText==""){
              $("#mess").html('We Build </br>Scalable Mobile Apps');$("#mess").fadeIn(1500);return;
            }
          }
          function incrNo(){
                var currVal = $(".yearsOfExp").text();
                if (currVal == 17){
                var myInt = setInterval(increaseNo, 50);
                var incr=1;
                function increaseNo(){
                  $(".yearsOfExp").html(incr);
                  incr++;
                  if (incr > 17){clearInterval(myInt);}
                return true;}
              }
          }
          function noOfCustIncr(){
              var currSatVal = $(".noOfCust").text();
              if (currSatVal == '500+'){
              var myCustCount = setInterval(increaseNo, 5);
              var custIncr=0;
              function increaseNo(){
                $(".noOfCust").html(custIncr+"+");
                custIncr=custIncr+5;
                if (custIncr > 500){clearInterval(myCustCount);}
              return true;}
              }
            }
          incrNo();
          noOfCustIncr();
          $(".yearsOfExp").hover(incrNo());
          $(".noOfCust").hover(noOfCustIncr());
          centerCardTitle();
          $(".testMonial").hover(function(){

            $(this).css({"background-color":'teal'});
            $(this).css({"color":'white'});
            $(this).children('.testtitle').css({"color":"white"});
          },function(){
            $(this).css({"background-color":'white'});
            $(this).css({"color":'black'});
            $(this).children('.testtitle').css({"color":"teal"});
          })
          $(window).resize(function(){
            centerCardTitle();
          });
          	var gallery = $('.gallery a').simpleLightbox();
            $(function(){
		var $gallery = $('.gallery a').simpleLightbox();

		$gallery.on('show.simplelightbox', function(){
			console.log('Requested for showing');
		})
		.on('shown.simplelightbox', function(){
			console.log('Shown');
		})
		.on('close.simplelightbox', function(){
			console.log('Requested for closing');
		})
		.on('closed.simplelightbox', function(){
			console.log('Closed');
		})
		.on('change.simplelightbox', function(){
			console.log('Requested for change');
		})
		.on('next.simplelightbox', function(){
			console.log('Requested for next');
		})
		.on('prev.simplelightbox', function(){
			console.log('Requested for prev');
		})
		.on('nextImageLoaded.simplelightbox', function(){
			console.log('Next image loaded');
		})
		.on('prevImageLoaded.simplelightbox', function(){
			console.log('Prev image loaded');
		})
		.on('changed.simplelightbox', function(){
			console.log('Image changed');
		})
		.on('nextDone.simplelightbox', function(){
			console.log('Image changed to next');
		})
		.on('prevDone.simplelightbox', function(){
			console.log('Image changed to prev');
		})
		.on('error.simplelightbox', function(e){
			console.log('No image found, go to the next/prev');
			console.log(e);
		});
	});
function centerCardTitle(){
  $('.pc1').css({'padding-top':''+(($('.pc1').height()-$('.pc1').children('.cardTitle').height())/2)+'px'});
  $('.pc2').css({'padding-top':''+(($('.pc2').height()-$('.pc2').children('.cardTitle').height())/2)+'px'});
  $('.pc3').css({'padding-top':''+(($('.pc3').height()-$('.pc3').children('.cardTitle').height())/2)+'px'});
  $('.pc4').css({'padding-top':''+(($('.pc4').height()-$('.pc4').children('.cardTitle').height())/2)+'px'});

}
        $('.productCard').hover(function(){
          var cardTitleText =$(this).children('.cardTitle');
          var cardContentText =$(this).children('.cardContent');
              cardTitleText.css({'font-size' : ' 18px'});
              $(this).css({'padding-top' : '10px'});
            cardTitleText.css({'color' : 'Indigo'});
              cardTitleText.removeClass('shadow3D');
              cardTitleText.addClass('animated fadeInUp');
              cardContentText.css({'display' : 'block'});
              cardContentText.addClass('animated fadeInUp');
        }, function(){
          var cardTitleText =$(this).children('.cardTitle');
          var cardContentText =$(this).children('.cardContent');
          //cardContentText.fadeOut('fast',function(){
            cardContentText.removeClass('animated fadeInUp');
            cardContentText.css({'display' : 'none'});
//            $(this).css({'overflow-y' : 'scroll'});
//              });
          cardTitleText.addClass('shadow3D');
          cardTitleText.css({'color' : 'white'});
          cardTitleText.css({'font-size' : '40px'});
          cardTitleText .removeClass('animated fadeInUp');
          var heightContainer = (($(this).height()-cardTitleText.height())/2);
          $(this).css({'padding-top':''+heightContainer+'px'});
            });

						function checkAnimation(elemToAnim,animClass) {
							console.log('chacking for animation');

						    var $elemToAnim = $(elemToAnim);
							    // If the animation has already been started
								if (isElementInViewport($elemToAnim)) {
									console.log('into viewport');
									if ($elemToAnim.hasClass(animClass)){
											return;
									;}
									console.log('expaceted animation');
									$elemToAnim.addClass(animClass);
						    }else{
									console.log('removing animation');
									$elemToAnim.removeClass(animClass);
								}
						}

						function isElementInViewport(elem) {
						    var $elem = $(elem);
						    // Get the scroll position of the page.
						    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
						    var viewportTop = $(scrollElem).scrollTop();
						    var viewportBottom = viewportTop + $(window).height();

						    // Get the position of the element on the page.
						    var elemTop = Math.round( $elem.offset().top );
						    var elemBottom = elemTop + $elem.height();
//								alert("scrollposition :" +scrollElem +", viewporttop :"+viewportTop+", viewport bottom:"+viewportBottom +", elemTop :"+elemTop+", ekenBitin:"+elemBottom+", finally to show :"+((elemTop < viewportBottom) && (elemBottom > viewportTop)));

						    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
						}

});
