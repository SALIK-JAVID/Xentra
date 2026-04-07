import React from 'react'
//we will destructure the props i.e instead of props.title , we can use {title}
const Button = ({id, title, leftIcon, containerClass}) => {
  return (
    <button id= {id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
        {leftIcon}


        <span className='relative inline-flex overflow-hiddden font-general text-xs uppercase'>
            <div>
                {title}
            </div>

        </span>
        
        

    </button>
  )
}

export default Button
