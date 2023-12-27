import Navbar from "@/components/ui/navbar/Navbar";


export default function HomeLayout( { children }: {
    children: React.ReactNode;
  } ) {
    return (
      <main className="min-h-screen px-5">

        <Navbar />
        
        <div className="px-0 sm:px-10">
          { children }
  
        </div>
      </main>
    );
  }