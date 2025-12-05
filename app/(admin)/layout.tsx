export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (<div style={{display:"flex"}}><aside>Sidebar</aside><section>{children}</section></div>);
}
