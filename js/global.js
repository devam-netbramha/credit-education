$(function () {
  $(".language-selector").click(function (e) {
    $(".language-selector, .language-list").toggleClass("active");
    $(".language-list").toggle("medium");
    if ($(".hamburger").hasClass("opened")) {
      $(".hamburger, .mobile-nav-list").removeClass("opened");
      $(".mobile-nav-list").hide("medium");
      $(".overlay").addClass("opened");
    } else {
      $(".overlay").toggleClass("opened");
    }
  });
  $(document).click(function(){
    $(".language-list").hide("medium");
    $(".overlay").removeClass("opened");
    $(".mobile-nav-list").hide("medium").removeClass("opened");
    $(".hamburger").removeClass("opened");
  });
  $(".language-list, .language-selector, .hamburger, .overview-toggle").click(function(e){
    e.stopPropagation();
  });
  $(".language-list .langauge-item").click(function(e){
    $(".language-list").toggle("medium");
  });
  $(".langauge-item").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    $(".language-selector span").text($(this).text());
    setTimeout(function () {
      $(".language-selector, .language-list").removeClass("active");
      $(".language-list").hide("medium");
      $(".overlay").removeClass("opened");
    }, 100);
  });
  $(".hamburger").click(function () {
    if ($(".language-selector").hasClass("active")) {
      $(".language-selector, .language-list").removeClass("active");
      $(".language-list").hide("medium");
    } else {
      $(".overlay").toggleClass("opened");
    }
    $(this).toggleClass("opened");
    $(".mobile-nav-list").toggleClass("opened");
    $(".mobile-nav-list").toggle("medium");
    if ($(".hamburger").hasClass("opened")){
      $(".overlay").addClass("opened");
    }
  });
  $(".overview-list .toggle-button").click(function (e) {
    e.preventDefault();
    $(".overview-list").toggleClass("opened");
    $(this).parent().next(".sublist").toggle("medium");
  });

  $('.mobile-nav-list .sublist-item').click(function(){
    $('.mobile-nav-list').hide('fast').removeClass('opened');
    $('.hamburger').removeClass('opened');
    $(".overlay").toggleClass('opened');
  });

  // animated simulator
  $(".simulator:not(.no-score-simulator) .score-bar").each(function () {
    updateScore(0);
  });
  function updateScore($initialScore) {
    $(".simulator:not(.no-score-simulator) .score-bar").each(function () {
      var $pointer = $(this).find(".score-pointer .pointer-image");
      var $val = $(this).find(".cibil-score");

      /* console.log($val.text()); */

      var oldperc = parseInt($val.text(), 10);
      var perc = oldperc - 300;
      var $outputPerc = $(".outputPerc");

      $({ p: $initialScore }).animate(
        { p: perc },
        {
          duration: 1000,
          easing: "swing",
          step: function (p) {
            $pointer.css({
              transform:
                "rotate(" + Math.ceil(((p * 100) / 900) * 2.69) + "deg)",
            });
            $val.text((p + 300) | 0);
          },
        }
      );
    });
  }

  // $('.custom-select-input').click(function(){
  //     $(this).toggleClass('opened')
  // })
  // $('.custom-select-options span').click(function(){
  //     $(this).siblings().removeClass("selected")
  //     $(this).addClass('selected')
  //     $(this).parents('.custom-select-input').find('.custom-select-value').text($(this).text())
  //     $('#loantype').val($(this).text())
  // })
  // $('.report-nav-link').click(function(){
  //   $('.report-nav-link').removeClass('active');
  //   $(this).addClass('active');
  //   $('.report-content .tab-panels').removeClass('active');
  //   $($(this).data('target')).addClass('active')
  //   $('.custom-select-options span').removeClass("selected");
  //   let selectElement = $('.custom-select-options span[data-target="'+$(this).data('target')+'"]')
  //   selectElement.addClass('selected')
  //   $('#report-select-value').html(selectElement.html())
  //   checkAccountVisibility()
  //   resetCompare()
  // })

  $('.report-nav-item').click(function () {
    $(this).siblings().children().removeClass('active');
    $(this).children().addClass('active');
    $($(this).children().data('target')).siblings().removeClass('active')
    $($(this).children().data('target')).addClass('active')
    // checkAccountVisibility()
    // resetCompare()
  })

  // account information sidebar
  $('.report-table .account-list li').click(function () {
    $('.aSidebar-card').addClass('show');
    $('.aSidebar-overlay').addClass('show');
    $('body').addClass('modal-open');
  })
  $('.aSidebar-overlay').click(function () {
    $('.aSidebar-card').removeClass('show');
    $('.aSidebar-overlay').removeClass('show');
    $('body').removeClass('modal-open');
  })
  $('.close-aSidebar').click(function () {
    $('.aSidebar-card').removeClass('show');
    $('.aSidebar-overlay').removeClass('show');
    $('body').removeClass('modal-open');
  })

  // credit report your account carousel
  var BannerTextCount = 0;
  let interval = null;

  $('.donut-chart-legends-item').hover(function (event) {
    console.log($(event.target).find('.donut-chart-legends-item-hover').children())
    const titleElements = $(event.target).find('.donut-chart-legends-item-hover').children();

    interval = setInterval(function () {
      BannerTextCount = BannerTextCount + 1;
      if (BannerTextCount > titleElements.length - 1) {
          BannerTextCount = 0;
      }
      titleElements.removeClass('active')
      titleElements.eq(BannerTextCount).addClass('active')

    }, 2000);
  }, function () {
    if (interval) {
      clearInterval(interval)
    }
  })

//tabview
  $('.enquiry-nav-item').click(function(){
    // $('.enquiry-nav-link').removeClass('active');
    $(this).siblings().children().removeClass('active');
    $(this).children().addClass('active');

    $($(this).children().data('target')).siblings().removeClass('active')
    $($(this).children().data('target')).addClass('active')
  })

  $('.toggle-popup').click(function(e){
    e.preventDefault();
    let id = $(this).data('target');
    $('#'+id).addClass('opened')
  })
  $('.popup-agree').click(function(e){
    e.preventDefault()
    $(this).parents('.popup').addClass('success')
  })
  $('.close-popup, .go-back').click(function(){
    $(this).parents('.popup').removeClass('opened success')
  })
  $('#optionsAdded').change(function(){
    if($(this).val() != ""){
      // $('.smiluate-now-cta').removeClass('disabled')
    }
    else{
      // $('.smiluate-now-cta').addClass('disabled')
    }
  })


  // smooth scroll
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    if ($.attr(this, 'href') == '#'){
      location.reload();
    }
    else{
      $('.hamburger.opened').click()
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top - 80
      }, 500);
    }
  });

  enableAccountSlider();

  $(document).click(function() {
    var container = $(".custom-select-input");
    if (!container.is(event.target) && !container.has(event.target).length) {
        container.find('.custom-select-options').hide('fast');
        container.removeClass('opened');
        container.find('.searchbox').slideUp('fast');
    }
  });

  $('.custom-checkbox svg').click(function(){
    let checkBoxes = $(this).siblings("input[type=checkbox]");
    checkBoxes.prop("checked", !checkBoxes.prop("checked"));
  })

  $('.filter-label').click(function(){
    $(this).siblings('.filter-values').toggle('medium')
    $(this).toggleClass('opened')
  })

  $('input[type="range"]').change(function(){
    console.log($(this).val())
    $(this).parent().siblings('.range-slider-label').find('span:last-of-type b').text('₹'+parseInt($(this).val()).toLocaleString('en-IN'))
  })

  $('.sort-component li').click(function(){
    let reverse = false
    if($(this).attr('reverse')){
      reverse = true
      $(this).removeAttr('reverse')
    }
    else{
      $(this).attr('reverse',true)
    }
    sortData($(this), $(this).attr('target'), reverse)
  })

  $('.filter-sort-item .filter-value input[type=radio]').change(function(){
    console.log('rr')
    let reverse = false
    if($(this).attr('reverse')){
      reverse = true
    }
    sortData($(this), $(this).val(), reverse)
  })

})
function customSelectInput(element){
  $(element).toggleClass('opened')
  $(element).find('.custom-select-options').toggle('fast');
}
function checkSearchbox(element){
  //searchbox
  let searchbox = $(element).parents('.custom-select-input').find('.searchbox');
  if(searchbox){
    $(searchbox).slideToggle('fast');
  }
}
function customSelectInputSearch(element){
  $(element).parents('.custom-select-input').toggleClass('opened')
  $(element).parents('.custom-select-input').find('.custom-select-options').toggle('fast');
  checkSearchbox(element);
}
function customSelectOptionSearch(element){
  $(element).siblings().removeClass("selected")
  $(element).addClass('selected')
  $(element).parents('.custom-select-input').find('.custom-select-value').text($(element).text())
  /* $(element).parents('.custom-select-input').find('.custom-select-value').addClass('value-selected') */
  $(element).parents('.custom-select-options').toggle('fast')
  $(element).parents('.custom-select-input').removeClass('opened')
  checkSearchbox(element)
  $(element).parents('.custom-select-input').parents('.form-group').find('.resetSearch').fadeIn('fast');
  $(element).parents('.score-comparison').find('.location').text($(element).text());
}
function resetSearch(element){
  $(element).fadeOut('fast');
/*   $(element).parents('.form-group').find('.custom-select-value').removeClass('value-selected') */
  $(element).parents('.form-group').find('.custom-select-value').text('All of India');
  $(element).parents('.score-comparison').find('.location').text('All of India');
  $(element).parents('.form-group').find('.selected').removeClass('selected');
}
function searchQuery(element){

}
function customSelectOption(element){
  if(!$(element).hasClass('selected') && $(element).hasClass('valueTarget')){
    $(element).parents('.options-container').find('.input-currency').val('')
    $(element).parents('.options-container').find('.loanLimitMessage').show('fast')
    $('.scenario-cta .smiluate-now-cta').addClass('disabled');
  }
  let min = $(element).attr('min')
  let max = $(element).attr('max')
  if (typeof min !== 'undefined' && min !== false && typeof max !== 'undefined' && max !== false) {
    $(element).parents('.options-container').find('.loanLimitMessage').text('Min '+parseInt(min).toLocaleString('en-IN')+' to Max '+parseInt(max).toLocaleString('en-IN'))
    $(element).parents('.options-container').find('.input-currency').attr({'min': min, 'max': max})
  }
  $(element).siblings().removeClass("selected")
  $(element).addClass('selected')
  $(element).parents('.custom-select-input').find('.custom-select-value').text($(element).text())
  $(element).parents('.custom-select-input').find('.custom-select-value').removeClass('placeholder')
  /* $(element).parents('.custom-select-input').find('.custom-select-value').addClass('value-selected') */
  $('#loantype').val($(element).text())
}
function customSelectTab(element){
  $(element).siblings().removeClass("selected")
  $(element).addClass('selected')
  $(element).parents('.custom-select-input').find('.custom-select-value').html($(element).html())
  $('.report-content .tab-panel').removeClass('active');
  $($(element).data('target')).addClass('active');
  $('.report-nav-link').removeClass('active');
  $('.report-nav-link[data-target="'+$(element).data('target')+'"]').addClass('active');
  checkAccountVisibility();
  resetCompare();
}
function closeScenario(element){
    let parentElement = $(element).parents('.scenario')
    let optionValue = parentElement.find('.option-card:visible').attr('type')
    let value = $('#optionsAdded').val();
    $('#optionsAdded').val(value.replace(optionValue+",","")).trigger('change');
    parentElement.addClass('blank')
    parentElement.find('.option-card').fadeOut(600)
    setTimeout(function(){
      parentElement.find('.option-card').remove()
      parentElement.find('.scenario-options').fadeIn()
    },500)
    parentElement.removeClass('closed')
    $(element).parents('.scenario-list').addClass('hasBlank');
}
function minimizeScenario(element){
    let parentElement = $(element).parents('.scenario')
    $(element).parents('.scenario-header').toggleClass('closed')
    $(element).parents('.scenario-header').find('.scenario-heading').fadeToggle("fast");
    parentElement.find('.scenario-body').slideToggle();
}
function chooseAccount(element){
    let parentElement = $(element).parents('.options-container')
    if(parentElement.find('[name=chooseAccountRadio]:checked').val() == 'chooseaccount'){
        parentElement.find('.chooseAccount-wrapper').addClass('active')
        parentElement.find('.input-currency').attr('required','required')
        parentElement.find('.input-currency').attr('onchange','checkFilled()')
    }
    else{
        parentElement.find('.chooseAccount-wrapper').removeClass('active')
        parentElement.find('.input-currency').removeAttr('required')
        parentElement.find('.input-currency').removeAttr('onchange')
    }
    checkFilled()
}

function showAllEnquiries(element){
  $(element).parent().toggleClass('expanded')
}

function checkAccountVisibility(){
  if($('#account').is(':visible') && $('.account-summary-slider.slick-initialized').length < 1 ){
    enableAccountSlider()
  }
  else{
    $('.account-summary-slider.slick-initialized').length && !($('#account').is(':visible')) > 0 ? disableAccountSlider() : '';
  }
}

function resetCompare(){
  $('.compare-offer-header').removeClass('show activated')
  $('.compare-offer-footer').fadeOut('fast');
  $('.compare-offer-footer .compare-list > .compare-tab').html('');
  $('.offers-card').removeClass('selected');
  $('.offer-card-list').removeClass('comparing')
  $('.offers-card .offer-cta .cibil-link').attr('onclick','addToCompare(this)');
}

function upgradePlan(element){
  $('.upgrade-plan-cta').show("fast");
  $('.scenario-cta .smiluate-now-cta').addClass('disabled');
  $('.scenario-cta .add-scenario').text('Reset Simulation');
  $('.scenario-cta .add-scenario').addClass('reset-scenario').removeClass('add-scenario');
  $('.scenario-cta .reset-scenario').attr("onclick", "resetScenario()");
  $('.scenario-cta .reset-scenario, .scenario-cta .add-scenario').show()
}

function toggleShrink(){
  $('.concent-text').toggleClass('shrink')
}

function editOInfoToggle(){
  resetCompare()
  $('.loan-offer-js').toggleClass('edit');
}

function submitEditInfo(){
  resetCompare()
  $('.loan-offer-js').toggleClass('edit');
}

function toggeSortFilter(){
  $('.offers-container').toggleClass('show-sort-filter')
}

function sortData(element, target, reverse){
  let offers = $(element).parents('.offers-container').find('.offer-card-list .offers-card').get();
  console.log('offers', offers)
  offers.sort((a, b) => {
    let nameA, nameB;
    if(target == 'partner' || target == "type"){
      nameA = $(a).attr(target).toUpperCase();
      nameB = $(b).attr(target).toUpperCase();
    }
    else{
      nameA = parseInt($(a).attr(target).replace(/\D/g,''));
      nameB = parseInt($(b).attr(target).replace(/\D/g,''));
    }
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })
  if(reverse){
    offers.reverse()
  }
  $(offers).each(function(i,e){
    $(this).css('order',i)
  })

}

const urlParams = new URLSearchParams(window.location.search);
const selectedTabId = urlParams.get('selected-tab');
document.getElementById(selectedTabId)?.click();

$('.podcast__chips .item').click(function () {
  $('.podcast__chips .item').removeClass('active')
  $(this).addClass('active');
})



//sorting & filter dropdown
$(function () {
  $(".sorting-click").click(function (e) {
    $(".sorting-click, .sorting-drop").toggleClass("active");
    $(".sorting-drop").toggle("medium");
  });
  $(document).click(function(){
    $(".sorting-drop").hide("medium");
    $(".overlay").removeClass("opened");
  });
  $(".sorting-drop, .sorting-click, .hamburger, .overview-toggle").click(function(e){
    e.stopPropagation();
  });
  $(".sorting-drop .sorting-item").click(function(e){
    $(".sorting-drop").toggle("medium");
  });
  $(".cibil-button").click(function () {
    $(this).parent().find('sorting-click').removeClass("active");
    setTimeout(function () {
      $(".sorting-click, .sorting-drop").removeClass("active");
      $(".sorting-drop").hide("medium");
      $(".overlay").removeClass("opened");
    }, 100);
  });

  $(".filter-click").click(function (e) {
    $(".filter-click, .filter-drop").toggleClass("active");
    $(".filter-drop").toggle("medium");
  });
  $(document).click(function(){
    $(".filter-drop").hide("medium");
    $(".overlay").removeClass("opened");
  });
  $(".filter-drop, .filter-click, .hamburger, .overview-toggle").click(function(e){
    e.stopPropagation();
  });
  $(".filter-drop .filter-item").click(function(e){
    $(".filter-drop").toggle("medium");
  });
  $(".cibil-button").click(function () {
    $(this).parent().find('filter-click').removeClass("active");
    setTimeout(function () {
      $(".filter-click, .filter-drop").removeClass("active");
      $(".filter-drop").hide("medium");
      $(".overlay").removeClass("opened");
    }, 100);
  });
});