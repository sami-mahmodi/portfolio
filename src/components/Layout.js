import { AppShell } from '@mantine/core'
import Navbar from './Navbar'
export default function Layout({ children }) {
  return (
    <AppShell header={<Navbar />} padding={0} sx={{ overflow: 'hidden' }}>
      {children}
    </AppShell>
  )
}
