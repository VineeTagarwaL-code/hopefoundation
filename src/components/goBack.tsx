"use client";
import { motion } from "framer-motion";
import { Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";
export const GoBack = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center mt-10 w-full">
      <motion.button
        whileHover={{ translateY: -10 }}
        className="flex justify-center items-center  px-4 py-2 mb-10 gap-3 text-lg md:text-2xl bg-[#f09a29] rounded-md border-solid border-2 border-transparent hover:border-orange-300 transition-all text-white cursor-pointer hover:bg-transparent hover:text-orange-300"
        onClick={router.back}
      >
        Go Back <Undo2 />
      </motion.button>
    </div>
  );
};
