<script type="application/x-javascript">
          addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
          }, false);
          function hideURLbar(){
            window.scrollTo(0,1);
          }
        </script>

        <script type="text/javascript">
          $(function() {
            var menu_ul = $('.menu-drop > li > ul'),
            menu_a  = $('.menu-drop > li > a');
            menu_ul.hide();
            menu_a.click(function(e) {
              e.preventDefault();
              if(!$(this).hasClass('active')) {
                menu_a.removeClass('active');
                menu_ul.filter(':visible').slideUp('normal');
                $(this).addClass('active').next().stop(true,true).slideDown('normal');
              } else {
                $(this).removeClass('active');
                $(this).next().stop(true,true).slideUp('normal');
              }
            });
          });
        </script>
