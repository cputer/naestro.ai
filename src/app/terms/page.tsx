"use client";

import Link from "next/link";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-[#fafafa]">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-[#27272a]/50">
                <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <svg className="w-8 h-8" viewBox="0 0 300 276" fill="#ffffff">
                            <g transform="translate(0,276) scale(0.1,-0.1)">
                                <path d="M2242 2653 c-11 -10 -143 -238 -295 -508 -249 -446 -829 -1480 -981 -1750 -77 -137 -86 -158 -86 -198 1 -51 49 -97 102 -97 55 0 81 32 167 201 46 90 166 322 266 514 100 193 303 584 450 870 147 286 313 606 368 710 59 112 100 202 100 219 0 50 -52 72 -91 39z" />
                                <path d="M634 2591 c-147 -24 -260 -120 -305 -260 -20 -60 -22 -92 -24 -356 -2 -169 -8 -304 -14 -324 -23 -75 -94 -141 -152 -141 -13 0 -34 -3 -46 -6 -23 -6 -23 -9 -23 -150 l0 -144 48 0 c72 0 130 -34 162 -95 24 -48 25 -57 31 -310 7 -277 14 -324 64 -410 45 -78 185 -185 242 -185 13 0 37 36 85 128 l67 127 -52 25 c-91 44 -93 49 -101 346 -9 310 -18 352 -96 437 -28 30 -69 64 -92 76 l-42 20 37 16 c78 32 138 108 172 215 14 45 18 107 22 335 4 218 8 285 19 302 27 42 71 56 192 61 l112 5 0 143 0 144 -53 0 c-30 0 -87 2 -128 4 -41 3 -97 1 -125 -3z" />
                                <path d="M2393 2401 c-35 -66 -63 -126 -63 -134 0 -9 9 -19 20 -22 11 -4 28 -18 38 -33 15 -23 18 -65 22 -347 5 -307 6 -322 28 -370 27 -59 61 -98 120 -135 l42 -28 -44 -26 c-24 -14 -56 -40 -70 -57 -71 -84 -85 -151 -95 -444 -9 -274 -12 -288 -81 -322 -37 -19 -60 -23 -142 -23 l-98 0 0 -146 0 -146 163 4 c152 3 166 5 220 30 115 54 180 128 219 251 17 52 22 103 28 312 5 144 13 267 20 290 16 53 76 112 120 119 19 3 52 8 73 11 l37 6 0 134 0 135 -28 0 c-16 0 -51 7 -79 15 -46 14 -62 26 -115 88 -1 1 -4 164 -7 362 -6 352 -7 361 -30 413 -14 31 -43 69 -70 93 -46 41 -129 89 -153 89 -7 0 -41 -54 -75 -119z" />
                            </g>
                        </svg>
                        <span className="text-lg font-semibold tracking-tight group-hover:text-green-500 transition-colors">
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
                    <p className="text-[#71717a] mb-12">Last updated: December 2025</p>

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
                                <a href="mailto:info@star.ga" className="text-green-500 hover:text-green-400 transition-colors">
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
                            className="text-sm text-[#fafafa] hover:text-green-500 transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
