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
