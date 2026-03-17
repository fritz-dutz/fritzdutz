import { Link } from "react-router-dom";

const BlogMsKaren = () => {
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
          <p className="text-xs text-muted-foreground">Feb 28, 2025</p>

          <h1 className="text-sm font-semibold leading-snug">
            What it's like being raised by ms.karen
          </h1>

          <div className="space-y-3">
            <p className="text-xs leading-relaxed">
              Ms. Karen is the dominant female figure in my life, and for you, this might be your mom.
            </p>
            <p className="text-xs leading-relaxed">
              As I did not have one for the majority of my life, I luckily had Ms. Karen, and let me tell you how that is like.
            </p>
            <p className="text-xs leading-relaxed">
              Ms. Karen entered my life when I was 3, and has ALWAYS been there since. She comes from the Philippines and moved to Vietnam, where I grew up. The reason she left her family, including husband and daughter in the Philippines, is to provide and give them the best life she could.
            </p>
            <p className="text-xs leading-relaxed">
              Ms. Karen shows up every day in my life with a big smile and a radiating positive energy, even on her low days. She is a jack (or should I say queen) of all traits, she is brilliantly smart & talented, where she can pick up something new within days. She would pack chocolate covered strawberries with my lunch, and make an art piece out of my breakfasts. She also likes to dance and film tiktoks, hehe. Oh, and when I am happy, is she too! And when I'm sad, is she too :(
            </p>
            <p className="text-xs leading-relaxed">
              As you can imagine, Ms. Karen has shaped me in many aspects. To her, I can thank my borderline OCD and cleanliness, due to the standard she has introduced into my life. She has taught me how to be gentle, as well as what it means to be a gentleman. And, has introduced a deeper motivation in life, sharpening my priorities & goals.
            </p>
            <p className="text-xs leading-relaxed">
              I might not have had a "typical" female figure growing up, but Ms. Karen's presence in my life is one of the biggest presents ever given to me. Ms. Karen, thank you for your unconditional love, your consistency, and your endless loyalty you've given me. Thank you for picking me up on my low days, protecting me, and providing my life with more purpose. I am working hard not only for myself, but to hopefully give you an even better retirement!
            </p>
            <p className="text-xs leading-relaxed">
              To all the OFW who have to make such a difficult decision, I am so inspired by your courage, strength, and mission. Thank you for the lives you have changed, and I wish that the blessings you've given others, come a thousand times better back at you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMsKaren;
