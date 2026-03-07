"use client";

import {ReactNode, useEffect, useRef, useState} from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Skip animations on mobile/touch devices for performance
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile) {
      setIsInView(true);
      return;
    }

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            setHasAnimated(true);
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return { ref, isInView: triggerOnce ? isInView || hasAnimated : isInView };
}

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function AnimatedContainer({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedContainerProps) {
  const { ref, isInView } = useScrollAnimation();

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(20px)";
      case "down":
        return "translateY(-20px)";
      case "left":
        return "translateX(20px)";
      case "right":
        return "translateX(-20px)";
      default:
        return "translateY(20px)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translate(0)" : getInitialTransform(),
        transition: `opacity 0.2s ease-out ${delay}s, transform 0.2s ease-out ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.05,
}: StaggerContainerProps) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <div
            key={index}
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(15px)",
              transition: `opacity 0.2s ease-out ${
                index * staggerDelay
              }s, transform 0.2s ease-out ${index * staggerDelay}s`,
              willChange: "opacity, transform",
            }}
          >
            {child}
          </div>
        ))
      ) : (
        <div
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(15px)",
            transition: "opacity 0.2s ease-out, transform 0.2s ease-out",
            willChange: "opacity, transform",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
