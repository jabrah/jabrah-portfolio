/**
 * Sort of like a 'Card', a descrete section of the doc
 */
export default function Section({ children, id, title }) {
  return (
    <section id={id} className="my-8 px-12 py-8">
      {title? <h2 className="text-3xl mb-10">{title}</h2> : ''}
      {children}
    </section>
  );
}