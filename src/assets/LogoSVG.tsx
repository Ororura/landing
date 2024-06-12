import { CSSProperties, FC } from "react";

interface Props {
  style?: CSSProperties;
}

const LogoSVG: FC<Props> = ({ style }) => {
  return (
    <svg
      style={style}
      fill="#D9D9D9"
      height="27px"
      width="27px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g>
        <g>
          <path
            d="M178.087,144.696c-18.412,0-33.391,14.979-33.391,33.391c0,18.412,14.979,33.391,33.391,33.391
			c18.412,0,33.391-14.979,33.391-33.391C211.478,159.675,196.499,144.696,178.087,144.696z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M333.913,144.696c-18.412,0-33.391,14.979-33.391,33.391c0,18.412,14.979,33.391,33.391,33.391
			c18.412,0,33.391-14.979,33.391-33.391C367.304,159.675,352.325,144.696,333.913,144.696z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M256,0C114.842,0,0,114.842,0,256s114.842,256,256,256s256-114.842,256-256S397.158,0,256,0z M256,478.609
			c-122.746,0-222.609-99.862-222.609-222.609S133.254,33.391,256,33.391S478.609,133.254,478.609,256S378.746,478.609,256,478.609z
			"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M395.13,239.304c-9.22,0-16.696,7.475-16.696,16.696c0,67.511-54.924,122.435-122.435,122.435
			c-67.51,0-122.435-54.924-122.435-122.435c0-9.22-7.475-16.696-16.696-16.696S100.174,246.78,100.174,256
			c0,85.923,69.904,155.826,155.826,155.826S411.826,341.922,411.826,256C411.826,246.78,404.351,239.304,395.13,239.304z"
          />
        </g>
      </g>
    </svg>
  );
};

export { LogoSVG };