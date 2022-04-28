import { useHistory } from "react-router-dom";
import { useEffect } from "react";
function ScrollToTop() {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      if (action !== "POP") {
        window.scrollTo(0, 0);
      }
    });
    return () => unlisten();
  }, []);
  return null;
}
export default ScrollToTop;
