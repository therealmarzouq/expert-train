const Document = ({ ...props }) => {
  return (
    <svg
      width={20}
      height={26}
      viewBox="0 0 20 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M0 0v26h20V6.594l-.28-.313-6-6-.314-.28H0V0zm2 2h10v6h6v16H2V2zm12 1.438L16.563 6H14V3.437v.001zM5 10v2h10v-2H5zm0 4v2h10v-2H5zm0 4v2h10v-2H5z"
        fill="#A2A4B9"
      />
    </svg>
  );
};

export default Document;
