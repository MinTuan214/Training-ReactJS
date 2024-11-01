
function InputField({
  classBlock,
  className,
  id,
  iconClass,
  type,
  value,
  placeholder,
  onChange,
  showEyeIcon = false,
}) {
  return (
    <div className={`form-control ${classBlock}`}>
      <label htmlFor={`${id}`}>
        <i className={`fa-solid ${iconClass}`}></i>
      </label>
      <input
        type={`${type}`}
        id={`${id}`}
        className={`text-control ${className}`}
        placeholder={`${placeholder}`}
        value={value}
        onChange={onChange}
      />
      {showEyeIcon && (
        <p className="eye">
          <i className="fa-solid fa-eye-slash"></i>
        </p>
      )}
    </div>
  );
}

export default InputField;
