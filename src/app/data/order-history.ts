export class OrderHistoryData{

 private orderHistory = [
    {
        orderdetails:
        {
            customerName: "Customer1",
            orderCreated: "Mom Aug 17 2020 20:21:16",
            orderKey: "Order010",
        },
        shipping:
        {
            addressLine1: "101 house",
            addressLine2: "SunShine",
            city: "New York"
        },
        products: {
            0: {
                product: {
                    category: "vegetables",
                    id: 1,
                    imageUrl: "http://www.publicdomainpictures.net/pictures/170000/velka/spinach-leaves-1461774375kTU.jpg",
                    price: 2.5,
                    title: "Spinach"
                },
                quanity: 3
            },
        },
            1: {
                product: {
                    category: "vegetables",
                    id: 4,
                    imageUrl: "https://static.pexels.com/photos/8390/food-wood-tomatoes.jpg",
                    price: 2.5,
                    title: "Tomato"
                },
                quanity: 4
        },
            2:{
                product:{
                    category: "bread",
                    id: 2,
                    imageUrl: "https://static.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg",
                    price: 3,
                    title: "Freshly Baked Bread"
                },
                quanity: 4
        }
 },
 {
    orderdetails:
    {
        customerName: "Customer2",
        orderCreated: "Mon Aug 17 2020 21:21:21",
        orderKey: "Order010",
    },
    shipping:
    {
        addressLine1: "101 house",
        addressLine2: "SunShine",
        city: "New York"
    },
    products: {
        0: {
            product: {
                category: "vegetables",
                id: 1,
                imageUrl: "http://www.publicdomainpictures.net/pictures/170000/velka/spinach-leaves-1461774375kTU.jpg",
                price: 2.5,
                title: "Spinach"
            },
            quanity: 7
        },
    },
        1: {
            product: {
                category: "vegetables",
                id: 4,
                imageUrl: "https://static.pexels.com/photos/8390/food-wood-tomatoes.jpg",
                price: 2.5,
                title: "Tomato"
            },
            quanity: 8
    },
        2:{
            product:{
                category: "bread",
                id: 2,
                imageUrl: "https://static.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg",
                price: 3,
                title: "Freshly Baked Bread"
            },
            quanity: 2
    }
}
];


get()
{
    return this.orderHistory;
};

getHistory(){
    return this.orderHistory.map(i=>i.orderdetails);
}

add(order){
    this.orderHistory.push(order);
}

}