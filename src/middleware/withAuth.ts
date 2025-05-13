import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const onlyAdminPage = ['/dashboard']
const authPage = ['/login','/register']

export default function withAuth(middleware: NextMiddleware, requireAuth: string[] = []){
  return async(req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname 

    if(requireAuth.includes(pathname)){
      const token = await getToken({ //Mengambil token dari session (menggunakan next-auth) untuk mengecek apakah user sudah login.
        req,
        secret: process.env.NEXTAUTH_SECRET,
      })

      if(!token && !authPage.includes(pathname)){
        const url = new URL('/login',req.url) //Buat URL redirect ke /login dan
        url.searchParams.set('callbackUrl',encodeURI(req.url)) //tambahkan query param callbackUrl supaya nanti bisa diarahkan kembali ke halaman sebelumnya setelah login.
        return NextResponse.redirect(url)
      }

      if(token){
        if(authPage.includes(pathname)){
          return NextResponse.redirect(new URL('/',req.url))
        }

        if(token.role !== 'admin' && onlyAdminPage.includes(pathname)){
        return NextResponse.redirect(new URL('/',req.url))
        }
      }

      
    }

    return middleware(req,next) //Jika sudah login atau path tidak membutuhkan autentikasi, lanjutkan ke middleware utama.

  }
}