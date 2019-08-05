/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Layout, Header, Footer } from 'gatsby-theme-layout'

export default ({
  title,
  date,
  children,
}) =>
  <Layout>
    <Header />
    <Styled.root>
      {children}
    </Styled.root>
    <Footer />
  </Layout>
