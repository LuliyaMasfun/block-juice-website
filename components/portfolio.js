import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
    Heading,
    Box,
    Image,
    Link,
    Badge
 } from '@chakra-ui/react'

 export const Title = ({ children }) => (
     <Box>
         <NextLink href="/portfolio">
             <Link>Portfolio</Link>
         </NextLink>
     
     <span>
         &nbsp;
         <ChevronRightIcon />
         &nbsp;
     </span>
    <Heading display ='inline-block' as="h3" fontSize={20} mb={4}>
    {children}
    </Heading>
    </Box>
 )
 export const PortfolioImage = ({src, alt}) => (
     <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} cursor="pointer" />
 )
 export const Meta = ({children}) => (
     <Badge colorScheme="orange" mr={2}>
         {children}
     </Badge>
 )