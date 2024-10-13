import Stripe from 'stripe'

//AQUI deberia ir su clave secreta de stripe
const stripe = new Stripe('sk_test_51Q9WBaRuyLZKfkMaPI6FK7JSHqsDBCBF4mThIvY6avv6xDGSJ6pkerAxIhRanw3QpSH7Hd8CXCLqjiANGB8s1Hr500QZ5lxkjG')

export const createSession = async (req,res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data:{
                    product_data:{
                        name: 'leche',
                        description: 'leche deslactosada'
                    },
                    currency:'usd',
                    unit_amount:300 //Equivale a 60$
                },
                quantity: 5
            },
            {
                price_data:{
                    product_data:{
                        name: 'jalea',
                        description: 'jalea de fresa'
                    },
                    currency:'usd',
                    unit_amount:500 //Equivale a 12$
                },
                quantity: 7
            }
        ],

        mode: 'payment',
        success_url: 'http://localhost:4000/success',
        cancel_url: 'http://localhost:4000/cancel'
    })
    return res.json(session)
}