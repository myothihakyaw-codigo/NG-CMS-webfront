import React from 'react'
import { forwardRef, Text as T, TextProps } from '@chakra-ui/react'

/** Text color codes !!
 * normal black color: #222
 */

// for normal text
const Text = forwardRef<TextProps, 'p'>((props, ref) => (
  <T fontSize={16} fontWeight="400" color="#222" ref={ref} {...props}>
    {props?.children}
  </T>
))

// for heading and title
export const Title = forwardRef<TextProps, 'h3'>((props, ref) => (
  <T fontSize={30} fontWeight="700" color="#222" ref={ref} {...props}>
    {props?.children}
  </T>
))

export default Text
