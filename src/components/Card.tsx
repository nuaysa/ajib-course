export default function Card({ children }: { children: React.ReactNode }) {
  return <div   className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm 
                 flex flex-col h-full min-h-[270px]
                 transition ease-in-out duration-300 hover:shadow-xl hover:scale-105">{children}</div>;
}
