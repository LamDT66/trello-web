import React from 'react'
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material'
import { Logout, PersonAdd, Settings } from '@mui/icons-material'

function Profiles() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ padding: 0 }}
          aria-controls={open ? 'basic-menu-profiles' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar
            sx={{ width: 34, height: 34 }}
            alt='Avatar'
            src='https://www.bing.com/images/search?view=detailV2&ccid=QAenzJbK&id=6FE62798F303A8ED46AC7B20C562AA458A72E040&thid=OIP.QAenzJbKBQIjv5yZhnRhjQAAAA&mediaurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F93%2F90%2F9c%2F93909cf728fb7cbe6ac51f5fb1f782d0.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.4007a7cc96ca050223bf9c998674618d%3Frik%3DQOByikWqYsUgew%26pid%3DImgRaw%26r%3D0&exph=400&expw=400&q=ji+chang+wook&simid=608050288964421505&form=IRPRST&ck=4BA8F7CE3885B16D821EF0F2703BE5F4&selectedindex=6&itb=0&vt=2'
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-profiles"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profiles'
        }}
      >
        <MenuItem>
          <Avatar sx={{ width: 28, height: 28, mr: 2 }}/> Profile
        </MenuItem>
        <MenuItem>
          <Avatar sx={{ width: 36, height: 36, mr: 2 }}/> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profiles