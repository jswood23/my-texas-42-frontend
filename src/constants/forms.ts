import { validationFields } from '../utils/user-utils'

export const emailFormRequirements = [
  { type: validationFields.email },
  { type: validationFields.lessThanChar, numValues: [30] },
  { type: validationFields.required }
]

export const usernameFormRequirements = [
  { type: validationFields.isNonWhitespace },
  { type: validationFields.lessThanChar, numValues: [25] },
  { type: validationFields.greaterThanChar, numValues: [4] },
  { type: validationFields.hasNoSpecialCharacters },
  { type: validationFields.required }
]

export const passwordFormRequirements = [
  { type: validationFields.isNonWhitespace },
  { type: validationFields.lessThanChar, numValues: [20] },
  { type: validationFields.required }
]

export const newPasswordFormRequirements = [
  { type: validationFields.required },
  { type: validationFields.greaterThanChar, numValues: [8] },
  { type: validationFields.lessThanChar, numValues: [20] },
  {
    type: validationFields.contains,
    strValues: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    validationMessage: 'The password must contain a number.'
  }
]

export const confirmPasswordFormRequirements = (password: string) => [
  { type: validationFields.required },
  {
    type: validationFields.equalTo,
    numValues: [password],
    validationMessage: 'The passwords must match.'
  }
]
