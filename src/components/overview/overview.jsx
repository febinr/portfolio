
import styles from './overview.module.css'
import resumeImage from '../../assets/resume.png';
import linkedInImage from '../../assets/linkedin.svg';
import mailImage from '../../assets/mail.svg';
import resumePdf from '../../assets/resume.pdf';


const Overview = () => {
    return (
        <div id ='overview' className = {`${styles.height} ${styles.bgimg}`}>
            <div className ={ styles.container}>
                Hi, I'm Febin
            </div>
            <div>
           <p className={styles.detailsContainer}>I am a full stack developer</p>
           <div className='flex justify-center mb-4 mt-4'>
                    <img src={resumeImage} alt='resume' onClick={()=> window.open(resumePdf, "_blank")} className='w-10 m-2 cursor-pointer'/>
                    <a href="mailto:febinr1995@gmail.com"><img src={mailImage} alt='linkedIn' className='w-12 m-3 cursor-pointer' /></a>

                    <img src={linkedInImage} alt='linkedIn' onClick={()=> window.open("https://www.linkedin.com/in/febin-r/", "_blank")} className='w-12 m-0 cursor-pointer' />
           </div>
           </div>
           <div className={styles.downArrow}></div>

        </div>
    )
};


export default Overview;