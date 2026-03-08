import { Link } from "react-router-dom";

const peopleIAdmire = [
  { name: "Coming soon", description: "" },
];

const readingAndListening = [
  { name: "Coming soon", description: "" },
];

const standOuts = [
  { name: "Coming soon", description: "" },
];

const Section = ({ title, items }: { title: string; items: { name: string; url?: string; description: string }[] }) => (
  <div className="mt-10">
    <p className="text-xs text-muted-foreground mb-4">{title}</p>
    <div className="border-t border-border">
      {items.map((item, index) => (
        <div key={index} className="py-4 border-b border-border">
          <h3 className="text-xs font-medium leading-snug">
            {item.url ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                {item.name}
              </a>
            ) : (
              item.name
            )}
          </h3>
          {item.description && (
            <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
          )}
        </div>
      ))}
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

        <Section title="People I admire" items={peopleIAdmire} />
        <Section title="Reading & listening" items={readingAndListening} />
        <Section title="Stand outs" items={standOuts} />
      </div>
    </div>
  );
};

export default Consumption;
