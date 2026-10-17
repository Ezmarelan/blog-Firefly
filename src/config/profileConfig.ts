import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
    avatar: "assets/images/avatar.avif",
    name: "Ezmarelan",
    bio: "写字，也做点东西。",
    links: [
        { name: "GitHub", icon: "fa7-brands:github", url: "https://github.com/Ezmarelan", showName: false },
        { name: "Email", icon: "fa7-solid:envelope", url: "mailto:w2416712810@gmail.com", showName: false },
        { name: "对话台", icon: "material-symbols:chat-rounded", url: "https://chat.lysoda.top/", showName: false },
        { name: "RSS", icon: "fa7-solid:rss", url: "/rss/", showName: false },
    ],
};
