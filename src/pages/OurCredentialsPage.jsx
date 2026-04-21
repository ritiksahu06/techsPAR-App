// import React from 'react';
// import Banner from '../components/Banner';
// import CredentialsShowcase from '../components/CredentialsShowcase';
// import './OurCredentialsPage.css';

// const OurCredentialsPage = () => {


//     const images = [
//         "/images/our-credentials/bharat-mobility.png",
//         "/images/our-credentials/smart.png",
//         "/images/our-credentials/bharat-expo.png",
//         "/images/our-credentials/bsx-logo.png",
//         "/images/our-credentials/krishi-1.png",
//         "/images/our-credentials/i-auto.png",
//         "/images/our-credentials/imme-2.png",
//         "/images/our-credentials/wood.png",
//         "/images/our-credentials/accma.png",
//         "/images/our-credentials/pamex-24.png",
//         "/images/our-credentials/auto-expo.png",
//         "/images/our-credentials/inno-rail.png",
//         "/images/our-credentials/wood-2022.png",
//         "/images/our-credentials/5th-BuildCon-Nepal_2019.png",
//         "/images/our-credentials/5thNepalWood_2019.png",
//         "/images/our-credentials/8th.png",
//         "/images/our-credentials/15th auto expo-1.png",
//         "/images/our-credentials/a-hai.png",
//         "/images/our-credentials/conmac_2018.png",
//         "/images/our-credentials/e3_2018.png",
//         "/images/our-credentials/Future_Mobility_Show_2019.png",
//         "/images/our-credentials/GES_2018.png",
//         "/images/our-credentials/iisgs_2016.png",
//         "/images/our-credentials/im-12.png",
//         "/images/our-credentials/imme-kolkatta-1.png",
//         "/images/our-credentials/imme-kolkatta-2018.png",
//         "/images/our-credentials/inno-rail-2018.png",
//         "/images/our-credentials/inno-rail-logo-1.png",
//         "/images/our-credentials/innorail.png",
//         "/images/our-credentials/IRCE_2018.png",
//         "/images/our-credentials/krushi_odisha.png",
//         "/images/our-credentials/momentum_jharkhand.png",
//         "/images/our-credentials/pack-plus-hyderabad-2016-1.png",
//         "/images/our-credentials/pama.png",
//         "/images/our-credentials/tourism.png",
//         "/images/our-credentials/toybiz2018-1.png",
//         "/images/our-credentials/momentum-jharkhand-global-investor-summit-ranchi copy.png",
//       ];



//     return (
//         <>

//                 <Banner title='Our-credentials' image='./images/credentials.png' breadcrumb={[
//                     { name: "Home", link: "/" },
//                     { name: "Our Credentials" }
//                 ]} />

//                 <div className="text-center mt-5">
//                     <h2 className="fw-bold">Events of techsPAR Solutions</h2>
//                     <div className="loader mx-auto mt-3"></div>
//                 </div>

//                 <div className="container">

//                     <div className="row">

//                     </div>




// <div className="row mt-5">
//   {images.map((img, index) => (
//       <div className="col-12 col-sm-6 col-md-4 col-lg-2" key={index}>
//       <img
//         src={`${img}`}
//         alt={`gallery-${index}`}
//         className="img-fluid gallery-img p-2 shadow-lg rounded-2"
//       />
//     </div>

//   ))}
// </div>
//  </div>

//                 <div className="container-fluid ">
//                 <div className="container">
//                         <div className=" my-5">
//                             <h3 className="fw-bold">Our Recent Web Projects</h3>
//                             <div className="loader mt-3"></div>
//                         </div>

//                         <div className="job-list">

//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Online Registration for IMME 2018, Kolkata
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Online Registration for Sustainability Awards 2018
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Online Web Application for PARTNERSHIP SUMMIT 2018
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     IMEXPO 2017
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Online Registration for Make in India, Sweden
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     India Gaming Show South 2018
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Online Registration for Make in India Lounge Pavillion, St. Petersburg International Economic Forum (SPIEF 2017), Russia
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Online Registration for IMME 2016, Kolkata
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     COMVECS 2017 - The Commercial Vehicles Show
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Incredible India Global Tourism Mart 2017
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     CII LAC Conclave, Mexico
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     1IETF India 2017
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     India Gaming Show 2017
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Bengaluru Space Expo - BSX India 2016 Our Recent Events
//                                 </span>
//                             </p>
//                         </div>

//                         <div className=" mt-5">
//                             <h3 className="fw-bold">Our Recent Web Projects</h3>
//                             <div className="loader mt-3"></div>
//                         </div>


//                         <div className="job-list mt-3">

//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Future Mobility Show 2019, Bengaluru India - Organized by CII
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     5th NEPAL WOOD International Expo 2019, Nepal - Organized by CII
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     5th NEPAL BUILDCON International Expo 2019, Nepal - Organized by CII
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Krushi Odisha, Bhubaneswar India - Organized by CII
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     E3 – Energize Empower East" Energy Convention, Kolkata - Organized by IEEMA
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     CII-ITC Sustainability Awards 2018, pravasi bharatiya kendra, New Delhi - Organized by CII-ITC
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     ConMac, 2018 Kathmandu, Nepal - Organized by CII
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     INNORAIL 2018, Lucknow, UP - Organized by CII
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     IMME 2018, Kolkata - Organized by CII
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Global Exhibition on Services (GES) 2018, Mumbai –Organised by Confederation of Indian Industry (CII)
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     IRCE 2018, Chennai –Organised by Confederation of Indian Industry (CII)
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     AutoExpo Components Show 2018, New Delhi - Organized by SIAM, CII & ACMA
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     PAMEX 2017, Mumbai - Organized by Printers Manufacturing Association & Print Packaging.com
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     India Packaging Show 2017, Mumbai - Organized by Print Packaging.com
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Industrial Maintenance Expo(IMEXPO) 2017, Pune- Organized by CII
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     CII-ITC Sustainability Awards 2017, Hotel Le-Meridien, New Delhi - Organized by CII-ITC
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Global Mining & Minerals Summit 2017, HEC Ground, Ranchi, Jharkhand - Organized by CII
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     International Railway Equipment Exhibition (IREE) 2017, Pragati Maidan, New Delhi - Organized by CII
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Sport India 2017, Pragati Maidan, New Delhi Services - Organized by Indian Exhibition
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     PackPlus 2017, Pragati Maidan, New Delhi - Organized by Print Packaging.com
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Toy Biz 2017 - Pragati Maidan, New Delhi - Organized by Toy Association of India
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Sign India 2017 - Pragati Maidan, New Delhi - Organized by Business Live
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Oracle Open World 2017 - Pragati Maidan, New Delhi - Organized by Cigma Events
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     PackPlus 2017, BIEC, Bengaluru - Organized by Print Packaging.com
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Momentum Jharkhand - Global Investor Summit 2017, Ranchi - Organized by CII
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Sustainability Awards 2016 - Organized by CII- ITC
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     INNORAIL 2016, Lucknow, New Delhi - Organized by CII
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     IMME 2016, Kolkata, New Delhi - Organized by CII
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Incredible India Investor Tourism Summit 2016, Vigyan Bhawan, New Delhi - Organized by CII & Ministry of Tourism, Government of India
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     PackPlus 2016, Pragati Maidan, New Delhi - Organized by Print Packaging.com
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Tyre Expo 2016, at Pragati Maidan - Organized by SingEx Exhibitions Pte Ltd., Singapore
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Global Exhibition on Services 2016, at India Expo Mart - Organized by CII & SEPC, Ministry of Commerce & Industry, Government of India
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     AGM at Hotel Taj Palace, New Delhi - For Confederation of Indian Industry (CII)
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     Krishi Unnati Mela 2016, at PUSA GROUND - Organized by CII & Ministry of Agriculture & Farmer Welfare, Government of India
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     PackPlus South 2016, HITEX, Hyderabad - Organized by Print Packaging.com
//                                 </span>
//                             </p>
//                             <p className="d-flex align-items-start">
//                                 <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                                 <span>
//                                     PAMEX 2015, BEC, Mumbai - Organized by All India Federation of Master Printers (AIFMP) & Print Packaging.com and Many More Events in past….
//                                 </span>
//                             </p>


//                         </div>
//                     </div> 


//                 </div>

//                 {/* All your normal content ABOVE (no background) */}


// <CredentialsShowcase />


//         </>
//     );
// }

// export default OurCredentialsPage;



//                                  ======================================






import React from 'react';
import Banner from '../components/Banner';
import CredentialsShowcase from '../components/CredentialsShowcase';
import './OurCredentialsPage.css';

const OurCredentialsPage = () => {


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
        "/images/our-credentials/auto-expo.png",
        "/images/our-credentials/inno-rail.png",
        "/images/our-credentials/wood-2022.png",
        "/images/our-credentials/5th-BuildCon-Nepal_2019.png",
        "/images/our-credentials/5thNepalWood_2019.png",
        "/images/our-credentials/8th.png",
        "/images/our-credentials/15th auto expo-1.png",
        "/images/our-credentials/a-hai.png",
        "/images/our-credentials/conmac_2018.png",
        "/images/our-credentials/e3_2018.png",
        "/images/our-credentials/Future_Mobility_Show_2019.png",
        "/images/our-credentials/GES_2018.png",
        "/images/our-credentials/iisgs_2016.png",
        "/images/our-credentials/im-12.png",
        "/images/our-credentials/imme-kolkatta-1.png",
        "/images/our-credentials/imme-kolkatta-2018.png",
        "/images/our-credentials/inno-rail-2018.png",
        "/images/our-credentials/inno-rail-logo-1.png",
        "/images/our-credentials/innorail.png",
        "/images/our-credentials/IRCE_2018.png",
        "/images/our-credentials/krushi_odisha.png",
        "/images/our-credentials/momentum_jharkhand.png",
        "/images/our-credentials/pack-plus-hyderabad-2016-1.png",
        "/images/our-credentials/pama.png",
        "/images/our-credentials/tourism.png",
        "/images/our-credentials/toybiz2018-1.png",
        "/images/our-credentials/momentum-jharkhand-global-investor-summit-ranchi copy.png",
    ];



    return (
        <div className="our-credentials-page">
            <div className="solid-bg">

            <Banner title='Our-credentials' image='./images/credentials.png' breadcrumb={[
                { name: "Home", link: "/" },
                { name: "Our Credentials" }
            ]} />

            <div className="text-center mt-5">
                <h2 className="fw-bold">Events of techsPAR Solutions</h2>
                <div className="loader mx-auto mt-3"></div>
            </div>

            <div className="container">

                <div className="row">

                </div>




                <div className="row mt-5">
                    {images.map((img, index) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-2" key={index}>
                            <img
                                src={`${img}`}
                                alt={`gallery-${index}`}
                                className="img-fluid gallery-img p-2 shadow-lg rounded-2"
                            />
                        </div>

                    ))}
                </div>
            </div>
            <div className="container-fluid ">
                <div className="container">
                    <div className=" my-5">
                        <h3 className="fw-bold">Our Recent Web Projects</h3>
                        <div className="loader mt-3"></div>
                    </div>

                    <div className="job-list">

                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Online Registration for IMME 2018, Kolkata
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Online Registration for Sustainability Awards 2018
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Online Web Application for PARTNERSHIP SUMMIT 2018
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                IMEXPO 2017
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Online Registration for Make in India, Sweden
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                India Gaming Show South 2018
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Online Registration for Make in India Lounge Pavillion, St. Petersburg International Economic Forum (SPIEF 2017), Russia
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Online Registration for IMME 2016, Kolkata
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                COMVECS 2017 - The Commercial Vehicles Show
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Incredible India Global Tourism Mart 2017
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                CII LAC Conclave, Mexico
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                1IETF India 2017
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                India Gaming Show 2017
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Bengaluru Space Expo - BSX India 2016 Our Recent Events
                            </span>
                        </p>
                    </div>

                    <div className=" mt-5">
                        <h3 className="fw-bold">Our Recent Web Projects</h3>
                        <div className="loader mt-3"></div>
                    </div>


                    <div className="job-list mt-3">

                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Future Mobility Show 2019, Bengaluru India - Organized by CII
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                5th NEPAL WOOD International Expo 2019, Nepal - Organized by CII
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                5th NEPAL BUILDCON International Expo 2019, Nepal - Organized by CII
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Krushi Odisha, Bhubaneswar India - Organized by CII
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                E3 – Energize Empower East" Energy Convention, Kolkata - Organized by IEEMA
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                CII-ITC Sustainability Awards 2018, pravasi bharatiya kendra, New Delhi - Organized by CII-ITC
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                ConMac, 2018 Kathmandu, Nepal - Organized by CII
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                INNORAIL 2018, Lucknow, UP - Organized by CII
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                IMME 2018, Kolkata - Organized by CII
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Global Exhibition on Services (GES) 2018, Mumbai –Organised by Confederation of Indian Industry (CII)
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                IRCE 2018, Chennai –Organised by Confederation of Indian Industry (CII)
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                AutoExpo Components Show 2018, New Delhi - Organized by SIAM, CII & ACMA
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                PAMEX 2017, Mumbai - Organized by Printers Manufacturing Association & Print Packaging.com
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                India Packaging Show 2017, Mumbai - Organized by Print Packaging.com
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Industrial Maintenance Expo(IMEXPO) 2017, Pune- Organized by CII
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                CII-ITC Sustainability Awards 2017, Hotel Le-Meridien, New Delhi - Organized by CII-ITC
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Global Mining & Minerals Summit 2017, HEC Ground, Ranchi, Jharkhand - Organized by CII
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                International Railway Equipment Exhibition (IREE) 2017, Pragati Maidan, New Delhi - Organized by CII
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Sport India 2017, Pragati Maidan, New Delhi Services - Organized by Indian Exhibition
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                PackPlus 2017, Pragati Maidan, New Delhi - Organized by Print Packaging.com
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Toy Biz 2017 - Pragati Maidan, New Delhi - Organized by Toy Association of India
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Sign India 2017 - Pragati Maidan, New Delhi - Organized by Business Live
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Oracle Open World 2017 - Pragati Maidan, New Delhi - Organized by Cigma Events
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                PackPlus 2017, BIEC, Bengaluru - Organized by Print Packaging.com
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Momentum Jharkhand - Global Investor Summit 2017, Ranchi - Organized by CII
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Sustainability Awards 2016 - Organized by CII- ITC
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                INNORAIL 2016, Lucknow, New Delhi - Organized by CII
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                IMME 2016, Kolkata, New Delhi - Organized by CII
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Incredible India Investor Tourism Summit 2016, Vigyan Bhawan, New Delhi - Organized by CII & Ministry of Tourism, Government of India
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                PackPlus 2016, Pragati Maidan, New Delhi - Organized by Print Packaging.com
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Tyre Expo 2016, at Pragati Maidan - Organized by SingEx Exhibitions Pte Ltd., Singapore
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Global Exhibition on Services 2016, at India Expo Mart - Organized by CII & SEPC, Ministry of Commerce & Industry, Government of India
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                AGM at Hotel Taj Palace, New Delhi - For Confederation of Indian Industry (CII)
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                Krishi Unnati Mela 2016, at PUSA GROUND - Organized by CII & Ministry of Agriculture & Farmer Welfare, Government of India
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                PackPlus South 2016, HITEX, Hyderabad - Organized by Print Packaging.com
                            </span>
                        </p>
                        <p className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>
                                PAMEX 2015, BEC, Mumbai - Organized by All India Federation of Master Printers (AIFMP) & Print Packaging.com and Many More Events in past….
                            </span>
                        </p>


                    </div>
                </div>
            </div>
            </div>
            {/* All your normal content ABOVE (no background) */}
            <CredentialsShowcase />


            </div>
    );
}

export default OurCredentialsPage;




