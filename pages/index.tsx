import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Header} from '../components/Header/Header';
import data from '../public/data.json';

const Home: NextPage = () => {
  return (
      <Header headerData={data}/>
  )
}

export default Home
