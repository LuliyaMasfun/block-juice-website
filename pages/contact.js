import React from 'react'
import {Box, Button} from '@chakra-ui/react'
import Section from '../components/section'
import { IoLogoYoutube, IoLogoInstagram } from 'react-icons/io5'



const Contact = () => {
return (

    <Section>
    <Section>
    <Box>
    <div style={{
    color: "#EC5800",
    fontSize: "24px",
    textAlign: "center",
    marginTop: "84px" 
    }}
    >
       <strong>Contact Us.</strong>
    </div>
    </Box>
    </Section>

    <Section>
        <div style={{
            textAlign: "center"
        }}>
        blockjuice1@gmail.com
        </div>
        <div style={{
            textAlign: "center"
        }}>
        Stockholm, Sweden
        </div>

       
        
        <div style={{
            marginTop:"550px",
            position: "absolute",
            marginLeft:"380px"
        }}>
        <Button
               fontSize={30}
                variant="ghost"
                colorScheme="black"
                leftIcon={<IoLogoYoutube />}
              >
                  </Button>
                  </div>
                  <div style={{
            marginTop:"550px",
            position: "absolute",
            marginLeft:"320px"
        }}>
             <Button
               fontSize={30}
                variant="ghost"
                colorScheme="black"
                leftIcon={<IoLogoInstagram />}
              >
                  </Button>
                  </div>
        <div style ={{
            marginTop:"600px",
            position: "absolute",
            marginLeft:"300px"
            
        }}
        >
        © 2018 by Block Juice
        </div>
       

    </Section>
    </Section>
)
}


export default Contact