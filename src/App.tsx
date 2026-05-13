import { useState } from "react";
import { motion } from "framer-motion";

export default function SolthermalWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#f5f7f2] text-slate-800 overflow-hidden">
      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center">
            <img
              src="/images/sol-logo.png"
              alt="Solthermal"
              className="w-32 sm:w-36 lg:w-52 h-auto object-contain"
            />
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-10 text-[15px] tracking-wide text-lime-300 font-medium">
            <a href="#problem" className="hover:text-white transition">
              Problem
            </a>

            <a href="#solution" className="hover:text-white transition">
              Solution
            </a>

            <a href="#benefits" className="hover:text-white transition">
              Comparison
            </a>

            <a href="#industries" className="hover:text-white transition">
              Industries
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden lg:block bg-lime-500 hover:bg-lime-400 text-black font-semibold px-7 py-3 rounded-full transition duration-300 shadow-lg shadow-lime-500/20"
          >
            Get In Touch
          </a>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden bg-[#1a2c1d] text-white px-6 py-6 space-y-5">
            <a href="#problem" className="block">
              Problem
            </a>

            <a href="#solution" className="block">
              Solution
            </a>

            <a href="#benefits" className="block">
              Comparison
            </a>

            <a href="#industries" className="block">
              Industries
            </a>

            <a href="#contact" className="block">
              Contact
            </a>
          </div>
        )}
      </header>

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-start overflow-hidden">
        
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hts-hero.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* GLOW */}
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-lime-400/20 blur-[120px] rounded-full" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl pt-28 sm:pt-32"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] lg:leading-[1.05] text-white mb-5 lg:mb-6">
              Reduce commercial cooling costs with
              <br />
              HTS Panels
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl">
              Transform your existing HVAC infrastructure into a highly efficient
              hybrid system. Hybrid Thermal Solar Panels deliver measurable
              energy reduction and immediate operational savings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================= */}
      {/* PROBLEM */}
      {/* ================================================= */}
      <section
        id="problem"
        className="py-20 lg:py-32 bg-[#1b211d] text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          
          {/* LEFT */}
          <div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-8 lg:mb-10 text-white">
              The HVAC Consumption Challenge
            </h2>

            <p className="uppercase tracking-[0.28em] text-sm sm:text-base font-medium text-lime-300 mb-5 lg:mb-6">
              Global Cooling Demand
              <br />
              Continues To Rise
            </p>

            <div className="space-y-6 lg:space-y-8 text-white/75 text-base sm:text-lg leading-relaxed">
              
              <div>
                <p>
                  By 2050, around two-thirds of the world’s households could
                  have an air conditioner. China, India, and Indonesia together
                  may account for nearly half of the total global demand.
                </p>

                <p className="text-lime-300 text-xs sm:text-sm mt-3 uppercase tracking-[0.15em]">
                  International Energy Agency (IEA)
                </p>
              </div>

              <div>
                <p>
                  Air-conditioners’ contribution to peak electricity load in
                  India could reach nearly 45% of total electricity consumption
                  by 2040.
                </p>

                <p className="text-lime-300 text-xs sm:text-sm mt-3 uppercase tracking-[0.15em]">
                  ISHRAE
                </p>
              </div>

              <div>
                <p>
                  Cooling is expected to become one of the largest contributors
                  to growing global electricity demand between now and 2050.
                </p>

                <p className="text-lime-300 text-xs sm:text-sm mt-3 uppercase tracking-[0.15em]">
                  United Nations Environment Programme
                </p>
              </div>

              <div>
                <p>
                  By 2050, space cooling in India could account for nearly 28%
                  of total electricity demand and 44% of peak load.
                </p>

                <p className="text-lime-300 text-xs sm:text-sm mt-3 uppercase tracking-[0.15em]">
                  Copenhagen Centre on Energy Efficiency
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-[2rem] overflow-hidden bg-white p-4 sm:p-6 shadow-2xl">
            <div className="mb-5">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-slate-500">
                Projected Global Cooling Demand
              </p>
            </div>

            <img
              src="/images/global-ac-demand.png"
              alt="Projected Global Cooling Demand"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* SOLUTION */}
      {/* ================================================= */}
      <section id="solution" className="py-20 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">

          {/* TOP */}
          <div className="mb-20 lg:mb-24">

            {/* HEADING */}
            <div className="max-w-4xl mb-14 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] text-slate-900">
                The Solution – HTS Panels
              </h2>

              <p className="uppercase tracking-[0.28em] text-sm sm:text-base font-medium text-lime-600 mb-5 lg:mb-6">
                Reducing HVAC Energy   
                Consumption Through
                Thermal Integration
              </p>

              
            </div>
              {/* IMAGES */}
<div className="grid lg:grid-cols-2 gap-6 mb-14 lg:mb-16">

  {/* IMAGE 1 */}
  <div className="rounded-[2rem] overflow-hidden bg-[#f7f8f7] border border-slate-200 p-4 lg:p-6">
    <img
      src="/images/mgledit.png"
      alt="HTS Panel Sketch"
      className="w-full h-auto object-contain"
    />
  </div>

  {/* IMAGE 2 */}
  <div className="rounded-[2rem] overflow-hidden bg-[#f7f8f7] border border-slate-200 p-4 lg:p-6">
    <img
      src="/images/secondimage.png"
      alt="HTS Workflow"
      className="w-full h-auto object-contain"
    />
  </div>

</div>
            {/* CARDS */}
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">

              {[
                {
                  icon: "⚡",
                  title: "High Energy Efficiency",
                  desc: "Maximizes thermal collection directly supplementing the HVAC compressor load, supporting up to 45% reduction in electricity consumption.",
                },
                {
                  icon: "⟳",
                  title: "Refrigeration Cycle Integration",
                  desc: "Adds pressure and temperature into the refrigeration cycle, reducing compressor workload and improving operational efficiency.",
                },
                {
                  icon: "₹",
                  title: "Significant Cost Savings",
                  desc: "Drives immediate reduction in operational expenditure with faster ROI realization for commercial infrastructure.",
                },
                {
                  icon: "🌿",
                  title: "Environmental Impact",
                  desc: "Supports sustainable cooling infrastructure by lowering greenhouse gas emissions and improving energy efficiency.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-[#f7f8f7] border border-slate-200 rounded-[1.5rem] p-6 lg:p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-lime-100 flex items-center justify-center mb-6">
                    <span className="text-lime-600 text-2xl">
                      {card.icon}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* COMPARISON */}
      {/* ================================================= */}
      <section id="benefits" className="py-20 lg:py-32 bg-[#f5f7f2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">

          {/* HEADING */}
          <div className="max-w-5xl mb-16 lg:mb-20">

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 mb-6 lg:mb-8">
                System Comparison
            </h2>
            <p className="uppercase tracking-[0.28em] text-sm sm:text-base font-medium text-lime-600 mb-5 lg:mb-6">
              Conventional HVAC Systems
              vs Hybrid HVAC Systems
            </p>

            

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl">
              Hybrid Thermal Solar integration improves operational efficiency,
              lowers electricity consumption, and supports sustainable HVAC
              infrastructure for commercial environments.
            </p>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto rounded-[2rem] border border-slate-200 bg-white shadow-sm">

            {/* HEADERS */}
            <div className="grid grid-cols-3 min-w-[750px]">

              <div className="bg-slate-100 p-5 lg:p-8 border-b border-slate-200" />

              <div className="bg-[#1f2521] p-5 lg:p-8 border-b border-slate-200 text-center">
                <p className="text-white text-xl lg:text-2xl font-semibold">
                  Conventional
                </p>
              </div>

              <div className="bg-lime-500 p-5 lg:p-8 border-b border-slate-200 text-center">
                <p className="text-black text-xl lg:text-2xl font-semibold">
                  Hybrid HVAC
                </p>
              </div>
            </div>

            {[
              [
                "Power Consumption",
                "High electricity consumption",
                "~40% lower power consumption",
              ],
              [
                "COP Efficiency",
                "COP range of 3.5 – 4.5",
                "COP greater than 6",
              ],
              [
                "Ambient Temperature Performance",
                "Capacity reduces during high temperatures",
                "Maintains designed cooling capacity",
              ],
              [
                "Maintenance",
                "Higher maintenance requirements",
                "Lower maintenance requirements",
              ],
              [
                "Sustainability",
                "No sustainability benefits",
                "Green building product advantages",
              ],
              [
                "Financial Benefits",
                "18% GST with no accelerated depreciation",
                "5% GST with accelerated depreciation benefits",
              ],
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 min-w-[750px] border-b border-slate-200 last:border-b-0"
              >
                <div className="p-5 lg:p-8 bg-slate-50 font-semibold text-slate-900">
                  {row[0]}
                </div>

                <div className="p-5 lg:p-8 text-slate-600">
                  {row[1]}
                </div>

                <div className="p-5 lg:p-8 text-slate-900 font-medium">
                  {row[2]}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ================================================= */}
{/* HOW HTS WORKS */}
{/* ================================================= */}
<div className="bg-[#f3f6ef] rounded-[2rem] p-6 sm:p-10 lg:p-16 overflow-hidden mt-20">

  <div className="max-w-5xl mx-auto">

    {/* HEADING */}
    <div className="text-center mb-12 lg:mb-14">
      

      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
        HTS Integration
        Within HVAC Systems
      </h3>
    </div>

    {/* IMAGE */}
    <div className="flex justify-center mb-12 lg:mb-14">
      <div className="rounded-[2rem] overflow-hidden bg-white shadow-sm border border-slate-200 p-3 sm:p-4 lg:p-6 max-w-4xl">

        <img
          src="/images/HTS-WORKFLOWS.png"
          alt="HTS Workflow"
          className="w-full h-auto object-contain"
        />

      </div>
    </div>

    {/* CONTENT */}
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-10 lg:mt-14 items-start">

      {/* DESCRIPTION */}
      <div className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed">

        <p>
          The HTS Panel is connected between the compressor and condenser
          within the refrigeration cycle of a VRF or chiller system.
        </p>

        <p>
          Using solar thermal energy and controlled heat concentration,
          the panel adds thermal energy to the refrigerant gas before it
          returns to the outdoor unit.
        </p>

        <p>
          This controlled integration reduces compressor energy demand,
          helping improve HVAC efficiency while supporting lower electricity
          consumption during daytime operation.
        </p>

      </div>

      {/* SPECIFICATIONS */}
      <div>

        <h4 className="text-2xl font-semibold text-slate-900 mb-8">
          HTS Panel Specifications
        </h4>

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 text-slate-700">

          <div className="bg-white rounded-2xl border border-slate-200 p-5 lg:p-6">
            <p className="text-sm uppercase tracking-wide text-slate-500 mb-2">
              Panel Size
            </p>

            <p className="text-lg sm:text-xl font-semibold">
              8 ft × 4 ft
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 lg:p-6">
            <p className="text-sm uppercase tracking-wide text-slate-500 mb-2">
              Weight
            </p>

            <p className="text-lg sm:text-xl font-semibold">
              95 kg
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 lg:p-6">
            <p className="text-sm uppercase tracking-wide text-slate-500 mb-2">
              Cooling Capacity
            </p>

            <p className="text-lg sm:text-xl font-semibold">
              7.5 Ton / 10 HP
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 lg:p-6">
            <p className="text-sm uppercase tracking-wide text-slate-500 mb-2">
              HVAC Compatibility
            </p>

            <p className="text-lg sm:text-xl font-semibold">
              VRF & Chiller Systems
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</div>
      </section>

      {/* ================================================= */}
      {/* INDUSTRIES */}
      {/* ================================================= */}
      <section id="industries" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">

          <div className="max-w-4xl mb-16 lg:mb-20">
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Infrastructure We Serve
            </h2>

            <p className="uppercase tracking-[0.28em] text-sm sm:text-base font-medium text-lime-600 mb-5 lg:mb-6">
              Industries & Applications
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "Industries",
                image: "/images/industry.jpg",
              },
              {
                title: "Hospitals",
                image: "/images/hospital.jpg",
              },
              {
                title: "Commercial Buildings",
                image: "/images/commercial.jpg",
              },
              {
                title: "Hotels",
                image: "/images/hotel.jpg",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group"
              >
                <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] rounded-[1.5rem] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-lime-300 mb-3">
                      HVAC Application
                    </p>

                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* CONTACT */}
      {/* ================================================= */}
      <section
        id="contact"
        className="relative py-20 lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#17281b] via-[#203926] to-[#1a4b33]" />

        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-lime-400/20 blur-[120px] rounded-full" />

        <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-10">

          <div className="text-center text-white mb-14 lg:mb-16">
            <p className="uppercase tracking-[0.28em] text-sm sm:text-base font-medium text-lime-300 mb-5 lg:mb-6">
              Contact
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 lg:mb-8">
              Connect With SOL
            </h2>

            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              For enquiries related to HTS Panels, HVAC optimization, and
              sustainable cooling infrastructure solutions.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 sm:p-10 lg:p-14 text-white text-center">

            <p className="uppercase tracking-[0.28em] text-sm sm:text-base font-medium text-lime-300 mb-5 lg:mb-6">
              Contact Information
            </p>

            <h3 className="text-3xl sm:text-4xl font-bold leading-tight mb-8 lg:mb-10">
              Solthermal Panels Pvt. Ltd.
            </h3>

            <div className="space-y-4 lg:space-y-5 text-white/80 text-lg sm:text-xl leading-relaxed">
              <p>Mumbai, Maharashtra, India</p>
              <p>contact@solthermal.in</p>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}
      <footer className="bg-[#141816] text-slate-500 text-center py-6 lg:py-8 text-sm sm:text-base">
        © 2026 Solthermal Panels Pvt. Ltd. All rights reserved.
      </footer>
    </div>
  );
}