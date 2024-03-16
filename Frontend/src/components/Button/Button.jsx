const Button = ({ text, bg, className, onClickFunction, iconName, type }) => {
  return (
    <>
      <button
        type={type ? type : undefined}
        onClick={onClickFunction}
        className={`my-1 ${className}`}
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
