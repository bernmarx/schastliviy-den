$(function () {

  $('.slider_inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  });
  $('.menu_btn').on('click', function () {
    $('.header_menu-list').slideToggle();
  });
});