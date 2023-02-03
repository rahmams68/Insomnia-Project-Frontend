import Head from 'next/head'
import Link from 'next/link'
import FormValueIdentification from '../components/ValueIdentification'

export default function Home() {
  return (
    <div className='main-container'>
      <Head>
        <title>Logbook Terapi Insomnia</title>
        <link rel="icon" href="/images/logo.png"/>
      </Head>
      
      <nav className='navbar'>
        <div className='left'>
          <img src='/images/nav-logo.png' alt='logo'/>
          <h1 className='title'>Logbook Terapi Insomnia</h1>
        </div>

        <div className='right'>
          <button>Logout</button>
        </div>
      </nav>

      <div className='body'>
        <nav className='sidebar'>
            <div className='menu'>
              <img src='/images/home.png' alt='icon'/>
              <Link href=''><a className='change'>Dashboard</a></Link>
            </div>

            <div className='menu'>
              <img src='/images/list.png' alt='icon'/>
              <a>Logbook</a>
            </div>

            <div className='subMenu'>
              <Link href=''><a>Identifikasi Values</a></Link>
              <Link href=''><a>Sleep Diary</a></Link>
              <Link href=''><a>Thought Record</a></Link>
              <Link href=''><a>Emotion Record</a></Link>
              <Link href=''><a>Committed Action</a></Link>
            </div>
        </nav>

        <main>
          <FormValueIdentification></FormValueIdentification>
        </main>
      </div>
    </div>
  )
}
