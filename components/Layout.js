import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "@/components/Nav";
import { useState } from "react";
import Logo from "./Logo";

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);
  const { data: session } = useSession();
if (!session) {
    return (
      <div className="bg-blue-400 min-h-screen flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 opacity-50"></div>
        </div>
        <h1 className="text-4xl font-bold mb-9 text-white z-10">GadgetVista</h1>
        <div className="text-center w-full sm:w-96 mx-4">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray relative z-10">
            <h1 className="text-2xl font-bold mb-8 p-3 text-gray-800">Welcome to Admin Panel</h1>
            <button
              onClick={() => signIn('google')}
              className="bg-blue-700 p-3 px-6 rounded-lg font-bold text-white shadow-lg hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-300"
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bgGray min-h-screen text-black">
      <div className="block md:hidden flex items-center justify-center p-4">
        <button onClick={() => setShowNav(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6">
          <Logo />
        </div>
      </div>
      <div className="flex">
        <Nav show={showNav} />
        <div className="flex-grow p-4 text-black">{children}</div>
      </div>
    </div>
  );
}
