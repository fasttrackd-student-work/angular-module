import { FormControl } from '@angular/forms'

export class PhoneFormControl extends FormControl {
    override setValue(value: string, options?: { onlySelf?: boolean | undefined; emitEvent?: boolean | undefined; emitModelToViewChange?: boolean | undefined; emitViewToModelChange?: boolean | undefined } | undefined): void {
        if (!value) {
            return super.setValue('', { ...options, emitModelToViewChange: true })
        }

        const latestLetter = value.charAt(value.length - 1)
        switch (true) {
            case (value.length === 1 && this.value.length === 2):
                return super.setValue('', { ...options, emitModelToViewChange: true })
            case (!value.match(/^(?=.*[0-9])[-()0-9]+$/) || value.length > 13):
                return super.setValue(this.value, { ...options, emitModelToViewChange: true })
            case (value.length === 4 && this.value.length === 5):
                return super.setValue(value.slice(0, 3), { ...options, emitModelToViewChange: true })
            case (value.length === 8 && this.value.length === 9):
                return super.setValue(value.slice(0, 7), { ...options, emitModelToViewChange: true })
            case ((value.length === 5 && this.value.length === 6)):
            case (value.length === 9 && this.value.length === 10):
                return super.setValue(value, { ...options, emitModelToViewChange: true })
            case (value.length === 1 && this.value.length === 0):
                return super.setValue('(' + value, { ...options, emitModelToViewChange: true })
            case (value.length === 4 && this.value.length === 3):
                return super.setValue(value + ')', { ...options, emitModelToViewChange: true })
            case (value.length === 8 && this.value.length === 7):
                return super.setValue(value + '-', { ...options, emitModelToViewChange: true })
            case (latestLetter === "-" || latestLetter === '(' || latestLetter === ')'):
                return super.setValue(this.value, { ...options, emitModelToViewChange: true })
            default:
                return super.setValue(value, { ...options, emitModelToViewChange: true })
        }
    }
}