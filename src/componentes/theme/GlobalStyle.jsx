//Componente React
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        font-family: 'Poppins', sans-serif; 
    }

    //top
    header{
        background-color: ${({theme}) => theme.secundary};
        transition: .5s;
    }

    .topo-container{
        color: ${({theme}) => theme.text};
        transition: .5s;
    }

    .lista-topo-container a{
        color: ${({theme}) => theme.text};
        transition: .5s;
    }

    //Informations
    .informacoes-container{
        background-color: ${({theme}) => theme.primary};
        color: ${({theme}) => theme.text};
        transition: .5s;
    }

    //plans
    .planos-container{
        background-color: ${({theme}) => theme.secundary};
        color: ${({theme}) => theme.text};
        transition: .5s;
    }

    .planos-container tr:nth-of-type(odd){
        background-color: ${({theme}) => theme.primary};
        transition: .5s;
    }

    .planos-container tr th, .planos-container tr:nth-of-type(even){
        background-color: ${({theme}) => theme.secundary};
        transition: .5s;
    }

    //footer
    .rodape-container{
        background-color: ${({theme}) => theme.primary};
        color: ${({theme}) => theme.text};
        transition: .5s;
    }

    .rodape-container img{
        ${({theme}) => theme.invertColor};
        transition: .5s;
    }

    //footer description 
    .descricao-rodape{
        background-color: ${({theme}) => theme.secundary};
        color: ${({theme}) => theme.text};
        transition: .5s;
    }

    // ---------- Second Page ----------

    // Top Table
    .topo-container-logo-tabela h1{
        color: ${({theme}) => theme.text};
        transition: .5s;
    }

    .logo-topo-img{
        ${({theme}) => theme.invertColor};
        transition: .5s;
    }

    .topo-container-tabela{
        background-color: ${({theme}) => theme.secundary};
        transition: .5s;
    }

    .lista-topo-container a{
        &:hover{
            color: ${({theme}) => theme.blue};
            transition: .5s;
        }
    }

    //table
    .tabela-container{
        background-color: ${({theme}) => theme.primary};
        transition: .5s;
    }

    .tabela-container thead th:first-child{
        background-color: ${({theme}) => theme.primary};
        border-bottom: 1px solid white;
        border-left: none;
        transition: .5s;
    }

    .tabela-container thead{
        background-color: ${({theme}) => theme.secundary};
        color: ${({theme}) => theme.text};
        transition: .5s;
    }

    .tabela-container tbody tr th:first-child{
        background-color: ${({theme}) => theme.secundary};
        color: ${({theme}) => theme.text};
        transition: .5s;
    }

    .tabela-container td{
        background-color: ${({theme}) => theme.secundary};
        transition: .5s;

        &:hover{
            background-color: ${({theme}) => theme.primary};
            transition: .5s;
        }
    }

    .tabela-container tr td{
        color: ${({theme}) => theme.text};

        &:hover{
            background-color: ${({theme}) => theme.blue};
            transition: .5s; 
            .marcador-azul{
                background-color: ${({theme}) => theme.secundary};
                transition: .5s;
            }
        }
    }

    // ---------- Modal Page ----------
    .container-modal{
        background-color: ${({theme}) => theme.secundary};
        color: ${({theme}) => theme.text};
    }

    .form-container{
        background-color: ${({theme}) => theme.primary};
    }

    .step{
        background-color: ${({theme}) => theme.primary};
    }

    .steps::after{
        border-bottom: 1px solid ${({theme}) => theme.text};
    }
    
    .revision-data span{
        color: ${({theme}) => theme.text};
    }

    .botao-fechar{
        background-color: ${({theme}) => theme.text};
        color: ${({theme}) => theme.primary};
    }

    .actions button{
        background-color: ${({theme}) => theme.text};
        color: ${({theme}) => theme.primary};
    }
    
    // ---------- Media Queries ----------
    @media (max-width: 1400px){



        .planos-container h2{
            margin: 0;
        }
    
        .container-modal{
            width: 80%;
        }

    }
    
    @media (max-width: 750px){
        .topo-container{
            flex-wrap: wrap;
            text-align: center;
            justify-content: center;
        }

        .logo-descricao{
            padding: 5px;
        }
        
        .lista-topo{
            margin-top: 20px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .banner-container{
            flex-wrap: wrap;
            justify-content: center;
            text-align: center;
        }

        .banner-container figure{
           width: 55%;
        }
        .banner-descricao{
            padding: 0 20px;  
        }

        .banner-descricao p {
            margin: 10px auto;  
        }

        .banner-descricao :last-child{
            text-align: center;
        }

        .planos-container{
            padding: 30px;
        }

        .planos-container h2{
            padding: 50px;
        }
    }

    @media(max-width: 700px){
        .topo-container-logo-tabela{
            flex-wrap: wrap;
            align-items: center;
            text-align: center;
        }

        .logo-topo, .lista-topo-container{
            margin: auto;
        }

        .lista-topo-tabela{
            flex-wrap: wrap;
            justify-content: center;
            padding-left: 20px;
            margin-top: 20px;
        }

        .rodape-container-tabela h1{
            text-align: center;
        }
    }

    @media (max-width: 600px){
        .anuncio-tamanho{
            flex-wrap: wrap;
            height: 250px;
            text-align: center;
        }

        .anuncio-tamanho a, .botao, .pAnuncio-descricao{
            margin: auto;
        }

        .container-modal{
            width: 75%;
        }
    }

    @media (max-width: 500px){
        .lista-topo{
            padding-left: 20px;
        }

        .informacoes-container h2{
            font-size: 1.4rem;
            padding: 40px 25px;
        }

        .planos-container h2{
            font-size: 1.4rem;
            padding: 0;
        }

        .informacoes-banners p{
            width: 90%;
        }

        .steps{
            flex-wrap: wrap;
            gap: .5rem;
        }

        .steps::after{
            display: none;
        }

        .container-modal{
            padding-bottom: 100px;
        }

        .form-control{
            flex-wrap: wrap;
        }
    }

    @media (max-width: 300px){
        .logo-topo, .logo-rodape{
            flex-direction: column;
            text-align: center;
        }

        .logo-rodape{
            padding:20px;
        }

        .logo-topo img, .logo-rodape img{
            margin: auto;
        }

        .anuncio-tamanho{
            height: 350px;
        }
    }
`