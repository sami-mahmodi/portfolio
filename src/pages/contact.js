import { Box, Center, Paper, TextInput, Title, rem } from '@mantine/core'
import Layout from '@/components/Layout'
export default function ContactPage() {
  return (
    <Layout>
      <Box>
        <Center mt={80}>
          <Title order={1}>
            Contact me I can help you with any any frontend project that suits with my abilities!
          </Title>
          <Paper shadow="md" withBorder></Paper>
        </Center>
      </Box>
    </Layout>
  )
}
