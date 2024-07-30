import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FaqItem } from "@/types";
import TextWithLineBreaks from "./TextWithLineBreaks";

type Props = {
  faqs: FaqItem[];
};

const Faq = ({ faqs }: Props) => {
  return (
    <Accordion type="single" collapsible className="w-full bg-white p-2">
      {faqs.map((faq, index) => {
        return (
          <AccordionItem value={`faq-item-${index}`} key={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              <TextWithLineBreaks text={faq.answer} />
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default Faq;
