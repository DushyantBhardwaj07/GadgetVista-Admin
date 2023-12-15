import { useSession } from "next-auth/react";

export default function HomeHeader() {
  const { data: session } = useSession();
  return (
    <div className="text-blue-900 flex justify-between">
      <h2 style={{ fontSize: '1.4rem' }}>
        Hello, <b>{session?.user?.name}</b>
      </h2>
      <div className="flex bg-gray-200 gap-1 text-black rounded-lg overflow-hidden">
        <img src={session?.user?.image} alt="" className="w-8 h-8" />
        <span className="p-1">
          <b>{session?.user?.name}</b>
        </span>
      </div>
    </div>
  );
}