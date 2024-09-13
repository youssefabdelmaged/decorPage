const Button = ({ value, className }) => {
  return (
    <button
      className={`flex justify-center items-center bg-primary   px-12 py-3 rounded-md font-inter font-bold drop-shadow-sm hover:scale-105 transition-all duration-[.4s]  ${className}`}
    >
      {value}
    </button>
  );
};

export default Button;
