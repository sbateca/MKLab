import { Menu } from "react-admin";
import LabelIcon from '@mui/icons-material/Label';
import BookIcon from '@mui/icons-material/Book';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PeopleIcon from '@mui/icons-material/People';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useEffect, useRef, useState } from "react";

const collapseItemStyle = {
    paddingLeft: '20px'
};

export function CustomMenu() {
    const [openCollapse, setOpen] = useState("");

    useEffect(() => {
        setOpen("");
    }, []);

    const handleClick = (collapseName: string) => {
        collapseName === openCollapse ? setOpen("") : setOpen(collapseName);
    };

    return (
        <Menu>
            <Menu.DashboardItem />
            <Menu.Item to="/billing" primaryText="Billing" leftIcon={<BookIcon />} />
            <Menu.Item
                to="#"
                primaryText="Billing"
                onClick={() => handleClick("billing")}
                leftIcon={openCollapse === "billing" ? <ExpandLess /> : <ExpandMore />} />
            <Collapse in={openCollapse === "billing"} timeout="auto" >
                <Menu.Item
                    to="/billing/list"
                    primaryText="Invoices"
                    leftIcon={<LabelIcon />} 
                    sx={collapseItemStyle}/>
            </Collapse>
            <Menu.Item
                to="#"
                primaryText="Providers"
                onClick={() => handleClick("providers")}
                leftIcon={openCollapse === "providers" ? <ExpandLess /> : <ExpandMore />}/>
            <Collapse in={openCollapse === "providers"} timeout="auto">
                <Menu.Item
                    to="/providers"
                    primaryText="Providers"
                    leftIcon={<ChatBubbleIcon />}
                    sx={collapseItemStyle}/>
                <Menu.Item
                    to="/abc"
                    primaryText="Tracking"
                    leftIcon={<ChatBubbleIcon />} 
                    sx={collapseItemStyle}/>
            </Collapse>
        </Menu>
    );
}