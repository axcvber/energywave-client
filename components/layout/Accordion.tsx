import React from 'react'
import { Accordion as ChakraAccordion, AccordionButton, AccordionItem, AccordionPanel, Heading } from '@chakra-ui/react'
import { FiPlus, FiMinus } from 'react-icons/fi'

interface IAccordion {
  data: Array<any>
}

const Accordion: React.FC<IAccordion> = ({ data }) => {
  return (
    <ChakraAccordion allowMultiple>
      {data &&
        data.map((item: any) => (
          <AccordionItem
            key={item.id}
            my={4}
            sx={{
              boxShadow: 'xs',
              color: 'gray.700',
              bg: 'white',
              border: 0,
              borderRadius: 10,
              overflow: 'hidden',
              position: 'relative',
              '&:before': {
                content: "''",
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '6px',
                height: '100%',
                background: 'green.400',
                zIndex: 9,
              },
            }}
          >
            {({ isExpanded }) => (
              <>
                <AccordionButton
                  py={6}
                  pl={6}
                  _expanded={{ bg: 'green.400', color: 'white' }}
                  _hover={{ bg: 'green.50' }}
                  sx={{
                    'svg': {
                      fontSize: 22,
                    },
                  }}
                >
                  <Heading fontSize={'lg'} fontWeight={600} flex='1' textAlign='left' mr={3}>
                    {item.question}
                  </Heading>
                  {isExpanded ? <FiMinus /> : <FiPlus />}
                </AccordionButton>
                <AccordionPanel pb={4} color='gray.600' bg={isExpanded ? 'green.50' : 'initial'}>
                  {item.answer}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
    </ChakraAccordion>
  )
}

export default Accordion
