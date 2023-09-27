"use client";
import { useEffect } from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMessage = () => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "1711829182636666",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v12.0",
      });
    };
  }, []);
  return (
    <div>
      <FacebookProvider appId="1711829182636666" chatSupport>
        <CustomChat pageId="132736456589410" minimized={true} />
      </FacebookProvider>
    </div>
  );
};

export default FacebookMessage;
