import React from "react"
import { graphql } from "gatsby"
import Button from "../components/Button/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Post from "../components/Post/Post"

const ContentWrapper = styled.div`
  width: 65%;
  height: calc(100vh - 80px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  h1 {
    font-size: 85px;
    margin: 0;
    width: 40%;
    line-height: 0.9;
  }

  p {
    margin: 20px 0 40px;
    width: 34%;
  }
`

const ImageWrapper = styled(GatsbyImage)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 35%;
  height: 100vh;
  object-fit: cover;
`

const IndexPage = ({ data }) => {
  const image = getImage(data.file)

  return (
    <>
      <ContentWrapper>
        <Post />
        <h1>Your new space</h1>

        <p>
          While artists work from real to the abstract, architects must work
          from the abstract to the real.
        </p>
        <Button>estimate project</Button>
      </ContentWrapper>
      <ImageWrapper image={image} alt={data.file.name} />
    </>
  )
}

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      name
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: DOMINANT_COLOR
          quality: 100
        )
      }
    }
  }
`

export default IndexPage
