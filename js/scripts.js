//on load modal
$(document).ready(function(){

  setTimeout(() => {
    // $("#myModal").modal('show');
    $("#freedomModal").modal('show');
  }, 1000)

});

//faq
$(".faq-collapse").on("show.bs.collapse", function () {
  $(this).prev().addClass("show");
});
$(".faq-collapse").on("hide.bs.collapse", function () {
  $(this).prev().removeClass("show");
});

// banner cta
$(".banner-cta").each(function () {
  $bannerHeight = $(this).attr("data-height");
  $(this).css("height", $bannerHeight);
});

$(function () {
  if ($(window).width() < 767) {
    // circular usage
    $('.card-usage').easyPieChart({
      size: 64,
      barColor: "#00A6CA",
      scaleLength: 0,
      lineWidth: 4,
      trackColor: "#F1F6FF",
      lineCap: "round",
      animate: 1000,
    });
  } else {
    // circular usage
    $('.card-usage').easyPieChart({
      size: 64,
      barColor: "#00A6CA",
      scaleLength: 0,
      lineWidth: 5.5,
      trackColor: "#F1F6FF",
      lineCap: "round",
      animate: 1000,
    });
  }
});

/* tooltip */
$(".tooltip-toggle").each(function () {
  var tooltip_trigger = $(this);
  var tooltipBoxId = tooltip_trigger.next();
  var tooltip_box = $(tooltipBoxId);
  var tooltip_box_arrow = $(".tooltip-box .tooltip-box__wraper:before");

  let calculatePosition = () => {
    let topPosition = tooltip_trigger.position().top;
    let leftPosition = tooltip_trigger.position().left;
    let elHeight = tooltip_trigger.height() * 2.2;
    let elWidth = tooltip_trigger.width() * 70 / 100;

    let windowWidth = $(document).width();
    let arrowPosition = (windowWidth - leftPosition) - 45;

    if ((leftPosition - elWidth) < 0) {
      tooltip_box.css({ "top": topPosition + elHeight, "left": leftPosition });
      $('head').append('<style>.tooltip-box .tooltip-box__wraper:before{left: ' + leftPosition + 'px;}</style>');
    } else {
      let finalLeft = leftPosition - elWidth;
      tooltip_box.css({ "top": topPosition + elHeight, "left": finalLeft });
      $('head').append('<style>.tooltip-box .tooltip-box__wraper:before{right:' + arrowPosition + 'px !important;}</style>');
    }
  }

  let calculatePositionMob = () => {
    let topPosition = tooltip_trigger.position().top;
    let leftPosition = tooltip_trigger.position().left;
    let elHeight = tooltip_trigger.height() * 2.2;
    let elWidth = tooltip_trigger.width() * 70 / 100;

    let windowWidth = $(document).width();
    let arrowPosition = (windowWidth - leftPosition) - 48;

    if ((leftPosition - elWidth) < 0) {
      tooltip_box.css({ "top": topPosition + elHeight, "left": leftPosition });
      $('head').append('<style>.tooltip-box .tooltip-box__wraper:before{left: ' + leftPosition + 'px;}</style>');
    } else {
      let finalLeft = leftPosition - elWidth;
      if (finalLeft > 160) {
        tooltip_box.css({ "top": topPosition + elHeight, "left": 160 });
        $('head').append('<style>.tooltip-box .tooltip-box__wraper:before{right:' + arrowPosition + 'px !important;left: auto;}</style>');
      } else {
        tooltip_box.css({ "top": topPosition + elHeight, "left": finalLeft });
        $('head').append('<style>.tooltip-box .tooltip-box__wraper:before{right:' + arrowPosition + 'px !important;left: auto;}</style>');
      }
    }
  }

  let showTooltip = () => {
    tooltip_box.removeClass("hide");
    tooltip_box.addClass("show");
  }

  let hideTooltip = () => {
    tooltip_box.removeClass("show");
    tooltip_box.addClass("hide");
  }

  tooltip_trigger.mouseover(function () {
    var newWindowWidth = $(window).width();
    if (newWindowWidth < 768) {
      calculatePositionMob();
    }
    else {
      calculatePosition();
    }
    showTooltip();
  });
  tooltip_trigger.mouseout(function () {
    hideTooltip();
  });
});

//our partners slider
$(".partners").slick({
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  pauseOnHover: true,
  accesibility: false,
  draggable: false,
  swipe: false,
  touchMove: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {

      },
    },
  ],
});

//account summary slider
function enableAccountSlider() {
  let targetSlide = 1;
  if (location.hash) {
    targetSlide = location.hash.split("_")[1];
  }
  $(".account-summary-slider").slick({
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: targetSlide - 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          speed: 600
        }
      }
    ]
  });
}

function disableAccountSlider() {
  $(".account-summary-slider").slick('unslick')
}

//account summary
$(".account-collapse").on("show.bs.collapse", function () {
  $(this).prev().addClass("show");
});
$(".account-collapse").on("hide.bs.collapse", function () {
  $(this).prev().removeClass("show");
});

// tabs redirect
var hash = location.hash.replace(/^#/, '').split('_')[0];
$tabsParent = $(".nav-tabs");
$panelParent = $(".tab-content");
$optionsParent = $(".custom-select-options");
if (hash) {
  $tabsParent.find(".nav-link ").removeClass("active");
  $('.nav-link[data-target="#' + hash + '"]').addClass("active");

  $tabsParent.find(".report-nav-item button").removeClass("active");
  $('.report-nav-item button[data-target="#' + hash + '"]').addClass("active");

  $panelParent.find(".tab-pane").removeClass("active show");
  $('.tab-pane[id="' + hash + '"]').addClass("active show");

  $panelParent.find(".tab-panel").removeClass("active");
  $('.tab-panel[id="' + hash + '"]').addClass("active");
  //checkAccountVisibility();

  targetOption("#" + hash, $optionsParent);
}

//tooltip funciton
function addTooltip() {
  $(".tooltip-toggle").each(function () {
    var tooltip_trigger = $(this);
    var tooltipBoxId = tooltip_trigger.next();
    var tooltip_box = $(tooltipBoxId);
    var tooltip_box_arrow = $(".tooltip-box .tooltip-box__wraper:before");

    let calculatePosition = () => {
      let topPosition = tooltip_trigger.position().top;
      let leftPosition = tooltip_trigger.position().left;
      let elHeight = tooltip_trigger.height() * 2.2;
      let elWidth = tooltip_trigger.width() * 70 / 100;

      let windowWidth = $(document).width();
      let arrowPosition = (windowWidth - leftPosition) - 45;

      if ((leftPosition - elWidth) < 0) {
        tooltip_box.css({ "top": topPosition + elHeight, "left": leftPosition });
        $('head').append('<style>.tooltip-box .tooltip-box__wraper:before{left: ' + leftPosition + 'px;}</style>');
      } else {
        tooltip_box.css({ "top": topPosition + elHeight, "left": (leftPosition - elWidth) });
        $('head').append('<style>.tooltip-box .tooltip-box__wraper:before{right:' + arrowPosition + 'px !important;}</style>');
      }
    }

    let showTooltip = () => {
      tooltip_box.removeClass("hide");
      tooltip_box.addClass("show");
    }

    let hideTooltip = () => {
      tooltip_box.removeClass("show");
      tooltip_box.addClass("hide");
    }

    tooltip_trigger.mouseover(function () {
      calculatePosition();
      showTooltip();
    });
    tooltip_trigger.mouseout(function () {
      hideTooltip();
    });
  })
};

//revert bar
$(".revert-bar .close-button").click(function () {
  $(this).parents().eq(1).hide("fast");
});

$(".reset-field").next("input").on('keyup change', function () {
  $(this).prev(".reset-field").show("fast");
  if ($(this).val() == '') {
    $(this).prev(".reset-field").hide("fast");
  }
});

// coupon code form
$(".reset-field").click(function () {
  $(this).next("input").val('');
  $(this).hide("fast");
});

$(document).ready(function () {
  $(window).on("resize", function (e) {
    checkScreenSize();
  });

  checkScreenSize();

  function checkScreenSize() {
    var newWindowWidth = $(window).width();
    if (newWindowWidth < 992) {
      $(".CouponFormToggle").click(function () {
        let couponPopup = $(this).data("target");

        let tabId = "#" + $(this).parents('.tab-pane').attr("id");

        let planPrice = $('button[data-target="' + tabId + '"]').find(".discount-price .ammountMob").text();

        let subtotalVal = parseInt(planPrice.split(',').join(''));

        $(couponPopup).find(".subtotal .subtotal-ammount").text(subtotalVal);
      });
    }
    else {
      $(".CouponFormToggle").click(function () {
        let couponPopup = $("#" + $(this).attr("popup-link"));

        let planPrice = couponPopup.find(".plan-price-ammount .ammount").text();
        let disountedPrice = couponPopup.find(".coupon-discount .discount-ammount").text();

        let subtotalVal = parseInt(planPrice.split(',').join(''));

        couponPopup.find(".subtotal .subtotal-ammount").text(subtotalVal);
      });
    }
  }
});

function howItWorks() {

  introJs().setOptions({
    doneLabel: 'TAKE ME TO MY DASHBOARD',
    nextLabel: 'Next',
    hidePrev: true,
    showStepNumbers: true,
    showBullets: true,
    showProgress: false,
    steps: [
      {
        element: document.querySelector('.simulator-section'),
        intro: 'Your CIBIL Score and last refresh status',
        position: 'right'
      },
      {
        element: document.querySelector('.key-highlights'),
        intro: 'Factors affecting your CIBIL Score'
      },
      {
        element: document.querySelector('.nav-list'),
        intro: 'Explore all available CIBIL features'
      },
      {
        element: document.querySelector('.report-cta'),
        intro: 'View & download your CIBIL Report'
      }
    ]
  })
    .onchange(function (targetElement) {
      let stepNo = $('.introjs-helperNumberLayer').text();
      $('.steps .stepNumber').text(parseInt(stepNo) + 1);
    })
    .start();
  let totalSteps = $('.introjs-bullets ul').children().length;
  let stepNumber = $('.introjs-helperNumberLayer').text();
  $(".introjs-tooltip").prepend('<p class="steps"><span class="stepNumber">' + stepNumber + '</span><span class="totalSteps">/' + totalSteps + '</span></p>');
}

function howItWorksMob() {

  introJs().setOptions({
    doneLabel: 'TAKE ME TO MY DASHBOARD',
    nextLabel: 'Next',
    hidePrev: true,
    showStepNumbers: true,
    showBullets: true,
    showProgress: false,
    steps: [
      {
        element: document.querySelector('.simulator-section'),
        intro: 'Your CIBIL Score and last refresh status',
        position: 'right'
      },
      {
        element: document.querySelector('.key-highlights'),
        intro: 'Factors affecting your CIBIL Score'
      },
      {
        element: document.querySelector('header'),
        intro: 'Explore all available CIBIL features'
      },
      {
        element: document.querySelector('.report-cta'),
        intro: 'View & download your CIBIL Report'
      }
    ]
  })
    .onchange(function (targetElement) {
      let stepNo = $('.introjs-helperNumberLayer').text();
      $('.steps .stepNumber').text(parseInt(stepNo) + 1);
    })
    .start();
  $('header').css("position", "inherit");
  let totalSteps = $('.introjs-bullets ul').children().length;
  let stepNumber = $('.introjs-helperNumberLayer').text();
  $(".introjs-tooltip").prepend('<p class="steps"><span class="stepNumber">' + stepNumber + '</span><span class="totalSteps">/' + totalSteps + '</span></p>');
}

// countdown banner
if ($('.countdown-timer').is(":visible")) {
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
    let today = new Date(),
      dd = $('.countdown-timer').data("day"),
      mm = $('.countdown-timer').data("month"),
      yyyy = $('.countdown-timer').data("year");
    expireyDate = mm + "/" + dd + "/" + yyyy;
    today = mm + "/" + dd + "/" + yyyy;

    const countDown = new Date(expireyDate).getTime(),
      x = setInterval(function () {

        const now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById("days").innerText = String(Math.floor(distance / (day))).padStart(2, '0'),
          document.getElementById("hours").innerText = String(Math.floor((distance % (day)) / (hour))).padStart(2, '0'),
          document.getElementById("minutes").innerText = String(Math.floor((distance % (hour)) / (minute))).padStart(2, '0'),
          document.getElementById("seconds").innerText = String(Math.floor((distance % (minute)) / second)).padStart(2, '0');

        if (distance < 0) {
          clearInterval(x);
          document.getElementById("days").innerText = "00",
            document.getElementById("hours").innerText = "00",
            document.getElementById("minutes").innerText = "00",
            document.getElementById("seconds").innerText = "00";
        }
        //seconds
      }, 0)
  }());
}

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
  return false;
};

// show edit information popup
var editInfo = getUrlParameter('editInfo');
if (editInfo == "show") {
  editOInfoToggle();
}

//Repayment slider
$('.repayment-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  nextArrow: "<button class='nextArrow'><svg width='17' height='29' viewBox='0 0 17 29' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2 2.07227L15 14.7341L2 27.396' stroke='#2C2C2C' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></svg></button>",
  prevArrow: "<button class='prevArrow'><svg width='17' height='29' viewBox='0 0 17 29' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M15 27.3237L2 14.6619L15 2.00003' stroke='#2C2C2C' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></svg></button>",
  responsive: [
    {
      breakpoint: 767.68,
      settings: {
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1,
        infinite: true,
      }
    }
  ]
});

$('.thankYouBtn').click(function () {
  $(this).parents('.modal').modal('toggle');
});

// animated tabs
function selectTab(element) {
  let mainParent = $(element).parents('.tabs-vertical-icons');

  $(element).siblings().removeClass("selected")
  $(element).addClass('selected')
  $(element).parents('.custom-select-input').find('.custom-select-value').html($(element).html())

  $(mainParent).find('.tab-pane').removeClass('show active');
  $($(element).data('target')).addClass('show active');

  $(mainParent).find('.nav-link').removeClass('active');
  $(mainParent).find('.nav-link[data-target="' + $(element).data('target') + '"]').addClass('active');

  if ($(mainParent).hasClass('animated-tabs')) {
    let currentTabParent = $(mainParent).find('.nav-tabs');
    animateTabs(currentTabParent);
  }
}
function selectOption(element) {
  $(element).toggleClass('opened')
  $(element).find('.custom-select-options').toggle('fast');
}
function animateTabs(element) {
  let activeTab = $(element).find('.nav-link.active');
  let activeTabPosition = $(activeTab).position().left;
  let activeTabWidth = $(activeTab).outerWidth();
  $(element).addClass('animated-tab');
  $('head').append('<style>.animated-tab:before{left:' + activeTabPosition + 'px !important;width:' + activeTabWidth + 'px !important;}</style>');
}
let tabsParent = $('.animated-tabs').find('.nav-tabs');
$(tabsParent).each(function () {
  animateTabs(this);
  $('button[data-toggle="tab"]').on('shown.bs.tab', function (event) {
    let currentTab = event.target; // newly activated tab
    let currentTabParent = $(currentTab).parents('.animated-tabs').find('.nav-tabs');
    animateTabs(currentTabParent);
  });
});

function targetOption(targetTab, optionsList) {
  $(optionsList).find('span').removeClass("selected");
  $(optionsList).find('span[data-target="' + targetTab + '"]').addClass("selected");

  let optionHTML = $('.selected');

  $(optionsList).parents('.custom-select-input').find('.custom-select-value').html(optionHTML.html());
}

let dropdownTabs = $('.hasDropdown').find('.nav-tabs');
$(dropdownTabs).each(function () {
  $('button[data-toggle="tab"]').on('shown.bs.tab', function (event) {
    let currentTab = event.target; // newly activated tab
    let currentTabParent = $(currentTab).parents('.hasDropdown');
    let targetTab = $(currentTab).data('target');

    let optionsList = $(currentTabParent).find('.custom-select-options');
    targetOption(targetTab, optionsList);
  })
});


//scroll to top
var scrollToTop = $('.scrollToTop');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    scrollToTop.fadeIn('medium');
  } else {
    scrollToTop.fadeOut('medium');
  }
});

scrollToTop.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

//score comparison
function refreshComparison() {
  let percentBox = $('.comparison-graph .graph-bar').find('.percent');
  let scoreBox = $('.graph-bar-pointer');
  let percentText = $('.score-percent-text .percent');

  //assign values
  $(percentBox).each(function () {
    let scoreWidth = $(this).data('width');
    let scorePercent = $(this).data('percent');

    $(this).css({ 'width': scoreWidth });
    $(this).html('<span>' + scorePercent + '%</span>');
  });

  //find range
  function findRange(percentage, section) {
    let graphBar = $(section).parent().find(".graph-bar");
    let percentBoxes = $(graphBar).find('.percent');

    $(percentBoxes).each(function () {
      let low = $(this).data("low");
      let high = $(this).data("high");

      if (percentage > low && percentage < high) {
        $(this).find('span').text('?');
        $(this).addClass('text-center');

        let boxCenter = ((low + high) / 2) - 0.25;
        $(section).animate(
          {
            left: boxCenter + '%',
          },
          {
            duration: 2000,
            easing: "swing",
          }
        );

      }
    });
  }

  //position score pointer
  let graphBarPointer = $('.graph-bar-pointer');
  let poniterBoxCenter = $(graphBarPointer).innerWidth() / 2;

  $(graphBarPointer).find('.graph-bar-pointer__wraper').css({ 'left': -(poniterBoxCenter + 4) })

  $(graphBarPointer).css({ 'left': 0 + '%' });

  $(scoreBox).each(function () {
    let scoreElement = $(this).find('.score');
    let comparedScore = $(scoreElement).data('score');
    let lowestScore = 300;
    let highestScore = 900;
    let pointerBoxPosition = Math.ceil((comparedScore - lowestScore) / (highestScore - lowestScore) * 100);
    $(this).find(scoreElement).text(comparedScore);

    $({ score: lowestScore }).animate(
      { score: comparedScore },
      {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          $(scoreElement).text((now) | 0);
        },
      }
    );

    //find range
    findRange(pointerBoxPosition, this);

    //Display percent score
    /* $({ perc : 0 }).animate(
      { perc : pointerBoxPosition },
      {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          $(percentText).text((now) | 0);
        },
      }
    ); */

  });
}
if ($('.comparison-graph')) {
  refreshComparison();
}

// test imonials owl slider/

$('.testimonials-carousel').owlCarousel({

  loop: true,

  margin: 10,

  nav: false,

  dots: true,

  items: 1,

  responsive: {

    0: {

      items: 1

    },

    600: {

      items: 1

    },

    1000: {

      items: 1

    }

  }

})


//close score simulator error

function closeError() {

  var element = document.getElementById("error-message-section");
  element.style.display = 'none';
}
