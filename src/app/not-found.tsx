import React from 'react'
import Link from 'next/link'

function Notfound() {
  return (
    <div className='place-items-center '>
      <h1>Not found – 404!</h1>
      <div>
        <Link href="/">Go back to Home</Link>
      </div>
  </div>
  )
}

export default Notfound