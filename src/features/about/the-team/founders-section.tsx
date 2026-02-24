// "use client";
// import { motion } from "motion/react";
//
// const founders = [
//   {
//     index: "01",
//     name: "Kofi Mensah",
//     role: "Co-founder & CEO",
//     origin: "Koforidua, Ghana",
//     bio: "Kofi spent years watching people he loved carry things quietly — anxiety, grief, identity — with nowhere to put it down. He started Xolace because he knew the gap wasn't a lack of need. It was a lack of a place that felt safe enough to begin.",
//     belief: "\"Safe space isn't a feature. It's the whole product.\"",
//     tags: ["Product", "Vision", "Community"],
//     imgSrc: null,
//   },
//   {
//     index: "02",
//     name: "Ama Owusu",
//     role: "Co-founder & CTO",
//     origin: "Accra, Ghana",
//     bio: "Ama builds systems that hold weight quietly. Before Xolace she worked on infrastructure for platforms used by millions — but the work that mattered most was always smaller, more personal. She builds Xolace to last: thoughtfully, without shortcuts.",
//     belief: "\"The technology should disappear. What stays is the feeling of being held.\"",
//     tags: ["Engineering", "Infrastructure", "Privacy"],
//     imgSrc: null,
//   },
// ];
//
//
//
//
// /* ─────────────────────────────────────────────
//    Single founder card
// ───────────────────────────────────────────── */
//
//
// /* ─────────────────────────────────────────────
//    Main export
// ───────────────────────────────────────────── */
// export default function FoundersSection() {
//   return (
//     <section
//       className="relative min-h-screen py-24 md:py-36 px-6 md:px-16 overflow-hidden"
//       style={{ background: "linear-gradient(160deg, #0a0614 0%, #0f0a20 50%, #0a0e1e 100%)" }}
//     >
//       {/* Ambient background orbs */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <motion.div
//           animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
//           transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-10"
//           style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
//         />
//         <motion.div
//           animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
//           transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
//           className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10"
//           style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
//         />
//         {/* Subtle grid texture */}
//         <div
//           className="absolute inset-0 opacity-[0.025]"
//           style={{
//             backgroundImage:
//               "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
//             backgroundSize: "80px 80px",
//           }}
//         />
//       </div>
//
//       <div className="relative z-10 max-w-6xl mx-auto">
//         <SectionHeader />
//
//         <div className="flex flex-col gap-6">
//           {founders.map((founder, i) => (
//             <FounderCard key={founder.index} founder={founder} i={i} />
//           ))}
//         </div>
//
//         <ClosingNote />
//       </div>
//     </section>
//   );
// }