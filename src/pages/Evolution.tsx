import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FileText, Users, Layers, Zap } from "lucide-react";

const evolutionCards = [
  {
    icon: FileText as React.ElementType,
    phase: "Phase 01",
    title: "走进每一篇文档",
    description:
      "Leckie 不应该只是一个单独运行的审校工具。未来，Leckie 将集成到主流写作平台、内容管理系统和协作工具中，在作者撰写的同时提供实时反馈。",
  },
  {
    icon: Users,
    phase: "Phase 02",
    title: "多角色辩论式审校",
    description:
      "引入多个 Leckie 角色（如用户视角、开发者视角、管理者视角）对同一份文档进行辩论式审校，暴露不同立场下的潜在问题。",
  },
  {
    icon: Layers,
    phase: "Phase 03",
    title: "可追溯的判断体系",
    description:
      "每一条审校意见都将附带清晰的判断依据和历史案例引用，让「为什么这样改」变得透明可查，支持团队内部的知识沉淀。",
  },
  {
    icon: Zap,
    phase: "Phase 04",
    title: "自动化质量门禁",
    description:
      "将 Leckie 审校集成到发布流水线中，作为文档发布前的质量门禁，确保每一篇文档都达到预设的质量标准才能上线。",
  },
];

const Evolution = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header showBack />

      <main className="flex-1 flex justify-center px-6 py-12">
        <div className="max-w-4xl w-full flex flex-col gap-14">
          {/* Intro */}
          <div className="text-center animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-medium mb-4">
              未来演进
            </h1>
            <p className="text-sm text-muted-foreground tracking-wide mb-8">
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
            {evolutionCards.map((card, index) => (
              <div
                key={index}
                className="evolution-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <card.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {card.phase}
                  </span>
                </div>
                <h3 className="text-lg font-medium mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="text-center py-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
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
