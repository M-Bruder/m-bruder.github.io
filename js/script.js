// Contact Form
        /*var message = "";
        $("#sendMessage").on("click", function() {
            message = $("#contactForm").serialize();
            $.ajax({
                url: "//formspree.io/michal@bruder.top",
                method: "POST",
                data: {
                    message: message
                },
                dataType: "json"
            });
            alert('Thanks for the email, we\'ll be in touch promptly.');
            return false;
        });*/

        var contactform = document.getElementById('contactForm');
        contactform.setAttribute('action', '//formspree.io/' + 'michal' + '@' + 'bruder' + '.' + 'top');

        function FormSentConfirmation() {
            alert('Dziękuję za wiadomość e-mail, wkrótce skontaktuje się z Tobą.');
        }

// Scroll effect
        $(document).ready(function() {
            $('a[href^="#"]').on('click', function(event) {
                var target = $($(this).attr('href'));
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);

            });
        });

 // Change navbar
        $(document).ready(function() {
                if ($(window).width() <= 768) {
                    $("nav").removeClass('navbar-transparent');
                }
        });

        $(window).on('scroll', function() {
            var cur_pos = $(this).scrollTop();
                if (cur_pos < 200 && $(window).width() >= 768) {
                    $('nav').addClass('navbar-transparent');
                } else {
                    $("nav").removeClass('navbar-transparent');
                }
        });

//Change navbar item depending current position
        var sections = $('section'),
            nav = $('nav'),
            nav_height = nav.outerHeight();

        $(document).on('scroll', function() {
            var cur_pos = $(this).scrollTop();

            sections.each(function() {
                var top = $(this).offset().top - nav_height,
                    bottom = top + $(this).outerHeight();

                if (cur_pos >= top && cur_pos <= bottom) {
                    nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                } else {
                    nav.find('a[href="#' + $(this).attr('id') + '"]').removeClass('active');
                }
            });
        });