import { ReactElement } from "react";

import './CustomLink.scss';

type CustomLinkProps = {
  icon: ReactElement;
  url: string;
};

const CustomLink = ({ icon, url }: CustomLinkProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
};

export default CustomLink;
