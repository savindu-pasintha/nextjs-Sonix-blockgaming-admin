import React from 'react'
// core components
import { Grid } from '@mui/material'
import { LayoutPropsInterface } from '../utils/interface'
import { buildLayoutBackground } from '../utils/functions'
import { grey } from '@mui/material/colors'
import './empty-layout.module.css'

const EmptyLayout = (props: LayoutPropsInterface): JSX.Element => {
  const backgroundStyle = buildLayoutBackground(props)
  const sxProps = Object.assign({ backgroundColor: grey[100] }, props.sx, backgroundStyle)

  return (
    <Grid container sx={sxProps}>
      {props.children}
    </Grid>
  )
}

export default EmptyLayout
