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
    const lines = menuIcon.children;
    const menuWindow = document.getElementById('gnav_sp');

    console.log(menuIcon.children);



    // ウィンドウ表示
    menuIcon.addEventListener('click', () => {
        // lines.forEach(line => {
        //     line.classList.toggle('active');
        // });
        menuWindow.classList.toggle('appeared');
    });

    menuWindow.addEventListener('click', () => {
        menuWindow.classList.remove('appeared');
        menuIcon.classList.remove('disappeared');
    });
}
