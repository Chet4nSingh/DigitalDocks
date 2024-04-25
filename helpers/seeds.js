
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

productArray = [
    {
        title: 'mobile',
        name: 'iPhone 13',
        image: '/images/mobiles/iphone13-digitalmat-gallery-3-202203.png',
        price: generateRandomNumber(4, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },
    {
        title: 'mobile',
        name: 'iPhone 14',
        image: '/images/mobiles/iphone14-digitalmat-gallery-3-202209.png',
        price: generateRandomNumber(4, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },
    {
        title: 'mobile',
        name: 'iPhone 15 Pro',
        image: '/images/mobiles/iphone15pro-digitalmat-gallery-3-202309.png',
        price: generateRandomNumber(4, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },
    {
        title: 'mobile',
        name: 'iPhone SE',
        image: '/images/mobiles/iphonese-digitalmat-gallery-3-202203.png',
        price: generateRandomNumber(4, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },
    {
        title: 'mobile',
        name: 'Galaxy S24',
        image: '/images/mobiles/Screenshot (71).png',
        price: generateRandomNumber(4, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },
    {
        title: 'mobile',
        name: 'iPhone 15 Pro',
        image: '/images/mobiles/Screenshot (72).png',
        price: generateRandomNumber(4, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },
    {
        title: 'mobile',
        name: 'Galaxy S23',
        image: '/images/mobiles/Screenshot (73).png',
        price: generateRandomNumber(4, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },
    {
        title: 'mobile',
        name: 'Galaxy S21 FE',
        image: '/images/mobiles/Screenshot (74).png',
        price: generateRandomNumber(4, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },
    {
        title: 'computer',
        name: 'Galaxy Book 4 Pro',
        image: '/images/computers/Screenshot (75).png',
        price: generateRandomNumber(6, 9) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },
    {
        title: 'computer',
        name: 'Macbook Pro Silver',
        image: '/images/computers/Screenshot (76).png',
        price: generateRandomNumber(6, 9) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },
    {
        title: 'computer',
        name: 'Macbook Pro Gold',
        image: '/images/computers/Screenshot (77).png',
        price: generateRandomNumber(6, 9) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },
    {
        title: 'computer',
        name: 'HP Elite 360',
        image: '/images/computers/Screenshot (78).png',
        price: generateRandomNumber(6, 9) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },
    {
        title: 'computer',
        name: 'Dell Alienware',
        image: '/images/computers/Screenshot (79).png',
        price: generateRandomNumber(6, 9) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },
    {
        title: 'computer',
        name: 'HP Victus',
        image: '/images/computers/Screenshot (80).png',
        price: generateRandomNumber(6, 9) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },
    {
        title: 'computer',
        name: 'Acer',
        image: '/images/computers/Screenshot (81).png',
        price: generateRandomNumber(6, 9) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },
    {
        title: 'computer',
        name: 'HP Spectre 360',
        image: '/images/computers/Screenshot (82).png',
        price: generateRandomNumber(6, 9) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },    
    {
        title: 'audio',
        name: 'JBL Black',
        image: '/images/audios/Screenshot (89).png',
        price: generateRandomNumber(4, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },    
    {
        title: 'audio',
        name: 'Sony White',
        image: '/images/audios/Screenshot (90).png',
        price: generateRandomNumber(4, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },    
    {
        title: 'audio',
        name: 'Boat Headphones Black',
        image: '/images/audios/Screenshot (91).png',
        price: generateRandomNumber(4, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },    
    {
        title: 'audio',
        name: 'HyperX Headphones',
        image: '/images/audios/Screenshot (92).png',
        price: generateRandomNumber(4, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },    
    {
        title: 'audio',
        name: 'Logitech Headphones',
        image: '/images/audios/Screenshot (94).png',
        price: generateRandomNumber(4, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },    
    {
        title: 'audio',
        name: 'JBL Speaker',
        image: '/images/audios/Screenshot (95).png',
        price: generateRandomNumber(4, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },    
    {
        title: 'audio',
        name: 'JBL Speaker Box',
        image: '/images/audios/Screenshot (96).png',
        price: generateRandomNumber(4, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },    
    {
        title: 'audio',
        name: 'Apple Airpods',
        image: '/images/audios/MME73.jpeg',
        price: generateRandomNumber(4, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'accessorie',
        name: 'iPhone 15 Pro',
        image: '/images/accessories/airpods-max-smartcase-silver-witb.jpeg',
        price: generateRandomNumber(1, 2) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'accessorie',
        name: 'iPhone 15 Pro',
        image: '/images/accessories/MT233_AV1.jpeg',
        price: generateRandomNumber(1, 2) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'accessorie',
        name: 'iPhone 15 Pro',
        image: '/images/accessories/MM0A3.jpeg',
        price: generateRandomNumber(1, 2) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'accessorie',
        name: 'iPhone 15 Pro',
        image: '/images/accessories/MT4Q3.jpeg',
        price: generateRandomNumber(1, 2) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'accessorie',
        name: 'iPhone 15 Pro',
        image: '/images/accessories/MT213.jpeg',
        price: generateRandomNumber(1, 2) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'accessorie',
        name: 'iPhone 15 Pro',
        image: '/images/accessories/MT233.jpeg',
        price: generateRandomNumber(1, 2) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'accessorie',
        name: 'iPhone 15 Pro',
        image: '/images/accessories/MT243.jpeg',
        price: generateRandomNumber(1, 2) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'accessorie',
        name: 'iPhone 15 Pro',
        image: '/images/accessories/MU862.jpeg',
        price: generateRandomNumber(1, 2) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'peripheral',
        name: 'iPhone 15 Pro',
        image: '/images/peripherals/Screenshot (97) - Copy.png',
        price: generateRandomNumber(1, 4) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'peripheral',
        name: 'iPhone 15 Pro',
        image: '/images/peripherals/Screenshot (98) - Copy.png',
        price: generateRandomNumber(1, 4) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'peripheral',
        name: 'iPhone 15 Pro',
        image: '/images/peripherals/Screenshot (99) - Copy.png',
        price: generateRandomNumber(1, 4) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'peripheral',
        name: 'iPhone 15 Pro',
        image: '/images/peripherals/Screenshot (100) - Copy.png',
        price: generateRandomNumber(1, 4) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'peripheral',
        name: 'iPhone 15 Pro',
        image: '/images/peripherals/Screenshot (101).png',
        price: generateRandomNumber(1, 4) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'peripheral',
        name: 'iPhone 15 Pro',
        image: '/images/peripherals/Screenshot (102).png',
        price: generateRandomNumber(1, 4) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'peripheral',
        name: 'iPhone 15 Pro',
        image: '/images/peripherals/Screenshot (103).png',
        price: generateRandomNumber(1, 4) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'peripheral',
        name: 'iPhone 15 Pro',
        image: '/images/peripherals/Screenshot (104).png',
        price: generateRandomNumber(1, 4) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'smart-wearable',
        name: 'iPhone 15 Pro',
        image: '/images/smart-wearables/Screenshot (83).png',
        price: generateRandomNumber(2, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'smart-wearable',
        name: 'iPhone 15 Pro',
        image: '/images/smart-wearables/Screenshot (84).png',
        price: generateRandomNumber(2, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'smart-wearable',
        name: 'iPhone 15 Pro',
        image: '/images/smart-wearables/Screenshot (85).png',
        price: generateRandomNumber(2, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'smart-wearable',
        name: 'iPhone 15 Pro',
        image: '/images/smart-wearables/Screenshot (86).png',
        price: generateRandomNumber(2, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'smart-wearable',
        name: 'iPhone 15 Pro',
        image: '/images/smart-wearables/MT3D3ref_VW_34FR+watch-case-45-aluminum-midnight-nc-s9_VW_34FR+watch-face-45-aluminum-midnight-s9_VW_34FR_WF_CO_GEO_IN.jpeg',
        price: generateRandomNumber(2, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'smart-wearable',
        name: 'iPhone 15 Pro',
        image: '/images/smart-wearables/MT3Q3ref_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR.jpeg',
        price: generateRandomNumber(2, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'smart-wearable',
        name: 'iPhone 15 Pro',
        image: '/images/smart-wearables/MT5T3ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-alpine-ultra2_VW_34FR_GEO_IN.jpeg',
        price: generateRandomNumber(2, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
    {
        title: 'smart-wearable',
        name: 'iPhone 15 Pro',
        image: '/images/smart-wearables/MT653_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-ocean-ultra2_VW_34FR_GEO_IN.jpeg',
        price: generateRandomNumber(2, 6) + '99',
        rating: generateRandomNumber(1, 5),
        specs: ['8GB', '256GB'],
        description: "This is a nice phone"
    },  
]


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

module.exports.products = shuffle(productArray);

