import { useNavigate } from "react-router-dom";

const useNavigateWithScroll = () => {
  const navigate = useNavigate();

  return (path, options) => {
    navigate(path, options);
    window.scrollTo(0, 0); // Scroll to top after navigating
  };
};

export default useNavigateWithScroll;
