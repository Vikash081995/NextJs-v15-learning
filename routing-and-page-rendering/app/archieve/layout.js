export default function ArchiveLayout({ latest, archive }) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="latest-news">{latest}</section>
    </div>
  );
}
