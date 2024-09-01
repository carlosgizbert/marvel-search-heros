import { Outlet } from 'react-router-dom'
import * as S from './styles'

export default function Layout() {
  return (
    <S.Wrapper>
      <Outlet />
    </S.Wrapper>
  )
}
