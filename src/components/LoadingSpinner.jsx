const LoadingSpinner = ({
  size = "w-12 h-12",
  color = "border-t-blue-500",
}) => {
  return (
    <div className={`flex justify-center items-center min-h-screen`}>
      <div
        className={`border-4 border-solid border-gray-300 rounded-full ${size} ${color} animate-spin`}
        style={{
          borderTopColor: color.includes("border-t-")
            ? color.split("-")[2]
            : "transparent",
        }}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
