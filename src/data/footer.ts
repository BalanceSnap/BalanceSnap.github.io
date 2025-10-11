import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Check all your credit card balances in seconds, not minutes.",
    quickLinks: [
        {
            text: "How it Works",
            url: "#features"
        },
        {
            text: "FAQ",
            url: "#faq"
        },
        {
            text: "Join Waitlist",
            url: "#cta"
        }
    ],
    email: 'contact@balancesnap.com',
    telephone: '',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}