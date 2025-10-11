import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} secure?`,
        answer: 'Yes. We use bank-level security and never store your login credentials. Your data is encrypted and protected with the same standards used by major financial institutions.',
    },
    {
        question: 'How much will it cost?',
        answer: "We're still figuring out pricing. Early adopters will get a significant discount. Join the waitlist to be the first to know.",
    },
    {
        question: `When will ${siteDetails.siteName} be ready?`,
        answer: "We're building it now. Waitlist members will be the first to know and get early access when we launch."
    },
    {
        question: 'What if I use a specific budgeting tool?',
        answer: `${siteDetails.siteName} is designed to work with whatever system you already use. We're not trying to replace your spreadsheet or budgeting app—we just give you the total balance number you need.`,
    },
    {
        question: 'Which credit cards will you support?',
        answer: `We're determining which banks to support first based on what people actually use. When you join the waitlist, we'll ask which cards you have so we can prioritize the right integrations.`
    }
];