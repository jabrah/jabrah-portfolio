import Head from 'next/head';
import Me from '../components/me/Me';
import Section from '../components/Section';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>J. Abrahams</title>
      </Head>
      <main>
        <Section id="me">
          <Me></Me>
        </Section>
      </main>
    </div>
  );
};
