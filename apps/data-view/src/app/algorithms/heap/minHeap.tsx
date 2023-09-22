/* 
Arr[(i -1) / 2] retorna seu nó pai.
Arr[(2 * i) + 1] retorna seu nó filho esquerdo.
Arr[(2 * i) + 2] retorna seu nó filho direito.

*/

import { FormikValues } from "formik";

export interface NodeProps {
 value: string | number | Array<any>;
 left: null | NodeProps;
 rigth: null | NodeProps;
};

export interface Object {
 value: string | number | Array<any>;
 left: NodeProps;
 rigth: NodeProps
}

 export class Node {
  public value: string | number | Array<any>;
  public left: null | NodeProps;
  public rigth: null | NodeProps;

 constructor(value: string | number | Array<any>) {
     this.value = value;
     this.left = null;
     this.rigth = null;
 }
}

export class MinHeap {
 data: Array<any>;
 root: null | NodeProps;

 constructor() {
  this.data = [];
  this.root = null
};

getFather(indice: number): number {
return Math.floor((indice -1) / 2)
}

getChildRight(indice: number): number {
return Math.floor((2 * indice) / 2)
}

getChildLeft(indice: number): number {
return Math.floor((2 * indice) + 1)
}

getParent(indice: number): number {
return Math.floor((indice - 1) / 2)
}

swap(a: number, b: number): void {
 let tmp = this.data[a];
 this.data[a] = this.data[b];
 this.data[b] = tmp;

 console.log("swap: ", tmp, "for", this.data[a])
};


insert(value: number | FormikValues): void {
let array = this.data;
array.push(value);
var last = this.data.length - 1;
var parent = this.getParent(last);

// console.log(this.data[parent], "-", this.data[last])


while(this.data[parent] && this.data[parent] < this.data[last]) {
 this.swap(parent, last);

 last = this.getParent(last);
 parent = this.getParent(last);
}



};

getData() {
return this.data;
}


tree(index = 0) {
 let root = this.root;

 
 while(index < this.data.length) {
     if(root == null) {
         root = new Node(this.data[index]);
     } else {
         index++;
         this.entry(root, this.data[index])
     }
 }
 

return root;

}
 clear() {
    this.root = null;
    this.data = [];
 }

 entry(root: NodeProps | Object, value: number): void {
 if(root.left == null) {
     root.left = new Node(value);
 } else if(root.rigth == null) {
     root.rigth = new Node(value);
 } else {
    if(root.left != null) {
     this.entry(root.left, value);
    } else if(root.rigth != null) {
     this.entry(root.rigth, value)
    }

}
}

};

