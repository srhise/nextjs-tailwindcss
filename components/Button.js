import PropTypes from "prop-types";

import classnames from "classnames";

// To use with an Icon pass icon prop
// icon={{
//     position: "left" || "right",
//     render: <SVG/>
// }}

const Button = props => {
  const {
    size,
    color,
    text,
    type,
    outline,
    disabled,
    loading,
    icon,
    className
  } = props;

  const onClick = () => {
    const { onClick, data } = props;

    if (data) {
      onClick(data);
    } else if (!onClick) {
      return;
    } else {
      onClick();
    }
  };

  const classes = classnames(
    `button w-full h-10 focus:outline-none outline-none select-none ${className}`,
    {
      "bg-transparent border-2": outline,
      ["text-" + color]: outline,
      ["border-" + color]: outline,
      ["hover:text-" + color + "-darker"]: outline,
      ["hover:border-" + color + "-darker"]: outline,
      ["bg-" + color]: !outline,
      "text-white": !outline,
      ["hover:bg-" + color + "-darker"]: !outline,
      "h-12": size === "lg",
      "h-8": size === "sm"
    }
  );

  const spinnerClass = classnames("spinner", { active: loading });
  const textClass = classnames("buttonTxt", { hide: loading });

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
    >
      <div className={spinnerClass} />

      {!loading && icon && icon.position === "left" && icon.render}
      <span className={textClass} style={{ paddingTop: "3px" }}>
        {text}
      </span>
      {!loading && icon && icon.position === "right" && icon.render}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  margin: PropTypes.string,
  style: PropTypes.object,
  fullwidth: PropTypes.bool,
  outline: PropTypes.bool,
  onClick: PropTypes.func
};
