import styles from './Arctic.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';

function Arctic() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Button className={styles.margin}/>
                <Button />
            </div>
        </div>
    );
}

export default Arctic;
