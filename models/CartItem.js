class CartItem{
    constructor(id, name, sale, price, sold, inFlashSale, img, quantityInCart){
        this.id = id;
        this.name = name;
        this.sale = sale;
        this.price = price;
        this.sold = sold;
        this.inFlashSale = inFlashSale;
        this.img = img;
        this.quantityInCart = quantityInCart;
    }
    getID(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getSale(){
        return this.sale;
    }
    getPrice(){
        return this.price;
    }
    getSold(){
        return this.sold;
    }
    getInFlashSale(){
        return this.inFlashSale;
    }
    getImg(){
        return this.img;
    }
    getQuantityInCart(){
        return this.quantityInCart;
    }
    
}
export default CartItem;