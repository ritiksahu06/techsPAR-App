import { Link } from "react-router-dom";

export default function Banner({
  title,
  image ,
  breadcrumb
}) {
  return (
    <div className="about-banner position-relative text-white mt-5">

      {/* Image */}
      <img src={image} alt={title} className=" banner-img" style={{width: "100%"}} />

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Text */}
      <div className="about-banner-text text-center">
        <h1>{title}</h1>

        <p className="breadcrumb">
          {breadcrumb.map((item, i) => (
            <span key={i}>
              {item.link ? <Link to={item.link}>{item.name}</Link> : item.name}
              {i !== breadcrumb.length - 1 && " > "}
            </span>
          ))}
        </p>
      </div>

    </div>
  );
}