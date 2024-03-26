import Cliente from "./Cliente";

export default interface ClienteRepositorio {
    salvar(client: Cliente): Promise<Cliente>
    excluir(Cliente: Cliente): Promise<void>
    obterTodos(): Promise<Cliente[]>
}