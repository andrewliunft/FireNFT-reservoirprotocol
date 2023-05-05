// components
import Title from '@components/Title';
import PageHeader from '@components/PageHeader';
import FAQLayout from '@layout/faq/FAQLayout';

// context
import {FilterContextAPI} from '@contexts/filterContext';

const FAQ = () => {
    return (
        <>
            <Title title="Help center"/>
            <PageHeader title="Help center"/>
            <main>
                <FilterContextAPI>
                    <FAQLayout />
                </FilterContextAPI>
            </main>
        </>
    );
}

export default FAQ