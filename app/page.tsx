
import ListaProdutos from "@/components/list/list";
import Produtos from "@/data/produtos";


export default function Home() {
  return (
    <div>
    <ListaProdutos produtos={Produtos} />
   </div>
  )
}
