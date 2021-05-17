import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const ThumbnailWrapper = styled.div`
  height: 260px;
  flex-basis: 20%;
  width: 260px;
  position: relative;
  margin: 10px;
  box-sizing: border-box;
  transition: transform 0.5s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.5s ease;
  }

  &:hover {
    transform: scale(1.05);
    cursor: pointer;

    &:before {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 1333px) {
    flex-basis: 33.33%;
  }
  @media (max-width: 1073px) {
    flex-basis: 33.33%;
  }
  @media (max-width: 815px) {
    flex-basis: 50%;
  }
  @media (max-width: 555px) {
    flex-basis: 100%;
  }
`

const StyledImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Thumbnail = ({ image, alt, handleOpen, index }) => {
  return (
    <ThumbnailWrapper onClick={() => handleOpen(index)}>
      <StyledImage image={image} alt={alt} />
    </ThumbnailWrapper>
  )
}

export default Thumbnail
