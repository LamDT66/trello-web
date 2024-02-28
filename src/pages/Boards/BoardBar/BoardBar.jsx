import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatters'

const MENU_STYLES = {
  color: 'white',
  backgroundColor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar({ board }) {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#31495e' : '#1976d2'),
      '&::-webkit-scrollbar-track': { m: 2 }
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label={board?.title}
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant='outlined'
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={3}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title="Remy Sharp">
            <Avatar
              alt="Remy Sharp"
              src="https://www.bing.com/images/search?view=detailV2&ccid=QAenzJbK&id=6FE62798F303A8ED46AC7B20C562AA458A72E040&thid=OIP.QAenzJbKBQIjv5yZhnRhjQAAAA&mediaurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F93%2F90%2F9c%2F93909cf728fb7cbe6ac51f5fb1f782d0.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.4007a7cc96ca050223bf9c998674618d%3Frik%3DQOByikWqYsUgew%26pid%3DImgRaw%26r%3D0&exph=400&expw=400&q=ji+chang+wook&simid=608050288964421505&form=IRPRST&ck=4BA8F7CE3885B16D821EF0F2703BE5F4&selectedindex=6&itb=0&vt=2"
            />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar
              alt="Remy Sharp"
              src="https://www.bing.com/images/search?view=detailV2&ccid=QAenzJbK&id=6FE62798F303A8ED46AC7B20C562AA458A72E040&thid=OIP.QAenzJbKBQIjv5yZhnRhjQAAAA&mediaurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F93%2F90%2F9c%2F93909cf728fb7cbe6ac51f5fb1f782d0.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.4007a7cc96ca050223bf9c998674618d%3Frik%3DQOByikWqYsUgew%26pid%3DImgRaw%26r%3D0&exph=400&expw=400&q=ji+chang+wook&simid=608050288964421505&form=IRPRST&ck=4BA8F7CE3885B16D821EF0F2703BE5F4&selectedindex=6&itb=0&vt=2"
            />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar
              alt="Remy Sharp"
              src="https://www.bing.com/images/search?view=detailV2&ccid=QAenzJbK&id=6FE62798F303A8ED46AC7B20C562AA458A72E040&thid=OIP.QAenzJbKBQIjv5yZhnRhjQAAAA&mediaurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F93%2F90%2F9c%2F93909cf728fb7cbe6ac51f5fb1f782d0.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.4007a7cc96ca050223bf9c998674618d%3Frik%3DQOByikWqYsUgew%26pid%3DImgRaw%26r%3D0&exph=400&expw=400&q=ji+chang+wook&simid=608050288964421505&form=IRPRST&ck=4BA8F7CE3885B16D821EF0F2703BE5F4&selectedindex=6&itb=0&vt=2"
            />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar
              alt="Remy Sharp"
              src="https://www.bing.com/images/search?view=detailV2&ccid=QAenzJbK&id=6FE62798F303A8ED46AC7B20C562AA458A72E040&thid=OIP.QAenzJbKBQIjv5yZhnRhjQAAAA&mediaurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F93%2F90%2F9c%2F93909cf728fb7cbe6ac51f5fb1f782d0.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.4007a7cc96ca050223bf9c998674618d%3Frik%3DQOByikWqYsUgew%26pid%3DImgRaw%26r%3D0&exph=400&expw=400&q=ji+chang+wook&simid=608050288964421505&form=IRPRST&ck=4BA8F7CE3885B16D821EF0F2703BE5F4&selectedindex=6&itb=0&vt=2"
            />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar
              alt="Remy Sharp"
              src="https://www.bing.com/images/search?view=detailV2&ccid=QAenzJbK&id=6FE62798F303A8ED46AC7B20C562AA458A72E040&thid=OIP.QAenzJbKBQIjv5yZhnRhjQAAAA&mediaurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F93%2F90%2F9c%2F93909cf728fb7cbe6ac51f5fb1f782d0.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.4007a7cc96ca050223bf9c998674618d%3Frik%3DQOByikWqYsUgew%26pid%3DImgRaw%26r%3D0&exph=400&expw=400&q=ji+chang+wook&simid=608050288964421505&form=IRPRST&ck=4BA8F7CE3885B16D821EF0F2703BE5F4&selectedindex=6&itb=0&vt=2"
            />
          </Tooltip>
          <Tooltip title="Remy Sharp">
            <Avatar
              alt="Remy Sharp"
              src="https://www.bing.com/images/search?view=detailV2&ccid=QAenzJbK&id=6FE62798F303A8ED46AC7B20C562AA458A72E040&thid=OIP.QAenzJbKBQIjv5yZhnRhjQAAAA&mediaurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F93%2F90%2F9c%2F93909cf728fb7cbe6ac51f5fb1f782d0.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.4007a7cc96ca050223bf9c998674618d%3Frik%3DQOByikWqYsUgew%26pid%3DImgRaw%26r%3D0&exph=400&expw=400&q=ji+chang+wook&simid=608050288964421505&form=IRPRST&ck=4BA8F7CE3885B16D821EF0F2703BE5F4&selectedindex=6&itb=0&vt=2"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
