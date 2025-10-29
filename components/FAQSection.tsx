import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion.tsx";
import { Button } from "./ui/button.tsx";

const faqs = [
  {
    q: "What is sovereign infrastructure?",
    a: "Sovereign infrastructure means you have full control over your data, deployment, and operations—no vendor lock-in, no hidden access."
  },
  {
    q: "How does Quantum Rishi ensure security?",
    a: "We use end-to-end encryption, zero-trust architecture, and regular third-party audits to ensure your data and operations are secure."
  },
  {
    q: "Are you compliant with industry standards?",
    a: "Yes, we are SOC 2 compliant and follow best practices for privacy, security, and operational excellence."
  },
  {
    q: "How can I deploy Quantum Rishi solutions?",
    a: "You can deploy on-premises, in your private cloud, or on our managed cloud. We support hybrid and multi-cloud strategies."
  },
  {
    q: "What support options are available?",
    a: "We offer 24/7 support, dedicated account managers, and custom SLAs for enterprise clients."
  },
  {
    q: "How is my data encrypted?",
    a: "All data is encrypted in transit and at rest using industry-standard protocols and quantum-resistant algorithms."
  },
  {
    q: "What is quantum resistance?",
    a: "Quantum resistance means our cryptography is designed to withstand attacks from quantum computers, ensuring long-term security."
  },
  {
    q: "Can I integrate with my existing systems?",
    a: "Yes, we provide APIs, SDKs, and integration support for a wide range of platforms and tools."
  },
  {
    q: "How do you handle compliance updates?",
    a: "We monitor regulatory changes and update our systems to ensure ongoing compliance with global standards."
  },
  {
    q: "How do I get started or request a demo?",
    a: "Contact us for a personalized demo or sign up for a free trial. Our team will guide you through onboarding."
  }
];

export function FAQSection() {
  return (
    <section className="py-24 bg-accent/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="mb-12">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={String(idx)}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-8">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
