import { Link } from "react-router-dom";

const peopleIAdmire = [
  { name: "Ivan Zhao", url: "https://ivanhzhao.notion.site/", description: "" },
  { name: "Anthony Bourdain", url: "https://www.youtube.com/watch?v=vPlPKlCzsrw", description: "" },
  { name: "Madeline Lawrence", url: "https://x.com/madelinelawren", description: "" },
  { name: "Andy Zingler", url: "https://www.instagram.com/andyzingler/", description: "" },
];

const readingAndListening = [
  { name: "NAP Log", url: "https://naplog.substack.com/", description: "" },
  { name: "Jannik Schilling", url: "https://www.jannikschilling.com/writing/", description: "" },
  { name: "Uncapped with Jack Altman", url: "https://uncappedpod.com", description: "" },
  { name: "Lenny's Podcast", url: "https://www.lennysnewsletter.com/podcast", description: "" },
];

const standOuts = [
  { name: "Coming soon", description: "" },
];

const Section = ({ title, items }: { title: string; items: { name: string; url?: string; description: string }[] }) => (
  <div className="mt-10">
        <p className="text-xs text-muted-foreground mb-2">{title}</p>
    <div className="border-t border-border pt-3">
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-baseline gap-2">
            <span className="text-xs leading-none relative top-[-1px]">•</span>
            <div>
              <span className="text-xs font-medium leading-snug">
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                    {item.name}
                  </a>
                ) : (
                  item.name
                )}
              </span>
              {item.description && (
                <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Consumption = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-md mx-auto px-6 py-12 md:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-xs underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          ← Back
        </Link>

        <Section title="My thought leaders" items={peopleIAdmire} />
        <Section title="Reading & listening" items={readingAndListening} />
        <Section title="Stand outs" items={standOuts} />
      </div>
    </div>
  );
};

export default Consumption;
