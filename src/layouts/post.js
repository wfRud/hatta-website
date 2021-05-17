import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { graphql } from "gatsby"

export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      title
      id
      featuredImage {
        gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
      }
      author
      articleContent {
        ... on DatoCmsHeading {
          headingContent
          id
        }
        ... on DatoCmsParagraph {
          paragraphContent
          id
        }
        ... on DatoCmsArticleImage {
          articleImage {
            gatsbyImageData(
              width: 600
              height: 400
              layout: CONSTRAINED
              placeholder: DOMINANT_COLOR
              imgixParams: { fit: "clip" }
            )
          }
          id
        }
      }
    }
  }
`

const PostLayout = ({ data }) => {
  const image = getImage(data.datoCmsArticle.featuredImage)

  return (
    <div>
      <h1>{data.datoCmsArticle.title}</h1>
      <p>{data.datoCmsArticle.author}</p>
      <GatsbyImage image={image} alt={data.datoCmsArticle.title} />
      <div>
        {data.datoCmsArticle.articleContent.map(item => {
          const [itemKey] = Object.keys(item)

          switch (itemKey) {
            case "paragraphContent":
              return <p key={item.id}>{item[itemKey]}</p>
            case "headingContent":
              return <h2 key={item.id}>{item[itemKey]}</h2>
            case "articleImage":
              const articleImage = getImage(item[itemKey])
              return <GatsbyImage image={articleImage} alt={""} key={item.id} />
            default:
              return null
          }
        })}
      </div>
    </div>
  )
}

export default PostLayout
