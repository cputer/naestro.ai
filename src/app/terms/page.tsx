"use client";

import Link from "next/link";

export default function TermsOfService() {
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
                    <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
                    <p className="text-[#71717a] mb-12">Last updated: December 2024</p>

                    <div className="prose prose-invert max-w-none space-y-8">
                        <section>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                Welcome to NAESTRO. These Terms of Service ("Terms") govern your access to and use of the NAESTRO website, products, and services (collectively, the "Services") provided by STARGA Inc. ("we," "us," or "our"). By accessing or using our Services, you agree to be bound by these Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use the Services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                You may use the Services only in compliance with these Terms and all applicable laws, rules, and regulations. You agree not to:
                            </p>
                            <ul className="list-disc list-inside text-[#a1a1aa] mt-4 space-y-2">
                                <li>Use the Services for any unlawful purpose or in violation of any applicable laws</li>
                                <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
                                <li>Attempt to gain unauthorized access to any portion of the Services</li>
                                <li>Use any automated system to access the Services in a manner that sends more requests than a human can reasonably produce</li>
                                <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Services without express written permission</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                The Services and all contents, including but not limited to text, images, graphics, logos, icons, software, and the compilation thereof, are the exclusive property of STARGA Inc. or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">4. User Content</h2>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                You may be able to submit content through the Services. You retain ownership of any intellectual property rights that you hold in that content. By submitting content, you grant us a worldwide, royalty-free license to use, reproduce, modify, and display such content in connection with providing the Services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">5. Disclaimer of Warranties</h2>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, STARGA INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">7. Indemnification</h2>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                You agree to indemnify and hold harmless STARGA Inc., its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of the Services or your violation of these Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">8. Modifications to Terms</h2>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                We reserve the right to modify these Terms at any time. If we make changes, we will provide notice by updating the date at the top of these Terms. Your continued use of the Services after any changes constitutes your acceptance of the new Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                If you have any questions about these Terms, please contact us at:
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
                            className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-sm text-[#fafafa] hover:text-blue-400 transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
