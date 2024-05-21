import * as React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <main>
      <h1>
        Project Euler Problems
      </h1>
      <div className="problem">
        <h2>Todos</h2>
        <ul>
          <li>Make site prettier</li>
          <li>Make problems interactve</li>
          <li>Add menu</li>
          <li>Make Problem component</li>
          <li>Add hooks</li>
          <li>Migrate to TypeScript</li>
        </ul>
      </div>
      {children}
    </main>
  )
}

export default Layout

