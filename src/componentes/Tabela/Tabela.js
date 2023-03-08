import React from "react"
import style from './Tabela.module.css'

function Tabela(){
    return(
        <table className={style.tabelaContainer}>
            <thead>
                <tr>
                    <th></th>

                    <th>
                        <p>PESSOAL</p>
                        <h2>GRÁTIS</h2>    
                    </th>
                    
                    <th>
                        <p>PROFISSIONAL</p>
                        <h2>R$29</h2>                        
                    </th>

                    <th>
                        <p>EMPRESARIAL</p>
                        <h2>R$59</h2>                       
                    </th>

                    <th>
                        <p>PROFISSIONAL</p>
                        <h2>R$99</h2>
                    </th>
                </tr>
            </thead>

            <tbody>
                
                <tr>
                    <th>MONITORAMENTO DE REDE</th> 
                    <td>3 REDES</td>  
                    <td>10 REDES</td>
                    <td>20 REDES</td>
                    <td>50 REDES</td>
                </tr>

                <tr>
                    <th>DASHBOARD</th>  
                    <td>1 DASHBOARD</td> 
                    <td>5 DASHBOARDS</td>
                    <td>10 DASHBOARDS</td>
                    <td>25 DASHBOARDS</td>
                </tr>

                <tr>
                    <th>USUÁRIO</th> 
                    <td>1 USUÁRIO</td> 
                    <td>5 USUÁRIOS</td>
                    <td>10 USUÁRIOS</td>
                    <td>25 USUÁRIOS</td>
                </tr>

                <tr>
                    <th>RELATÓRIO DE ATUALIZAÇÃO</th>  
                    <td>TODA HORA</td>
                    <td>A CADA 30 MINUTOS</td>
                    <td>QUASE EM TEMPO REAL</td>
                    <td>TEMPO REAL</td>
                </tr>

                <tr>
                    <th>RELATÓRIO DE EMAILS</th>
                    <td><div className={style.marcadorAzul}></div></td>
                    <td><div className={style.marcadorAzul}></div></td>
                    <td><div className={style.marcadorAzul}></div></td>
                    <td><div className={style.marcadorAzul}></div></td>
                </tr>

                <tr>
                    <th>TRANSAÇÃO ILIMITADAS</th>
                    <td><div className={style.marcadorAzul}></div></td>
                    <td><div className={style.marcadorAzul}></div></td>
                    <td><div className={style.marcadorAzul}></div></td>
                    <td><div className={style.marcadorAzul}></div></td>
                </tr>

                <tr>
                    <th>RASTREADOR DE PAGAMENTO</th>
                    <td><div className={style.marcadorAzul}></div></td>
                    <td><div className={style.marcadorAzul}></div></td>
                    <td><div className={style.marcadorAzul}></div></td>
                    <td><div className={style.marcadorAzul}></div></td>
                </tr>

                <tr>
                    <th>EXPORTAÇÃO DE DADOS</th>
                    <td><div className={style.marcadorAzul}></div></td>
                    <td><div className={style.marcadorAzul}></div></td>
                    <td><div className={style.marcadorAzul}></div></td>
                    <td><div className={style.marcadorAzul}></div></td>
                </tr>

                <tr>
                    <th>CONVERSOR DE MOEDA</th>
                    <td></td>
                    <td><div className={style.marcadorAzul}></div></td>
                    <td><div className={style.marcadorAzul}></div></td>
                    <td><div className={style.marcadorAzul}></div></td>
                </tr>

                <tr>
                    <th>ACESSO A API</th> 
                    <td></td>
                    <td><div className={style.marcadorAzul}></div></td>
                    <td><div className={style.marcadorAzul}></div></td>
                    <td><div className={style.marcadorAzul}></div></td>
                </tr>

                <tr>
                    <th>RESTRIÇÃO DE IP</th>
                    <td></td>
                    <td></td>
                    <td> <div className={style.marcadorAzul}></div></td>
                    <td> <div className={style.marcadorAzul}></div></td>
                </tr>

                <tr>
                    <th>FEED PERSONALIZADO</th>   
                    <td></td>
                    <td></td>
                    <td><div className={style.marcadorAzul}></div></td>
                    <td><div className={style.marcadorAzul}></div></td>            
                </tr>

                <tr>
                    <th>LIMITE DE IMPORTAÇÃO DE DADOS</th>
                    <td>ÚLTIMO ANO </td>      
                    <td>ÚLTIMOS 3 ANOS</td>
                    <td>ÚLTIMOS 3 ANOS</td>
                    <td>ÚLTIMOS 3 ANOS</td>     
                </tr>

                <tr>
                    <th>RETENÇÃO DE DADOS</th> 
                    <td>TEMPO DE VIDA</td>  
                    <td>TEMPO DE VIDA</td>
                    <td>TEMPO DE VIDA</td>
                    <td>TEMPO DE VIDA</td>
                </tr>

                <tr>
                    <th>SUPORTE</th> 
                    <td>EMAIL</td>     
                    <td>EMAIL & CHAT</td>
                    <td>EMAIL & CHAT</td>
                    <td>EMAIL, CHAT & VOICE</td>
                </tr>

            </tbody>
            
        </table>
    )
}

export default Tabela