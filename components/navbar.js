import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItems = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box position="fixed" as="nav" w="100%" bg="white" zIndex={1} {...props}>
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          justifyContent="right"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItems href="/portfolio" path={path}>
            PORTFOLIO
          </LinkItems>
          <LinkItems href="/shop" path={path}>
            SHOP
          </LinkItems>
          <LinkItems href="/about" path={path}>
            ABOUT
          </LinkItems>
          <LinkItems href="/contact" path={path}>
            CONTACT
          </LinkItems>
     </Stack>
      

    <Box flex = {1} align="right">
        <Box ml={2} display={{base: 'inline-block', md:'none'}}>
        <Menu isLazy id="navbar-menu">
            <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            aria-label="Options"
            />

            <MenuList>
                <NextLink href="/portfolio" passHref>
                    <MenuItem as={Link}>PORTFOLIO</MenuItem>
                </NextLink>
                <NextLink href="/shop" passHref>
                    <MenuItem as={Link}>SHOP</MenuItem>
                </NextLink>
                <NextLink href="/about" passHref>
                    <MenuItem as={Link}>ABOUT</MenuItem>
                </NextLink>
                <NextLink href="/contact" passHref>
                    <MenuItem as={Link}>CONTACT</MenuItem>
                </NextLink>
                    </MenuList>
                 </Menu>
             </Box>
         </Box>
      </Container>
     </Box>
  )
}
export default Navbar
