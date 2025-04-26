"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg">We are passionate innovators building the future!</p>
    </motion.section>
  );
}
