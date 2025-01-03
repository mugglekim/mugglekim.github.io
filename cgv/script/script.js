$(
   function(){ /*** 생성자 함수 시작 ***/
      
      $('.sub-menu').hide();
      $('.nav-bg').hide();
      $('.menu-wide').hide();
      $('.nav-bg-total').hide();
      
      /**햄버거메뉴 버튼을 눌렀을 때 */
      let imgplug=0;
      $('.btn-menu').click(
         function(){
            if( imgplug == 0 ){
               $('.btn-menu>img').attr('src','./images/btn-menu.png');
               imgplug = 1;
               $('.menu-wide').slideUp();
               $('.nav-bg-total').slideUp();

            } else{
               $('.btn-menu>img').attr('src','./images/btn-close.png');
               imgplug = 0;
               $('.menu-wide').slideDown();
               $('.nav-bg-total').slideDown();
            }
         }
      );
      
      /**nav바에 호버했을 때 */
      $('.main-menu').hover(
         function(){
            $(this).children('.sub-menu').fadeIn();
         },
         function(){
            $(this).children('.sub-menu').fadeOut();
         },
      );
      $('.nav-bar').hover(
         function(){
            $('.nav-bg').show();
         },
         function(){
            $('.nav-bg').hide();
         }
      );
   } /*** 생성자 함수 종료 ***/
);