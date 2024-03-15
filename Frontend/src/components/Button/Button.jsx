const Button = ({ text, bg, className, onClickFunction, iconName }) => {
  return (
    <>
      <button
        onClick={onClickFunction}
        className={`btn ${className}`}
        style={{ background: bg }}
      >
        <span className="bg-transparent">
          {iconName && (
            <i className={`${iconName} bg-transparent text-xl mr-2`}></i>
          )}
          {text}
        </span>
      </button>
    </>
  );
};

export default Button;
