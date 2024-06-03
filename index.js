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

var products = [
    {
        id: 1,
        name: 'Áo khoác chống nắng cho Nam',
        sale: 25,
        price: 336000,
        sold: 79,
        inFlashSale: false,
        img: 'img/daily-discover/sanpham1.jpg'
    },
    {
        id: 2,
        name: 'Đầm Lovito dây kéo sau lưng có ren thêu hoa thanh lịch',
        sale: 48,
        price: 179000,
        sold: 1800,
        inFlashSale: false,
        img: 'img/daily-discover/sanpham2.jpg'
    },
    {
        id: 3,
        name: 'Máy sưởi Mini cầm tay',
        sale: 25,
        price: 30000,
        sold: 559,
        inFlashSale: false,
        img: 'img/daily-discover/sanpham4.jpg'
    },
    {
        id: 4,
        name: 'Cây Thông Noel Mini Màu Xanh',
        sale: 25,
        price: 85000,
        sold: 25,
        inFlashSale: false,
        img: 'img/daily-discover/sanpham5.jpg'
    },
    {
        id: 5,
        name: '[Mã CBHL10C giảm 40k đơn 150k] 1 Phụ Kiện Treo Trang Trí Cây Thông Giáng Sinh',
        sale: 50,
        price: 7900,
        sold: 2500,
        inFlashSale: false,
        img: 'img/daily-discover/sanpham7.jpg'
    },
    {
        id: 6,
        name: 'Lovito Áo thun cổ vuông xếp nếp trơn đơn giản cho nữ',
        sale: 48,
        price: 112000,
        sold: 130,
        inFlashSale: true,
        img: 'img/daily-discover/sanpham13.jpg'
    },
    {
        id: 7,
        name: 'Sinransinya Đầm Chữ a Tay Dài Hở Vai Xếp Ly Màu Đen',
        sale: 51,
        price: 159000,
        sold: 230,
        inFlashSale: true,
        img: 'img/daily-discover/sanpham9.jpg'
    },
    {
        id: 8,
        name: 'Đèn Led Cảm Ứng Minh House Cảm Biến Thông Minh',
        sale: 43,
        price: 28500,
        sold: 564,
        inFlashSale: true,
        img: 'img/daily-discover/sanpham14.jpg'
    },
    {
        id: 9,
        name: 'Mặt nạ đất sét Fenyi tinh chất trà xanh giảm mụn',
        sale: 41,
        price: 37500,
        sold: 3600,
        inFlashSale: true,
        img: 'img/daily-discover/sanpham15.jpg'
    },
    {
        id: 10,
        name: '50M Dây Led Đèn Nháy Trang Trí Ngoài Trời Chống Nước',
        sale: 50,
        price: 49000,
        sold: 500,
        inFlashSale: true,
        img: 'img/daily-discover/sanpham16.jpg'
    },
    {
        id: 11,
        name: 'KIQUNE Ca Nấu Mì Nồi Lẩu Mini Đa Năng',
        sale: 53,
        price: 56000,
        sold: 23,
        inFlashSale: true,
        img: 'img/daily-discover/sanpham17.jpg'
    },
    {
        id: 12,
        name: 'Ghế Xoay văn phòng Công Thái Học',
        sale: 50,
        price: 579000,
        sold: 6000,
        inFlashSale: true,
        img: 'img/daily-discover/sanpham18.jpg'
    },
    {
        id: 13,
        name: 'Máy Tính Bảng Dell XPS 9310 Core i7 Gen 11/RAM 16GB',
        sale: 50,
        price: 2050000,
        sold: 23,
        inFlashSale: true,
        img: 'img/daily-discover/sanpham19.jpg'
    },
    {
        id: 14,
        name: 'Set 20 Dây Buộc Tóc Co Giãn Màu Trơn Đơn Giản Cho Nữ',
        sale: 50,
        price: 2500,
        sold: 500,
        inFlashSale: true,
        img: 'img/daily-discover/sanpham20.jpg'
    },
    {
        id: 15,
        name: 'Lót Chuột Gaming ZiyouLang Size 25x21cm',
        sale: 50,
        price: 9000,
        sold: 455,
        inFlashSale: true,
        img: 'img/daily-discover/sanpham21.jpg'
    },
    {
        id: 16,
        name: 'Lovito Áo kiểu có viền nhún bèo trơn đơn giản',
        sale: 30,
        price: 155000,
        sold: 54,
        inFlashSale: true,
        img: 'img/daily-discover/sanpham23.jpg'
    },

]


function handleRenderProducts() {
    var productsElement = document.querySelector('.daily-discover__product')
    var htmls = productsElement.innerHTML;

    products.forEach((product) => {
        htmls += `<div class="card dayly-discover-card col-6 col-sm-6 col-xl-2 col-md-4 col-lg-3 pb-4 mt-1"
                    id="card${product.id}">
                <div class="daily-discover--inner-card">

                    <img src=${product.img} class="card-img-top dayly-discover__img" alt="...">

                    <div class="card-body daily-discover-card__body">
                        <p class="dayly-discover-card__title">
                            ${product.name}
                         </p>
          

                    <div class="dayly-discover__sale-desc">
                        <p class="daily-discover__flash-sale">
                            <i class="fa-solid fa-bolt"></i>
                            Flash Sale 
                        </p>
                        <p class="daily-discover__saleoff2">
                            Giảm ${product.sale}%
                        </p>
                    </div>

                    <div class="daily-discover-card__price">
                        <span style="font-size: 12px;">đ</span>${product.price}
                        <p class="daily-discover-card__sold">
                            Đã bán ${product.sold}
                        </p>
                    </div>

                </div>
                 </div>
                <button href="#" class="btn btn-danger dayly-discover__btn">
                    Thêm vào giỏ hàng
                </button>
             </div>`

    })

    productsElement.innerHTML = htmls
    products.forEach((product) => {
        var card = productsElement.querySelector(`#card${product.id}`);
        var flashSaleElement = card.querySelector('.daily-discover__flash-sale')
        console.log(flashSaleElement)
        if (!product.inFlashSale) {
            flashSaleElement.style.display = 'none'
        }

    })

}
handleRenderProducts()




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




