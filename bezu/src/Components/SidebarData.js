import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import StorageIcon from '@mui/icons-material/Storage';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import TerminalIcon from '@mui/icons-material/Terminal';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    }, 
    {
        title: "Node",
        icon: <DeveloperBoardIcon />,
        link: "/nodes"
    }, 
    {
        title: "Log",
        icon: <StorageIcon />,
        link: "/log"
    }, 
    {
        title: "Statistic",
        icon: <ShowChartIcon />,
        link: "/statistic"
    }, 
    {
        title: "Command log",
        icon: <TerminalIcon />,
        link: "/cmdlog"
    }, 
    {
        title: "Users",
        icon: <SupervisorAccountIcon />,
        link: "/users"
    }, 
]