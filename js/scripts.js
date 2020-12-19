/*!
    * Start Bootstrap - Resume v6.0.0 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    // Toggle Digital Portfolio
    $('.toggler').click(function(){
        $(this).parent().children().toggle();  //swaps the display:none between the two spans
        $(this).parent().parent().find('.toggled_content').slideToggle();  //swap the display of the main content with slide action
      
    });

    // SLIDE1
    var counter = 0, // 一開始要顯示的圖，0 的話就是顯示第一張
    slide = document.querySelector('#slide'),
    items = slide.querySelectorAll('img'), // 抓取所有 img
    itemsCount = items.length, // 圖片總數 
    prevBtn = document.createElement('a'), // 上一張按鈕
    nextBtn = document.createElement('a'), // 下一張按鈕
    timer = 4000, // 4 秒換圖
    interval = window.setInterval(showNext, timer);  // 設定循環

    prevBtn.classList.add('prev'); // 幫上一張按鈕加 class＝"prev" 給 CSS 指定樣式用
    nextBtn.classList.add('next'); // 幫下一張按鈕加 class＝"next" 給 CSS 指定樣式用
    slide.appendChild(prevBtn); // 將按鈕加到 #slide 裡
    slide.appendChild(nextBtn);

    // 帶入目前要顯示第幾張圖 
    var showCurrent = function(){
        var itemToShow = Math.abs(counter % itemsCount); // 取餘數才能無限循環
        [].forEach.call( items, function(el){
            el.classList.remove('show'); // 將所有 img 的 class="show" 移除
        });
        items[itemToShow].classList.add('show'); // 將要顯示的 img 加入 class="show"
    };

    function showNext(){
        counter++; // 將 counter+1 指定下一張圖
        showCurrent();
    }

    function showPrev(){
        counter--; // 將 counter－1 指定上一張圖
        showCurrent();
    }

    // 滑鼠移到 #slider 上方時，停止循環計時
    slide.addEventListener('mouseover', function(){
        interval = clearInterval(interval);
    });

    // 滑鼠離開 #slider 時，重新開始循環計時
    slide.addEventListener('mouseout', function(){
        interval = window.setInterval(showNext, timer);
    });

    // 綁定點擊上一張，下一張按鈕的事件
    nextBtn.addEventListener('click', showNext, false);
    prevBtn.addEventListener('click', showPrev, false);

    // 一開始秀出第一張圖，也可以在 HTML 的第一個 img 裡加上 class="show"
    items[0].classList.add('show');


    // SLIDE2
    var counter2 = 0, // 一開始要顯示的圖，0 的話就是顯示第一張
    slide2 = document.querySelector('#slide2'),
    items2 = slide2.querySelectorAll('img'), // 抓取所有 img
    itemsCount2 = items2.length, // 圖片總數 
    prevBtn2 = document.createElement('a'), // 上一張按鈕
    nextBtn2 = document.createElement('a'), // 下一張按鈕
    timer = 4000, // 4 秒換圖
    interval2 = window.setInterval(showNext2, timer);  // 設定循環

    prevBtn2.classList.add('prev'); // 幫上一張按鈕加 class＝"prev" 給 CSS 指定樣式用
    nextBtn2.classList.add('next'); // 幫下一張按鈕加 class＝"next" 給 CSS 指定樣式用
    slide2.appendChild(prevBtn2); // 將按鈕加到 #slide 裡
    slide2.appendChild(nextBtn2);

    // 帶入目前要顯示第幾張圖 
    var showCurrent2 = function(){
        var itemToShow2 = Math.abs(counter2 % itemsCount2); // 取餘數才能無限循環
        [].forEach.call( items2, function(el){
            el.classList.remove('show'); // 將所有 img 的 class="show" 移除
        });
        items2[itemToShow2].classList.add('show'); // 將要顯示的 img 加入 class="show"
    };

    function showNext2(){
        counter2++; // 將 counter+1 指定下一張圖
        showCurrent2();
    }

    function showPrev2(){
        counter2--; // 將 counter－1 指定上一張圖
        showCurrent2();
    }

    // 滑鼠移到 #slider 上方時，停止循環計時
    slide2.addEventListener('mouseover', function(){
        interval2 = clearInterval(interval2);
    });

    // 滑鼠離開 #slider 時，重新開始循環計時
    slide2.addEventListener('mouseout', function(){
        interval2 = window.setInterval(showNext2, timer);
    });

    // 綁定點擊上一張，下一張按鈕的事件
    nextBtn2.addEventListener('click', showNext2, false);
    prevBtn2.addEventListener('click', showPrev2, false);

    // 一開始秀出第一張圖，也可以在 HTML 的第一個 img 裡加上 class="show"
    items2[0].classList.add('show');

    // SLIDE3
    var counter3 = 0, // 一開始要顯示的圖，0 的話就是顯示第一張
    slide3 = document.querySelector('#slide3'),
    items3 = slide3.querySelectorAll('img'), // 抓取所有 img
    itemsCount3 = items3.length, // 圖片總數 
    prevBtn3 = document.createElement('a'), // 上一張按鈕
    nextBtn3 = document.createElement('a'), // 下一張按鈕
    timer = 4000, // 4 秒換圖
    interval3 = window.setInterval(showNext3, timer);  // 設定循環

    prevBtn3.classList.add('prev'); // 幫上一張按鈕加 class＝"prev" 給 CSS 指定樣式用
    nextBtn3.classList.add('next'); // 幫下一張按鈕加 class＝"next" 給 CSS 指定樣式用
    slide3.appendChild(prevBtn3); // 將按鈕加到 #slide 裡
    slide3.appendChild(nextBtn3);

    // 帶入目前要顯示第幾張圖 
    var showCurrent3 = function(){
        var itemToShow3 = Math.abs(counter3 % itemsCount3); // 取餘數才能無限循環
        [].forEach.call( items3, function(el){
            el.classList.remove('show'); // 將所有 img 的 class="show" 移除
        });
        items3[itemToShow3].classList.add('show'); // 將要顯示的 img 加入 class="show"
    };

    function showNext3(){
        counter3++; // 將 counter+1 指定下一張圖
        showCurrent3();
    }

    function showPrev3(){
        counter3--; // 將 counter－1 指定上一張圖
        showCurrent3();
    }

    // 滑鼠移到 #slider 上方時，停止循環計時
    slide3.addEventListener('mouseover', function(){
        interval3 = clearInterval(interval3);
    });

    // 滑鼠離開 #slider 時，重新開始循環計時
    slide3.addEventListener('mouseout', function(){
        interval3 = window.setInterval(showNext3, timer);
    });

    // 綁定點擊上一張，下一張按鈕的事件
    nextBtn3.addEventListener('click', showNext3, false);
    prevBtn3.addEventListener('click', showPrev3, false);

    // 一開始秀出第一張圖，也可以在 HTML 的第一個 img 裡加上 class="show"
    items3[0].classList.add('show');

})(jQuery); // End of use strict
