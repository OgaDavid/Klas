import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ({
  faqs,
}: {
  faqs: { id: string; question: string; answer: string }[];
}) {
  return (
    <section className="container mb-[160px]">
      <div>
        <div className="max-md:mb-[40px] mb-[100px]">
          <h2 className="text-5xl leading-[62px] max-md:text-[32px] max-md:leading-[42px] text-black text-center font-bold">
            Frequently asked questions
          </h2>
        </div>
      </div>
      <div className="max-w-[1220px] bg-white rounded-[12px] shadow-lg">
        <Accordion type="single" collapsible className="pt-[20px]">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <AccordionItem className="px-5 md:px-[60px]" value={faq.id}>
                <AccordionTrigger className="py-[25px] text-start pr-[40px] text-lg leading-[20px] font-medium md:font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-left font-light text-[rgba(0,0,0,.741)]">{faq.answer}</AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
