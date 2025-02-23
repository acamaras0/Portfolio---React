import React from "react";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Skills.scss";

const Skills = () => {
  const skills = [
    {
      name: "React",
      image: images.react,
      bgColor: "#d9f5ff75",
    },
    {
      name: "TypeScript",
      image: images.typescript,
      bgColor: "#d9f5ff75",
    },
    {
      name: "JavaScript",
      image: images.javascript,
      bgColor: "#d9f5ff75",
    },
    {
      name: "Styled Components",
      image: images.styledComponents,
      bgColor: "#d9f5ff75",
    },
    {
      name: "HTML",
      image: images.html,
      bgColor: "#d9f5ff75",
    },
    {
      name: "CSS",
      image: images.css,
      bgColor: "#d9f5ff75",
    },
    {
      name: "Node",
      image: images.node,
      bgColor: "#d9f5ff75",
    },
    {
      name: "PHP",
      image: images.php,
      bgColor: "#d9f5ff75",
    },
    {
      name: "PostgreSQL",
      image: images.postgresql,
      bgColor: "#d9f5ff75",
    },
    {
      name: "MySQL",
      image: images.mysql,
      bgColor: "#d9f5ff75",
    },
    {
      name: "Git",
      image: images.git,
      bgColor: "#d9f5ff75",
    },
    {
      name: "API",
      image: images.api,
      bgColor: "#d9f5ff75",
    },
    {
      name: "Vitest",
      image: images.vitest,
      bgColor: "#d9f5ff75",
    },
    {
      name: "Jira",
      image: images.jira,
      bgColor: "#d9f5ff75",
    },
  ];

  const experiences = [
    {
      id: 0,
      name: "Wolt Enterprises Oy",
      duration: "2023 - Now",
      role: "Software Engineer",
      description:
        "As a Software Engineer at Wolt Enterprises Oy, I am an integral member of the Retail Platforms, Warehouse team. Our primary focus is developing a comprehensive web application that serves Wolt Market employees globally, streamlining their daily operational tasks. My role predominantly revolves around utilizing React and TypeScript.",
    },
    {
      id: 1,
      name: "Hive Helsinki",
      duration: "2021 - 2022",
      role: "Web Development Graduate",
      description:
        "At Hive Helsinki I had the opportunity to develop my coding skills while building Full-Stack solutions using the latest technologies. Learning by doing and working together with other students is the base of Hive's pedagogy. This naturally improved my team player mindset alongside some important professional soft skills, such as communication and cooperation.",
    },
  ];

  return (
    <>
      <h2 className="head-text">
        Relevant Skills & <span>Experience</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.image} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.id}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.duration}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={experience.name}
                      key={experience.id}
                    >
                      <h4 className="bold-text">{experience.name}</h4>
                      <p className="p-text">{experience.role}</p>
                    </motion.div>
                    <Tooltip
                      id={experience.description}
                      effect="solid"
                      className="skills-tooltip"
                      key={experience.description}
                    >
                      {experience.description}
                    </Tooltip>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
