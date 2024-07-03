function Button({ children, variant = 'primary', ...props }) {
  if (variant === 'primary') {
    return (
      <button
        className="py-[0.8rem] font-primary px-[1.6rem] rounded-full border-none text-[1rem] bg-gradient-to-r from-[#6a7d27] to-[#a2c81b] font-semibold text-white"
        {...props}
      >
        {children}
      </button>
    );
  }

  if (variant === 'secondary') {
    return (
      <button
        className="py-[0.8rem] font-primary px-[1.6rem] rounded-full border-none text-[1rem] bg-white font-semibold text-[#a0c717]"
        {...props}
      >
        {children}
      </button>
    );
  }
  if (variant === 'tertiary') {
    return (
      <button
        className="py-[0.8rem] font-primary px-[1.6rem] rounded border-none text-[1rem] font-semibold bg-clr-danger text-white"
        {...props}
      >
        {children}
      </button>
    );
  }
  if (variant === 'play') {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="h-20 w-20 bg-white rounded-full flex justify-center items-center animate-pulse">
          <svg
            width="3em"
            height="3em"
            viewBox="0 0 16 16"
            className="bi bi-play-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
        </div>
      </div>
    );
  }
}

export default Button;
