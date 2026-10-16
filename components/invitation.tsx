import { ArrowDownRight, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import Countdown from "./countdown";
import { Botanical } from "./botanical";
import Guestbook from "./guestbook";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { CALENDAR_URL, EVENT } from "@/lib/event";
import Navigation from "./navigation";
import MusicPlayer from "./music-player";
import OpeningGate from "./opening-gate";

const Eyebrow = ({ children }: { children: React.ReactNode }) => <p className="eyebrow">{children}</p>;
const Monogram = () => <div className="monogram" aria-label="Maged and Mona">M <i>&amp;</i> M</div>;

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

export default function Invitation() {
  return (
    <>
      <OpeningGate />
      <Navigation />
      <MusicPlayer />
      <main>
        <section id="top" className="hero section">
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <Botanical side="left" className="hero-botanical hero-botanical-left" />
          <div className="hero-copy">
            <Stagger>
              <StaggerItem><Eyebrow>Our little garden · 2026</Eyebrow></StaggerItem>
              <StaggerItem><h1><span>Maged</span><small>&amp;</small><span>Mona</span></h1></StaggerItem>
              <StaggerItem><p className="hero-deck">A new chapter is in bloom. Join us for an evening made of family, flowers, music, and a promise.</p></StaggerItem>
              <StaggerItem><a className="button violet" href="#invitation">Explore the garden <ArrowDownRight size={17} aria-hidden="true" /></a></StaggerItem>
            </Stagger>
            <div className="hero-date-lockup" aria-label="Thursday 12 November 2026">
              <span>THU</span><strong>12</strong><span>NOV<br />2026</span>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-art-card"><span>LE / 01</span><small>where our story<br />keeps growing</small></div>
            <FlowerMark />
            <span className="hero-art-caption">a French garden romance</span>
          </div>
          <div className="hero-side-note">M&amp;M <span /> Life eye Resort</div>
        </section>

        <section id="invitation" className="section quran-section">
          <div className="section-label">01 <span>THE FIRST WORD</span></div>
          <Reveal className="quran-layout">
            <div className="quran-intro"><Eyebrow>In the name of God, the most gracious</Eyebrow><h2>A verse<br /><i>for a beginning.</i></h2></div>
            <div className="quran-copy"><p lang="ar" dir="rtl" className="arabic">وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ</p><p className="citation">سورة الروم — الآية ٢١</p></div>
          </Reveal>
          <Botanical side="right" className="quran-botanical" />
        </section>

        <section id="details" className="section date-section">
          <div className="section-label">02 <span>SAVE THE DATE</span></div>
          <Reveal className="date-layout">
            <div className="date-intro"><Eyebrow>Put it in your diary</Eyebrow><h2>Thursday,<br /><i>please.</i></h2><p>Keep this evening open. We are gathering our favorite people under one roof.</p><a className="button outline" href={CALENDAR_URL} target="_blank" rel="noreferrer"><CalendarDays size={17} aria-hidden="true" /> Add to calendar</a></div>
            <div className="date-stage">
              <div className="date-display"><span className="date-day">12</span><span className="date-month">November</span><span className="date-year">2026</span></div>
              <div className="date-meta"><span>{EVENT.time}</span><span>Wedding celebration</span><span>Egypt / Cairo</span></div>
              <Countdown />
            </div>
          </Reveal>
        </section>

        <section id="venue" className="section venue-section">
          <Reveal className="venue-art"><div className="venue-photo"><span>LE / 02</span><small>the place</small></div><Botanical side="left" /></Reveal>
          <Reveal className="venue-copy" delay={0.12}><Eyebrow>03 / THE PLACE</Eyebrow><h2>Meet us<br /><i>in the garden.</i></h2><p>Join us at <strong>{EVENT.venue}</strong> for an evening of dinner, music, and the people who mean the most.</p><div className="venue-details"><MapPin size={18} aria-hidden="true" /><div><b>{EVENT.venue}</b><span>{EVENT.date} · {EVENT.time}</span></div></div><a className="button violet" href={EVENT.mapsUrl} target="_blank" rel="noreferrer">Find your way <ArrowUpRight size={16} aria-hidden="true" /></a></Reveal>
        </section>

        <section id="story" className="section story-section">
          <div className="section-label">04 <span>OUR CHAPTER</span></div>
          <Botanical side="right" className="story-botanical" />
          <Reveal className="story-layout">
            <div className="story-quote"><span className="quote-mark">“</span><p>Love grows best when it is shared.</p><span className="quote-line" /></div>
            <div className="story-copy"><Eyebrow>A note from us</Eyebrow><h2>One promise.<br />Two families.<br /><i>A lifetime ahead.</i></h2><p>On November 12th, we celebrate the start of our next chapter. Your presence will make this moment even more special.</p><p className="script-note">with all our love</p></div>
          </Reveal>
        </section>

        <section id="evening" className="section evening-section">
          <div className="section-label">05 <span>THE EVENING</span></div>
          <Reveal className="evening-layout">
            <div className="evening-intro"><Eyebrow>Come as you are</Eyebrow><h2>Stay for<br /><i>the joy.</i></h2><p>Four little moments, one beautiful evening.</p></div>
            <div className="evening-list">{[["01", "Welcome", `${EVENT.time} · We welcome you to the celebration.`], ["02", "The promise", "A promise made with love."], ["03", "Dinner & music", "An evening filled with good things."], ["04", "Together", "The best part is having you there."]].map(([number, title, copy]) => <div className="evening-item" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
          </Reveal>
        </section>

        <section className="section garden-note">
          <div className="garden-note-art"><FlowerMark className="note-flower" /><span>the little things<br />matter most</span></div>
          <Reveal className="garden-note-copy"><Eyebrow>A little note</Eyebrow><h2>Bring your<br /><i>whole heart.</i></h2><p>We cannot wait to see the people who make our world feel like home.</p><Monogram /></Reveal>
        </section>

        <section id="guestbook" className="section guestbook">
          <div className="section-label">07 <span>NOTES FROM OUR LOVED ONES</span></div>
          <Reveal><Eyebrow>Leave a little love</Eyebrow><h2>Notes from<br /><i>our people.</i></h2><Guestbook /></Reveal>
        </section>

        <footer id="closing" className="section closing-section">
          <Botanical side="left" className="closing-botanical" /><FlowerMark className="closing-flower" />
          <Reveal className="closing-copy"><Eyebrow>Until we meet beneath the flowers</Eyebrow><h2>Maged <i>&amp;</i> Mona</h2><p className="closing-date">12 · 11 · 2026</p><p><time dateTime={EVENT.startsAt}>{EVENT.time}</time> · {EVENT.venue}</p><div className="closing-rule" /><p>Having you with us is the greatest gift.</p><Monogram /></Reveal>
        </footer>
      </main>
    </>
  );
}
