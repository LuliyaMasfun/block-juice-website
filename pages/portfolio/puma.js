import React from 'react'
import {Container, Badge, Link, SimpleGrid, GridItem, Divider} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Title, PortfolioImage, Meta } from '../../components/portfolio'


 const Work =() => {
  return (
    <Layout title="Puma">
    <Container>
      <Title>
        Puma "She Moves Us SS22" <Badge>2022</Badge>
      </Title>

      <Link href="https://www.youtube.com/watch?v=P9xCDe1h_s4&t=1s">
        <PortfolioImage
          src="/images/portfolio/thumbPuma4.jpg"
          alt="Puma She moves us SS22"
        />
      </Link>

      <P>
      <strong>She Moves Us</strong> tells the story of how <strong>PUMA’s</strong> female
       ambassadors were inspired to become who they are today, 
       the challenges they’ve had to overcome, the women who 
       helped them and how they made it to the top in their 
       respective fields.
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
            <Link href="https://www.youtube.com/watch?v=P9xCDe1h_s4&t=1s">
              <PortfolioImage
                src="/images/portfolio/thumbPuma1.jpg"
                alt="Puma She moves us SS22"
              />
            </Link>
          </GridItem>
        </Section>

        <Section>
          <GridItem>
            <Link href="https://www.youtube.com/watch?v=P9xCDe1h_s4&t=1s">
              <PortfolioImage
                src="/images/portfolio/thumbPuma3.jpg"
                alt="Puma She moves us SS22"
              />
            </Link>
          </GridItem>
        </Section>
        <Section>
          <GridItem>
            <Link href="https://www.youtube.com/watch?v=P9xCDe1h_s4&t=1s">
              <PortfolioImage
                src="/images/portfolio/thumbPuma2.jpg"
                alt="Puma She moves us SS22"
              />
            </Link>
          </GridItem>
        </Section>
        <Section>
          <GridItem>
            <Link href="https://www.youtube.com/watch?v=P9xCDe1h_s4&t=1s">
              <PortfolioImage
                src="/images/portfolio/thumbPuma5.jpg"
                alt="Puma She moves us SS22"
              />
            </Link>
          </GridItem>
        </Section>
        
        <Section>
          <GridItem>
            <Link href="https://www.youtube.com/watch?v=P9xCDe1h_s4&t=1s">
              <PortfolioImage
                src="/images/portfolio/thumbPuma6.jpg"
                alt="Puma She moves us SS22"
              />
            </Link>
          </GridItem>
        </Section>
        <Section>
          <GridItem>
            <Link href="https://www.youtube.com/watch?v=P9xCDe1h_s4&t=1s">
              <PortfolioImage
                src="/images/portfolio/thumbPuma7.jpg"
                alt="Puma She moves us SS22"
              />
            </Link>
          </GridItem>
        </Section>
        
      </SimpleGrid>
    </Container>
  </Layout>

  )
}
export default Work;
