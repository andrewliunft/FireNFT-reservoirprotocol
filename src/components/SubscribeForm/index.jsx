// styling
import styles from './style.module.scss';

// components
import { toast } from 'react-toastify';

// hooks
import { useForm } from 'react-hook-form';

// utils
import classNames from 'classnames';
import { sendMessageToTelegram, EMAIL_SUB_BOT_TOKEN, EMAIL_SUB_CHAT_ID } from '@utils/helpers';

const SubscribeForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (v) => {
        sendMessageToTelegram(v.email, EMAIL_SUB_BOT_TOKEN, EMAIL_SUB_CHAT_ID);
        toast.info('구독해주셔서 감사합니다!');
        reset();
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input className={classNames('field bg-tertiary border-10 text-bold', { 'field--error': errors.email })}
                type="text"
                placeholder="이메일 입력하기"
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
            <button type="submit" aria-label="Subscribe to the newsletter">
                <i className="icon icon-arrow-right" />
            </button>
        </form>
    )
}

export default SubscribeForm