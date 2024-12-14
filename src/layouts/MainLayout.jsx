import React, { Children } from 'react'

function MainLayout(Children) {
  return (
    <div>
        <header>Header</header>
<main>{Children}</main>
        <footer>footer</footer>
    </div>
  )
}

export default MainLayout