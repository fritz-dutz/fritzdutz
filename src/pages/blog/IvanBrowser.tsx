import { Link } from "react-router-dom";

const BlogIvanBrowser = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-md mx-auto px-6 py-12 md:py-20">
        <Link
          to="/writing"
          className="inline-flex items-center gap-1 text-xs underline underline-offset-4 hover:opacity-70 transition-opacity">
          ← Back
        </Link>

        <div className="mt-10 space-y-3">
          <p className="text-xs text-muted-foreground">May 9, 2026</p>
          <h1 className="font-medium text-sm">If Ivan Zhao built a browser</h1>

          <p className="text-xs leading-relaxed">
            Ever since my dad showed me Notion in 10th grade through an Ali Abdaal tutorial, I have been obsessed. Really obsessed.
          </p>

          <p className="text-xs leading-relaxed">
            Ivan Zhao has to be the founder I look up to the most right now. I love the way he cares about each fucking pixel. I love that he has his own philosophy and sticks to it. I love the fact that he'll only do podcasts if he directs them. I love that his office bathrooms look like those at designer hotels. I love the culture he has built at Notion. I love his taste.
          </p>

          <p className="text-xs leading-relaxed">
            So what if he built a browser? These are the features I think he would add:
          </p>

          <ol className="list-decimal list-outside pl-4 space-y-2">
            <li className="text-xs leading-relaxed">
              <strong>Intent-aware.</strong> Based on what you're doing, it proactively recommends actions, instead of you having to prompt it. Add this person to a CRM, compare this flights price with other sites, save to second brain because you read the whole blog? You shouldn't have to ask or type it out each time.
            </li>
            <li className="text-xs leading-relaxed">
              <strong>Learns your workflows.</strong> Always translating German emails? Filling out the same repetitive form each month? It saves that. Your most frequent tasks become reusable skills.
            </li>
            <li className="text-xs leading-relaxed">
              <strong>Your second brain.</strong> Obsidian-like. Enriches your saved thoughts, your CRM entries, adds to your grocery list - and is easily retrievable when you need it.
            </li>
            <li className="text-xs leading-relaxed">
              <strong>Contextmaxxing.</strong> Through integrations, past workflows, your preferences - it becomes genuinely yours over time, produces outcomes you would use, not AI slop.
            </li>
            <li className="text-xs leading-relaxed">
              <strong>Fully customizable.</strong> Layout, colors, style - yours. Makes it a joy to spend more time in the browser. Rich, luxurious, studio-like.
            </li>
            <li className="text-xs leading-relaxed">
              <strong>Accessible everywhere and anyhow</strong> (is that a word?). Apple Watch, phone, laptop. Text it, click it, speak to it.
            </li>
          </ol>

          <p className="text-xs leading-relaxed">
            I know no one needs another f- browser. But what if this one made you actually 10x more productive (like actually, 10x) - and feels like Notion, Apple, and Aesop had a baby?
          </p>

          <p className="text-xs leading-relaxed">
            Or maybe we do need another f- browser. Knowledge workers spend all day in a browser. It's basically our OS. And right now it has little personality, little memory, little taste. It has more potential in my opinion. Especially with today's capabilities.
          </p>

          <p className="text-xs leading-relaxed">
            Just my initial thoughts. Currently using Dia, but could use something better.
          </p>
        </div>
      </div>
    </div>);

};

export default BlogIvanBrowser;
