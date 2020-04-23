export type ControlType =
    | 'checkbox-list'
    | 'autocompletes'
    | 'autocomplete'
    | 'date-input'
    | 'file-input'
    | 'checkbox'
    | 'textarea'
    | 'divider'
    | 'select'
    | 'input'
    | 'email'
    | 'url';

export interface IControlOptions {
    value: string | any;
    text: string;
}
