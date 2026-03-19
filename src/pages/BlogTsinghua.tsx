import { Link } from "react-router-dom";
import tsinghuaFriends from "@/assets/tsinghua-friends.webp";

const BlogTsinghua = () => {
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
          <p className="text-xs text-muted-foreground">Aug 31, 2024</p>

          <h1 className="text-sm font-semibold leading-snug">
            What i learned during my semester abroad at tsinghua
          </h1>

          <div className="space-y-3">
            <p className="text-xs leading-relaxed">
              beijing is thought of by many of my european friends a distinct world with many negative stereotypes, so i was often asked why i exactly chose beijing to be the home for my semester abroad. and so with this post, i hope to explain how beijing came to be one of the most enjoyable and valuable experiences of mine and the key lessons i was able to pick up.
            </p>

            <p className="text-xs leading-relaxed">
              i vividly remember my first few days in beijing being the lowest of days ive ever had, a mountain of challenges came my way right when i landed. whether this was the vpn issue, or the obstacle to get a didi (uber) to the university, to find a hotel which accepted foreign guests since i did not have an accommodation yet (i am aware this was my fault), to know that everything on google maps was outdated (what should have been a 10 minute trip to the hotel, ended up in a 2 hour hunt around the neighbourhood) and all of this with a 30kg suitcase in sub-zero weather. i just remembered sobbing to my dad as soon as i arrived in the hotel.
            </p>

            <p className="text-xs leading-relaxed">
              as the first onboarding days, went by, i was lucky to have some uni mates from back home (germany), where we were able to accompany each other through this transition. what was a horror story, quickly evolved itself into a memorable time. thank you filippo & karim for all the laughs and making it undoubtedly easier.
            </p>

            <p className="text-xs leading-relaxed">
              not long after i befriended myself with 2 open argentineans, mati & teo. the connection was instant and we spent a lot of time together. leading me to getting to know their other latino friends, alvaro, felipe, max & mario. this as you can probably imagine, quickly became the people i loved being around. throughout the time we had many enjoyable nights out, football matches, canteen sessions and trips to places like shanghai.
            </p>

            <p className="text-xs leading-relaxed">
              here the lessons i was able to accumulate begin, as you can imagine spending half a year with latinos gave me a totally other perspective on life. these friends have showed me what it is like to:
            </p>

            <ul className="text-xs leading-relaxed space-y-2 list-disc pl-5">
              <li>live a life without care of what other people think of you - i mean whats a life worth living that is dictated by others? this was driven by their positive outlook on life and how they would not let the fear of rejection or other peoples judgement restrict them.</li>
              <li>hanging on to the previous point, these boys have showed me what is like to have a heavily positive mindset through anything. this outlook has certainly contaminated those around them. again, your mindset dictates the way you approach life, so you certainly don't want to be imprisoned by a heavily negative one.</li>
              <li>that is okay to be spontaneous. i am a man who loves my routine & habit, making it difficult for me to engage in spontaneous sh*t. however, the best memories and people come unexpected, so don't be so stuck in a shell that you never leave your comfort zone!</li>
            </ul>

            <img src={tsinghuaFriends} alt="Friends during semester abroad at Tsinghua" className="w-full rounded-md" />

            <p className="text-xs leading-relaxed italic">
              +alvaro, max, mario, karim
            </p>

            <p className="text-xs leading-relaxed">
              with this new & strong group, i was able to set sight on many new experiences & memories! alongside what i learnt from the amazing people i was able to spend a lot of time using the ultra efficient technology needed to accommodate its population of 1.4 billion (2024). what really stuck out was:
            </p>

            <ul className="text-xs leading-relaxed space-y-2 list-disc pl-5">
              <li>while traveling to other cities via the largest airport in the world, they would scan your face before security check - meaning that after security check you were able to go to large tablets where they would scan your face and display your flight details.</li>
              <li>purely digital payments coupled with loyalty memberships is what makes china such a consumer heavy country, everything we know (q-commerce, e-commerce, transportation, payments) they do better.</li>
              <li>in terms of how deep the technology is another question, what i have noticed is not an overengineering of systems, but just simple systems that work! oftentimes it was just scanning qr codes to buy that ticket, receive that promotion or to even just validate my age at a club.</li>
            </ul>

            <p className="text-xs leading-relaxed">
              to sum up why china came into question, spending half a year their was an extremely valuable experience for my personal growth, capturing life-long memories and developing my business sense. have i not gone out of my comfort zone or listened to other people who questioned my choice, i would not have been able to experience all this. i hope with this article i was able to open up a new perspective or teach you a new lesson, if this has pushed you to visit china - feel free to message me if you are in need of any tips! Xièxiè!
            </p>

            <p className="text-xs leading-relaxed italic">
              fav city in china (chongqing)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTsinghua;
