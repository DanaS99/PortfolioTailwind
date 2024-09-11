import { facebook, instagram, twitter } from "../assets/icons";
import { quote1, quote2, quote3, skill1, skill2, skill3, skill4 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Work" },
    { href: "#contact-us", label: "Contact" },
];

export const heroImages = [
    {
        thumbnail: quote1,
        bigImg: quote1,
    },
    {
        thumbnail: quote2,
        bigImg: quote2,
    },
    {
        thumbnail: quote3,
        bigImg: quote3,
    },
];

export const products = [
    {
        imgURL: skill1,
        rating: 4,
        name: "ReactJS",
    },
    {
        imgURL: skill2,
        rating: 4,
        name: "NodeJS",
    },
    {
        imgURL: skill4,
        rating: 5,
        name: "TailwindCSS",
    },
    {
        imgURL: skill3,
        rating: 4,
        name: "MongoDB",
    },
];

export const services = [
    {
        label: "Innovative Solutions",
        subtext: "Delivering creative and effective solutions tailored to your unique project needs."
    },
    {
        label: "Professional Expertise",
        subtext: "Leveraging my extensive skills and experience to ensure top-quality results."
    },
    {
        label: "Client-Centric Approach",
        subtext: "Committed to understanding your goals and providing support throughout our collaboration."
    },
];


export const reviews = [
    {
        projectName: 'Shopify Website Development',
        description: "Designed and developed a fully customized Shopify website, enhancing user experience and optimizing the checkout process, resulting in a significant increase in conversions and customer satisfaction."
    },
    {
        projectName: 'E-Commerce Website Redesign',
        description: "Revamped the design of an e-commerce platform to enhance user experience, leading to a 30% increase in engagement and a 25% boost in sales."
    }
];


export const footerLinks = [
    {
        title: "Get in touch",
        links: [
            { name: "danasobh164@gmail.com", link: "mailto:danasobh164@gmail.com" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];