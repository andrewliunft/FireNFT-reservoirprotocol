// styling
import styles from './style.module.scss';

// components
import Sidebar from '../Sidebar';
import QuestionsList from '../QuestionsList';

// hooks
import {useFilterContext} from '@contexts/filterContext';

// utils
import classNames from 'classnames';

// data placeholder
import faq from '@db/faq';

const FAQLayout = () => {
    const {filterData} = useFilterContext();
    const questions = filterData(faq, 'question');

    return (
        <div className="section">
            <div className={classNames(`${styles.container} container`, {'align-items-center' : questions.length === 0})}>
                <Sidebar/>
                <QuestionsList data={questions} />
            </div>
        </div>
    );
}

export default FAQLayout