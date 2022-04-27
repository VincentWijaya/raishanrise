import React from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import settings from "../settings"

const SEO = (props) => {
  const { title, description, image } = props
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
    </Head>
  )
}

SEO.defaultProps = {
  title: settings && settings.meta && settings.meta.title,
  description: settings && settings.meta && settings.meta.description,
  image:
    settings &&
    settings.meta &&
    settings.meta.social &&
    settings.meta.social.graphic,
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

export default SEO