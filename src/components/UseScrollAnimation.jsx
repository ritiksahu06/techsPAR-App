// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const UseScrollAnimation = () => {
//   const location = useLocation(); // re-runs on every route change

//   useEffect(() => {
//     const elements = document.querySelectorAll(
//       ".animate, .animate-left, .animate-right, .animate-up, .animate-zoom"
//     );

//     if (!elements.length) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animated");
//             observer.unobserve(entry.target); // ✅ fires only once
//           }
//         });
//       },
//       {
//         threshold: 0.15,      // trigger when 15% visible
//         rootMargin: "0px 0px -40px 0px", // slight offset from bottom
//       }
//     );

//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect(); // cleanup on route change
//   }, [location.pathname]); // ✅ re-triggers on React Router navigation
// };

// export default UseScrollAnimation;




import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UseScrollAnimation = () => {
  const location = useLocation();

  useEffect(() => {
    let observer;

    const initObserver = () => {
      const elements = document.querySelectorAll(
        ".animate, .animate-left, .animate-right, .animate-up, .animate-zoom"
      );

      if (!elements.length) return;

      elements.forEach((el) => el.classList.remove("animated")); // ✅ reset

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animated");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -20px 0px",
        }
      );

      elements.forEach((el) => observer.observe(el));
    };

    const t1 = setTimeout(initObserver, 100);
    const t2 = setTimeout(initObserver, 400);
    const t3 = setTimeout(initObserver, 800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      if (observer) observer.disconnect();
    };

  }, [location.pathname]);
};

export default UseScrollAnimation;