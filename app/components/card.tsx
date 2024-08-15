import React from "react";

type Props = {};

export default function Card({}: Props) {
  const FE_SKILLS = [
    "React Js",
    "Next Js",
    "TypeScript",
    "Relay",
    "Apollo Client",
    "Redux",
    "Tailwind",
    "Matirial UI",
    "CSS",
  ];

  const BE_SKILLS = [
    "Node Js",
    "Express Js",
    "TypeScript",
    "SQL",
    "Mongo DB",
    "Knex JS",
    "Prisma",
  ];
  return (
    <div className="p-4 text-left text-slate-400 bg-slate-800/80">
      <div className="flex flex-col">
        <div>Frontend Development</div>
        <div className="text-left text-gray-100">{FE_SKILLS.join(",  ")}</div>
      </div>
    </div>
  );
}
