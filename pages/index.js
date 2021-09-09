import Head from 'next/head'
import Link from 'next/link'
import styles from './index.module.css'

export default function App() {
    return (
        <div>
            <Head>
                <title>Quiz App</title>
            </Head>

            <main>
                <div className={styles.message}>You will have 1 minute per question
                    <div className={styles.StartButton}>
                        <Link href="/questions/0">
                            <a className={styles.button}>Start Quiz</a>
                        </Link>
                    </div>
                </div>
            </main>
        </div >
    )
}