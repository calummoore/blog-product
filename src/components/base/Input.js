import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export default styled.input`
  ${tw`
    bg-white 
    focus:outline-none
    focus:shadow-outline 
    border border-gray-400 
    rounded
    py-1 
    px-3 
    inline-block
    w-full
    max-w-xs
    text-base
    appearance-none 
    leading-normal
    shadow-none
  `}
  border: 1px solid #cbd5e0;
`
