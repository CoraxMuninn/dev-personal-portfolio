export default function Button({
  className = "",
  size = "default",
  children,
  ...props
}) {
  const baseClasses =
    "relative rounded-full overflow-hidden font-medium focus-visible:ring-primary transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

  const sizeClasses = {
    sm: "px-2 py-2 text-sm",
    default: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}
