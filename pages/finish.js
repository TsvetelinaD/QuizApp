import Head from 'next/head'
import styles from './index.module.css'

export default function Finish() {
    return (
        <div className={styles.Finish}>
            <Head>
                <title>Quiz App</title>
            </Head>

            <div>You have completed the quiz!</div>
        </div>
    )
}