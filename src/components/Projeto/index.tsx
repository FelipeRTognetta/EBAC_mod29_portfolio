import Titulo from '../Titulo'
import Paragrafo from '../Paragrafo'
import { Card, LinkBotao } from './styles'

export type Props = {
  Ptitle: string
  Pparagraph: string
  Plink: string
}

const Projeto = (props: Props) => (
  <Card>
    <Titulo>{props.Ptitle}</Titulo>
    <Paragrafo tipo="secundario">{props.Pparagraph}</Paragrafo>
    <LinkBotao href={props.Plink} target="_blank">
      Visualizar
    </LinkBotao>
  </Card>
)

export default Projeto
