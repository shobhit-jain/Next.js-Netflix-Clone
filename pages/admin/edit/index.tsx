import { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import { Head } from '@/components/common/head'

export const List: NextPage = () => {
  const { data } = useSWR('/api/demo/get/dummy-data')

  console.log(data)

  return (
    <>
      <Head title="Edit Posts" />
      <div className="text-center text-white bg-blue py-5 font-600">
        Edit Posts
      </div>

      <div className="text-center py-5">
        {!data ? (
          <div>loading . .</div>
        ) : (
          data.DemoData.map((entry) => (
            <div key={entry.id}>
              <Link href={`/admin/edit/${entry.id}`}>
                <a>{entry.title}</a>
              </Link>
              <br />
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default List
