import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false once the window has fully loaded
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {loading && (
        <div className="preloader-wrapper">
          {/* Preloader design */}
          <div className="preloader"></div>
        </div>
      )}
    </>
  );
};

export default Preloader;
