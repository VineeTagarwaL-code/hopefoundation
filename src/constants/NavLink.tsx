import React from "react";
import { Activity, Cross, PhoneCall } from "lucide-react"
import { call } from "@/utils/call";
type NavLink = {
    name: string;  
    icon: React.ReactNode;
    to?:string;
    handler: () => void;
}
 const NavLinks:NavLink[] = [
    {
        "name": "Addiction",
        "icon": <Activity size={18}/>,
        "to":"addiction",
        handler: () => {call()}
    }, {
        "name": "Treatment",
        "icon": <Cross size={18}/>,
        "to":"treatment",
        handler: () => {call()}
    },
    
    {
        "name": "Call",
        "icon": <PhoneCall size={18}/>,
        handler: () => {call()}
    },
]

export default NavLinks;