import {
    MSWordIcon, 
    MSExcelIcon, 
    MSPPTIcon, 
    BraveIcon, 
    SettingsIcon, 
    VSCodeIcon,
    GitHubIcon,
    TwitterIcon,
    MSGrooveIcon,
    WeatherIcon,
    WhiteBoardIcon,
    SolitareIcon,
    MSTeamsIcon,
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
    title: "Word",
    icon: MSWordIcon
}, {
    title: "PowerPoint",
    icon: MSPPTIcon
}, {
    title: "Excel",
    icon: MSExcelIcon
}, {
    title: "Brave",
    icon: BraveIcon
}, {
    title: "Music",
    icon: MSGrooveIcon
}, {
    title: "Weather",
    icon: WeatherIcon
}, {
    title: "WhiteBoard",
    icon: WhiteBoardIcon
}, {
    title: "Solitare",
    icon: SolitareIcon
}, {
    title: "MSTeams",
    icon: MSTeamsIcon
}, {
    title: "VSCode",
    icon: VSCodeIcon,
    appId: "vscode"
}]

export const Apps = PinnedApps.reduce((acc, app) => {
    return !app.appId && {
        ...acc,
        [app.appId || app.title]: {
            ...app
        }
    }
}, {})