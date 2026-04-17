import { useState } from "react";

export default function MissionSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      icon: "bi-bullseye",
      title: "Mission",
      text: "techsPAR is committed to enhancing its position as the premier partner by delivering superior services to its customers and affiliates. We seek to attract and retain the most talented people by fostering an environment for them to thrive in the work efforts as they develop the most quality custom software solutions for international B2B markets."
    },
    {
      icon: "bi-eye",
      title: "Vision",
      text: "We aim to improve the market by creating beneficial IT services, which are exceedingly great in performance at cost-effective budgets enabling smaller businesses to take full advantage of services and solutions we offer. Whether you are a startup or a larger tech company, techsPAR will help you push your business forward and ensure its growth and stability."
    },
    {
      icon: "bi-gem",
      title: "Value",
      text: "With the continuous increases, growth, and development in the global market and e-commerce sector, one of the major challenges is meeting individualized customer needs and ensuring satisfaction through relevant services."
    }
  ];

  return (
    <div className="row g-4 mt-2 container-lg mx-auto mb-5 p-0">
      {data.map((item, i) => {
        const isOpen = openIndex === i;
        const shortText =
          item.text.length > 120
            ? item.text.slice(0, 120) + "..."
            : item.text;

        return (
          <div className="col-md-4" key={i}>
           <div className={`card custom-card ${isOpen ? "expanded" : ""} text-center p-4  border-0 shadow-lg`}>

              <div className="icon mb-3">
                <i className={`bi ${item.icon} fs-2`}></i>
              </div>

              <h5>{item.title}</h5>

              <p className="mb-3">
                {isOpen ? item.text : shortText}
              </p>

              {item.text.length > 120 && (
                <button
                  className="btn btn-outline-pink btn-sm px-3"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  {isOpen ? "Read Less" : "Read More"}
                </button>
              )}

            </div>
          </div>
        );
      })}
    </div>
  );
}