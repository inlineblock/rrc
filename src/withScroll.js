import React from 'react'
import ScrollIntoView from './ScrollIntoView'
import getDisplayName from './helpers/getDisplayName'

const withScroll = (Component, options = {}) => {
  const {
    propId = (props) => (
      props && props.location && props.location.hash
    ),
    alignToTop = true
  } = options
  const WithScroll = (props) => (
    <ScrollIntoView id={propId(props)} alignToTop={alignToTop} >
      <Component {...props} />
    </ScrollIntoView>
  )

  WithScroll.displayName = `withScroll(${getDisplayName(Component)})`

  return WithScroll
}

export default withScroll
