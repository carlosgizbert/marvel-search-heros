import styled, { css } from 'styled-components'
import { LabelProps } from './types'
import { getColorValue } from '@/ui/utils'

const toggleWidth = 48
const toggleHeight = 28

export const Input = styled('input')`
  display: none;
  visibility: hidden;
`

export const Label = styled('label')<LabelProps>`
  user-select: none;
  transition: 0.2s ease;
  display: inline-block;
  width: ${`${toggleWidth}px`};
  height: ${`${toggleHeight}px`};
  position: relative;
  border-radius: ${({ theme }) => theme.rounded.large};
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: ${`${toggleWidth}px`};
    height: ${`${toggleHeight}px`};
    top: 0;
    left: 0;
    border-radius: ${({ theme }) => theme.rounded.large};
    background-color: ${({ theme, $colorUnchecked }) => getColorValue(theme, $colorUnchecked)};
    transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);

    ${({ theme, checked, $colorChecked }) =>
      checked &&
      css`
        background-color: ${getColorValue(theme, $colorChecked)};
        transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);
      `}
  }

  &:after {
    content: '';
    display: block;
    height: 16px;
    width: 16px;
    top: 50%;
    position: absolute;
    left: 4px;
    transform: translateY(-50%);
    border-radius: ${({ theme }) => theme.rounded.large};
    background-color: ${({ theme, $colorCircle }) => getColorValue(theme, $colorCircle)};
    transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);

    ${(p) =>
      p.checked &&
      css`
        left: calc(${`${toggleWidth}px`} - ${`${toggleHeight}px`} + 3px);
      `}
  }

  ${(p) =>
    p.disabled &&
    css`
      opacity: 0.25;
      cursor: not-allowed;
    `}
`