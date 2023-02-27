import { useState } from "react";

export const FALLBACK_AVATAR_ALT_TEXT = "a beautiful cat";
export const FALLBACK_AVATAR_URL = "https://cataas.com/cat/says/hello%20world!";

type AvatarProps = {
  /** the url of an image to render for the Avatar. **/
  url?: string;
  /** the alt text to use for the url image. **/
  alt?: string;
};

const Avatar = ({
  url = FALLBACK_AVATAR_URL,
  alt = FALLBACK_AVATAR_ALT_TEXT,
}: AvatarProps) => {
  const [srcToRender, setSrcToRender] = useState(url);
  return (
    <img
      src={srcToRender}
      alt={alt}
      onError={() => setSrcToRender(FALLBACK_AVATAR_URL)}
    />
  );
};

export default Avatar;
