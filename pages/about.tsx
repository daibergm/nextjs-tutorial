import Head from 'next/head';

// @constants
import { appName } from '../app/constants';

import BaseLayout from '../app/components/layouts/BaseLayout';

function About() {
  return (
    <>
      <Head>
        <title>{appName} - About</title>
      </Head>
      <BaseLayout>
        <h1>About</h1>
      </BaseLayout>
    </>
  )
}

export default About;
