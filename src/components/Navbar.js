import { Box, Center, createStyles, Text, Image, Stack, rem } from '@mantine/core'
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
  name: {
    letterSpacing: '4px',
    fontSize: '20px',
    textTransform: 'uppercase',
  },
  link: {
    textDecoration: 'none',
    color: theme.colorScheme == 'dark' ? 'whitesmoke' : 'black',
    textTransform: 'uppercase',
    marginTop: rem(20),
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: rem(40),
  },
}))

export default function Navbar() {
  const { classes, theme } = useStyle()

  return (
    <Stack className={classes.navbar} align="center">
      <Center className={classes.profile}>
        <Image src="./assets/images/me.jpg" />
      </Center>
      <Text
        style={theme.colorScheme === 'dark' ? { color: 'cyan' } : { color: 'black' }}
        className={classes.name}>
        Sami Mahmodi
      </Text>

      <Box className={classes.box}>
        <Link href={'/'} className={classes.link}>
          Home
        </Link>
        <Link href={'/'} className={classes.link}>
          About
        </Link>
        <Link href={'/'} className={classes.link}>
          Contact Me
        </Link>
        <Link href={'/'} className={classes.link}>
          Services
        </Link>
        <Link href={'/'} className={classes.link}>
          Blogs
        </Link>
      </Box>
    </Stack>
  )
}
