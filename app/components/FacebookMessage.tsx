"use client";
import { useEffect } from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMessage = () => {
  const applyCustomStylesToMessenger = () => {
    const messengerIframe = document.querySelector(
      ".fb_customer_chat_bounce_in_v2_no_badge .fb_dialog_content iframe"
    ) as HTMLElement;

    if (messengerIframe) {
      messengerIframe.style.backgroundColor = "transparent";
      messengerIframe.style.border = "none";
    }
  };
  useEffect(() => {
    // Load the Messenger plugin after other content has loaded
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "1711829182636666",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v12.0",
      });

      // Apply custom styles initially
      applyCustomStylesToMessenger();

      // Apply custom styles every 5 seconds (adjust the interval as needed)
      setInterval(() => {
        applyCustomStylesToMessenger();
      }, 5000);
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
