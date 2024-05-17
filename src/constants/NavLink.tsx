import React from "react";
import { Activity, Cross, PhoneCall } from "lucide-react"
type NavLink = {
    name: string;  
    icon: React.ReactNode;
    href:string;
}
 const NavLinks:NavLink[] = [
    {
        "name": "Addiction",
        "icon": <Activity size={18}/>,
        "href":"/"
    }, {
        "name": "Treatment",
        "icon": <Cross size={18}/>,
        "href":"/"
    },
    
    {
        "name": "Call",
        "icon": <PhoneCall size={18}/>,
        "href":"/"
    },
]

export default NavLinks;