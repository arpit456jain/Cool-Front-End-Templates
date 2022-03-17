import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarMenu>
                <SidebarLink to="/">PURE GOLD</SidebarLink>
                <SidebarLink to="/">PROMISE LAND</SidebarLink>
                <SidebarLink to="/">PERFECT HARMONY</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Purchase</SidebarRoute>
            </SideBtnWrap>

        </SidebarContainer>
    )
}

export default Sidebar
