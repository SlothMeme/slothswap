import { Language } from "../LangSelector/types";
import { TwitterIcon, TelegramIcon } from "../Svg";

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/SlothMeme_BSC",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    href: "https://t.me/Slothmeme",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
