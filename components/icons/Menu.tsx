const Menu = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      width={24}
      fill="none"
      viewBox="0 0 24 24"
      stroke="#42474a"
      strokeWidth={2}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  )
}

export default Menu
