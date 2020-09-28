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
import { DemoTextfield } from './demo-textfield.component';

import '@spectrum/sp-textfield';
import '@spectrum/sp-container';


export default function template(this: DemoTextfield) {
  return html`
  <sp-container>
  <sp-rule medium label="Standard"></sp-rule>
  <sp-demo width="300">
<pre><sp-textfield placeholder="Place Holder"></sp-textfield></pre>
  </sp-demo>
  <sp-demo width="300">
<pre><sp-textfield placeholder="Valid input" valid></sp-textfield></pre>
  </sp-demo>
  <sp-demo width="300">
<pre><sp-textfield placeholder="Invalid input" invalid></sp-textfield></pre>
  </sp-demo>
  <sp-demo width="300">
<pre><sp-textfield placeholder="Place Holder" disabled></sp-textfield></pre>
  </sp-demo>
  <sp-demo width="300">
<pre><sp-textfield placeholder="Valid input" valid disabled></sp-textfield></pre>
  </sp-demo>
  <sp-demo width="300">
<pre><sp-textfield placeholder="Invalid input" invalid disabled></sp-textfield></pre>
  </sp-demo>
  <sp-rule medium label="Quiet"></sp-rule>
  <sp-demo width="300">
<pre><sp-textfield quiet placeholder="Place Holder"></sp-textfield></pre>
  </sp-demo>
  <sp-demo width="300">
<pre><sp-textfield quiet placeholder="Valid input" valid></sp-textfield></pre>
  </sp-demo>
  <sp-demo width="300">
<pre><sp-textfield quiet placeholder="Invalid input" invalid></sp-textfield></pre>
  </sp-demo>
  <sp-demo width="300">
<pre><sp-textfield quiet placeholder="Place Holder" disabled></sp-textfield></pre>
  </sp-demo>
  <sp-demo width="300">
<pre><sp-textfield quiet placeholder="Valid input" valid disabled></sp-textfield></pre>
  </sp-demo>
  <sp-demo width="300">
<pre><sp-textfield quiet placeholder="Invalid input" invalid disabled></sp-textfield></pre>
  </sp-demo>
  </sp-container>
  `;
}
