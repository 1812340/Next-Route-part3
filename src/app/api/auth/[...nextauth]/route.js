import { connect } from "mongoose"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import User from "@/models/User";

const handle = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
})
CredentialsProvider({
  id: "credentials",
  name: "Credentials",
  async authorize(credentials) {
    await connect();
    try {
      const user = User.findOne({ email: credentials.email })

      if (user) {
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (isPasswordCorrect) {
          return user
        } else {

          throw new Error("User nor found!");
        }
      } else {
        throw new Error("User nor found!");
      }
    } catch (err) {
      throw new Error(err)
    }
  }
})


export { handle as GET, handle as POST }