import MouseStalker from '@/hooks/MouseStalker'

// css import
import styles from '../styles/page.module.css'
import Header from '@/components/organisms/Header'
import BasicPageLayout from '@/components/templates/BasicPageLayout'

export default function Home() {
  return (
    <>
      <MouseStalker />
      <BasicPageLayout>sample code</BasicPageLayout>
    </>
  )
}
