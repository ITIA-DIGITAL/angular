import { NotificationIcon, NotificationType } from '../enums';
import { IData } from '../../@connect/models';

export interface Notification extends IData {
    /**
     * Notification classification
     */
    type: NotificationType;
    /**
     * Icon value to be displayed
     */
    icon: NotificationIcon;
    /**
     * HTTP code or any
     */
    code: number | string;
    /**
     * To show to user
     */
    message: string;
    /**
     * Milliseconds duration
     */
    durationMs?: number;
    /**
     * Snack bar action
     */
    action?: string;
    /**
     * Usually for server raw response
     */
    raw?: any;
}
