import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
export default function template() {
    const inputClasses = {
        'spectrum-Textfield--quiet': this.quiet,
        'is-valid': this.valid,
        'is-invalid': this.invalid,
    };
    const labelClasses = {
        'spectrum-FieldLabel--left': (this.labelposition === 'left'),
    };
    return html `
        ${this.label !== '' ? html `<label class="spectrum-FieldLabel ${classMap(labelClasses)}">${this.label}</label>` : ''}
        <input
        style="width: ${this.width};"
        type="${this.type}"
        placeholder="${this.placeholder}"
        .value="${this.value}"
        name="${this.name}"
        @input="${this.handleChange}"
        class="spectrum-Textfield ${classMap(inputClasses)}"
        ?disabled="${this.disabled}"
        >
        `;
}
//# sourceMappingURL=textfield.template.js.map