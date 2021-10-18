import React from 'react'
import Header from './Header'
import SideDrawer from './SideDrawer'

interface Props {
  
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div style={{display: 'flex'}}>
      <Header />
      <SideDrawer />
      <main style={styles.main}>{children}</main>
    </div>
  )
}


const styles = {
  main: {
    background: '#f9f9f9',
    width: '100%',
  },
}

export default Layout
