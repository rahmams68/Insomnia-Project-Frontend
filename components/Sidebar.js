import Link from 'next/link'

export default function Sidebar() {
    return(
        <nav className='sidebar'>
            <div className='menu'>
              <img src='/images/home.png' alt='icon'/>
              <Link href='/'><a className='change'>Dashboard</a></Link>
            </div>

            <div className='menu'>
              <img src='/images/list.png' alt='icon'/>
              <a>Logbook</a>
            </div>

            <div className='subMenu'>
              <Link href='/value-identification'><a>Identifikasi Values</a></Link>
              <Link href='/sleep-diary'><a>Sleep Diary</a></Link>
              <Link href='/thought-record'><a>Thought Record</a></Link>
              <Link href='/emotion-record'><a>Emotion Record</a></Link>
              <Link href='/committed-action'><a>Committed Action</a></Link>
            </div>
        </nav>
    )
}