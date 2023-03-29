import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { ListItemAvatar, ListItemButton } from "@mui/material";
import { Avatar } from "antd";
import Face3Icon from "@mui/icons-material/Face3";
export default function PinnedSubheaderList() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 500,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        height: "100%",
        "& ul": { padding: 10 },
      }}
      subheader={<li />}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((sectionId) => (
        <ListItemButton
          sx={{
            margin: "10px",
            borderRadius: "10px",
            border: "1px solid gray",
            height: "80px",
          }}
          selected={selectedIndex === sectionId && true}
          onClick={() => handleListItemClick(sectionId)}
        >
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              icon={<Face3Icon fontSize="large" />}
              size={50}
            />
          </ListItemAvatar>
          <ListItemText primary="Нэр" secondary="Овог" />
          <ListItemText primary="Регистр" secondary="Сургууль" />
        </ListItemButton>
      ))}
    </List>
  );
}
