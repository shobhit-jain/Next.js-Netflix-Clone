import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { NextPage } from 'next'
import useSWR from 'swr'
import React from 'react'
import { Head } from '@/components/common/head'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import dashify from 'dashify'

export const Edit_Post: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { register, handleSubmit } = useForm()

  const url = `/api/demo/${id}`
  const { data } = useSWR(id ? url : null)

  const onSubmit = async (data: { title: string; body: string }) => {
    const { title, body } = data

    await axios
      .put(url, {
        title,
        slug: dashify(title),
        body,
      })
      .then(() => {
        alert('edited')
        // e.target.reset()
      })
      .catch((e) => console.log(e))
  }

  //
  const onDelete = async () => {
    await axios.delete(url)
    router.back()
  }

  return (
    <>
      <Head title="Editing a post" />
      <div className="text-center text-white bg-blue py-5 font-600">
        Edit a Post
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-center py-5 flex justify-center items-center"
      >
        <label htmlFor="title">Title</label>

        <input
          type="text"
          {...register('title')}
          required
          defaultValue={!data ? '' : data.title}
          name="title"
          className="border border-light_grey p-2 ml-2 rounded mr-5 shadow-md"
          placeholder="title"
        />

        <label htmlFor="body">Body</label>
        <textarea
          {...register('body')}
          required
          defaultValue={!data ? '' : data.body}
          name="body"
          placeholder="body"
          className="border rounded mr-5 ml-2 border-light_grey shadow-md p-2"
        />
        <button className="bg-blue bg-opacity-70 text-white py-2 px-3 rounded hover:bg-opacity-90">
          Submit
        </button>
      </form>

      <div className="text-center">
        <button
          type="button"
          className="border p-2 text-white bg-blue rounded"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </>
  )
}

export default Edit_Post
