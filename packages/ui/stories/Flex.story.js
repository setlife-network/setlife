import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Flex, Text } from '../src'

storiesOf('Components|Flex', module)
    .addParameters({
        info: {
            propTablesExclude: [Box, Text]
        }
    })
    .add(
        'Flex Component',
        () => (
            <Flex
                direction='row'
                alignItems='center'
            >
                <Box bg='purple' flex={1} p='2rem'>
                    <Text color='white'>Flex</Text>
                </Box>
                <Box bg='blue' flex={1} p='1rem'>
                    <Text color='white'>Flex</Text>
                </Box>
            </Flex>
        ),
        {
            info: {
                text: 'Extended <Box /> component for flexbox layouts',
                inline: true
            }
        }
    )
    .add(
        'Align',
        () => (
            <>
                <Flex direction='row' alignItems='flex-start' bg='lightGrey' height={120} mb='2rem'>
                    <Flex height={60} bg='grey' width='50%' center>
                        <Text color='white'>Flex Start (Row)</Text>
                    </Flex>
                </Flex>
                <Flex direction='row' alignItems='flex-end' bg='lightGrey' height={120} mb='2rem'>
                    <Flex height={60} bg='grey' width='50%' center>
                        <Text color='white'>Flex End (Row)</Text>
                    </Flex>
                </Flex>
                <Flex direction='row' alignItems='center' bg='lightGrey' height={120} mb='2rem'>
                    <Flex height={60} bg='grey' width='50%' center>
                        <Text color='white'>Center (Row)</Text>
                    </Flex>
                </Flex>
            </>
        ),
        {
            notes: 'Align elements to the start or end of a row, as well as top, bottom, or center of a column.'
        }
    )
    .add(
        'Justify',
        () => (
            <>
                <Flex direction='row' justifyContent='flex-start' bg='lightGrey' p='2rem' mb='2rem'>
                    <Flex height={60} bg='grey' center p='2rem' mr='2rem'>
                        <Text color='white'>Flex Start</Text>
                    </Flex>
                    <Flex height={60} bg='grey' center p='2rem' mr='2rem'>
                        <Text color='white'>Flex Start</Text>
                    </Flex>
                    <Flex height={60} bg='grey' center p='2rem' mr='2rem'>
                        <Text color='white'>Flex Start</Text>
                    </Flex>
                </Flex>
                <Flex direction='row' justifyContent='flex-end' bg='lightGrey' p='2rem' mb='2rem'>
                    <Flex height={60} bg='grey' center p='2rem' mr='2rem'>
                        <Text color='white'>Flex End</Text>
                    </Flex>
                    <Flex height={60} bg='grey' center p='2rem' mr='2rem'>
                        <Text color='white'>Flex End</Text>
                    </Flex>
                    <Flex height={60} bg='grey' center p='2rem' mr='2rem'>
                        <Text color='white'>Flex End</Text>
                    </Flex>
                </Flex>
                <Flex direction='row' justifyContent='space-around' bg='lightGrey' p='2rem' mb='2rem'>
                    <Flex height={60} bg='grey' center p='2rem' mr='2rem'>
                        <Text color='white'>Space Around</Text>
                    </Flex>
                    <Flex height={60} bg='grey' center p='2rem' mr='2rem'>
                        <Text color='white'>Space Around</Text>
                    </Flex>
                    <Flex height={60} bg='grey' center p='2rem' mr='2rem'>
                        <Text color='white'>Space Around</Text>
                    </Flex>
                </Flex>
                <Flex direction='row' justifyContent='space-between' bg='lightGrey' p='2rem' mb='2rem'>
                    <Flex height={60} bg='grey' center p='2rem' mr='2rem'>
                        <Text color='white'>Space Between</Text>
                    </Flex>
                    <Flex height={60} bg='grey' center p='2rem' mr='2rem'>
                        <Text color='white'>Space Between</Text>
                    </Flex>
                    <Flex height={60} bg='grey' center p='2rem' mr='2rem'>
                        <Text color='white'>Space Between</Text>
                    </Flex>
                </Flex>
                <Flex direction='row' justifyContent='center' bg='lightGrey' p='2rem' mb='2rem'>
                    <Flex height={60} bg='grey' center p='2rem' mr='2rem'>
                        <Text color='white'>Center</Text>
                    </Flex>
                    <Flex height={60} bg='grey' center p='2rem' mr='2rem'>
                        <Text color='white'>Center</Text>
                    </Flex>
                    <Flex height={60} bg='grey' center p='2rem' mr='2rem'>
                        <Text color='white'>Center</Text>
                    </Flex>
                </Flex>
            </>
        )
    )
    .add(
        'Absolute Centering',
        () => (
            <Flex bg='lightGrey' center height={200}>
                <Text>Absolute centering can be this easy!</Text>
            </Flex>
        ),
        {
            notes: {
                markdown: "Pass the `center` prop to center a container's children"
            }
        }
    )
    .add(
        'Responsive Grid',
        () => (
            <Flex direction='row' wrap>
                <Box width={[1, 1/2, 1/3, 1/4]} height={60} bg='green' />
                <Box width={[1, 1/2, 1/3, 1/4]} height={60} bg='yellow' />
                <Box width={[1, 1/2, 1/3, 1/4]} height={60} bg='red' />
                <Box width={[1, 1/2, 1/3, 1/4]} height={60} bg='purple' />
                <Box width={[1, 1/2, 1/3, 1/4]} height={60} bg='blue' />
            </Flex>
        ),
        {
            notes: ''
        }
    )