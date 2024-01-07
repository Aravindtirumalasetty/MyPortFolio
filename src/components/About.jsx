import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Greetings! I'm Aravind, a dedicated Full Stack Developer deeply
          passionate about transforming creative concepts into dynamic and
          efficient web applications. My proficiency lies in the MERN (MongoDB,
          Express.js, React.js, Node.js) stack, where I bring ideas to life with
          seamless integration across the entire development spectrum.
        </p>

        <br />

        <p className="text-xl">
          I'm a skilled Full Stack Developer specializing in the MERN stack for
          efficient database management, server-side development, and dynamic
          UIs. With a knack for competitive programming, I excel in crafting
          optimized solutions using Data Structures and Algorithms. Proficient
          in Java and operating systems, I bring a deep understanding of DBMS,
          SQL, and collaborative development through GitHub
        </p>
      </div>
    </div>
  );
};

export default About;
