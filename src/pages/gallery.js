import React, { useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import PageInfo from "../components/PageInfo/PageInfo"
import Thumbnail from "../components/Thumbnail/Thumbnail"
import Modal from "../components/Modal/Modal"

const pageData = {
  title: "gallery",
  paragraph: `Galleries come in all shapes and sizes with hundreds popping up every day it's hard to sift through the low-quality ones to find the real gems. Here's 13 that are definitely worth considering to bookmark...`,
}

const GalleryWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  height: 100%;
`

export const query = graphql`
  query queryImagesGallery {
    allDatoCmsGalleryImage {
      nodes {
        id
        imageDescription
        imageTitle
        image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: TRACED_SVG
            imgixParams: { fit: "clip", q: 80 }
          )
        }
      }
    }
  }
`

const GalleryPage = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)

  const {
    allDatoCmsGalleryImage: { nodes },
  } = data

  const handleOpen = i => {
    setIsModalOpen(true)
    setSelectedImage(i)
  }

  const handleClose = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  const handleNextRequest = length => {
    selectedImage !== length - 1
      ? setSelectedImage(selectedImage + 1)
      : setSelectedImage(0)
  }
  const handlePrevRequest = length => {
    selectedImage !== 0
      ? setSelectedImage(selectedImage - 1)
      : setSelectedImage(length - 1)
  }

  return (
    <>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />

      <GalleryWrapper>
        {nodes.map((item, i) => {
          const image = getImage(item.image)
          return (
            <Thumbnail
              image={image}
              key={i}
              alt={item.imageTitle}
              handleOpen={handleOpen}
              index={i}
            />
          )
        })}
      </GalleryWrapper>

      {isModalOpen && (
        <Modal
          images={nodes}
          handleClose={handleClose}
          handleNextRequest={handleNextRequest}
          handlePrevRequest={handlePrevRequest}
          selectedImage={selectedImage}
        />
      )}
    </>
  )
}

export default GalleryPage
