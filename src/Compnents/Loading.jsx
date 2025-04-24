// LoadingSpinner.js
import { ClipLoader } from "react-spinners";

const LoadingSpinner = () => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
    <ClipLoader size={50} color="#3498db" />
  </div>
);

export default LoadingSpinner;
