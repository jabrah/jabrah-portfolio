import Skill from './Skill';

export default function SkillsList() {
  return (
    <div className="flex flex-wrap justify-center">
      <Skill icon="ember">EmberJS</Skill>
      <Skill>GlimmerJS</Skill>
      <Skill>Node</Skill>
      <Skill>NPM</Skill>
      <Skill>Yarn</Skill>
      <Skill>React</Skill>
      <Skill>git</Skill>
      <Skill>Java</Skill>
      <Skill>Docker</Skill>
    </div>
  );
}