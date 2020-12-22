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

import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import textfieldStyles from './textfield.styles';
import template from './textfield.template';

@customElement('sp-textfield')
export class Textfield extends Base {
  public static componentStyles = [textfieldStyles];

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

  protected handleChange(e: any) {
    this.value = e.target.value;

    const changedEvent = new CustomEvent('valuechanged', {
        detail: { value: this.value },
        bubbles: true,
        composed: true
    });
    this.dispatchEvent(changedEvent);
}

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-textfield': Textfield;
  }
}
