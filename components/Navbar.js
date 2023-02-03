export default function Navbar() {
    return(
    <nav className='navbar'>
        <div className='left'>
          <img src='/images/nav-logo.png' alt='logo'/>
          <h1 className='title'>Logbook Terapi Insomnia</h1>
        </div>

        <div className='right'>
          <button>Logout</button>
        </div>
      </nav>
    )
}