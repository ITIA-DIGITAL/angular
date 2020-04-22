import { NotificationIcon, NotificationType } from '../enums';
import { IData } from '../../@connect/models';

export interface Notification extends IData {
    type: NotificationType;
    icon: NotificationIcon;
    code: number | string;
    message: string;
    raw: any;
}
