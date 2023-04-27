import { Box, Center, Paper, TextInput } from '@mantine/core'
import Layout from '@/components/Layout'
export default function ContactPage() {
  return (
    <Layout>
      <Box p={40}>
        <Center>
          <Paper shadow="md" withBorder>
            <TextInput placeholder="name" />
          </Paper>
        </Center>
      </Box>
    </Layout>
  )
}
