import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        
        <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-1 has-text-weight-bold is-bold-light pinkColor">
                BLOG
              </h2>
              <BlogRoll />
              </div>
          </div>
        </div>
      </div></section>
      
       
       
    
      </Layout>
    )
  }
}
