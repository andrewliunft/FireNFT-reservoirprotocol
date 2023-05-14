// components
import Title from '@components/Title';
import SimplePageHeader from '@components/SimplePageHeader';
import ItemDetails from '@layout/item';

import { useParams } from 'react-router-dom';
import { useTokens } from '@reservoir0x/reservoir-kit-ui'


const Item = () => {
    const routeParams = useParams();
    const { data: tokens } = useTokens({
        tokens: [routeParams.id],
    })
    const token = tokens[0];

    return (
        <>
            <Title title="NFT 상세보기" />
            <SimplePageHeader title="NFT 상세보기" />
            <main>
                <ItemDetails token={token} />
            </main>
        </>
    );
}

export default Item