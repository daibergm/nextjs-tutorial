import Head from 'next/head';

import Header from '../header/Header';

type Props = {
  children: JSX.Element
}

function BaseLayout({ children } : Props):JSX.Element {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css"/>
      </Head>
      <Header />
      <div className="container-fluid">{children}</div>
    </div>
  );
}

export default BaseLayout;
