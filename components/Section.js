/**
 * Sort of like a 'Card', a descrete section of the doc
 */
export default function Section({ children }) {
  return (
    <section id="me" className="my-16">
      {children}
    </section>
  );
}