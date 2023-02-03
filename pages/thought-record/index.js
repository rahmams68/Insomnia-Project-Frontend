import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import style from '../../styles/Form.module.css'

export default function ThoughtRecord() {
    return (
        <div className='main-container'>
          <Head>
            <title>Logbook Terapi Insomnia</title>
            <link rel="icon" href="/images/logo.png"/>
          </Head>
          
          <Navbar />
    
          <div className='body'>
            <Sidebar />
    
            <main>
              <div className={style.container}>
                <div className={style.info}>
                    <h2>Thought Record</h2>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </main>
          </div>
        </div>
      )
}