const {Basket}=require('vl-basket');
const { BasketItem } = require('vl-basket/dist/basket_item');

const data=[
    {
        product:{
            id:"jsfju9r328rujjsjd0239",
            name:"Ordinateur",
            price:2000,
            imageUrl:"imageUrl"
        },
        count:1
    },
    {
        product:{
            id:"jsfju9r328rujjsjd0239",
            name:"Ordinateur",
            price:2000,
            imageUrl:"imageUrl"
        },
        count:1
    },
    {
        product:{
            id:"jsfju9r328rujjsjd0239",
            name:"Ordinateur",
            price:2000,
            imageUrl:"imageUrl"
        },
        count:1
    },
    {
        product:{
            id:"jsfju9r328rujjsjd0239",
            name:"Ordinateur",
            price:2000,
            imageUrl:"imageUrl"
        },
        count:1
    },
]




function main(){
    const cart=new Basket()
    cart.listItems=data;
    cart.addItem(
        new BasketItem(
            {
                id:"jsfju9r328rujjsjd0239",
                name:"Voiture",
                price:1000,
                imageUrl:"imageUrl" 
            },
            10
        )
    )
    console.log(cart.getBasketItems())

}
main();