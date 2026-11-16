import { Heart, Sparkles, HandHeart } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Love",
    description:
      "We approach every project with compassion, integrity, and genuine care — for our clients, their users, and the work itself.",
  },
  {
    icon: Sparkles,
    title: "Create",
    description:
      "We turn ideas into thoughtful, innovative digital solutions. Every line of code and every design decision is intentional.",
  },
  {
    icon: HandHeart,
    title: "Serve",
    description:
      "We use technology and creativity to create meaningful value for others — building products that make a real difference.",
  },
];

export default function About() {
  return (
    <section id="about" aria-label="About LC DIGITAL" className="py-28 px-6 bg-white border-t border-[#E9E5EF]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div>
            <div className="flex items-center gap-3 mb-6" aria-hidden="true">
              <span className="h-px w-8 bg-[#6D28D9]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6D28D9]">
                About
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#171323] leading-tight mb-8">
              A studio built on
              <br />
              craft and clarity.
            </h2>
            <div className="space-y-5 text-[#171323]/65 leading-relaxed text-base">
              <p>
                LC DIGITAL is a digital product studio. We partner with
                founders, teams, and brands to design and build digital
                experiences that are both beautiful and effective.
              </p>
              <p>
                Our work spans marketing platforms, web applications, design
                systems, and mobile products. We focus on what matters: clear
                problem framing, purposeful design, and reliable engineering.
              </p>
              <p>
                We keep our engagements focused and our team tight — so the
                people working on your product are the same people you talk to
                every day.
              </p>
            </div>
          </div>

          {/* Right — brand values */}
          <div className="flex flex-col gap-5 lg:pt-20">
            {/* Philosophy label */}
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6D28D9]/70 mb-1">
              Love. Create. Serve.
            </p>

            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 p-6 rounded-2xl border border-[#E9E5EF] bg-[#F8F7FA] hover:border-[#C4B5FD] transition-colors duration-200"
                >
                  <div className="shrink-0 mt-0.5">
                    <Icon size={20} className="text-[#6D28D9]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#171323] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#171323]/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
