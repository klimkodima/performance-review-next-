import type { NextPage } from 'next';
import Head from 'next/head';
import Grid from '@mui/material/Grid';
import { Layout } from '../components/layout';
import { Header } from '../components/header';
import { Filter } from '../components/filter';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Performance Review</title>
      </Head>
      <div className='app'>
        <Header />
        <main className='dashboard'>
          <Filter />
          <Grid container className='widgets'>
          </Grid>
        </main>
      </div>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Home

