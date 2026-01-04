import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FileText, Users, Layers, Sparkles } from "lucide-react";
import leckieAvatar from "@/assets/leckie-avatar.png";

const Evolution = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 flex justify-center px-6 py-12 pt-28">
        <div className="max-w-4xl w-full flex flex-col gap-12">
          {/* Intro */}
          <div className="text-center animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-medium mb-4">
              未来演进
            </h1>
            <p className="text-sm text-muted-foreground tracking-wide mb-6">
              THE EVOLUTION OF AI LECKIE
            </p>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Leckie 的目标不是成为一个更强大的审校工具，
              <br />
              <span className="text-accent-glow">而是让"审校"这件事消失在日常工作流中。</span>
            </p>
          </div>

          {/* Evolution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
            {/* Phase 01 - 写作平台集成 */}
            <div className="evolution-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Phase 01
                </span>
              </div>
              <h3 className="text-lg font-medium mb-3">写作平台集成</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                将 Leckie 以可唤起的方式嵌入写作流程，用户可在需要时手动触发评审，发布前将强制完成一次审校，避免明显问题直接上线。
              </p>
              {/* Leckie Avatar Floating Preview */}
              <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg border border-border">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/40">
                    <img src={leckieAvatar} alt="Leckie" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">可唤起的 Leckie 浮窗</p>
                  <p className="text-xs text-primary">点击开始审校 →</p>
                </div>
              </div>
            </div>

            {/* Phase 02 */}
            <div className="evolution-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Phase 02
                </span>
              </div>
              <h3 className="text-lg font-medium mb-3">多角色辩论式审校</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                引入多个 Leckie 角色（如用户视角、开发者视角、管理者视角）对同一份文档进行辩论式审校，暴露不同立场下的潜在问题。
              </p>
            </div>

            {/* Phase 03 */}
            <div className="evolution-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Phase 03
                </span>
              </div>
              <h3 className="text-lg font-medium mb-3">可追溯的判断体系</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                每一条审校意见都将附带清晰的判断依据和历史案例引用，让「为什么这样改」变得透明可查，支持团队内部的知识沉淀。
              </p>
            </div>

            {/* Phase 04 - 持续演进 */}
            <div className="evolution-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Phase 04
                </span>
              </div>
              <h3 className="text-lg font-medium mb-3">持续演进</h3>
              <p className="text-sm text-muted-foreground mb-4">敬请期待......</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                更多玩法、更多文档场景。<br />
                标准始终保持一致。
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center py-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto">
              我们相信，最好的工具是让人感觉不到它存在的工具。
              <br />
              Leckie 的终极形态，是融入到每一个写作者的思维习惯中。
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Evolution;
