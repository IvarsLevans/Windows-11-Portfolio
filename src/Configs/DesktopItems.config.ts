import { RecycleBin } from "../assets/icons/Desktop";
import { VSCodeIcon } from "../assets/icons/startmenu";

export interface Item {
    name: string;
    action?: () => void
    icon: string;
    appId: string;
    context_menu_id?: string
}
export const DesktopItems: Item[] = [{
    name: "Recycle Bin",
    icon: RecycleBin,
    appId: "recycle-bin",
    context_menu_id: "recycle-bin-ctx-menu"
}, {
    name: "VSCode",
    icon: VSCodeIcon,
    appId: "vscode",
}]