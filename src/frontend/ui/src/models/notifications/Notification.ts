import { NotificationType } from "./NotificationType";

export interface Notification {
    id: string,
    text: string,
    type: NotificationType,
    timeout?: number
}
