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

  const leckie = leckieData[locale] || leckieData.cn;

  const handleFileUpload = () => {
    // File upload logic would go here
    console.log("File upload triggered");
  };

  const handleSubmit = () => {
    if (text.trim()) {
      console.log("Submitting text for review:", text);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header showBack />

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 md:p-8">
        {/* Left: Leckie Panel */}
        <div className="section-card flex flex-col items-center justify-center">
          {/* Character placeholder */}
          <div className="w-full max-w-sm h-80 md:h-96 rounded-xl bg-gradient-to-b from-secondary to-card flex items-center justify-center mb-6">
            <div className="w-32 h-32 rounded-full bg-muted/30 flex items-center justify-center">
              <span className="text-4xl font-medium text-muted-foreground/50">
                {leckie.label.slice(0, 2)}
              </span>
            </div>
          </div>

          {/* Opening line */}
          <p className="text-base md:text-lg text-center leading-relaxed max-w-md">
            {fireMode ? leckie.openingFire : leckie.opening}
          </p>
        </div>

        {/* Right: Input Panel */}
        <div className="input-panel flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">提交文档</h3>
            
            {/* Fire Mode Toggle */}
            <div className="flex items-center gap-3">
              <Flame className={`w-4 h-4 transition-colors ${fireMode ? "text-destructive" : "text-muted-foreground"}`} />
              <span className="text-sm text-muted-foreground">火力全开</span>
              <Switch
                checked={fireMode}
                onCheckedChange={setFireMode}
                className="data-[state=checked]:bg-destructive"
              />
            </div>
          </div>

          {/* Text Input */}
          <Textarea
            placeholder="粘贴文本内容（支持 Markdown）..."
            className="flex-1 min-h-[300px] resize-none bg-secondary/50 border-border focus:border-primary"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1 gap-2"
              onClick={handleFileUpload}
            >
              <Upload className="w-4 h-4" />
              上传文件
            </Button>
            <Button
              className="flex-1 gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={handleSubmit}
              disabled={!text.trim()}
            >
              <Send className="w-4 h-4" />
              开始审校
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            支持 PDF / Word / TXT 格式
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Chat;
