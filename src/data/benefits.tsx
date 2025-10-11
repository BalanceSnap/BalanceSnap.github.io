import { FiClock, FiCreditCard, FiRefreshCw, FiLock, FiZap, FiCopy } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "If you have multiple credit cards, you know the pain",
        description: "Checking your total credit card balance shouldn't feel like a part-time job. But if you manage 3+ cards, you know the drill:",
        bullets: [
            {
                title: "Log into Chase. Check each card.",
                description: "Navigate through multiple accounts, wait for pages to load, write down the numbers.",
                icon: <FiCreditCard size={26} />
            },
            {
                title: "Log into Amex. Check each card.",
                description: "Repeat the process. Hope you didn't forget your password again.",
                icon: <FiCreditCard size={26} />
            },
            {
                title: "Log into Discover. Check each card.",
                description: "15-20 minutes later, you finally have your total. Copy it into your spreadsheet or budgeting tool.",
                icon: <FiClock size={26} />
            },
            {
                title: "Repeat every few days",
                description: "To stay on top of spending, you do this all over again in a few days.",
                icon: <FiRefreshCw size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "What if checking all your balances took 30 seconds?",
        description: "We're building BalanceSnap to solve exactly this problem. Here's what it does:",
        bullets: [
            {
                title: "Connects to your credit cards securely",
                description: "Bank-level security. We never store your login credentials.",
                icon: <FiLock size={26} />
            },
            {
                title: "Shows your total balance instantly",
                description: "Including pending transactions, not just posted balances.",
                icon: <FiZap size={26} />
            },
            {
                title: "Copy and go",
                description: "One number. One click to copy. That's it. Use it with whatever budgeting system you already have.",
                icon: <FiCopy size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
]