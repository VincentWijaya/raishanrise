import {
  Box,
  useColorMode
} from '@chakra-ui/react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

export default function EmbedTwitter() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <TwitterTimelineEmbed
        sourceType="profile"
        screenName="SW_RaishaJKT48"
        options={{height: 800}}
        theme={colorMode}
        key={colorMode}	
    />
  )
}