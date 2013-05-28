"use strict";

// Global bools are cool!
var blogToggle = false; 
var transitioning = false;
var developer_page = false;
var owners_page = false;
var mobile = false;

var date = new Date();
var month, monthNum = date.getMonth();
var year = date.getFullYear();

if (monthNum === 0) month = "January";
else if (monthNum == 1) month = "February";
else if (monthNum == 2) month = "March";
else if (monthNum == 3) month = "April";
else if (monthNum == 4) month = "May";
else if (monthNum == 5) month = "June";
else if (monthNum == 6) month = "July";
else if (monthNum == 7) month = "August";
else if (monthNum == 8) month = "September";
else if (monthNum == 9) month = "October";
else if (monthNum == 10) month = "November";
else if (monthNum == 11) month = "December";

$(document).ready(function()
{
    mobile = (screen.width <= 480);

    // Navigation Bar.
    var $nav = $('nav');
    var $about = $('.about');
    var $calendar = $('.calendar');
    var $locations = $('.locations');
    var $menu = $('.menu');
    var $contact = $('.contact');
    var $blog = $('.blog');
    var $navArrow = $('#nav_arrow');

    // Main Pages.
    var $aboutPage = $('#about_page');
    var $calendarPage = $('#calendar_page');
    var $locatationPage = $('#location_page');
    var $menuPage = $('#menu_page');
    var $contactPage = $('#contact_page');

    // About Page Navigation.
    var $rightButtons = $('.right_buttons');
    var $ourCoffee = $('#our_coffee');
    var $ourFood = $('#our_food');
    var $ourAtmosphere = $('#our_atmosphere');
    var $ourBuilding = $('#our_building');
    var $aboutArrow = $('#about_arrow');

    // About Pages.
    var $aboutPages = $('.about_pages');
    var $ourCoffeePage = $('#our_coffee_page');
    var $ourFoodPage = $('#our_food_page');
    var $ourAtmospherePage = $('#our_atmosphere_page');
    var $ourBuildingPage = $('#our_building_page');

    // Menu Page.
    var $foodButton = $("#food_button");
    var $beverageButton = $('#beverage_button');
    var $otherButton = $('#other_button');
    var $mainMenuImg = $('#main_menu_img')
    var $foodPage = $("#food_page");
    var $beveragePage = $("#beverage_page");
    var $otherPage = $("#other_page");

    // Img.
    var $mainImg = $('#main_img');

    var $canvasDiv = $('#canvas_div');
    var $overlay = $('#overlay');
    var $blogiframe = $('#blog_iframe');

    $('#date').html(month + ' ' + year);

    // Document click event to remove welcome processing animation.
    $('#overlay h2 span').click(function()
    {
        $('body').css({
            'background-color': 'rgba(52, 73, 94,1.0)'
        });
        $overlay.add($canvasDiv).fadeOut();
        $blog
            .hide()
            .delay(75)
            .fadeIn();  
        $nav.slideDown(300);  
        
        if (!$(this).is('.blog'))
            $navArrow.fadeIn();

        $(this).off('click');    
    }); 

    $blog.click(function()
    {
        // Move the blog out.
        if (blogToggle == false)
        {
            if (mobile == false)
            {
                $rightButtons
                    .animate({'left': '437px', 'background-color': 'rgba(0,0,0,0.8'}, 300);
                $aboutArrow
                    .fadeOut()
                    .animate({'left': '418px'});        
                $blogiframe
                    .show()
                    .animate({'width': '700px'}, 300);
                $blog
                    .animate({'right': '705px'}, 300)
                    .html('> Blog');
            }

            blogToggle = true;
        }     

        // Move the blog in.
        else
        {
            if (mobile == false)
            {
                $rightButtons
                    .animate({'left': '67%'}, 300);
                $aboutArrow
                    .fadeIn()
                    .animate({'left': '896px'}); 
                $blogiframe
                    .animate({'width': '0px'}, 300);
                $blog
                    .animate({'right': '10px'}, 300)
                    .html('< Blog');
            }

            blogToggle = false;
        }
    });

    /****************
    Click events to change main pages and move arrow below top nav bar.
    *****************/
    $about.click(function()
    {
        if (blogToggle)
            $blog.trigger('click');
        $navArrow
            .animate({'left': '80px'}, 200);
        $calendarPage
            .add($locatationPage)
            .add($menuPage)
            .add($contactPage)
            .fadeOut();
        $aboutPage.fadeIn();   
    });

    $calendar.click(function()
    {
        if (blogToggle)
            $blog.trigger('click');
        $navArrow.animate({
            'left': '180px'
        }, 200);
        $aboutPage
            .add($locatationPage)
            .add($menuPage)
            .add($contactPage)
            .fadeOut();
        $calendarPage.fadeIn();
    }); 

    $locations.click(function()
    {
        if (blogToggle)
            $blog.trigger('click');
        $navArrow.animate({
            'left': '295px'
        }, 200);
        $aboutPage
            .add($calendarPage)
            .add($menuPage)
            .add($contactPage)
            .fadeOut();
        $locatationPage.fadeIn()
    });

    $menu.click(function()
    {
        if (blogToggle)
            $blog.trigger('click');
        $navArrow.animate({
            'left': '389px'
        }, 200);
        $aboutPage
            .add($calendarPage)
            .add($locatationPage)
            .add($contactPage)
            .fadeOut();
        $menuPage.fadeIn()
    });

    $contact.click(function()
    {
        if (blogToggle)
            $blog.trigger('click');
        $navArrow.animate({
            'left': '481px'
        }, 200);
        $aboutPage
            .add($calendarPage)
            .add($locatationPage)
            .add($menuPage)
            .fadeOut();
        $contactPage.fadeIn()
    });

    /*****************
    Click events to show and hide about pages. 
    ******************/
    $ourCoffee.click(function()
    {
        if (mobile == false)
        {
            $('.about_img').css({'z-index': '1'});
            $('.right_buttons').css({'top': '382px'});
            $('#about_page h1').animate({'font-size': '32px'});
            $aboutArrow
                .css({'display': 'inline-block'})
                .animate({'margin-bottom': '-56px'});
        }

        $mainImg.add($ourFoodPage).add($ourAtmospherePage).add($ourBuildingPage)
            .fadeOut();    
        $ourCoffeePage
            .fadeIn();        
    });    

    $ourFood.click(function()
    {
        if (mobile == false)
        {
            $('#about_page h1')
                .animate({'font-size': '32px'});
            $aboutArrow
                .css({'display': 'inline-block'})
                .animate({'margin-bottom': '-109px'});
        }

        $mainImg
            .add($ourCoffeePage)
            .add($ourAtmospherePage)
            .add($ourBuildingPage)
            .fadeOut();
        $ourFoodPage.fadeIn();        
    });

    $ourAtmosphere.click(function()
    {
        if (mobile == false)
        {
            $('#about_page h1')
                .animate({'font-size': '32px'});
            $aboutArrow
                .css({'display': 'inline-block'})
                .animate({'margin-bottom': '-161px'});
        }

        $mainImg
            .add($ourCoffeePage)
            .add($ourFoodPage)
            .add($ourBuildingPage)
            .fadeOut();
        $ourAtmospherePage.fadeIn();    
    });    

    $ourBuilding.click(function()
    {
        if (mobile == false)
        {
            $('#about_page h1')
                .animate({'font-size': '32px'});
            $aboutArrow
                .css({'display': 'inline-block'})
                .animate({'margin-bottom': '-213px'});
        }

        $mainImg
            .add($ourCoffeePage)
            .add($ourFoodPage)
            .add($ourAtmospherePage)
            .fadeOut();
        $ourBuildingPage.fadeIn();        
    });    

    $foodButton.click(function()
    {
        $foodPage.fadeIn();
        $beveragePage
            .add($otherPage)
            .add($mainMenuImg)
            .fadeOut();
    });

    $beverageButton.click(function()
    {
        $beveragePage.fadeIn();
        $foodPage
            .add($otherPage)
            .add($mainMenuImg)
            .fadeOut();
    });

    $otherPage.click(function()
    {
        $beveragePage
            .add($foodPage)
            .add($mainMenuImg)
            .fadeOut();
        $otherPage
            .css({'z-index': 1000})
            .fadeIn();
        
    });

    $('#the_owners_button').click(function()
    {
        owners_page = true;

        $('#samantha_img')
            .add("#facebook")
            .add('#forsquare')
            .add('#the_developer_button')
            .fadeOut(200);
        $('#owners_img')
            .add('#contact_page #back')
            .add('owners_page')
            .delay(201)
            .fadeIn();
    });

    $('#the_developer_button').click(function()
    {
        developer_page = true;

        $('#samantha_img')
            .add('#facebook')
            .add('#forsquare')
            .add('#the_developer_button')
            .fadeOut(200);
        $('#developer_img')
            .add('#github')
            .add('#contact_page #back')
            .add('#developer_page')
            .delay(201)
            .fadeIn();
    });

    $('#contact_page #back').click(function()
    {
        if (developer_page)
        {
            $('#developer_img')
                .add('#github')
                .add('#developer_page')
                .add('#back')
                .fadeOut(200);
        }
        else if (owners_page)
        {
            $('owners_img')
                .add('#owners_page')
                .fadeOut(200);
        }
        $('#samantha_img')
                .add('#facebook')
                .add('#forsquare')
                .add('#the_developer_button')
                .add('#the_owners_button')
                .delay(201)
                .fadeIn();
    });
});