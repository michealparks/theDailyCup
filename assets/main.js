"use strict";

// Global bools are cool!
var blogToggle = false,
    transitioning = false, 
    developerPage = false, 
    ownersPage = false,
    mobile = false,

    date = new Date(),
    month = null, 
    monthNum = date.getMonth(),
    year = date.getFullYear();

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
    var $nav = $('nav'),
        $about = $('.about'),
        $calendar = $('.calendar'),
        $locations = $('.locations'),
        $menu = $('.menu'),
        $contact = $('.contact'),
        $blog = $('.blog'),
        $navArrow = $('#nav_arrow'),

        // Main Pages.
        $aboutPage = $('#about_page'),
        $calendarPage = $('#calendar_page'),
        $locatationPage = $('#location_page'),
        $menuPage = $('#menu_page'),
        $contactPage = $('#contact_page'),

        // About Page Navigation.
        $rightButtons = $('.right_buttons'),
        $ourCoffee = $('#our_coffee'),
        $ourFood = $('#our_food'),
        $ourAtmosphere = $('#our_atmosphere'),
        $ourBuilding = $('#our_building'),

        // About Pages.
        $aboutPages = $('.about_pages'),
        $ourCoffeePage = $('#our_coffee_page'),
        $ourFoodPage = $('#our_food_page'),
        $ourAtmospherePage = $('#our_atmosphere_page'),
        $ourBuildingPage = $('#our_building_page'),

        // Menu Page.
        $foodButton = $("#food_button"),
        $beverageButton = $('#beverage_button'),
        $otherButton = $('#other_button'),
        $mainMenuImg = $('#main_menu_img'),
        $foodPage = $("#food_page"),
        $beveragePage = $("#beverage_page"),
        $otherPage = $("#other_page"),

        // Contact Page.
        $outer = $('.outer'),
        $ownersButton = $('#the_owners_button'),
        $developerButton = $('#the_developer_button'),
        $outerBack = $('.outer #back'),

        $samanthaImg = $('#samantha_img'),
        $ownersPage = $('#owners_page'),
        $ownersImg = $('#owners_img'),
        $developerPage = $('#developer_page'),
        $developerImg = $('#developer_img'),

        $facebook = $('#facebook'),
        $forsquare = $('#forsquare'),
        $github = $('#github'),
        $mail = $('#mail'),
        $mailBlurb = $('#mail_blurb'),

        // Img.
        $mainImg = $('#main_img'),

        $canvasDiv = $('#canvas_div'),
        $overlay = $('#overlay'),
        $blogiframe = $('#blog_iframe');

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
        if (!transitioning)
        {
            transitioning = true;
            setTimeout(function(){transitioning = false;}, 300);
            // Move the blog out.
            if (blogToggle == false)
            {
                if (mobile == false)
                {
                    $rightButtons
                        .animate({'left': '437px', 'background-color': 'rgba(0,0,0,0.8'}, 300);      
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
                transitioning = true;
                setTimeout(function(){transitioning = false;}, 300);
                if (mobile == false)
                {
                    $rightButtons
                        .animate({'left': '67%'}, 300);
                    $navArrow
                        .fadeIn();
                    $blogiframe
                        .animate({'width': '0px'}, 300, function(){
                            $blogiframe.css({'display': 'none'});
                        });
                    $blog
                        .animate({'right': '10px'}, 300)
                        .html('< Blog');
                }
                blogToggle = false;
            }
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
            .add($outer)
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
            .add($outer)
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
            .add($outer)
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
            .add($outer)
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
        $outerBack.fadeOut(1);
        $contactPage
            .add($outer)
            .fadeIn()
        if (ownersPage || developerPage) $outerBack.fadeIn();
        $('#mail_blurb').css({'display': 'none', 'margin': '-40px 0 0 -150px'});
    });

    /*****************
    Click events to show and hide about pages. 
    ******************/
    $ourCoffee.click(function()
    {
        if (mobile == false)
        {
            $('#about_page h1').animate({
                'font-size': '32px',
                'margin-top': '55px'
            });
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
            $('#about_page h1').animate({
                'font-size': '32px',
                'margin-top': '55px'
            });
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
            $('#about_page h1').animate({
                'font-size': '32px',
                'margin-top': '55px'
            });
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
            $('#about_page h1').animate({
                'font-size': '32px', 
                'margin-top': '55px'
            });
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

    $otherButton.click(function()
    {
        $beveragePage
            .add($foodPage)
            .add($mainMenuImg)
            .fadeOut();
        $otherPage
            .css({'z-index': 1000})
            .fadeIn();
        
    });
 
    $ownersButton.click(function()
    {
         if (!transitioning)
        {
            transitioning = true;
            setTimeout(function(){transitioning = false;}, 201);

            ownersPage = true;

            $mail.fadeOut(200);
            $mailBlurb
                .animate({'margin': '-40px 0 0 -150px', 'opacity': 0}, 300, function(){
                    $mailBlurb.css({'display': 'none'});
                });

            if (developerPage)
            {
                $developerImg
                    .add($github)
                    .add($developerPage)
                    .fadeOut(200);

                    setTimeout(function(){$developerButton.fadeIn();}, 205);
            }

            $samanthaImg
                .add($facebook)
                .add($forsquare)
                .add($ownersButton)
                .fadeOut(200);
            $ownersImg
                .add($outerBack)
                .add($ownersPage)
                .delay(201)
                .fadeIn();
        }
    });

    $developerButton.click(function()
    {
        if (!transitioning)
        {
            transitioning = true;
            setTimeout(function(){transitioning = false;}, 201);

            developerPage = true;

            $mailBlurb
                .animate({'margin': '-40px 0 0 -150px', 'opacity': 0}, 300, function(){
                    $mailBlurb.css({'display': 'none'});
                });

            if (ownersPage)
            {
                $ownersImg
                    .add($ownersPage)
                    .fadeOut(200);
                    $mail.fadeIn(200);

                    setTimeout(function(){$ownersButton.fadeIn();}, 205);
            }

            $samanthaImg
                .add($facebook)
                .add($forsquare)
                .add($developerButton)
                .fadeOut(200);
            $developerImg
                .add($github)
                .add($outerBack)
                .add($developerPage)
                .delay(201)
                .fadeIn(200);
        }
    });

    $outerBack.click(function()
    {
        if (!transitioning)
        {
            transitioning = true;
            setTimeout(function(){transitioning = false;}, 201);

            $mailBlurb
                .animate({'margin': '-40px 0 0 -150px', 'opacity': 0}, 300, function(){
                    $mailBlurb.css({'display': 'none'});
                });

            if (developerPage)
            {
                $developerImg
                    .add($github)
                    .add($developerPage)
                    .add($outerBack)
                    .fadeOut(200);
                $mail.fadeIn(200);
            }
            
            if (ownersPage)
            {
                $ownersImg
                    .add($ownersPage)
                    .add($outerBack)
                    .fadeOut(200);
            }
            $samanthaImg
                    .add($facebook)
                    .add($forsquare)
                    .add($developerButton)
                    .add($ownersButton)
                    .add($mail)
                    .delay(201)
                    .fadeIn();
        }

        developerPage = false;
        ownersPage = false;
    });

    $mail.click(function(){
        if ($mailBlurb.css('display') == 'none')
        {
            $mailBlurb
                .html(developerPage? 'michealparks1989@gmail.com': 'theDailyCupWV@gmail.com')
                .css({'opacity': 0, 'display': 'block'})
                .animate({'margin': '-75px 0 0 -150px', 'opacity': 1}, 300);
        }
        else
            $mailBlurb
                .animate({'margin': '-40px 0 0 -150px', 'opacity': 0}, 300, function(){
                    $mailBlurb.css({'display': 'none'});
                });

    });
});