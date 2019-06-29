import React from 'react'
import Layout from '../components/layout'
import Tours from '../components/tours/Tours'
import { graphql } from 'gatsby'
const tours = ({ data }) => {
  // console.log(data)

  return (
    <Layout>
      <Tours tours={data.tours.edges} />
    </Layout>
  )
}
export default tours
export const getTours = graphql`
  query {
    tours: allContentfulTour {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
