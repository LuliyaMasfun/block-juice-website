import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, PortfolioImage, Meta } from '../../components/portfolio'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import worksCherrieMami from '../../public/images/portfolio/worksCherrieMami.jpeg'
import { getServerSideProps } from '../../components/chakra'

const Work = () => {
  return (
    <Layout title="Cherrie-Mami">
      <Container>
      <Title>
          Cherrie "Mami" <Badge>2019</Badge>
        </Title>

        <PortfolioImage
          src={worksCherrieMami}
          alt="Cherrie-Mami"
        />

         <P>
          The Somali/Swedish RndB singer Cherrie is one of Swedens most
          prominent artists. It did not take long for her to take over the
          Swedish music game, and ever since, she has taken things to new
          levels. We had a fun time in Malmö creating the visuals for the summer
          tune "Mami".
        </P>
        
      </Container>
    </Layout>
  
)
  }

export default Work
