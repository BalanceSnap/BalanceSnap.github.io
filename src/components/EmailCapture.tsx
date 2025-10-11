'use client';

import React, { useState } from 'react';

interface EmailCaptureProps {
    variant?: 'light' | 'dark';
    placeholder?: string;
    buttonText?: string;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({
    variant = 'light',
    placeholder = 'Enter your email',
    buttonText = 'Join the Waitlist'
}) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // TODO: Replace with actual email capture service (Mailchimp, ConvertKit, etc.)
        // For now, just simulate a successful submission
        setTimeout(() => {
            setStatus('success');
            setMessage('Thanks! We\'ll be in touch soon.');
            setEmail('');
        }, 1000);
    };

    const isDark = variant === 'dark';

    return (
        <div className="w-full max-w-md mx-auto">
            {status === 'success' ? (
                <div className={`text-center p-4 rounded-lg ${isDark ? 'bg-green-900/30 text-green-200' : 'bg-green-100 text-green-800'}`}>
                    <p className="font-medium">{message}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={placeholder}
                        required
                        disabled={status === 'loading'}
                        className={`flex-1 px-4 py-3 rounded-lg border transition-all ${
                            isDark
                                ? 'bg-white/10 border-white/20 text-white placeholder-white/60 focus:bg-white/15 focus:border-white/40'
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                        } disabled:opacity-50 disabled:cursor-not-allowed`}
                    />
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={`px-6 py-3 rounded-lg font-medium transition-all ${
                            isDark
                                ? 'bg-white text-gray-900 hover:bg-gray-100 disabled:bg-white/50'
                                : 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400'
                        } disabled:cursor-not-allowed`}
                    >
                        {status === 'loading' ? 'Joining...' : buttonText}
                    </button>
                </form>
            )}
            {status === 'error' && (
                <p className={`mt-2 text-sm ${isDark ? 'text-red-300' : 'text-red-600'}`}>
                    {message}
                </p>
            )}
            <p className={`mt-3 text-xs text-center ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                ✓ No spam, ever  •  ✓ Cancel anytime  •  ✓ Early adopters get lifetime discounts
            </p>
        </div>
    );
};

export default EmailCapture;
