'use strict';

{
    // アコーディオン
    const qs = document.querySelectorAll('.bl_faq_accordion > dt');

    qs.forEach(q => {
        q.addEventListener('click', () => {
            q.nextElementSibling.classList.toggle('appeared');
            q.classList.toggle('active');
        });
    });
}
{
    // スムーススクロール・URLに#を付与させない
    $(document).ready(function () {
        $("a[href^='#']").click(function () {
            var speed = 600;
            var href = $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top;
            $("html, body").animate({scrollTop:position}, speed, "swing");
            return false;
        });
    });
}
{
    // ハンバーガーメニュー
    const menuIcon = document.getElementById('gnav_sp_icon');
    const lines = document.querySelectorAll('#gnav_sp_icon > span');
    const menuWindow = document.getElementById('gnav_sp');
    const menuLinks = document.querySelectorAll('#gnav_sp li > a');
    
    function menu() {
        lines.forEach(line => {
            console.log(line);
            line.classList.toggle('active');
        });
        menuWindow.classList.toggle('appeared');
    }

    menuIcon.addEventListener('click', () => {
        menu();
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu();
        });
    });
}
