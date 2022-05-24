import Head from 'next/head'
import Navbar from '../navbar.js'
import {Box, Container} from '@chakra-ui/react'



const Main = ({children, router}) => {
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Block Juice homepage" />
                <meta name="author" content="Luliya Masfun" />
                <meta name="author" content="Block Juice" />

                <title>Block Juice - Homepage</title>
            </Head>

            <Navbar path = {router.asPath} />

            <Container maxW="container.md" pt={14}>
                {children}

            </Container>
        </Box>
    )
}
export default Main