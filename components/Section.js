/**
 * Sort of like a 'Card', a descrete section of the doc
 */
export default function Section({ children, id }) {
  return (
    <section id={id} className="my-16">
      {children}
    </section>
  );
}