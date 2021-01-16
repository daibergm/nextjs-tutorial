import Head from 'next/head';

//@Components
import Header from '../header/Header';

// @constants
import { appName } from '../../constants';

type Props = {
  children: JSX.Element,
  pageName?: string
}

function BaseLayout({ children, pageName } : Props):JSX.Element {
  return (
    <div>
      <Head>
        <title>{`${appName} - ${pageName}`}</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css"/>
      </Head>
      <Header />
      <div className="container-fluid mb-4 mt-2">{children}</div>
    </div>
  );
}

export default BaseLayout;
