import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default function withAuth(middleware: NextMiddleware, requireAuth: string[] = []){
  return async(req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname 

    if(requireAuth.includes(pathname)){
      const token = await getToken({ //Mengambil token dari session (menggunakan next-auth) untuk mengecek apakah user sudah login.
        req,
        secret: process.env.NEXTAUTH_SECRET,
      })

      if(!token){
        const url = new URL('/login',req.url) //Buat URL redirect ke /login dan
        url.searchParams.set('callbackUrl',encodeURI(req.url)) //tambahkan query param callbackUrl supaya nanti bisa diarahkan kembali ke halaman sebelumnya setelah login.
        return NextResponse.redirect(url)
      }
    }

    return middleware(req,next) //Jika sudah login atau path tidak membutuhkan autentikasi, lanjutkan ke middleware utama.

  }
}