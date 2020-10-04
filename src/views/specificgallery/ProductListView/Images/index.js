import React, {useState} from 'react';
import Gallery from 'react-grid-gallery';
import styled from 'styled-components';
import {
  Trash2 as TrashIcon,
  RefreshCcw as UpdateIcon
} from 'react-feather';
 


const ItensControls = styled.div`
  margin-top: 8px;
`;

const Button = styled.button`
  background: transparent;
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
  transition: .4s all;

  &:hover{
    color: gray;
  }
`;

export default function Images(){

  const [images, setImages] = useState([
    {
      src: "/static/images/gallery/11.jpg",
      thumbnail: "/static/images/gallery/11.jpg",
      caption: "Uma breve descrição pode aparecer aqui",
    },
    {
      src: "/static/images/gallery/12.jpg",
      thumbnail: "/static/images/gallery/12.jpg",
      caption: "Uma breve descrição pode aparecer aqui",
    },
    {
      src: "/static/images/gallery/13.jpg",
      thumbnail: "/static/images/gallery/13.jpg",
      caption: "Uma breve descrição pode aparecer aqui",
    },
    {
      src: "/static/images/gallery/14.jpg",
      thumbnail: "/static/images/gallery/14.jpg",
      caption: "Uma breve descrição pode aparecer aqui",
    },
    {
      src: "/static/images/gallery/15.jpg",
      thumbnail: "/static/images/gallery/15.jpg",
      caption: "Uma breve descrição pode aparecer aqui",
    },
    {
      src: "/static/images/gallery/15.jpg",
      thumbnail: "/static/images/gallery/15.jpg",
      caption: "Uma breve descrição pode aparecer aqui",
    },
    {
      src: "/static/images/gallery/16.jpg",
      thumbnail: "/static/images/gallery/16.jpg"
    },
    {
      src: "/static/images/gallery/17.jpg",
      thumbnail: "/static/images/gallery/17.jpg"
    },
    {
      src: "/static/images/gallery/18.jpg",
      thumbnail: "/static/images/gallery/18.jpg"
    },
    {
      src: "/static/images/gallery/19.jpg",
      thumbnail: "/static/images/gallery/19.jpg"
    },
    {
      src: "/static/images/gallery/20.jpg",
      thumbnail: "/static/images/gallery/20.jpg"
    },
    {
      src: "/static/images/gallery/21.jpg",
      thumbnail: "/static/images/gallery/21.jpg"
    }


  ])

  function handleSelected(index){

  }
  return(
    <div style={{marginTop: '20px' }}>
      <Gallery
      images={images}
      onSelectImage={handleSelected}
      margin={1}
      enableImageSelection={false}
      imageCountSeparator={" de "}
      showLightboxThumbnails={true}
      customControls={[
        <ItensControls> 
          <Button type='button'> <TrashIcon /> </Button>,
          <Button type='button'> <UpdateIcon /> </Button>
        </ItensControls>
    ]}
     />
    </div>
    
  )
}