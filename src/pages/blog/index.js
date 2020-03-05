import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        

      
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/climbSlide.JPG')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 white -0.5rem 0 0 white',
              backgroundColor: 'white',
              color: '#FF00C7',
              padding: '1rem',
            }}
          >
            Blog 
          </h1>
        </div>
        <h1 className="has-text-centered">coming soon.</h1>
        {/*
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
          */}
      </Layout>
    )
  }
}
