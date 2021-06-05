import { Head } from '@/components/common/head'
import { NextPage } from 'next'
import React from 'react'
import axios from 'axios'
import dashify from 'dashify'
import { useForm } from 'react-hook-form'

export const Post: NextPage = () => {
  const { register, handleSubmit } = useForm()

  // const onSubmit = (data) => console.log(data)

  const onSubmit = async (data: { title: string; body: string }, e: any) => {
    const { title, body } = data

    await axios
      .post('/api/demo/post/dummy-data', {
        title,
        slug: dashify(title),
        body,
      })
      .then(() => {
        alert('added')
        e.target.reset()
      })
      .catch((e) => console.log(e))
  }

  return (
    <>
      <Head title="Post" />
      <h1 className="text-center text-white bg-blue py-5 font-600">
        Do a Post
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-center py-5 flex justify-center items-center"
      >
        <label htmlFor="title">Title</label>

        <input
          type="text"
          {...register('title')}
          required
          name="title"
          className="border border-light_grey p-2 ml-2 rounded mr-5 shadow-md"
          placeholder="title"
        />

        <label htmlFor="body">Body</label>
        <textarea
          {...register('body')}
          required
          name="body"
          placeholder="body"
          className="border rounded mr-5 ml-2 border-light_grey shadow-md p-2"
        />
        <button className="bg-blue bg-opacity-70 text-white py-2 px-3 rounded hover:bg-opacity-90">
          POST
        </button>
      </form>
    </>
  )
}

export default Post
