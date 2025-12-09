import { useEffect, useRef, useState } from "react";
import Counter from "./counterAnimation.jsx";

export default function NumbersSection() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 gap-16 items-center">
        <h1 className="text-3xl font-semibold text-center">Why Choose us?</h1>

        <div className="grid grid-cols-3 gap-10 text-center">
          
          {/* Managed Properties */}
          <div>
            <div className="text-5xl font-bold text-[#125476]">
              {startCount ? <Counter end={5} /> : "0"}+
            </div>
            <p className="text-[#125476] mt-2 text-sm">Managed Properties</p>
          </div>

          {/* AED Worth Portfolio */}
          <div>
            <div className="text-6xl font-bold text-[#125476]">
              {startCount ? <Counter end={1} /> : "0"}M
            </div>
            <p className="text-[#125476] mt-2 text-sm">AED worth Portfolio</p>
          </div>

          {/* Staff Members */}
          <div>
            <div className="text-5xl font-bold text-[#125476]">
              {startCount ? <Counter end={20} /> : "0"}+
            </div>
            <p className="text-[#125476] mt-2 text-sm">Staff Members</p>
          </div>

          {/* Accommodated Guests */}
          <div>
            <div className="text-5xl font-bold text-[#125476]">
              {startCount ? <Counter end={200} /> : "0"}+
            </div>
            <p className="text-[#125476] mt-2 text-sm">Accommodated Guests</p>
          </div>

          {/* Booked Nights */}
          <div>
            <div className="text-5xl font-bold text-[#125476]">
              {startCount ? <Counter end={300} /> : "0"}+
            </div>
            <p className="text-[#125476] mt-2 text-sm">Booked Nights</p>
          </div>

          {/* Nationalities */}
          <div>
            <div className="text-5xl font-bold text-[#125476]">
              {startCount ? <Counter end={10} /> : "0"}+
            </div>
            <p className="text-[#125476] mt-2 text-sm">Nationalities</p>
          </div>

        </div>
      </div>
    </section>
  );
}
