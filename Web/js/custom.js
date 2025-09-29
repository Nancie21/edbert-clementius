;(($, window, document, undefined) => {
  var $winW = () => $(window).width()
  var $winH = () => $(window).height()
  var $screensize = (element) => {
    $(element).width($winW()).height($winH())
  }
  var screencheck = (mediasize) => {
    if (typeof window.matchMedia !== "undefined") {
      var screensize = window.matchMedia("(max-width:" + mediasize + "px)")
      if (screensize.matches) {
        return true
      } else {
        return false
      }
    } else {
      if ($winW() <= mediasize) {
        return true
      } else {
        return false
      }
    }
  }
  var fullpage = window.fullpage // Declare fullpage variable
  var fullpage_api = window.fullpage_api // Declare fullpage_api variable
  $(document).ready(() => {
    $(window).on("load", () => {
      $(".preloader").fadeOut()
      $(".animated-row").each(function () {
        var $this = $(this)
        $this.find(".animate").each(function (i) {
          var $item = $(this)
          var animation = $item.data("animate")
          $item.on("inview", (event, isInView) => {
            if (isInView) {
              setTimeout(() => {
                $item.addClass("animated " + animation).removeClass("animate")
              }, i * 50)
            } else if (!screencheck(767)) {
              $item.removeClass("animated " + animation).addClass("animate")
            }
          })
        })
      })
    })
    if ($(".facts-list").length) {
      $(".facts-list").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 3,
        margin: 30,
        autoplay: false,
        smartSpeed: 700,
        autoplayTimeout: 6000,
        responsive: {
          0: {
            items: 1,
            margin: 0,
          },
          460: {
            items: 1,
            margin: 0,
          },
          576: {
            items: 2,
            margin: 20,
          },
          992: {
            items: 3,
            margin: 30,
          },
        },
      })
    }
    if ($(".services-list").length) {
      $(".services-list").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 3,
        margin: 30,
        autoplay: false,
        smartSpeed: 700,
        autoplayTimeout: 6000,
        responsive: {
          0: {
            items: 1,
            margin: 0,
          },
          460: {
            items: 1,
            margin: 0,
          },
          576: {
            items: 2,
            margin: 20,
          },
          992: {
            items: 3,
            margin: 30,
          },
        },
      })
    }
    if ($(".gallery-list").length) {
      $(".gallery-list").owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        autoplayTimeout: 4000,
        responsive: {
          0: {
            items: 1,
            margin: 0,
          },
          576: {
            items: 2,
            margin: 20,
          },
          992: {
            items: 3,
            margin: 30,
          },
        },
      })
    }
    if ($(".testimonials-slider").length) {
      $(".testimonials-slider").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        margin: 30,
        autoplay: true,
        smartSpeed: 700,
        autoplayTimeout: 6000,
        responsive: {
          0: {
            items: 1,
            margin: 0,
          },
          768: {
            items: 1,
          },
        },
      })
    }
    if ($(".fullpage-default").length) {
      var myFullpage = new fullpage(".fullpage-default", {
        licenseKey: " C7F41B00-5E824594-9A5EFB99-B556A3D5",
        anchors: ["slide01", "slide02", "slide03", "slide04", "slide05", "slide06", "slide07"],
        menu: "#nav",
        lazyLoad: true,
        navigation: true,
        navigationPosition: "right",
        scrollOverflow: true,
        responsiveWidth: 768,
        responsiveHeight: 600,
        responsiveSlides: true,
        afterLoad: (origin, destination, direction) => {
          if (destination.index === 0) {
            $(".header-top").addClass("header-white")
          } else {
            $(".header-top").removeClass("header-white")
          }
        },
      })
    }
    $(document)
      .on("click", ".navbar-toggle", () => {
        $(".navbar-collapse").slideToggle(300)
        return false
      })
      .on("click", ".navigation-menu > li > a", () => {
        $(".navbar-collapse").slideUp(300)
      })
      .on("click", ".next-section", () => {
        fullpage_api.moveSectionDown()
      })
    $(".facts-row").on("inview", (event, isInView) => {
      $(".count-number").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 1000,
              easing: "swing",
              step: function (now) {
                $(this).text(Math.ceil(now))
              },
            },
          )
        setTimeout(() => {
          $(".count-number").removeClass("count-number").addClass("counted")
        }, 1000)
      })
    })
    $(".skills-row").on("inview", function (event, isInView) {
      $(this).addClass("view")
    })
    $(document)
      .on("click", ".menu-trigger", () => {
        $("body").toggleClass("sidemenu-open")
      })
      .on("click", ".side-menu .navbar-nav li a", () => {
        $("body").removeClass("sidemenu-open")
      })
  })
})(window.jQuery, window, document)
;(($) => {
  // Preloader
  $(window).on("load", () => {
    $(".preloader").fadeOut()
  })

  // Services Carousel
  if ($(".services-list").length) {
    $(".services-list").owlCarousel({
      items: 3,
      loop: true,
      margin: 30,
      nav: true,
      dots: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    })
  }

  // Programming Languages Carousel initialization
  if ($(".languages-list").length) {
    $(".languages-list").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 3,
      margin: 30,
      autoplay: false,
      smartSpeed: 700,
      autoplayTimeout: 6000,
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        460: {
          items: 1,
          margin: 0,
        },
        576: {
          items: 2,
          margin: 20,
        },
        992: {
          items: 3,
          margin: 30,
        },
      },
    })
  }

  // Facts Carousel
  if ($(".facts-list").length) {
    $(".facts-list").owlCarousel({
      items: 1,
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 7000,
      smartSpeed: 700,
    })
  }

  // Gallery Carousel
  if ($(".gallery-list").length) {
    $(".gallery-list").owlCarousel({
      items: 3,
      loop: true,
      margin: 30,
      nav: true,
      dots: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    })
  }

  // Testimonials Carousel (if still needed)
  if ($(".testimonials-slider").length) {
    $(".testimonials-slider").owlCarousel({
      items: 1,
      loop: true,
      margin: 30,
      nav: true,
      dots: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    })
  }

  // Animation
  //   $(window).scroll(() => {
  //     $(".animate").each(function () {
  //       var elementTop = $(this).offset().top
  //       var elementBottom = elementTop + $(this).outerHeight()
  //       var viewportTop = $(window).scrollTop()
  //       var viewportBottom = viewportTop + $(window).height()

  //       if (elementBottom > viewportTop && elementTop < viewportBottom) {
  //         $(this).addClass("animated")
  //       }
  //     })
  //   })

  // Contact Form
  if ($("#ajax-contact").length) {
    $("#ajax-contact").submit((e) => {
      e.preventDefault()

      var name = $("#name").val()
      var email = $("#email").val()
      var message = $("#message").val()

      if (name && email && message) {
        $("#form-messages").html(
          '<div class="alert alert-success">Thank you for your message! I will get back to you soon.</div>',
        )
        $("#ajax-contact")[0].reset()
      } else {
        $("#form-messages").html('<div class="alert alert-danger">Please fill in all fields.</div>')
      }
    })
  }

  // Mobile Navigation
  $(".navbar-toggle").click(() => {
    $(".nav-box").toggleClass("active")
  })

  // Smooth Scrolling for Navigation Links
  $(".navigation-menu a").click((e) => {
    $(".nav-box").removeClass("active")
  })
})(window.jQuery)
