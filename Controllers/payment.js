const Stripe = require('stripe')("sk_test_51LBlxiIJgwmtmpLuJ42ZY2Td4aTfFW27oczlvzc3nAE4tkgp2i5PRDdrZ4gwGzfPu96YdyN8e3zkbooXKgkIxJQC00AWfFQf1V");

async function pay(req, res){
	let { amount, id } = req.body
	try {
		const payment = await Stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "JumpTech",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
}
module.exports = {
    pay: pay
}
