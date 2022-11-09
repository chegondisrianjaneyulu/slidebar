import React from 'react'
import SlideBarCard from '../SlideBarCard/SlideBarCard'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cards = [
  {id:1, imageUrl:'https://assets.ccbp.in/frontend/static-website/animals-turtle-img.png', title:'turtle', description:'The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.'},
  {id:2, imageUrl:'https://assets.ccbp.in/frontend/static-website/animals-raccoon-img.png', title:'raccoon', description:'The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.'},
  {id:3, imageUrl:'https://assets.ccbp.in/frontend/static-website/animals-kangaroo-img.png', title:'kangaroo', description:'The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.'},
  {id:4, imageUrl:'https://assets.ccbp.in/frontend/static-website/animals-lion-img.png', title:'lion', description:'The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.'},
  {id:5, imageUrl:'https://assets.ccbp.in/frontend/static-website/animals-turtle-img.png', title:'turtle', description:'The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.'},
  {id:6, imageUrl:'https://assets.ccbp.in/frontend/static-website/animals-raccoon-img.png', title:'raccoon', description:'The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.'},
  {id:7, imageUrl:'https://assets.ccbp.in/frontend/static-website/animals-kangaroo-img.png', title:'kangaroo', description:'The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.'},
  {id:8, imageUrl:'https://assets.ccbp.in/frontend/static-website/animals-lion-img.png', title:'lion', description:'The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.'},
  {id:9, imageUrl:'https://assets.ccbp.in/frontend/static-website/animals-turtle-img.png', title:'turtle', description:'The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.'},
  {id:10, imageUrl:'https://assets.ccbp.in/frontend/static-website/animals-raccoon-img.png', title:'raccoon', description:'The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.'},
  {id:11, imageUrl:'https://assets.ccbp.in/frontend/static-website/animals-kangaroo-img.png', title:'kangaroo', description:'The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.'},
  {id:12, imageUrl:'https://assets.ccbp.in/frontend/static-website/animals-lion-img.png', title:'lion', description:'The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.'}
]


export default function SideBar() {
  const [index, setIndex] = useState(0)

  const onClickPrevButton = () => {
    setIndex(index => index + 1)
  }
  const onClickNextButton = () => {}

  return (
    <div className='flex h-screen items-center relative'>
      <button className=' bg-slate-500 h-full absolute left-0' type="button" onClick={() => setIndex(index - 1)}>Previous Button</button>

      <ul className='flex overflow-hidden truncate'>
        {cards.map(eachItem => (
          <SlideBarCard key={eachItem.id} cardsData={eachItem}/>
        ))}
      </ul>

      <button type="button" className='bg-slate-500 h-full absolute right-0' onClick={() => setIndex(index - 1)}>Next Button</button>
    </div>
  )
}