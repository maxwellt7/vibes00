"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Check } from "lucide-react"

export default function VibesAdvertorial() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with publication styling */}
      <header className="w-full bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-serif">Lifestyle & Wellness Journal</div>
            <div className="text-sm">January 24th, 2025</div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Article Header */}
        <div className="mb-8 border-b pb-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            How This THC-Free Pre-Roll Is Changing the Way People Unwind — Without the High
          </h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span className="mr-4">January 24th, 2025</span>
            <span className="mr-4">|</span>
            <span className="mr-4">Lifestyle & Wellness</span>
            <span className="mr-4">|</span>
            <span>Maximilian Taylor</span>
          </div>
          <p className="text-xl font-medium mb-6">
            Did you know there's a new kind of pre-roll that lets you smoke your favorite strains without getting high?
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[500px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="/images/vibes-beach-friends.png"
            alt="Friends enjoying Vibes 0.0 Pre-Roll at the beach during sunset"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
            FOR YEARS, SMOKABLE PRODUCTS HAVE BEEN DIVIDED INTO TWO CAMPS:
          </h2>
          <p className="text-lg mb-6">
            You either roll the dice with traditional THC — or settle for "meh" CBD options that barely take the edge
            off…
          </p>
          <p className="text-lg mb-6">
            Well, a health-focused company, backed by WeedMaps, is flipping this entire space on its head.
          </p>
          <p className="text-lg mb-6">
            This new brand led by a team with decades of cannabis experience called Vibes 0.0 has figured out how to
            deliver smooth, satisfying, THC-free pre-rolls—infused with powerful botanicals and terpenes that help you
            relax, sleep, and stay sharp... without ever getting high.
          </p>
          <p className="text-lg font-semibold mb-6">
            And it's already being called the best natural smoking alternative of 2025.
          </p>
        </div>

        {/* Product Introduction */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What Is It?</h2>
          <h3 className="text-xl font-semibold mb-6">Meet the Vibes 0.0 Pre-Roll Sample Pack</h3>

          <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
            <Image
              src="/images/vibes-product.png"
              alt="Vibes 0.0 Blueberry Kush Pre-Roll Sample Pack"
              fill
              className="object-contain"
            />
          </div>

          <p className="text-lg mb-4">
            The team behind Vibes 0.0 worked with top herbalists and cannabinoid-free wellness experts to create a
            premium pre-roll for people who want to unwind and take the edge off— without the downside of getting high
            or risk of failing a drug test.
          </p>
          <p className="text-lg mb-4">The result?</p>
          <p className="text-lg mb-6">
            A handcrafted botanical pre-roll that mimics the smooth feel of smoking, the taste of your favorite strain,
            and the same calming focus or immediate relaxation… All without the THC.
          </p>
          <p className="text-lg mb-4">So what can it actually do?</p>
          <p className="text-lg mb-6">
            Everything a great pre-roll should give you — without the fog, without the paranoia, and without any sketchy
            side effects.
          </p>
          <p className="text-lg mb-6">
            But what makes the Vibes 0.0 Sample Pack truly special is what's inside each roll: a hand-selected blend of
            calming botanicals, infused with precise terpene profiles, all packed in the same high-quality Vibe paper
            smokers love.
          </p>
          <p className="text-xl font-semibold mb-2">You get all the vibe, none of the high.</p>
          <p className="text-xl font-semibold mb-6">This is the future of guilt-free smoking.</p>
        </div>

        {/* How It Works */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">How Does It Work?</h2>
          <p className="text-lg mb-4">
            Vibes 0.0 relies on a unique botanical and terpene infusion — designed to tap into your body's natural
            systems without using THC or CBD.
          </p>
          <p className="text-lg mb-4">
            Each pre-roll is made with a proprietary combination of non-psychoactive herbs and terpenes known for their
            effects on mood, relaxation, and sleep.
          </p>
          <p className="text-lg mb-4">
            Once lit, the terpenes go to work — activating your body's natural mechanisms for calm and clarity.
          </p>
          <p className="text-lg mb-4">
            That's right — you can unwind or even sleep better, just by smoking a smooth roll that's completely
            THC-free.
          </p>
          <p className="text-lg mb-4">No stress. No high. No failed drug test risks.</p>
          <p className="text-lg mb-6">
            Use it after work, before a nap, or even on your lunch break — feel focused, grounded, and clear — without
            any psychoactive effects.
          </p>
          <p className="text-lg mb-6">
            And did we mention? Vibes 0.0 ships straight to your door in discreet, eco-friendly packaging. No dispensary
            trips needed.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-10 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">What Exactly Can Vibes 0.0 Do?</h2>
          <p className="text-lg mb-4">More than you think👇</p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-lg">
                <strong>THC-free smoke session</strong> — Pure relaxation with zero psychoactive effects…
              </span>
            </li>
            <li className="flex items-start">
              <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-lg">
                <strong>Terpene-enhanced effects</strong> — Tap into calm and focus using nature's most potent aromatic
                compounds…
              </span>
            </li>
            <li className="flex items-start">
              <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-lg">
                <strong>Drug test safe</strong> — 100% free of THC and psychoactive cannabinoids…
              </span>
            </li>
            <li className="flex items-start">
              <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-lg">
                <strong>Crafted for clarity</strong> — Feel grounded, not groggy...
              </span>
            </li>
            <li className="flex items-start">
              <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-lg">
                <strong>Flavorful botanical blend</strong> — Smooth, enjoyable flavor without bitterness…
              </span>
            </li>
            <li className="flex items-start">
              <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-lg">
                <strong>No sketchy chemicals</strong> — Clean ingredients only, backed by third-party lab testing…
              </span>
            </li>
            <li className="flex items-start">
              <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-lg">
                <strong>Pre-rolled and ready</strong> — No grinding, no rolling, no prep needed…
              </span>
            </li>
            <li className="flex items-start">
              <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-lg">
                <strong>Vibe up anywhere</strong> — Whether it's bedtime, breaktime, beach time, at home, or in public…
              </span>
            </li>
          </ul>

          <p className="text-xl font-semibold mb-6">Finally wind down after a long day — without worrying about THC.</p>
          <p className="text-lg mb-6">
            So, why settle for disappointment from weak CBD joints or sketchy gas station herbs?
          </p>
          <p className="text-lg mb-6">
            Vibes 0.0 was made for people who demand real results, without the risk or the high.
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Some Questions We've Had</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Q: Will this get me high?</h3>
              <p className="text-lg">
                Nope. Vibes 0.0 is completely THC-free. No psychoactive effects. Just clarity and calm.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Q: Is it safe for drug testing?</h3>
              <p className="text-lg">
                Absolutely. Our pre-rolls are 100% THC-free and contain no controlled substances — so they're completely
                safe for routine drug tests.*
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Q: Do they actually work without THC?</h3>
              <p className="text-lg">
                Yes. That's the power of plant synergy. Terpenes and botanicals work beautifully together — helping your
                body relax naturally and sustainably.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Q: What does it taste like?</h3>
              <p className="text-lg">Just like your favorite strains.</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">How Can It Be So Effective Without THC?</h2>
          <p className="text-lg mb-4">
            Unlike cheap CBD knockoffs and harsh hemp joints, Vibes 0.0 isn't trying to imitate THC.
          </p>
          <p className="text-lg mb-4">
            Instead, it uses a uniquely designed formula that utilizes the natural power of plant terpenes, combined
            with a curated blend of calming herbs that work together for real relaxation.
          </p>
          <p className="text-lg mb-4">
            And because Vibes 0.0 is sold direct-to-customer online — there are no middlemen, no dispensary markups, and
            no filler brands to compete with.
          </p>
          <p className="text-lg mb-4">
            That means you get the best possible product for a price that's way below what you'd expect.
          </p>
          <p className="text-lg mb-6">Plus, they're making the first move easy…</p>
          <p className="text-lg mb-6">
            You can try it all out in their Vibes 0.0 Sample Pack — and feel the difference for yourself before
            committing to a full box.
          </p>
        </div>

        {/* Conclusion */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Conclusion: Is It Worth It?</h2>
          <p className="text-lg mb-4">
            Absolutely. Vibes 0.0 is the smoking experience people have been waiting for — no high, no weird side
            effects, no THC.
          </p>
          <p className="text-lg mb-4">And it actually works.</p>
          <p className="text-lg mb-4">
            With terpenes and botanicals that support your nervous system, Vibes 0.0 may help you relax, sleep deeper,
            and take the edge off — all naturally.
          </p>
          <p className="text-lg mb-4">And with a 30-day satisfaction guarantee — there's no reason not to try it.</p>
          <p className="text-lg mb-6">The only catch? They've already sold out twice this year.</p>
          <p className="text-lg font-semibold mb-6">
            So if the Vibes 0.0 Sample Pack is still in stock… grab it before it's gone.
          </p>
        </div>

        {/* CTA */}
        <div className="mb-10 bg-gradient-to-r from-purple-100 to-indigo-100 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">How Do I Get Vibes 0.0?</h2>
          <p className="text-lg mb-6">
            Get your Vibes 0.0 Sample Pack from their{" "}
            <a href="https://vibes00.io/product" className="text-purple-700 underline font-medium">
              official website
            </a>{" "}
            below.
          </p>
          <p className="text-lg mb-6">
            And it's all covered by a 30-Day Satisfaction Guarantee — love it, or send it back.
          </p>

          <Button
            className="bg-purple-700 hover:bg-purple-800 text-white text-lg py-6 px-8 rounded-full mb-6"
            onClick={() => (window.location.href = "https://vibes00.io/product")}
          >
            Check Availability &gt;&gt;
          </Button>

          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-medium">4.8 Star Rating | 862 Reviews</span>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center">TESTIMONIALS</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <p className="text-lg mb-4">
                  "Vibes 0.0 completely changed my nighttime routine. I sleep better, and there's no trace of THC to
                  worry about with my job."
                </p>
                <p className="font-medium">— Jessica P., Verified Buyer</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <p className="text-lg mb-4">
                  "This is exactly what I've been searching for. No high, no anxiety — just calm and clarity. Love the
                  vibe."
                </p>
                <p className="font-medium">— Ryan K., Verified Buyer</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <p className="text-lg mb-4">
                  "I was skeptical, but the sample pack was a game changer. It's smooth, relaxing, and I passed my work
                  screening without any issues."
                </p>
                <p className="font-medium">— Amanda C., Verified Buyer</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-600 border-t pt-6">
          <p className="mb-2">Vibes 0.0 LLC</p>
          <p className="mb-4">
            *These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure,
            or prevent any disease. Always check with your healthcare provider before starting any new herbal product.
          </p>
        </footer>
      </main>
    </div>
  )
}
