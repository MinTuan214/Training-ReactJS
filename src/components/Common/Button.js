function Button({ className, iconClass, onClick, loadingData, btnName }) {
  return (
    <div className="btn">
      <button className={`${className}`} onClick={onClick}>
        {loadingData && <i className={`${iconClass}`}></i>} {btnName}
      </button>
    </div>
  );
}

export default Button;
