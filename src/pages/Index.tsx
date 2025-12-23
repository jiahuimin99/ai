import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LeckieGrid from "@/components/home/LeckieGrid";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative z-10">
        {/* Slogan */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-4 animate-fade-in glow-text">
          One Leckie becomes many,
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-12 animate-fade-in glow-text" style={{ animationDelay: "0.1s" }}>
          but the standard remains one.
        </h2>

        {/* Leckie Grid */}
        <LeckieGrid />

        {/* Hint */}
        <p className="mt-10 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.5s" }}>
          选择一位 Leckie 开始审校
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
