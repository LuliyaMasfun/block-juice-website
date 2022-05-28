import { Container, Heading, Box } from "@chakra-ui/react";
import Section from "../components/section";
import Image from "next/image";

const About = () => {
  return (
<Container>
<Section delay={0.1}>
         
          <Box mt= "5" textAlign="center">
          <p> <b>Block Juice</b> is the production company and plattform responsible for creating and distributing some of 
            Swedens most prominent music videos. We started in 2018 with the ambition of becoming the intersection between independent artists and
            major labels.
        </p>
        </Box>

          <Box align="center" mt={3}>
          <Image src="/images/blockjuice-logo.png" height="5500px" width="4032px">
          </Image>
          <Heading fontSize={14} variant = "section-title">
              Luliya Masfun
          </Heading>
          <p>
            Founder and Creative Manager.
          </p>
          <p>
          blockjuice1@gmail.com
          </p>
          </Box>

          <Box>
            <p style={{
              marginTop:"20px",
            textAlign: "center",
            color: "#EC5800"
            }}>
           <strong>"Block Juice's visuals create feeling and visability 
            for your brand and products at the moment of interaction."
            </strong> 
            </p>
          </Box>
      </Section>
</Container>

  )
}

export default About