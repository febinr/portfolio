import styles from './header.module.css'

const Header = () => {
    return (
        <div className={`flex flex-row justify-between ${styles.height} items-center`}>
                <div className='p-4 cursor-pointer'>
                <a href='#overview' className={styles.titleName}>Febin R</a>
                </div>
                <div className='flex flex-row justify-between p-4'>
                    <div className='p-2 cursor-pointer'><a href='#stack'>My Stack</a></div>
                    <div className='p-2 cursor-pointer'><a href='#timeline'>TimeLine</a></div>
                </div>
        </div>
    )
};


export default Header;