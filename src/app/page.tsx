import MouseStalker from '@/hooks/MouseStalker'

// css import
import styles from '../styles/page.module.css'

// components import
import Header from '@/components/organisms/Header'
import BasicPageLayout from '@/components/templates/BasicPageLayout'
import Hero from '@/components/organisms/Hero'
import MainLayout from '@/components/templates/MainLayout'
import CardBox from '@/components/organisms/CardsBox'

export default function Home() {
  return (
    <>
      <MouseStalker />
      <BasicPageLayout>
        <Hero />
        <MainLayout>
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
        </MainLayout>
      </BasicPageLayout>
    </>
  )
}
