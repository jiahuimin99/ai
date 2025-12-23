import LeckieCard from "./LeckieCard";

const leckies = [
  {
    id: "cn",
    label: "中文 Leckie",
    quote: "「带脑子来。」",
  },
  {
    id: "en",
    label: "English Leckie",
    quote: "\"Time is money, and you're wasting both.\"",
  },
  {
    id: "jp",
    label: "日本語 Leckie",
    quote: "「その書き方、読む側のこと考えてますか？」",
  },
  {
    id: "kr",
    label: "한국어 Leckie",
    quote: "\"이 문서, 솔직히 너무 자기만족이에요.\"",
  },
  {
    id: "pt",
    label: "Português Leckie",
    quote: "\"Isso não é confuso por acaso — é mal pensado mesmo.\"",
  },
  {
    id: "id",
    label: "Indonesia Leckie",
    quote: "\"Kalau begini, jangan heran kalau orang langsung tutup halaman.\"",
  },
];

const LeckieGrid = () => {
  return (
    <div className="leckie-group grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 stagger-children">
      {leckies.map((leckie) => (
        <LeckieCard
          key={leckie.id}
          id={leckie.id}
          label={leckie.label}
          quote={leckie.quote}
        />
      ))}
    </div>
  );
};

export default LeckieGrid;
