

import { LitElement, html, customElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { Base } from '@spectrum/base/sp-base';

@customElement('sp-textfield')
export class TextField extends Base {
    @property({ type: String }) type = '';
    @property({ type: String }) label = '';

    @property({ type: String }) placeholder = '';
    @property({ type: String }) value = '';  
    @property({ type: String }) name = '';  
    @property({ type: Boolean }) quiet = false;
    @property({ type: Boolean }) valid = false;
    @property({ type: Boolean }) invalid = false;
    @property({ type: Boolean }) disabled = false;
    @property({ type: String }) labelposition = 'top';
    @property({ type: String }) width = null;

    protected render() {
        const inputClasses = {
            'spectrum-Textfield--quiet': this.quiet,
            'is-valid': this.valid,
            'is-invalid': this.invalid,
        };

        const labelClasses = {
            'spectrum-FieldLabel--left': (this.labelposition === 'left'),
        };

        return html`
            ${this.label !== '' ? html`<label class="spectrum-FieldLabel ${classMap(labelClasses)}">${this.label}</label>` : ''}
            <input
                type="${this.type}"
                placeholder="${this.placeholder}"
                .value="${this.value}"
                name="${this.name}"
                @input="${this.handleChange}"
                class="spectrum-Textfield ${classMap(inputClasses)}"
                style="width: 100%;"
                ?disabled="${this.disabled}"
            >`;
    }

    protected handleChange(e: any) {
        this.value = e.target.value;

        const changedEvent = new CustomEvent('valuechanged', {
            detail: { value: this.value },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(changedEvent);
    }

    protected updated(changedProperties: PropertyValues) {

    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sp-textfield': TextField;
    }
}
