/**
    @license
    Copyright 2020 EMEXAL All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { Textfield } from './textfield.component';

export default function template(this: Textfield) {

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
