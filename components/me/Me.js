import ContactInfo from './ContactInfo';

/**
 * Intent: show my name and some contact info, such as GH link
 * Want to be rather large initially, but collapse to a top nav
 * when scrolled.
 * 
 * We could try retrieving this info from somewhere later on
 * 
 * @returns {JSX.Element} personal / contact info
 */
export default function Me() {
  return (
    <div className="space-y-16">
      <div className="flex flex-col lg:flex-row justify-between space-y-4">
        {/* Add an image of my dumb face here? */}
        <h1 className="text-5xl text-myblue-200">John Abrahams</h1>
        <ContactInfo></ContactInfo>
      </div>
      <div id="summary" className="space-y-4">
        <p>Placeholder text...</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat quam, varius at dui a, 
          cursus tincidunt nulla. Morbi interdum suscipit tellus sit amet ullamcorper. Sed luctus libero 
          nulla, eu ultrices est ornare semper. Morbi eget lacus ac urna auctor malesuada nec commodo 
          nisi. Nunc mollis massa ante, vel consequat sapien molestie sit amet. Praesent faucibus in sem 
          eu ultrices. Donec ex enim, finibus faucibus dictum vel, mattis vel mi. Nunc eget dolor nec mi 
          pretium pellentesque sed et quam. Morbi id ex sem. Nulla eleifend auctor elit. Curabitur malesuada 
          urna nec gravida congue. Integer suscipit vestibulum ultricies. Fusce posuere, ante eu ullamcorper 
          pellentesque, enim ligula vulputate erat, non laoreet est magna nec enim. Fusce a eleifend turpis. 
          Suspendisse tristique nisi quis eros congue scelerisque sed quis mi.
        </p>
        <p>
          Donec vitae enim faucibus, consequat turpis nec, scelerisque urna. Ut sapien leo, tempus eu turpis 
          ut, pellentesque ultrices nisl. Mauris condimentum, sapien ac gravida ultrices, nisl augue semper 
          arcu, vel scelerisque ligula purus quis purus. Proin in finibus leo. Quisque pellentesque libero 
          ac erat bibendum, posuere iaculis orci tincidunt. Fusce sit amet eleifend lacus. Vivamus quis est 
          sit amet tellus efficitur porta eget sit amet ligula. Nam semper libero convallis pretium rhoncus. 
          Vestibulum justo ante, porttitor non dolor pulvinar, rhoncus efficitur risus. Quisque eu diam a 
          felis cursus cursus vitae quis erat. Nullam tempor mi vitae tellus lobortis aliquet.
        </p>
      </div>
    </div>
  );
};
