"use client";

import { Search, SearchCheck } from "lucide-react";
import { useState } from "react";
import ProdutoItem from "./Produto-item";
import Produto from "@/model/Produto";

interface ListaProdutoProps {
  produtos: Produto[];
}

export default function ListaProdutos(props: ListaProdutoProps) {
  const [search, setSearch] = useState("");
  return (
    <div className="flex items-center flex-col px-20 pb-6">
      <div className="items-center flex justify-center px-10 py-10 w-96 relative">
        <input
        
          
          name="search"
          id="search"
          placeholder="O que está procurando?"
          className={`
         transition-all appearance-none
      rounded-md outline-none w-96 px-2 py-1 text-zinc-400
     `}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Search
          size={20}
          className="text-zinc-400 absolute top-1/5 cursor-pointer right-12"
        />
      </div>
      <div className="flex flex-1 flex-wrap gap-4 items-center  justify-center">
      {props.produtos.filter((produto) => {
        return search.toLowerCase() === '' ? produto : produto.nome.toLowerCase().includes(search)
      }).map((produto) => {
        return <ProdutoItem key={produto.id} produto={produto} />;
      })}
      </div>
    </div>
  );
}
