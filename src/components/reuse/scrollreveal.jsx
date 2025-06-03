import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const flatten = (children) => {
  const result = [];
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === React.Fragment) {
        result.push(...flatten(child.props.children));
      } else {
        result.push(child);
      }
    } else {
      const parts = String(child).split(/(\s+)/);
      result.push(
        ...parts.map((part, index) => <React.Fragment key={index}>{part}</React.Fragment>)
      );
    }
  });
  return result;
};

function OpacityChild({ children, index, total, progress }) {
  const opacity = useTransform(progress, [index / total, (index + 1) / total], [0.1, 1]);

  let className = "";
  if (React.isValidElement(children) && typeof children.props?.className === "string") {
    className = children.props.className;
  }

  return (
    <motion.span style={{ opacity }} className={cn(className, "h-fit")}>
      {children}
    </motion.span>
  );
}

export default function ScrollReveal({ children, className, ...props }) {
  const ref = useRef(null);
  const flat = flatten(children);
  const count = flat.length;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });


  return (
    <div ref={ref} {...props} className={cn("relative w-full", className)}>
      <div className="sticky top-0 flex h-full w-full items-center justify-center">
        <div className="flex h-fit w-full justify-center min-w-fit flex-wrap whitespace-break-spaces">
          {flat.map((child, index) => (
            <OpacityChild
              key={index}
              progress={scrollYProgress}
              index={index}
              total={count}
            >
              {child}
            </OpacityChild>
          ))}
        </div>
      </div>

      {/* Spacer divs to allow page scroll */}
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="h-auto" />
      ))}
    </div>
  );
}
