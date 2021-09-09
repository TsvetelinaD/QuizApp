import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import styles from "./[id].module.css";

export default function AllQuestions() {

    const [seconds, setSeconds] = useState(1);
    const [isActive, setIsActive] = useState(true);

    function reset() {
        setSeconds(1);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
            if (seconds === 60) {
                reset();
                router.push(id + 1 < allQuestions.length ? `/questions/${id + 1}` : "/finish");
            }
        } else {
            clearInterval(interval);
            setIsActive(true);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const onClick = () => {
        reset();
    };

    const options = 'ABCDE';

    const allQuestions = [
        {
            question: "React is mainly used for building ____",
            answears: ["Database", "User interface", "Connectivity", "Design Platform"],
        },
        {
            question: "JavaScript ignores extra spaces",
            answears: ["True", "False"],
        },
        {
            question: "What is state in React?",
            answears: ["A persitant storage.", "An internal data storage (object) of a component."],
        },
        {
            question: "Which of the following is a server-side JavaScript object?",
            answears: ["Function", "File", "Date"],
        }
    ];

    const router = useRouter()
    let { id } = router.query;
    id = Number(id);

    if (Number.isNaN(id)) {
        return null;
    }

    return (

        < div >
            <Head>
                <title>Quiz App</title>
            </Head>
         
            <div className={styles.QuizBox}>
                <div className={styles.ProgressBarBorder}>
                    <div className={styles.ProgressBar} style={{
                        width: `${seconds * 1.7 > 100 ? 100 : seconds * 1.7}%`
                    }}></div>
                </div>

                <p className={styles.Question}>{allQuestions[id].question}</p>

                {
                    allQuestions[id].answears.map((answear, index) =>
                        <div key={answear} className={styles.answear}>
                            <Link href={id + 1 < allQuestions.length ? `/questions/${id + 1}` : "/finish"} >
                                <a onClick={onClick} className={styles.button}>
                                    <div className={styles.options}>{options.charAt(index)}</div>
                                    {answear}
                                </a>
                            </Link>
                        </div>
                    )
                }
            </div >
        </div >
    )
}