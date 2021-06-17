import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GetStaticProps } from 'next'
import fetchApi from '../core/services/fetch.service'
import GifTable from '../components/table'
import SearchComponent from '../components/search'
import { useState } from 'react'


export default function Home(data: any) {

const [newData , setData] = useState(data.data);

const newDatafromSearch = (newQuery: any) => {
  setData(newQuery)
}

  return (
      <div>
        <h1>Giphy Redone</h1>
        <SearchComponent query={newDatafromSearch} />
        <GifTable gifs={newData} />
        </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const data = await fetchApi('trending')

  return {
    props: {data}
  }

}