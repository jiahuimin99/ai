import LeckieCard from "./LeckieCard";
import leckieCn from "@/assets/leckie-cn.png";
import leckieEn from "@/assets/leckie-en.png";
import leckieJp from "@/assets/leckie-jp.png";
import leckieKr from "@/assets/leckie-kr.png";
import leckiePt from "@/assets/leckie-pt.png";
import leckieId from "@/assets/leckie-id.png";

const leckies = [
  {
    id: "cn",
    label: "中文 Leckie",
    quote: "「带脑子来。」",
    image: leckieCn,
  },
  {
    id: "en",
    label: "English Leckie",
    quote: "\"Time is money, and you're wasting both.\"",
    image: leckieEn,
  },
  {
    id: "jp",
    label: "日本語 Leckie",
    quote: "「その書き方、読む側のこと考えてますか？」",
    image: leckieJp,
  },
  {
    id: "kr",
    label: "한국어 Leckie",
    quote: "\"이 문서, 솔직히 너무 자기만족이에요.\"",
    image: leckieKr,
  },
  {
    id: "pt",
    label: "Português Leckie",
    quote: "\"Isso não é confuso por acaso — é mal pensado mesmo.\"",
    image: leckiePt,
  },
  {
    id: "id",
    label: "Indonesia Leckie",
    quote: "\"Kalau begini, jangan heran kalau orang langsung tutup halaman.\"",
    image: leckieId,
  },
];

const LeckieGrid = () => {
  return (
    <div className="leckie-group grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 stagger-children">
      {leckies.map((leckie) => (
        <LeckieCard
          key={leckie.id}
          id={leckie.id}
          label={leckie.label}
          quote={leckie.quote}
          image={leckie.image}
        />
      ))}
    </div>
  );
};

export default LeckieGrid;
