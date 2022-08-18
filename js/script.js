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
    $(function () {
        var headH = $("header").outerHeight(); 
        $("a[href^='#']").on({
            "click": function () {
                var href = $(this).attr("href");
                var target = $(href == "#" || href === "" ? "html" : href);
                var position;
                position = target.offset().top - headH; 
                return false;
            }
        });
      });
}
