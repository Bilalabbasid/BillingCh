import { cn } from "@/lib/utils";

const stats = [
  { value: "94%+", label: "First-Pass Claim Rate" },
  { value: "<3%", label: "Denial Rate" },
  { value: "50+", label: "Medical Specialties Served" },
  { value: "500+", label: "Healthcare Practices Nationwide" },
];

export function TrustBar() {
  return (
    <section className="bg-[#070E1A] border-y border-[#1E3A5F] py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "flex-1 min-w-[50%] lg:min-w-0 flex flex-col items-center px-6 py-4 lg:py-0",
                i > 0 && "lg:border-l lg:border-[#1E3A5F]"
              )}
            >
              <span className="font-display font-extrabold text-[3rem] text-white leading-none">
                {stat.value}
              </span>
              <span className="text-[#94A3B8] text-[0.875rem] mt-1 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
