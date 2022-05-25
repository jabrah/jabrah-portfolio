import EmberIcon from '../svg/ember';

export default function Skill({ children, icon, link }) {
  return (
    <div className="rounded-md hover:shadow-lg">
      <LinkWrapper link={link} className="flex space-y-2 p-6">
        <div className="">
          <IconFinder icon={icon} width={30} height={30} />
        </div>
        <div className="italic">{children}</div>
      </LinkWrapper>
    </div>
  );
}

/**
 * Create the wrapper element: an anchor if link exists, or div otherwise
 */
function LinkWrapper({ children, className, link }) {
  className = `${className} flex flex-col`;

  return (
    <>
      {
        !!link ? 
          <a className={className} href={link}>{children}</a>
          : <div className={className}>{children}</div>
      }
    </>
  );
}

function IconFinder({ icon, width, height }) {
  switch (icon) {
    case 'ember':
      return <EmberIcon width={width} height={height} />;
    default:
      return <div className="w-7 h-7"></div>;
  }
}
