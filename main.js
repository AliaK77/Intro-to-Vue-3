const app = Vue.createApp({ // keep { on this line not newline
        data(){
            return {
                product: 'socks and turtles',
                image: './assets/images/socks_green.jpg',
                inStock: true,
                inventory: 1,
                onSale: false,
                details: ['50% cotton', '30% wool', '20% polyester'],
                variants: [
                    { id: 2234, colour: 'green', image: './assets/images/socks_green.jpg' },
                    {id: 2235, colour: 'blue', image: './assets/images/socks_blue.jpg' }
                ],
                cart:0 // initialise cart 
            } // end return
        }, // end data()

        methods: {
            addToCart() {
                this.cart += 1
            },
            removeFromCart() {
                if (this.cart > 0) {
                    this.cart -= 1   
                } // end if this.cart>0 
                else {
                    this.cart = 0 // cart is already empty, so stop removing
                }
            },
            updateImage(variantImage) {
                this.image = variantImage
            }
        }
    })  // end app createApp
