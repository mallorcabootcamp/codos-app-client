import { FunctionComponent, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

export const ScrollToTop: FunctionComponent<Props> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};
