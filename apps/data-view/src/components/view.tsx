

interface DefineLineProps {
 identifier: string;
 keyword: string;
 page: number | string;
}
interface DataHeap {
 value: string | number;
 rigth: null | object;
 left: null | object;
}

interface HeapStruct {
 root: null | DataHeap;
}

function DefineLine(props: DefineLineProps): JSX.Element {
 const { identifier, keyword, page } = props;

 return (
  <>
   <span>{page + " "}</span>
   <span className="text-red-500">{identifier + " "}</span>
   <span className="text-indigo-500">{keyword + " "}</span>
  </>
 )

}

const ex = {
 heap: {
  value: 90,
  left: {
   value: 30
  },
  right: {
   value: 60
  }
 }
}



var ast = {
 root: null
};
var node = (value: string | number): DataHeap => {
 return {
  value: value,
  left: null,
  rigth: null
 }
}

function createHeap(value: string | number, ast: HeapStruct) {
 
 if(ast.root == null) {
  ast.root = node(value);
 } else {
  if(ast.root.value <= value) {
   
  } else {

  }
 }
 
}

function heapFy() {

}

function Write(data: Array<HeapStruct>) {
 data.map((data, index) => {
  if(!data.root) {

  }
 })
}

createHeap(10, ast);

console.log(JSON.stringify(ast, null, 2))

export function View(): JSX.Element {
 return (
  <pre className="bg-neutral-900 p-1">
   <code>
     {
      DefineLine({identifier: "model", keyword: "nameModel", page: 1})
      
     }
     {Object.entries(ex).map((data) => {
       return (
       <span className="text-red-400">{data[0]}
        <span className="text-indigo-400">{JSON.stringify(data[1], null, 1)}</span> 
       </span>
      )
     })}
   </code>
  </pre>
 )
}