import { Link } from "react-router-dom";

const contacts = [
  { label: "Email", url: "mailto:dutzfrederick@gmail.com" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/fritz-dutz/" },
  { label: "X", url: "https://x.com/fritz_dutz" },
  { label: "Git", url: "https://github.com/fritz-dutz" },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-md mx-auto px-6 py-12 md:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-xs underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          ← Back
        </Link>

        <div className="mt-10">
          <p className="text-xs text-muted-foreground mb-4">Places</p>

          <div className="border-t border-border pt-4 flex flex-wrap gap-6">
            {contacts.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target={item.url.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-xs underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
