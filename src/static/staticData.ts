import camera from "../assets/images/camera.jpg"
import tv from "../assets/images/tv.jpg"
import watch from "../assets/images/watch.jpg"
import headphone from "../assets/images/headphone.jpg"
import game from "../assets/images/joistick.jpg"
import speaker from "../assets/images/speaker.jpg"
import homeappli from "../assets/images/homeapp.jpg"
import earpods from "../assets/images/acc.jpg"
import phone from "../assets/images/galaxyS.png"
import laptop from "../assets/images/laptop.jpg"

// brands
import dell from "../assets/images/brand-01.png"
import lg from "../assets/images/brand-02.png"
import bose from "../assets/images/brand-03.png"
import samsung from "../assets/images/brand-04.png"
import canon from "../assets/images/brand-05.png"
import apple from "../assets/images/brand-06.png"
import intel from "../assets/images/brand-07.png"
import sandisk from "../assets/images/brand-08.png"

// iphone images
import blue from "../assets/icons/iphoneBlue.jpg"
import yellow from "../assets/icons/iphoneYellow.jpg"
import red from "../assets/icons/iphoneRed.jpg"
import white from "../assets/icons/iphoneWhite.jpg"

// blogs

// special card iphone
import iphoneblue from "../assets/icons/iphoneBlue.jpg"
import iphonered from "../assets/icons/iphoneRed.jpg"

// offers boat products
import boatWatch from "../assets/icons/boatWatch.webp"
import boat161 from "../assets/icons/boat161.webp"
import headPhones from "../assets/icons/headPhones.webp"
import soundbars from "../assets/icons/soundbars.webp"
import speakers from "../assets/icons/BoatPartySpeakers.webp"
import Boatearpods from "../assets/icons/boatEarPods.webp"



import { LiaShippingFastSolid } from "react-icons/lia"
import { AiOutlineGift } from "react-icons/ai"
import { SlEarphonesAlt } from "react-icons/sl"
import { BiSolidOffer } from "react-icons/bi"
import { MdPayment } from "react-icons/md"

export const base_url = "http://localhost:5000/api"
// export const base_url=  "https://amazonserver-r83q.onrender.com/api"

// export const base_url  = "http://3.81.201.88:5000/api"

export const colorObj: any = {
    BLUE: "text-[#0000FF]",
    RED: "text-[#FF0000]",
    GREEN: "text-[#008000]",
    WHITE: "text-[#fff]",
    YELLOW: "text-[#FFFF00]",
    PURPLE: "text-[#800080]",
    VIOLET: "text-[#7F00FF]",
    GRAY: "text-[#B2BEB5]",
    BLACK: "text-[#000]",
    LIGHTGREEN: "text-[#00FF00]",
    CREAM: "text-[#FFFDD0]",
    AQUA: "text-[#00FFFF]"
};

export const borderObj: any = {
    BLUE: "checked:border-[#0000FF]",
    RED: "checked:border-[#FF0000]",
    GREEN: "checked:border-[#008000]",
    WHITE: "checked:border-[#fff]",
    YELLOW: "checked:border-[#FFFF00]",
    PURPLE: "checked:border-[#800080]",
    VIOLET: "checked:border-[#7F00FF]",
    GRAY: "checked:border-[#B2BEB5]",
    BLACK: "checked:border-[#000]",
    "LIGHT-GREEN": "checked:border-[#00FF00]",
    CREAM: "checked:border-[#FFFDD0]",
    AQUA: "checked:border-[#00FFFF]"
};
export const backObj: any = {
    BLUE: "bg-[#0000FF]",
    RED: "bg-[#FF0000]",
    GREEN: "bg-[#008000]",
    WHITE: "bg-[#fff]",
    YELLOW: "bg-[#FFFF00]",
    PURPLE: "bg-[#800080]",
    VIOLET: "bg-[#7F00FF]",
    GRAY: "bg-[#B2BEB5]",
    BLACK: "bg-[#000]",
    LIGHTGREEN: "bg-[#00FF00]",
    CREAM: "bg-[#FFFDD0]",
    AQUA: "bg-[#00FFFF]"
};


export const contact = ["DemoStore", "Boss Pg, Hyderabad", "Telengana", "+91 80089252100", "venugopal.v@ahex.co.in"]
export const information = ["Privacy Policy", "Refund Policy", "Shipping Policy", "Terms of Service", "Blogs"]
export const account = ["Search ", "About Us", "Faq", "Contact", "Size Chart"]
export const links = ["Accessories", "Laptops", "Headphones", "Smart Watches", "Tablets"]
export const features = [
    {
        id: 1,
        item: "Free Shipping",
        para: "From all orders over $500",
        img: LiaShippingFastSolid
    },
    {
        id: 2,
        item: "Daily Surprice Offers",
        para: "Save upto 25% off",
        img: AiOutlineGift
    },
    {
        id: 3,
        item: "Support 24/7",
        para: "Shop with an Expert",
        img: SlEarphonesAlt
    },
    {
        id: 4,
        item: "Affordable Prices",
        para: "get Factory direct price",
        img: BiSolidOffer
    },
    {
        id: 5,
        item: "Secure payments",
        para: "100% protected  payments",
        img: MdPayment
    },
]

export const categories = [
    {
        item: "Music & Gaming",
        para: "20 items",
        img: game
    },
    {
        item: "Cameras & Videos",
        para: "10 items",
        img: camera
    },
    {
        item: "Smart Television",
        para: "10 items",
        img: tv
    },
    {
        item: "HeadPhones",
        para: "10 items",
        img: headphone
    },
    {
        item: "Smart watches",
        para: "10 items",
        img: watch
    },
    {
        item: "Computers & Laptops",
        para: "10 items",
        img: laptop
    },
    {
        item: "Accesories",
        para: "10 items",
        img: earpods
    },
    {
        item: "Portable Speakers",
        para: "10 items",
        img: speaker
    },
    {
        item: "Home Appliancies",
        para: "10 items",
        img: homeappli
    },
    {
        item: "Mobile & Tablet",
        para: "10 items",
        img: phone
    },
]

export const brands = [dell, bose, lg, sandisk, apple, samsung, canon, intel]

export const topProducts = [
    {
        title: "Iphone 13 Yellow color A15 Bionic chip with 4-core GPU Up to 19 hours video playback footnote faceID and Superfast 5G cellular 15.40 cm or 13.76 cm",
        description: "Iphone 13 Yellow color A15 Bionic chip with 4-core GPU Up to 19 hours video playback footnote faceID and Superfast 5G cellular 15.40 cm or 13.76 cm",
        price: 64999,
        color: "yellow",
        image: yellow,
        rating: 4
    },
    {
        title: "Iphone 13 Blue color A15 Bionic chip with 4-core GPU Up to 19 hours video playback footnote faceID and Superfast 5G cellular 15.40 cm or 13.76 cm",
        description: "Iphone 13 Blue color A15 Bionic chip with 4-core GPU Up to 19 hours video playback footnote faceID and Superfast 5G cellular 15.40 cm or 13.76 cm",
        price: 64999,
        color: "blue",
        image: blue,
        rating: 4
    },
    {
        title: "Iphone 13 red color A15 Bionic chip with 4-core GPU Up to 19 hours video playback footnote faceID and Superfast 5G cellular 15.40 cm or 13.76 cm",
        description: "Iphone 13 red color A15 Bionic chip with 4-core GPU Up to 19 hours video playback footnote faceID and Superfast 5G cellular 15.40 cm or 13.76 cm",
        price: 64999,
        color: "red",
        image: red,
        rating: 4
    },
    {
        title: "Iphone 13 white color A15 Bionic chip with 4-core GPU Up to 19 hours video playback footnote faceID and Superfast 5G cellular 15.40 cm or 13.76 cm",
        description: "Iphone 13 white color A15 Bionic chip with 4-core GPU Up to 19 hours video playback footnote faceID and Superfast 5G cellular 15.40 cm or 13.76 cm",
        price: 64999,
        color: "white",
        image: white,
        rating: 4
    },

]




export const carousel = [watch, iphoneblue, iphonered, earpods, speaker, phone, camera]

export const offers = [
    { brand: 'Boat Watch', color: "black", title: 'Boat Watch Xtend Sport', offer: 'From $399 or $16.32/mo. for 24 mo*', img: boatWatch },
    { brand: 'Boat Headphones', color: "white", title: 'Boat Rockerz 400', offer: 'From $399 or $16.32/mo. for 24 mo*', img: headPhones },
    { brand: 'Boat soundbars', color: "white", title: 'Boat Aavante Bar', offer: 'From $399 or $16.32/mo. for 24 mo*', img: soundbars },
    { brand: 'Boat earpods', color: "white", title: 'Boat Airdopes 161', offer: 'From $399 or $16.32/mo. for 24 mo*', img: boat161 },
]


export const compareProducts = [
    {
        brand: 'Boat Watch', color: "black", title: 'Boat Watch Xtend Sport', offer: 'From $399 or $16.32/mo. for 24 mo*', img: boatWatch,
        ratings: 4.3, highlights: "6 GB RAM | 128 GB ROM 16.21 cm (6.38 inch) Display 64MP Rear Camera 4500 mAh Battery Warranty: Domestic 1 Year on Handset and 6 Months on Accessories Returns: 7 Days",
        delivery: "6 Sep, Wednesday for Free •Standard Delivery for Free Seller DealsParadize - 4.10 Available with 6 sellers",
        variants: "Color(3) ?Pacific Night, Norway Blue, Pacific Night RAM(2) 6 GB, 8 GB", ram: "8bg", camera: "64 megapixel back, 12mp wide angle, 16 mp front", resolution: "4k", memory: "128gb",
        battery: "4500mah", os: "android 13"
    },
    {
        brand: 'Boat Headphones', color: "white", title: 'Boat Rockerz 400', offer: 'From $399 or $16.32/mo. for 24 mo*', img: headPhones,
        ratings: 4.3, highlights: "6 GB RAM | 128 GB ROM 16.21 cm (6.38 inch) Display 64MP Rear Camera 4500 mAh Battery Warranty: Domestic 1 Year on Handset and 6 Months on Accessories Returns: 7 Days",
        delivery: "6 Sep, Wednesday for Free •Standard Delivery for Free Seller DealsParadize - 4.10 Available with 6 sellers",
        variants: "Color(3) ?Pacific Night, Norway Blue, Pacific Night RAM(2) 6 GB, 8 GB", ram: "8bg", camera: "64 megapixel back, 12mp wide angle, 16 mp front", resolution: "4k", memory: "128gb",
        battery: "4500mah", os: "android 13"
    },
    {
        brand: 'Boat soundbars', color: "white", title: 'Boat Aavante Bar', offer: 'From $399 or $16.32/mo. for 24 mo*', img: soundbars,
        ratings: 4.3, highlights: "6 GB RAM | 128 GB ROM 16.21 cm (6.38 inch) Display 64MP Rear Camera 4500 mAh Battery Warranty: Domestic 1 Year on Handset and 6 Months on Accessories Returns: 7 Days",
        delivery: "6 Sep, Wednesday for Free •Standard Delivery for Free Seller DealsParadize - 4.10 Available with 6 sellers",
        variants: "Color(3) ?Pacific Night, Norway Blue, Pacific Night RAM(2) 6 GB, 8 GB", ram: "8bg", camera: "64 megapixel back, 12mp wide angle, 16 mp front", resolution: "4k", memory: "128gb",
        battery: "4500mah", os: "android 13"
    },
    {
        brand: 'Boat earpods', color: "white", title: 'Boat Airdopes 161', offer: 'From $399 or $16.32/mo. for 24 mo*', img: boat161,
        ratings: 4.3, highlights: "6 GB RAM | 128 GB ROM 16.21 cm (6.38 inch) Display 64MP Rear Camera 4500 mAh Battery Warranty: Domestic 1 Year on Handset and 6 Months on Accessories Returns: 7 Days",
        delivery: "6 Sep, Wednesday for Free •Standard Delivery for Free Seller DealsParadize - 4.10 Available with 6 sellers",
        variants: "Color(3) ?Pacific Night, Norway Blue, Pacific Night RAM(2) 6 GB, 8 GB", ram: "8bg", camera: "64 megapixel back, 12mp wide angle, 16 mp front", resolution: "4k", memory: "128gb",
        battery: "4500mah", os: "android 13"
    },
]



export const cartData = [
    {
        id: 1,
        name: "ASUS Vivobook S 14 Intel EVO H-Series Core i5 12th Gen 12500H - (8 GB/512 GB SSD/Windows 11 Home) S3402ZA-LY521WS Thin and Light Laptop (14 Inch, Neutral Grey, 1.50 Kg, With MS Office)",
        desc: "ASUS Vivobook S 14 Intel EVO H-Series Core i5 12th Gen 12500H - (8 GB/512 GB SSD/Windows 11 Home) S3402ZA-LY521WS Thin and Light Laptop (14 Inch, Neutral Grey, 1.50 Kg, With MS Office)",
        image: speakers,
        price: 6999,
        cartQuantity: 1,
    },
    {
        id: 2,
        name: "ASUS Vivobook S 14 Intel EVO H-Series Core i5 12th Gen 12500H - (8 GB/512 GB SSD/Windows 11 Home) S3402ZA-LY521WS Thin and Light Laptop (14 Inch, Neutral Grey, 1.50 Kg, With MS Office)",
        desc: "ASUS Vivobook S 14 Intel EVO H-Series Core i5 12th Gen 12500H - (8 GB/512 GB SSD/Windows 11 Home) S3402ZA-LY521WS Thin and Light Laptop (14 Inch, Neutral Grey, 1.50 Kg, With MS Office)",
        image: Boatearpods,
        price: 1099,
        cartQuantity: 1,
    }, {
        id: 3,
        name: "ASUS Vivobook S 14 Intel EVO H-Series Core i5 12th Gen 12500H - (8 GB/512 GB SSD/Windows 11 Home) S3402ZA-LY521WS Thin and Light Laptop (14 Inch, Neutral Grey, 1.50 Kg, With MS Office)",
        desc: "ASUS Vivobook S 14 Intel EVO H-Series Core i5 12th Gen 12500H - (8 GB/512 GB SSD/Windows 11 Home) S3402ZA-LY521WS Thin and Light Laptop (14 Inch, Neutral Grey, 1.50 Kg, With MS Office)",
        image: boat161,
        price: 899,
        cartQuantity: 1,
    },
    {
        id: 4,
        name: "ASUS Vivobook S 14 Intel EVO H-Series Core i5 12th Gen 12500H - (8 GB/512 GB SSD/Windows 11 Home) S3402ZA-LY521WS Thin and Light Laptop (14 Inch, Neutral Grey, 1.50 Kg, With MS Office)",
        desc: "ASUS Vivobook S 14 Intel EVO H-Series Core i5 12th Gen 12500H - (8 GB/512 GB SSD/Windows 11 Home) S3402ZA-LY521WS Thin and Light Laptop (14 Inch, Neutral Grey, 1.50 Kg, With MS Office)",
        image: headPhones,
        price: 999,
        cartQuantity: 1,
    },

]

export const RaziropayKey = "rzp_test_5H2f34UHN19PKM"

