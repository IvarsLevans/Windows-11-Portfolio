import {
    BraveIcon,
    GitHubIcon,
    MoviesIcon,
    MSEdgeIcon,
    MSPPTIcon,
    MSTeamsIcon,
    MSWordIcon,
    PhotoShopIcon,
    PhotosIcon,
    TwitterIcon,
    MSExcelIcon,
    MSGrooveIcon,
    MSStoreIcon,
    VSCodeIcon,
    YourHelpIcon,
    WeatherIcon,
    WhiteBoardIcon,
    SolitareIcon,
} from "../assets/icons/startmenu"

export type PinnedApp = {
    appId?: string
    title: string;
    icon: string;
    action?: () => void;
    isLink?: boolean;
    url?: string;
    pinned?: boolean
}
export const PinnedApps: PinnedApp[] = [{
    title: "GitHub",
    icon: GitHubIcon,
    isLink: true,
    url: "https://github.com/IvarsLevans"
}, {
    title: "Twitter",
    icon: TwitterIcon,
    isLink: true,
    url: "https://twitter.com/ivarslevans"
}, {
    title: "Edge",
    icon: MSEdgeIcon
}, {
    title: "Word",
    icon: MSWordIcon
}, {
    title: "Photos",
    icon: PhotosIcon
}, {
    title: "PowerPoint",
    icon: MSPPTIcon
}, {
    title: "PhotoShop",
    icon: PhotoShopIcon
}, {
    title: "Movies & TV",
    icon: MoviesIcon
}, {
    title: "Brave",
    icon: BraveIcon
}, {
    title: "Teams",
    icon: MSTeamsIcon
}, {
    title: "VSCode",
    icon: VSCodeIcon,
    appId: "vscode"
}, {
    title: "Music",
    icon: MSGrooveIcon
}, {
    title: "Excel",
    icon: MSExcelIcon
}, {
    title: "Your Phone",
    icon: YourHelpIcon
}, {
    title: "Weather",
    icon: WeatherIcon
}, {
    title: "Whiteboard",
    icon: WhiteBoardIcon
}, {
    title: "Solitare",
    icon: SolitareIcon
}]

export const Apps = PinnedApps.reduce((acc, app) => {
    return !app.appId && {
        ...acc,
        [app.appId || app.title]: {
            ...app
        }
    }
}, {})