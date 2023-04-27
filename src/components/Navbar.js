import { Box, Center, createStyles, Text, Image, Stack } from '@mantine/core'
import Link from 'next/link'

const useStyle = createStyles(theme => ({
  navbar: {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '20%',
    height: '100%',
    backgroundColor: 'black',
  },
  profile: {
    borderRadius: '50%',
    border: '2px solid orange',
    width: '100px',
    height: '100px',
    overflow: 'hidden',
    marginTop: '40px',
  },
}))

export default function Navbar() {
  const { classes, theme } = useStyle()

  return (
    <Stack className={classes.navbar} align="center">
      <Center className={classes.profile}>
        <Image src="./assets/images/me.jpg" />
      </Center>
      <Link href={'/'} style={{ textDecoration: 'none', color: 'white' }}>
        Home
      </Link>
    </Stack>
  )
}
