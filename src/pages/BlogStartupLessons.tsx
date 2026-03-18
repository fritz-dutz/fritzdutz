import { Link } from "react-router-dom";

const BlogStartupLessons = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-md mx-auto px-6 py-12 md:py-20">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-1 text-xs underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          ← Back
        </Link>

        <div className="mt-10 space-y-6">
          <p className="text-xs text-muted-foreground">Oct 14, 2024</p>

          <h1 className="text-sm font-semibold leading-snug">
            10 lessons from 3 months at an early-stage start up
          </h1>

          <div className="space-y-4">
            <p className="text-xs leading-relaxed">
              <em className="text-[13px]">Background:</em> Over the Summer of 24' I spent 3 months living in Berlin to intern at an early stage, pre PMF start-up and was able to learn an incredible amount of lessons. Following the notion of reflecting after every major phase in my life, here are the 10 biggest lessons I was able to pick up:
            </p>

            <hr className="border-border" />

            <p className="text-xs leading-relaxed">
              <em className="text-[13px]">Lesson 1 - Appreciation:</em> This company, had a Slack channel with the sole purpose of giving thanks to other employees in front of the whole company, and it certainly left employees feeling appreciated and motivated to appear again by delivering impactful work.
            </p>

            <hr className="border-border" />

            <p className="text-xs leading-relaxed">
              <em className="text-[13px]">Lesson 2 - Data at the forefront:</em> The importance of laying out data points BEFORE implementing a new feature, process or product. This will allow you to pick up relevant insights from the first second and help you iterate right away. By mapping out the journey with data points before, you prioritize data-driven decisions and ensure you will have all the insights necessary.
            </p>

            <hr className="border-border" />

            <p className="text-xs leading-relaxed">
              <em className="text-[13px]">Lesson 3 - Hiring:</em> Wrong hire? Months of resources (time, money, potential) down the drain. It's f*cking difficult to hire, especially if you are a small company, and it's important to note that these early employees shape the trajectory of how your company will perform. Still trying to understand how to master hiring with little resources and proven track record.
            </p>

            <hr className="border-border" />

            <p className="text-xs leading-relaxed">
              <em className="text-[13px]">Lesson 4 - Technical Co-Founder:</em> As a non-technical person myself, this scares me a little, but there is no way I am building a product without technical co-founders. A good product is everything (literally) and having a strong CTO will allow you to fundraise more and attract + retain the right IT talent.
            </p>

            <hr className="border-border" />

            <p className="text-xs leading-relaxed">
              <em className="text-[13px]">Lesson 5 - Perfection:</em> From a recent consulting case competition, it became clear to me that it is easy to bring "toxic" working habits from the Consulting/IB Industry into a start-up. What I am trying to say, is that you will try to bring that perfectionist approach with you and work on the "nice to haves". It is important to only work on the "game changers" and ship fast, especially in the early-stages.
            </p>

            <hr className="border-border" />

            <p className="text-xs leading-relaxed">
              <em className="text-[13px]">Lesson 6 - Low code Automation:</em> I have been using tools such as Make, Zapier and Airtable. It is astonishing how you can automate various tasks and processes, but only because you know automation (a nail), it does not mean you need to hammer everything (internal processes) - keep it simple.
            </p>

            <hr className="border-border" />

            <p className="text-xs leading-relaxed">
              <em className="text-[13px]">Lesson 7 - Communication:</em> The Head of Revenue at the time, taught me this framework when it comes to be a healthy communicator and someone people actually want to work with. Care personally & challenge directly! Don't lay in any of the other 3 quadrants.
            </p>

            <hr className="border-border" />

            <p className="text-xs leading-relaxed">
              <em className="text-[13px]">Lesson 8 - Cross-functional teams:</em> Build those quick speed boats and have cross-functional teams, everything that is being done, could always be complemented by another team or needs a second opinion. Whatever, you are working on will likely affect another department, so talk about it! Work together!
            </p>

            <hr className="border-border" />

            <p className="text-xs leading-relaxed">
              <em className="text-[13px]">Lesson 9 - Metrics:</em> It was my first time seeing a revenue tree, and it was a brilliant visualization of how you can break down the sales process and correspond certain KPIs to optimize each step of the journey. Something similar to this.
            </p>

            <hr className="border-border" />

            <p className="text-xs leading-relaxed">
              <em className="text-[13px]">Lesson 10 - Software you might not know:</em> Hotjar - Great tool to see how customers use your website and where they spend the majority of their time. InClued.ai - A tool to make sure your Posts and JDs are Gender Neutral. Dripify - Automate your LinkedIn outreach, may this be for Hiring, Fundraising or Sales (I managed to secure 15 interviews within 14 days for the Founder).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogStartupLessons;
