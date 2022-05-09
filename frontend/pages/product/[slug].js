import React from 'react'
import { useRouter } from 'next/router'

const Slug = () => {
    const router = useRouter()
    const { slug } = router.query
  return (
      <div>
          <p>Post: {slug}</p>
      </div>
  )
}

export default Slug