import React from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import settings from "../settings"

const SEO = ({
  title = settings && settings.meta && settings.meta.title,
  description = settings && settings.meta && settings.meta.description,
  image = settings &&
    settings.meta &&
    settings.meta.social &&
    settings.meta.social.graphic,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta name="twitter:creator" content='@kuli_coding' key="twhandle" />
    </Head>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

export default SEO