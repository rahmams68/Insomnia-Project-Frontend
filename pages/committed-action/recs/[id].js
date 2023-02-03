import Head from 'next/head'
import Navbar from '../../../components/Navbar'
import Sidebar from '../../../components/Sidebar'

export default function CommittedActionRecDetail() {
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
            </main>
          </div>
        </div>
      )
}