import { Outlet } from 'react-router-dom'
import { Footer } from '@/ui/components/molecules/footer'

import * as S from './styles'

export function Layout() {
  return (
    <S.Wrapper>
      <Outlet />
      <Footer />
    </S.Wrapper>
  )
}
