import type { NextPage } from 'next'
import Head from 'next/head'
import MainBanner from '../components/Main/Banner'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import banners from '../data/banners'
import { styled } from '../stitches.config'
import { FooterColumns } from '../components/Footer'
import { Contact } from '../components/Main/Contact'
import { NavColaborate } from '../components/Main/ColaborateNav'
import DropDownMenu from '../components/Main/DropDownMenu'
import Swiper from 'swiper'
import { IconJarLogoIcon } from '@radix-ui/react-icons'

const HeaderContainer = styled('div', {
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fundmadre | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <main>
        <Hero />
        <MainBanner text={banners.mainPage} />
        <NavColaborate sliders={IconJarLogoIcon.arguments} />
      </main>
      <footer>
        <FooterColumns />
      </footer>
    </>
  )
}

export default Home
