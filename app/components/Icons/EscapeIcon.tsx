import React from "react";

function EscapeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={props.className}
      width="29"
      height="20"
      viewBox="0 0 29 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="29" height="20" rx="4" fill="#C4C4C4" />
      <text
        fill="black"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Source Sans Pro"
        fontSize="12"
        fontWeight="500"
        letterSpacing="0em">
        <tspan x="6" y="12.766">
          esc
        </tspan>
      </text>
    </svg>
  );
}

export default EscapeIcon;
