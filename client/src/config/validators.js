import { defineRule } from 'vee-validate'
import { configure } from 'vee-validate'

defineRule('required', (value) => {
  if (!value || !value.length) {
    return 'هذا الحقل مطلوب'
  }
  return true
})

defineRule('minLength', (value, [limit]) => {
  if (!value || !value.length) {
    return true
  }
  if (value.length < limit) {
    return `هذا الحقل يجب ان يكون على الأقل ${limit} احرف`
  }
  return true
})
