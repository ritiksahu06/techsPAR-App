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



//-------------------------------------------> Working local machine code <---------------------------------------------


// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const UseScrollAnimation = () => {
//   const location = useLocation();

//   useEffect(() => {
//     let observer;

//     const initObserver = () => {
//       const elements = document.querySelectorAll(
//         ".animate, .animate-left, .animate-right, .animate-up, .animate-zoom"
//       );

//       if (!elements.length) return;

//       elements.forEach((el) => el.classList.remove("animated")); // ✅ reset

//       observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               entry.target.classList.add("animated");
//               observer.unobserve(entry.target);
//             }
//           });
//         },
//         {
//           threshold: 0.1,
//           rootMargin: "0px 0px -20px 0px",
//         }
//       );

//       elements.forEach((el) => observer.observe(el));
//     };

//     const t1 = setTimeout(initObserver, 100);
//     const t2 = setTimeout(initObserver, 400);
//     const t3 = setTimeout(initObserver, 800);

//     return () => {
//       clearTimeout(t1);
//       clearTimeout(t2);
//       clearTimeout(t3);
//       if (observer) observer.disconnect();
//     };

//   }, [location.pathname]);
// };

// export default UseScrollAnimation;





// ---------------------------------> Vercel optimize code for scroll animation <------------------------------------------

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UseScrollAnimation = () => {
  const location = useLocation();

  useEffect(() => {
    let observer;
    let timeouts = [];

    const initObserver = () => {
      const elements = document.querySelectorAll(
        ".animate, .animate-left, .animate-right, .animate-up, .animate-zoom"
      );

      if (!elements.length) return;

      // ✅ Disconnect old observer pehle
      if (observer) observer.disconnect();

      // ✅ Reset sab elements
      elements.forEach((el) => {
        el.classList.remove("animated");
        el.style.opacity = "0"; // ✅ Force reset Vercel ke liye
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // ✅ requestAnimationFrame — GPU smooth trigger
              requestAnimationFrame(() => {
                entry.target.style.opacity = ""; // inline style hata do
                entry.target.classList.add("animated");
              });
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,           // ✅ Aur kam kiya — Vercel ke liye
          rootMargin: "0px 0px -10px 0px",
        }
      );

      elements.forEach((el) => observer.observe(el));
    };

    // ✅ Vercel production ke liye zyada timeouts
    timeouts.push(setTimeout(initObserver, 100));
    timeouts.push(setTimeout(initObserver, 500));
    timeouts.push(setTimeout(initObserver, 1000));
    timeouts.push(setTimeout(initObserver, 2000)); // ✅ Vercel slow load ke liye

    // ✅ Scroll event bhi add kiya — extra safety
    const onScroll = () => initObserver();
    window.addEventListener("scroll", onScroll, { once: true });

    return () => {
      timeouts.forEach(clearTimeout);
      window.removeEventListener("scroll", onScroll);
      if (observer) observer.disconnect();
    };

  }, [location.pathname]);
};

export default UseScrollAnimation;