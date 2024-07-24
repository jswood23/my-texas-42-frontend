import { defaultOtherProfileData, defaultProfileData } from '../../../constants'
import { Button, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'
import { Cancel, GroupAdd, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { limitString } from '../../../utils/string-utils'
import type { GlobalObj } from '../../../types'
import { useLocation, useNavigate } from 'react-router-dom'
import PageContainer from '../../../shared/page-container'
import ProfileStats from './profile-stats'
import queryString from 'query-string'
import * as React from 'react'
import ProfileFriends from './profile-friends'
import styled from 'styled-components'
import type { OtherUserProfileResponseAPIModel, UserProfileResponseAPIModel } from '../../../types/api-models'
import apiUtils from '../../../utils/api-utils'

interface Props {
  globals: GlobalObj
}

const StyledPageElements = styled.div(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  width: '100%'
}))

const StyledRoot = styled(Button)(({ theme }) => ({
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

const ProfilePage = ({ globals }: Props) => {
  const location = useLocation()
  const queryParams = queryString.parse(location.search)
  const queryUsername = (queryParams.username as string) ?? ''
  const [username, setUsername] = React.useState(queryUsername)
  const isOwnProfile = username === globals.userData.username

  const [anchorEl, setAnchorEl] = React.useState(null)
  const isDropdownOpen = Boolean(anchorEl)
  const [isError, setIsError] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [profileData, setProfileData] = React.useState(isOwnProfile ? defaultProfileData : defaultOtherProfileData)

  const displayName = profileData.displayname
  const navigate = useNavigate()
  const nameToShow = displayName.length > 0 ? displayName : queryUsername
  const pageHeader = displayName.length | queryUsername.length ? limitString(nameToShow, 25) : 'User not found'

  const goToEditProfile = React.useCallback(() => {
    navigate(`/profile/edit?username=${globals.userData?.username}`)
  }, [navigate])

  React.useEffect(() => {
    const getProfileData = async () => {
      setUsername(queryUsername)
      setIsError(false)
      setIsLoading(true)
      await apiUtils.get(`/users/${queryUsername}`)
        .then((response: UserProfileResponseAPIModel | OtherUserProfileResponseAPIModel) => {
          setProfileData(response)
        }).catch((error) => {
          console.log(error)

          setIsError(true)
          setUsername('')

          globals.openAlert('There was an error getting the profile.', 'error')
        })
      setIsLoading(false)
    }
    if (queryUsername) getProfileData()
    else setIsError(true)
  }, [location])

  const getPageAction = () => {
    const otherUserProfileData = profileData as OtherUserProfileResponseAPIModel
    const isFriends = otherUserProfileData.isfriends
    const isRequested = otherUserProfileData.isrequestsent

    const handleCloseDropdown = React.useCallback(() => {
      setAnchorEl(null)
    }, [setAnchorEl])

    const handleOpenDropdown = (event: any) => {
      setAnchorEl(event.currentTarget)
    }

    const handleClickAddFriend = async () => {
      handleCloseDropdown()
      await apiUtils.post(`/friends/${username}`, {})
        .then(() => {
          setProfileData({ ...profileData, isrequestsent: true })
          globals.openAlert(`Sent friend request to ${username}.`, 'success')
        }).catch((error) => {
          console.log(error)
          globals.openAlert('There was an error sending the friend request.', 'error')
        })
    }

    const handleClickCancelRequest = async () => {
      handleCloseDropdown()
      await apiUtils.del(`/friends/${username}`)
        .then(() => {
          setProfileData({ ...profileData, isrequestsent: false })
          globals.openAlert(`Canceled friend request to ${username}.`, 'success')
        }).catch((error) => {
          console.log(error)
          globals.openAlert('There was an error canceling the friend request.', 'error')
        })
    }

    const handleClickRemoveFriend = async () => {
      handleCloseDropdown()
      await apiUtils.del(`/friends/${username}`)
        .then(() => {
          setProfileData({ ...profileData, isfriends: false })
          globals.openAlert(`Removed ${username} from friend list.`, 'success')
        }).catch((error) => {
          console.log(error)
          globals.openAlert('There was an error removing this friend.', 'error')
        })
    }

    if (isLoading) return <></>

    if (isOwnProfile) {
      return (
          <StyledRoot>
            <Button
              className='page-action'
              variant='contained'
              onClick={goToEditProfile}
            >
              Edit Profile
            </Button>
          </StyledRoot>
      )
    }

    return (
      <StyledRoot>
        <Button
          className='page-action'
          variant='contained'
          onClick={handleOpenDropdown}
          endIcon={
            isDropdownOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />
          }
        >
          {isFriends ? <>Friend</> : isRequested ? <>Friend request sent</> : <>Not friends</>}
        </Button>
        <Menu
          id="friends-actions-dropdown-container"
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={isDropdownOpen}
          onClose={handleCloseDropdown}
        >
          {isFriends &&
            <MenuItem onClick={handleClickRemoveFriend} disableRipple>
              <ListItemIcon>
                <Cancel fontSize="small" />
              </ListItemIcon>
              <ListItemText>Remove friend</ListItemText>
            </MenuItem>
          }
          {!isFriends && !isRequested &&
            <MenuItem onClick={handleClickAddFriend} disableRipple>
              <ListItemIcon>
                <GroupAdd fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add friend</ListItemText>
            </MenuItem>
          }
          {!isFriends && isRequested &&
            <MenuItem onClick={handleClickCancelRequest} disableRipple>
              <ListItemIcon>
                <Cancel fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cancel friend Request</ListItemText>
            </MenuItem>
          }
        </Menu>
      </StyledRoot>
    )
  }

  return isError
    ? (
    <PageContainer
      globals={globals}
      title={pageHeader}
    />
      )
    : (
    <PageContainer
      action={getPageAction()}
      globals={globals}
      isLoading={isLoading}
      title={pageHeader}
    >
      <StyledPageElements>
        <ProfileStats userStats={profileData.stats} />
        {isOwnProfile && (
          <ProfileFriends
            globals={globals}
            profileData={profileData as UserProfileResponseAPIModel}
          />
        )}
      </StyledPageElements>
    </PageContainer>
      )
}

export default ProfilePage
