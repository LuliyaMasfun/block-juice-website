import Layout from '../components/layouts/main'
import { ChakraProvider } from '@chakra-ui/provider'
import Fonts from '../components/layouts/fonts'

const Website = ({Component, pageProps, router}) => {
    return (
        <ChakraProvider>
            <Fonts />
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    )
}
export default Website