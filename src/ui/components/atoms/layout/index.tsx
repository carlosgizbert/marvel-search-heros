import { Outlet } from 'react-router-dom'
import * as S from './styles'

export function Layout() {
  return (
    <S.Wrapper>
      <Outlet />
    </S.Wrapper>
  )
}
