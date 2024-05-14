import { DefaultSession } from "next-auth";

declare module "next-auth" {

    interface Tokens {
        refresh: string,
        access: string
    }

    interface User {
        "id": string,
        "name": string,
        "email": string,
        "is_active": string,
        "avatar": string,
        "type": string,
        "created": string,
        "role": string,
        tokens: Tokens
    }

    interface Session extends DefaultSession {
        user: User
        tokens: Tokens
    }
}

// nextauth.d.ts
declare module "next-auth/jwt" {
    interface JWT {
        access_token?: string
        refresh_token?: string
        user?: User
    }
}
