import React from "react";
import { Activity, Cross, PhoneCall } from "lucide-react"
import { call } from "@/utils/call";
type NavLink = {
    name: string;  
    icon: React.ReactNode;
    href:string;
    handler: () => void;
}
 const NavLinks:NavLink[] = [
    {
        "name": "Addiction",
        "icon": <Activity size={18}/>,
        "href":"/",
        handler: () => {call()}
    }, {
        "name": "Treatment",
        "icon": <Cross size={18}/>,
        "href":"/",
        handler: () => {call()}
    },
    
    {
        "name": "Call",
        "icon": <PhoneCall size={18}/>,
        "href":"/",
        handler: () => {call()}
    },
]

export default NavLinks;