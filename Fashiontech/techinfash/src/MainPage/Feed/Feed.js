import React, { useRef, useState, useEffect} from 'react';
import './Feed.css';
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FaRegComment } from "react-icons/fa";
import { useUser } from "@clerk/clerk-react";

// import LensBlurTwoToneIcon from '@mui/icons-material/LensBlurTwoTone';

const ImgContainer = (props) => {
    const [spans, setSpans] = useState(0)
    const imageRef = useRef(null)

    const updateSpans = () => {
        const height = imageRef.current.clientHeight;
        const newSpans = Math.ceil(height / 10 + 1);
        setSpans(newSpans);
    }

    useEffect(()=>{
        imageRef.current.addEventListener('load', updateSpans)
    }, [])

    return (
        <div 
            style={{ gridRowEnd: `span ${spans}`}}
            className='feed__post' key={props.image.id}
        >
            <img
                src={props.image.src}
                ref={imageRef}
                alt="fashion"
            />
                {/* <LensBlurTwoToneIcon className='trendIcon'>
                </LensBlurTwoToneIcon> */}
            
            <div className='feed__footer'>
                <div className='feed__footer__left'>
                    <Avatar src={props.avatars.find((avatar) => avatar.id === props.image.id)?.src} />
                    <span>{props.user ? props.user.name : ''}</span>
                </div>
                <div className='feed__footer__right'>
                    <FavoriteBorderIcon />
                    <span>15</span>
                    <FaRegComment />
                </div>
            </div>
        </div>
    )
}

function Feed(props) {
    const images = [
        {   id: 1,
            src : "https://img.freepik.com/premium-photo/young-woman-portrait-green-high-fashion-clothing-pastel-colors-generative-ai_108146-4860.jpg"},
        
        {   id: 2,
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW8LjzKo1F6XzT0tbLviXZYY1I_eKqOIG0GNK97jkWZj8IRUnaHqvEhtSPBxv6Itr9qEU&usqp=CAU"},
            
        {   id: 3,
                src: "https://media.istockphoto.com/id/1297215020/photo/collage-with-woman-and-greek-goddess-wearing-headphones.jpg?b=1&s=612x612&w=0&k=20&c=CQmeN0_MaqsXH-tsPuYk57C10r1nMVk-SIUkpvr5DFY="},

        {   id: 4,
                src: "https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=400"},

        {   id: 5,
                src: "https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg?auto=compress&cs=tinysrgb&w=400"},

        {   id: 6,
                src: "https://images.pexels.com/photos/13577670/pexels-photo-13577670.jpeg?auto=compress&cs=tinysrgb&w=400"},

        {   id: 7,
                src: "https://i.pinimg.com/236x/bd/f5/02/bdf50239f020caa130c3a19a73b50e58.jpg"},

        {   id: 8,
                src: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_710/https://www.lovehappensmag.com/blog/wp-content/uploads/2022/09/GettyImages-118246780-edited.jpg"},
            
        {   id: 9,
                src: "https://i.pinimg.com/236x/3a/bc/c9/3abcc9e05188d3b8478ef9e5ab612656.jpg"},

        {   id: 10,
                src: "https://i.pinimg.com/474x/0c/40/70/0c40701c2766fe23ce724e30f67a36ee.jpg"},

        {   id: 11,
                src: "https://i.pinimg.com/236x/3b/28/d6/3b28d617abcf50e614c0617157080cb4.jpg"}
    ]
                console.log(images.map((image) => image.src))

    const avatars = [
        {   id: 1,
            src: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"},

        {   id: 2,
            src: "https://media.istockphoto.com/id/1299026534/photo/nairobi-kenya.jpg?s=612x612&w=0&k=20&c=xwCQ441cTHFBTZpb8ihvVwqqtTZjmees1C3xdJc_nfw="},

        {   id: 3,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStRtKiy0IN58TrADVn4uYZhmPfzuh0Cioyo71i3QLC9gnVFOihwxBAFyZNhHGM2XuPbEs&usqp=CAU"},

        {   id: 4,
            src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"},

        {   id: 5,
            src: "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_640.jpg"},
        
        {   id: 6,
            src: "https://images.pexels.com/photos/13996056/pexels-photo-13996056.jpeg?auto=compress&cs=tinysrgb&w=400"},

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

        const { user } = useUser();                          
        const users = [
            {   id: 1,
                name: user.username},

            {   id: 2,
                name: "stella"},

            {   id: 3,
                name: "tess"},
            
            {   id: 4,
                name: "Kass_i"},
                
            {   id: 5,
                name: "Dee"},
            
            {   id: 6,
                name: "glory"},

            {  id: 7,
                name: "kessy"},

            {  id: 8,
                name: user.firstName},

            {  id: 9,
                name: user.lastName},

            {  id: 10,
                name: "cake"},

            {  id: 11,
                name: "loyk"},
        ]

  return (<>
        <div className='feeds'>
            <div className='feeds__header'>
                <div>Feed</div>
                <div>Latest</div>
            </div>
            <div className='feed__posts'>
                {images.map((image) => {
                    const user = users.find((user) => user.id === image.id);
                    return <ImgContainer image={image} avatars={avatars} user={user} />
                })}
            </div>
        </div>
     </>
);
            }
export default Feed;