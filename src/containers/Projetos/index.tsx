import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'

import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Projeto
          Ptitle={'Project clone Disney+'}
          Pparagraph={'Clone of Disney+ landing page'}
          Plink={
            'https://github.com/FelipeRTognetta/EBAC_projeto4_clone-Disney-'
          }
        />
      </li>
      <li>
        <Projeto
          Ptitle={'Project film page'}
          Pparagraph={'Clone of GravityFalls series page'}
          Plink={'https://github.com/FelipeRTognetta/EBAC_projeto4_exercicio'}
        />
      </li>
      <li>
        <Projeto
          Ptitle={'To do list'}
          Pparagraph={'A to do list using Vue.js'}
          Plink={'https://github.com/FelipeRTognetta/EBAC_todoList_vue'}
        />
      </li>
      <li>
        <Projeto
          Ptitle={'Project of a fictional shop'}
          Pparagraph={'Page made using HTML, CSS and JS'}
          Plink={
            'https://github.com/FelipeRTognetta/EBAC_exercicio_mod14_projeto3'
          }
        />
      </li>
      <li>
        <Projeto
          Ptitle={'Landing page of a fictional event'}
          Pparagraph={'Page of a fictional event using SCSS'}
          Plink={
            'https://github.com/FelipeRTognetta/EBAC_mod22_exercicio_aniversario/tree/main'
          }
        />
      </li>
      <li>
        <Projeto
          Ptitle={'Photo gallery'}
          Pparagraph={'A Jquery photo gallery'}
          Plink={'https://github.com/FelipeRTognetta/EBAC_Jquery_galeria'}
        />
      </li>
    </Lista>
  </section>
)

export default Projetos
