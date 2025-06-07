import styles from './Main.module.scss';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home'); 
    };

    return (
		<div onClick={handleClick} className={styles.background}></div>
	 );
}

export default Main;
