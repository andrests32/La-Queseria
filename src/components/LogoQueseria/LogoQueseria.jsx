const LogoQueseria = ({ src = "/queseria.webp", alt = "Logo La Quesería", className = "w-auto h-14 lg:h-24" }) => {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
      />
    );
  };
  
  export default LogoQueseria;
  