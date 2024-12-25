import React from 'react';
import { Avatar, Typography, Stack } from '@mui/material';
import { Face as FaceIcon, AlternateEmail as UserNameIcon, CalendarMonth as CalendarIcon } from '@mui/icons-material';
import moment from "moment";

const Profile = () => {
  // Define ProfileCard before using it
  const ProfileCard = ({ text, Icon, heading }) => (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={"1rem"}
      color={"white"}
      textAlign={"center"}
    >
      {Icon && Icon}
      <Stack>
        <Typography variant="body1">
          {text}
        </Typography>
        <Typography variant="caption" color={"gray"}>
          {heading}
        </Typography>
      </Stack>
    </Stack>
  );

  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"sadas dasdas fff"}  />
      <ProfileCard heading={"Username"} text={"@medisha"} Icon={<UserNameIcon/>} />
      <ProfileCard heading={"Name"} text={"Disha Sethi"} Icon={<FaceIcon/>} />
      <ProfileCard heading={"Joined"} text={moment('2024-12-25T16:01:36.709Z').fromNow()} Icon={<CalendarIcon/>} />
    </Stack>
  );
};

export default Profile;
