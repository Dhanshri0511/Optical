import React, { useState } from 'react';

const Careers = () => {
    const [name, setName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleSendResume = () => {
        // Formulate the email content
        const emailContent = `Name: ${name}\n Contact Number: ${contactNumber}\n Address: ${address}\n \n Please find attached my resume.`;

        // Open default email client with pre-filled content
        window.location.href = `mailto:opticalarcinfo@gmail.com?subject=Send Resume &body=${encodeURIComponent(emailContent)}`;
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className='text-center text-5xl text-blue-900 mb-10 font-bold'>Submit Your Resume</h2>
            <form className='max-w-lg mx-auto'>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg font-semibold text-black mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 p-2 border border-gray-400 rounded-md w-full focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="contactNumber" className="block text-lg font-semibold text-black mb-2">Contact Number</label>
                    <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        className="mt-1 p-2 border border-gray-400 rounded-md w-full focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-lg font-semibold text-black mb-2">Address</label>
                    <textarea
                        id="address"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="mt-1 p-2 border border-gray-400 rounded-md w-full focus:outline-none focus:border-blue-500"
                        rows="4"
                        required
                    ></textarea>
                </div>
                
                <button
                    type="button"
                    onClick={handleSendResume}
                    className="bg-blue-600 text-lg text-white px-6 py-3 rounded-md mt-6 hover:bg-blue-700 focus:outline-none"
                >
                    Send Resume
                </button>
            </form>
        </div>
    );
};

export default Careers;
