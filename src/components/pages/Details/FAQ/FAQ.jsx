import React from "react";
import FAQCard from "./FAQCard";
import FAQCardMoreLess from "./FAQCardMoreLess";
import QuestionIcon from "../../../../assets/images/Details/FAQ/questionIcon.png";
const FAQ = () => {
  const faqData = [
    {
      question: "What type of clothing are suitable for this trek?",
      answer:
        "Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
    },
  ];

  let arr = [
    <FAQCard questions={faqData} />,
    <FAQCard questions={faqData} />,
    <FAQCard questions={faqData} />,
    <FAQCard questions={faqData} />,
    <FAQCard questions={faqData} />,
    <FAQCard questions={faqData} />,
    <FAQCard questions={faqData} />,
    <FAQCard questions={faqData} />,
    <FAQCard questions={faqData} />,
    <FAQCard questions={faqData} />,
    <FAQCard questions={faqData} />,
    <FAQCard questions={faqData} />,
  ];
  return (
    <div className="max-w-Container mx-auto ">
      <div className="w-[850px] box-border flex gap-20 items-start">
        <div>
          <img src={QuestionIcon} alt="" />
        </div>

        <FAQCardMoreLess cards={arr} />
      </div>
    </div>
  );
};

export default FAQ;
