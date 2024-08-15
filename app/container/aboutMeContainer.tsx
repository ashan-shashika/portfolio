import React from "react";
import Card from "../components/card";

type Props = {};

export default function AboutMeContainer({}: Props) {
  const skills = [
    "React JS",
    "Next JS",
    "Node JS",
    "TypeScript",
    "Tailwind",
    "Matirial UI",
    "Bootstrap",
    "CSS",
  ];
  return (
    <section className="py-8 min-h-96 pb-24 mx-auto max-w-6xl">
      <div className="h-auto px-4 md:px-12">
        <div className="text-left text-slate-400 bg-slate-800/80 p-8 rounded-lg px-4 md:px-12 z-10">
          <div className="text-lg font-bold mb-4">About me</div>
          <p>
            As a passionate software engineer, I specialize in front-end
            development with a strong foundation in modern web technologies. My
            expertise lies in building dynamic, responsive, and user-centric
            applications using React.js, Next.js, and TypeScript. I have a keen
            eye for design, leveraging CSS, Tailwind, and Material UI to create
            visually appealing interfaces.
          </p>
          <br />
          <p>
            In addition to front-end development, I am proficient in working
            with GraphQL for efficient data fetching and manipulation. I am
            well-versed in version control using GitHub and have experience
            deploying and managing applications on AWS. My technical skills,
            combined with a dedication to continuous learning and
            problem-solving, enable me to deliver high-quality, scalable
            solutions that meet client needs.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 my-12 px-4 md:px-12">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>

      <div className="text-slate-400 text-lg font-bold my-4">
        Frontend Skills
      </div>
      <div className="grid grid-colos-3 md:grid-cols-6 grid-rows-2 gap-4">
        {skills.map((skill) => (
          <div
            className="p-4 bg-slate-800/60 rounded-lg text-white w-full px-8 bg-custom-radial grid-col-1"
            key={skill}
          >
            <div className="font-bold">{skill}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
