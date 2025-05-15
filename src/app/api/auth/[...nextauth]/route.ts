import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { login, loginWithGoogle } from "@/lib/firebase/services";
import { compare } from "bcrypt";
import GoogleProvider from 'next-auth/providers/google'

const authOptions : NextAuthOptions = 
{
  session: {
    strategy: 'jwt', //sesi user akan disimpan di JWT
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({ //Provider custom yang memungkinkan user login pakai email & password.
      type: 'credentials',
      name: 'Credentials',
      credentials: {
        email : {
          label: 'Email', type: 'email'
        },
        password : {
          label: 'Password', type: 'password'
        }, 
      },
      async authorize(credentials){  //Tempat login diverifikasi
        const {email,password} = credentials as {email: string, password: string}

        const user : any = await login({email})

        if(user){
          const passwordConfirm = await compare(password, user.password)

          if(passwordConfirm){
            return user
          } else {
            return null
          }
        } else {
          return null
        }

      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || '',
    })
  ],
  callbacks: {
    async jwt({token, account, profile, user}: any){ //menambahkan data user ke JWT token.
      if(account?.provider === 'credentials'){
        token.email = user.email
        token.fullname = user.fullname
        token.role = user.role
      }

      if(account?.provider === 'google'){
        const data = {
          fullname: user.fullname,
          email: user.email,
          type: 'google'
        }

        await loginWithGoogle(data, (result: {status: boolean, data: any}) => {
          if(result.status){
            token.email = result.data.email
            token.fullname = result.data.fullname
            token.role = result.data.role
          }
        })
      }
      return token
    },

    async session({session, token} : any){ // Data dari JWT dipindahkan ke session agar bisa diakses pakai useSession().
      if('email' in token){
        session.user.email = token.email
      }

      if('fullname' in token){
        session.user.fullname = token.fullname
      }

      if('role' in token){
        session.user.role = token.role
      }

      return session
    }
  },
  pages: {
    signIn : '/login',
    
  }
}

const handler = NextAuth(authOptions) // Ini wajib di App Router agar NextAuth bisa handle request GET & POST di route /api/auth/[...nextauth].

export {
  handler as GET, handler as POST
}