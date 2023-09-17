import { Header } from "../../components/header"

interface NavProps {
    href: string;
    title: string;
    key: string | number 
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

 let nav: Array<NavProps> = [
 {
  href: "/",
  title: "Home",
  key: 1
 },
]

  return (
    <>
     <Header navigation={nav} />
     {children}
    </>
  )
}