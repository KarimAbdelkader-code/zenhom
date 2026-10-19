import { ArrowDownLeft, ArrowDownRight, ArrowUpLeft, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import Countdown from "./countdown";
import { Botanical } from "./botanical";
import Guestbook from "./guestbook";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { CALENDAR_URL, EVENT } from "@/lib/event";
import Navigation from "./navigation";
import MusicPlayer from "./music-player";
import OpeningGate from "./opening-gate";

const Eyebrow = ({ children }: { children: React.ReactNode }) => <p className="eyebrow">{children}</p>;
const Monogram = ({ language = "en" }: { language?: "en" | "ar" }) => <div className="monogram" aria-label={language === "ar" ? "ماجد ومنى" : "Maged and Mona"}>M <i>&amp;</i> M</div>;

function FlowerMark({ className = "" }: { className?: string }) {
  return (
    <svg className={`flower-mark ${className}`} viewBox="0 0 420 520" fill="none" aria-hidden="true">
      <path className="flower-stem" d="M209 496C214 397 201 314 211 228C216 185 227 130 253 62" />
      <path className="flower-stem flower-stem-soft" d="M211 331C163 294 136 254 121 208" />
      <path className="flower-stem flower-stem-soft" d="M211 386C259 350 283 313 293 262" />
      <path className="flower-leaf" d="M179 326C139 318 111 294 95 261C136 262 166 280 179 326Z" />
      <path className="flower-leaf" d="M239 383C277 371 303 346 317 313C278 316 249 339 239 383Z" />
      <path className="flower-leaf" d="M199 274C165 251 146 223 141 189C174 201 195 226 199 274Z" />
      <g className="flower-bloom">
        <path d="M253 71C216 66 198 43 210 16C241 18 259 36 253 71Z" />
        <path d="M253 71C246 34 263 10 294 14C296 43 281 63 253 71Z" />
        <path d="M253 71C283 53 313 63 318 93C291 105 267 95 253 71Z" />
        <path d="M253 71C246 105 218 118 193 102C201 75 221 62 253 71Z" />
        <circle cx="254" cy="72" r="12" />
      </g>
      <circle className="flower-bud" cx="121" cy="202" r="8" />
      <circle className="flower-bud" cx="294" cy="258" r="8" />
    </svg>
  );
}

export default function Invitation({ language = "en" }: { language?: "en" | "ar" }) {
  const isArabic = language === "ar";
  const date = isArabic ? "١٢ نوفمبر ٢٠٢٦" : EVENT.date;
  const time = isArabic ? "٨:٠٠ مساءً" : EVENT.time;
  const ExploreArrow = isArabic ? ArrowDownLeft : ArrowDownRight;
  const VenueArrow = isArabic ? ArrowUpLeft : ArrowUpRight;
  const eveningItems: [string, string, string][] = isArabic
    ? [["٠١", "الترحيب", `${time} · نرحّب بكم في احتفالنا.`], ["٠٢", "الوعد", "وعدٌ قُطع بحب."], ["٠٣", "العشاء والموسيقى", "أمسية مليئة بالأشياء الجميلة."], ["٠٤", "معًا", "أجمل ما فيها أن تكونوا معنا."]]
    : [["01", "Welcome", `${time} · We welcome you to the celebration.`], ["02", "The promise", "A promise made with love."], ["03", "Dinner & music", "An evening filled with good things."], ["04", "Together", "The best part is having you there."]];

  return (
    <div className={isArabic ? "arabic-invitation" : undefined} dir={isArabic ? "rtl" : undefined} lang={isArabic ? "ar" : undefined}>
      <OpeningGate language={language} />
      <Navigation language={language} />
      <MusicPlayer language={language} />
      <main>
        <section id="top" className="hero section">
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <Botanical side="left" className="hero-botanical hero-botanical-left" />
          <div className="hero-copy">
            <Stagger>
              <StaggerItem><Eyebrow>{isArabic ? "حديقتنا الصغيرة · ٢٠٢٦" : "Our little garden · 2026"}</Eyebrow></StaggerItem>
              <StaggerItem><h1><span>Maged</span><small>&amp;</small><span>Mona</span></h1></StaggerItem>
              <StaggerItem><p className="hero-deck">{isArabic ? "يبدأ فصل جديد في الإزهار. انضموا إلينا في أمسية من العائلة والزهور والموسيقى والوعد." : "A new chapter is in bloom. Join us for an evening made of family, flowers, music, and a promise."}</p></StaggerItem>
              <StaggerItem><a className="button violet" href="#invitation">{isArabic ? "اكتشفوا الحديقة" : "Explore the garden"} <ExploreArrow size={17} aria-hidden="true" /></a></StaggerItem>
            </Stagger>
            <div className="hero-date-lockup" aria-label={isArabic ? "الخميس ١٢ نوفمبر ٢٠٢٦" : "Thursday 12 November 2026"}>
              <span>{isArabic ? "الخميس" : "THU"}</span><strong>{isArabic ? "١٢" : "12"}</strong><span>{isArabic ? "نوفمبر" : "NOV"}<br />{isArabic ? "٢٠٢٦" : "2026"}</span>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-art-card"><span>LE / 01</span><small>{isArabic ? <>حيث تستمر حكايتنا<br />في النمو</> : <>where our story<br />keeps growing</>}</small></div>
            <FlowerMark />
            <span className="hero-art-caption">{isArabic ? "حكاية حب في حديقة فرنسية" : "a French garden romance"}</span>
          </div>
          <div className="hero-side-note">M&amp;M <span /> Life eye Resort</div>
        </section>

        <section id="invitation" className="section quran-section">
          <div className="section-label">{isArabic ? "٠١" : "01"} <span>{isArabic ? "الكلمة الأولى" : "THE FIRST WORD"}</span></div>
          <Reveal className="quran-layout">
            <div className="quran-intro"><Eyebrow>{isArabic ? "بسم الله الرحمن الرحيم" : "In the name of God, the most gracious"}</Eyebrow><h2>{isArabic ? <>آية<br /><i>لبداية.</i></> : <>A verse<br /><i>for a beginning.</i></>}</h2></div>
            <div className="quran-copy"><p lang="ar" dir="rtl" className="arabic">وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ</p><p className="citation">سورة الروم — الآية ٢١</p></div>
          </Reveal>
          <Botanical side="right" className="quran-botanical" />
        </section>

        <section id="details" className="section date-section">
          <div className="section-label">{isArabic ? "٠٢" : "02"} <span>{isArabic ? "احفظوا الموعد" : "SAVE THE DATE"}</span></div>
          <Reveal className="date-layout">
            <div className="date-intro"><Eyebrow>{isArabic ? "سجّلوا الموعد" : "Put it in your diary"}</Eyebrow><h2>{isArabic ? <>الخميس،<br /><i>من فضلكم.</i></> : <>Thursday,<br /><i>please.</i></>}</h2><p>{isArabic ? "اتركوا هذه الأمسية مفتوحة. سنجمع أحبّ الناس إلينا تحت سقف واحد." : "Keep this evening open. We are gathering our favorite people under one roof."}</p><a className="button outline" href={CALENDAR_URL} target="_blank" rel="noreferrer"><CalendarDays size={17} aria-hidden="true" /> {isArabic ? "أضيفوا الموعد إلى التقويم" : "Add to calendar"}</a></div>
            <div className="date-stage">
              <div className="date-display"><span className="date-day">{isArabic ? "١٢" : "12"}</span><span className="date-month">{isArabic ? "نوفمبر" : "November"}</span><span className="date-year">{isArabic ? "٢٠٢٦" : "2026"}</span></div>
              <div className="date-meta"><span>{time}</span><span>{isArabic ? "احتفال الزفاف" : "Wedding celebration"}</span><span>{isArabic ? "مصر / القاهرة" : "Egypt / Cairo"}</span></div>
              <Countdown language={language} />
            </div>
          </Reveal>
        </section>

        <section id="venue" className="section venue-section">
          <Reveal className="venue-art"><div className="venue-photo"><span>LE / 02</span><small>{isArabic ? "المكان" : "the place"}</small></div><Botanical side="left" /></Reveal>
          <Reveal className="venue-copy" delay={0.12}><Eyebrow>{isArabic ? "٠٣ / المكان" : "03 / THE PLACE"}</Eyebrow><h2>{isArabic ? <>نلتقي بكم<br /><i>في الحديقة.</i></> : <>Meet us<br /><i>in the garden.</i></>}</h2><p>{isArabic ? <>نلتقيكم في <strong>{EVENT.venue}</strong> لأمسية من العشاء والموسيقى والأشخاص الذين يعنون لنا الكثير.</> : <>Join us at <strong>{EVENT.venue}</strong> for an evening of dinner, music, and the people who mean the most.</>}</p><div className="venue-details"><MapPin size={18} aria-hidden="true" /><div><b>{EVENT.venue}</b><span>{date} · {time}</span></div></div><a className="button violet" href={EVENT.mapsUrl} target="_blank" rel="noreferrer">{isArabic ? "اعثروا على الطريق" : "Find your way"} <VenueArrow size={16} aria-hidden="true" /></a></Reveal>
        </section>

        <section id="story" className="section story-section">
          <div className="section-label">{isArabic ? "٠٤" : "04"} <span>{isArabic ? "فصلنا" : "OUR CHAPTER"}</span></div>
          <Botanical side="right" className="story-botanical" />
          <Reveal className="story-layout">
            <div className="story-quote"><span className="quote-mark">“</span><p>{isArabic ? "ينمو الحب أجمل حين نتشاركه." : "Love grows best when it is shared."}</p><span className="quote-line" /></div>
            <div className="story-copy"><Eyebrow>{isArabic ? "كلمة منّا" : "A note from us"}</Eyebrow><h2>{isArabic ? <>وعد واحد.<br />عائلتان.<br /><i>عمر كامل أمامنا.</i></> : <>One promise.<br />Two families.<br /><i>A lifetime ahead.</i></>}</h2><p>{isArabic ? "في ١٢ نوفمبر، نحتفل ببداية فصلنا القادم. حضوركم سيجعل هذه اللحظة أكثر خصوصية." : "On November 12th, we celebrate the start of our next chapter. Your presence will make this moment even more special."}</p><p className="script-note">{isArabic ? "بكل حبنا" : "with all our love"}</p></div>
          </Reveal>
        </section>

        <section id="evening" className="section evening-section">
          <div className="section-label">{isArabic ? "٠٥" : "05"} <span>{isArabic ? "الأمسية" : "THE EVENING"}</span></div>
          <Reveal className="evening-layout">
            <div className="evening-intro"><Eyebrow>{isArabic ? "تعالوا كما أنتم" : "Come as you are"}</Eyebrow><h2>{isArabic ? <>ابقوا من أجل<br /><i>الفرح.</i></> : <>Stay for<br /><i>the joy.</i></>}</h2><p>{isArabic ? "أربع لحظات صغيرة، أمسية واحدة جميلة." : "Four little moments, one beautiful evening."}</p></div>
            <div className="evening-list">{eveningItems.map(([number, title, copy]) => <div className="evening-item" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
          </Reveal>
        </section>

        <section className="section garden-note">
          <div className="garden-note-art"><FlowerMark className="note-flower" /><span>{isArabic ? <>التفاصيل الصغيرة<br />هي الأهم</> : <>the little things<br />matter most</>}</span></div>
          <Reveal className="garden-note-copy"><Eyebrow>{isArabic ? "ملاحظة صغيرة" : "A little note"}</Eyebrow><h2>{isArabic ? <>أحضروا<br /><i>قلوبكم كاملة.</i></> : <>Bring your<br /><i>whole heart.</i></>}</h2><p>{isArabic ? "لا نستطيع الانتظار لرؤية من يجعلون عالمنا يشبه البيت." : "We cannot wait to see the people who make our world feel like home."}</p><Monogram language={language} /></Reveal>
        </section>

        <section id="guestbook" className="section guestbook">
          <div className="section-label">{isArabic ? "٠٧" : "07"} <span>{isArabic ? "رسائل من أحبّائنا" : "NOTES FROM OUR LOVED ONES"}</span></div>
          <Reveal><Eyebrow>{isArabic ? "اتركوا لنا قليلًا من الحب" : "Leave a little love"}</Eyebrow><h2>{isArabic ? <>رسائل<br /><i>أحبّتنا.</i></> : <>Notes from<br /><i>our people.</i></>}</h2><Guestbook language={language} /></Reveal>
        </section>

        <footer id="closing" className="section closing-section">
          <Botanical side="left" className="closing-botanical" /><FlowerMark className="closing-flower" />
          <Reveal className="closing-copy"><Eyebrow>{isArabic ? "إلى أن نلتقي تحت الزهور" : "Until we meet beneath the flowers"}</Eyebrow><h2>Maged <i>&amp;</i> Mona</h2><p className="closing-date">{isArabic ? "١٢ · ١١ · ٢٠٢٦" : "12 · 11 · 2026"}</p><p><time dateTime={EVENT.startsAt}>{time}</time> · {EVENT.venue}</p><div className="closing-rule" /><p>{isArabic ? "وجودكم معنا هو أعظم هدية." : "Having you with us is the greatest gift."}</p><Monogram language={language} /></Reveal>
        </footer>
      </main>
    </div>
  );
}
