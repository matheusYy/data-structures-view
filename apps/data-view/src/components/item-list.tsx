import Image, { StaticImageData } from "next/image"
import LinkedList from '../../public/linkedList.svg'
import BinaryTree from "../../public/data-structure-7390522.svg";
import TreeGraph from "../../public/treeGraph.svg";

interface Products {
  id: number;
  title: string;
  descrition: string;
  href: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
}

const products: Array<Products> = [
  {
    id: 1,
    title: "Heap",
    descrition: "Estrutura de dados Heap",
    href: 'algorithms/heap',
    imageSrc: BinaryTree,
    imageAlt: "Estrutura de dados Heap",

  },
  {
    id: 2,
    title: "Array Linkado",
    descrition: "Linked Array",
    href: "/linked-array",
    imageAlt: "Liked-Array ",
    imageSrc: LinkedList
  },
  {
    id: 3,
    title: "Grafo Direcional",
    descrition: "Representação de um Grafo Direcional",
    href: "/linked-array",
    imageAlt: "Imagem Grafo Direcional",
    imageSrc: TreeGraph
  }
  // More products...
]

export default function ItemList(): JSX.Element {
  return (
    <div>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-stone-50">
         Exemplos
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div className="group relative" key={product.id}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-[2] lg:object-center group-hover:opacity-75 lg:h-80 ">
                <Image
                  alt={product.imageAlt}
                  className="sm:aspect-square bg-cover h-full w-full aspect-[1] object-cover object-top lg:h-full lg:w-full"
                  width={440}
                  height={410}
                  src={product.imageSrc}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-stone-50">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-stone-50">{product.descrition}</p>
                </div>
          
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
