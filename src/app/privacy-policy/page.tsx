import React from 'react';
import Container from '@/components/Container';
import { siteDetails } from '@/data/siteDetails';

export const metadata = {
    title: `Privacy Policy - ${siteDetails.siteName}`,
    description: `Privacy Policy for ${siteDetails.siteName}. Learn how we collect, use, and protect your personal information.`,
};

const PrivacyPolicyPage: React.FC = () => {
    return (
        <Container>
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
                <p className="text-foreground-accent mb-8">
                    Last Updated: November 1, 2025
                </p>

                <div className="prose prose-lg max-w-none text-foreground">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                        <p className="mb-4">
                            Welcome to {siteDetails.siteName}. We are committed to protecting your privacy and handling your personal information with care and respect. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website {siteDetails.siteUrl} and use our services.
                        </p>
                        <p className="mb-4">
                            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>

                        <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Information You Provide to Us</h3>
                        <p className="mb-4">
                            We collect information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Join our waitlist (email address)</li>
                            <li>Contact us via email or other communication channels</li>
                            <li>Register for an account (when the service launches)</li>
                            <li>Connect your financial accounts to our service</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Financial Information</h3>
                        <p className="mb-4">
                            When you use {siteDetails.siteName} to check your credit card balances, we work with secure, bank-level third-party financial data aggregators. We do not store your banking credentials (usernames, passwords, or security questions). Instead, we use encrypted tokens provided by our financial service partners to access your balance information.
                        </p>
                        <p className="mb-4">
                            The financial information we may access includes:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Credit card account balances</li>
                            <li>Pending transaction amounts</li>
                            <li>Account names and types</li>
                            <li>Transaction history (for balance calculation purposes only)</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6">2.3 Automatically Collected Information</h3>
                        <p className="mb-4">
                            When you visit our website, we may automatically collect certain information about your device, including:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>IP address</li>
                            <li>Browser type and version</li>
                            <li>Device type and operating system</li>
                            <li>Pages visited and time spent on pages</li>
                            <li>Referring website addresses</li>
                            <li>Click patterns and other usage data</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                        <p className="mb-4">
                            We use the information we collect for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>To provide our service:</strong> Display your aggregated credit card balances and pending transactions</li>
                            <li><strong>Communication:</strong> Send you updates about our service, respond to your inquiries, and provide customer support</li>
                            <li><strong>Service improvement:</strong> Analyze usage patterns to improve our website and services</li>
                            <li><strong>Security:</strong> Monitor and prevent fraud, unauthorized access, and other security issues</li>
                            <li><strong>Legal compliance:</strong> Comply with applicable laws and regulations</li>
                            <li><strong>Marketing:</strong> Send you promotional materials about new features (you can opt-out at any time)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
                        <p className="mb-4">
                            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and providing our services (e.g., financial data aggregators, hosting providers, analytics services). These providers are contractually obligated to protect your information and use it only for the purposes we specify.</li>
                            <li><strong>Legal Requirements:</strong> When required by law, subpoena, court order, or other legal process</li>
                            <li><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, or property, and that of our users or others</li>
                            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (you will be notified via email)</li>
                            <li><strong>With Your Consent:</strong> When you explicitly consent to the sharing of your information</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                        <p className="mb-4">
                            We take the security of your information seriously and implement bank-level security measures, including:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>Encryption:</strong> All data transmitted between your device and our servers is encrypted using industry-standard TLS/SSL protocols</li>
                            <li><strong>No Credential Storage:</strong> We never store your banking usernames or passwords</li>
                            <li><strong>Secure Authentication:</strong> We use secure token-based authentication with our financial data partners</li>
                            <li><strong>Access Controls:</strong> Strict access controls limit who can access your information</li>
                            <li><strong>Regular Security Audits:</strong> We conduct regular security assessments and updates</li>
                        </ul>
                        <p className="mb-4">
                            However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">6. Your Privacy Rights</h2>
                        <p className="mb-4">
                            Depending on your location, you may have the following rights regarding your personal information:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                            <li><strong>Data Portability:</strong> Request a copy of your data in a machine-readable format</li>
                            <li><strong>Opt-Out:</strong> Opt-out of marketing communications at any time</li>
                            <li><strong>Withdraw Consent:</strong> Withdraw your consent for data processing where we rely on consent</li>
                            <li><strong>Object:</strong> Object to certain types of processing of your personal information</li>
                        </ul>
                        <p className="mb-4">
                            To exercise any of these rights, please contact us at <a href="mailto:contact@balancesnap.com" className="text-secondary hover:underline">contact@balancesnap.com</a>.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
                        <p className="mb-4">
                            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When you close your account or request deletion, we will delete or anonymize your personal information within 30 days, except where we are required to retain it for legal or regulatory purposes.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking Technologies</h2>
                        <p className="mb-4">
                            We use cookies and similar tracking technologies to improve your experience on our website. Cookies are small data files stored on your device. We use:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                            <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                        </ul>
                        <p className="mb-4">
                            You can control cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of our website.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">9. Third-Party Links</h2>
                        <p className="mb-4">
                            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">10. Children&apos;s Privacy</h2>
                        <p className="mb-4">
                            {siteDetails.siteName} is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">11. California Privacy Rights</h2>
                        <p className="mb-4">
                            If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA), including:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>The right to know what personal information we collect, use, and disclose</li>
                            <li>The right to request deletion of your personal information</li>
                            <li>The right to opt-out of the sale of personal information (we do not sell personal information)</li>
                            <li>The right to non-discrimination for exercising your privacy rights</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">12. International Users</h2>
                        <p className="mb-4">
                            {siteDetails.siteName} is operated in the United States. If you are accessing our service from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located. By using our service, you consent to the transfer of your information to the United States.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">13. Changes to This Privacy Policy</h2>
                        <p className="mb-4">
                            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Posting the updated Privacy Policy on this page</li>
                            <li>Updating the "Last Updated" date at the top of this policy</li>
                            <li>Sending you an email notification (for significant changes)</li>
                        </ul>
                        <p className="mb-4">
                            Your continued use of our service after any changes indicates your acceptance of the updated Privacy Policy.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">14. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg mb-4">
                            <p className="mb-2"><strong>{siteDetails.siteName}</strong></p>
                            <p className="mb-2">Email: <a href="mailto:contact@balancesnap.com" className="text-secondary hover:underline">contact@balancesnap.com</a></p>
                        </div>
                        <p className="mb-4">
                            We will respond to your inquiry within 30 days.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">15. Consent</h2>
                        <p className="mb-4">
                            By using {siteDetails.siteName}, you consent to our Privacy Policy and agree to its terms.
                        </p>
                    </section>
                </div>
            </div>
        </Container>
    );
};

export default PrivacyPolicyPage;
