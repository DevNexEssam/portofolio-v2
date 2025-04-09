/* eslint-disable react/no-unescaped-entities */
import { BsFileCode, BsHexagon, BsCodeSlash } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { SiTypescript, SiReact, SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

export default function Hero() {
  const techStack = [
    {
      icon: <SiTypescript className="h-6 w-6 text-[#3178C6]" />,
      label: "TypeScript",
    },
    {
      icon: <SiReact className="h-6 w-6 text-[#61DAFB]" />,
      label: "React",
    },
    {
      icon: <SiNextdotjs className="h-6 w-6 text-foreground" />,
      label: "Next.js",
    },
    {
      icon: <SiTailwindcss className="h-6 w-6 text-[#06B6D4]" />,
      label: "Tailwind CSS",
    },
    {
      icon: <SiMongodb className="h-6 w-6 text-green-600" />,
      label: "Mongodb",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-background pt-20 md:pt-0">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-foreground/5"></div>
      </div>
      
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-primary/20 to-primary-foreground/20 rounded-full blur-3xl opacity-70 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-primary/30 to-primary-foreground/20 rounded-full blur-3xl opacity-70 animate-float-delay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-t from-primary/10 to-primary-foreground/10 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Content */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">
          <div>
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 bg-muted text-foreground border border-primary/20 hover:bg-primary/10 transition-colors">
              Available for Freelance Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-primary">
              Hi, I'm{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
                Essam Mohamed
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-text-secondary">
              Front-End Developer
            </h2>
          </div>

          <p className="text-lg max-w-xl text-text-secondary">
            I craft responsive websites where technologies meet creativity. Building exceptional digital experiences with modern frontend frameworks.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium  rounded-md border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-primary text-text-primary border-primary hover:bg-primary/90 hover:scale-[1.03] transform transition-transform"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-md border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-background text-foreground border-border hover:bg-muted hover:scale-[1.03] transform transition-transform"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex flex-col gap-4 pt-4">
            {/* Tech Stack */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-sm text-text-secondary">Tech I work with:</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full border border-border hover:bg-background transition-colors group"
                    title={tech.label}
                  >
                    {tech.icon}
                    <span className="text-sm text-text-secondary group-hover:text-foreground transition-colors">
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="order-1 md:order-2 flex justify-center relative">
          <div className="relative group">
            <div className="absolute -z-10 inset-0 rounded-full bg-gradient-to-tr from-primary/30 via-primary-foreground/20 to-primary/30 blur-2xl group-hover:opacity-80 transition-opacity"></div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-muted hover:border-primary/50 transition-all duration-300">
              <Image
                src="/profile.png"
                alt="Essam Mohamed"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 rounded-full p-3 shadow-lg bg-muted border border-primary/20 hover:scale-110 transform transition-transform">
              <BsFileCode className="h-5 w-5 text-primary" />
            </div>
            <div className="absolute top-1/2 -left-6 rounded-full p-3 shadow-lg bg-muted border border-primary/20 hover:scale-110 transform transition-transform">
              <BsHexagon className="h-5 w-5 text-primary" />
            </div>
            <div className="absolute -bottom-4 right-1/4 rounded-full p-3 shadow-lg bg-muted border border-primary/20 hover:scale-110 transform transition-transform">
              <BsCodeSlash className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}