import { NextRequest, NextResponse } from "next/server";
import withAuth from "./middleware/withAuth";

export function mainMiddleware(request: NextRequest){
  return NextResponse.next() //Middleware utama yang hanya melanjutkan ke proses selanjutnya tanpa mengubah apapun.
}

export default withAuth(mainMiddleware,['/dashboard']) //Menjalankan mainMiddleware, tapi dengan proteksi autentikasi di route /dashboard.


//const isLogin = true
// if(!isLogin){
//   return NextResponse.redirect(new URL('/login',request.url));
// }
// export const config = {
// matcher: ['/dashboard/:path*','/about/:path*']
// }