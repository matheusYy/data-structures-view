import { Header } from '../components/header';
import { Section } from '../components/section';


let data = [
  {
    href: "/algorithms",
    title: "algorithms",
    key: 1
  },
  {
    href: "/any",
    title: "any",
    key: 2
  }
]

export default function Page(): JSX.Element {
  return (
    <main>
      <Section header={<Header navigation={data} />} />
    </main>
  );
}
