import React from 'react'

const FacultyCardLef = (props) => {
  return (
    <>
      <div className="left-card flex h-52 relative bg-gray-200 hover:shadow-lg p-4">
        <img src={props.imgUrl} className='absolute left-0 bottom-0 ' alt="" />
        <div className="glassCard w-full flex items-center justify-center">
            <h1 className='lg:text-3xl text-lg font-semibold text-start ml-5 pl-20'>Faculty of <br/>  {props.faculty}</h1>
        </div>
      </div>  
    </>
  )
}

export default FacultyCardLef
