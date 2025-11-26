$(function () {
  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();
    if (sct > 1) {
      $("#header").addClass("on");
    } else {
      $("#header").removeClass("on");
    }
  });

  $("#header .gnb").on("mouseover", function () {
    $("#header").addClass("gnb_enter");
  });

  $("#header .gnb").on("mouseleave", function () {
    $("#header").removeClass("gnb_enter");
  });

  $("#header .sitemap_btn button").on("click", function () {
    $("#header").toggleClass("gnb_enter");
  });
});

$(function () {
  const main_visual_slide = new Swiper(".main_visual_slide", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
  const main_service_slide = new Swiper(".main_service_slide", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    speed: 500,
    allowTouchMove: false,
    navigation: {
      nextEl: "#main_service .slide_arrow_next button",
      prevEl: "#main_service .slide_arrow_prev button",
    },

    pagination: {
      el: "#main_service .slide_page_line",
      type: "progressbar",
    },
  });
  const main_recruit_slide = new Swiper(".main_recruit_slide", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    speed: 500,
    allowTouchMove: false,
    navigation: {
      nextEl: "#main_recruit .slide_arrow_next button",
      prevEl: "#main_recruit .slide_arrow_prev button",
    },

    pagination: {
      el: "#main_recruit .slide_page_line",
      type: "progressbar",
    },
  });
  const main_partner_top_slide = new Swiper(".main_partner_top_slide", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,

    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },

    speed: 8e3,
    freeMode: true,
    freeModeMomentum: false,
  });
  const main_partner_bottom_slide = new Swiper(".main_partner_bottom_slide", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,

    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      reverseDirection: true,
    },

    speed: 8e3,
    freeMode: true,
    freeModeMomentum: false,
  });
});
