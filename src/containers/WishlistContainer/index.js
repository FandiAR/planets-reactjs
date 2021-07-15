import { useContext, useState } from 'react';
import { Context } from 'utils/store';
import {
    Card, Layout, Pagination, Loader,
} from 'components';

const WhislistContainer = () => {
    const [state] = useContext(Context)

    const [page, setPage] = useState(1);
    const perPage = 5;
    const indexOfLastPlanet = page * perPage;
    const indexOfFirstPlanet = indexOfLastPlanet - perPage;
    const currentWhislist = state.whislist.slice(indexOfFirstPlanet, indexOfLastPlanet);
    const paginate = (number) => setPage(number);

    return (
        <Layout>
            {
                state.whislist?.length > 0
                    ? <Card data={currentWhislist} />
                    : <Loader />
            }
            {
                state.whislist?.length > 5
                    ? <Pagination perPage={perPage} totalWhislist={state.whislist.length} paginate={paginate} />
                    : null
            }
        </Layout>
    );
};
export default WhislistContainer;
