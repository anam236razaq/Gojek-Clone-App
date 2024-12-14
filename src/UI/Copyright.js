import React from 'react'

export default function Copyright({settings}) {
  return (
    <div className="container-fluid copyright-container px-4 d-flex flex-column align-items-center justify-content-center">
        <p>{settings.copyright}</p>
        <p>The usage of the terms “Gojek”, and “Uber” are purely for illustrative purposes. We have no affiliation with Uber Technologies Inc. or Gojek. Our company offer white label solutions for on demand mobile apps across the world and therefore, these terms have been used in a referential capacity to bring more clarity for our clients.</p>
  </div>
  )
}
