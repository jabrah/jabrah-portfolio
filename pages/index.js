import Head from 'next/head';
import Me from '../components/me/Me';
import Section from '../components/Section';
import SkillsList from '../components/skills/SkillsList';
import ExperienceList from '../components/xp/ExperienceList';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>J. Abrahams</title>
      </Head>
      <main>
        <Section id="me">
          <Me />
        </Section>

        <Section id="xp" title="Work Experience">
          <ExperienceList />
        </Section>

        <Section id="skills" title="Technical Skills">
          <SkillsList />
        </Section>
      </main>
    </div>
  );
};
