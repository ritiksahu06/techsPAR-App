// import React from "react";
// import "./CredentialsShowcase.css";

// const CredentialsShowcase = () => {
//   const images = [
//     "/images/our-credentials/bharat-mobility.png",
//     "/images/our-credentials/smart.png",
//     "/images/our-credentials/bharat-expo.png",
//     "/images/our-credentials/bsx-logo.png",
//     "/images/our-credentials/krishi-1.png",
//     "/images/our-credentials/i-auto.png",
//     "/images/our-credentials/imme-2.png",
//     "/images/our-credentials/wood.png",
//     "/images/our-credentials/accma.png",
//     "/images/our-credentials/pamex-24.png",
//   ];

//   return (
//     <section className="credentials-section">
//       <div className="glass-box">

//         <h3 className="title">
//           Valuable Clients of TechsPAR Solutions
//         </h3>

//         <div className="logo-slider">
//           <div className="logo-track">

//             {/* duplicate for infinite scroll */}
//             {[...images, ...images].map((img, i) => (
//               <img src={img} key={i} alt="logo" />
//             ))}

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default CredentialsShowcase;



import React from "react";
import "./CredentialsShowcase.css";

const CredentialsShowcase = () => {
    const images = [
        "/images/our-credentials/bharat-mobility.png",
        "/images/our-credentials/smart.png",
        "/images/our-credentials/bharat-expo.png",
        "/images/our-credentials/bsx-logo.png",
        "/images/our-credentials/krishi-1.png",
        "/images/our-credentials/i-auto.png",
        "/images/our-credentials/imme-2.png",
        "/images/our-credentials/wood.png",
        "/images/our-credentials/accma.png",
        "/images/our-credentials/pamex-24.png",
    ];

    return (
        <section className="cred-section">

            <div className="cred-overlay">
                <div className="container">

                    <div className="row align-items-center">

                        {/* LEFT */}
                        <div className="col-lg-6">
                            {/* <div className="cred-box">
                                <h3></h3>
                                <div className="line"></div>
                            </div> */}
                            <div className="text-center mt-5 cred-box">
                                <h4 className=" text-light">Valuable Clients of TechsPAR Solutions</h4>
                                <div className="loader mx-auto mt-3"></div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="col-lg-6 text-white mt-4 mt-lg-0">
                            <p>
                                Seamlessly manage integrated growth strategies and collaborative markets. Globally empower cost-effective information networks with a focus on sustainable engagement. Dynamically foster professional collaboration and idea-sharing without relying on rigid, principle-centered frameworks.
                            </p>
                        </div>

                    </div>

                    {/* LOGO SLIDER */}
                    {/* LOGO SLIDER */}
                    <div className="logo-slider col-9 p-5 mx-auto">
                        <div className="logo-track">
                            {[...images, ...images].map((img, i) => ( // ✅ double images — smooth loop
                                <img src={img} key={i} alt="logo" className="img-fluid" />
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default CredentialsShowcase;