import EmberIcon from './ember';
import GitIcon from './git';
import GlimmerIcon from './glimmer';
import NodeIcon from './node';
import NPMIcon from './npm';
import YarnIcon from "./yarn";
// import { FaNode } from 'react-icons/fa';
import { FaJava, FaReact } from 'react-icons/fa';

/**
 * I had considered using the `react-icons` package, which had most of
 * these icons ready-made, but I liked the full-color icons available
 * from the various project pages more.
 */
export default function IconFinder({ icon, width, height }) {
  switch (icon) {
    case 'ember':
      return <EmberIcon width={width} height={height} />;
    case 'glimmer':
      return <GlimmerIcon width={width} height={height} />;
    case 'node':
      return <NodeIcon width={width} height={height} />;
      // return <FaNode className="w-12 h-12"></FaNode>
    case 'npm':
      return <NPMIcon width={width} height={height} />;
    case 'yarn':
      return <YarnIcon width={width} height={height} />;
    case 'react':
      // return <ReactIcon width={width} height={height} />;
      /**
       * Custom React icon taken from the React project behaved funny,
       * compared to the rest, so using `react-icons` version here
       */
      return <FaReact className="text-5xl text-react" />;
    case 'git':
      return <GitIcon width={width} height={height} />;
    case 'java':
      /** Couldn't find a decent Java icon. One from Oracle is a JPG :) */
      return (<FaJava className="text-5xl text" />);
    case 'docker':
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="./images/Docker-Logo-White-RGB_Vertical.png" alt="Docker logo" width={width} height={height}></img>
      );
    default:
      return <div className="w-7 h-7"></div>;
  }
}