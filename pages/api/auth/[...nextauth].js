import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import "doten"

export default NextAuth({
  providers: [
    // OAuth authentication providers...
   
    EmailProvider({
      server: process.env.MAIL_SERVER,
      from: 'NextAuth.js <no-reply@example.com>'
    }),
  ]
})