import file_explorer from '../assets/icons/taskbar/file_explorer.webp'
import { MSWordIcon, MSExcelIcon, MSPPTIcon, BraveIcon, SettingsIcon, VSCodeIcon } from '../assets/icons/startmenu'
import { ControlPanel, RecycleBin, ThisPC } from '../assets/icons/Desktop'
import { Apps } from './startMenu.config'
import { VsCodeApp } from '../Apps'

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

    MSWord: {
        title: "Word",
        isActive: false,
        icon: MSWordIcon,
        pinned: true
    },
    MSExcel: {
        title: "Excel",
        isActive: false,
        icon: MSExcelIcon,
        pinned: true
    },
    MSPowerPoint: {
        title: "PowerPoint",
        isActive: false,
        icon: MSPPTIcon,
        pinned: true
    },
    Brave: {
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
    "control-panel": {
        title: "Control Panel",
        isActive: false,
        icon: ControlPanel
    },
    "this-pc": {
        title: "This PC",
        isActive: false,
        icon: ThisPC
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
    ...Apps,
} as const