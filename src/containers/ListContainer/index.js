import {
    useContext, useEffect, useState,
} from 'react';
import Layout from 'components/Layout';
import CardComponent from 'components/Card';
import { getPlanets } from 'utils/services';
import { Context } from 'utils/store';
import Loader from 'components/Loader';
import Pagination from 'components/Pagination';
import Snackbar from 'components/Snackbar';

const ListContainer = () => {
    const [state, dispatch] = useContext(Context);
    const [page, setPage] = useState(1);
    const perPage = 10;
    const total = 60;
    const paginate = (number) => setPage(number);

    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');
    const [show, setShow] = useState(false);

    useEffect(() => {
        getPlanets(page).then((data) => {
            dispatch({type: 'SET_PLANETS', payload: data.results})
        }).catch((err) => {
            setShow(true);
            setSeverity('error');
            setMessage(err.message);
            setTimeout(() => {
                setShow(false);
            }, 3000);
        });
    }, [dispatch, page]);

    const addWhislist = (e, name) => {
        e.preventDefault();
        const thisWhislist = state.planets.find((item) => item.name === name);
        dispatch({type: 'SET_WHISLIT', payload: [...state.whislist, thisWhislist]})
        setShow(true);
        setSeverity('success');
        setMessage('A planet added to your whislist');
        setTimeout(() => {
            setShow(false);
        }, 3000);
    };

    return (
        <Layout>
            <Snackbar message={message} severity={severity} showSnackbar={show} />
            {
                state?.planets?.length > 0
                    ? <CardComponent data={state.planets} addWhislist={addWhislist} />
                    : <Loader />
            }
            {
                state?.planets?.length > 0
                    ? <Pagination perPage={perPage} totalWhislist={total} paginate={paginate} />
                    : null
            }
        </Layout>
    );
};
export default ListContainer;
