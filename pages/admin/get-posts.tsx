import { Head } from '@/components/common/head'
import { NextPage } from 'next'
import React from 'react'
import useSWR from 'swr'

export const Get_Posts: NextPage = () => {
  const { data } = useSWR('/api/demo/get/dummy-data')

  console.log(data)
  return (
    <>
      <Head title="Get Posts" />
      <h1 className="text-center text-white bg-blue py-5 font-600">
        Getting all Posts
      </h1>

      <div className="py-5 px-[20px] text-center">
        {!data ? (
          <div>loading . .</div>
        ) : (
          data.DemoData.map(
            (i: { id: string; title: string; body: string }) => (
              <div
                key={i.id}
                className="text-left inline-block my-5 p-5 shadow w-full sm:w-[350px] sm:mx-5"
              >
                <h1 className="font-500">{i.title}</h1>
                <p className="font-serif">{i.body}</p>
              </div>
            )
          )
        )}
      </div>

      <div>Hello</div>
    </>
  )
}

export default Get_Posts
