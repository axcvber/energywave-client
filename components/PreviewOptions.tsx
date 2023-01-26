import { Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import { ComponentProductPreviewOptions, Maybe } from '../generated'

interface IPreviewOptions {
  data: Maybe<ComponentProductPreviewOptions>[]
}

const PreviewOptions: React.FC<IPreviewOptions> = ({ data }) => {
  return (
    <Grid
      templateAreas={`
      ". ."
      ". ."
      ". ."
      `}
      gridTemplateColumns={'3fr 1fr'}
      width={'100%'}
      gap={2}
    >
      {data.map((item) => (
        <React.Fragment key={item?.id}>
          <GridItem>
            <Text color='gray.500' fontSize={'sm'}>
              {item?.option}
            </Text>
          </GridItem>
          <GridItem justifySelf={'flex-end'}>
            <Text color='gray.500' fontSize={'sm'}>
              {item?.description}
            </Text>
          </GridItem>
        </React.Fragment>
      ))}
    </Grid>
  )
}

export default PreviewOptions
