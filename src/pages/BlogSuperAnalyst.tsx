import { Link } from "react-router-dom";

const BlogSuperAnalyst = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-md mx-auto px-6 py-12 md:py-20">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-1 text-xs underline underline-offset-4 hover:opacity-70 transition-opacity">
          
          ← Back
        </Link>

        <div className="mt-10 space-y-3">
          <p className="text-xs text-muted-foreground">Mar 17, 2026</p>
          <h1 className="font-medium text-sm">The super analyst</h1>

          <p className="text-xs leading-relaxed">
            As someone who is currently applying for full-time venture capital roles, I've been thinking a lot about what traits define a <strong>super analyst</strong> and wanted to get these thoughts down onto paper.
          </p>

          <p className="text-xs leading-relaxed">
            To note before reading; I am brainstorming what makes a <strong>super analyst</strong> in pre-seed & seed funds.
          </p>

          <p className="text-xs leading-relaxed">
            The <strong>super analyst:</strong>
          </p>

          <ul className="list-disc list-outside pl-4 space-y-2">
            <li className="text-xs leading-relaxed">
              <strong>Increases their surface area of "luck" by being present.</strong> Present at all the relevant events, present in the hard-to-get-to communities and generally in different pockets of networks.
            </li>
            <li className="text-xs leading-relaxed">
              <strong>Takes mental "workload" off the team.</strong> Think for them, be one step ahead. And do it so well, that they can fully rely on you. To me this means taking on responsibility and producing the quality of work where there is little-to-no adjustment needed.
            </li>
            <li className="text-xs leading-relaxed">
              <strong>See's every deal before it surfaces to social media.</strong> This to me is a great rule of thumb, to see with the resources I currently have, if I am getting the right overview or deal flow of the market.
            </li>
            <li className="text-xs leading-relaxed">
              <strong>Is commercially & technically skilled.</strong> Regularly attends hackathons, tries out the new tools in the market or regularly learns stellar G2M motions. Acknowledge that you have free will and that there are no more valid excuses.
            </li>
            <li className="text-xs leading-relaxed">
              <strong>Is authentic.</strong> Venture capital can be a very social job and if you can remain your true self across various kinds of people & settings, props to you. I believe being "fake" can quickly bite you from the back and lead you to losing parts of yourself.
            </li>
            <li className="text-xs leading-relaxed">
              <strong>Curates a great digital library.</strong> Is selective about what they consume & from which thought leaders, while simultaneously staying on top of all trends and what is going on in the market.
            </li>
            <li className="text-xs leading-relaxed">
              <strong>Has a specific wedge against other investors.</strong> What do you have that other investors do not or that might be hard to acquire. Is this a skill in a tool, access to a special pocket of network or expertise about a certain topic?
            </li>
            <li className="text-xs leading-relaxed">
              <strong>Leverages & builds a network outside of the "bubble".</strong> There is only so much a single person can know and learn. Find groups outside of the VC bubble, where you are complimentary to one another.
            </li>
            <li className="text-xs leading-relaxed">
              <strong>Fucking works.</strong>
            </li>
          </ul>

          <p className="text-xs leading-relaxed">
            Guess this all can be irrelevant if the basics are not there, but lets strive to be more than that :)
          </p>

          <hr className="border-border my-6" />

          <p className="text-xs leading-relaxed">
            1. Name inspired by Andre Retteraths Blog: Do You Still Need Analysts? The Investment Firm of 2030: Fewer People, Better Decisions
          </p>

          <p className="text-xs leading-relaxed">
            2. Thanks <a href="https://www.linkedin.com/in/shrey-mittal-101/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-70 transition-opacity">Shrey</a> for the contribution and proofreading this
          </p>

          <p className="text-xs leading-relaxed">
            3. After a lunch with our GP, <a href="https://www.linkedin.com/in/critter/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-70 transition-opacity">Claude</a>, I believe this will be the biggest lever to becoming a Super analyst - knowing how to use all the relevant tools to becoming 10x. The Junior layer will never fully go away, but the sole number of juniors will significantly shrink and this is a way to truly stand out.
          </p>
        </div>
      </div>
    </div>);

};

export default BlogSuperAnalyst;