import "./button.css";

export const Button = ({ text, onClick, href, variant = "default", className = "" }) => {
  const classes = `btn btn--${variant} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {text}
    </button>
  );
};
