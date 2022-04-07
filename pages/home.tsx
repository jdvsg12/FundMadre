import type { NextPage } from 'next'
import Head from 'next/head'
import MainBanner from '../components/Main/Banner'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import banners from '../data/banners'
import { styled } from '../stitches.config'
import { FooterColumns } from '../components/Footer'

import { MainForm } from '../components/Main/Contact'
import { NavColaborate } from '../components/Main/ColaborateNav'
import { MainBannerForm, MainBannerFormKit, MainBannerFormVoluntary} from '../components/Main/Form'

const HeaderContainer = styled('div', {
  paddingX: '3rem',
  paddingTop: '0.75rem',
  paddingBottom: '0.38rem',
  marginBottom: '0.37rem',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
});



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fundmadre</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <main>
        <Hero />
        <MainBanner text={banners.mainPage} />
        <NavColaborate/>
      </main>
      <footer>
      <FooterColumns></FooterColumns>
      </footer>
    </>
  )
}

export default Home
