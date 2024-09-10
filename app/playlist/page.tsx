import React from 'react'
//쿼리스트링 ?list=10
const page = (props:any) => {
  return (
    <div>
      playlist {props.searchParams.list}
    </div>
  )
}

export default page
