"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-[#fafafa]">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-[#27272a]/50">
                <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                            <span className="text-white font-bold text-xs">{"{/}"}</span>
                        </div>
                        <span className="text-lg font-semibold tracking-tight group-hover:text-blue-400 transition-colors">
                            NAESTRO
                        </span>
                    </Link>
                    <Link
                        href="/"
                        className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors"
                    >
                        ← Back to Home
                    </Link>
                </nav>
            </header>

            {/* Content */}
            <main className="pt-32 pb-24 px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-[#71717a] mb-12">Last updated: December 2024</p>

                    <div className="prose prose-invert max-w-none space-y-8">
                        <section>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                STARGA Inc. ("we," "us," or "our") wants you to be familiar with how we collect, use, and disclose information. This Privacy Policy describes our practices in connection with information that we collect through website(s) operated by us from which you are accessing this Privacy Policy, our social media pages, and HTML-formatted email messages that we send to you that link to this Privacy Policy.
                            </p>
                            <p className="text-[#a1a1aa] leading-relaxed mt-4">
                                Collectively, we refer to the website(s), social media pages, and emails as the "Services."
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                "Personal Information" is information that identifies you as an individual or relates to an identifiable individual. We collect Personal Information through or in connection with the Services, such as:
                            </p>
                            <ul className="list-disc list-inside text-[#a1a1aa] mt-4 space-y-2">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Company name</li>
                                <li>IP address (we may also derive your approximate location from your IP address)</li>
                                <li>Information that you choose to share when you contact us</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Collection of Personal Information</h2>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                We and our service providers collect Personal Information in a variety of ways, including:
                            </p>
                            <ul className="list-disc list-inside text-[#a1a1aa] mt-4 space-y-2">
                                <li><strong className="text-[#fafafa]">Through the Services:</strong> We collect Personal Information through the Services, such as when you sign up for our newsletter, contact customer support, or request a demo.</li>
                                <li><strong className="text-[#fafafa]">From Other Sources:</strong> We receive your Personal Information from other sources, such as publicly available databases and joint marketing partners.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Use of Personal Information</h2>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                We use Personal Information for legitimate business purposes, including:
                            </p>
                            <ul className="list-disc list-inside text-[#a1a1aa] mt-4 space-y-2">
                                <li>To respond to your inquiries and fulfill your requests</li>
                                <li>To send administrative information to you</li>
                                <li>To send you marketing communications that we believe may be of interest to you</li>
                                <li>To personalize your experience on the Services</li>
                                <li>For our business purposes, such as data analysis, audits, fraud monitoring, and prevention</li>
                                <li>As we believe to be necessary or appropriate to comply with applicable law</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Disclosure of Personal Information</h2>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                We disclose Personal Information:
                            </p>
                            <ul className="list-disc list-inside text-[#a1a1aa] mt-4 space-y-2">
                                <li>To our affiliates for the purposes described in this Privacy Policy</li>
                                <li>To our third-party service providers who provide services such as hosting, data analysis, IT and infrastructure, customer service, email delivery, and auditing</li>
                                <li>To comply with legal obligations and protect our rights</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Information Collected Automatically</h2>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                We and our service providers may collect certain information automatically when you use our Services. This information may include your IP address, browser type, operating system, device identifiers, pages viewed, links clicked, and the date and time of your visit.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Security</h2>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                We use reasonable organizational, technical, and administrative measures designed to protect Personal Information within our organization. Unfortunately, no data transmission or storage system can be guaranteed to be 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                This Privacy Policy does not address, and we are not responsible for, the privacy, information, or other practices of any third parties. The inclusion of a link on the Services does not imply endorsement of the linked site or service by us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Use of Services by Minors</h2>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                The Services are not directed to individuals under the age of eighteen (18), and we do not knowingly collect Personal Information from individuals under 18.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Updates to this Privacy Policy</h2>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                We may change this Privacy Policy. The "Last updated" date at the top of this page indicates when this Privacy Policy was last revised. Any changes will become effective when we post the revised Privacy Policy on the Services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <p className="text-[#a1a1aa] mt-4">
                                <a href="mailto:info@star.ga" className="text-blue-400 hover:text-blue-300 transition-colors">
                                    info@star.ga
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-8 border-t border-[#27272a]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-[#71717a]">
                        &copy; {new Date().getFullYear()} STARGA Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="/privacy"
                            className="text-sm text-[#fafafa] hover:text-blue-400 transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
