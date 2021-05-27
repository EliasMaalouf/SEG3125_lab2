// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		Organic: true,
		Lactoseintolerant: true,
		NutFree: true,
		price: 1.99
	},
	{
		name: "Bread",
		Organic: false,
		Lactoseintolerant: true,
		NutFree: true,
		price: 2.35
	},
	{
		name: "Salmon",
		Organic: true,
		Lactoseintolerant: true,
		NutFree: true,
		price: 10.00
	},
	{
		name: "Milk",
		Organic: true,
		Lactoseintolerant: false,
		NutFree: true,
		price: 5.99
	},
	{
		name: "Peanut Butter",
		Organic: true,
		Lactoseintolerant: true,
		NutFree: false,
		price: 4.00
	},
	{
		name: "Vanilla Ice Cream",
		Organic: false,
		Lactoseintolerant: false,
		NutFree: true,
		price: 6.99
	},
	{
		name: "Steak",
		Organic: true,
		Lactoseintolerant: true,
		NutFree: true,
		price: 14.99
	},
	{
		name: "Mars bar",
		Organic: false,
		Lactoseintolerant: false,
		NutFree: true,
		price: 2.99
	},
	{
		name: "Eggs",
		Organic: true,
		Lactoseintolerant: true,
		NutFree: true,
		price: 14.99
	},
	{
		name: "Mortadella",
		Organic: false,
		Lactoseintolerant: true,
		NutFree: true,
		price: 7.00
	}
	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Lactoseintolerant") && (prods[i].Lactoseintolerant == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "NutFree") && (prods[i].NutFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].Organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}