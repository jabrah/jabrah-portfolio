/**
 * Sort of like a 'Card', a descrete section of the doc
 */
export default function Section({ children, id, title }) {
  return (
    <section id={id} className="my-16">
      <h2 className="text-3xl my-10">{title}</h2>
      {children}
    </section>
  );
}