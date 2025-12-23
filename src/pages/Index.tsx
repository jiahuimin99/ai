import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LeckieGrid from "@/components/home/LeckieGrid";

const Index = () => {
  return (
    <div className="h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Rotating Earth Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] rounded-full opacity-30 animate-spin"
          style={{ 
            animationDuration: '120s',
            background: `
              radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.4) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, hsl(193 86% 40% / 0.3) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, hsl(216 25% 20%) 0%, hsl(214 33% 8%) 70%)
            `,
            boxShadow: '0 0 120px hsl(var(--primary) / 0.3), inset 0 0 80px hsl(var(--primary) / 0.1)'
          }}
        >
          {/* Grid overlay for tech feel */}
          <div className="absolute inset-0 rounded-full bg-grid opacity-20" />
          {/* Glowing ring */}
          <div className="absolute inset-2 rounded-full border border-primary/20" />
          <div className="absolute inset-6 rounded-full border border-primary/10" />
        </div>
      </div>
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/40" />
      
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-4 relative z-10 pt-20">
        {/* Main Title */}
        <h1 className="text-lg md:text-xl lg:text-2xl font-medium text-center mb-2 animate-fade-in glow-text max-w-3xl leading-relaxed">
          如果你的文档经不起"骂"，那它也经不起用户的审视。
        </h1>
        
        {/* Subtitle Line 1 */}
        <p className="text-sm md:text-base text-center text-foreground/80 mb-1 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          一个不留情面的毒舌审校员，替你拦住烂文档。
        </p>
        
        {/* Subtitle Line 2 - smaller */}
        <p className="text-xs text-center text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          AI Leckie: one Leckie becomes many, but the standard remains one.
        </p>

        {/* Leckie Grid */}
        <LeckieGrid />

        {/* Hint */}
        <p className="mt-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.5s" }}>
          选择你的 AI Leckie
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
