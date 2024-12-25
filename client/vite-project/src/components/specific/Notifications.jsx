import { Dialog, DialogTitle, Stack, InputAdornment, TextField, List, Typography } from '@mui/material';

import React, { memo } from 'react';
import { sampleNotifications } from '../../constants/sampleData';

const Notifications = () => {

  const friendRequestHandler=((_id,accept)=>{

  });
  return (
<Dialog open>
  <Stack p={{xs:"1rem",sm:"2rem"}} maxWidth={"25rem"}>
    <DialogTitle>Notifications</DialogTitle>
    {
      sampleNotifications.length>0 ?(
        sampleNotifications.map((i)=><NotificationItem sender={i.sender} _id={i._id} handler={friendRequestHandler}
        key={_id}
        />)
      ):<Typography textAlign={"center"}>No Notifications</Typography>
    }
  </Stack>
</Dialog>
  );
}

const NotificationItem=memo(({sender,_id,handler})=>{
  return <></>;
});
export default Notifications;
