import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Concept = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 flex justify-center px-6 py-12 pt-28">
        <div className="max-w-3xl w-full flex flex-col gap-12">
          {/* Section 1: Why */}
          <section className="section-card animate-fade-in">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Why AI Leckie
            </p>
            <h2 className="text-xl md:text-2xl leading-relaxed mb-6">
              为什么需要 AI Leckie
            </h2>
            <div className="text-sm md:text-base text-foreground/80 leading-relaxed space-y-4">
              <p>
                文档国际化不是"把中文翻成英文"。真正难的是：在多人协作、快速迭代、模块化膨胀的现实里，把同一套产品能力讲成<span className="text-accent-glow">「全球用户一眼就懂、用起来不劝退」</span>的标准化叙事。
              </p>
              <p>
                EdgeOne 的文档复杂度在飙升：功能多、链路长、边界多；各模块由不同产品经理各自维护，很难天然对齐结构、术语和表达习惯。国际化进一步放大差异：同一概念在不同语言里，读者预期完全不同，错误也更致命。
              </p>
              <p>
                于是我们做了 AI Leckie：一个"毒舌但讲理"的审校员，把经验从人的脑子里抽出来，变成可复用的标准与流程。
              </p>
            </div>
          </section>

          {/* Section 2: What */}
          <section className="section-card animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              What Leckie Reviews
            </p>
            <h2 className="text-xl md:text-2xl leading-relaxed mb-6">
              Leckie 在审什么
            </h2>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-6">
              我们复盘历史 Review，把"感觉"固化成五条硬标准（从上到下，越靠前越致命）：
            </p>
            
            <div className="flex flex-col gap-5">
              <div className="pl-5 border-l-2 border-primary/40">
                <h4 className="text-sm font-medium text-foreground mb-1">1. 结构是否清晰</h4>
                <p className="text-sm text-muted-foreground">用户能不能在开头 10 秒知道：是什么、谁能用、为什么要用、有什么限制/风险。核心信息不许埋深处。</p>
              </div>
              <div className="pl-5 border-l-2 border-primary/40">
                <h4 className="text-sm font-medium text-foreground mb-1">2. 表达是否清楚</h4>
                <p className="text-sm text-muted-foreground">少绕弯、少背景堆砌、步骤像步骤。写给终端用户，避免敝帚自珍。</p>
              </div>
              <div className="pl-5 border-l-2 border-primary/40">
                <h4 className="text-sm font-medium text-foreground mb-1">3. 内容是否完整且准确</h4>
                <p className="text-sm text-muted-foreground">参数、边界条件、行为差异、失败后果必须交代；示例必须可复现；产品更新后文档必须同步，否则就是误导。</p>
              </div>
              <div className="pl-5 border-l-2 border-primary/40">
                <h4 className="text-sm font-medium text-foreground mb-1">4. 是否站在用户视角</h4>
                <p className="text-sm text-muted-foreground">不是"秀肌肉/功能有什么"，而是"用户怎么做、做到什么程度算成功、遇到问题怎么办"。新手要有综述，进阶要有细节。</p>
              </div>
              <div className="pl-5 border-l-2 border-primary/40">
                <h4 className="text-sm font-medium text-foreground mb-1">5. 一致性是否达标</h4>
                <p className="text-sm text-muted-foreground">术语、命名、结构和惯用表达要统一，避免同一概念多种叫法制造认知负担。</p>
              </div>
            </div>
          </section>

          {/* Section 3: What we want to prove */}
          <section className="section-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              What We Want to Prove
            </p>
            <h2 className="text-xl md:text-2xl leading-relaxed mb-6">
              我们想证明什么
            </h2>
            <div className="flex flex-col gap-5">
              <div className="pl-5 border-l-2 border-primary/40">
                <p className="text-sm md:text-base text-foreground/80">
                  <span className="text-foreground font-medium">审校是可以被工程化的：</span>把经验变成规则，把规则变成可执行工作流。
                </p>
              </div>
              <div className="pl-5 border-l-2 border-primary/40">
                <p className="text-sm md:text-base text-foreground/80">
                  <span className="text-foreground font-medium">国际化是标准化的放大镜：</span>一旦不清晰、不一致、不完整，跨语言会立刻翻车。
                </p>
              </div>
              <div className="pl-5 border-l-2 border-primary/40">
                <p className="text-sm md:text-base text-foreground/80">
                  <span className="text-foreground font-medium">AI Leckie 的目标是：</span>让文档能被全球用户快速理解、放心集成、少走弯路。
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Concept;
