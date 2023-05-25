import * as S from './styles'
import FitrolCard from '../../components/FiltroCard'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" />
      <S.Filtros>
        <FitrolCard />
        <FitrolCard />
        <FitrolCard />
        <FitrolCard />
        <FitrolCard />
        <FitrolCard ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)
export default BarraLateral
