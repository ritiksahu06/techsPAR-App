import { useEffect, useRef } from "react";

const MouseFollower = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // small dot
      if (dotRef.current) {
        dotRef.current.style.transform = `
          translate(${mouse.current.x - 4}px, ${mouse.current.y - 4}px)
        `;
      }
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.20;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.20;

      if (ringRef.current) {
        ringRef.current.style.transform = `
          translate(${ring.current.x - 17.5}px, ${ring.current.y - 17.5}px)
        `;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className="cursor-ring"></div>
    </>
  );
};

export default MouseFollower;