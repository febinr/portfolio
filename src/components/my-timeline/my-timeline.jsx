import { React } from 'react'
import styles from './my-timeline.module.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const MyTimeline = () => {

    const event = [
        {
            duration: '2020 June -  Present'
        }
    ]

    return (
        <div className={styles.myTimeLineContainer} id='timeline'>
            <div className={styles.title}>What I have done so far..!</div>

            <div className={styles.timeline}>
                <AnimationOnScroll animateIn="animate__fadeIn" duration={2} animateOnce={true} >
                    <div className={`${styles.container} ${styles.right}`}>
                        <div className={styles.content}>
                            <i>2021 June -  Present</i>
                            <p>Bayer</p>
                            <p>Worked On: ReactJS, NodeJS, AWS</p>
                        </div>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" duration={1} animateOnce={true} >

                    <div className={`${styles.container} ${styles.left}`}>
                        <div className={styles.content}>
                            <i>2018 Feb - 2021 May</i>
                            <p>Qburst Technologies Pvt Ltd</p>
                            <p>Worked On: ReactJS, NodeJS, Angular</p>
                        </div>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" duration={2} animateOnce={true} >

                    <div className={`${styles.container} ${styles.right}`}>
                        <div className={styles.content}>
                            <i>2016 May - 2017 May</i>
                            <p>Gadgeon Smart System Pvt Ltd</p>
                            <p>Worked On: Android, ReactJs</p>
                        </div>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" duration={2} animateOnce={true} >
                    <div className={`${styles.container} ${styles.left}`}>
                        <div className={styles.content}>
                            <i>2012 - 2016 </i>
                            <p>Btech - Computer Science & Engineering</p>
                            <p>College of Engineering Thalassery - CUSAT</p>
                            <p>CGPA: 9.13</p>
                        </div>
                    </div>
                </AnimationOnScroll>





            </div>
        </div>
    );
};


export default MyTimeline;