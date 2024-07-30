import Faq from "@/common/Faq";
import Faqs from "@/constants/Faqs";

const FaqPage = () => {
  return (
    <div className="space-y-4 bg-gray-50 p-10 rounded-lg">
      <h1 className="text-2xl font-bold">Frequently Asked Questions</h1>
      <Faq faqs={Faqs} />
    </div>
  );
};

export default FaqPage;
