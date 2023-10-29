import type { SolidAuthConfig } from "@auth/solid-start"
import { SolidAuth } from "@auth/solid-start"
import GoogleProvider from "@auth/core/providers/google"

export const authOpts: SolidAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  session: {
    strategy: "jwt",
  },
}

export const { GET, POST } = SolidAuth(authOpts)
