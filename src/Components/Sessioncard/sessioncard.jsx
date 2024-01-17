import React from 'react'
import './Sessioncard.css'
import imge from 'https://picsum.photos/903/909'
import { CiStar } from "react-icons/ci";
import LikeButton from '../Likebutton/Like';

function Sessioncard() {
  return (
    <div>
      <div className='content'>
        <img src={imge} className='cover'/ >
            <footer className='foot'>
                <div className='lift'>
                <h2>Title of the session</h2>
                <CiStar/>
                </div>
                <div className='right'>
                <h2>price</h2>
                <LikeButton />
                </div>
            </footer>
      </div>
    </div>
  )
}

export default Sessioncard
