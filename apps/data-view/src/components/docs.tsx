import Link from "next/link";

interface BoxTypes {
 title: string;
 links: []
}

const itemsDocs = [
 {
  name: "heap",
 },
 {
  name: "linked-list",
 },
 {
  name: "graph"
 }
];

function Box(props: BoxTypes): JSX.Element {
 const { title, links } = props;

 return (
<>
  <div>
   {title}
 </div>

 {links.map((name) => {
  return <Link href={name} key={name.length} />
 })}
 
 </>
 );
};

export function Docs(): JSX.Element {
 return (
  <>
  <div>
    title
  </div>
   <Link href="/" />
  </>
 )
};