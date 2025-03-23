import React, { ReactNode, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  dateRange: string;
  modalContent: ReactNode;
}

interface Props {
  experience: Experience;
  onClose: () => void;
  darkMode: boolean;
}

const ExperienceModal: React.FC<Props> = ({
  experience,
  onClose,
  darkMode,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
          darkMode ? "bg-black/70" : "bg-white/70"
        } backdrop-blur-sm`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          ref={modalRef}
          className={`relative max-w-lg w-full rounded-xl shadow-xl p-6 ${
            darkMode
              ? "bg-darkBackground text-textDark"
              : "bg-background text-textLight"
          }`}
          initial={{ y: "-50%", opacity: 0, scale: 0.9 }}
          animate={{ y: "0%", opacity: 1, scale: 1 }}
          exit={{ y: "10%", opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-indigo-500/10 transition"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <h2 className="text-2xl font-semibold mb-2">{experience.title}</h2>
          <p className="text-sm text-gray-500 mb-4">
            {experience.company} — {experience.dateRange}
          </p>
          <div className="leading-relaxed text-base space-y-3">
            {experience.modalContent}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExperienceModal;
