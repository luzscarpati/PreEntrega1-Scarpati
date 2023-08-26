export const products = [
    {
      "id": 1,
      "name": "Smartphone Model X",
      "description": "A next-generation smartphone with advanced features.",
      "price": 599.99,
      "stock": 15,
      "category": "screens",
      "img": 'https://i.postimg.cc/cH55kB0Y/smartphone.jpg'
    },
    {
      "id": 2,
      "name": "Laptop Ultrabook Z",
      "description": "An ultralight and powerful laptop for professionals.",
      "price": 1299.99,
      "stock": 8,
      "category": "pcs",
      "img": 'https://i.postimg.cc/wTRnPZtB/notebook1.jpg'
    },
    {
      "id": 3,
      "name": "4K LED TV",
      "description": "High-definition TV with 4K resolution.",
      "price": 799.99,
      "stock": 25,
      "category": "screens",
      "img": 'https://i.postimg.cc/vmhKfdK0/tv-led.jpg'
    },
    {
      "id": 4,
      "name": "Compact Tablet",
      "description": "A compact tablet with touchscreen and great performance.",
      "price": 299.99,
      "stock": 20,
      "category": "screens",
      "img": 'https://i.postimg.cc/YCcTwRgz/tablet.jpg'
    },
    {
      "id": 5,
      "name": "Wireless Headphones",
      "description": "Wireless headphones with noise cancellation.",
      "price": 149.99,
      "stock": 12,
      "category": "accessories",
      "img": 'https://i.postimg.cc/QMhPFMfB/wireless-headphones.jpg'
    },
    {
      "id": 6,
      "name": "Digital Reflex Camera",
      "description": "Reflex camera with high-quality sensor for professional photos.",
      "price": 899.99,
      "stock": 5,
      "category": "accessories",
      "img": 'https://i.postimg.cc/jjTVycSS/camera-reflex.jpg'
    },
    {
      "id": 7,
      "name": "Portable Bluetooth Speaker",
      "description": "Portable speaker with Bluetooth connectivity for music on the go.",
      "price": 69.99,
      "stock": 18,
      "category": "accessories",
      "img": 'https://i.postimg.cc/B6vVCV94/speacker.jpg'
    },
    {
      "id": 8,
      "name": "NextGen Video Game Console",
      "description": "A next-generation video game console with impressive graphics.",
      "price": 449.99,
      "stock": 10,
      "category": "pcs",
      "img": 'https://i.postimg.cc/T1pBTHCC/console.jpg'
    },
    {
      "id": 9,
      "name": "Fitness Smartwatch",
      "description": "Smartwatch with activity tracking and notifications.",
      "price": 199.99,
      "stock": 22,
      "category": "accessories",
      "img": 'https://i.postimg.cc/RhyyhQY9/fitness-watch.jpg'
    },
    {
      "id": 10,
      "name": "WiFi Multifunction Printer",
      "description": "Multifunction printer with WiFi connectivity and high printing quality.",
      "price": 159.99,
      "stock": 14,
      "category": "accessories",
      "img": 'https://i.postimg.cc/DZCtkKdS/printer.jpg'
    },
    {
      "id": 11,
      "name": "27-inch Curved Monitor",
      "description": "High-definition curved monitor for an immersive visual experience.",
      "price": 349.99,
      "stock": 6,
      "category": "screens",
      "img": 'https://i.postimg.cc/MGmC5Bnb/monitor-curve.jpg'
    },
    {
      "id": 12,
      "name": "RGB Mechanical Keyboard",
      "description": "Mechanical keyboard with customizable RGB backlighting.",
      "price": 89.99,
      "stock": 15,
      "category": "accessories",
      "img": 'https://i.postimg.cc/bwQWYn9c/keyboard.jpg'
    },
    {
      "id": 13,
      "name": "Ergonomic Wireless Mouse",
      "description": "Wireless mouse with ergonomic design for enhanced comfort.",
      "price": 39.99,
      "stock": 30,
      "category": "accessories",
      "img": 'https://i.postimg.cc/ZYM1w45g/mouse.jpg'
    },
    {
      "id": 14,
      "name": "Gaming Headset with Mic",
      "description": "Gaming headset with surround sound and adjustable microphone.",
      "price": 79.99,
      "stock": 12,
      "category": "accessories",
      "img": 'https://i.postimg.cc/G23Z5pY0/gaming-headphones.jpg'
    }
  ];
  
  
  export const getProduct = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(p => p.id == id);
            if (product) {
                resolve(product);
            }else {
                reject('No existe el producto');
            }
        }, 1000);
    });
  };

    export const getProducts = (category) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
           const productFiltered = category
           ? products.filter(product => product.category === category)
           : products;

           resolve(productFiltered);
        });
    }, 1000)
  };