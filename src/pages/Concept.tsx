import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Concept = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header showBack />

      <main className="flex-1 flex justify-center px-6 py-12">
        <div className="max-w-3xl w-full flex flex-col gap-14">
          {/* Section 1: Why */}
          <section className="section-card animate-fade-in">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Why AI Leckie
            </p>
            <h2 className="text-xl md:text-2xl leading-relaxed mb-6">
              文档写完就发布，问题留给用户发现。
              <br />
              <span className="text-accent-glow">Leckie 不接受这种流程。</span>
            </h2>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              技术文档的国际化远不只是语言翻译。用户在不同地区、不同语境下阅读同一份文档，
              感受到的清晰度、可信度、甚至专业程度都可能截然不同。传统审校依赖人工抽查，
              无法覆盖所有细节。Leckie 的使命是让每一篇文档在发布前，都经过一次真正严格的审视——
              不是为了挑刺，而是为了让读者少踩一个坑。
            </p>
          </section>

          {/* Section 2: What */}
          <section className="section-card animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              What Leckie Reviews
            </p>
            <h2 className="text-xl md:text-2xl leading-relaxed mb-6">
              不是检查语法，
              <br />
              <span className="text-accent-glow">是检查你有没有在替读者思考。</span>
            </h2>
            
            <div className="flex flex-col gap-5 mt-6">
              <div className="pl-5 border-l-2 border-line">
                <h4 className="text-sm font-medium text-foreground mb-1">结构逻辑</h4>
                <p className="text-sm text-muted-foreground">段落之间是否有清晰的递进关系，读者是否能顺着你的思路走完全程。</p>
              </div>
              <div className="pl-5 border-l-2 border-line">
                <h4 className="text-sm font-medium text-foreground mb-1">术语一致性</h4>
                <p className="text-sm text-muted-foreground">同一个概念是否在文档中使用了多种表述，造成理解混乱。</p>
              </div>
              <div className="pl-5 border-l-2 border-line">
                <h4 className="text-sm font-medium text-foreground mb-1">地域适配</h4>
                <p className="text-sm text-muted-foreground">表达方式、示例、数据格式是否符合目标读者的习惯与期待。</p>
              </div>
              <div className="pl-5 border-l-2 border-line">
                <h4 className="text-sm font-medium text-foreground mb-1">可操作性</h4>
                <p className="text-sm text-muted-foreground">步骤描述是否足够明确，用户能否按照指引完成操作而不产生歧义。</p>
              </div>
            </div>
          </section>

          {/* Section 3: Core Problem */}
          <section className="section-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              The Core Problem
            </p>
            <h2 className="text-xl md:text-2xl leading-relaxed mb-6">
              把"这里好像哪里不对"，
              <br />
              <span className="text-accent-glow">变成"这里具体有什么问题，怎么改"。</span>
            </h2>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              传统审校反馈常常模糊：这段话读起来怪怪的，那个词用得不太对。
              这种反馈让作者无从下手。Leckie 的每一条审校意见都必须具体、可执行——
              指出问题、解释原因、给出建议。如果连 Leckie 都说不清楚问题在哪，
              那就不算问题。
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Concept;
