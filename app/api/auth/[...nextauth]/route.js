import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
const handler = NextAuth({
session:{
   jwt:true,
},

providers:[
   CredentialsProvider({
       type:"credentials",
       credentials:{
       },
       async authorize(credentials,req) {
           const{email,password} = credentials;
           if(email!=="stboystan@gmail.com" || password!=="82434895@stan")
                throw new Error('invalid credentials');
           
           if( email=="stboystan@gmail.com" && password=="82434895@stan");

          return{
           id:"1996", name: "Balaga Effect ", email: "fakeemail@balaga.com"
       } ; 
           
       }
   })
],
pages:{
   signIn:"/auth/signin"
},
secret:process.env.NEXTAUTH_SECRET

})
export { handler as GET, handler as POST }