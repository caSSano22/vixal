import { SectionHeader } from "@/components/ui/SectionHeader";
import { AccordionList } from "@/components/interactive/AccordionList";
import { faqItems } from "@/constants/sections/faq";

export function FAQ() {
  return (
    <section
      id="faq"
      style={{ background: "#040404", paddingTop: "10rem", paddingBottom: "10rem", position: "relative" }}
    >
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "0 2.5rem",
        }}
      >
        <SectionHeader
          badge="FAQ"
          title={
            <>
              Got Questions?{" "}
              <span className="gradient-text">We&apos;ve Got Answers.</span>
            </>
          }
          subtitle="Everything you need to know about VIXAL."
        />
        <AccordionList items={faqItems} />
      </div>
    </section>
  );
}
