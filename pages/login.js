import Head from 'next/head'
import style from '../styles/Login.module.css'

export default function LoginPage() {
    return (
        <div className={style.container}>
            <Head>
                <title>Logbook Terapi Insomnia | Login</title>
                <link rel="icon" href="/images/logo.png"/>
            </Head>

            <section className={style.section}>
                <div className={style.imgBox}>
                    <img src="/images/main-img.png" alt="banner"/>
                </div>

                <div className={style.contentBox}>
                    <div className={style.formBox}>
                        <h2>Login</h2>

                        <form action="" method="POST">
                            <div className={style.inputBox}>
                                <span>Username</span>
                                <input type="text" name="username" required/>
                            </div>

                            <div className={style.inputBox}>
                                <span>Password</span>
                                <input type="password" name="pass" required/>
                            </div>

                            <div className={style.remember}>
                                <label><input type="checkbox" name="remember"/>Remember Me</label>
                            </div>

                            <div className={style.inputBox}>
                                <input type="submit" name="login" value="Login" required/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}