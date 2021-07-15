import { useContext, useState } from 'react';
import CardComponent from 'components/Card';
import Layout from 'components/Layout';
import { Context } from 'utils/store';
import Pagination from 'components/Pagination';
import Loader from 'components/Loader';
import Snackbar from 'components/Snackbar';

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
            <Snackbar message="Whislist Snackbar" severity="error" />
            {
                state.whislist?.length > 0
                    ? <CardComponent data={currentWhislist} />
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
