import MouseStalker from '@/hooks/MouseStalker'

// css import
import styles from '../styles/page.module.css'
import Header from '@/components/organisms/Header'
import BasicPageLayout from '@/components/templates/BasicPageLayout'
import Hero from '@/components/organisms/Hero'

export default function Home() {
  return (
    <>
      <MouseStalker />
      <BasicPageLayout>
        <Hero />
      </BasicPageLayout>
    </>
  )
}
