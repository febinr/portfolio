import style from './my-stack.module.css'
import htmlLogo  from '../../assets/stackIcons/html5.svg';
import nodeLogo  from '../../assets/stackIcons/nodejs.svg';
import cssLogo  from '../../assets/stackIcons/css.png';
import reactLogo  from '../../assets/stackIcons/react.svg';
import mysqlLogo  from '../../assets/stackIcons/mysql.svg';
import angularLogo  from '../../assets/stackIcons/angularjs.svg';
import jsLogo  from '../../assets/stackIcons/javascript.svg';
import postgresLogo  from '../../assets/stackIcons/postgresql.svg';
import reduxLogo  from '../../assets/stackIcons/redux.svg';
import sassLogo  from '../../assets/stackIcons/sass.svg';
import typescriptLogo  from '../../assets/stackIcons/typescript.svg';
import mongoDbLogo  from '../../assets/stackIcons/mongodb.svg';
import dockerLogo  from '../../assets/stackIcons/docker.svg';
import awsLogo  from '../../assets/stackIcons/aws.svg';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const MyStack = () => {

    return (
        
        <div id='stack' className={style.container}>
            <div className={style.title}>My Stack..!</div>
            <AnimationOnScroll animateIn="animate__bounceIn" duration={2} animateOnce={true} >

            <div className={style.iconContainer}>
                <div className={style.stackIcon}>
                    <img src = {htmlLogo} alt='html' className={style.imgConatiner}/>
                </div> 
                <div className={style.stackIcon}>
                    <img src = {cssLogo} alt='html' className={style.imgConatiner}/>
                </div>  
                <div className={style.stackIcon}>
                    <img src = {jsLogo} alt='html' className={style.imgConatiner}/>
                </div>    
                <div className={style.stackIcon}>
                    <img src = {reactLogo} alt='html' className={style.imgConatiner}/>
                </div>  
                <div className={style.stackIcon}>
                    <img src = {awsLogo} alt='html' className={style.imgConatiner}/>
                </div>   
                <div className={style.stackIcon}>
                    <img src = {nodeLogo} alt='html' className={style.imgConatiner}/>
                </div>   
                <div className={style.stackIcon}>
                    <img src = {mysqlLogo} alt='html' className={style.imgConatiner}/>
                </div>   
                <div className={style.stackIcon}>
                    <img src = {angularLogo} alt='html' className={style.imgConatiner}/>
                </div>   
                <div className={style.stackIcon}>
                    <img src = {postgresLogo} alt='html' className={style.imgConatiner}/>
                </div>   
                <div className={style.stackIcon}>
                    <img src = {reduxLogo} alt='html' className={style.imgConatiner}/>
                </div>  
                <div className={style.stackIcon}>
                    <img src = {sassLogo} alt='html' className={style.imgConatiner}/>
                </div>  
                <div className={style.stackIcon}>
                    <img src = {typescriptLogo} alt='html' className={style.imgConatiner}/>
                </div>  
                <div className={style.stackIcon}>
                    <img src = {mongoDbLogo} alt='html' className={style.imgConatiner}/>
                </div>   
                <div className={style.stackIcon}>
                    <img src = {dockerLogo} alt='html' className={style.imgConatiner}/>
                </div>        
            </div>
            </AnimationOnScroll>
        </div>
    )
};


export default MyStack;