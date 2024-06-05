import CartItem from '../models/CartItem.js';

//Cart
var iconCart = document.getElementById('header__icon--cart');
var cartElement = document.querySelector('.cart')
var cartCloseElement = document.querySelector('.cart-close');
var pageElement = document.querySelector('.row');
var formPaymentElement = cartElement.querySelector('#form-payment')
var btnPay = document.querySelector('#btnPay');

iconCart.onclick = () => {
    cartElement.classList.add('open')
    pageElement.style.opacicy = 0.5;
    handleRenderCart()
    updateTotal()

    var cartTableElement = cartElement.querySelector('#cart-table-body')
    var cartItemElements = document.querySelectorAll('.cart-item');

    Array.from(cartItemElements).forEach((element) => {
        var deleteBtn = element.querySelector('.cart__trash');
        var plusBtn = element.querySelector('.cart-plus')
        var minusBtn = element.querySelector('.cart-minus')
        var quantityInput = element.querySelector('.cart-quantity')
        var itemTotalElement = element.querySelector('.cart-item-total');



        var productID = Number(element.id.substring(10))
        deleteBtn.onclick = () => {
            handleRemoveCartItem(cartTableElement, element, productID)
        }

        plusBtn.onclick = () => {
            updateItemTotal(itemTotalElement, productID)
            handlePlusCartItem(quantityInput, productID)
            updateTotal()
        }
        minusBtn.onclick = () => {
            updateItemTotal(itemTotalElement, productID)
            handleMinusCartItem(cartTableElement, element, quantityInput, productID)
            updateTotal()
        }


    })
}


// Tính tổng tiền toàn bộ sản phẩm trong cart
function updateTotal() {
    var totalProducts = cart.reduce((acc, cartItem) => {
        return (acc + cartItem.getQuantityInCart() * cartItem.price);

    }, 0)
    var VAT = totalProducts * 0.1;
    var totalBill = totalProducts + VAT;

    var cartBillElement = document.querySelector('#cart-bill');


    cartBillElement.querySelector('#cart-total-products').innerText = totalProducts.toLocaleString('de-DE')
    cartBillElement.querySelector('#cart-VAT').innerText = VAT.toLocaleString('de-DE')
    cartBillElement.querySelector('#cart-total-bill').innerText = totalBill.toLocaleString('de-DE')

    var btnSubmitOrder = cartElement.querySelector('#btnSubmitOrder');
    btnPay.onclick = () => {
        btnPay.style.display = 'none'
        formPaymentElement.style.display = 'block';


    }
    btnSubmitOrder.onclick = () => {
        setTimeout(() => {
            handleCreateOrder(totalProducts, VAT, totalBill)
        }, 300)
       

    }
}

function handleCreateOrder(totalProducts, VAT, totalBill) {
    var now = new Date();
    var createdTime = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`
    var newOrder = {
        cart,
        totalProducts,
        VAT,
        totalBill,
        createdTime
    }
    console.log(newOrder)
    // cartElement.classList.remove('open')
    
}



// Tính total của item cần update
function updateItemTotal(itemTotalElement, productID) {
    var item = cart.find((cartItem) => cartItem.id === productID)
    if (item.getQuantityInCart() > 0) {
        itemTotalElement.innerText = ((item.getQuantityInCart() + 1) * item.price).toLocaleString('de-DE')
    }
}

function handlePlusCartItem(quantityInput, productID) {
    var item = cart.find((cartItem) => cartItem.id === productID)
    item.quantityInCart = item.getQuantityInCart() + 1;
    quantityInput.value = item.getQuantityInCart()

}

function handleMinusCartItem(cartTableElement, element, quantityInput, productID) {
    var item = cart.find((cartItem) => cartItem.id === productID)
    item.quantityInCart = item.getQuantityInCart() - 1;
    if (item.getQuantityInCart() === 0) {
        handleRemoveCartItem(cartTableElement, element, productID)
    } else {
        quantityInput.value = item.getQuantityInCart()
    }
}

function handleRemoveCartItem(cartTableElement, element, productID) {
    cart = cart.filter((cartItem) => {
        return cartItem.id !== productID;
    })
    cartTableElement.removeChild(element)
    updateTotal()
    setQuantityInCart()
    if (cart.length === 0) {
        updateStatusInCart()
    }
}

cartCloseElement.onclick = () => {
    cartElement.classList.remove('open');

}

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


// Daily Discover

var products = [
    {
        id: 1,
        name: 'Lovito Áo kiểu có viền nhún bèo trơn đơn giản',
        sale: 30,
        price: 155000,
        sold: 54,
        inFlashSale: true,
        img: 'img/daily-discover/sanpham23.jpg'
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
        name: 'Áo khoác chống nắng cho Nam',
        sale: 25,
        price: 336000,
        sold: 79,
        inFlashSale: false,
        img: 'img/daily-discover/sanpham1.jpg'
    },

]


function handleRenderProducts() {
    var productsElement = document.querySelector('.daily-discover__product')
    var htmls = productsElement.innerHTML;

    products.forEach((product) => {
        htmls += `<div class="card dayly-discover-card col-6 col-sm-6 col-xl-2 col-md-4 col-lg-3 pb-4 mt-1"   id="card${product.id}">
                 
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
                                        <span style="font-size: 12px;">đ</span>${product.price.toLocaleString('de-DE')}
                                        <p class="daily-discover-card__sold">
                                             Đã bán ${product.sold}
                                        </p>
                                  </div>
                            </div>
                        </div>
                        
                        <button class="btn btn-danger dayly-discover__btn">
                            Thêm vào giỏ hàng
                        </button>
                 </div>`

    })

    productsElement.innerHTML = htmls
    products.forEach((product) => {
        var card = productsElement.querySelector(`#card${product.id}`);
        var flashSaleElement = card.querySelector('.daily-discover__flash-sale')

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
Array.from(dailyDiscoverCardBodyList).forEach((element) => {
    element.addEventListener('click', (event) => {
        window.location.href = 'detail.html';
    })
})

function messageSuccess(message) {
    var element = document.querySelector('.message-success');
    element.style.display = 'flex';
    var messageElement = element.querySelector('#message-success-content');
    messageElement.innerText = message;
    setTimeout(() => {
        element.style.display = 'none';
    }, 1200)
}


// Cập nhật quantity giỏ hàng ở trang chủ khi ấn nút thêm vào giỏ hàng
var cart = [];
// lấy ra danh sách node sản phẩm
var dailyDiscoverBtnList = document.getElementsByClassName('dayly-discover__btn');
Array.from(dailyDiscoverBtnList).forEach((element) => {
    // Thêm item vào giỏ hàng
    element.addEventListener('click', () => {
        // Hiển thị thông báo Add To Cart thành công
        messageSuccess('Đã thêm sản phẩm vào giỏ hàng')
    })
    element.addEventListener('click', () => {

        // lấy ra id của product vừa thêm vào cart
        var selectedID = Number(element.parentElement.id.substring(4));

        var existed = cart.some((cartItem) => {
            return cartItem.id === selectedID;
        })
        // Chưa tồn tại cartItem trong cart thì push vào cart
        if (!existed) {
            // tìm ra sản phẩm trong danh sách có id tương ứng với sản phẩm đã được chon
            var selectedProduct = products.find((product) => product.id === selectedID)

            // tạo cartItem
            var newCartItem = new CartItem(
                selectedProduct.id,
                selectedProduct.name,
                selectedProduct.sale,
                selectedProduct.price,
                selectedProduct.sold,
                selectedProduct.inFlashSale,
                selectedProduct.img,
                1 // (selectedProduct.quantityInCart)
            )

            // thêm cartItem vào cart
            cart.push(newCartItem);

        }
        // Tồn tại cartItem trong cart, thì tăng số lượng lên 1
        else {

            var existedCartItem = cart.find((cartItem) => cartItem.id === selectedID)
            existedCartItem.quantityInCart = existedCartItem.getQuantityInCart() + 1;
        }
    })

    // Tăng số lượng trong span của icon giỏ hàng
    element.addEventListener('click', (event) => {
        setQuantityInCart()
    });
})

function setQuantityInCart() {
    var iconCart = document.getElementById('header__icon--cart--quantity');
    iconCart.innerText = cart.length

}

// Hiển thị table cart
var mainCartElement = cartElement.querySelector('.main-cart');
function updateStatusInCart() {
    var cartMessageElement = cartElement.querySelector('#cart-message--empty')

    formPaymentElement.style.display = 'none'

    if (cart.length > 0) {
        mainCartElement.style.display = 'flex';
        cartMessageElement.style.display = 'none'
    } else {
        mainCartElement.style.display = 'none';
        cartMessageElement.style.display = 'flex'
    }

}
function handleRenderCart() {
    var cartElement = document.querySelector('.cart')
    var cartTableBodyElement = cartElement.querySelector('#cart-table-body')
    btnPay.style.display = 'block'

    if (cart.length > 0) {
        updateStatusInCart()
        var htmls = ''
        cart.forEach((cartItem) => {

            var total = cartItem.quantityInCart * cartItem.price;
            htmls += `  <tr class="cart-item" id="cart-item-${cartItem.id}">
                            <td>
                                <img src=${cartItem.img} class="cartItem-image" alt="" width="80">
                            </td>
                            <td style="padding-top: 30px; text-align: left; ">
                                <p class="h5" style="" >${cartItem.name}</p>
                                <p style="color: orange">
                                    <strong>đ${cartItem.price.toLocaleString('de-DE')}</strong>
                                </p>
                                <br>
                            </td>
                            <td>
                                <i class="fa-solid cart__trash fa-2x fa-trash-can"></i>
                            </td>
                            <td>
                                <button type="button" class="btn btn-outline-secondary cart-plus" style="font-size: 12px;">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                                <input class="btn cart-quantity btn-outline-secondary" type="submit" value=${cartItem.quantityInCart}
                                    style="font-size: 12px; font-weight="bold">
                                <button type="button" class="btn btn-outline-secondary cart-minus" style="font-size: 12px;">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                            </td>
                            <td style="color: var(--shopee-mall-color); font-weight: bold";>-${cartItem.sale}%</td>
                            <td style = "color: var(--main-color); text-align: center" >
                                <strong>
                                     đ<span class="cart-item-total">${total.toLocaleString('de-DE')}</span> 
                                </strong>
                            </td>
                     </tr>`
        })
        cartTableBodyElement.innerHTML = htmls;
    } else {
        updateStatusInCart()
    }




}













