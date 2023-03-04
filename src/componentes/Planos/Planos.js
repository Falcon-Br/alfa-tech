import React from 'react'
import IconePessoal from '../img/pessoal-icone.png'
import IconeEquipe from '../img/equipe-icone.png'
import IconeEmpresa from '../img/empresa-icone.png'
import IconeBigTech from '../img/big-tech.png'

function Planos(){
    return(
        <section id="planos">
            <h2>Pague somente pelo que for usar. Sem cobranças adicionais!</h2>

            <table>
                <thead>
                    <tr>
                        <th>
                            <h2>PESSOAL</h2>
                            <img src={IconePessoal} alt="Ícone Uso pessoal"/>
                            <p>Indicado para uso pessoal</p>
                        </th>
                        
                        
                        <th>
                            <h2>PROFISSIONAL</h2>
                            <img src={IconeEquipe} alt="Ícone Equipe"/>
                            <p>Indicado para profissionais de T.I.</p>
                        </th>

                        <th>
                            <h2>EMPRESARIAL</h2>
                            <img src={IconeEmpresa} alt="Ícone Empresa"/>
                            <p>Indicado para uso empresas</p>
                        </th>

                        <th>
                            <h2>BIG TECHS</h2>
                            <img src={IconeBigTech} alt="Ícone Big Tech"/>
                            <p>Indicado para grandes empresas</p>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1 usuário</td>
                        <td>10 usuários</td>
                        <td>25 usuários</td>
                        <td>50 usuários</td>
                    </tr>

                    <tr>
                        <td>1 domínio grátis</td>
                        <td>2 domínios grátis</td>
                        <td>2 domínios grátis</td>
                        <td>3 domínios grátis</td>
                    </tr>

                    <tr>
                        <td>200GB SSD espaço</td>
                        <td>500 SSD espaço</td>
                        <td>1TB SSD espaço</td>
                        <td>2TB SSD espaço</td>
                    </tr>

                    <tr>
                        <td>Ofertas espaciais</td>
                        <td>Ofertas espaciais</td>
                        <td>Ofertas espaciais</td>
                        <td>Ofertas espaciais</td>
                    </tr>

                    <tr>
                        <td>Suporte limitado</td>
                        <td>Suporte ilimitado</td>
                        <td>Suporte ilimitado</td>
                        <td>Suporte ilimitado</td>
                    </tr>
                </tbody>

            </table>
        </section>
    )
}

export default Planos