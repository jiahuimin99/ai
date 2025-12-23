import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Send, Flame } from "lucide-react";

const leckieData: Record<string, { label: string; opening: string; openingFire: string }> = {
  cn: {
    label: "中文 Leckie",
    opening: "把文档发过来，我看看你写了什么。",
    openingFire: "发过来。少废话。",
  },
  en: {
    label: "English Leckie",
    opening: "Let's see what you've got. Paste your document below.",
    openingFire: "Drop it. Let's get this over with.",
  },
  jp: {
    label: "日本語 Leckie",
    opening: "ドキュメントを見せてください。チェックします。",
    openingFire: "早く出して。時間がないんで。",
  },
  kr: {
    label: "한국어 Leckie",
    opening: "문서 보여주세요. 검토해 드릴게요.",
    openingFire: "빨리 보내세요. 할 일이 많아요.",
  },
  pt: {
    label: "Português Leckie",
    opening: "Me mostra o documento. Vou dar uma olhada.",
    openingFire: "Manda logo. Não tenho o dia todo.",
  },
  id: {
    label: "Indonesia Leckie",
    opening: "Kirim dokumennya. Saya akan periksa.",
    openingFire: "Kirim sekarang. Jangan buang waktu.",
  },
};

const Chat = () => {
  const { locale = "cn" } = useParams<{ locale: string }>();
  const [fireMode, setFireMode] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<Array<{ role: "leckie" | "user"; content: string }>>([]);

  const leckie = leckieData[locale] || leckieData.cn;

  const handleFileUpload = () => {
    console.log("File upload triggered");
  };

  const handleSubmit = () => {
    if (text.trim()) {
      setMessages((prev) => [...prev, { role: "user", content: text }]);
      setText("");
      // Simulate Leckie response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "leckie",
            content: fireMode
              ? "这写的什么东西？重写。"
              : "让我仔细看看这段内容...",
          },
        ]);
      }, 800);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 flex flex-col pt-16">
        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Leckie Opening Message */}
            <div className="flex items-start gap-4 animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 ring-2 ring-primary/40">
                <span className="text-sm font-medium text-primary">
                  {leckie.label.slice(0, 2)}
                </span>
              </div>
              <div className="flex-1 pt-1">
                <p className="text-xs text-muted-foreground mb-2">{leckie.label}</p>
                <div className="bg-card rounded-2xl rounded-tl-md px-5 py-4 inline-block max-w-lg border border-border shadow-card">
                  <p className="text-base leading-relaxed">
                    {fireMode ? leckie.openingFire : leckie.opening}
                  </p>
                </div>
              </div>
            </div>

            {/* Message History */}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 animate-fade-in ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                {msg.role === "leckie" ? (
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 ring-2 ring-primary/40">
                    <span className="text-sm font-medium text-primary">
                      {leckie.label.slice(0, 2)}
                    </span>
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-muted-foreground">我</span>
                  </div>
                )}
                <div className={`flex-1 pt-1 ${msg.role === "user" ? "text-right" : ""}`}>
                  {msg.role === "leckie" && (
                    <p className="text-xs text-muted-foreground mb-2">{leckie.label}</p>
                  )}
                  <div
                    className={`rounded-2xl px-5 py-4 inline-block max-w-lg border shadow-card ${
                      msg.role === "user"
                        ? "bg-primary/10 border-primary/30 rounded-tr-md"
                        : "bg-card border-border rounded-tl-md"
                    }`}
                  >
                    <p className="text-base leading-relaxed whitespace-pre-wrap text-left">{msg.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input Area - Fixed at bottom */}
        <div className="border-t border-border bg-card/80 backdrop-blur-sm px-4 md:px-8 py-4">
          <div className="max-w-3xl mx-auto">
            {/* Fire Mode Toggle */}
            <div className="flex items-center justify-end gap-3 mb-3">
              <Flame
                className={`w-4 h-4 transition-colors ${fireMode ? "text-destructive" : "text-muted-foreground"}`}
              />
              <span className="text-xs text-muted-foreground">火力全开</span>
              <Switch
                checked={fireMode}
                onCheckedChange={setFireMode}
                className="data-[state=checked]:bg-destructive"
              />
            </div>

            {/* Input Row */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="flex-shrink-0 h-12 w-12"
                onClick={handleFileUpload}
              >
                <Upload className="w-5 h-5" />
              </Button>
              <Textarea
                placeholder="粘贴文本内容（支持 Markdown）..."
                className="flex-1 min-h-[48px] max-h-32 resize-none bg-secondary/50 border-border focus:border-primary"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
              />
              <Button
                size="icon"
                className="flex-shrink-0 h-12 w-12 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleSubmit}
                disabled={!text.trim()}
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              支持 PDF / Word / TXT · Enter 发送 · Shift+Enter 换行
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Chat;
