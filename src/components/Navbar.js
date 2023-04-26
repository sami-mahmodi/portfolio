import { Box, Center, createStyles, Text, Image } from '@mantine/core'

const useStyle = createStyles(theme => ({
  navbar: {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '20%',
    height: '100%',
    backgroundColor: 'gray',
  },
  profile: {
    borderRadius: '50%',
    border: '2px solid orange',
  },
}))

export default function Navbar() {
  const { classes, theme } = useStyle()

  return (
    <Box className={classes.navbar}>
      <Center className={classes.profile}></Center>
    </Box>
  )
}
