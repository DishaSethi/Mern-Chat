import React, { Suspense, useState,lazy } from 'react';
import { Box,AppBar,Typography,Toolbar,IconButton, Tooltip, Backdrop} from '@mui/material';
import { orange } from '../../constants/color';
import { 
    Add as AddIcon, 
    Menu as MenuIcon,
    Search as SearchIcon,
    Logout as LogoutIcon,
    Notifications as NotificationsIcon,
Group as GroupIcon} from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';


const SearchDialog=React.lazy(()=>import ("../specific/Search"));
const NotificationDialog=React.lazy(()=>import ("../specific/Notifications"));
const NewGroupDialog=React.lazy(()=>import ("../specific/NewGroup"));

const Header = () => {

    const navaigate =useNavigate();
    
    const [isMobile,setIsMobile]=useState(false);
    const [isSearch,setIsSearch]=useState(false);
    const [isNewGroup,setIsNewGroup]=useState(false);
    const [isNotification,setIsNotifcation]=useState(false);

    const handleMobile=()=>{
        
        setIsMobile(prev=>!prev);
    }

    const openSearchDialog=()=>{
        setIsSearch(prev=>!prev);
    }
    const openNewGroup=()=>{
        setIsNewGroup(prev=>!prev);
    }

    const openNotification=()=>{
        setIsNotifcation((prev)=> !prev);
    };

    const navigateToGroup=()=>{
        navaigate("/groups");
    }

    const logoutHandler=()=>{
        console.log('Logout');
    }
  return(<>
  <Box sx={{flexGrow:1}} height={"4rem"}>
<AppBar position="static" sx={{
    bgcolor:orange
}}>

    <Toolbar>
        <Typography
        variant="h6"
        sx={{
            display:{xs:"none",sm:"block"},
        }}>
            ChatterBox
        </Typography>
   
   

    <IconButton color="inherit" onClick={handleMobile}
        sx={{
            display: { xs: "block", sm: "none" }, // Visible only on extra-small screens
            marginLeft: "auto",
        }}>
        <MenuIcon/>
        
    </IconButton>

    <Box  sx={{
        flexGrow:1
    }}
    ></Box>

<Box>

<IconBtn
title={"Search"}
icon={<SearchIcon/>}
onClick={openSearchDialog}
/>
<IconBtn
title={"New Group"}
icon={<AddIcon/>}
onClick={openNewGroup}
/>
<IconBtn
title={"Manage Groups"}
icon={<GroupIcon/>}
onClick={navigateToGroup}
/>
<IconBtn
title={"Logout"}
icon={<LogoutIcon/>}
onClick={logoutHandler}
/>
<IconBtn
title={"Notifications"}
icon={<NotificationsIcon/>}
onClick={openNotification}
/>



 

</Box>
    </Toolbar>
    </AppBar>
  </Box>
{isSearch &&
<Suspense fallback={<Backdrop open />}>

<SearchDialog/>
</Suspense>
}
{isNotification &&
<Suspense fallback={<Backdrop open />}>

<NotificationDialog/>
</Suspense>
}
{isNewGroup &&
<Suspense fallback={<Backdrop open />}>

<NewGroupDialog/>
</Suspense>
}
  </>
  );
}

const IconBtn=({title,icon,onClick})=>{
    return(
        <Tooltip title={title}>
            <IconButton color='inherit' size='large' onClick={onClick}>
                {icon}
            </IconButton>
            </Tooltip>
    )
}

export default Header;
