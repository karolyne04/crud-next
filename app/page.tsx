'use client'
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import useClientes from "./hook/useClientes";

export default function Home() {

const {
  cliente,
  clientes, 
  clienteSelecionado, 
  novoCliente, 
  excluirCliente, 
  salvarCliente,
  tabelaVisivel,
  exibirTabela,
  exibirFormulario,
}   = useClientes()
  
  return (
    <div className={` flex justify-center items-center
    h-screen bg-gradient-to-r from-blue-500 to-purple-500
    cor-text-white`}>
       <Layout titulo="Cadastro Simples">
        {tabelaVisivel === tabela ? (
            <>
              <div className="flex justify-end">
                <Botao cor="green" className="mb-4" onClick={() => exibirFormulario('form')}>Novo cliente</Botao>
              </div>
                <Tabela clientes={clientes}
                clienteSelecionado={clienteSelecionado}
                clienteExcluido={excluirCliente}/>
            </>
          ) : (
              <Formulario cliente={cliente} cancelado={() => exibirTabela('tabela')}></Formulario>
          )}

      </Layout>
    </div>
  )
}