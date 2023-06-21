import Produto from "@/model/Produto";


interface ProdutoItemProps {
  produto: Produto;
}

export default function ProdutoItem(props: ProdutoItemProps) {
  const { produto } = props;

  return (
    <div>
      <a
        href={produto.Link}
        target="blank"
        className={`
      flex p-4 md:flex-col
      items-center justify-center gap-2
      md:w-56 md:h-96
        w-80 h-56
      bg-white rounded-md 
      border-2 border-zinc-400
    `}
      >
        <div className="flex-1 flex items-center justify-center">
          <img
            className="max-w-[150px] max-h-[150px]"
            src={produto.Imagem}
            alt="imagem do produto"
          />
          <div className="md:invisible border-r-2 border-zinc-500 h-48 mx-2"></div>
        </div>

        <div className="flex flex-col">
          <div className="text-sm font-semibold my-2">{produto.nome}</div>
          <div className="md:border md:border-zinc-500 md:w-full md:my-2"></div>
          <div className="text-xl text-green-600 font-black mb-2">
            R$ {produto.preco}
          </div>
        </div>
      </a>
    </div>
  );
}



