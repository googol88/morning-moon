import React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/layout.js";
import LessonNugget from '../components/lessonNugget.js';

export default ({ data }) => {
    console.log(data);
    return (
    <Layout>
        <h1>{ data.allMarkdownRemark.totalCount } Lessons</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <LessonNugget 
                key={node.id}
                date={node.frontmatter.date}
                subject={node.frontmatter.subject}
                title={node.frontmatter.title}
                unit={node.frontmatter.unit}
                text={node.excerpt}
                slug={node.fields.slug}
            />
        ))}
    </Layout>
    );
}

export const query = graphql`
query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            subject
            title
            unit
          }
          excerpt
          fields{
              slug
          }
        }
      }
    }
  }
  `;