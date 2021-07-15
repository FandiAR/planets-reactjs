import { Fragment } from 'react';
import Helmet from 'react-helmet';

const defaultTitle = 'Planet';

/**
 * Global component for dynamic web title
 * @param {*} props
 * @returns
 */
const PageTitle = (props) => {
  const { title, children } = props;
  return (
    <Fragment>
      <Helmet title={title ? `${title} | Planet` : defaultTitle} />
      {children}
    </Fragment>
  );
};
export default PageTitle;
