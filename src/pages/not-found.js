import PageTitle from 'components/PageTitle';
import NotFoundContainer from 'containers/NotFoundContainer';

const NotFoundPage = ({ history }) => (
    <PageTitle title="Not Found">
        <NotFoundContainer history={history} />
    </PageTitle>
);
export default NotFoundPage;
