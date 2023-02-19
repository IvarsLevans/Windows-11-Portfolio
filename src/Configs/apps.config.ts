import file_explorer from '../assets/icons/taskbar/file_explorer.webp'
import { MSWordIcon, MSExcelIcon, MSPPTIcon, BraveIcon, SettingsIcon, VSCodeIcon } from '../assets/icons/startmenu'
import { RecycleBin } from '../assets/icons/Desktop'
import { Apps } from './startMenu.config'
import { VsCodeApp } from '../Apps'

import {
    MSGrooveIcon,
    WeatherIcon,
    WhiteBoardIcon,
    SolitareIcon,
    MSTeamsIcon,
} from "../assets/icons/startmenu"

export type App = {
    [key: string]: {
        title: string;
        isActive: boolean;
        icon: string
        pinned?: boolean,
        Component?: any,
        height?: number,
        width?: number
    }
}

export const AppsConfig: App = {
    "file-explorer": {
        title: "File Explorer",
        isActive: false,
        icon: file_explorer,
        pinned: true
    },

    "Word": {
        title: "Word",
        isActive: false,
        icon: MSWordIcon,
        pinned: true
    },
    "Excel": {
        title: "Excel",
        isActive: false,
        icon: MSExcelIcon,
        pinned: true
    },
    "PowerPoint": {
        title: "PowerPoint",
        isActive: false,
        icon: MSPPTIcon,
        pinned: true
    },
    "Brave": {
        title: "Brave",
        isActive: false,
        icon: BraveIcon,
        pinned: true
    },
    "recycle-bin": {
        title: "Recycle Bin",
        isActive: false,
        icon: RecycleBin
    },
    "settings": {
        title: "Settings",
        isActive: false,
        icon: SettingsIcon
    },
    "vscode": {
        title: "Visual Studio Code",
        isActive: false,
        icon: VSCodeIcon,
        Component: VsCodeApp,
        height: 500,
        width: 800
    },
    "MSGroove": {
        title: "MSGroove",
        isActive: false,
        icon: MSGrooveIcon
    },
    "Weather": {
        title: "Weather",
        isActive: false,
        icon: WeatherIcon
    },
    "Music": {
        title: "MSGroove",
        isActive: false,
        icon: MSGrooveIcon
    },
    "WhiteBoard": {
        title: "WhiteBoard",
        isActive: false,
        icon: WhiteBoardIcon
    },
    "Solitare": {
        title: "Solitare",
        isActive: false,
        icon: SolitareIcon
    },
    "MSTeams": {
        title: "MSTeams",
        isActive: false,
        icon: MSTeamsIcon
    },
    ...Apps,
} as const