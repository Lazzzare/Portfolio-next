// import React from "react";

// const FullScreenExample = () => {
//   const handleFullScreenClick = () => {
//     const element = document.documentElement;

//     // Check if the browser supports the Fullscreen API
//     if (document.fullscreenEnabled) {
//       element.requestFullscreen().catch((err) => {
//         console.error("Error attempting to enable full screen:", err);
//       });
//     } else {
//       console.error("Fullscreen is not supported by this browser.");
//     }
//   };

//   return <div></div>;
// };

// export default FullScreenExample;
"use client";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMessage = () => {
  return (
    <FacebookProvider appId="1711829182636666" chatSupport>
      <CustomChat pageId="132736456589410" minimized={true} />
    </FacebookProvider>
  );
};

export default FacebookMessage;
