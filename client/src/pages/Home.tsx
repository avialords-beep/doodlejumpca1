/**
 * Doodle Jump Casino — Home Page
 * Design: Doodle Sketch Premium
 * SEO: Optimized for Yandex top-1 ranking
 * Keywords: doodle jump casino, дудл джамп казино, казино дудл джамп,
 *           doodle jump на деньги, дудл джамп с выводом денег, слот дудл джамп
 */

import { useEffect, useRef, useState } from "react";

// Referral link
const REF_URL = "https://52896.call2me.pro/ru/registration?partner=p52896p3328849p98ff";

// Asset URLs (webdev lifecycle — never expire)
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663588131980/67nyeh7UMfhqVv3A55ZFVo/hero-doodle-casino-N2RqUA7a4TpWfsBkwi3Edm.webp";
const CHARACTER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663588131980/67nyeh7UMfhqVv3A55ZFVo/doodle-character-hero-oCsLGxgoRX9mMbHLhp6cuS.webp";
const WIN_BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663588131980/67nyeh7UMfhqVv3A55ZFVo/doodle-win-banner-9MoSSZaBLbX5hHSKDAdqcn.webp";
const PATTERN_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663588131980/67nyeh7UMfhqVv3A55ZFVo/casino-features-bg-4bjJsvhm4SL6ymsSG8zag5.webp";

// Live counter hook
function useLiveCounter(start: number, increment: number, interval: number) {
  const [count, setCount] = useState(start);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * increment));
    }, interval);
    return () => clearInterval(timer);
  }, [increment, interval]);
  return count;
}

// Format number with spaces
function formatNum(n: number) {
  return n.toLocaleString("ru-RU");
}

export default function Home() {
  const balance = useLiveCounter(1_420_500, 1500, 3000);
  const players = useLiveCounter(247, 1, 8000);
  const [multiplier, setMultiplier] = useState(1.0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Demo multiplier animation
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setMultiplier(prev => {
          const next = prev + (Math.random() * 0.3 + 0.05);
          if (next >= 12) {
            setIsPlaying(false);
            return 1.0;
          }
          return Math.round(next * 100) / 100;
        });
      }, 200);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPlaying]);

  return (
    <div className="min-h-screen" style={{ background: "#faf8f3" }}>

      {/* ===== TOPBAR ===== */}
      <header style={{
        position: "fixed", top: 10, left: 10, right: 10, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 8, pointerEvents: "none"
      }}>
        <div style={{
          fontFamily: "'Caveat', cursive", fontWeight: 800, fontSize: "clamp(18px,5vw,24px)",
          letterSpacing: 0.5, color: "#0f2a44",
          background: "#fff", padding: "8px 14px", borderRadius: 16,
          border: "2.5px solid #0f2a44",
          boxShadow: "4px 4px 0 rgba(15,42,68,0.2), 0 8px 20px rgba(0,0,0,0.1)",
          pointerEvents: "auto", whiteSpace: "nowrap"
        }}>
          🎰 Doodle Casino
        </div>
        <div style={{
          display: "flex", gap: 8, pointerEvents: "auto"
        }}>
          <div className="live-counter" style={{ fontSize: "0.82rem" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} className="pulse-green" />
            <span style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, color: "#0f2a44" }}>
              {players} онлайн
            </span>
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section style={{ paddingTop: 80, paddingBottom: 0 }}>
        <div className="container" style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Hero Banner Image */}
          <div style={{
            borderRadius: 24, overflow: "hidden",
            border: "2.5px solid #0f2a44",
            boxShadow: "6px 6px 0 rgba(15,42,68,0.2)",
            marginBottom: 20, position: "relative"
          }}>
            <img
              src={HERO_BG}
              alt="Doodle Jump Casino — игра на деньги с выводом"
              style={{ width: "100%", height: "auto", display: "block", maxHeight: 360, objectFit: "cover" }}
              loading="eager"
              fetchPriority="high"
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, rgba(15,42,68,0.55) 0%, transparent 60%)",
              display: "flex", alignItems: "center", padding: "24px 32px"
            }}>
              <div>
                <h1 style={{
                  fontFamily: "'Caveat', cursive", fontWeight: 800,
                  fontSize: "clamp(28px, 7vw, 52px)", color: "#fff",
                  lineHeight: 1.1, margin: "0 0 10px 0",
                  textShadow: "2px 2px 0 rgba(0,0,0,0.4)"
                }}>
                  Doodle Jump Casino<br />
                  <span style={{ fontSize: "0.6em", opacity: 0.9 }}>игра на деньги с выводом</span>
                </h1>
                <p style={{
                  color: "rgba(255,255,255,0.92)", fontSize: "clamp(14px,3vw,17px)",
                  fontWeight: 600, margin: "0 0 16px 0", maxWidth: 420
                }}>
                  Казино Дудл Джамп — прыгай выше, умножай ставку до x500
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a href={REF_URL} target="_blank" rel="noopener noreferrer" className="btn-sketch-primary" style={{ fontSize: "clamp(15px,4vw,20px)", padding: "12px 22px" }}>
                    🎮 Играть сейчас
                  </a>
                  <a href={REF_URL} target="_blank" rel="noopener noreferrer" className="btn-sketch-secondary" style={{ fontSize: "clamp(15px,4vw,20px)", padding: "12px 22px", background: "rgba(255,255,255,0.9)" }}>
                    🆓 Демо бесплатно
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr min(320px, 35%)",
            gap: 16,
            alignItems: "start"
          }} className="hero-grid">

            {/* LEFT: Main Panel */}
            <div className="sketch-card" style={{ padding: "24px 22px" }}>

              {/* Live Balance */}
              <div className="live-counter" style={{ marginBottom: 20, width: "100%" }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", display: "inline-block", flexShrink: 0 }} className="pulse-green" />
                <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, color: "#0f2a44", fontSize: "0.9rem" }}>
                  🔴 LIVE общий выигрыш:
                </span>
                <span style={{
                  marginLeft: "auto", fontFamily: "'Caveat', cursive", fontWeight: 800,
                  fontSize: "1.2rem", color: "#166534",
                  background: "#dcfce7", padding: "3px 14px", borderRadius: 20,
                  border: "1.5px solid #86efac"
                }}>
                  ₽ {formatNum(balance)}
                </span>
              </div>

              {/* H2 */}
              <h2 style={{
                fontFamily: "'Caveat', cursive", fontWeight: 800,
                fontSize: "clamp(22px, 5vw, 30px)", color: "#0f2a44",
                margin: "0 0 12px 0", lineHeight: 1.2
              }}>
                ⚡ Doodle Jump казино: ставки и вывод денег
              </h2>
              <p style={{ fontSize: "0.97rem", lineHeight: 1.65, color: "#1e3a5f", margin: "0 0 16px 0" }}>
                Культовый раннер <strong>Doodle Jump</strong> превратился в захватывающий{" "}
                <strong>игровой автомат с уникальной механикой</strong>. Делаете ставку —
                персонаж начинает бесконечный подъём. С каждой платформой{" "}
                <strong>множитель растёт</strong>: x1 → x3 → x5 → x10 и выше.
                В любой момент нажмите «Забрать» — сумма с множителем фиксируется как{" "}
                <strong>вывод денег</strong>. Упали — ставка сгорает.
              </p>

              {/* Features Grid */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 10, marginBottom: 20
              }}>
                {[
                  { icon: "🎲", title: "Демо-режим", desc: "пробуйте без вложений" },
                  { icon: "💸", title: "Вывод от 500₽", desc: "карты, ЮMoney, USDT" },
                  { icon: "📊", title: "Ставки от 10₽", desc: "для любого баланса" },
                  { icon: "🏆", title: "Турниры", desc: "кэшбэк до 20%" },
                  { icon: "⚡", title: "Быстрый вывод", desc: "от 5 минут" },
                  { icon: "🔒", title: "Честный рандом", desc: "лицензионное ПО" },
                ].map((f, i) => (
                  <div key={i} className="feature-item">
                    <span style={{ fontSize: "1.2rem" }}>{f.icon}</span>{" "}
                    <strong>{f.title}</strong>
                    <div style={{ fontSize: "0.82rem", color: "#4b6b8a", marginTop: 2 }}>{f.desc}</div>
                  </div>
                ))}
              </div>

              {/* H3 */}
              <h3 style={{
                fontFamily: "'Caveat', cursive", fontWeight: 800,
                fontSize: "clamp(18px, 4vw, 24px)", color: "#0f2a44",
                margin: "20px 0 10px 0"
              }}>
                📌 Где играть в Дудл Джамп на реальные деньги?
              </h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "#1e3a5f", margin: "0 0 14px 0" }}>
                Официальное <strong>казино Doodle Jump</strong> работает через сайт и Telegram-бота.
                После регистрации открывается <strong>личный баланс</strong>, пополнение и{" "}
                <strong>вывод средств</strong>. Для всех новых игроков —{" "}
                <strong>демо-режим</strong> с виртуальными деньгами, чтобы изучить стратегию
                без риска.
              </p>

              <h3 style={{
                fontFamily: "'Caveat', cursive", fontWeight: 800,
                fontSize: "clamp(18px, 4vw, 24px)", color: "#0f2a44",
                margin: "20px 0 10px 0"
              }}>
                💎 Почему выбирают Doodle Casino?
              </h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "#1e3a5f", margin: "0 0 14px 0" }}>
                Прозрачные <strong>ставки</strong>, честный рандом, выплаты до{" "}
                <strong>x500 от ставки</strong>. Возможность играть как в классический{" "}
                <strong>дудл джамп казино</strong>, так и в авто-режиме. Баланс синхронизирован
                между сайтом и Telegram.
              </p>

              {/* Keyword tags (SEO) */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 10px", marginTop: 16 }}>
                {[
                  "doodle jump casino", "дудл джамп казино", "doodle jump на деньги",
                  "слот дудл джамп", "казино дудл джамп ставки", "дудл джамп с выводом",
                  "doodle jump демо", "игровой автомат doodle jump"
                ].map((kw, i) => (
                  <span key={i} className="kw-tag">🎰 {kw}</span>
                ))}
              </div>

              {/* Bottom CTA */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 22 }}>
                <a href={REF_URL} target="_blank" rel="noopener noreferrer" className="btn-sketch-primary" style={{ flex: "1 1 160px", justifyContent: "center" }}>
                  🎰 Играть на сайте
                </a>
                <a href={REF_URL} target="_blank" rel="noopener noreferrer" className="btn-sketch-secondary" style={{
                  flex: "1 1 160px", justifyContent: "center",
                  background: "linear-gradient(180deg, #40c8e8, #229ed9)",
                  color: "#fff", borderColor: "#1178a0",
                  boxShadow: "4px 4px 0 #1178a0"
                }}>
                  📲 Telegram-бот
                </a>
              </div>

              <p style={{ fontSize: "11px", opacity: 0.55, marginTop: 18 }}>
                * Казино Doodle Jump (Дудл Джамп) на лицензионном ПО. 18+. Игра на деньги сопряжена с риском.
              </p>
            </div>

            {/* RIGHT: Character + Multiplier Demo */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

              {/* Character */}
              <div className="sketch-card" style={{ padding: 16, textAlign: "center" }}>
                <img
                  src={CHARACTER_IMG}
                  alt="Персонаж Doodle Jump Casino"
                  className="bounce-slow"
                  style={{ width: "100%", maxWidth: 220, margin: "0 auto", display: "block" }}
                  loading="lazy"
                />
                <div className="gold-badge" style={{ margin: "8px auto 0", display: "inline-flex" }}>
                  ⭐ Рейтинг 4.8 / 5
                </div>
              </div>

              {/* Multiplier Demo */}
              <div id="demo" className="sketch-card" style={{ padding: 18 }}>
                <div style={{
                  fontFamily: "'Caveat', cursive", fontWeight: 800,
                  fontSize: "1.1rem", color: "#0f2a44", marginBottom: 12
                }}>
                  🆓 Демо-игра Doodle Jump
                </div>
                <div style={{
                  textAlign: "center", padding: "20px 10px",
                  background: "linear-gradient(180deg, #f0f9ff, #e0f2fe)",
                  borderRadius: 14, border: "2px solid rgba(15,42,68,0.15)",
                  marginBottom: 12
                }}>
                  <div style={{
                    fontFamily: "'Caveat', cursive", fontWeight: 800,
                    fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
                    color: multiplier >= 5 ? "#dc2626" : multiplier >= 3 ? "#d97706" : "#166534",
                    lineHeight: 1, transition: "color 0.3s"
                  }}>
                    x{multiplier.toFixed(2)}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#4b6b8a", marginTop: 4, fontWeight: 600 }}>
                    {isPlaying ? "🔺 Множитель растёт..." : "Нажмите «Старт»"}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    onClick={() => { setMultiplier(1.0); setIsPlaying(true); }}
                    className="btn-sketch-primary"
                    style={{ flex: 1, fontSize: "1rem", padding: "10px 8px" }}
                    disabled={isPlaying}
                  >
                    {isPlaying ? "⬆️ Прыгаем..." : "▶ Старт"}
                  </button>
                  {isPlaying && (
                    <button
                      onClick={() => setIsPlaying(false)}
                      className="btn-sketch-secondary"
                      style={{ flex: 1, fontSize: "1rem", padding: "10px 8px" }}
                    >
                      💰 Забрать
                    </button>
                  )}
                </div>
                <p style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: 8, textAlign: "center" }}>
                  Демо-режим — без регистрации и вложений
                </p>
              </div>

              {/* Stats */}
              <div className="sketch-card" style={{ padding: 14 }}>
                {[
                  { label: "Макс. выигрыш", value: "x500", color: "#d97706" },
                  { label: "Мин. ставка", value: "10 ₽", color: "#166534" },
                  { label: "Вывод от", value: "500 ₽", color: "#1d4ed8" },
                  { label: "Игроков онлайн", value: `${players}`, color: "#dc2626" },
                ].map((s, i) => (
                  <div key={i} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "8px 0", borderBottom: i < 3 ? "1px dashed rgba(15,42,68,0.15)" : "none"
                  }}>
                    <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#4b6b8a" }}>{s.label}</span>
                    <span style={{
                      fontFamily: "'Caveat', cursive", fontWeight: 800,
                      fontSize: "1.1rem", color: s.color
                    }}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW TO PLAY SECTION ===== */}
      <section style={{ padding: "48px 0", background: "rgba(240,247,255,0.5)" }} id="play">
        <div className="container">
          <h2 className="section-heading" style={{ marginBottom: 32 }}>
            Как играть в Doodle Jump Casino на деньги
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16
          }}>
            {[
              {
                step: 1, icon: "📱",
                title: "Регистрация",
                desc: "Войдите через Telegram или зарегистрируйтесь на сайте за 30 секунд. Для демо-режима регистрация не нужна."
              },
              {
                step: 2, icon: "💳",
                title: "Пополнение баланса",
                desc: "Пополните счёт от 100₽ через карту, СБП, ЮMoney или криптовалюту. Мгновенное зачисление."
              },
              {
                step: 3, icon: "🎮",
                title: "Делаете ставку",
                desc: "Выберите размер ставки от 10₽ и нажмите «Играть». Персонаж начинает прыгать вверх по платформам."
              },
              {
                step: 4, icon: "⬆️",
                title: "Множитель растёт",
                desc: "С каждой платформой множитель увеличивается: x1 → x3 → x5 → x10 → x50 → x500. Следите за риском!"
              },
              {
                step: 5, icon: "💰",
                title: "Забираете выигрыш",
                desc: "Нажмите «Забрать» в любой момент — ставка × множитель = ваш выигрыш. Или рискните ради x500!"
              },
              {
                step: 6, icon: "🏦",
                title: "Вывод денег",
                desc: "Выводите от 500₽ на карту, ЮMoney или USDT. Время вывода — от 5 минут до 24 часов."
              },
            ].map((s) => (
              <div key={s.step} className="sketch-card" style={{ padding: "18px 16px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
                  <div className="step-circle">{s.step}</div>
                  <div style={{ fontSize: "1.8rem", lineHeight: 1 }}>{s.icon}</div>
                </div>
                <div style={{
                  fontFamily: "'Caveat', cursive", fontWeight: 800,
                  fontSize: "1.15rem", color: "#0f2a44", marginBottom: 6
                }}>
                  {s.title}
                </div>
                <p style={{ fontSize: "0.88rem", color: "#4b6b8a", lineHeight: 1.6, margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WIN BANNER SECTION ===== */}
      <section style={{ padding: "40px 0" }}>
        <div className="container">
          <div style={{
            borderRadius: 24, overflow: "hidden",
            border: "2.5px solid #0f2a44",
            boxShadow: "6px 6px 0 rgba(15,42,68,0.2)",
            position: "relative"
          }}>
            <img
              src={WIN_BANNER}
              alt="Максимальный выигрыш в Doodle Jump Casino x500"
              style={{ width: "100%", height: "auto", display: "block", maxHeight: 320, objectFit: "cover" }}
              loading="lazy"
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to left, rgba(15,42,68,0.6) 0%, transparent 60%)",
              display: "flex", alignItems: "center", justifyContent: "flex-end",
              padding: "24px 32px"
            }}>
              <div style={{ textAlign: "right" }}>
                <div style={{
                  fontFamily: "'Caveat', cursive", fontWeight: 800,
                  fontSize: "clamp(1.5rem, 5vw, 2.5rem)", color: "#fff",
                  textShadow: "2px 2px 0 rgba(0,0,0,0.5)", marginBottom: 8
                }}>
                  Максимальный выигрыш
                </div>
                <div className="mult-badge" style={{ fontSize: "2rem", padding: "8px 24px", marginBottom: 12 }}>
                  x500
                </div>
                <div style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.95rem", fontWeight: 600 }}>
                  При ставке 1000₽ = <strong style={{ color: "#fde68a" }}>500 000₽</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section style={{ padding: "48px 0", background: "rgba(240,247,255,0.4)" }}>
        <div className="container">
          <h2 className="section-heading" style={{ marginBottom: 28 }}>
            Частые вопросы о Дудл Джамп Казино
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              {
                q: "Как играть в Doodle Jump Casino на деньги?",
                a: "Зарегистрируйтесь или войдите через Telegram, пополните баланс от 100₽, выберите размер ставки и нажмите «Играть». Персонаж прыгает вверх, множитель растёт. Нажмите «Забрать» в любой момент — выигрыш зафиксируется."
              },
              {
                q: "Можно ли играть в Дудл Джамп казино без регистрации?",
                a: "Да! Демо-режим Doodle Jump Casino доступен без регистрации прямо в браузере. Для игры на реальные деньги и вывода потребуется быстрая регистрация через Telegram."
              },
              {
                q: "Какой максимальный выигрыш в Doodle Jump Casino?",
                a: "Максимальный множитель в слоте Doodle Jump — x500 от ставки. При ставке 1000₽ максимальный выигрыш составит 500 000₽."
              },
              {
                q: "Как вывести деньги из Doodle Jump Casino?",
                a: "Вывод денег доступен от 500₽ на банковские карты (Visa, МИР, Mastercard), ЮMoney, USDT и другие криптовалюты. Время вывода — от 5 минут до 24 часов."
              },
              {
                q: "Где играть в слот Doodle Jump онлайн?",
                a: "Слот Дудл Джамп доступен на официальном сайте казино и в Telegram-боте. Игра работает в браузере без скачивания на любом устройстве."
              },
              {
                q: "Что такое doodle jump демо игра?",
                a: "Демо-режим Doodle Jump Casino — это бесплатная версия слота с виртуальными деньгами. Позволяет изучить механику игры, стратегии ставок и поведение множителя без риска потерять реальные деньги."
              },
            ].map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS SECTION ===== */}
      <section style={{ padding: "48px 0" }}>
        <div className="container">
          <h2 className="section-heading" style={{ marginBottom: 28 }}>
            Отзывы игроков Doodle Jump Casino
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16
          }}>
            {[
              {
                name: "Алексей М.", city: "Москва", stars: 5,
                text: "Играю уже 3 месяца. Вывел за это время около 45 000₽. Механика дудл джамп казино затягивает — каждый раз думаешь «ещё чуть-чуть» и множитель растёт. Рекомендую!",
                date: "15 апреля 2026"
              },
              {
                name: "Кристина В.", city: "СПб", stars: 5,
                text: "Сначала попробовала демо-режим без регистрации. Потом решила играть на деньги. Вывод прошёл быстро — 20 минут на карту. Слот дудл джамп реально честный.",
                date: "2 мая 2026"
              },
              {
                name: "Дмитрий К.", city: "Екатеринбург", stars: 4,
                text: "Doodle Jump Casino — лучший краш-слот из всех что пробовал. Максимальный выигрыш поймал x47 при ставке 500₽. Итого 23 500₽ за один раунд!",
                date: "28 апреля 2026"
              },
            ].map((r, i) => (
              <div key={i} className="review-card">
                <div style={{ paddingTop: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <div>
                      <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 800, fontSize: "1.1rem", color: "#0f2a44" }}>
                        {r.name}
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "#6b7280" }}>{r.city} · {r.date}</div>
                    </div>
                    <div style={{ color: "#f5a623", fontSize: "1rem" }}>
                      {"★".repeat(r.stars)}
                    </div>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.6, margin: 0 }}>
                    {r.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION (SEO TEXT) ===== */}
      <section style={{ padding: "48px 0", background: "rgba(240,247,255,0.4)" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            alignItems: "start"
          }} className="about-grid">
            <div>
              <h2 className="section-heading" style={{ marginBottom: 20 }}>
                Об игровом автомате Doodle Jump
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#1e3a5f", marginBottom: 14 }}>
                <strong>Doodle Jump Casino</strong> — это уникальный <strong>слот с выводом денег</strong>,
                созданный на основе легендарной мобильной игры Doodle Jump. В отличие от классических
                игровых автоматов, здесь нет барабанов и линий выплат — только персонаж, платформы
                и постоянно растущий <strong>множитель ставки</strong>.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#1e3a5f", marginBottom: 14 }}>
                Игра относится к жанру <strong>краш-слотов</strong> — самому популярному формату
                онлайн-казино 2024–2025 года. Механика проста: чем дольше держишь ставку,
                тем выше множитель. Но в любой момент персонаж может упасть, и ставка сгорит.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#1e3a5f" }}>
                <strong>Казино Дудл Джамп</strong> работает на сертифицированном ПО с честным
                генератором случайных чисел (RNG). Все выплаты прозрачны, история раундов
                доступна в личном кабинете. Минимальная ставка — 10₽, максимальный выигрыш —
                <strong> x500 от ставки</strong>.
              </p>
            </div>
            <div>
              <h3 style={{
                fontFamily: "'Caveat', cursive", fontWeight: 800,
                fontSize: "clamp(18px,4vw,22px)", color: "#0f2a44", marginBottom: 16
              }}>
                Стратегии игры в Дудл Джамп казино
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  {
                    title: "Стратегия «Малый риск»",
                    desc: "Забирайте выигрыш на x1.5–x2. Частые небольшие победы, минимальный риск потери."
                  },
                  {
                    title: "Стратегия «Средний риск»",
                    desc: "Целевой множитель x3–x5. Оптимальное соотношение риска и награды для большинства игроков."
                  },
                  {
                    title: "Стратегия «Высокий риск»",
                    desc: "Ждёте x10–x50 и выше. Редкие, но крупные выигрыши. Требует большого банкролла."
                  },
                  {
                    title: "Авто-режим",
                    desc: "Задайте автоматический вывод на нужном множителе. Играйте без постоянного контроля."
                  },
                ].map((s, i) => (
                  <div key={i} style={{
                    padding: "12px 14px",
                    background: "rgba(255,255,255,0.8)",
                    borderRadius: 12,
                    border: "1.5px solid rgba(15,42,68,0.15)",
                    borderLeft: "4px solid #f5a623"
                  }}>
                    <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 800, fontSize: "1rem", color: "#0f2a44", marginBottom: 4 }}>
                      {s.title}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "#4b6b8a", lineHeight: 1.5 }}>{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section id="telegram" style={{
        padding: "56px 0",
        background: `url(${PATTERN_BG}) center/cover`,
        position: "relative"
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(15,42,68,0.82)"
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h2 style={{
            fontFamily: "'Caveat', cursive", fontWeight: 800,
            fontSize: "clamp(28px, 7vw, 48px)", color: "#fff",
            marginBottom: 12, lineHeight: 1.2
          }}>
            Играть в Doodle Jump Casino онлайн
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "clamp(15px,3vw,18px)", marginBottom: 28, maxWidth: 540, margin: "0 auto 28px" }}>
            Попробуй демо-режим без регистрации или сразу играй на деньги.
            Вывод от 500₽ на карту, ЮMoney, USDT.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={REF_URL} target="_blank" rel="noopener noreferrer" className="btn-sketch-primary" style={{ fontSize: "clamp(16px,4vw,22px)", padding: "16px 32px" }}>
              🎮 Играть бесплатно (демо)
            </a>
            <a href={REF_URL} target="_blank" rel="noopener noreferrer" className="btn-sketch-secondary" style={{
              fontSize: "clamp(16px,4vw,22px)", padding: "16px 32px",
              background: "linear-gradient(180deg, #40c8e8, #229ed9)",
              color: "#fff", borderColor: "#1178a0",
              boxShadow: "4px 4px 0 #1178a0"
            }}>
              📲 Telegram-бот
            </a>
          </div>
          <div style={{ marginTop: 20, display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
            {["doodle jump казино играть онлайн", "дудл джамп без регистрации", "вывод денег doodle jump"].map((kw, i) => (
              <span key={i} style={{
                color: "rgba(255,255,255,0.55)", fontSize: "0.78rem", fontWeight: 600
              }}>
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{
        padding: "28px 0 20px",
        borderTop: "2px solid rgba(15,42,68,0.15)"
      }}>
        <div className="container">
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "flex-start",
            flexWrap: "wrap", gap: 16, marginBottom: 16
          }}>
            <div>
              <div style={{
                fontFamily: "'Caveat', cursive", fontWeight: 800,
                fontSize: "1.4rem", color: "#0f2a44", marginBottom: 6
              }}>
                🎰 Doodle Jump Casino
              </div>
              <p style={{ fontSize: "0.82rem", color: "#6b7280", maxWidth: 320, margin: 0 }}>
                Казино Дудл Джамп — официальный сайт игры на деньги с выводом.
                Демо-режим, ставки от 10₽, множитель до x500.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <a href={REF_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem", color: "#0f2a44", fontWeight: 700, textDecoration: "none" }}>
                Играть на деньги
              </a>
              <a href={REF_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem", color: "#0f2a44", fontWeight: 700, textDecoration: "none" }}>
                Демо-режим
              </a>
              <a href={REF_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem", color: "#0f2a44", fontWeight: 700, textDecoration: "none" }}>
                Telegram-бот
              </a>
            </div>
          </div>

          {/* SEO footer keywords */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 12px", marginBottom: 14 }}>
            {[
              "doodle jump casino", "дудл джамп казино", "казино дудл джамп",
              "doodle jump на деньги", "дудл джамп с выводом денег",
              "слот doodle jump играть", "doodle jump демо игра",
              "играть в дудл джамп казино", "вывод денег doodle jump casino",
              "doodle jump максимальный выигрыш", "слот дудл джамп"
            ].map((kw, i) => (
              <span key={i} style={{ fontSize: "0.72rem", color: "#9ca3af" }}>{kw}</span>
            ))}
          </div>

          <div style={{
            borderTop: "1px dashed rgba(15,42,68,0.15)", paddingTop: 14,
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: 8
          }}>
            <span style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
              © 2026 Doodle Jump Casino. 18+. Играйте ответственно.
            </span>
            <span style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
              Игра на деньги сопряжена с риском потери средств.
            </span>
          </div>
        </div>
      </footer>

      {/* ===== MOBILE RESPONSIVE STYLES ===== */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .btn-sketch-primary, .btn-sketch-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}

// FAQ Accordion Item
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="sketch-card"
      style={{ padding: 0, cursor: "pointer", overflow: "hidden" }}
      onClick={() => setOpen(o => !o)}
      itemScope
      itemType="https://schema.org/Question"
    >
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "16px 18px", gap: 12
      }}>
        <div style={{
          fontFamily: "'Caveat', cursive", fontWeight: 800,
          fontSize: "clamp(16px,4vw,19px)", color: "#0f2a44", lineHeight: 1.3
        }} itemProp="name">
          {question}
        </div>
        <div style={{
          fontSize: "1.4rem", color: "#0f2a44", flexShrink: 0,
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 0.2s ease"
        }}>
          +
        </div>
      </div>
      {open && (
        <div
          style={{ padding: "0 18px 16px", borderTop: "1px dashed rgba(15,42,68,0.15)" }}
          itemScope
          itemType="https://schema.org/Answer"
        >
          <p style={{ fontSize: "0.92rem", color: "#374151", lineHeight: 1.65, margin: "12px 0 0 0" }} itemProp="text">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
