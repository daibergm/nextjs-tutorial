import Head from 'next/head';

// @constants
import { appName } from '../app/constants';

import BaseLayout from '../app/components/layouts/BaseLayout';

function Home() {
  return (
    <>
      <Head>
        <title>{appName} - Home</title>
      </Head>
      <BaseLayout>
        <h1>Home</h1>
      </BaseLayout>
    </>
  )
}

export default Home;
