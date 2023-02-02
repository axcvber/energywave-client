import { HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { FiLayers } from 'react-icons/fi'
import { MdOutlineDescription } from 'react-icons/md'
import { ComponentProductDescription, ComponentProductPreviewOptions, Maybe } from '../../generated'
import Paper from '../layout/Paper'
import FullOptions from './features/FullOptions'
import ProductDescription from './features/ProductDescription'

interface IProductFeatures {
  productName: string
  fullOptions: Maybe<ComponentProductPreviewOptions>[]
  description: ComponentProductDescription
}

const ProductFeatures: React.FC<IProductFeatures> = ({ productName, fullOptions, description }) => {
  return (
    <Paper>
      <Tabs variant='enclosed' colorScheme={'brand'}>
        <TabList borderColor={'gray.100'}>
          <TabItem title={'Характеристики'} icon={<FiLayers />} />
          <TabItem title={'Опис'} icon={<MdOutlineDescription />} />
        </TabList>
        <TabPanels>
          <TabPanel px={1} pb={0}>
            <FullOptions productName={productName} fullOptions={fullOptions} />
          </TabPanel>
          <TabPanel px={1} pb={0}>
            <ProductDescription productName={productName} description={description} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Paper>
  )
}

interface ITabItem {
  title: string
  icon: ReactNode
}

const TabItem: React.FC<ITabItem> = ({ title, icon }) => {
  return (
    <Tab>
      <HStack
        spacing={1.5}
        sx={{
          'svg': {
            fontSize: 18,
          },
        }}
      >
        {icon}
        <Text fontWeight={600}>{title}</Text>
      </HStack>
    </Tab>
  )
}

export default ProductFeatures
