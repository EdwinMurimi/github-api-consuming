import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function UserList({users}) {
  const classes = useStyles();

  return (
    <div style={{ maxWidth: '1180px', margin: 'auto' }}>
      <span style={{ fontSize: '20px', fontWeight: '300' }}>List of top 30 users in Github</span>
      <br/>
      <br/>
      <List className={classes.root}>
        {users?.map(user => (
          <Fragment key={user.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={user.avatar_url} />
              </ListItemAvatar>
              <ListItemText
                primary={user.contributions.toLocaleString() + " Contributions"}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {user.login}
                    </Typography>
                    {" — "} {user.html_url}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Fragment>
        ))}
      </List>
    </div>
  );
}