export const emailFormRequirements = [
  { type: 'Email' },
  { type: 'LessThanChar', numValues: [30] },
  { type: 'Required' }
]

export const usernameFormRequirements = [
  { type: 'IsNonWhitespace' },
  { type: 'LessThanChar', numValues: [25] },
  { type: 'Required' }
]

export const passwordFormRequirements = [
  { type: 'IsNonWhitespace' },
  { type: 'LessThanChar', numValues: [20] },
  { type: 'Required' }
]

export const newPasswordFormRequirements = [
  { type: 'Required' },
  { type: 'GreaterThanChar', numValues: [8] },
  { type: 'LessThanChar', numValues: [20] },
  {
    type: 'Contains',
    strValues: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    validationMessage: 'The password must contain a number.'
  }
]

export const confirmPasswordFormRequirements = (password: string) => [
  { type: 'Required' },
  {
    type: 'EqualTo',
    numValues: [password],
    validationMessage: 'The passwords must match.'
  }
]
