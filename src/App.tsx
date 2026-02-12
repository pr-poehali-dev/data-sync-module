import { ArtDecoSunburst } from "@/components/ArtDecoSunburst";
import { ArtDecoDivider } from "@/components/ArtDecoDivider";
import { ServiceCard } from "@/components/ServiceCard";
import { CTAForm } from "@/components/CTAForm";

function App() {
  return (
    <main className="min-h-screen bg-background dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <ArtDecoSunburst />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Decorative top element */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-primary" />
              <div className="w-3 h-3 rotate-45 border border-primary" />
              <div className="w-16 h-px bg-primary" />
            </div>
          </div>

          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6">Премиум класс</p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
            <span className="text-gold-gradient">Tarantul</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            Пик мощи и красоты. Эксклюзивная обувь для тех, кто ценит безупречное качество и уникальный стиль.
          </p>

          {/* Decorative bottom element */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-primary" />
              <div className="w-2 h-2 rotate-45 bg-primary" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path
              d="M12 5v14M5 12l7 7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ArtDecoDivider variant="stepped" />

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Наша философия</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight text-balance">
                Где стиль встречает совершенство
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                В мире массовой обуви мы создаём исключительное. Tarantul объединяет взыскательных людей, которые понимают, что настоящий статус проявляется в деталях — от выбора материалов до безупречного исполнения.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                От классических моделей ручной работы до современных дизайнерских решений — каждая пара обуви создана для тех, кто не приемлет компромиссов в качестве и стиле.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Наши коллекции</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">Эксклюзивные линии</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Классика премиум"
              description="Обувь ручной работы из редких материалов. Итальянская кожа, эксклюзивная фурнитура и безупречное качество исполнения для повседневного превосходства."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <path d="M2 17l10-3 10 3v3H2v-3zM6 10a6 6 0 0112 0v4H6v-4z" />
                  <path d="M8 14h8" />
                </svg>
              }
            />
            <ServiceCard
              title="Дизайнерские коллекции"
              description="Лимитированные серии от признанных мастеров обувного искусства. Каждая модель — произведение искусства с номером и сертификатом подлинности."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 9l6 6M15 9l-6 6" />
                </svg>
              }
            />
            <ServiceCard
              title="Индивидуальный пошив"
              description="Создание обуви по вашим меркам и предпочтениям. Полный цикл изготовления от дизайна до финальной примерки с личным мастером."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v10M7 12h10" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ArtDecoDivider variant="fan" />

          <div className="relative text-center py-12">
            {/* Quote decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-primary/20 font-serif text-9xl leading-none">
              &ldquo;
            </div>

            <blockquote className="relative z-10">
              <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed italic mb-8">
                Tarantul изменил моё представление о премиальной обуви. Это не просто покупка — это опыт, где каждая деталь продумана до совершенства.
              </p>
              <footer className="text-muted-foreground">
                <span className="text-primary">—</span> Постоянный клиент,{" "}
                <span className="text-primary">Москва</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <ArtDecoSunburst />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <ArtDecoDivider variant="chevron" />
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Начните свой путь</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">Записаться на примерку</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Посетите наш бутик для персональной консультации. Оставьте заявку, и мы подберём удобное время для знакомства с коллекцией.
            </p>
          </div>

          <div className="relative p-8 md:p-12 border border-border">
            {/* Decorative frame corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />

            <CTAForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-primary" />
              <span className="font-serif text-xl text-foreground">Tarantul</span>
              <div className="w-12 h-px bg-primary" />
            </div>

            <p className="text-muted-foreground text-sm text-center">
              &copy; {new Date().getFullYear()} ЗолотойКапитал. Все права защищены. Членство только по приглашению.
            </p>

            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-primary" style={{ opacity: 1 - i * 0.15 }} />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;