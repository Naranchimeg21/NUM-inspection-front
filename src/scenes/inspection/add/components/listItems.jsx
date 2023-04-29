import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { ListItemAvatar, ListItemButton } from "@mui/material";
import { Avatar } from "antd";
import Face3Icon from "@mui/icons-material/Face3";
export default function PinnedSubheaderList({ data, setUserMaster }) {
  const [selectedIndex, setSelectedIndex] = React.useState();

  const handleListItemClick = (index, item) => {
    setSelectedIndex(index);
    setUserMaster(item);
  };
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 500,

        position: "relative",
        overflow: "auto",
        height: "100%",
        minHeight: "80vh",
        "& ul": { padding: 10 },
      }}
      subheader={<li />}
    >
      {data &&
        data.map((item, idx) => (
          <ListItemButton
            sx={{
              margin: "10px",
              borderRadius: "10px",
              border: "1px solid gray",
              height: "80px",
            }}
            selected={selectedIndex === idx && true}
            onClick={() => handleListItemClick(idx, item)}
          >
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                icon={<Face3Icon fontSize="large" />}
                size={50}
              />
            </ListItemAvatar>
            <ListItemText primary={item.firstName} secondary={item.lastName} />
            <ListItemText
              primary={item.register}
              secondary={`${item.branchSchool} - ${item.major}`}
            />
          </ListItemButton>
        ))}
    </List>
  );
}
