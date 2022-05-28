import React from 'react'
import {Container, Badge, Link, SimpleGrid, GridItem, Divider} from '@chakra-ui/react'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Title, PortfolioImage, Meta } from '../../components/portfolio'



 const Work = () => {
  return (
    
    <Layout title="Redbull">
      <Container>
        <Title>
          Puma <Badge>2022</Badge>
        </Title>

        <Link href="https://www.youtube.com/watch?v=wkNMFU4-V9I&t=766s">
          <PortfolioImage
            src="/images/portfolio/thumbRedbull2.avif"
            alt="Redbull"
          />
        </Link>

        <P>
          <strong>Block Juice</strong> partnered up with <strong>Redbull</strong> to distribute the anual series "Nästa Nivå" and "Ord mot Ord"
           where underground aspiring artist compete to win the prestige music challenge. The winner gets a label deal with Universal Music and a trip to South Africa to record in Redbulls music studio.
        </P>

        <Divider my={5}></Divider>

        <Section>
          <Meta>Media Partner</Meta>
          <strong>Block Juice</strong>
        </Section>

        <Divider my={5}></Divider>

        <SimpleGrid columns={[1]} gap={3}>
          <Section>
            <GridItem>
              <Link href="https://www.youtube.com/watch?v=AI6e9j8uwZY">
                <PortfolioImage
                  src="/images/portfolio/thumbRedbull4.jpeg"
                  alt="Nästa Nivå Redbull"
                />
              </Link>
            </GridItem>
          </Section>

          <Section>
            <GridItem>
              <Link href="https://www.youtube.com/watch?v=OrCjJQnzJBk">
                <PortfolioImage
                  src="/images/portfolio/thumbRedbull5.png"
                  alt="Nästa Nivå Redbull"
                />
              </Link>
            </GridItem>
          </Section>
          <Section>
            <GridItem>
              <Link href="https://www.youtube.com/watch?v=uyJCIJi9itc&t=38s">
                <PortfolioImage
                  src="/images/portfolio/thumbRedbull3.jpg"
                  alt="Ord mot Ord Adaam"
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
 