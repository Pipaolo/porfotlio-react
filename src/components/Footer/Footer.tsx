import React from "react";
import "./Footer.css";
interface IProps {
  id: string;
}

export default function Footer({ id }: IProps) {
  return (
    <div id={id} className="footer">
      ©<span>&nbsp;Paolo Matthew Tolentino</span>
    </div>
  );
}
