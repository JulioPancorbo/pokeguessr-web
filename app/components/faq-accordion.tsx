"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="group"
        >
          <motion.button
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
            className="w-full relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>

            {/* Border glow effect */}
            <div className="absolute inset-0 border border-cyan-500/20 group-hover:border-cyan-500/50 rounded-lg transition-all duration-300"></div>

            {/* Content */}
            <div className="relative p-4 text-left">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-base font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-white" />
                </motion.div>
              </div>

              {/* Question number indicator - retro terminal vibe */}
              <div className="absolute right-4 top-4 text-xs font-mono text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                [{index + 1}]
              </div>
            </div>
          </motion.button>

          {/* Answer */}
          <AnimatePresence>
            {expandedIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 border-l-2 border-purple-500/50 px-6 py-4 text-gray-300 text-sm leading-relaxed">
                  {/* Terminal-style left accent */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-500"></div>

                  <div className="pl-2">{item.answer}</div>

                  {/* Subtle code-like element at bottom */}
                  <div className="mt-3 pt-3 border-t border-gray-600/20 text-xs font-mono text-gray-500">
                    &lt;/ answer&gt;
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}
