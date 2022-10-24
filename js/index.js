window.addEventListener('load', function() {
    // 自动切换(280) swiper插件
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        // spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });


    // 搜索栏

    var search = document.querySelector('.search-wrap');
    var searchTop = search.offsetTop;
    var main = document.querySelector('body');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= searchTop) {
            search.classList.remove('absolute1');
            search.classList.add('fixed1');
        } else {
            search.classList.remove('fixed1');
            search.classList.add('absolute1')
        }
    })


    //返回顶部

    var goBack = document.querySelector('.go-back');
    var floorBanner = document.querySelector('.floor-banner');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= floorBanner.offsetTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    });
    goBack.addEventListener('click', function() {
        window.scroll(0, 0);
    })

    //关闭广告
    var app = document.querySelector('.app');
    var close = document.querySelector('#close');
    close.addEventListener('click', function() {

        app.style.margin = -45 + 'px';
        search.style.top = 0;
        search.style.transition = 'all .5s';

    })
});