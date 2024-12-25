import React from 'react';
import { Stack, AvatarGroup, Avatar, Box } from '@mui/material';

const AvatarCard = ({ avatar = [], max = 4 }) => {
  // Ensure avatar is always an array
  const validAvatars = Array.isArray(avatar) ? avatar : [];

  return (
    <Stack direction={"row"} spacing={0.5}>
      <AvatarGroup max={max}>
        <Box width={"5rem"} height={"3rem"}>
          {validAvatars.map((src, index) => (
            <Avatar
              key={index} // Stable key
              src={src} // Use the correct src variable
              alt={`Avatar ${index}`}
              sx={{
                width: "3rem",
                height: "3rem",
                position: "absolute",
                left: {
                  xs: `${0.5 + index}rem`,
                  sm: `${index}rem`,
                },
              }}
            />
          ))}
        </Box>
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;
