import Image, { StaticImageData } from "next/image"
import HeapImage from '../../public/heap.png'

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
    imageSrc: HeapImage,
    imageAlt: "Estrutura de dados Heap",

  },
  {
    id: 2,
    title: "Array Linkado",
    descrition: "Linked Array",
    href: "/linked-array",
    imageAlt: "Liked Array Representatin",
    imageSrc: "/"
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
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
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
