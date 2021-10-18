import React, { Fragment } from 'react'

interface Props {
  
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <Fragment>
      
      <main style={styles}>{children}</main>
    </Fragment>
  )
}

const styles = {
  background: '#f9f9f9',
  width: '100%'
}

export default Layout
