export default function ArticlePage({ params }: { params: { slug: string } }) {
  return <div>Artikel: {params.slug}</div>;
}
