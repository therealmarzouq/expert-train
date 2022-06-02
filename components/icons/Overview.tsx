const Overview = ({ ...props }) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.778 1H1v7.778h7.778V1zM21 1h-7.778v7.778H21V1zM21 13.222h-7.778V21H21v-7.778zM8.778 13.222H1V21h7.778v-7.778z"
        stroke="#A2A4B9"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Overview
