document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.imgs');

    video.addEventListener('mouseenter', function () {
        video.play();
    });

    video.addEventListener('mouseleave', function () {
        video.pause();
        video.currentTime = 0;
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.imgs2');

    video.addEventListener('mouseenter', function () {
        video.play();
    });

    video.addEventListener('mouseleave', function () {
        video.pause();
        video.currentTime = 0;
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.imgs3');

    video.addEventListener('mouseenter', function () {
        video.play();
    });

    video.addEventListener('mouseleave', function () {
        video.pause();
        video.currentTime = 0;
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.imgs4');

    video.addEventListener('mouseenter', function () {
        video.play();
    });

    video.addEventListener('mouseleave', function () {
        video.pause();
        video.currentTime = 0;
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.imgs5');

    video.addEventListener('mouseenter', function () {
        video.play();
    });

    video.addEventListener('mouseleave', function () {
        video.pause();
        video.currentTime = 0;
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const cat = document.querySelector('.cat1');
    const category = document.querySelector('.category')
    cat.addEventListener('mouseenter', function () {
        category.classList.add("active");
    });

    cat.addEventListener('mouseleave', function () {
        category.classList.remove('active');
    });
});