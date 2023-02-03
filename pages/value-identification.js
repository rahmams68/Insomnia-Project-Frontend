import Head from 'next/head'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import style from '../styles/Form.module.css'

export default function ValueIdentification() {
    return (
        <div className='main-container'>
            <Head>
                <title>Logbook Terapi Insomnia</title>
                <link rel='icon' href='/images/logo.png' />
            </Head>

            <Navbar />

            <div className='body'>
                <Sidebar />

                <main>
                    <div className={style.container}>
                        <div className={style.info}>
                            <h2>Identifikasi Values</h2>
                            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        </div>

                        <form action='' method='POST' className={style.form}>
                            <div id={1} className={style.area}>
                                <h3>Area 1: Keluarga</h3>
                                <table>
                                    <tr>
                                        <td><p>Seberapa penting area ini untuk Anda?</p></td>

                                        <td>
                                            <label><input type='radio' name="q1-1" value={1}/>1</label>
                                            <label><input type='radio' name="q1-1" value={2}/>2</label>
                                            <label><input type='radio' name="q1-1" value={3}/>3</label>
                                            <label><input type='radio' name="q1-1" value={4}/>4</label>
                                            <label><input type='radio' name="q1-1" value={5}/>5</label>
                                            <label><input type='radio' name="q1-1" value={6}/>6</label>
                                            <label><input type='radio' name="q1-1" value={7}/>7</label>
                                            <label><input type='radio' name="q1-1" value={8}/>8</label>
                                            <label><input type='radio' name="q1-1" value={9}/>9</label>
                                            <label><input type='radio' name="q1-1" value={10}/>10</label>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><p>Pribadi seperti apa yang Anda inginkan pada area ini?</p></td>

                                        <td>
                                            <textarea></textarea>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><p>Seberapa sesuai kondisi Anda saat ini dengan pribadi yang Anda inginkan?</p></td>

                                        <td>
                                            <label><input type='radio' name="q1-3" value={1}/>1</label>
                                            <label><input type='radio' name="q1-3" value={2}/>2</label>
                                            <label><input type='radio' name="q1-3" value={3}/>3</label>
                                            <label><input type='radio' name="q1-3" value={4}/>4</label>
                                            <label><input type='radio' name="q1-3" value={5}/>5</label>
                                            <label><input type='radio' name="q1-3" value={6}/>6</label>
                                            <label><input type='radio' name="q1-3" value={7}/>7</label>
                                            <label><input type='radio' name="q1-3" value={8}/>8</label>
                                            <label><input type='radio' name="q1-3" value={9}/>9</label>
                                            <label><input type='radio' name="q1-3" value={10}/>10</label>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div id={2} className={style.area}>
                                <h3>Area 2: Pernikahan atau Relasi Romantis</h3>
                                <table>
                                    <tr>
                                        <td><p>Seberapa penting area ini untuk Anda?</p></td>

                                        <td>
                                            <label><input type='radio' name="q2-1" value={1}/>1</label>
                                            <label><input type='radio' name="q2-1" value={2}/>2</label>
                                            <label><input type='radio' name="q2-1" value={3}/>3</label>
                                            <label><input type='radio' name="q2-1" value={4}/>4</label>
                                            <label><input type='radio' name="q2-1" value={5}/>5</label>
                                            <label><input type='radio' name="q2-1" value={6}/>6</label>
                                            <label><input type='radio' name="q2-1" value={7}/>7</label>
                                            <label><input type='radio' name="q2-1" value={8}/>8</label>
                                            <label><input type='radio' name="q2-1" value={9}/>9</label>
                                            <label><input type='radio' name="q2-1" value={10}/>10</label>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><p>Pribadi seperti apa yang Anda inginkan pada area ini?</p></td>

                                        <td>
                                            <textarea></textarea>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><p>Seberapa sesuai kondisi Anda saat ini dengan pribadi yang Anda inginkan?</p></td>

                                        <td>
                                            <label><input type='radio' name="q2-3" value={1}/>1</label>
                                            <label><input type='radio' name="q2-3" value={2}/>2</label>
                                            <label><input type='radio' name="q2-3" value={3}/>3</label>
                                            <label><input type='radio' name="q2-3" value={4}/>4</label>
                                            <label><input type='radio' name="q2-3" value={5}/>5</label>
                                            <label><input type='radio' name="q2-3" value={6}/>6</label>
                                            <label><input type='radio' name="q2-3" value={7}/>7</label>
                                            <label><input type='radio' name="q2-3" value={8}/>8</label>
                                            <label><input type='radio' name="q2-3" value={9}/>9</label>
                                            <label><input type='radio' name="q2-3" value={10}/>10</label>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div id={3} className={style.area}>
                                <h3>Area 3: Pertemanan</h3>
                                <table>
                                    <tr>
                                        <td><p>Seberapa penting area ini untuk Anda?</p></td>

                                        <td>
                                            <label><input type='radio' name="q3-1" value={1}/>1</label>
                                            <label><input type='radio' name="q3-1" value={2}/>2</label>
                                            <label><input type='radio' name="q3-1" value={3}/>3</label>
                                            <label><input type='radio' name="q3-1" value={4}/>4</label>
                                            <label><input type='radio' name="q3-1" value={5}/>5</label>
                                            <label><input type='radio' name="q3-1" value={6}/>6</label>
                                            <label><input type='radio' name="q3-1" value={7}/>7</label>
                                            <label><input type='radio' name="q3-1" value={8}/>8</label>
                                            <label><input type='radio' name="q3-1" value={9}/>9</label>
                                            <label><input type='radio' name="q3-1" value={10}/>10</label>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><p>Pribadi seperti apa yang Anda inginkan pada area ini?</p></td>

                                        <td>
                                            <textarea></textarea>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><p>Seberapa sesuai kondisi Anda saat ini dengan pribadi yang Anda inginkan?</p></td>

                                        <td>
                                            <label><input type='radio' name="q3-3" value={1}/>1</label>
                                            <label><input type='radio' name="q3-3" value={2}/>2</label>
                                            <label><input type='radio' name="q3-3" value={3}/>3</label>
                                            <label><input type='radio' name="q3-3" value={4}/>4</label>
                                            <label><input type='radio' name="q3-3" value={5}/>5</label>
                                            <label><input type='radio' name="q3-3" value={6}/>6</label>
                                            <label><input type='radio' name="q3-3" value={7}/>7</label>
                                            <label><input type='radio' name="q3-3" value={8}/>8</label>
                                            <label><input type='radio' name="q3-3" value={9}/>9</label>
                                            <label><input type='radio' name="q3-3" value={10}/>10</label>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div id={4} className={style.area}>
                                <h3>Area 4: Pekerjaan dan Karir</h3>
                                <table>
                                    <tr>
                                        <td><p>Seberapa penting area ini untuk Anda?</p></td>

                                        <td>
                                            <label><input type='radio' name="q4-1" value={1}/>1</label>
                                            <label><input type='radio' name="q4-1" value={2}/>2</label>
                                            <label><input type='radio' name="q4-1" value={3}/>3</label>
                                            <label><input type='radio' name="q4-1" value={4}/>4</label>
                                            <label><input type='radio' name="q4-1" value={5}/>5</label>
                                            <label><input type='radio' name="q4-1" value={6}/>6</label>
                                            <label><input type='radio' name="q4-1" value={7}/>7</label>
                                            <label><input type='radio' name="q4-1" value={8}/>8</label>
                                            <label><input type='radio' name="q4-1" value={9}/>9</label>
                                            <label><input type='radio' name="q4-1" value={10}/>10</label>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><p>Pribadi seperti apa yang Anda inginkan pada area ini?</p></td>

                                        <td>
                                            <textarea></textarea>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><p>Seberapa sesuai kondisi Anda saat ini dengan pribadi yang Anda inginkan?</p></td>

                                        <td>
                                            <label><input type='radio' name="q4-3" value={1}/>1</label>
                                            <label><input type='radio' name="q4-3" value={2}/>2</label>
                                            <label><input type='radio' name="q4-3" value={3}/>3</label>
                                            <label><input type='radio' name="q4-3" value={4}/>4</label>
                                            <label><input type='radio' name="q4-3" value={5}/>5</label>
                                            <label><input type='radio' name="q4-3" value={6}/>6</label>
                                            <label><input type='radio' name="q4-3" value={7}/>7</label>
                                            <label><input type='radio' name="q4-3" value={8}/>8</label>
                                            <label><input type='radio' name="q4-3" value={9}/>9</label>
                                            <label><input type='radio' name="q4-3" value={10}/>10</label>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div id={5} className={style.area}>
                                <h3>Area 5: Pendidikan dan Pengembangan Karir</h3>
                                <table>
                                    <tr>
                                        <td><p>Seberapa penting area ini untuk Anda?</p></td>

                                        <td>
                                            <label><input type='radio' name="q5-1" value={1}/>1</label>
                                            <label><input type='radio' name="q5-1" value={2}/>2</label>
                                            <label><input type='radio' name="q5-1" value={3}/>3</label>
                                            <label><input type='radio' name="q5-1" value={4}/>4</label>
                                            <label><input type='radio' name="q5-1" value={5}/>5</label>
                                            <label><input type='radio' name="q5-1" value={6}/>6</label>
                                            <label><input type='radio' name="q5-1" value={7}/>7</label>
                                            <label><input type='radio' name="q5-1" value={8}/>8</label>
                                            <label><input type='radio' name="q5-1" value={9}/>9</label>
                                            <label><input type='radio' name="q5-1" value={10}/>10</label>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><p>Pribadi seperti apa yang Anda inginkan pada area ini?</p></td>

                                        <td>
                                            <textarea></textarea>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><p>Seberapa sesuai kondisi Anda saat ini dengan pribadi yang Anda inginkan?</p></td>

                                        <td>
                                            <label><input type='radio' name="q5-3" value={1}/>1</label>
                                            <label><input type='radio' name="q5-3" value={2}/>2</label>
                                            <label><input type='radio' name="q5-3" value={3}/>3</label>
                                            <label><input type='radio' name="q5-3" value={4}/>4</label>
                                            <label><input type='radio' name="q5-3" value={5}/>5</label>
                                            <label><input type='radio' name="q5-3" value={6}/>6</label>
                                            <label><input type='radio' name="q5-3" value={7}/>7</label>
                                            <label><input type='radio' name="q5-3" value={8}/>8</label>
                                            <label><input type='radio' name="q5-3" value={9}/>9</label>
                                            <label><input type='radio' name="q5-3" value={10}/>10</label>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div id={6} className={style.area}>
                                <h3>Area 6: Rekreasi, Hiburan, dan Waktu Luang</h3>
                                <table>
                                    <tr>
                                        <td><p>Seberapa penting area ini untuk Anda?</p></td>

                                        <td>
                                            <label><input type='radio' name="q6-1" value={1}/>1</label>
                                            <label><input type='radio' name="q6-1" value={2}/>2</label>
                                            <label><input type='radio' name="q6-1" value={3}/>3</label>
                                            <label><input type='radio' name="q6-1" value={4}/>4</label>
                                            <label><input type='radio' name="q6-1" value={5}/>5</label>
                                            <label><input type='radio' name="q6-1" value={6}/>6</label>
                                            <label><input type='radio' name="q6-1" value={7}/>7</label>
                                            <label><input type='radio' name="q6-1" value={8}/>8</label>
                                            <label><input type='radio' name="q6-1" value={9}/>9</label>
                                            <label><input type='radio' name="q6-1" value={10}/>10</label>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><p>Pribadi seperti apa yang Anda inginkan pada area ini?</p></td>

                                        <td>
                                            <textarea></textarea>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><p>Seberapa sesuai kondisi Anda saat ini dengan pribadi yang Anda inginkan?</p></td>

                                        <td>
                                            <label><input type='radio' name="q6-3" value={1}/>1</label>
                                            <label><input type='radio' name="q6-3" value={2}/>2</label>
                                            <label><input type='radio' name="q6-3" value={3}/>3</label>
                                            <label><input type='radio' name="q6-3" value={4}/>4</label>
                                            <label><input type='radio' name="q6-3" value={5}/>5</label>
                                            <label><input type='radio' name="q6-3" value={6}/>6</label>
                                            <label><input type='radio' name="q6-3" value={7}/>7</label>
                                            <label><input type='radio' name="q6-3" value={8}/>8</label>
                                            <label><input type='radio' name="q6-3" value={9}/>9</label>
                                            <label><input type='radio' name="q6-3" value={10}/>10</label>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div id={7} className={style.area}>
                                <h3>Area 7: Spiritualitas</h3>
                                <table>
                                    <tr>
                                        <td><p>Seberapa penting area ini untuk Anda?</p></td>

                                        <td>
                                            <label><input type='radio' name="q7-1" value={1}/>1</label>
                                            <label><input type='radio' name="q7-1" value={2}/>2</label>
                                            <label><input type='radio' name="q7-1" value={3}/>3</label>
                                            <label><input type='radio' name="q7-1" value={4}/>4</label>
                                            <label><input type='radio' name="q7-1" value={5}/>5</label>
                                            <label><input type='radio' name="q7-1" value={6}/>6</label>
                                            <label><input type='radio' name="q7-1" value={7}/>7</label>
                                            <label><input type='radio' name="q7-1" value={8}/>8</label>
                                            <label><input type='radio' name="q7-1" value={9}/>9</label>
                                            <label><input type='radio' name="q7-1" value={10}/>10</label>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><p>Pribadi seperti apa yang Anda inginkan pada area ini?</p></td>

                                        <td>
                                            <textarea></textarea>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><p>Seberapa sesuai kondisi Anda saat ini dengan pribadi yang Anda inginkan?</p></td>

                                        <td>
                                            <label><input type='radio' name="q7-3" value={1}/>1</label>
                                            <label><input type='radio' name="q7-3" value={2}/>2</label>
                                            <label><input type='radio' name="q7-3" value={3}/>3</label>
                                            <label><input type='radio' name="q7-3" value={4}/>4</label>
                                            <label><input type='radio' name="q7-3" value={5}/>5</label>
                                            <label><input type='radio' name="q7-3" value={6}/>6</label>
                                            <label><input type='radio' name="q7-3" value={7}/>7</label>
                                            <label><input type='radio' name="q7-3" value={8}/>8</label>
                                            <label><input type='radio' name="q7-3" value={9}/>9</label>
                                            <label><input type='radio' name="q7-3" value={10}/>10</label>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div id={8} className={style.area}>
                                <h3>Area 8: Komunitas dan Relawan</h3>
                                <table>
                                    <tr>
                                        <td><p>Seberapa penting area ini untuk Anda?</p></td>

                                        <td>
                                            <label><input type='radio' name="q8-1" value={1}/>1</label>
                                            <label><input type='radio' name="q8-1" value={2}/>2</label>
                                            <label><input type='radio' name="q8-1" value={3}/>3</label>
                                            <label><input type='radio' name="q8-1" value={4}/>4</label>
                                            <label><input type='radio' name="q8-1" value={5}/>5</label>
                                            <label><input type='radio' name="q8-1" value={6}/>6</label>
                                            <label><input type='radio' name="q8-1" value={7}/>7</label>
                                            <label><input type='radio' name="q8-1" value={8}/>8</label>
                                            <label><input type='radio' name="q8-1" value={9}/>9</label>
                                            <label><input type='radio' name="q8-1" value={10}/>10</label>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><p>Pribadi seperti apa yang Anda inginkan pada area ini?</p></td>

                                        <td>
                                            <textarea></textarea>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><p>Seberapa sesuai kondisi Anda saat ini dengan pribadi yang Anda inginkan?</p></td>

                                        <td>
                                            <label><input type='radio' name="q8-3" value={1}/>1</label>
                                            <label><input type='radio' name="q8-3" value={2}/>2</label>
                                            <label><input type='radio' name="q8-3" value={3}/>3</label>
                                            <label><input type='radio' name="q8-3" value={4}/>4</label>
                                            <label><input type='radio' name="q8-3" value={5}/>5</label>
                                            <label><input type='radio' name="q8-3" value={6}/>6</label>
                                            <label><input type='radio' name="q8-3" value={7}/>7</label>
                                            <label><input type='radio' name="q8-3" value={8}/>8</label>
                                            <label><input type='radio' name="q8-3" value={9}/>9</label>
                                            <label><input type='radio' name="q8-3" value={10}/>10</label>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div id={9} className={style.area}>
                                <h3>Area 9: Lingkungan dan Alam</h3>
                                <table>
                                    <tr>
                                        <td><p>Seberapa penting area ini untuk Anda?</p></td>

                                        <td>
                                            <label><input type='radio' name="q9-1" value={1}/>1</label>
                                            <label><input type='radio' name="q9-1" value={2}/>2</label>
                                            <label><input type='radio' name="q9-1" value={3}/>3</label>
                                            <label><input type='radio' name="q9-1" value={4}/>4</label>
                                            <label><input type='radio' name="q9-1" value={5}/>5</label>
                                            <label><input type='radio' name="q9-1" value={6}/>6</label>
                                            <label><input type='radio' name="q9-1" value={7}/>7</label>
                                            <label><input type='radio' name="q9-1" value={8}/>8</label>
                                            <label><input type='radio' name="q9-1" value={9}/>9</label>
                                            <label><input type='radio' name="q9-1" value={10}/>10</label>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><p>Pribadi seperti apa yang Anda inginkan pada area ini?</p></td>

                                        <td>
                                            <textarea></textarea>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><p>Seberapa sesuai kondisi Anda saat ini dengan pribadi yang Anda inginkan?</p></td>

                                        <td>
                                            <label><input type='radio' name="q9-3" value={1}/>1</label>
                                            <label><input type='radio' name="q9-3" value={2}/>2</label>
                                            <label><input type='radio' name="q9-3" value={3}/>3</label>
                                            <label><input type='radio' name="q9-3" value={4}/>4</label>
                                            <label><input type='radio' name="q9-3" value={5}/>5</label>
                                            <label><input type='radio' name="q9-3" value={6}/>6</label>
                                            <label><input type='radio' name="q9-3" value={7}/>7</label>
                                            <label><input type='radio' name="q9-3" value={8}/>8</label>
                                            <label><input type='radio' name="q9-3" value={9}/>9</label>
                                            <label><input type='radio' name="q9-3" value={10}/>10</label>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div id={10} className={style.area}>
                                <h3>Area 10: Kesehatan Tubuh</h3>
                                <table>
                                    <tr>
                                        <td><p>Seberapa penting area ini untuk Anda?</p></td>

                                        <td>
                                            <label><input type='radio' name="q10-1" value={1}/>1</label>
                                            <label><input type='radio' name="q10-1" value={2}/>2</label>
                                            <label><input type='radio' name="q10-1" value={3}/>3</label>
                                            <label><input type='radio' name="q10-1" value={4}/>4</label>
                                            <label><input type='radio' name="q10-1" value={5}/>5</label>
                                            <label><input type='radio' name="q10-1" value={6}/>6</label>
                                            <label><input type='radio' name="q10-1" value={7}/>7</label>
                                            <label><input type='radio' name="q10-1" value={8}/>8</label>
                                            <label><input type='radio' name="q10-1" value={9}/>9</label>
                                            <label><input type='radio' name="q10-1" value={10}/>10</label>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><p>Pribadi seperti apa yang Anda inginkan pada area ini?</p></td>

                                        <td>
                                            <textarea></textarea>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><p>Seberapa sesuai kondisi Anda saat ini dengan pribadi yang Anda inginkan?</p></td>

                                        <td>
                                            <label><input type='radio' name="q10-3" value={1}/>1</label>
                                            <label><input type='radio' name="q10-3" value={2}/>2</label>
                                            <label><input type='radio' name="q10-3" value={3}/>3</label>
                                            <label><input type='radio' name="q10-3" value={4}/>4</label>
                                            <label><input type='radio' name="q10-3" value={5}/>5</label>
                                            <label><input type='radio' name="q10-3" value={6}/>6</label>
                                            <label><input type='radio' name="q10-3" value={7}/>7</label>
                                            <label><input type='radio' name="q10-3" value={8}/>8</label>
                                            <label><input type='radio' name="q10-3" value={9}/>9</label>
                                            <label><input type='radio' name="q10-3" value={10}/>10</label>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    )
}