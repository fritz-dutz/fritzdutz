import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface ExperienceItem {
  company: string;
  url: string;
  role: string;
  description: ReactNode;
}

const experience: ExperienceItem[] = [
  {
    company: "NAP",
    url: "https://www.nap.vc/",
    role: "Visiting Analyst",
    description: "Working hard at my dream job",
  },
  {
    company: "Investa",
    url: "https://investa.de/",
    role: "Special Projects",
    description: <>Worked under Dr. Christian Meine & <a href="https://danielgroner.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Daniel Groner</a></>,
  },
  {
    company: "Enpal",
    url: "https://www.enpal.de/",
    role: "Operations CGO Office",
    description: "Worked under Julius (YC F25 Founder) & Dr. Constantin Steigmiller",
  },
  {
    company: "Colonia",
    url: "https://checkandrent.com/",
    role: "RevOps & Product",
    description: "Worked under Founders, Jakob Sadoun & Kaspar Filipp",
  },
];

const projects = [
  {
    name: "Clio",
    url: "https://github.com/inin-zou/Clio",
    description: "Voice AI agent handling inbound insurance claim calls",
  },
  {
    name: "Wiggle",
    url: "https://github.com/Konsequanzheng/wiggle",
    description: "AI-Powered 3D Interactive Animation Design Platform",
  },
  {
    name: "Koti",
    url: "https://www.canva.com/design/DAGWp7E2Luc/sn6Zv7iWeVuw38hVmzlKYw/view?",
    description: "PM Platform for the Construction Industry",
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-md mx-auto px-6 py-12 md:py-20">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-xs underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          ← Back
        </Link>

        {/* Experience Section */}
        <div className="mt-10">
          <p className="text-xs text-muted-foreground mb-4">Experience</p>

          <div className="border-t border-border">
            {experience.map((item, index) => (
              <div
                key={index}
                className="py-4 border-b border-border"
              >
                <h3 className="text-xs font-medium leading-snug">
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">{item.company}</a>
                  <span className="text-muted-foreground font-normal"> - {item.role}</span>
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-10">
          <p className="text-xs text-muted-foreground mb-4">Projects</p>

          <div className="border-t border-border">
            {projects.map((item, index) => (
              <div
                key={index}
                className="py-4 border-b border-border"
              >
                <h3 className="text-xs font-medium leading-snug">
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">{item.name}</a>
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
