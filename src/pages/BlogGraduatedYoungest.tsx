import { Link } from "react-router-dom";

const BlogGraduatedYoungest = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-md mx-auto px-6 py-12 md:py-20">
        {/* Back Link */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-1 text-xs underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          ← Back
        </Link>

        {/* Article */}
        <div className="mt-10 space-y-6">
          <p className="text-xs text-muted-foreground">Jul 30, 2025</p>

          <h1 className="text-sm font-semibold leading-snug">
            Graduated youngest in my class & this is what I took away
          </h1>

          {/* Section summaries */}
          <div className="space-y-1">
            <p className="text-xs leading-relaxed">1. The fine line of yes's & no's.</p>
            <p className="text-xs leading-relaxed">2. Asia vs the world.</p>
            <p className="text-xs leading-relaxed">3. Abusing your academic status.</p>
            <p className="text-xs leading-relaxed">4. A further refinement for what truly matters.</p>
          </div>

          <hr className="border-border" />

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-[13px] font-medium leading-snug italic">The fine line of yes's & no's</h2>
            <p className="text-xs leading-relaxed italic text-muted-foreground">
              TL;DR have a compass that shape your decisions & say no more often.
            </p>
            <p className="text-xs leading-relaxed">
              Where you end up in life is just a byproduct of the decisions you make. So, knowing when to say yes and when to say no will act as a large determinant of what you will end-up achieving.
            </p>
            <p className="text-xs leading-relaxed">
              At the beginning of University, I skewed to being a people-pleaser and said yes to a lot of things I necessarily didn't want to. This has luckily changed & I have learnt to say no. Of course, always saying no can also be detrimental to your growth, which is why building this moral compass of knowing when I should say yes and when I should say no, has to be one of the biggest lessons learned in the last 3 years. How this moral compass looks like? Is to each their own, but have one.
            </p>
            <p className="text-xs leading-relaxed">
              So, if you are someone who finds it difficult to say no or turn things down, know that you only live life once and life is at its best when you are the one steering the ship and not letting other people dictate the direction of your sail.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-[13px] font-medium leading-snug italic">Asia vs the world</h2>
            <p className="text-xs leading-relaxed italic text-muted-foreground">
              TL;DR germany makes your skin thicker & latinos make you smile more.
            </p>
            <p className="text-xs leading-relaxed">
              The stereotype about "German forwardness" is indeed true and being used to Asian soft-talk and beating around the bush, made this quite the challenge in the beginning. At first, I took many things personally & to heart, however, later discovered that they were not supposed to target me in any way, but to give me the truth and the whole truth. Give people the benefit of the doubt & be so secure in yourself, that no matter how someone communicates with you, that you'll be able to tolerate it. This somehow led me to being able to make fun of myself more and to not take myself too seriously. <strong>Diss, joke, make fun of yourself</strong> - you won't be so stiff & be able to take more from others :)
            </p>
            <p className="text-xs leading-relaxed">
              On the other hand, the latinos (see semester abroad substack) have taught me how to not care how others perceive me and to do the uncomfortable. Coming from an international school up bringing & being at a German elitist business school, both places where reputation was valued. I certainly caved into having my own tendencies to be a certain way/restrict myself to a certain point, just because I would think & care about what someone else might have thought of me. During my 4 months with latinos in China, who come from various latin countries, there was rarely a time when they didn't do something loud and at the same time care about what others were thinking of them. This certainly pushed me to give less of a f*ck about other people's opinions.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-[13px] font-medium leading-snug italic">Abusing your Status as a Student</h2>
            <p className="text-xs leading-relaxed italic text-muted-foreground">
              TL;DR being a student is the best excuse to speak to anyone you want.
            </p>
            <p className="text-xs leading-relaxed">
              There are only a few things in life that take you 5 minutes to do, but have such an enorm potential to improve your life. And that is messaging people who have gone through similar experiences, you set yourself to do. People who are "successful" want to give back, as they have been in your exact footsteps and likely have done the same (plus it is of human nature to want to help others, I think). This is why being aware of this "hack" & soaking it in, has been an absolute eye-opener and has helped me learn from other people's mistakes & opportunities, I wouldn't have otherwise.
            </p>
            <p className="text-xs leading-relaxed">
              On a slight tangent - nowadays having a network is so crucial, whether you like it or not. Want to get your first customer? another job? be in the right circles? having a strong network will make all of these substantially easier. Just start and if you continue, you will see it snowball & grow much easier (the network effect somehow also plays a role here).
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-[13px] font-medium leading-snug italic">Unfinished/organised thoughts</h2>
            <p className="text-xs leading-relaxed italic text-muted-foreground">
              TL;DR Uni is a great place to refine your filter about what truly matters in life.
            </p>
            <p className="text-xs leading-relaxed">Such as:</p>
            <p className="text-xs leading-relaxed">Your closest people</p>
            <p className="text-xs leading-relaxed">The career path you want to go down</p>
            <p className="text-xs leading-relaxed">The finer things in life</p>
            <p className="text-xs leading-relaxed">Where you want to spend your time</p>
          </div>

          <hr className="border-border" />

          {/* Closing */}
          <div className="space-y-3">
            <p className="text-xs leading-relaxed">Anyways,</p>
            <p className="text-xs leading-relaxed">
              Be the person that excites people to do something after calls, the one that believes in their friends more than they believe in themselves, constantly educate yourself to have interesting viewpoints in life & don't be scared to share those.
            </p>
            <p className="text-xs leading-relaxed">
              See ya (uni was dope & I learnt a lot!)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGraduatedYoungest;
