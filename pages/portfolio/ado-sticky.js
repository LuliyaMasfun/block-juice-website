import { Container, Badge, Link, List, ListItem, SimpleGrid, GridItem, Divider } from '@chakra-ui/react'
import { Title, PortfolioImage, Meta } from '../../components/portfolio'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
    return (
        <Layout title="ado-sticky">
            <Container>
                <Title> <strong>Ado - "Sticky"</strong> <Badge>2022</Badge></Title>

                <Link href='https://www.youtube.com/watch?v=jtkxESiodjw'>
                    <PortfolioImage
                        src="/images/portfolio/StickyThumb1.png"
                        alt="Ado - Sticky"
                    >
                    </PortfolioImage>
                </Link>

                <P>
                    The up and coming artist <strong>Ado</strong> is back with his third single <strong>"Sticky"</strong>.
                    With his diversed and unique sound Ado is pushing the limits of music and
                    trying his best to innovate with an unheard-of sound. He has only just started
                    covering ground in the Swedish music scene and with "Sticky" Ado is more assertive and aggressive
                    than ever. <strong>The music video directed by Luliya Masfun we get a video that is consistently
                    matching the vibe of the song.</strong>
                </P>

                <Divider my={5}></Divider>

                <Section>
                    <Meta>Director, Dop & Edit</Meta>
                    <Link href='/about'> Luliya Masfun</Link>
                    <ExternalLinkIcon mx="2px" />
                </Section>

                <Divider my={5}></Divider>

                <SimpleGrid columns={[1]} gap={3}>
                    <Section>
                        <GridItem>
                            <Link href="https://www.youtube.com/watch?v=jtkxESiodjw">
                                <PortfolioImage
                                    src="/images/portfolio/StickyThumb6.png"
                                    alt="Ado-Sticky"
                                />
                            </Link>
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem>
                            <Link href="https://www.youtube.com/watch?v=jtkxESiodjw">
                                <PortfolioImage
                                src="/images/portfolio/StickyThumb7.png"
                                alt= "Ado-Sticky"
                                />
                            </Link>
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem>
                            <Link href="https://www.youtube.com/watch?v=jtkxESiodjw">
                                <PortfolioImage
                                src="/images/portfolio/StickyThumb4.png"
                                alt= "Ado-Sticky"
                                />
                            </Link>
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem>
                            <Link href="https://www.youtube.com/watch?v=jtkxESiodjw">
                                <PortfolioImage
                                src="/images/portfolio/StickyThumb8.png"
                                alt= "Ado-Sticky"
                                />
                            </Link>
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem>
                            <Link href="https://www.youtube.com/watch?v=jtkxESiodjw">
                                <PortfolioImage
                                src="/images/portfolio/StickyThumb2.png"
                                alt= "Ado-Sticky"
                                />
                            </Link>
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem>
                            <Link href="https://www.youtube.com/watch?v=jtkxESiodjw">
                                <PortfolioImage
                                src="/images/portfolio/StickyThumb9.png"
                                alt= "Ado-Sticky"
                                />
                            </Link>
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem>
                            <Link href="https://www.youtube.com/watch?v=jtkxESiodjw">
                                <PortfolioImage
                                src="/images/portfolio/StickyThumb10.png"
                                alt= "Ado-Sticky"
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