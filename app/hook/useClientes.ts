import Cliente from "@/core/Cliente"
import ClienteRepositorio from "@/core/ClienteRepositorio"
import { useState, useEffect } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import useTabelaOurForm from "./useTabelaOuForm"

export default function useClientes() {

  const repo: ClienteRepositorio = new ColecaoCliente()

  const { tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario}  = useTabelaOurForm()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    exibirFormulario()

  }

  async function excluirCliente(cliente: Cliente) {
   await repo.excluir(cliente)
   obterTodos()
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    exibirFormulario()
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }
  return {

      cliente,
      clientes,
      novoCliente,
      exibirTabela,
      exibirFormulario,
      salvarCliente,
      excluirCliente,
      clienteSelecionado,
      tabelaVisivel,
      obterTodos,
  }


}