import React from 'react'

export default function SlideBarCard(props) {
  const {cardsData} = props 
  const {imageUrl, title, description} = cardsData
  return (
    <li className='w-80 h-1/2  rounded-lg hover:shadow-xl hover:zoom bg-stone-500 mx-2 flex flex-col'>
      <img className='w-full h-40 self-center' src={imageUrl} alt={title}/>
      <h1 className=' px-2 pb-2 font-serif text-white italic font-semibold'>{title}</h1>
      <p className='px-2 pb-2 text-white font-mono'>{description}</p>
    </li>
  )
}
