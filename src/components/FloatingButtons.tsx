import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  // Only show after scrolling down a bit
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-6 z-[100] flex flex-col gap-3">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* KakaoTalk Button */}
            <motion.a
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://pf.kakao.com/_xjxcgpxl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-[#FEE500] text-[#3C1E1E] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
              aria-label="카카오톡 상담하기"
            >
              <MessageCircle className="w-7 h-7 fill-current" />
            </motion.a>

            {/* Phone Button */}
            <motion.a
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="tel:0632217500"
              target="_top"
              className="w-14 h-14 bg-navy-900 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
              aria-label="전화 상담하기"
            >
              <Phone className="w-6 h-6" />
            </motion.a>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
