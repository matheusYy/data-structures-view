"use client"
import dynamic from "next/dynamic";
// import { View } from "../../../components/view";
// import { MinHeap, NodeProps } from "./minHeap";

import { useCallback, useEffect, useState } from "react";
import { TreeView } from "./treeView";




export default function Page(): JSX.Element {
  const [tree, setTree] = useState<null>();
  const [heap, setHeap] = useState<Array<number>>([]);
  const [heapView, setHeapView] = useState<Array<number>>();
  // const [heap, setHeap] = useState<NodeProps | null>();
  //  const minHeap = new MinHeap();

  const Formik = dynamic(() => import("./formik").then(data => data.FormikComponent), {
    loading: () => {
      return (
        <h1>
          Looding...
        </h1>
      )
    },
    ssr: false
  })

  /* 
    const resolve = useCallback((data: number ): void => {
      setHeap((state) => [...state, data]);
  
      heap.map((data) => {
        minHeap.insert(data);
      });
  
  
      setHeapView(minHeap.getData());
    }, [heap]);
  
    heap.map(data => {
     minHeap.insert(data);
    });
  
   useEffect(() => {
    console.log(minHeap.getData())
    setHeapView(minHeap.getData());
   }, [resolve]) */

  return (
    <main className="m-2 p-5">
      <article className="mt-5 p-4 overflow-hidden">
        <Formik />
        <div className="w-max">
          {JSON.stringify(heapView, null, 3)}
        </div>
        <div className="flex justify-center items-center p-5 mt-4 w-max sm:w-14 h-[22em]">
          <TreeView />
        </div>
      </article>
    </main>
  )
}