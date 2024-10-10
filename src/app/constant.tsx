
import Link from 'next/link'
import { title } from 'process'
import React from 'react'

interface Inavitem{
    title:string,
    link:string,

}
export const navItem:Inavitem[]=[
    {
        
        title:"HOME",
        link: "/"
    },
    {
        
        title:"CATALOGUE",
        link: "/catalogue"
    },
    {
        title:"FASHION",
        link:"/fashion"
    },
    {
        title:"FAVORITE",
        link:"/favorite"
    },
    {
        title:"LIFESTYLE",
        link:"/lifestyle"
    }
    
    
]
  


export default navItem
