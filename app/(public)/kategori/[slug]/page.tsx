export default function CategoryPage({ params }: { params: { slug: string } }) {
  return <div>Kategori: {params.slug}</div>;
}
