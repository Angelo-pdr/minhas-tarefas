import * as S from './styles'

export type Props = {
  ativo?: boolean
}

const FitrolCard = ({ ativo }: Props) => (
  <S.Card ativo={ativo}>
    <S.Contador>3</S.Contador>
    <S.Label>pedentes</S.Label>
  </S.Card>
)

export default FitrolCard
