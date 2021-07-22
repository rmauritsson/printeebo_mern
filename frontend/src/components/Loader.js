import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <Loader
      type="ThreeDots"
      color="#0000ff"
      height={100}
      width={100}
      //timeout={30000} //3 secs
    />
  );
};
export default LoadingSpinner;
