import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function HeaderLower() {
  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);
  const count4 = useMotionValue(0);

  // Create rounded values based on count1 and count2
  const rounded1 = useTransform(count1, Math.round);
  const rounded2 = useTransform(count2, Math.round);
  const rounded3 = useTransform(count3, Math.round);
  const rounded4 = useTransform(count4, Math.round);

  useEffect(() => {
    const delay = 100; // Delay in milliseconds (0.1 second)

    const timeout = setTimeout(() => {
      // First animation to 120
      const animation1 = animate(count1, 120, {
        duration: 2,
      });

      // Second animation to 20
      const animation2 = animate(count2, 20, {
        duration: 2,
      });

      // Third animation to 300
      const animation3 = animate(count3, 300, {
        duration: 2,
      });

      // Fourth animation to 30
      const animation4 = animate(count4, 30, {
        duration: 2,
      });

      // Stop both animations when the component unmounts
      return () => {
        animation1.stop();
        animation2.stop();
        animation3.stop();
        animation4.stop();
      };
    }, delay);

    return () => {
      clearTimeout(timeout); // Clear the timeout if the component unmounts before the delay is reached
    };
  }, [count1, count2, count3, count4]);

  return (
    <>
      <div className="w-full h-3 flex-shrink-0 bg-primary md:mt-3 xl:mt-[7rem]"></div>
      <div className="flex justify-center bg-blue-100 p-5 dark:bg-dark">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-8 sm:gap-12 md:divide-x-2 md:divide-gray-900">
          {/* First block */}
          <div className="flex flex-col items-center col-span-1 w-full p-4">
            <p className="text-3xl text-accent flex justify-center">
              <motion.span>{rounded1}</motion.span>+
            </p>
            <p className="text-[30px] flex justify-center text-[#060000]">Developers</p>
          </div>
          {/* Second block */}
          <div className="flex flex-col items-center col-span-1 w-full p-4">
            <p className="text-3xl text-accent flex justify-center">
              <motion.span>{rounded2}</motion.span>+
            </p>
            <p className="text-[30px] flex justify-center text-[#060000]">Apps</p>
          </div>
          {/* Third block */}
          <div className="flex flex-col items-center col-span-1 w-full p-4">
            <p className="text-3xl text-accent flex justify-center">
              <motion.span>{rounded3}</motion.span>+
            </p>
            <p className="text-[30px] flex justify-center text-[#060000]">Clients</p>
          </div>
          {/* Fourth block */}
          <div className="flex flex-col items-center col-span-1 w-full p-4">
            <p className="text-3xl text-accent flex justify-center">
              <motion.span>{rounded4}</motion.span>K+
            </p>
            <p className="text-[30px] flex justify-center text-[#060000]">Installs</p>
          </div>
        </div>
      </div>
      <div className="w-full h-3 flex-shrink-0 bg-primary"></div>
    </>
  );
}
