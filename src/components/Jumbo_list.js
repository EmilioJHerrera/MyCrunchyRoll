import React from 'react'

const Jumbo_list = ({Data}) => {
  return (
    < div >
        {Data.map((item,index)=>{
                const {title,text} = item
                return(
                    <div key={index} className='item-list'>
                        <h4 className='texto_blanco'>{title}</h4>
                        <p className='texto_gris'>{text}</p>
                    </div>
                )
            })}
    </div>
  )
}

export default Jumbo_list