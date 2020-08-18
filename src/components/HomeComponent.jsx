import {AppBar, Container, Tab, Tabs, Toolbar, Typography} from "@material-ui/core";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import About from './AboutComponent'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

const tabNameToIndex = {
    0: 'home',
    1: 'about'
}

const indexToName = {
    home: 0,
    about: 1
}

const Home = props => {
    const {match, history} = props
    const { params } = match
    let {page} = params
    if(!page){
        page = "home"
    }
    const classes = useStyles()
    const [selectedTab, setSelectedTab] =useState(indexToName[page])
    const handleChange = (event, newValue) => {
        history.push('/'+tabNameToIndex[newValue])
        setSelectedTab(newValue);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Temp
                    </Typography>
                    <Tabs value={selectedTab} onChange={handleChange} indicatorColor="secondary" variant="scrollable" scrollButtons="on">
                        <Tab label="Home" />
                        <Tab label="About" />
                    </Tabs>
                </Toolbar>
            </AppBar>
            <Container>

                {selectedTab === 0 && <About/>}
                {selectedTab === 1 && <About/>}
            </Container>
        </div>
    )
}

export default Home