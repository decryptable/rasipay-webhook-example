import Link from "next/link";
import { Button } from "./ui/button";

export function DeployButton() {
  return (
    <Link
      href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdecryptable%2Frasipay-webhook-example&env=BOT_TOKEN,TELEGRAM_CHAT_IDS,APP_NAME&project-name=rasipay-webhook&repository-name=rasipay-webhook&demo-title=RasiPay%20Webhook&demo-description=Implementasi%20webhook%20untuk%20bot%20Telegram%20%40RasiPayBot&demo-url=https%3A%2F%2Frasipay-webhook-example.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transform transition-transform hover:scale-105"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="50"
        fill="none"
        className="transition-all"
        viewBox="0 0 140 32"
      >
        <rect
          width="140"
          height="32"
          fill="var(--vercel-bg, #1A1A1A)"
          rx="6"
          className="dark:fill-white dark:fill-opacity-[0.05]"
        />
        <rect
          width="139"
          height="31"
          x=".5"
          y=".5"
          stroke="var(--vercel-stroke, #fff)"
          strokeOpacity=".14"
          rx="5.5"
        />
        <g clipPath="url(#a)">
          <path
            fill="var(--vercel-logo, #EDEDED)"
            fillRule="evenodd"
            d="m16 10.75 6 10.5H10l6-10.5Z"
            clipRule="evenodd"
            className="dark:fill-white"
          />
        </g>
        <path
          stroke="var(--vercel-stroke, #fff)"
          strokeOpacity=".14"
          d="M31.5 1v30"
        />
        <text
          x="40"
          y="20"
          fill="var(--vercel-text, #EDEDED)"
          fontFamily="Arial, sans-serif"
          fontSize="12"
          fontWeight="bold"
          className="dark:fill-white"
        >
          Deploy ke Vercel
        </text>
        <defs>
          <clipPath id="a">
            <path
              fill="#fff"
              d="M0 0h12v12H0z"
              fillOpacity="1"
              transform="translate(10 10)"
            />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
}
