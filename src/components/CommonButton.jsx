const CommonButton = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={` bg-[#0E1226] text-lg rounded-[50px] font-[500] focus:outline-none  ${className}`}
    >
      {text}
    </button>
  );
};

export default CommonButton;
