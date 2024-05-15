import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'email' },
                password: { label: 'password', type: 'password' }
            },

            async authorize(credentials, res) {
                const response = await fetch(`${process.env.API_AUTH_URL}/auth/login/`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json;version=v1_web',
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    })
                })

                const data = await response.json()

                if (data && response.ok) {
                    return data
                }
                return null
            },
        })
    ],
    pages: {
        signIn: '/'
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            return session;
        }
    },
    session: {
        strategy: "jwt"
    }
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }