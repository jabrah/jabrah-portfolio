import Skill from './Skill';

export default function SkillsList() {
  return (
    <div className="flex flex-wrap justify-center">
      <Skill icon="ember" iWidth={80} iHeight={50} title="EmberJS" link="https://emberjs.com/"></Skill>
      <Skill icon="glimmer" iWidth={80} iHeight={50} title="GlimmerJS" link="https://glimmerjs.com/"></Skill>
      <Skill icon="node" iWidth={80} iHeight={50} title="NodeJS" link="https://nodejs.org/en/"></Skill>
      <Skill icon="npm" iWidth={80} iHeight={50} title="NPM" link="https://www.npmjs.com/"></Skill>
      <Skill icon="yarn" iWidth={80} iHeight={50} title="Yarn" link="https://yarnpkg.com/"></Skill>
      <Skill icon="react" title="React" link="https://reactjs.org/"></Skill>
      <Skill icon="git" iWidth={80} iHeight={50} title="git" link="https://git-scm.com/"></Skill>
      <Skill icon="java" title="Java" link="https://www.oracle.com/java/technologies/downloads/"></Skill>
      <Skill icon="docker" iWidth={70} iHeight={60} title="Docker" link="https://www.docker.com/"></Skill>
    </div>
  );
}