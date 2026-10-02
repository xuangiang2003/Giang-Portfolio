"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, MotionConfig, useInView, useReducedMotion, useScroll, useSpring } from "motion/react";

const EASE_OUT = [0.22, 1, 0.36, 1];

// Phần tử "hiện" khi đã vào màn hình được 60px
const VIEWPORT = { once: true, margin: "0px 0px -60px 0px" };

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

// Tự tắt hiệu ứng chuyển động nếu người xem bật "Reduce motion" trên máy
export function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

// Mờ dần + trượt vào khi cuộn tới
export function Reveal({ children, className, delay = 0, x = 0, y = 16 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.45, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

// Các StaggerItem bên trong sẽ hiện lần lượt
export function Stagger({ children, className, stagger = 0.06 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

// Các StaggerItem bên trong hiện lần lượt ngay khi trang tải (dùng cho hero)
export function Entrance({ children, className, stagger = 0.08, delay = 0.1 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

// Mở dần từ dưới lên như kéo rèm
export function CurtainReveal({ children, className, delay = 0.25 }) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
      transition={{ duration: 0.9, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

// Số đếm từ 0 lên khi cuộn tới. Chỉ chạy với chuỗi bắt đầu bằng số ("3.67/4.0", "6 năm");
// chuỗi khác ("VSTEP B1") giữ nguyên.
export function CountUp({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const reduce = useReducedMotion();
  const [text, setText] = useState(value);

  useEffect(() => {
    const match = /^(\d+(?:\.\d+)?)(.*)$/.exec(value);
    if (!match || !inView || reduce) return;

    const decimals = (match[1].split(".")[1] || "").length;
    const controls = animate(0, parseFloat(match[1]), {
      duration: 1.2,
      ease: EASE_OUT,
      onUpdate: (current) => setText(current.toFixed(decimals) + match[2]),
    });
    return () => controls.stop();
  }, [value, inView, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {text}
    </span>
  );
}

const ECG_PATH = "M0 22 H70 l6 -6 l6 6 h10 l5 4 l7 -24 l7 32 l5 -12 h12 q9 -11 18 0 H240";
const ECG_DRAW = 1.6;

const ECG_LOOP = "2.8s";

// Một đoạn sáng dài `length` (% chiều dài đường) bám ngay sau chấm.
// pathLength=100 nên dashoffset chạy từ length → length-100 thì đầu đoạn sáng đi đúng 0 → 100, khớp với chấm.
function EcgTrail({ length, begin, ...props }) {
  return (
    <path
      d={ECG_PATH}
      pathLength="100"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={`${length} 100`}
      strokeDashoffset={length}
      {...props}
    >
      <animate
        attributeName="stroke-dashoffset"
        from={length}
        to={length - 100}
        dur={ECG_LOOP}
        begin={begin}
        repeatCount="indefinite"
      />
    </path>
  );
}

// Đường điện tim tự vẽ từ trái sang phải, sau đó có một chấm sáng kéo theo vệt sáng chạy dọc đường như trên máy monitor
export function EcgLine({ className, delay = 0.5 }) {
  const reduce = useReducedMotion();
  const dotStart = delay + ECG_DRAW;
  const begin = `${dotStart}s`;

  return (
    <svg viewBox="0 0 240 40" fill="none" overflow="visible" className={className} aria-hidden="true">
      {/* Đường nền mờ hơn để vệt sáng nổi lên */}
      <motion.path
        d={ECG_PATH}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: reduce ? 1 : 0.4 }}
        transition={{
          pathLength: { duration: ECG_DRAW, delay, ease: "easeInOut" },
          opacity: { duration: 0.2, delay },
        }}
      />
      {!reduce && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: dotStart }}>
          {/* Vệt sáng: đuôi dài mờ + đoạn ngắn đậm sát chấm */}
          <EcgTrail length={30} begin={begin} strokeWidth="2" opacity="0.35" />
          <EcgTrail length={16} begin={begin} strokeWidth="2.5" opacity="0.6" />
          <EcgTrail length={6} begin={begin} strokeWidth="3" />
          <g>
            <circle r="7" fill="currentColor" opacity="0.2" />
            <circle r="3" fill="currentColor" />
            <animateMotion dur={ECG_LOOP} begin={begin} repeatCount="indefinite" path={ECG_PATH} />
          </g>
        </motion.g>
      )}
    </svg>
  );
}

// Timeline: đường dọc tự vẽ dài dần theo tiến độ cuộn qua danh sách
export function ScrollTimeline({ children, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={ref} className={`relative ${className || ""}`}>
      <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-accent-100" aria-hidden="true" />
      <motion.div
        style={{ scaleY }}
        className="absolute bottom-0 left-0 top-0 w-0.5 origin-top bg-accent-600"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

// Chấm mốc trên timeline: bật lên khi đường chạy tới
export function TimelineDot({ className }) {
  return (
    <span className={className} aria-hidden="true">
      <motion.span
        className="block h-full w-full rounded-full bg-accent-600"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -30% 0px" }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      />
    </span>
  );
}
