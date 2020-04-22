import { NotificationIcon, NotificationType } from '../enums';
import { Notification } from './notification.model';

export interface NotificationError extends Notification {
    type: NotificationType;
    icon: NotificationIcon;
    code: number | string;
    message: string;
    trace: string;
}
