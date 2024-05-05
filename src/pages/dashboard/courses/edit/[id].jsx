import { useRouter } from 'next/router'
import React from 'react'

function EditCourse() {
  const router = useRouter()
  const {id} = router.query;
  return (
    <div>EditCourse {id}</div>
  )
}

export default EditCourse
