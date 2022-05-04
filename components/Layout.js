import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, MenuList } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

function Layout() {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar variant='dense'>
                    <IconButton edge='start' color='inherit' aria-label='menu' sx={{mr:2}}>
                        <MenuIcon>
                            <MenuList open='true'>
                                <MenuItem>haha</MenuItem>
                                </MenuList>
                            </MenuIcon>     
                    </IconButton>
                    <Typography varian='h6' component='div' sx={{flexGrow: 1}}>JUHUUU</Typography>
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Layout