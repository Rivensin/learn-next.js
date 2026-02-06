export const metadata = {
  title: "Products | Dlooti",
};

export default function Layout({modal,children} : {modal:React.ReactNode, children:React.ReactNode}){
  return (
    <>
      {children}
      {modal}
    </>
  )
}