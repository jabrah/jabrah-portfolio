import IconFinder from "../svg/IconFinder";
import * as motion from "motion/react-client"

export default function Skill({ children, link, icon, iWidth, iHeight, title }) {
  iWidth = iWidth || 30;
  iHeight = iHeight || 30;

  return (
    <motion.div
        className="rounded-md m-4 bg-gray-800 content-center hover:shadow-lg hover:shadow-myblue-300/10"
        title={title}
        whileHover={{scale: 1.1 }}
      >
      <LinkWrapper link={link} className="flex space-y-2 p-6">
        <div className="">
          <IconFinder icon={icon} width={iWidth} height={iHeight} />
        </div>
        <div className="italic">{children}</div>
      </LinkWrapper>
    </motion.div>
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
          <a
              className={className}
              href={link}
              target="_blank"
              rel="noreferrer"
            >
            {children}
          </a>
          : <div className={className}>{children}</div>
      }
    </>
  );
}
