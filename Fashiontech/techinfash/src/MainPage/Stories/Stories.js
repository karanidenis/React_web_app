import React from 'react';
import './Stories.css';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { shuffle } from 'lodash';

function Stories() {
  const stories = [
    { id: 1,
       src: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_640.jpg" },

    { id: 2, 
      src: "https://images.pexels.com/photos/9154696/pexels-photo-9154696.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 3, 
      src: "https://images.pexels.com/photos/15761310/pexels-photo-15761310/free-photo-of-girls-standing-in-house-corridor.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 4, 
      src: "https://images.pexels.com/photos/15673042/pexels-photo-15673042/free-photo-of-man-sunglasses-people-woman.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 5,
       src: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400" },
    
    { id: 6,
       src: "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_640.jpg" },

    { id: 7,
       src: "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=400" },
    
       { id: 8,
       src: "https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=400" },
    
       { id: 9,
       src: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=400" },
    
       { id: 10,
       src: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=400" },
    
       { id: 11,
       src: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=400" },
    
    { id: 12,
       src: "https://images.pexels.com/photos/794063/pexels-photo-794063.jpeg?auto=compress&cs=tinysrgb&w=400" },
    
    { id: 13,
         src: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=400" },
    
    { id: 14,
       src: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=400" },
    ]

const shuffledstories = shuffle(stories);

  return (
    <>
      <div className='stories__title'>
        <div><h3>Stories</h3></div>
        <div className='watch'><h3>Watch all</h3></div>
      </div>
      <div className="stories__avatars-container">
        <div className="stories__avatars">
          { shuffledstories.map((story) => (
        <Tooltip title="Feature locked" placement="bottom">
            <Avatar key={story.id} src={story.src} sx={{ width: 90, height: 90 }} />
        </Tooltip>
          ))}   
        </div>
      </div>
    </>
  );
}

export default Stories;
