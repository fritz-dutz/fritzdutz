import { Link } from "react-router-dom";
import marathonFinish from "@/assets/marathon-finish.webp";
import marathonDan from "@/assets/marathon-dan.webp";

const BlogHalfMarathon = () => {
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
          <p className="text-xs text-muted-foreground">Jan 28, 2025</p>

          <h1 className="text-sm font-semibold leading-snug">
            Five life lessons from my first half-marathon
          </h1>

          <div className="space-y-3">
            <p className="text-xs leading-relaxed">
              This month I ran my first ever Half Marathon and was able to complete it within 2 hours with just a month of training. The five biggest life lessons that I have picked up from running this far, is what I want to share with you today:
            </p>

            <p className="text-xs leading-relaxed">
              <strong>1. Running is a numbers game</strong> - As a runner, you constantly track your pace & how you can run faster or how far you are running & how you can run further. And as someone who tries to embody the Japanese philosophy of "Kaizen" as much as possible, this is heaven. Whether you decide to take on running as a challenge or not, <strong><em>everyone in life should have this one thing that constantly pushes them to become 1% better each day.</em></strong>
            </p>

            <p className="text-xs leading-relaxed">
              <strong>2. Overly ambitious goals</strong> - To add on the last piece of being able to track your progress, there is a beauty in setting overly ambitious goals. You might achieve it, or you might not. In the case that you do, you know your true capabilities and what you can really achieve. In the case that you don't, you tried your best to achieve it and have something to improve on. <strong><em>Set an ambitious goal and do everything to achieve it.</em></strong>
            </p>

            <p className="text-xs leading-relaxed">
              <strong>3. Battling against your yesterday self</strong> - Whenever you hit that concrete, you are battling against your yesterday self. And that's beautiful. <strong><em>Focus on improving yourself, constantly show up for YOU, and focus on watering your grass</em></strong>. It is a lot more rewarding when you are doing something to improve yourself, for YOU and not to prove something to others.
            </p>

            <p className="text-xs leading-relaxed">
              <strong>4. The importance of having the right ecosystem</strong> - The reason I was able to achieve this, was because of the people that surrounded me/I surrounded myself with. They had more experience than me, brought me under their wing and helped me cross the finish line (literally). <strong><em>Design the life you want to live by setting systems, forcing you to put in the work and surround yourself with one's that will bring the best out of you.</em></strong>
            </p>

            <p className="text-xs leading-relaxed">
              <strong>5. That dopamine hit</strong> - Wow! And let's talk about the dopamine when finishing a run, especially a half-marathon race. It's like nothing else. <strong><em>Chase that!</em></strong>
            </p>

            <p className="text-xs leading-relaxed">
              I hope that the biggest 5 life lessons I have learned from running this far has given you something valuable to consider. I am also looking forward to improving my running journey and see where it brings me. I'd love to also hear any life lessons you've learned from running :)
            </p>

            <img src={marathonFinish} alt="Crossing the finish line with Emmanuel" className="w-4/5 mx-auto rounded-md" />
            <img src={marathonDan} alt="Post-race selfie with Dan" className="w-4/5 mx-auto rounded-md" />

            <p className="text-xs leading-relaxed italic">
              (Emmanuel - the kind of person you need in life, thanks for pacing me!)
            </p>

            <p className="text-xs leading-relaxed italic">
              (Dan - thank you for being there with me on my first 10k, 18k, 21k)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHalfMarathon;
