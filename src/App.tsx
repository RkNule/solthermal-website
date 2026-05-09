import { useState } from "react";
import { motion } from "framer-motion";

export default function SolthermalWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#f5f7f2] text-slate-800 overflow-hidden">
      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <img
              src="/brand/sol-logo.png"
              alt="Solthermal"
              className="w-12 h-12 object-contain"
            />

            <div>
              <h1 className="text-2xl font-black text-white">
                SOL<span className="text-lime-400">THERMAL</span>
              </h1>

              <p className="text-xs text-white/60">
                Sustainable Cooling Infrastructure
              </p>
            </div>
          </div>

          {/* MENU */}
          <nav className="hidden lg:flex items-center gap-10 text-sm text-white">
            <a href="#about" className="hover:text-lime-300 transition">
              About
            </a>

            <a href="#problem" className="hover:text-lime-300 transition">
              Problem
            </a>

            <a href="#solution" className="hover:text-lime-300 transition">
              Solution
            </a>

            <a href="#benefits" className="hover:text-lime-300 transition">
              Benefits
            </a>

            <a href="#industries" className="hover:text-lime-300 transition">
              Industries
            </a>

            <a href="#contact" className="hover:text-lime-300 transition">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden lg:block bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full transition"
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
            <a href="#about" className="block">
              About
            </a>

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
        {/* IMAGE */}
        <div className="absolute inset-0">
         <img
  src="/images/hero-diagram.jpg"
  alt="Thermal Energy"
  className="w-full h-full object-cover"
/>

          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* GLOW */}
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-lime-400/20 blur-[120px] rounded-full" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl pt-32"
          >
           <h1 className="text-5xl lg:text-6xl font-semibold leading-[1.1] text-white mb-6">
  Smarter Thermal
  <br />
  Energy Solutions
</h1>

<p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl">
  Solthermal delivers advanced thermal energy storage solutions
  engineered to improve HVAC efficiency and support sustainable
  cooling infrastructure for modern industries.
</p>
          </motion.div>
        </div>
      </section>

     {/* ================================================= */}
{/* ABOUT */}
{/* ================================================= */}
<section
  id="about"
  className="py-32 bg-[#f5f7f2]"
>
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
    
    {/* IMAGE */}
    <div className="rounded-[2rem] overflow-hidden shadow-xl">
      <img
        src="/images/about.jpg"
        alt="Solthermal Vision"
        className="w-full h-[600px] object-cover"
      />
    </div>

    {/* CONTENT */}
    <div>
      <p className="uppercase tracking-[0.3em] text-sm text-lime-600 mb-6">
        About Solthermal
      </p>

      <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-10 text-slate-900">
        Engineering Sustainable
        <br />
        Thermal Solutions
      </h2>

      <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
        <p>
          At Solthermal, we believe modern cooling infrastructure should
          be energy-efficient, sustainable, and engineered for long-term
          performance.
        </p>

        <p>
          Our vision is to support industries and commercial infrastructure
          with smarter thermal management solutions that improve operational
          efficiency while reducing unnecessary energy consumption.
        </p>
      </div>

      {/* POINTS */}
      <div className="mt-12 grid sm:grid-cols-2 gap-4">
        {[
          "Engineering-Focused Solutions",
          "Sustainable Cooling Infrastructure",
          "Intelligent Thermal Management",
          "Energy Optimization Approach",
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white border border-slate-100 rounded-2xl px-5 py-4 shadow-sm text-sm font-medium text-slate-700"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
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
      <p className="uppercase tracking-[0.3em] text-sm text-lime-300 mb-6">
        HVAC Energy Challenges
      </p>

      <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-10 whitespace-nowrap">
  Cooling Systems Demand <br /> Significant Energy
</h2>

      <div className="space-y-6 text-white/70 text-lg leading-relaxed">
        <p>
          HVAC and air conditioning systems are among the largest energy
          consumers in modern commercial and industrial infrastructure.
        </p>

        <p>
          As cooling demand increases, systems experience higher compressor
          loads, continuous operational stress, and rising power consumption
          to maintain stable indoor environments.
        </p>

        <p>
          This leads to increased operational costs, reduced system efficiency,
          and greater long-term energy challenges for buildings and industries.
        </p>
      </div>

      {/* POINTS */}
      <div className="mt-12 space-y-4 text-white/80 text-lg">
        <p>• Higher Compressor Load</p>

        <p>• Increased Power Consumption</p>

        <p>• Continuous Cooling Demand</p>

        <p>• Reduced Operational Efficiency</p>
      </div>
    </div>

    {/* RIGHT */}
    <div className="rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-10">
      <img
        src="/images/energy-graph.png"
        alt="HVAC Energy Graph"
        className="w-full object-cover"
      />
    </div>
  </div>
</section>
      {/* ================================================= */}
      {/* SOLUTION */}
      {/* ================================================= */}
      <section
        id="solution"
        className="py-32 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* TOP */}
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-24">
            {/* LEFT */}
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-lime-600 mb-6">
                The Solution
              </p>

              <h2 className="text-5xl lg:text-6xl font-black leading-tight mb-10">
                What Is HTS Panel?
              </h2>

              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
  <p>
    Solthermal’s HTS technology is developed to support modern HVAC
    infrastructure through intelligent thermal energy management and
    optimized cooling performance.
  </p>

  <p>
    By stabilizing cooling demand and reducing unnecessary compressor
    stress, HTS integration helps improve operational efficiency across
    commercial and industrial environments.
  </p>

  <p>
    The result is a smarter cooling ecosystem designed for long-term
    sustainability, energy optimization, and reliable thermal performance.
  </p>
</div>
            </div>

            {/* RIGHT */}
            <div className="rounded-[2rem] overflow-hidden">
              <img
                src="/images/hts-panel.jpg"
                alt="HTS Panel"
                className="w-full h-[650px] object-cover"
              />
            </div>
          </div>

          {/* HOW HTS WORKS */}
<div className="bg-[#f3f6ef] rounded-[2rem] p-16 overflow-hidden">
  <div className="grid lg:grid-cols-2 gap-20 items-center">

    {/* LEFT CONTENT */}
    <div>
      <p className="uppercase tracking-[0.3em] text-sm text-lime-600 mb-6">
        HTS Integration
      </p>

      <h3 className="text-4xl lg:text-5xl font-bold leading-tight mb-8 text-slate-900">
        Intelligent Thermal
        <br />
        Management Approach
      </h3>

      <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
        <p>
          HTS integration supports HVAC infrastructure by improving
          thermal stability and optimizing cooling efficiency across
          commercial and industrial environments.
        </p>

        <p>
          By reducing unnecessary compressor stress and balancing
          cooling demand, the system helps maintain more consistent
          operational performance.
        </p>

        <p>
          This approach contributes toward smarter energy utilization,
          long-term system reliability, and sustainable cooling
          infrastructure.
        </p>
      </div>

      {/* POINTS */}
      <div className="mt-10 space-y-4 text-slate-700">
        <p>• Optimized Cooling Performance</p>

        <p>• Reduced Compressor Load</p>

        <p>• Improved Thermal Stability</p>

        <p>• Smarter Energy Utilization</p>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="rounded-[2rem] overflow-hidden bg-white p-10 shadow-sm">
      <img
        src="/images/hts-flow.png"
        alt="HTS Workflow"
        className="w-full object-contain"
      />
    </div>

  </div>
</div>
        </div>
      </section>

      {/* ================================================= */}
{/* PERFORMANCE & IMPACT */}
{/* ================================================= */}
<section
  id="benefits"
  className="py-32 bg-[#f5f7f2]"
>
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP HEADING */}
    <div className="max-w-5xl mb-24">
      <p className="uppercase tracking-[0.3em] text-sm text-lime-600 mb-6">
        Performance & Sustainability
      </p>

      <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-10 text-slate-900">
        Smarter HVAC Optimization
        <br />
        For Sustainable Infrastructure
      </h2>

      <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-4xl">
        <p>
          Smarter HVAC optimization contributes toward more efficient
          cooling infrastructure by improving thermal stability,
          reducing unnecessary energy consumption, and supporting
          long-term operational performance.
        </p>

        <p>
          As industries move toward more sustainable infrastructure
          practices, intelligent thermal management plays an important
          role in supporting greener and more energy-conscious
          environments.
        </p>
      </div>
    </div>

    {/* BEFORE / AFTER */}
    <div className="grid lg:grid-cols-2 gap-10 mb-24">

      {/* BEFORE */}
      <div className="bg-[#1f2521] text-white rounded-[2rem] p-12">
        <p className="text-lime-300 mb-6 uppercase text-sm tracking-[0.3em]">
          Conventional Cooling Systems
        </p>

        <div className="space-y-5 text-lg text-white/70">
          <p>• Higher compressor stress</p>

          <p>• Increased cooling load</p>

          <p>• Higher energy consumption</p>

          <p>• Unstable thermal performance</p>

          <p>• Increased maintenance requirements</p>
        </div>
      </div>

      {/* AFTER */}
      <div className="bg-white rounded-[2rem] p-12 shadow-sm border border-slate-100">
        <p className="text-lime-600 mb-6 uppercase text-sm tracking-[0.3em]">
          Optimized With HTS Integration
        </p>

        <div className="space-y-5 text-lg text-slate-600">
          <p>• Improved cooling stability</p>

          <p>• Reduced operational stress</p>

          <p>• Optimized energy utilization</p>

          <p>• Better HVAC efficiency</p>

          <p>• Smarter thermal management</p>
        </div>
      </div>
    </div>

    {/* OPERATIONAL IMPACT */}
    <div className="bg-white rounded-[2rem] p-14 border border-slate-100">
      <div className="max-w-5xl">
        <p className="uppercase tracking-[0.3em] text-sm text-lime-600 mb-6">
          Operational Sustainability
        </p>

        <h3 className="text-4xl font-bold leading-tight mb-8 text-slate-900">
          Supporting Long-Term
          <br />
          Infrastructure Performance
        </h3>

        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
          <p>
            Intelligent thermal optimization not only improves cooling
            efficiency but also contributes toward more reliable and
            sustainable infrastructure operations.
          </p>

          <p>
            By reducing unnecessary HVAC load and improving operational
            balance, HTS integration supports long-term system
            performance, lower maintenance demands, and more
            energy-conscious infrastructure development.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>
      {/* ================================================= */}
      {/* INDUSTRIES */}
      {/* ================================================= */}
      <section
        id="industries"
        className="py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADING */}
          <div className="max-w-4xl mb-20">
            <p className="uppercase tracking-[0.3em] text-sm text-lime-600 mb-6">
              Industries & Applications
            </p>

            <h2 className="text-5xl lg:text-6xl font-black leading-tight">
              Infrastructure We Serve
            </h2>
          </div>

          {/* CARDS */}
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                title: "Hotels",
                image: "/images/hotel.jpg",
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
                title: "Industries",
                image: "/images/industry.jpg",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="relative h-[500px] rounded-[2rem] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-3xl font-black text-white mb-3">
                      {item.title}
                    </h3>

                    <p className="text-white/70 text-sm">
                      Sustainable cooling solutions for modern infrastructure.
                    </p>
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

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* TOP */}
          <div className="text-center text-white mb-20">
            <p className="uppercase tracking-[0.3em] text-sm text-lime-300 mb-6">
              Contact
            </p>

            <h2 className="text-5xl lg:text-6xl font-black leading-tight mb-8">
              Let’s Build Smarter Cooling Infrastructure
            </h2>

            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Reach out for HVAC optimization and sustainable cooling
              infrastructure solutions.
            </p>
          </div>

          {/* CONTACT BOX */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* FORM */}
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/50 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/50 outline-none"
              />

              <textarea
                rows={5}
                name="message"
                placeholder="Your Message"
                className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/50 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-lime-500 hover:bg-lime-600 text-white py-4 rounded-xl transition"
              >
                Send Enquiry
              </button>
            </form>

            {/* INFO */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-black mb-10">
                Solthermal Energy LLP
              </h3>

              <div className="space-y-5 text-white/80 text-lg">
                <p>📍 Mumbai, Maharashtra</p>

                <p>📧 info@solthermal.com</p>

                <p>📞 +91 91375 60316</p>
              </div>

              <div className="mt-10">
                <a
                  href="https://wa.me/919137560316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-lime-500 hover:bg-lime-600 text-white px-8 py-4 rounded-full transition"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}
      <footer className="bg-[#141816] text-slate-500 text-center py-8">
        © 2026 Solthermal Energy LLP. All rights reserved.
      </footer>
    </div>
  );
}