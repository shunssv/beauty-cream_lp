'use strict'

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