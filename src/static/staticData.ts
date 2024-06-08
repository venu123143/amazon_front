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


// offers boat products
import boatWatch from "../assets/icons/boatWatch.webp"
import boat161 from "../assets/icons/boat161.webp"
import headPhones from "../assets/icons/headPhones.webp"
import soundbars from "../assets/icons/soundbars.webp"


import { LiaShippingFastSolid } from "react-icons/lia"
import { AiOutlineGift } from "react-icons/ai"
import { SlEarphonesAlt } from "react-icons/sl"
import { BiSolidOffer } from "react-icons/bi"
import { MdPayment } from "react-icons/md"

// export const base_url = "http://localhost:5000/api"
export const base_url = "https://amazonserver.toystack.dev/api"
// export const base_url = "https://amazonserver-r83q.onrender.com/api"


export type Filters = {
    title?: string | null;
    queryCategory?: string;
    color?: string[];
    category?: string | null;
    brand?: string[];
    totalRating?: string[];
    sort?: string | null;
    minPrice?: string | null;
    maxPrice?: string | null;
    page?: number;
    limit?: number;
};

export const stars = [{ name: 'five', value: 5 }, { name: 'four', value: 4 },
{ name: 'three', value: 3 },
{ name: 'twp', value: 2 },
{ name: 'one', value: 1 },
]

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
    AQUA: "text-[#00FFFF]",
    SILVER: "text-[#C0C0C0]",
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
    LIGHTGREEN: "checked:border-[#00FF00]",
    CREAM: "checked:border-[#FFFDD0]",
    AQUA: "checked:border-[#00FFFF]",
    SILVER: "checked:border-[#C0C0C0]",

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
    AQUA: "bg-[#00FFFF]",
    SILVER: "bg-[#C0C0C0]",

};

export const orderStatus: any = {
    Processing: "bg-[#00FFFF]",
    Dispatched: "bg-[#FFFF00]",
    Cancelled: "bg-[#FF0000] text-[#fff]",
    Delivered: "bg-[#008000] text-[#000]",
    Returned: "bg-[#000] text-[#fff]",
    Ordered: "bg-[#00FF00] text-[#000000]"
}


export const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const remainingSeconds = seconds % 60;

    return `${String(days).padStart(2, "0")}d ${String(hours).padStart(
        2,
        "0"
    )}h ${String(minutes).padStart(2, "0")}m ${String(
        remainingSeconds
    ).padStart(2, "0")}s`;
};

export const contact = ["DemoStore", "Boss Pg, Hyderabad", "Telengana", "+91 80089252100", "venugopalreddy9493@gmail.com"]
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
        img: game,
        params: 'gaming',
        url: '65432957ff2dd51bb661f0d8'
    },
    {
        item: "Cameras & Videos",
        para: "10 items",
        img: camera,
        params: 'cameras',
        url: '654328ceff2dd51bb661f0ca'
    },
    {
        item: "Smart Television",
        para: "10 items",
        img: tv,
        params: 'tv',
        url: "65432948ff2dd51bb661f0d4"
    },
    {
        item: "HeadPhones",
        para: "10 items",
        img: headphone,
        params: 'earpods',
        url: '65432ca9ff2dd51bb661f24f'
    },
    {
        item: "Smart watches",
        para: "10 items",
        img: watch,
        params: 'watches',
        url: '65320ce635ca026efd0583cc'
    },
    {
        item: "Computers & Laptops",
        para: "10 items",
        img: laptop,
        params: 'laptops',
        url: '65320ce235ca026efd0583c8'
    },
    {
        item: "Accesories",
        para: "10 items",
        img: earpods,
        params: 'electronics',
        url: '65320d1d35ca026efd0583e5'
    },
    {
        item: "Portable Speakers",
        para: "10 items",
        img: speaker,
        params: 'speakers',
        url: '654328e9ff2dd51bb661f0ce'
    },
    {
        item: "Home Appliancies",
        para: "10 items",
        img: homeappli,
        params: 'homeAppliancies',
        url: '65432957ff2dd51bb661f0d8'
    },
    {
        item: "Mobile & Tablet",
        para: "10 items",
        img: phone,
        params: 'mobiles',
        url: '65320cc635ca026efd0583c0'

    },
]

export const brands = [dell, bose, lg, sandisk, apple, samsung, canon, intel]


export const offers = [
    { brand: 'Boat Watch', color: "black", title: 'Boat Watch Xtend Sport', offer: 'From $399 or $16.32/mo. for 24 mo*', img: boatWatch, path: '/product/65433b9aff2dd51bb661f369' },
    { brand: 'Boat Headphones', color: "white", title: 'Boat Rockerz 400', offer: 'From $399 or $16.32/mo. for 24 mo*', img: headPhones, path: '/product/654351c9ff2dd51bb661f538' },
    { brand: 'Boat soundbars', color: "white", title: 'Boat Aavante Bar', offer: 'From $399 or $16.32/mo. for 24 mo*', img: soundbars, path: '/product/654341a2ff2dd51bb661f4b3' },
    { brand: 'Boat earpods', color: "white", title: 'Boat Airdopes 161', offer: 'From $399 or $16.32/mo. for 24 mo*', img: boat161, path: '/product/654330f7ff2dd51bb661f293' },
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


export const RaziropayKey = "rzp_test_5H2f34UHN19PKM"

