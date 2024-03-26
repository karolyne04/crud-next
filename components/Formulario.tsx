'use client'
import Cliente from "@/core/Cliente";
import Entrada from "./Entrada";
import { useState } from "react";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    cancelado?: () => void
    clienteMudou?: (cliente: Cliente) => void

}

export default function Formulario(props: FormularioProps) {
    const id  = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {id ? (

                <Entrada somenteLeitura texto="Código" valor={id} tipo={"number"} className="mb-4"/>
            ) : false}
            <Entrada texto="Nome" valor={nome} valorMudou={setNome} somenteLeitura={false} tipo="text" className="mb-4"/>
            <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade} somenteLeitura={false}/>
            <div className="flex justify-end mt-7">
                <Botao cor="blue" className="mr-2" onClick={() => props.clienteMudou?.(new Cliente(nome, idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="gray">
                    Cancelar
                </Botao>
            </div>

        </div>
    )
}