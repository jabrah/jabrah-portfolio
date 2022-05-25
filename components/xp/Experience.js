import Image from 'next/image';
import styles from './Experience.module.css';

export default function Experience({ children, employer, jobTitle, timeline, tech, logo }) {
  return (
    <li className={styles['experience-item']}>
      <Icon logo={logo} altText={`${jobTitle} @ ${employer} icon`} />
      <div className="grid gap-8 grid-cols-3 divide-x-4">
        <div className="flex flex-col py-12 pl-0 pr-8">
          <h3 className="text-xl">{employer}</h3>
          <hr className="my-2 border-myblue-300" />
          <div className="font-bold">{jobTitle}</div>
          <div>{timeline}</div>
          <div className="mt-auto italic text-sm">{tech}</div>
        </div>
        <div className="col-span-2 py-12 pl-16 pr-0 border-myblue-300">
          {children}
        </div>
      </div>
    </li>
  );
}

function Icon({ logo, altText }) {
  const iconClasses = [
    'absolute', 'bg-myblue-300', 'text-myblue-300', 'w-14', 'h-14',
    'rounded-full', 'top-16', 'left-1/3', 'p-1'
  ].join(' ');

  const logoEl = !!logo && (
    <Image
      src={logo}
      alt={altText}
      height={100}
      width={100}
      className="rounded-full"
    />
  );

  return (
    <span className={iconClasses}>
      {/* todo: The logos aren't handled gracefully - (corners are clipped) */}
      {logoEl}
    </span>
  );
}