// styled components
import {Summary, Details} from './style';
import {StyledAccordion} from '@ui/StyledAccordion';

// components
import Video from '@components/Video';
import StickyFilterBar from '@ui/StickyFilterBar';
import Spring from '@components/Spring';
import NothingFound from '@components/NothingFound';

// hooks
import {useWindowSize} from 'react-use';

const QuestionsList = ({data}) => {
    const isTablet = useWindowSize().width < 1170;

    return (
        <>
            {isTablet && <StickyFilterBar text="Menu" bottom="#faq"/>}
            <div id="faq">
                {
                    data.length !== 0 ?
                        data.map((item, index) => (
                            <Spring className="border-bottom" key={`accordion${index}`} index={index}>
                                <StyledAccordion>
                                    <Summary aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
                                        <h5 className="title">{item.question}</h5>
                                        <i className="icon icon-angle-down text-light"/>
                                    </Summary>
                                    <Details>
                                        {
                                            item.layout.map((block, index) => {
                                                    const {text, video, list} = item.answer;

                                                    switch (block) {
                                                        case 'list':
                                                            return (
                                                                <ul className="list d-flex flex-column g-5"
                                                                    key={`list${index}`}>
                                                                    {
                                                                        list.map((item, index) => (
                                                                            <li className="list-item"
                                                                                key={`listItem${index}`}>
                                                                                <span
                                                                                    className="marker text-accent">{index + 1}.</span>
                                                                                {item}
                                                                            </li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            );
                                                        case 'video':
                                                            return (
                                                                <Video key={`video${index}`} cover={video.cover}
                                                                       id={video.id}/>
                                                            );
                                                        default:
                                                        case 'text':
                                                            return (
                                                                <p key={`text${index}`} className="text">{text}</p>
                                                            );
                                                    }
                                                }
                                            )
                                        }
                                    </Details>
                                </StyledAccordion>
                            </Spring>
                        ))
                        : <NothingFound/>
                }
            </div>
        </>
    );
}

export default QuestionsList