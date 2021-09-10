import React from "react";
import { Link } from "react-router-dom";

const Logo = (props) => (
  <Link {...props} to="/">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="310"
      viewBox="0 0 310 55"
      role="img"
      aria-labelledby="logosvgheader"
    >
      <title id="logosvgheader">Rooms To Go</title>
      <path
        fill="#0355a0"
        d="M15.5 4.3h279c8.6 0 15.5 6.9 15.5 15.5v15.5c0 8.6-6.9 15.5-15.5 15.5h-279C6.9 50.8 0 43.9 0 35.3V19.8C0 11.2 6.9 4.3 15.5 4.3z"
      ></path>
      <path
        fill="#fff"
        d="M206 26.8c0 8.9-7.1 16-15.7 16s-15.7-7.1-15.7-16 7.1-16 15.7-16S206 18 206 26.8"
      ></path>
      <path
        fill="#ee3c44"
        d="M203 27c0 7.3-5.7 13.3-12.7 13.3s-12.7-5.9-12.7-13.3 5.7-13.3 12.7-13.3S203 19.7 203 27"
      ></path>
      <path
        fill="#fff"
        d="M285.2 10.8V46l17.7-17.9c0 .1-17.7-17.3-17.7-17.3zm-120.5 31v-27H158v-2.5h15.7v2.5h-6.3v27h-2.7zm-65 .3l.1-29.8h4.1l10.5 25.1 10.7-25.1h4.1v29.8h-2.7V15.8L115.7 42h-2.6l-10.7-26.7V42l-2.7.1zm-87.4.1V12.3h11s2.1.2 2.7.6c2.2.9 5.5 4.7 5.7 8.9.3 7.4-8.4 9.3-8.4 9.3L31 42.2l-2.9.1L18.6 29s4.5-.3 5.2-.5c.7-.3 5.1-1.8 5.4-6.5.2-4.7-4-7.1-5.9-7.1-1.8-.1-8.2 0-8.2 0v27.5l-2.8-.2zm51.2-14.9c0 8.9-7.1 16-15.7 16S32 36.2 32 27.3s7.1-16 15.7-16 15.8 7.1 15.8 16"
      ></path>
      <path
        fill="#ffd147"
        d="M60.5 27.6c0 7.3-5.7 13.3-12.7 13.3S35.1 35 35.1 27.6s5.7-13.3 12.7-13.3 12.7 5.9 12.7 13.3"
      ></path>
      <path
        fill="#fff"
        d="M96.5 27.3c0 8.9-6.9 16-15.5 16s-15.5-7.1-15.5-16 6.9-16 15.5-16 15.5 7.1 15.5 16"
      ></path>
      <path
        fill="#ffd147"
        d="M94 27.6c0 7.3-5.7 13.3-12.7 13.3-7 0-12.7-5.9-12.7-13.3s5.7-13.3 12.7-13.3S94 20.2 94 27.6"
      ></path>
      <path
        fill="#fff"
        d="M280.5 27.3c0 8.9-6.9 16-15.5 16s-15.5-7.1-15.5-16 6.9-16 15.5-16 15.5 7.1 15.5 16"
      ></path>
      <path
        fill="#00ab67"
        d="M278 27.3c0 7.5-5.8 13.5-13 13.5s-13-6-13-13.5 5.8-13.5 13-13.5 13 6 13 13.5"
      ></path>
      <path
        fill="#fff"
        d="M246.5 26.8c0 8.5-6.9 15.5-15.5 15.5s-15.5-6.9-15.5-15.5 6.9-15.5 15.5-15.5 15.5 6.9 15.5 15.5"
      ></path>
      <path
        fill="#0355a0"
        d="M243.5 26.8c0 7.2-5.7 13-12.7 13S218 34 218 26.8s5.7-13 12.7-13 12.8 5.8 12.8 13"
      ></path>
      <path fill="#0355a0" d="M234 20.8h12.5v8H234v-8z"></path>
      <path
        fill="#fff"
        d="M226.5 28.8h19v2.5h-19v-2.5zm-91.4 5h-2.8c0 .7 0 1.4.1 2.1.3 1.2.9 2.3 1.6 3.3.7.9 2.1 2.1 4.5 2.9 1.6.5 3.3.5 4.9 0 1.1-.4 3.5-1.4 4.3-2.6.9-1.2 1.2-1.4 1.6-3.5s-.2-4.8-.2-4.8c-.8-1.8-2.1-3.3-3.7-4.5-1-.7-2.1-1.1-3.3-1.4-1.3-.3-2.7-.8-3.9-1.4-2.3-1.3-2.1-2-2.3-2.6-.1-.5-.2-2.6 0-3.2.5-1.3 1.5-2.3 2.8-2.7 1.5-.5 3.1-.5 4.5 0 .9.4 1.6 1 2.2 2.2.4.7.5 1.6.5 2.5h2.7c.1-1.1-.1-2.3-.7-3.3-.7-1.4-1.7-2.5-3-3.4-1.5-.9-3.2-1.3-4.9-1.1-2.4.1-4.5 1.4-5.9 3.3-1.6 2.3-1.3 4.3-1.2 6.2.1.5.2 1.1.5 1.6.1.4.4.8 1.9 1.9 2.5 1.9 4.5 2.1 6.5 2.8 2.1.7 3.5 1.4 4.4 3.1.9 1.7.3 3.5 0 4.5s-1.5 2.9-2.9 3.3c-1.6.3-3.2.3-4.8 0-.7-.3-1.9-.6-2.7-2-.5-.9-.7-2.1-.7-3.2z"
      ></path>
    </svg>
  </Link>
);

export default Logo;
