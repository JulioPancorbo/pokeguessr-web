'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export function GameAbout() {
  const [isOpen, setIsOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const sections = [
    {
      title: "What is PokéGuessr?",
      icon: "🎮",
      content: "PokéGuessr is a free online Pokémon guessing game where players identify Pokémon from their silhouettes. Challenge yourself to recognize all 1000+ Pokémon across every generation, from Generation 1 through the latest releases. This interactive Pokémon quiz tests your knowledge and improves your recognition skills.",
      type: "text"
    },
    {
      title: "How to Play",
      icon: "📋",
      content: [
        "A Pokémon silhouette appears on screen",
        "Try to identify which Pokémon it is in the search box",
        "You have up to 5 guesses per round",
        "Use hints to help narrow down your choice",
        "Select specific generations to filter Pokémon",
        "Track your win rate and streaks"
      ],
      type: "list"
    },
    {
      title: "Game Features",
      icon: "⭐",
      content: [
        { label: "Generation Selection", desc: "Filter Pokémon by generation (Gen 1-9)" },
        { label: "Statistics Tracking", desc: "Monitor your performance with win rate and streak tracking" },
        { label: "Multiple Sprites", desc: "View Pokémon in different poses including shiny variants" },
        { label: "Hints & Clues", desc: "Get hints about type, height, and other attributes" },
        { label: "Offline Ready", desc: "Play anytime with cached Pokémon data" },
        { label: "100% Free", desc: "No registration or downloads required" }
      ],
      type: "features"
    },
    {
      title: "Why Play?",
      icon: "🏆",
      content: "Whether you're a casual Pokémon fan or a dedicated trainer, PokéGuessr offers hours of entertainment. Test your knowledge, improve your recognition skills, and compete with friends across all Pokémon generations!",
      type: "text"
    }
  ]

  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* SEO-Friendly Static Content Preview - Compact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="bg-gradient-to-br from-slate-800/50 to-red-900/30 border border-red-500/30 p-2 rounded-lg">
          <h3 className="font-bold text-red-300 text-xs mb-1 flex items-center gap-1">
            <span>🎮</span> What is PokéGuessr?
          </h3>
          <p className="text-slate-200 text-xs leading-tight">
            Identify Pokémon from silhouettes. Challenge across 1000+ Pokémon from all generations.
          </p>
        </div>
        <div className="bg-gradient-to-br from-slate-800/50 to-red-900/30 border border-red-500/30 p-2 rounded-lg">
          <h3 className="font-bold text-red-300 text-xs mb-1 flex items-center gap-1">
            <span>📋</span> How to Play
          </h3>
          <p className="text-slate-200 text-xs leading-tight">
            See silhouette → guess name → 5 attempts max. Use hints to narrow down. Track stats automatically.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// Keep the detailed accordion component below for users who want more info
function GameAboutDetails() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <style jsx>{`
        @keyframes scanlines {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes borderGlow {
          0%, 100% { box-shadow: inset 0 0 20px rgba(239, 68, 68, 0.3), 0 0 20px rgba(239, 68, 68, 0.2); }
          50% { box-shadow: inset 0 0 30px rgba(239, 68, 68, 0.5), 0 0 30px rgba(239, 68, 68, 0.4); }
        }
        .aboutContainer {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          animation: borderGlow 3s ease-in-out infinite;
        }
        .aboutContainer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.05),
            rgba(0, 0, 0, 0.05) 1px,
            transparent 1px,
            transparent 2px
          );
          pointer-events: none;
          z-index: 1;
        }
      `}</style>

      <Accordion 
        type="single" 
        collapsible 
        className="w-full"
        onValueChange={(value) => setIsOpen(!!value)}
      >
        <AccordionItem value="about" className="border-0 aboutContainer bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 relative">
          {/* Scanline effect */}
          <div className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-30" />
          
          <AccordionTrigger className="relative z-20 group flex items-center justify-between px-4 py-3 hover:bg-black/20 transition-colors duration-300">
            <motion.div 
              className="flex items-center gap-2 text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <motion.span 
                className="text-2xl"
                animate={{ y: isOpen ? 0 : [0, -2, 0] }}
                transition={{ repeat: isOpen ? 0 : Infinity, duration: 2 }}
              >
                📱
              </motion.span>
              <span className="font-bold text-sm tracking-wide text-red-300 group-hover:text-red-200 transition-colors">
                About PokéGuessr
              </span>
            </motion.div>
          </AccordionTrigger>

          <AccordionContent className="relative z-20 px-4 pb-4 pt-2">
            <motion.div 
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
            >
              {sections.map((section, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group"
                >
                  {/* Card background with hover effect */}
                  <div className="relative bg-gradient-to-r from-slate-800/50 to-red-900/30 border-l-4 border-red-500 p-3 rounded hover:from-slate-800/70 hover:to-red-900/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                    {/* Accent corner */}
                    <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="flex gap-2 mb-2">
                      <span className="text-xl flex-shrink-0">{section.icon}</span>
                      <h3 className="font-bold text-white text-sm tracking-wide group-hover:text-red-300 transition-colors">
                        {section.title}
                      </h3>
                    </div>

                    {section.type === "text" && (
                      <p className="text-slate-200 text-xs leading-relaxed ml-9">
                        {section.content}
                      </p>
                    )}

                    {section.type === "list" && (
                      <ul className="space-y-1 ml-9">
                        {section.content.map((item, i) => (
                          <motion.li
                            key={i}
                            className="text-slate-200 text-xs flex gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <span className="text-red-500 flex-shrink-0 font-bold">▸</span>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    {section.type === "features" && (
                      <div className="space-y-1 ml-9">
                        {section.content.map((feature, i) => (
                          <motion.div
                            key={i}
                            className="text-xs"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <span className="text-red-400 font-bold">{feature.label}:</span>
                            <span className="text-slate-200 ml-1">{feature.desc}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Footer accent */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-end gap-2 mt-3 pt-2 border-t border-red-500/30"
              >
                <span className="text-xs text-slate-500 font-mono tracking-wider">
                  &lt;/ about&gt;
                </span>
              </motion.div>
            </motion.div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  )
}
