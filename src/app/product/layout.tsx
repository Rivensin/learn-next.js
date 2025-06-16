export default function Layout({page,modal} : {page:React.ReactNode, modal:React.ReactNode}){
  return (
    <>
      {page}
      {modal}
    </>
  )
}