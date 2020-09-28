import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import textfieldStyles from './textfield.styles';
import template from './textfield.template';
let Textfield = class Textfield extends Base {
    constructor() {
        super(...arguments);
        this.type = '';
        this.label = '';
        this.placeholder = '';
        this.value = '';
        this.name = '';
        this.quiet = false;
        this.valid = false;
        this.invalid = false;
        this.disabled = false;
        this.labelposition = 'top';
        this.width = null;
    }
    handleChange(e) {
        this.value = e.target.value;
        const changedEvent = new CustomEvent('valuechanged', {
            detail: { value: this.value },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(changedEvent);
    }
    render() {
        return template.call(this);
    }
};
Textfield.componentStyles = [textfieldStyles];
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Textfield.prototype, "type", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Textfield.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Textfield.prototype, "placeholder", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Textfield.prototype, "value", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Textfield.prototype, "name", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Textfield.prototype, "quiet", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Textfield.prototype, "valid", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Textfield.prototype, "invalid", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Textfield.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Textfield.prototype, "labelposition", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Textfield.prototype, "width", void 0);
Textfield = __decorate([
    customElement('sp-textfield')
], Textfield);
export { Textfield };
//# sourceMappingURL=textfield.component.js.map