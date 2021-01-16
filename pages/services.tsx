import Head from 'next/head';

// @constants
import { appName } from '../app/constants';

import BaseLayout from '../app/components/layouts/BaseLayout';

function Services() {
  return (
    <>
      <Head>
        <title>{appName} - Services</title>
      </Head>
      <BaseLayout>
        <h1>Services</h1>
      </BaseLayout>
    </>
  )
}

export default Services;
