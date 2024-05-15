import { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {

    interface Tokens {
        refresh: string
        access: string
    }

    interface User {
        id: string
        name: string
        email: string
        is_active: string
        avatar: string
        type: string
        created: string
        role: string
        tokens: Tokens
    }

    interface Session extends DefaultSession {
        user: User
    }
}

// nextauth.d.ts
/*  */declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        user: User
        // tokens: Tokens
    }
}
