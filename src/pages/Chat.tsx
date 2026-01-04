import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Send, Flame, Loader2, RotateCcw } from "lucide-react";
import leckieAvatar from "@/assets/leckie-avatar.png";
import leckieCn from "@/assets/leckie-cn.png";
import leckieEn from "@/assets/leckie-en.png";
import leckieJp from "@/assets/leckie-jp.png";
import leckieKr from "@/assets/leckie-kr.png";
import leckiePt from "@/assets/leckie-pt.png";
import leckieId from "@/assets/leckie-id.png";

interface LocaleData {
  label: string;
  portrait: string;
  opening: string;
  openingFire: string;
  submitDoc: string;
  fireModeLabel: string;
  fireModeWarning: string;
  uploadBtn: string;
  sendBtn: string;
  placeholder: string;
  supportedFormats: string;
  you: string;
  thinking: string;
  score: string;
  review: string;
  reviewFire: string;
  retryBtn: string;
}

const leckieData: Record<string, LocaleData> = {
  cn: {
    label: "中文 Leckie",
    portrait: leckieCn,
    opening: "把文档发过来，我看看你写了什么。",
    openingFire: "发过来。少废话。",
    submitDoc: "提交文档",
    fireModeLabel: "火力全开",
    fireModeWarning: "👻 玻璃心别用哦！",
    uploadBtn: "上传文件",
    sendBtn: "发送",
    placeholder: "粘贴文本内容（支持 Markdown）...",
    supportedFormats: "支持 PDF / Word / TXT · Enter 发送 · Shift+Enter 换行",
    you: "我",
    thinking: "正在审阅中，请稍候...",
    score: "23/100",
    review: "这写的什么东西？逻辑混乱，术语不统一，读者看完只会更困惑。回去重写。",
    reviewFire: "烂透了。0分起评都嫌多。这不是文档，这是在浪费读者生命。删了重来。",
    retryBtn: "😭 重新挑战",
  },
  en: {
    label: "English Leckie",
    portrait: leckieEn,
    opening: "Let's see what you've got. Paste your document below.",
    openingFire: "Drop it. Let's get this over with.",
    submitDoc: "Submit Document",
    fireModeLabel: "Full Power",
    fireModeWarning: "👻 Sensitive souls beware!",
    uploadBtn: "Upload File",
    sendBtn: "Send",
    placeholder: "Paste your text content (Markdown supported)...",
    supportedFormats: "Supports PDF / Word / TXT · Enter to send · Shift+Enter for new line",
    you: "Me",
    thinking: "Reviewing your document, please wait...",
    score: "23/100",
    review:
      "What is this mess? Incoherent logic, inconsistent terminology—readers will leave more confused than before. Rewrite it.",
    reviewFire:
      "Absolute garbage. A zero would be generous. This isn't documentation, it's a waste of the reader's time. Delete and start over.",
    retryBtn: "😭 Try Again",
  },
  jp: {
    label: "日本語 Leckie",
    portrait: leckieJp,
    opening: "ドキュメントを見せてください。チェックします。",
    openingFire: "早く出して。時間がないんで。",
    submitDoc: "ドキュメントを提出",
    fireModeLabel: "全力モード",
    fireModeWarning: "👻 繊細な方はご注意を！",
    uploadBtn: "ファイルをアップロード",
    sendBtn: "送信",
    placeholder: "テキストを貼り付けてください（Markdown対応）...",
    supportedFormats: "PDF / Word / TXT対応 · Enterで送信 · Shift+Enterで改行",
    you: "私",
    thinking: "確認中です、しばらくお待ちください...",
    score: "23/100",
    review:
      "これは何ですか？ロジックがめちゃくちゃで、用語も統一されていません。読者は余計に混乱するだけです。書き直してください。",
    reviewFire: "最悪です。0点でも甘いくらい。これはドキュメントじゃない、読者の時間の無駄です。全部消してやり直し。",
    retryBtn: "😭 再挑戦",
  },
  kr: {
    label: "한국어 Leckie",
    portrait: leckieKr,
    opening: "문서 보여주세요. 검토해 드릴게요.",
    openingFire: "빨리 보내세요. 할 일이 많아요.",
    submitDoc: "문서 제출",
    fireModeLabel: "화력 전개",
    fireModeWarning: "👻 유리 멘탈은 사용 금지!",
    uploadBtn: "파일 업로드",
    sendBtn: "보내기",
    placeholder: "텍스트를 붙여넣으세요 (마크다운 지원)...",
    supportedFormats: "PDF / Word / TXT 지원 · Enter로 전송 · Shift+Enter로 줄바꿈",
    you: "나",
    thinking: "검토 중입니다. 잠시만 기다려 주세요...",
    score: "23/100",
    review: "이게 뭐예요? 논리도 엉망이고 용어도 제각각이네요. 독자는 더 헷갈릴 뿐이에요. 다시 쓰세요.",
    reviewFire:
      "완전 쓰레기예요. 0점도 아까워요. 이건 문서가 아니라 독자 시간 낭비예요. 다 지우고 처음부터 다시 하세요.",
    retryBtn: "😭 다시 도전",
  },
  pt: {
    label: "Português Leckie",
    portrait: leckiePt,
    opening: "Me mostra o documento. Vou dar uma olhada.",
    openingFire: "Manda logo. Não tenho o dia todo.",
    submitDoc: "Enviar Documento",
    fireModeLabel: "Potência Máxima",
    fireModeWarning: "👻 Sensíveis, cuidado!",
    uploadBtn: "Enviar Arquivo",
    sendBtn: "Enviar",
    placeholder: "Cole o texto aqui (Markdown suportado)...",
    supportedFormats: "Suporta PDF / Word / TXT · Enter para enviar · Shift+Enter nova linha",
    you: "Eu",
    thinking: "Revisando o documento, aguarde...",
    score: "23/100",
    review:
      "O que é isso? Lógica confusa, terminologia inconsistente—o leitor vai sair mais perdido do que entrou. Reescreva.",
    reviewFire:
      "Lixo total. Zero já seria generoso demais. Isso não é documentação, é desperdício de tempo do leitor. Apaga tudo e começa de novo.",
    retryBtn: "😭 Tentar Novamente",
  },
  id: {
    label: "Indonesia Leckie",
    portrait: leckieId,
    opening: "Kirim dokumennya. Saya akan periksa.",
    openingFire: "Kirim sekarang. Jangan buang waktu.",
    submitDoc: "Kirim Dokumen",
    fireModeLabel: "Mode Penuh",
    fireModeWarning: "👻 Yang sensitif jangan pakai!",
    uploadBtn: "Unggah File",
    sendBtn: "Kirim",
    placeholder: "Tempel teks di sini (Markdown didukung)...",
    supportedFormats: "Mendukung PDF / Word / TXT · Enter untuk kirim · Shift+Enter baris baru",
    you: "Saya",
    thinking: "Sedang meninjau dokumen, harap tunggu...",
    score: "23/100",
    review: "Ini apa? Logikanya berantakan, istilahnya tidak konsisten—pembaca malah tambah bingung. Tulis ulang.",
    reviewFire:
      "Sampah total. Nol pun terlalu baik. Ini bukan dokumentasi, ini buang-buang waktu pembaca. Hapus semua dan mulai dari awal.",
    retryBtn: "😭 Coba Lagi",
  },
};

const Chat = () => {
  const { locale = "cn" } = useParams<{ locale: string }>();
  const [fireMode, setFireMode] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<Array<{ role: "leckie" | "user"; content: string }>>([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isThinking, setIsThinking] = useState(false);

  const leckie = leckieData[locale] || leckieData.cn;

  // const handleFileUpload = () => {
  //   console.log("File upload triggered");
  // };
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  // 触发隐藏的 input 选择文件
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  // 选择文件后自动上传
  const handleFileChange = async (event) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);

    await handleFileUpload(selectedFile);
  };

  const handleFileUpload = async (uploadFile) => {
    if (!uploadFile) {
      console.warn("没有选择文件！");
      return;
    }

    const apiKey = "{api_key}";

    const formData = new FormData();
    formData.append("file", uploadFile, uploadFile.name);
    formData.append("user", "abc-123");

    try {
      const response = await fetch("http://api.dify.woa.com/v1/files/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        body: formData,
      });

      const result = await response.json();
      console.log("上传成功", result);
      // 这里你可以执行上传成功后的逻辑，比如通知父组件，重置状态等
    } catch (err) {
      console.error("上传失败", err);
    }
  };

  const handleRetry = () => {
    setMessages([]);
    setText("");
    setHasSubmitted(false);
    setIsThinking(false);
    setFireMode(false);
  };

  const handleSubmit = () => {
    if (text.trim() && !hasSubmitted) {
      setMessages((prev) => [...prev, { role: "user", content: text }]);
      setText("");
      setHasSubmitted(true);
      setIsThinking(true);

      // Simulate API call with thinking state
      setTimeout(() => {
        setIsThinking(false);
        setMessages((prev) => [
          ...prev,
          {
            role: "leckie",
            content: `📊 ${leckie.score}\n\n${fireMode ? leckie.reviewFire : leckie.review}`,
          },
        ]);
      }, 2500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-0 pt-16">
        {/* Left: Leckie Portrait Panel */}
        <div className="lg:col-span-1 flex flex-col items-center justify-center p-6 md:p-8 border-r border-border/50 bg-card/30">
          {/* Character Image with cyberpunk border effect */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 mb-6">
            {/* Outer glow ring */}
            <div
              className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/30 via-transparent to-primary/20 animate-pulse"
              style={{ animationDuration: "3s" }}
            />
            {/* Border ring */}
            <div className="absolute -inset-1 rounded-full border border-primary/40" />
            {/* Image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/60 bg-secondary">
              <img src={leckie.portrait} alt={leckie.label} className="w-full h-full object-cover" />
            </div>
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-primary" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary" />
          </div>

          {/* Label */}
          <h3 className="text-lg font-medium text-foreground mb-3">{leckie.label}</h3>

          {/* Opening line */}
          <p className="text-sm text-center text-muted-foreground leading-relaxed max-w-xs px-4">
            {fireMode ? leckie.openingFire : leckie.opening}
          </p>
        </div>

        {/* Right: Chat Area */}
        <div className="lg:col-span-2 flex flex-col">
          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6">
            <div className="max-w-2xl mx-auto space-y-6">
              {/* Leckie Opening Message */}
              <div className="flex items-start gap-4 animate-fade-in">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary/40">
                  <img src={leckieAvatar} alt={leckie.label} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-xs text-muted-foreground mb-2">{leckie.label}</p>
                  <div className="bg-card rounded-2xl rounded-tl-md px-5 py-4 inline-block max-w-lg border border-border shadow-card">
                    <p className="text-base leading-relaxed">{fireMode ? leckie.openingFire : leckie.opening}</p>
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
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary/40">
                      <img src={leckieAvatar} alt={leckie.label} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-muted-foreground">{leckie.you}</span>
                    </div>
                  )}
                  <div className={`flex-1 pt-1 ${msg.role === "user" ? "text-right" : ""}`}>
                    {msg.role === "leckie" && <p className="text-xs text-muted-foreground mb-2">{leckie.label}</p>}
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

              {/* Thinking indicator */}
              {isThinking && (
                <div className="flex items-start gap-4 animate-fade-in">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary/40">
                    <img src={leckieAvatar} alt={leckie.label} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-xs text-muted-foreground mb-2">{leckie.label}</p>
                    <div className="bg-card rounded-2xl rounded-tl-md px-5 py-4 inline-flex items-center gap-3 border border-border shadow-card">
                      <Loader2 className="w-4 h-4 animate-spin text-primary" />
                      <p className="text-base text-muted-foreground">{leckie.thinking}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input Area - Fixed at bottom */}
          <div className="border-t border-border bg-card/80 backdrop-blur-sm px-4 md:px-8 py-4">
            <div className="max-w-2xl mx-auto">
              {/* Fire Mode Toggle */}
              <div className="flex items-center justify-end gap-3 mb-3">
                <Flame
                  className={`w-4 h-4 transition-colors ${fireMode ? "text-destructive" : "text-muted-foreground"}`}
                />
                <span className="text-xs text-muted-foreground">
                  {leckie.fireModeLabel} <span className="text-destructive/80">{leckie.fireModeWarning}</span>
                </span>
                <Switch
                  checked={fireMode}
                  onCheckedChange={setFireMode}
                  className="data-[state=checked]:bg-destructive"
                  disabled={hasSubmitted}
                />
              </div>

              {/* Input Row or Retry Button */}
              {hasSubmitted && !isThinking ? (
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    className="gap-2 px-6 py-3 h-auto text-base border-primary/50 hover:bg-primary/10"
                    onClick={handleRetry}
                  >
                    <RotateCcw className="w-4 h-4" />
                    {leckie.retryBtn}
                  </Button>
                </div>
              ) : (
                <>
                  <div className="flex gap-3">
                    <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} />

                    <Button
                      variant="outline"
                      size="icon"
                      className="flex-shrink-0 h-12 w-12"
                      onClick={handleButtonClick}
                      disabled={hasSubmitted}
                    >
                      <Upload className="w-5 h-5" />
                    </Button>
                    <Textarea
                      placeholder={leckie.placeholder}
                      className="flex-1 min-h-[48px] max-h-32 resize-none bg-secondary/50 border-border focus:border-primary"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleSubmit();
                        }
                      }}
                      disabled={hasSubmitted}
                    />
                    <Button
                      size="icon"
                      className="flex-shrink-0 h-12 w-12 bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={handleSubmit}
                      disabled={!text.trim() || hasSubmitted}
                    >
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-2">{leckie.supportedFormats}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Chat;
