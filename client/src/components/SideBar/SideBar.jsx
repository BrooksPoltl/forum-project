import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/styles';

import List from '@material-ui/core/List';


import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


import styles from './Styles/SideBar.styling';

const SideBar = (props) =>{
    const { classes } = props;
    return (
        <div>
        <Drawer variant = "permanent" position="fixed">
        <List>
            <ListItem button key = "Home">
                <ListItemIcon>
                    <i className="material-icons">
                        home
                    </i>
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button key = "Explore Topics">
                <ListItemIcon>
                    <i className="material-icons">
                        public
                    </i>
                </ListItemIcon>
                <ListItemText primary="Explore Topics" />
            </ListItem>
            <ListItem button key = "Profile">
                <ListItemIcon>
                    <i className="material-icons">
                        account_circle
                    </i>
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button key = "Settings">
                <ListItemIcon className = {classes.fontAwesomeIcon}>
                    <FontAwesomeIcon icon = {faCog} />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button key = "Logout">
                <ListItemIcon className = {classes.fontAwesomeIcon}>
                    <FontAwesomeIcon icon = {faSignOutAlt} />
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItem>
        </List>
        </Drawer>
        </div>
    )
}

export default withStyles(styles)(SideBar);