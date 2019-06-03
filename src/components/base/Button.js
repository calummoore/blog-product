import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export default styled.button`
  outline: none;
  ${tw`
    cursor-pointer
    inline-block
    bg-gray-700
    hover:bg-gray-800
    text-xs
    text-white 
    font-bold 
    py-2
    px-4 
    rounded
    border
    border-transparent
    border-solid
    select-none
  `}
`
