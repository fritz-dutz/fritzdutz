import { Link } from "react-router-dom";

const BlogTechOptimism = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-md mx-auto px-6 py-12 md:py-20">
        <Link
          to="/writing"
          className="inline-flex items-center gap-1 text-xs underline underline-offset-4 hover:opacity-70 transition-opacity">
          ← Back
        </Link>

        <div className="mt-10 space-y-3">
          <p className="text-xs text-muted-foreground">October 15, 2026</p>
          <h1 className="font-medium text-sm">tech optimism &amp; where I draw the line</h1>

          <p className="text-xs leading-relaxed">
            As someone who gets to allocate capital and has a small influence in the advancement of breakthrough technologies. I've been thinking about where I would like to see AI play more of a role and where I draw my line. I would describe myself as a tech optimist, which for me means that I focus more on how technology can change the world and am more blinded about the negative impacts it may have.
          </p>

          <p className="text-xs leading-relaxed font-medium pt-2">
            On that note, let's begin with where I would like to see more of AI to be used in.
          </p>

          <p className="text-xs leading-relaxed">
            <strong>To remove boring &amp; mundane tasks.</strong> This would free up the capacity &amp; resources of people to allow them to work on more creative &amp; strategic tasks, which has the byproduct that society will feel more fulfilled and thus be in a better mood. As people will have a better grip over their time. This free'd up time can either allow you to reap more financial benefits (more customers) or to spend more time on aspects of life that you love (fitness, family, vacation, etc…).
          </p>

          <p className="text-xs leading-relaxed">
            <strong>To remove physically dangerous tasks.</strong> This is a bit of an obvious one, but I would like to see the advancements in hardware to prioritise the removal of jobs which are physically dangerous. Im thinking of sites situated in rough environments (oceans, mines) and particular tasks you find in construction &amp; engineering jobs (welding).
          </p>

          <p className="text-xs leading-relaxed">
            <strong>For advancements in drug discovery.</strong> Machine learning has the capability to run millions of simulations simultaneously, which has been mission critical in advancements of certain drugs, such as Rentosertib. The question is how can we get even better at speeding up these processes to have a faster output of breakthroughs? Im especially excited to see more advancements in living cell simulations.
          </p>

          <p className="text-xs leading-relaxed">
            <strong>To remove barriers to equal education.</strong> How can governments role out AI powered education platforms that children who would otherwise have a difficult time accessing regular &amp; quality education. Take private tutors as an example, this has been something that only wealthier families were able to afford for their children, but now with frontier intelligence and conversational AI, this has made it a lot more accessible. All of this would be great without "propagandic" views. I can't help but share the story of my friend, Nathan Miller. He and his brother, besides their full-time gig of running a bakery &amp; bagel store, have opened a school in Ho Chi Minh City, Vietnam for kids living under bridges to have the opportunity to socialise &amp; learn with other kids. Through his Claude subscription, he has been able to develop all their study materials &amp; interactive games.
          </p>

          <p className="text-xs leading-relaxed">
            <strong>Cheaper access to agriculture.</strong> To use AI in helping farmers produce healthier and more economically reasonable crops. Produce prices have been skyrocketing, which is why you see more &amp; more shoplifters. With tools for more targeted pesticide spraying systems, sensors for optimised fertiliser allocation or higher accuracy in weather predictability - these are all levers to fundamentally lower shelf prices. Lab grown alternatives will likely also be relevant.
          </p>

          <p className="text-xs leading-relaxed">
            <strong>For sovereignty purposes.</strong> With advancements in open-weight models (DeepSeek, Aleph Alpha, Kimi) we now have the ability to not rely on frontier models from the US. It will be extremely important to build out in-house models in organisations that are open-weight &amp; model agnostic. Frontier dependency stopped being theoretical with the Fable and Mythos 5 shutdown, which was driven by a US national-security directive. This will be essential in reducing dependency and to build something proprietary to your organisation.
          </p>

          <p className="text-xs leading-relaxed">
            I am most certain there are a lot of more high-impact use-cases where advancements in AI can be implemented for the better good of society, however, those are the one's where I would like to spend my time on making the norm.
          </p>

          <p className="text-xs leading-relaxed font-medium pt-2">
            On the flip side, here are areas of life where I draw the line and would like to see less of AI.
          </p>

          <p className="text-xs leading-relaxed">
            <strong>Making the last calls in conflict.</strong> I have the privilege of writing this on a pleasant trip to Marrakech and never had to be at the frontlines of any major conflicts. With the boom of resilience tech, I do understand that AI surely will be needed to scale and defend one's nation. But, I just find it uneasy that an Opus 5.5 can potentially make the final call for someone's death.
          </p>

          <p className="text-xs leading-relaxed">
            <strong>In intimacy and love.</strong> This is a core component of what makes us human. Letting AI spill over into pornography or by helping one with conflict management through being a sparring/therapy partner, removes this natural/raw aspect of what makes relationships beautiful and ugly (both needed). I am also afraid that this creates unrealistic expectations of one another - leading to desensitisation &amp; higher rates of divorce. I do also understand that people can find companionship in AI "buddies", but would be great if we could stay away from this.
          </p>

          <p className="text-xs leading-relaxed">
            <strong>Stealing creativity.</strong> AI is obviously great at finding examples online, to pattern match this and create something for you. However, I believe we should still be pushing ourselves to create outputs of our own. Everyone on this earth brings in a different lens through their experiences and I would love to see more of that reflected in creative pieces, rather than seeing Liquid Glass for the 100th time - especially when the author gives no credit or accreditation to their inspiration.
          </p>

          <p className="text-xs leading-relaxed">
            I do understand that driving AI adoption across hundreds of industries will lead to a good amount of jobs being replaced and maybe certain mundane/repetitive tasks may be good for people - but, this could also mean that we need to be pouring more resources into up-skilling people and making them aware of what is possible and what is to come. I don't want to invest into another crm or note-taking tool, but something that leverages AI for the better good of the world.
          </p>
        </div>
      </div>
    </div>);

};

export default BlogTechOptimism;
