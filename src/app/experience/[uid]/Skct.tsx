import Heading from "@/components/Heading";
import React from "react";

function Skct() {
  return (
    <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
      <Heading as="h1">Sri Krishna College Of Technology</Heading>
      <div className="flex gap-4 text-yellow-400">
        <span className="text-xl font-bold">
          B.E. CSE Student (Mar 2018 - Jun 2022)
        </span>
      </div>
      <p className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300"></p>
      <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">
            Computer Science Student Experience
          </h1>
          <p className="text-lg leading-loose">
            As a college student studying computer science and engineering, I am
            passionate about exploring various aspects of software development
            and emerging technologies. I am committed to continuous learning and
            self-improvement, striving to acquire new skills and knowledge to
            enhance my career prospects and contribute meaningfully to the tech
            industry.
          </p>
          <h2 className="text-2xl font-bold">Interests and Learning:</h2>
          <ul>
            <li>
              <h3 className="text-xl font-semibold">Full-Stack Development:</h3>
              <p className="text-lg leading-loose">
                Actively learning the MERN (MongoDB, Express.js, React.js,
                Node.js) stack to build scalable and responsive web
                applications, leveraging the power of JavaScript-based
                technologies for both frontend and backend development.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Mobile App Development:</h3>
              <p className="text-lg leading-loose">
                Exploring mobile app development using React Native and Flutter
                frameworks, enabling cross-platform app development with a
                single codebase, and gaining proficiency in building
                native-quality mobile applications for iOS and Android
                platforms.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">
                Desktop App Development:
              </h3>
              <p className="text-lg leading-loose">
                Experimenting with Electron.js for building cross-platform
                desktop applications using web technologies (HTML, CSS,
                JavaScript), aiming to create desktop apps that offer the same
                user experience as native applications.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">
                AI, ML, and Data Science:
              </h3>
              <p className="text-lg leading-loose">
                Delving into the field of artificial intelligence (AI), machine
                learning (ML), and data science, studying algorithms, models,
                and techniques to analyze and interpret data, and exploring
                applications in areas such as predictive analytics, natural
                language processing, and computer vision.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Continuous Learning:</h3>
              <p className="text-lg leading-loose">
                Actively participating in online courses, tutorials, hackathons,
                and coding challenges to broaden my knowledge and skills in
                various technology domains, and staying updated on industry
                trends and best practices through self-study and engagement with
                the developer community.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skct;
