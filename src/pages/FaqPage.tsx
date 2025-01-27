import Faq from "@/common/Faq";
import { Button } from "@/components/ui/button";
import { ResumeLink, LinkedInLink } from "@/constants/BasicConstants";
import Faqs from "@/constants/Faqs";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";

const FaqPage = () => {
  const openLinkedIn = () => {
    window.open(LinkedInLink, "_blank");
  };
  const openResume = () => {
    window.open(ResumeLink, "_blank");
  };

  return (
    <div className="space-y-4 bg-gray-50 p-10 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Frequently Asked Questions</h1>
          <p className="text-gray-500 text-xs">
            Know about me more with questions
          </p>
        </div>

        <div className="flex gap-4">
          <Button variant="outline" onClick={openLinkedIn}>
            <OpenInNewWindowIcon className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
          <Button variant="outline" onClick={openResume}>
            <OpenInNewWindowIcon className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </div>
      </div>
      <Faq faqs={Faqs} />
    </div>
  );
};

export default FaqPage;
