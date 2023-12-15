import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "@/components/Nav";
import Layout from "@/components/Layout";
import HomeHeader from "@/components/HomeHeader";
import HomeStats from "@/components/HomeStats";

export default function Home() {
  return (<Layout>
    <HomeHeader />
    <HomeStats />
  </Layout>);
}
