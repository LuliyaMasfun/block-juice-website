import {
    Container,
    Badge,
    Link,
    Divider,
    SimpleGrid,
    GridItem
  } from '@chakra-ui/react'
  import { Title, PortfolioImage, Meta } from '../../components/portfolio'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import Section from '../../components/section'

const Work = () => {
    return (
      
      <Layout title="bbaby-jazlin-spicy">
        <Container>
          <Title>
            B.baby, Jazlin - "SPICY" <Badge>2021</Badge>
          </Title>
  
          <Link href="https://www.youtube.com/watch?v=KPGdrsBBBPA">
            <PortfolioImage
              src="/images/portfolio/thumbSpicy8.jpg"
              alt="Redbull"
            />
          </Link>
  
          <P>
            <strong>Block Juice</strong> collaborated with the production company <strong>Meraki</strong> to create the commercial music video "Spicy" for Mcdonalds Spicy Nuggets. 
          </P>
  
          <Divider my={5}></Divider>
  
          <Section>
          <Meta>B-foto</Meta>
          <Link href="./pages/about"> Luliya Masfun</Link>
          <ExternalLinkIcon mx="2px" />
        </Section>

  
          <Divider my={5}></Divider>
  
          <SimpleGrid columns={[1]} gap={3}>
            <Section>
              <GridItem>
                <Link href="https://www.youtube.com/watch?v=KPGdrsBBBPA">
                  <PortfolioImage
                    src="/images/portfolio/thumbSpicy1.jpg"
                    alt="Spicy Mcdonalds"
                  />
                </Link>
              </GridItem>
            </Section>
  
            <Section>
              <GridItem>
                <Link href="https://www.youtube.com/watch?v=OrCjJQnzJBk">
                  <PortfolioImage
                    src="/images/portfolio/thumbSpicy2.jpg"
                    alt="Nästa Nivå Redbull"
                  />
                </Link>
              </GridItem>
            </Section>
            <Section>
              <GridItem>
                <Link href="https://www.youtube.com/watch?v=uyJCIJi9itc&t=38s">
                  <PortfolioImage
                    src="/images/portfolio/thumbSpicy3.jpg"
                    alt="Spicy Mcdonalds"
                  />
                </Link>
              </GridItem>
            </Section>
            <Section>
              <GridItem>
                <Link href="https://www.youtube.com/watch?v=uyJCIJi9itc&t=38s">
                  <PortfolioImage
                    src="/images/portfolio/thumbSpicy4.jpg"
                    alt="Spicy Mcdonalds"
                  />
                </Link>
              </GridItem>
            </Section>
            <Section>
              <GridItem>
                <Link href="https://www.youtube.com/watch?v=uyJCIJi9itc&t=38s">
                  <PortfolioImage
                    src="/images/portfolio/thumbSpicy5.jpg"
                    alt="Spicy Mcdonalds"
                  />
                </Link>
              </GridItem>
            </Section>
            <Section>
              <GridItem>
                <Link href="https://www.youtube.com/watch?v=uyJCIJi9itc&t=38s">
                  <PortfolioImage
                    src="/images/portfolio/thumbSpicy6.jpg"
                    alt="Spicy Mcdonalds"
                  />
                </Link>
              </GridItem>
            </Section>
            <Section>
              <GridItem>
                <Link href="https://www.youtube.com/watch?v=uyJCIJi9itc&t=38s">
                  <PortfolioImage
                    src="/images/portfolio/thumbSpicy.jpg"
                    alt="Spicy Mcdonalds"
                  />
                </Link>
              </GridItem>
            </Section>
            
          </SimpleGrid>
        </Container>
      </Layout>
    )
  }
  
  export default Work
   