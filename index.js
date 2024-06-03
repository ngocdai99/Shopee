//Slider
var sliderArray = [
    'img/banner1.jpg',
    'img/banner2.jpg',
    'img/banner3.jpg',
    'img/banner4.jpg',
    'img/banner5.jpg',
    'img/banner6.jpg',
];
var sliderCurrentIndex = 0;
var bannerTopSlider = document.getElementById('banner-top--slider');
var bannerTopIconNext = document.getElementById('banner-top--iconNext');
var bannerTopIconBack = document.getElementById('banner-top--iconBack');

bannerTopIconNext.onclick = () => {

    if (sliderCurrentIndex < sliderArray.length - 1) {
        sliderCurrentIndex += 1;

    } else {
        sliderCurrentIndex = 1

    }
    bannerTopSlider.src = sliderArray[sliderCurrentIndex];
}

bannerTopIconBack.onclick = () => {
    if (sliderCurrentIndex > 1) {
        sliderCurrentIndex -= 1;

    } else {
        sliderCurrentIndex = sliderArray.length - 1
    }
    bannerTopSlider.src = sliderArray[sliderCurrentIndex];
}

setInterval(() => {
    sliderCurrentIndex++;
    if (sliderCurrentIndex == sliderArray.length) {
        sliderCurrentIndex = 1;
    }
    bannerTopSlider.src = sliderArray[sliderCurrentIndex]

}, 2000);

// zoom ảnh item khi hover

var dailyDiscoverCardList = document.getElementsByClassName('dayly-discover-card');

Array.from(dailyDiscoverCardList).forEach((element) => {
    element.onmouseenter = () => {
        element.querySelector('.dayly-discover__img').classList.add('zoomed')
    }
    element.onmouseleave = () => {
        element.querySelector('.dayly-discover__img').classList.remove('zoomed')
    }
})

var dailyDiscoverCardBodyList = document.getElementsByClassName('daily-discover-card__body');
// console.log(dailyDiscoverImageList);
Array.from(dailyDiscoverCardBodyList).forEach((element) => {
    element.addEventListener('click', (event) => {
        // event.preventDefault();
        window.location.href = 'detail.html';
    })
})



// Cập nhật quantity giỏ hàng ở trang chủ khi ấn nút thêm vào giỏ hàng
var dailyDiscoverBtnList = document.getElementsByClassName('dayly-discover__btn');
Array.from(dailyDiscoverBtnList).forEach((element) => {

    element.addEventListener('click', (event) => {
        event.preventDefault();
        var iconCart = document.getElementById('header__icon--cart--quantity');
        var quantityInCart = parseInt(iconCart.innerText);
        quantityInCart += 1;
        iconCart.innerText = quantityInCart;
    });

    //Hiển thị thông báo Add To Cart thành công
    element.addEventListener('click', () => {
        var messageAddToCartElement = document.querySelector('.add-cart--success');
        var status = messageAddToCartElement.style.display;
        if (status === 'block') {
            messageAddToCartElement.style.display = 'none';

        } else {
            messageAddToCartElement.style.display = 'block';
            setTimeout(() => {
                messageAddToCartElement.style.display = 'none';
            }, 500)
        }
    })
})