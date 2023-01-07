import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
export default NextAuth({

    providers: [
        GoogleProvider({
            
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
      ]
    
})

//1018249564241-676118sdvqt7u6oic1bpdi176cf3s6ha.apps.googleusercontent.com
//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