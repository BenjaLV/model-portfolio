import Navbar from "@/components/ui/navbar/Navbar";


export default function AboutLayout( { children }: {
    children: React.ReactNode;
  } ) {
    return (
      <main className="min-h-screen">

        <Navbar />
        
        <div className="">
          { children }
  
        </div>
      </main>
    );
  }