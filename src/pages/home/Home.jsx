import styles from './Home.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';

function Home() {
	const navigate = useNavigate();

    const handleClickArctic = () => {
        navigate('/arctic');
    };

	 const handleClickPilot = () => {
         navigate('/pilot');
    };

	 const handleClickPolar = () => {
         navigate('/polar');
     };

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Button className={styles.margin} onClick={handleClickArctic} />
                <Button className={styles.margin} onClick={handleClickPilot} />
                <Button onClick={handleClickPolar} />
            </div>
        </div>
    );
}

export default Home;
