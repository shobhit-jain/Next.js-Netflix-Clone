import { NextPage } from 'next'
import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
import dashify from 'dashify'

export const Testing_Stuff: NextPage = () => {
  return (
    <div className="text-center">
      <div className="py-5 text-xl">Testing stuff</div>

      <Get_Dummy_Data />
      <Post />
    </div>
  )
}

const Get_Dummy_Data = () => {
  const { data } = useSWR('/api/demo/get/dummy-data')

  console.log(data)

  return (
    <>
      <h1 className="font-600 text-white py-2 bg-blue">Get Data</h1>
      <div>
        {!data ? (
          <div>loading . .</div>
        ) : (
          data.DemoData.map((i: any) => (
            <div key={i.id}>
              <li>{i.title}</li>
            </div>
          ))
        )}
      </div>
    </>
  )
}

const Post = () => {
  const [content, setContent] = React.useState({
    title: undefined,
    body: undefined,
  })
  const onChange = (e: any) => {
    const { value, name } = e.target
    setContent((prevState) => ({ ...prevState, [name]: value }))
  }
  const onSubmit = async () => {
    const { title, body } = content
    await axios
      .post('/api/demo/post/dummy-data', {
        title,
        slug: dashify(title),
        body,
      })
      .then(() => {
        alert('added')
      })
      .catch((e) => console.log(e))
  }

  return (
    <div className="text-center py-5 flex justify-center items-center">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        className="border border-light_grey p-2 ml-2 rounded mr-5 shadow-md"
        value={content.title}
        onChange={onChange}
        required
      />
      <label htmlFor="body">Body</label>
      <textarea
        name="body"
        value={content.body}
        onChange={onChange}
        required
        className="border rounded mr-5 ml-2 border-light_grey shadow-md p-2"
      />
      <button
        onClick={onSubmit}
        className="bg-blue bg-opacity-70 text-white py-2 px-3 rounded hover:bg-opacity-90"
      >
        POST
      </button>
    </div>
  )
}

export default Testing_Stuff
