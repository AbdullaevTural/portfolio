import { useEffect, useRef, useState } from "react";

const TRAIL_LENGTH = 14;

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const trailRefs = useRef([]);
  const mousePosition = useRef({ x: -100, y: -100 });
  const trailPositions = useRef(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: -100, y: -100 }))
  );
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) {
      return undefined;
    }

    document.documentElement.classList.add("has-custom-cursor");

    const handleMouseMove = (event) => {
      mousePosition.current = { x: event.clientX, y: event.clientY };
      setIsVisible(true);

      const target = event.target instanceof Element
        ? event.target.closest(
            "a, button, input, textarea, select, [role=button], [data-cursor-hover]"
          )
        : null;

      setIsHovering(Boolean(target));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    let animationFrame;
    const animate = () => {
      const positions = trailPositions.current;

      positions.forEach((position, index) => {
        const target = index === 0 ? mousePosition.current : positions[index - 1];
        const easing = index === 0 ? 0.34 : 0.22;

        position.x += (target.x - position.x) * easing;
        position.y += (target.y - position.y) * easing;

        const trail = trailRefs.current[index];
        if (trail) {
          trail.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
        }
      });

      const lead = positions[0];
      const transform = `translate3d(${lead.x}px, ${lead.y}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = transform;
      if (dotRef.current) dotRef.current.style.transform = transform;

      animationFrame = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isVisible ? "is-visible" : ""}`}
      aria-hidden="true"
    >
      {Array.from({ length: TRAIL_LENGTH }, (_, index) => (
        <span
          key={index}
          ref={(element) => {
            trailRefs.current[index] = element;
          }}
          className="custom-cursor__trail"
          style={{ opacity: (TRAIL_LENGTH - index) / TRAIL_LENGTH }}
        />
      ))}
      <span
        ref={ringRef}
        className={`custom-cursor__ring ${isHovering ? "is-hovering" : ""} ${
          isClicking ? "is-clicking" : ""
        }`}
      />
      <span ref={dotRef} className="custom-cursor__dot" />
    </div>
  );
};

export default CustomCursor;
