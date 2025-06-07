import styles from './RadioPilot.module.scss';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';

function RadioPilot() {
    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate('/pilot');
    };

    const audioRef = useRef(null);
	 
		 const handlePlay = () => {
				  
				  audioRef.current = new Audio('/assets/audio-pilot.mp3');
				  audioRef.current.play().catch(error => {
						console.error('Ошибка воспроизведения:', error);
						audioRef.current.muted = true;
						audioRef.current.play();
				  });
			 };

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Button
                    className={styles.button}
                    onClick={handlePlay}
                />

                <Button className={styles.button} onClick={handleClickBack} />
            </div>
        </div>
    );
}

export default RadioPilot;
