import React from 'react'

export default async function Details({ params }) {
  const {id} = await params
  // console.log(p);


  return (
    <div className='min-h-screen pt-20'>
      {/* <p>{p.id}</p> */}
    </div>
  )
}
