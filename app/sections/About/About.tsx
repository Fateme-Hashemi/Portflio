import React from "react";

import SectionHeading from "@/app/components/SectionHeading";
import { MotionDiv } from "@/app/components/MotionDiv";
import SectionWrapper from "@/app/components/SectionWrapper";
import { cn } from "@/lib/utils";

const HighlightText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <span className={cn(className, `px-1 py-0 rounded`)}>{text}</span>;
};

const HobbyLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="italic hover:rounded underline decoration-coral-500 hover:bg-uranian"
  >
    {children}
  </a>
);

export default function About() {
  return (
    <SectionWrapper id="about" className=" " sectionName="About">
      <MotionDiv
        className="flex-1 flex flex-col h-full"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <SectionHeading className="">About me</SectionHeading>

        <article className="grow text-justify text-base flex flex-col justify-evenly gap-10">
        <p className="">
  I&apos;m Elin Hashemi, a Software Developer with over three years of experience in creating visually appealing, responsive, and interactive web pages. My expertise lies in crafting dynamic user interfaces using technologies like HTML, CSS, JavaScript. I am passionate about building seamless and engaging user experiences, focusing on performance and accessibility.
</p>

          <p className="">
          I thrive on collaborating with designers and back-end developers to turn innovative ideas into high-quality code, ensuring optimal performance and user satisfaction. My experience includes working on major projects like Filimo and Televika, where I developed reusable components and optimized performance across devices. Additionally, I have a strong understanding of SEO principles, which allows me to enhance web page visibility and performance.
          </p>
          <p>
          With a keen eye for design, problem-solving abilities, and a dedication to delivering top-notch web solutions, I am always eager to learn new technologies and contribute to exciting projects.
          </p>
        </article>
      </MotionDiv>
    </SectionWrapper>
  );
}
