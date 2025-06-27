import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

export const AdminSidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/dashboard"
    },
    {
        title: "Users",
        icon: <SupervisorAccountIcon />,
        link: "/users"
    },
    {
        title: "Database",
        icon: <CollectionsBookmarkIcon />,
        link: "/dictionary"
    },
]