import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Button, CircularProgress, FormControl, TextField, Typography } from '@mui/material'
import * as React from 'react'
import PageContainer from '../../../shared/page-container'
import { type GlobalObj, type TextFieldObj } from '../../../types'
import queryString from 'query-string'
import apiUtils from '../../../utils/api-utils'
import type { UserProfileResponseAPIModel } from '../../../types/api-models'
import {
  confirmPasswordFormRequirements, newPasswordFormRequirements,
  passwordFormRequirements,
  usernameFormRequirements
} from '../../../constants/forms'
import { validateField } from '../../../utils/user-utils'
import { isAllWhitespace } from '../../../utils/string-utils'

interface Props {
  globals: GlobalObj
}

const StyledActionRoot = styled(Button)(({ theme }) => ({
  '.page-action': {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.alt,
    fontWeight: 'bold',
    '&:hover': {
      color: theme.palette.secondary.alt,
      backgroundColor: theme.palette.primary.main
    }
  }
}))

const StyledPageElements = styled.div(({ theme }) => ({
  display: 'flex',
  border: '0.5px solid #B0B0B0',
  borderRadius: '3px',
  boxShadow: '0 2px 5px 2px #E0E0E0',
  flexDirection: theme.isMobile ? 'column' : 'row',
  width: '100%',
  '.form-container': {
    height: theme.isMobile ? '200px' : '400px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  '.display-name-form': {
  },
  '.password-form': {
    borderLeft: theme.isMobile ? '0' : '0.5px solid #B0B0B0',
    borderTop: theme.isMobile ? '0.5px solid #B0B0B0' : 0
  },
  '.form-title': {
    fontSize: theme.spacing(2.5),
    fontWeight: 'bold',
    margin: theme.spacing(2)
  },
  '.form-text-input': {
    marginBottom: theme.spacing(1)
  },
  '.submit-button': {
    width: '100%',
    marginTop: theme.spacing(1),

    backgroundColor: theme.palette.primary.alt,
    color: theme.palette.secondary.main,
    fontSize: theme.spacing(2),
    marginBottom: theme.spacing(1),
    minHeight: theme.isMobile ? theme.spacing(6) : theme.spacing(4),
    '&:hover': {
      color: theme.palette.secondary.alt,
      backgroundColor: theme.palette.primary.main
    },
    '&.Mui-disabled': {
      backgroundColor: theme.palette.light.alt
    }
  }
}))

const EditProfilePage = ({ globals }: Props) => {
  const location = useLocation()
  const queryParams = queryString.parse(location.search)
  const queryUsername = (queryParams.username as string) ?? ''

  const [errors, setErrors] = React.useState({ hasError: false, displayName: null, oldPassword: null, newPassword: null, confirmNewPassword: null })
  const [isLoadingProfileData, setIsLoadingProfileData] = React.useState(false)
  const [isLoadingChangeDisplayNameData, setIsLoadingChangeDisplayNameData] = React.useState(false)
  const [isLoadingChangePasswordData, setIsLoadingChangePasswordData] = React.useState(false)
  const [displayName, setDisplayName] = React.useState('')
  const [currentDisplayName, setCurrentDisplayName] = React.useState('')
  const [oldPassword, setOldPassword] = React.useState('')
  const [newPassword, setNewPassword] = React.useState('')
  const [confirmNewPassword, setConfirmNewPassword] = React.useState('')

  const pageHeader = 'Edit Profile'
  const disableDisplayNameSubmit = React.useMemo(() => isLoadingChangeDisplayNameData ||
    displayName.length === 0 ||
    displayName === currentDisplayName ||
    (errors.displayName as any)?.hasError
  , [displayName, currentDisplayName, errors])
  const disableChangePasswordSubmit = React.useMemo(() => isLoadingChangePasswordData ||
    oldPassword.length === 0 ||
    newPassword.length === 0 ||
    confirmNewPassword.length === 0 ||
    (errors.oldPassword as any)?.hasError ||
    (errors.newPassword as any)?.hasError ||
    (errors.confirmNewPassword as any)?.hasError
  , [oldPassword, newPassword, confirmNewPassword, errors])

  const navigate = useNavigate()
  const goToProfile = React.useCallback(() => {
    navigate(`/profile?username=${globals.userData.username}`)
  }, [navigate])

  React.useEffect(() => {
    if (queryUsername !== globals.userData.username) {
      goToProfile()
      return
    }
    const getDisplayName = async () => {
      setIsLoadingProfileData(true)
      const profileData: UserProfileResponseAPIModel = await apiUtils.get(`/users/${queryUsername}`)
      setIsLoadingProfileData(false)
      setDisplayName(profileData.displayname)
      setCurrentDisplayName(profileData.displayname)
    }
    getDisplayName()
  }, [])

  const runValidationTasks = React.useCallback(
    (fieldName: string, currentValue: string) => {
      const validations = {
        displayName: usernameFormRequirements,
        oldPassword: passwordFormRequirements,
        newPassword: newPasswordFormRequirements,
        confirmNewPassword: confirmPasswordFormRequirements(newPassword)
      }
      const validationResponse = validateField(
        currentValue,
        (validations as any)[fieldName]
      )
      setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }))
      return validationResponse
    },
    [newPassword]
  )

  const onChangeDisplayName = (e: TextFieldObj) => {
    const value = e.target.value
    if ((errors.displayName as any)?.hasError) {
      runValidationTasks('username', value)
    }
    setDisplayName(e.target.value)
  }

  const onChangeOldPassword = (e: TextFieldObj) => {
    const value = e.target.value
    if ((errors.oldPassword as any)?.hasError) {
      runValidationTasks('oldPassword', value)
    }
    setOldPassword(value)
  }

  const onChangeNewPassword = (e: TextFieldObj) => {
    const value = e.target.value
    if ((errors.newPassword as any)?.hasError) {
      runValidationTasks('newPassword', value)
    }
    setNewPassword(value)
  }

  const onChangeConfirmNewPassword = (e: TextFieldObj) => {
    const value = e.target.value
    if ((errors.confirmNewPassword as any)?.hasError) {
      runValidationTasks('confirmNewPassword', value)
    }
    setConfirmNewPassword(value)
  }

  const onSubmitDisplayName = React.useCallback(async () => {
    const validationResponse = runValidationTasks('displayName', displayName)
    if (
      validationResponse.hasError ||
      !displayName ||
      isAllWhitespace(displayName)
    ) {
      return
    }

    setIsLoadingChangeDisplayNameData(true)
    try {
      await apiUtils.put('/users/change-display-name', { displayname: displayName })
      setCurrentDisplayName(displayName)
      globals.openAlert('Display name updated.', 'success')
    } catch (error) {
      console.log(error)
      globals.openAlert('There was an error updating the display name.', 'error')
    }
    setIsLoadingChangeDisplayNameData(false)
  }, [displayName, errors, runValidationTasks])

  const onSubmitChangePassword = React.useCallback(async () => {
    const oldPasswordValidationResponse = runValidationTasks('oldPassword', oldPassword)
    const newPasswordValidationResponse = runValidationTasks('newPassword', newPassword)
    const confirmNewPasswordValidationResponse = runValidationTasks('confirmNewPassword', confirmNewPassword)
    if (
      oldPasswordValidationResponse.hasError ||
      newPasswordValidationResponse.hasError ||
      confirmNewPasswordValidationResponse.hasError ||
      !oldPassword ||
      !newPassword ||
      !confirmNewPassword ||
      isAllWhitespace(oldPassword) ||
      isAllWhitespace(newPassword) ||
      isAllWhitespace(confirmNewPassword)
    ) {
      return
    }

    setIsLoadingChangePasswordData(true)
    try {
      await apiUtils.put('/users/change-password', { oldpassword: oldPassword, newpassword: newPassword })
      globals.openAlert('Password updated.', 'success')
    } catch (error) {
      console.log(error)
      globals.openAlert('There was an error updating the password.', 'error')
    }
    setIsLoadingChangePasswordData(false)
  }, [oldPassword, newPassword, confirmNewPassword, errors, runValidationTasks])

  const backButton = (
    <StyledActionRoot>
      <Button
        className='page-action'
        variant='contained'
        onClick={goToProfile}
      >
        Back
      </Button>
    </StyledActionRoot>
  )

  return (
    <PageContainer
      action={backButton}
      isLoading={isLoadingProfileData}
      globals={globals}
      title={pageHeader}
    >
      <StyledPageElements>
        <div className={'display-name-form form-container'}>
          <Typography className={'form-title'}>Change Display Name</Typography>
          <FormControl>
            <TextField
              className={'form-text-input'}
              label='Display Name'
              onChange={onChangeDisplayName}
              error={(errors.displayName as any)?.hasError}
              helperText={(errors.displayName as any)?.errorMessage}
              value={displayName}
            />
            <Button
              className={'submit-button'}
              disabled={disableDisplayNameSubmit}
              onClick={onSubmitDisplayName}
            >
              {isLoadingChangeDisplayNameData ? <CircularProgress size={20} /> : <>Save</>}
            </Button>
          </FormControl>
        </div>
        <div className={'password-form form-container'}>
          <Typography className={'form-title'}>Change Password</Typography>
          <FormControl>
            <TextField
              className={'form-text-input'}
              label='Current Password'
              type='password'
              onChange={onChangeOldPassword}
              error={(errors.oldPassword as any)?.hasError}
              helperText={(errors.oldPassword as any)?.errorMessage}
            />
            <TextField
              className={'form-text-input'}
              label='New Password'
              type='password'
              onChange={onChangeNewPassword}
              error={(errors.newPassword as any)?.hasError}
              helperText={(errors.newPassword as any)?.errorMessage}
            />
            <TextField
              className={'form-text-input'}
              label='Confirm New Password'
              type='password'
              onChange={onChangeConfirmNewPassword}
              error={(errors.confirmNewPassword as any)?.hasError}
              helperText={(errors.confirmNewPassword as any)?.errorMessage}
            />
            <Button
              className={'submit-button'}
              disabled={disableChangePasswordSubmit}
              onClick={onSubmitChangePassword}
            >
              {isLoadingChangePasswordData ? <CircularProgress size={20} /> : <>Save</>}
            </Button>
          </FormControl>
        </div>

      </StyledPageElements>
    </PageContainer>
  )
}

export default EditProfilePage
