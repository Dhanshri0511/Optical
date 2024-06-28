import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How to get a job in Optical Arc?",
      answer: "1. Online Assessment Test. This is the first round of the recruitment process.\n2. Technical Interview. If you qualified for the online test, which is the first round, then you go for a technical interview.\n3. HR Interview. If you clear the technical interview round, you will be eligible for the HR round."
    },
    {
      question: "Who is eligible for Optical Arc?",
      answer: "To be eligible for a job at Optical Arc, you must have a bachelor's degree in engineering, computer applications, or a related field."
    },
    {
      question: "What does Optical Arc company do?",
      answer: "Optical Arc provides software development, maintenance, and independent validation services to companies in finance, insurance, manufacturing, and other domains."
    },
    {
      question: "How is an Optical Arc interview?",
      answer: "The interview process is generally straightforward, including a written assessment, a technical round, and an HR round."
    },
    {
      question: "Is Optical Arc good for freshers?",
      answer: "Yes. Starting a career at Optical Arc is very beneficial because it's a small scale company, so you can learn a lot of things."
    },
  ];

  return (
    <div className="mt-10 mx-4 sm:mx-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-blue-900 text-center">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            className="text-lg sm:text-xl font-semibold text-blue-700 w-full text-left focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </button>
          {activeIndex === index && (
            <div className="mt-2 text-gray-700">
              {/* Splitting answer into lines */}
              {faq.answer.split('\n').map((line, i) => (
                <p key={i} className="mb-2">{line}</p>
              ))}
            </div>
          )}
          <div className="border-b-2 border-gray-200 mt-2"></div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
