import IconFinder from "../svg/IconFinder";

export default function Skill({ children, link, icon, iWidth, iHeight, title }) {
  iWidth = iWidth || 30;
  iHeight = iHeight || 30;

  return (
    <div className="rounded-md hover:shadow-lg" title={title}>
      <LinkWrapper link={link} className="flex space-y-2 p-6">
        <div className="">
          <IconFinder icon={icon} width={iWidth} height={iHeight} />
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
