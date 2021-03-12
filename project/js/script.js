new Swiper('.content-slider',{
    // автовысота, полезна при тексте разного объема
    autoHeight: true,

    // кол-во показывевых слайдов
    slidesPerView: 1,

    // бесконечный слайдер
    loop: true,

    // автопрокрутка
    autoplay: {
        // паузка между слайдами
        delay: 12000,
        // закончить на посоледнем слайде
        stopOnLastSlide: false,
        // отключить после ручного переключения
        disableOnInteraction: false
    },

    // скорость переключения слайда
    speed: 2000,

        // эффект переключения сладов
        // поворот
        // effect: 'flip',
        // дополнение к flip
        // flipeffect: {
        //     // тень
        //     slideShadows: false,
        //     // показ только активного слайда
        //     limitRotations: true
        // }

        // эффект переключения слайдов
        // куб
    effect: 'cube',
    // дополнение к cube
    cubeEffect: {
        // настройки тени
        slideShadows: false,
        shadow: false,
        shadowOffset: 20,
        shadowScale: 0.94
    },

    // вкл/откл переключения на пк мышью
    simulateTouch: true,
    // курсор переключения
    grabCursor: true,
});