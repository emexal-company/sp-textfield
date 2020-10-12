import { Base } from '@spectrum/sp-base';
export declare class Textfield extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    type: string;
    label: string;
    placeholder: string;
    value: string;
    name: string;
    quiet: boolean;
    valid: boolean;
    invalid: boolean;
    disabled: boolean;
    labelposition: string;
    width: any;
    protected handleChange(e: any): void;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-textfield': Textfield;
    }
}
