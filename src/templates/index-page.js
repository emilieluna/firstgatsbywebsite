import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  description,
  imageOne,
  descriptionOne,
  imageTwo,
  descriptionTwo,
  imageThree,
  descriptionThree,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        
      
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'white 0.5rem 0px 0px, white -0.5rem 0px 0px',
            backgroundColor: 'white',
            color: '#fb486e',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen has-text-centered"
          style={{
            boxShadow:
              'white 0.5rem 0px 0px, white -0.5rem 0px 0px',
            backgroundColor: 'white',
            color: '#fb486e',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
        
     </div>
    
 
    </div>
  
    
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  imageOne: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  descriptionOne: PropTypes.string,
  imageTwo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  descriptionTwo: PropTypes.string,
  imageThree: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  descriptionThree: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        imageOne={frontmatter.image_one}
        descriptionOne={frontmatter.description_one}
        imageTwo={frontmatter.image_two}
        descriptionTwo={frontmatter.description_two}
        imageThree={frontmatter.image_three}
        descriptionThree={frontmatter.description_three}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        description 
        image_one {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description_one
        image_two {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description_two
        image_three {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description_three
      }
    }
  }
`
