import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="http://www.tophatsoft.com/about.php" target="_blank" rel="noopener noreferrer">BTS</a>
        <span className="ml-1">&copy; 2020 TopHat.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="http://www.tophatsoft.com/about.php" target="_blank" rel="noopener noreferrer">TopHat for BTS</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
