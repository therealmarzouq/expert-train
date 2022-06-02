const LogOut = ({ ...props }) => {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M6.75 15.75h-3a1.5 1.5 0 01-1.5-1.5V3.75a1.5 1.5 0 011.5-1.5h3M12 12.75L15.75 9 12 5.25M15.75 9h-9"
        stroke="#A2A4B9"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path stroke="#fff" d="M0.5 0.5H17.5V17.5H0.5z" />
    </svg>
  );
};

export default LogOut;
