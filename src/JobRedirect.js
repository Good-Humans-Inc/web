import { useEffect } from "react";

const JobRedirect = ({ url }) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return null;
};

export default JobRedirect;
