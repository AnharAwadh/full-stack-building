import React from 'react'
import {
    Box,
    Link,
    Image,
  } from "@chakra-ui/react";
  import { useState, useEffect } from "react";
function Scroll() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};
  return (
    <div>
        {scrollPosition > 500 && (<Link href='/#top'>
            <Box position='fixed'
                bottom='20px'
                right={['16px', '84px']}
                zIndex={1}
            >
                <Image src='images/icons/top.svg'
                    w='60px'
                    h='60px'
                />
            </Box>
        </Link>)}
    </div>
  )
}

export default Scroll