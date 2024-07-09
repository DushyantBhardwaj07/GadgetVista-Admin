import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Logo from "./Logo";

export default function SignIn() {
  return (
    <div className="flex h-screen">
      {/* Left side - Ivory strip with login */}
      <div className="w-full md:w-1/3 bg-gradient-to-b from-ivory to-amber-100 flex flex-col items-center p-10 justify-between mt-0 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-red-200 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-200 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="w-full max-w-sm mt-6 z-10">
          <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center mt-20 p-3 font-serif">GadgetVista</h1>
          <h2 className="text-2xl font-bold mb-4 text-gray-700 p-2 mx-10 font-sans">Welcome to Admin Panel</h2>
          <p className="text-lg text-gray-600 mb-8 p-3 font-light mx-8">Please sign in to access the dashboard</p>
          <button
            onClick={() => signIn('google')}
            className="flex items-center justify-center w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold text-lg transition duration-300 ease-in-out hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 shadow-lg"
          >
            <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="#ffffff" d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
            </svg>
            Login with Google
          </button>
        </div>
        
        {/* Additional content at the bottom */}
        <div className="mt-12 text-center z-10">
          <p className="text-sm text-gray-500 mb-2 font-medium">Need help?</p>
          <p className="text-sm text-red-600 hover:text-red-800 transition duration-300 font-semibold">Contact Support</p>
          <div className="mt-4 flex justify-center space-x-4">
          <a href="mailto:dushyantbhardwaj26@gmail.com" className="text-gray-400 hover:text-gray-600 transition-transform hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
            </a>
            <a href="https://www.instagram.com/dushyaaant_bhardwaj/" className="text-gray-400 hover:text-gray-600 transition-transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://x.com/dushyaaant" className="text-gray-400 hover:text-gray-600 transition-transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Large image */}
      <div className="hidden md:block w-2/3">
        <div className="h-full bg-cover bg-center" style={{backgroundImage: "url('https://au.buynship.com/contents/uploads/2020/02/BH.jpeg')"}}>
          {/* You can add an overlay or additional content here if needed */}
        </div>
      </div>
    </div>
  )
}