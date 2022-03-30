import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
function Menu({title,data}) {
    useEffect(() => {
        const allLi = document.querySelector(".menu ul").querySelectorAll("li")
        function activeFunction() {
                allLi.forEach((ele) => ele.classList.remove("active"))
                this.classList.add("active")
        }
        allLi.forEach(element => element.addEventListener("click",activeFunction));
    },[])
  return (
    <div className='menu my-3'>
        <p className='title'>{title}</p>
        <ul className='p-0 w-full'>
            {data && data.map((item,index) => {
                return(<Link to={`${item.route}`}>
                    <li key={index} className='uppercase mb-1 py-1 w-full text-sm font-semibold'><a className='flex content-center'>
                    <item.icon className='menu_icon text-lg mr-3' />
                    <span>{item.name}</span>
                </a></li>
                </Link>)
            })}
        </ul>
    </div>
  )
}

export default Menu