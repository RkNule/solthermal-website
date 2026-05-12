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
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center">
            <img
              src="/images/sol-logo.png"
              alt="Solthermal"
              className="w-44 lg:w-52 h-auto object-contain -ml-2"
            />
          </div>

          {/* MENU */}
          <nav className="hidden lg:flex items-center gap-10 text-[15px] tracking-wide text-lime-300 font-medium">
            <a href="#problem" className="hover:text-white transition">
              Problem
            </a>

            <a href="#solution" className="hover:text-white transition">
              Solution
            </a>

            <a href="#benefits" className="hover:text-white transition">
              Benefits
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

          {/* MOBILE */}
          <button
            className="lg:hidden text-white text-3xl"
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
              Benefits
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
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
  
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
  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl pt-32"
    >
      <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] text-white mb-6">
        Reduce commercial cooling costs with
        <br />
        HTS Panels
      </h1>

      <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl">
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
        className="py-32 bg-[#1b211d] text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[0.28em] text-base font-medium text-lime-300 mb-6">
              The HVAC Consumption Challenge
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold leading-[1.1] mb-10 text-white">
              Global Cooling Demand
              <br />
              Continues To Rise
            </h2>

            <div className="space-y-8 text-white/75 text-lg leading-relaxed">
              <div>
                <p>
                  By 2050, around two-thirds of the world’s households could
                  have an air conditioner. China, India, and Indonesia together
                  may account for nearly half of the total global demand.
                </p>

                <p className="text-lime-300 text-sm mt-3 uppercase tracking-[0.15em]">
                  International Energy Agency (IEA)
                </p>
              </div>

              <div>
                <p>
                  Air-conditioners’ contribution to peak electricity load in
                  India could reach nearly 45% of total electricity consumption
                  by 2040.
                </p>

                <p className="text-lime-300 text-sm mt-3 uppercase tracking-[0.15em]">
                  ISHRAE
                </p>
              </div>

              <div>
                <p>
                  Cooling is expected to become one of the largest contributors
                  to growing global electricity demand between now and 2050.
                </p>

                <p className="text-lime-300 text-sm mt-3 uppercase tracking-[0.15em]">
                  United Nations Environment Programme
                </p>
              </div>

              <div>
                <p>
                  By 2050, space cooling in India could account for nearly 28%
                  of total electricity demand and 44% of peak load.
                </p>

                <p className="text-lime-300 text-sm mt-3 uppercase tracking-[0.15em]">
                  Copenhagen Centre on Energy Efficiency
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-[2rem] overflow-hidden bg-white p-6 shadow-2xl">
            <div className="mb-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
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
<section id="solution" className="py-32 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP */}
    <div className="mb-24">

      {/* TOP HEADING */}
      <div className="max-w-4xl mb-16">
        <p className="uppercase tracking-[0.28em] text-base font-medium text-lime-600 mb-6">
          The Solution – HTS Panels
        </p>

        <h2 className="text-4xl lg:text-5xl font-bold leading-[1.1] text-slate-900">
          Reducing HVAC Energy
          Consumption Through
          Thermal Integration
        </h2>
      </div>

      {/* FEATURE CARDS */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* CARD 1 */}
        <div className="bg-[#f7f8f7] border border-slate-200 rounded-[1.5rem] p-8">
          <div className="w-12 h-12 rounded-xl bg-lime-100 flex items-center justify-center mb-6">
            <span className="text-lime-600 text-2xl">⚡</span>
          </div>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            High Energy Efficiency
          </h3>

          <p className="text-slate-600 leading-relaxed">
            Maximizes thermal collection directly supplementing the HVAC
            compressor load, supporting up to 45% reduction in electricity
            consumption.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-[#f7f8f7] border border-slate-200 rounded-[1.5rem] p-8">
          <div className="w-12 h-12 rounded-xl bg-lime-100 flex items-center justify-center mb-6">
            <span className="text-lime-600 text-2xl">⟳</span>
          </div>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Refrigeration Cycle Integration
          </h3>

          <p className="text-slate-600 leading-relaxed">
            Adds pressure and temperature into the refrigeration cycle,
            reducing compressor workload and improving operational efficiency.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-[#f7f8f7] border border-slate-200 rounded-[1.5rem] p-8">
          <div className="w-12 h-12 rounded-xl bg-lime-100 flex items-center justify-center mb-6">
            <span className="text-lime-600 text-2xl">₹</span>
          </div>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Significant Cost Savings
          </h3>

          <p className="text-slate-600 leading-relaxed">
            Drives immediate reduction in operational expenditure with
            faster ROI realization for commercial infrastructure.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-[#f7f8f7] border border-slate-200 rounded-[1.5rem] p-8">
          <div className="w-12 h-12 rounded-xl bg-lime-100 flex items-center justify-center mb-6">
            <span className="text-lime-600 text-2xl">🌿</span>
          </div>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Environmental Impact
          </h3>

          <p className="text-slate-600 leading-relaxed">
            Supports sustainable cooling infrastructure by lowering
            greenhouse gas emissions and improving energy efficiency.
          </p>
        </div>

      </div>
    </div>

    {/* HOW HTS WORKS */}
    <div className="bg-[#f3f6ef] rounded-[2rem] p-16 overflow-hidden">

      <div className="max-w-5xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.28em] text-base font-medium text-lime-600 mb-6">
            HTS Integration
          </p>

          <h3 className="text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
            HTS Integration
            Within HVAC Systems
          </h3>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center mb-14">
          <div className="rounded-[2rem] overflow-hidden bg-white shadow-sm border border-slate-200 p-4 lg:p-6 max-w-4xl">
            <img
              src="/images/sol-workflows.png"
              alt="HTS Workflow"
              className="w-full h-auto object-contain cursor-zoom-in transition hover:scale-[1.01]"
              onClick={() => setSelectedImage("/images/sol-workflows.png")}
            />
          </div>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 mt-14 items-start">

          {/* DESCRIPTION */}
          <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
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

            <div className="grid sm:grid-cols-2 gap-6 text-slate-700">

              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <p className="text-sm uppercase tracking-wide text-slate-500 mb-2">
                  Panel Size
                </p>

                <p className="text-xl font-semibold">
                  8 ft × 4 ft
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <p className="text-sm uppercase tracking-wide text-slate-500 mb-2">
                  Weight
                </p>

                <p className="text-xl font-semibold">
                  95 kg
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <p className="text-sm uppercase tracking-wide text-slate-500 mb-2">
                  Cooling Capacity
                </p>

                <p className="text-xl font-semibold">
                  7.5 Ton / 10 HP
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <p className="text-sm uppercase tracking-wide text-slate-500 mb-2">
                  HVAC Compatibility
                </p>

                <p className="text-xl font-semibold">
                  VRF & Chiller Systems
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
      {/* ================================================= */}
{/* HVAC COMPARISON */}
{/* ================================================= */}
<section id="benefits" className="py-32 bg-[#f5f7f2]">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div className="max-w-5xl mb-20">
      <p className="uppercase tracking-[0.28em] text-base font-medium text-lime-600 mb-6">
        System Comparison
      </p>

      <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900 mb-8">
        Conventional HVAC Systems
        <br />
        vs Hybrid HVAC Systems
      </h2>

      <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
        Hybrid Thermal Solar integration improves operational efficiency,
        lowers electricity consumption, and supports sustainable HVAC
        infrastructure for commercial environments.
      </p>
    </div>

    {/* COMPARISON TABLE */}
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">

      {/* TOP HEADERS */}
      <div className="grid grid-cols-3">

        <div className="bg-slate-100 p-8 border-b border-slate-200">
        </div>

        <div className="bg-[#1f2521] p-8 border-b border-slate-200 text-center">
          <p className="text-white text-2xl font-semibold">
            Conventional
          </p>
        </div>

        <div className="bg-lime-500 p-8 border-b border-slate-200 text-center">
          <p className="text-black text-2xl font-semibold">
            Hybrid HVAC
          </p>
        </div>

      </div>

      {/* ROW 1 */}
      <div className="grid grid-cols-3 border-b border-slate-200">

        <div className="p-8 bg-slate-50 font-semibold text-slate-900">
          Power Consumption
        </div>

        <div className="p-8 text-slate-600">
          High electricity consumption
        </div>

        <div className="p-8 text-slate-900 font-medium">
          ~40% lower power consumption
        </div>

      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-3 border-b border-slate-200">

        <div className="p-8 bg-slate-50 font-semibold text-slate-900">
          COP Efficiency
        </div>

        <div className="p-8 text-slate-600">
          COP range of 3.5 – 4.5
        </div>

        <div className="p-8 text-slate-900 font-medium">
          COP greater than 6
        </div>

      </div>

      {/* ROW 3 */}
      <div className="grid grid-cols-3 border-b border-slate-200">

        <div className="p-8 bg-slate-50 font-semibold text-slate-900">
          Ambient Temperature Performance
        </div>

        <div className="p-8 text-slate-600">
          Capacity reduces during high temperatures
        </div>

        <div className="p-8 text-slate-900 font-medium">
          Maintains designed cooling capacity
        </div>

      </div>

      {/* ROW 4 */}
      <div className="grid grid-cols-3 border-b border-slate-200">

        <div className="p-8 bg-slate-50 font-semibold text-slate-900">
          Maintenance
        </div>

        <div className="p-8 text-slate-600">
          Higher maintenance requirements
        </div>

        <div className="p-8 text-slate-900 font-medium">
          Lower maintenance requirements
        </div>

      </div>

      {/* ROW 5 */}
      <div className="grid grid-cols-3 border-b border-slate-200">

        <div className="p-8 bg-slate-50 font-semibold text-slate-900">
          Sustainability
        </div>

        <div className="p-8 text-slate-600">
          No sustainability benefits
        </div>

        <div className="p-8 text-slate-900 font-medium">
          Green building product advantages
        </div>

      </div>

      {/* ROW 6 */}
      <div className="grid grid-cols-3">

        <div className="p-8 bg-slate-50 font-semibold text-slate-900">
          Financial Benefits
        </div>

        <div className="p-8 text-slate-600">
          28% GST with no accelerated depreciation
        </div>

        <div className="p-8 text-slate-900 font-medium">
          5% GST with accelerated depreciation benefits
        </div>

      </div>

    </div>

  </div>
</section>
      {/* ================================================= */}
      {/* INDUSTRIES */}
      {/* ================================================= */}
      <section id="industries" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADING */}
          <div className="max-w-4xl mb-20">
            <p className="uppercase tracking-[0.28em] text-base font-medium text-lime-600 mb-6">
              Industries & Applications
            </p>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Infrastructure We Serve
            </h2>
          </div>

          {/* CARDS */}
          <div className="grid lg:grid-cols-4 gap-8">
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
                <div className="relative h-[420px] rounded-[1.5rem] overflow-hidden">
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

                    <h3 className="text-3xl font-bold text-white">
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
        className="relative py-32 overflow-hidden"
      >
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17281b] via-[#203926] to-[#1a4b33]" />

        {/* GLOW */}
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-lime-400/20 blur-[120px] rounded-full" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* TOP */}
          <div className="text-center text-white mb-16">
            <p className="uppercase tracking-[0.28em] text-base font-medium text-lime-300 mb-6">
              Contact
            </p>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Connect With Solthermal
            </h2>

            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              For enquiries related to HTS Panels, HVAC optimization, and
              sustainable cooling infrastructure solutions.
            </p>
          </div>

          {/* CONTACT INFO */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-14 text-white text-center">
            <p className="uppercase tracking-[0.28em] text-base font-medium text-lime-300 mb-6">
              Contact Information
            </p>

            <h3 className="text-4xl font-bold leading-tight mb-10">
              Solthermal Panels Pvt. Ltd.
            </h3>

            <div className="space-y-5 text-white/80 text-xl leading-relaxed">
              <p>Mumbai, Maharashtra, India</p>

              <p>contact@solthermal.in</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}
      <footer className="bg-[#141816] text-slate-500 text-center py-8">
        © 2026 Solthermal Panels Pvt. Ltd. All rights reserved.
      </footer>
    </div>
  );
}