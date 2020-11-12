import React from 'react';
import cat from './react-builds-cat.png';
import './Image.css';
// import frog from './iseeuu.png';

console.log(cat); // /static/media/react-builds-cat.45f7f4d2.png
// console.log(frog); // /static/media/react-builds-cat.45f7f4d2.png

function Image() {
    // Import result is the URL of your image.
    return (
        <>
            <img className='size' src={cat} alt="Cat" />
            {/* <div className='cat'></div> */}
            {/* <img src={frog} alt="Frog" /> */}
        </>
    )
}

export default Image;