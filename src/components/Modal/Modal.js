import React from "react"
import styled, { keyframes } from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PrevInlineICon from "../../assets/iCons/arrow_back.inline.svg"
import NextInlineIcon from "../../assets/iCons/arrow_forward.inline.svg"
import CloseInlineIcon from "../../assets/iCons/close_black.inline.svg"

// Animations
const ModalAnimation = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`

const ImageAnimation = keyframes`
 0% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`

const TextAnimation = keyframes`
  from {
    opacity: 0
  }
  to {
    transform: 1
  }
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`

const ModalPreview = styled.div`
  position: relative;
  width: 70vw;
  height: 75vh;
  background-color: white;
  animation: ${ModalAnimation} 0.5s ease-in-out;
`

const ModalContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 5%;
`

const ImageWrapper = styled.div`
  flex: 1 0 0;

  height: 100%;
`

const TextWrapper = styled.div`
  flex: 1 0 0;
  height: 100%;
  padding: 20px 0 20px 50px;

  h1 {
    animation: ${TextAnimation} 0.8s ease-in-out;
  }

  p {
    animation: ${TextAnimation} 0.8s 0.4s ease-in-out;
  }
`

const ModalImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${ImageAnimation} 0.8s ease-in-out;
`

const PrevArrow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3%;
  height: 100%;
  transition: background-color 0.3s ease-in-out, fill 0.3s ease-in-out;
  z-index: 9999;

  svg {
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
  }

  &:hover svg {
    transform: scale(1.3);
    fill: #fff;
  }
`
const NextArrow = styled(PrevArrow)`
  top: 0;
  left: unset;
  right: 0;
`

const Close = styled.div`
  position: absolute;
  top: -45px;
  right: -45px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  z-index: 9999;
  svg {
    transition: transform 1s ease, fill 1s ease;
  }

  &:hover svg {
    cursor: pointer;
    transform: scale(1.4) rotate(180deg);
    fill: #fff;
  }
`

const isModalWrapper = e =>
  e.target.classList.contains(ModalWrapper.styledComponentId)

const Modal = ({
  images,
  handleClose,
  handlePrevRequest,
  handleNextRequest,
  selectedImage,
}) => {
  const image = getImage(images[selectedImage].image),
    title = images[selectedImage].imageTitle,
    description = images[selectedImage].imageDescription

  return (
    <ModalWrapper onClick={e => isModalWrapper(e) && handleClose()}>
      <ModalPreview>
        <Close onClick={handleClose}>
          <CloseInlineIcon />
        </Close>

        <PrevArrow onClick={() => handlePrevRequest(images.length)}>
          <PrevInlineICon />
        </PrevArrow>

        <ModalContent>
          <ImageWrapper>
            <ModalImage image={image} alt={title} />
          </ImageWrapper>

          <TextWrapper>
            <h1>{title}</h1>
            <p>{description}</p>
          </TextWrapper>
        </ModalContent>

        <NextArrow onClick={() => handleNextRequest(images.length)}>
          <NextInlineIcon />
        </NextArrow>
      </ModalPreview>
    </ModalWrapper>
  )
}

export default Modal
