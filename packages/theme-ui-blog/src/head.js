import React from 'react'
import { Helmet } from 'react-helmet'

export default ({
  lang = 'en-us',
  title,
  excerpt,
  children,
  ...props
}) =>
  <Helmet
    {...props}
    htmlAttributes={{
      lang,
    }}>
    {title && <title>{title}</title>}
    {excerpt && <meta name='description' content={excerpt} />}
    {children}
  </Helmet>
