import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
    const blockJuiceImg = `/images/blockjuice-logo.png`

    return (
        <Link href="/" scroll={false}>
            <a>
                <LogoBox>
                 <Image src = {blockJuiceImg} width={30} height={40} alt="logo"/>
                 <Text
                 color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                 fontFamily='Outfit'
                 fontWeight="bold"
                 ml={3}
                 >
                     Block Juice
                 </Text>
                </LogoBox>
            </a>
            </Link>
    )
}
export default Logo
