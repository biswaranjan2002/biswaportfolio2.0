import React from "react";

const Page9 = () => {
  return (
    <div className="relative h-[200vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="fixed top-0 left-0 w-full h-[50vw] bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('./images/astro6.jpg')", // Background image yahan daalein
        }}
      ></div>

      {/* Foreground Image or Content */}
      <div className="relative h-screen flex items-center justify-center">
        <img
          src="https://static.wixstatic.com/media/f1c650_360814da288f418991547fa9d5e08904~mv2.png/v1/fill/w_1899,h_1461,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/Subtract.png" // Foreground image ka path yahan daalein
          alt="Foreground"
          className="h-[80vw] mt-[25vw] object-cover"
        />
      </div>
    </div>
  );
};

export default Page9;
