import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        p={3} 
        mb={6} 
        textAlign="center"
        >
        Hello, we are video creators based in Sweden!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
            Block Juice
          </Heading>
        <p> Block Juice is a production company and plattform responsible for creating and distributing some of 
            Swedens most prominent music videos. We have the ambition to create commercial projects, music videos and documentaries that communicate with their audience at moment of interaction.
            Block Juice's visuals create feeling and visability for your products and brands at the moment of interaction.
        </p>
      </Box>
      </Box>
    </Container>
  )
}
export default Page
