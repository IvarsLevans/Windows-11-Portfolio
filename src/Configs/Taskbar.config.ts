import taskmanager from '../assets/icons/taskbar/taskmanager.png'

export interface icon {
  name: string
  url: string
  action?: () => any
}
export const ICONS: icon[] = [{
  name: "Task Manager",
  url: taskmanager
}]