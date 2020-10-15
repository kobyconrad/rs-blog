// ================================
// Theme Options
// ================================
if (typeof themeConfig == "undefined") {
  themeConfig = {};
}

var ghosthunter_key = themeConfig.ghostSearchKey;

(function ($) {
	"use strict";
	
// =====================
// Koenig Gallery
// =====================

var images = document.querySelectorAll('.kg-gallery-image img');
images.forEach(function (image) {
	var container = image.closest('.kg-gallery-image');
	var width = image.attributes.width.value;
	var height = image.attributes.height.value;
	var ratio = width / height;
	container.style.flex = ratio + ' 1 0%';
});
 

// =====================
// Mobile-menu
// ===================== 	

 
// =====================
// Post-carousel
// ===================== 

$('.post-carousel').owlCarousel({
	dots:false,
	nav:false,
	margin:30,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});	


  new WOW().init();


 

// =====================
// fitvids
// =====================	
	$(".entry-content").fitVids();
// =====================
// highlightBlock
// =====================	
     document.querySelectorAll('pre code').forEach(function (block) {
        hljs.highlightBlock(block);
    });

// =====================
// Mailchimp
// ===================== 
    if ($(".mailchimp_subscribe").length > 0) {
     $(".subscribe-form.mailchimp_subscribe").attr("action", mailchimp_url);   
    }

// =====================
// Switch Color
// ===================== 
	var themeSwitch = document.getElementById('switch_theme');
	if(themeSwitch) {
		initTheme(); // if user has already selected a specific theme -> apply it
		themeSwitch.addEventListener('change', function(event){
    	resetTheme(); // update color theme
    });

    function initTheme() {
    	var darkThemeSelected = (localStorage.getItem('switch_theme') !== null && localStorage.getItem('switch_theme') === 'dark');
    	// update checkbox
    	themeSwitch.checked = darkThemeSelected;
			// update body data-theme attribute
			darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
    };

    function resetTheme() {
    	if(themeSwitch.checked) { // dark theme has been selected
    		document.body.setAttribute('data-theme', 'dark');
    		localStorage.setItem('switch_theme', 'dark');
    	} else {
    		document.body.removeAttribute('data-theme');
    		localStorage.removeItem('switch_theme');
    	} 
    };
	}
	 
  
// ================================
// Search
// ================================
 
  var searchHint = '';
  if (typeof themeConfig.searchHint !== 'undefined' && themeConfig.searchHint != '') {
    $('#ghost-search-field').attr('placeholder', themeConfig.searchHint);
  }

  var includeBodyInSearch = false;
  if (typeof themeConfig.includeBodyInSearch !== 'undefined' && themeConfig.includeBodyInSearch != '' && typeof themeConfig.includeBodyInSearch === "boolean") {
    includeBodyInSearch = themeConfig.includeBodyInSearch;
  }

  var searchField = $('#ghost-search-field').ghostHunter({
    results: '#gh-search-results',
	 info_template     : "<p>Posts found: {{amount}}</p>",
    onKeyUp: true,
    displaySearchInfo: true,
    zeroResultsInfo: true,
    includebodysearch: includeBodyInSearch,
    result_template: "<a id='gh-id-{{ref}}' class='gh-search-item' href='{{link}}'>  <h2 class='search-post-title'>{{title}}</h2> </a>",
    onComplete: function(results) {
      $('#gh-search-results').fadeIn();
    }
  });
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      searchField.clear();
      $('#ghost-search-field').val('').blur();
      $('#gh-search-results').fadeOut();
	  
    }
  });
  
  
  
  
  
  
  
  

}(jQuery));



 
   	

    
		
         
