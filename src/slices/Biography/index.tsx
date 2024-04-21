import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import WhatIUse from "@/components/WhatIUse";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */
const Biography = ({ slice }: any): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-2 gap-y-6 md:grid-cols-[1fr,4fr]">
        <Avatar />

        <div>
          <Heading className="col-start-1">About Me</Heading>
          <br></br>
          <div className="prose-xl prose-slate prose-invert col-start-1">
            <p
              className="about-text text-base md:text-lg lg:text-xl"
              style={{ wordWrap: "break-word" }}
            >
              As a dedicated tech enthusiast, I'm committed to honing my skills
              and becoming a proficient developer. I'm fueled by my deep
              interest in product development and fostering collaboration within
              the developer community. Eager to broaden my expertise, I aim to
              excel across various domains, setting my sights on roles in <span style={{color:"red"}}>DATA
              SCIENCE, MACHINE LEARNING, and ARTIFICIAL INTELLIGENCE </span>
              specialization. Passionate about the dynamic landscape of
              technology, I'm driven to explore new challenges and embrace
              continuous learning. With a thirst for knowledge and a growth
              mindset, I eagerly pursue opportunities to expand my skill set and
              contribute meaningfully to innovative projects. Committed to
              excellence, I strive to leverage cutting-edge technologies to
              create impactful solutions that address real-world problems.
              Inspired by the potential of technology to drive positive change,
              I'm motivated to make a meaningful impact in the ever-evolving
              field of software development.
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <WhatIUse></WhatIUse>
    </Bounded>
  );
};

export default Biography;
