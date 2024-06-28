import HeaderL from "../../HeaderL";

const PrivacyPolicy = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 py-20">
                <div className="w-full md:w-1/2 pl-8 pr-8 text-center md:text-left">
                    <h2 className="text-4xl md:text-7xl font-bold mb-4 text-blue-900">Privacy Policy</h2>
                </div>
                <div className="w-full md:w-1/2 mt-10 md:mt-0">
                    <img src='src/Images/privacy.jpg' className="w-full h-auto" alt="Privacy Policy" />
                </div>
            </div>

            <div className="m-10 mt-10 md:mt-28 mb-20">
                <p className="mb-4 text-lg ">
                    Thank you for visiting the website of Optical Arc IT services ("Optical Arc," "we," "us," or "our"). We prioritize the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or use our services.
                </p>
                <h3 className="text-xl font-bold mb-2">Information We Collect</h3>
                <p className="mb-4 text-sm">
                    We may collect personal information you voluntarily provide to us, such as your name, email address, and phone number. We also gather information about your browsing activities and preferences through cookies and similar technologies.
                </p>
                <h3 className="text-xl font-bold mb-2">Data Security</h3>
                <p className="mb-4 text-sm">
                    We employ industry-standard measures to protect your information, but please note that no method of transmission or storage is entirely secure.
                </p>
                <h3 className="text-xl font-bold mb-2">Third-Party Links</h3>
                <p className="mb-4 text-sm">
                    Our Privacy Policy does not apply to third-party websites or services linked on our website. We recommend reviewing their privacy policies.
                </p>
                <h3 className="text-xl font-bold mb-2">Use of Information</h3>
                <p className="mb-4 text-sm">
                    We use the information we collect to provide and improve our services, communicate with you, conduct analytics and research, and comply with legal obligations.
                </p>
                <h3 className="text-xl font-bold mb-2">Changes to This Privacy Policy</h3>
                <p className="mb-4 text-sm">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
                <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                <p className="mb-4 text-sm">
                    If you have any questions or concerns about our Privacy Policy, please contact us at:
                </p>
                <p className="mb-4 text-sm">
                    Optical Arc IT Services<br />
                    <span className="text-blue-600">Email: info@opticalarc.com</span><br />
                    Phone: +91 8600027589
                </p>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
