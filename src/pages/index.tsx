import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import AstrologyQuery from '@/components/AstrologyQuery'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
      <main className={styles.main}>
        <AstrologyQuery />
      </main>
    </>
  )
}
