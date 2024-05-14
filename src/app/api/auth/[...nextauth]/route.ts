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
                const response = await fetch("https://api.homologation.cliqdrive.com.br/auth/login/", {
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
                    return {
                        id: data.user.id,
                        name: data.user.name,
                        email: data.user.email,
                        is_active: data.user.is_active,
                        avatar: data.user.avatar,
                        type: data.user.type,
                        created: data.user.created,
                        role: data.user.role,
                        tokens: {
                            access: data.tokens.access,
                            refresh: data.tokens.refresh,
                        }
                    }
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
                token.access_token = user.tokens.access
                token.refresh_token = user.tokens.refresh
                token.user = user
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user = token.user as typeof session.user
                session.tokens = {
                    access: token.access_token!,
                    refresh: token.refresh_token!
                }
            }
            return session
        }
    },
    session: {
        strategy: "jwt"
    }
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }