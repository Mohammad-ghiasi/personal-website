'use client'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { Grid } from 'react-loader-spinner'
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function loading() {
    return (
        <Box className='flex justify-center items-center w-[100vw] h-[100vh] fixed z-50'>
            <Grid
                visible={true}
                height="80"
                width="80"
                color="#ffb400"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass="grid-wrapper"
            />
        </Box>
    )
}
