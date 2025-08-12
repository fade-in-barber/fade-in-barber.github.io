import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Scissors, Sparkles, Users, ShieldCheck, Smartphone, Award, MapPin, Star, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-barber.jpg";
import cutFade from "@/assets/cut-fade.jpg";
import cutNavalhado from "@/assets/cut-navalhado.jpg";
import cutTesoura from "@/assets/cut-tesoura.jpg";
import cutBarba from "@/assets/cut-barba.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <nav className="container flex h-16 items-center justify-between px-4">
          <a href="#" className="font-display text-lg md:text-xl tracking-wide">Erik Roncaglio</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#portfolio" className="hover:text-accent transition-colors">Portfólio</a>
            <a href="#sobre" className="hover:text-accent transition-colors">Sobre</a>
            <a href="#experiencia" className="hover:text-accent transition-colors">Experiência</a>
            <a href="#servicos" className="hover:text-accent transition-colors">Serviços</a>
          </div>
          <Button asChild variant="gold" size="sm" className="text-xs px-3 py-2 md:text-sm md:px-4">
            <a href="#contato" aria-label="Agendar horário">Agendar</a>
          </Button>
        </nav>
      </header>

      <main>
        {/* Hero Profissional */}
        <section aria-label="Apresentação" className="relative">
          <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-60" aria-hidden="true" />
          <img src={heroImage} alt="Erik Roncaglio realizando um corte fade profissional em seu estúdio" className="w-full h-[70vh] md:h-[80vh] object-cover object-center" loading="eager" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
          <div className="container absolute inset-0 flex items-end pb-12 md:pb-20 px-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6">
                <div className="flex items-center gap-1 md:gap-2 text-accent">
                  <Award size={16} className="md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm font-medium">Barbeiro Certificado • 12+ anos</span>
                </div>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6">Erik Roncaglio</h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-accent font-medium">Mestre em Barbearia Clássica & Moderna</p>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl leading-relaxed">
                Especialista em fades, cortes clássicos e barbearia tradicional. Atendimento personalizado com mais de uma década dedicada à arte da barbearia.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button variant="hero" size="lg" className="md:text-base" asChild>
                  <a href="#contato" aria-label="Agendar horário">Agendar horário</a>
                </Button>
                <Button variant="outline" size="lg" className="md:text-base" asChild>
                  <a href="#portfolio" aria-label="Ver portfólio">Ver meu trabalho</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Credenciais e Conquistas */}
        <section className="container py-12 md:py-16 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="p-3 md:p-4 rounded-full bg-accent/20 border border-accent/40 mb-3 md:mb-4">
                <Award className="text-accent" size={24} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1 md:mb-2">12+</div>
              <div className="text-muted-foreground text-sm md:text-base">Anos de experiência</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 md:p-4 rounded-full bg-accent/20 border border-accent/40 mb-3 md:mb-4">
                <Users className="text-accent" size={24} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1 md:mb-2">5000+</div>
              <div className="text-muted-foreground text-sm md:text-base">Clientes atendidos</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 md:p-4 rounded-full bg-accent/20 border border-accent/40 mb-3 md:mb-4">
                <Star className="text-accent" size={24} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1 md:mb-2">4.9</div>
              <div className="text-muted-foreground text-sm md:text-base">Avaliação média</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 md:p-4 rounded-full bg-accent/20 border border-accent/40 mb-3 md:mb-4">
                <MapPin className="text-accent" size={24} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1 md:mb-2">3</div>
              <div className="text-muted-foreground text-sm md:text-base">Locais de atuação</div>
            </div>
          </div>
        </section>

        {/* Portfólio - Galeria de Trabalhos */}
        <section id="portfolio" className="container py-16 md:py-20 px-4">
          <header className="mb-12 md:mb-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-4 text-foreground">Meu Portfólio</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">Uma seleção dos meus trabalhos mais recentes. Cada corte é uma obra de arte única, adaptada ao estilo e personalidade de cada cliente.</p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <figure className="group overflow-hidden rounded-xl border border-accent/20 bg-[image:var(--gradient-card)] shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-gold)] transition-all duration-500">
              <img src={cutFade} alt="Corte fade alto executado por Erik Roncaglio" className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <figcaption className="p-4 md:p-6">
                <h3 className="font-semibold text-accent mb-2 text-base md:text-lg">Fade Clássico Alto</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-3">Técnica precisa com degradê limpo e alinhamento perfeito das linhas.</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Cliente: Marco A.</span>
                  <span>Duração: 45min</span>
                </div>
              </figcaption>
            </figure>
            <figure className="group overflow-hidden rounded-xl border border-accent/20 bg-[image:var(--gradient-card)] shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-gold)] transition-all duration-500">
              <img src={cutNavalhado} alt="Trabalho de navalha artístico por Erik Roncaglio" className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <figcaption className="p-4 md:p-6">
                <h3 className="font-semibold text-accent mb-2 text-base md:text-lg">Arte com Navalha</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-3">Desenhos únicos criados com navalha, combinando tradição e criatividade.</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Cliente: Rafael S.</span>
                  <span>Duração: 60min</span>
                </div>
              </figcaption>
            </figure>
            <figure className="group overflow-hidden rounded-xl border border-accent/20 bg-[image:var(--gradient-card)] shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-gold)] transition-all duration-500">
              <img src={cutTesoura} alt="Corte clássico feito na tesoura" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <figcaption className="p-4 text-center">
                <h3 className="font-semibold text-accent mb-1 text-sm md:text-base">Tesoura</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Controle e textura</p>
              </figcaption>
            </figure>
            <figure className="group overflow-hidden rounded-xl border border-accent/20 bg-[image:var(--gradient-card)] shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-gold)] transition-all duration-500">
              <img src={cutBarba} alt="Barba e cabelo com linhas definidas" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <figcaption className="p-4 text-center">
                <h3 className="font-semibold text-accent mb-1 text-sm md:text-base">Barba + Cabelo</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Linhas definidas</p>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Sobre o Barbeiro */}
        <section id="sobre" className="container py-16 md:py-20 px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-4 md:mb-6 text-foreground">Sobre Erik Roncaglio</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6 text-base md:text-lg">
                Comecei na barbearia por paixão. Entre erros e acertos, descobri que técnica e postura fazem toda a diferença.
                Depois de anos de prática e estudo, desenvolvi um método claro e direto para elevar qualquer barbeiro ao próximo nível.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Este curso é a condensação da minha jornada: o que funciona de verdade no dia a dia para encantar clientes e valorizar seu serviço.
              </p>
            </div>
            <Card className="p-6 md:p-8 bg-[image:var(--gradient-card)] border border-accent/30 shadow-[var(--shadow-elegant)]">
              <h3 className="font-display text-xl md:text-2xl mb-4 md:mb-6 text-accent">A dor que você sente</h3>
              <ul className="space-y-3 md:space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 text-accent flex-shrink-0" size={18} />
                  <span className="text-sm md:text-base">Insegurança ao manusear tesoura e máquina</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 text-accent flex-shrink-0" size={18} />
                  <span className="text-sm md:text-base">Cortes imprecisos e acabamento sem padrão</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 text-accent flex-shrink-0" size={18} />
                  <span className="text-sm md:text-base">Dificuldade em fidelizar e aumentar a clientela</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Curso como Solução */}
        <section id="curso" className="container py-20">
          <header className="mb-12 text-center">
            <h2 className="font-display text-4xl mb-4 text-foreground">O Curso como Solução</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Passo a passo prático com Erik: tesoura, máquina, acabamento e postura.</p>
          </header>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border border-accent/30 bg-[image:var(--gradient-card)] shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-gold)] transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/20 border border-accent/40">
                  <Scissors className="text-accent group-hover:scale-110 transition-transform duration-300" size={24} />
                </div>
                <h3 className="font-semibold text-lg text-foreground">Domine técnicas avançadas</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">Fades, navalhado, texturização e correções com confiança total.</p>
            </Card>
            <Card className="p-8 border border-accent/30 bg-[image:var(--gradient-card)] shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-gold)] transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/20 border border-accent/40">
                  <Sparkles className="text-accent group-hover:scale-110 transition-transform duration-300" size={24} />
                </div>
                <h3 className="font-semibold text-lg text-foreground">Ganhe precisão e segurança</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">Processos claros e checklist para um acabamento sempre consistente.</p>
            </Card>
            <Card className="p-8 border border-accent/30 bg-[image:var(--gradient-card)] shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-gold)] transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/20 border border-accent/40">
                  <Users className="text-accent group-hover:scale-110 transition-transform duration-300" size={24} />
                </div>
                <h3 className="font-semibold text-lg text-foreground">Aumente sua clientela</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">Entregue resultado premium e cobre com autoridade total.</p>
            </Card>
          </div>
        </section>

        {/* O que você vai aprender */}
        <section id="conteudo" className="container py-20">
          <header className="mb-12 text-center">
            <h2 className="font-display text-4xl mb-4 text-foreground">O que você vai aprender</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Módulos práticos para evoluir do básico ao avançado com Erik Roncaglio.</p>
          </header>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border border-accent/30 bg-[image:var(--gradient-card)] shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-gold)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/20 border border-accent/40">
                  <Scissors className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold text-lg text-foreground">Tesoura e máquina</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 text-accent flex-shrink-0" size={16} /><span>Fundamentos de corte e linhas guias</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 text-accent flex-shrink-0" size={16} /><span>Degradê (fade) limpo e sem marcas</span></li>
              </ul>
            </Card>
            <Card className="p-8 border border-accent/30 bg-[image:var(--gradient-card)] shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-gold)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/20 border border-accent/40">
                  <Sparkles className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold text-lg text-foreground">Acabamentos profissionais</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 text-accent flex-shrink-0" size={16} /><span>Navalhado preciso e alinhamento</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 text-accent flex-shrink-0" size={16} /><span>Texturização e correções</span></li>
              </ul>
            </Card>
            <Card className="p-8 border border-accent/30 bg-[image:var(--gradient-card)] shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-gold)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/20 border border-accent/40">
                  <ShieldCheck className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold text-lg text-foreground">Postura e segurança</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 text-accent flex-shrink-0" size={16} /><span>Ergonomia e higiene</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 text-accent flex-shrink-0" size={16} /><span>Fluxo de atendimento eficiente</span></li>
              </ul>
            </Card>
            <Card className="p-8 border border-accent/30 bg-[image:var(--gradient-card)] shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-gold)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/20 border border-accent/40">
                  <Users className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold text-lg text-foreground">Atendimento que fideliza</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 text-accent flex-shrink-0" size={16} /><span>Comunicação e experiência do cliente</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 text-accent flex-shrink-0" size={16} /><span>Precificação com autoridade</span></li>
              </ul>
            </Card>
            <Card className="p-8 border border-accent/30 bg-[image:var(--gradient-card)] shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-gold)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/20 border border-accent/40">
                  <Smartphone className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold text-lg text-foreground">Conteúdo e marketing</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 text-accent flex-shrink-0" size={16} /><span>Portfólio no Instagram</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 text-accent flex-shrink-0" size={16} /><span>Agenda sempre cheia</span></li>
              </ul>
            </Card>
            <Card className="p-8 border border-accent/30 bg-[image:var(--gradient-card)] shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-gold)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/20 border border-accent/40">
                  <CheckCircle2 className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold text-lg text-foreground">Checklists e prática</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 text-accent flex-shrink-0" size={16} /><span>Passo a passo para cada corte</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 text-accent flex-shrink-0" size={16} /><span>Exercícios guiados por Erik</span></li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Prova Social - Depoimentos */}
        <section className="container py-20">
          <header className="mb-12 text-center">
            <h2 className="font-display text-4xl mb-4 text-foreground">O que dizem nossos alunos</h2>
            <p className="text-muted-foreground text-lg">Mais de 2.847 barbeiros já transformaram seus cortes</p>
          </header>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border border-accent/30 bg-[image:var(--gradient-card)] shadow-[var(--shadow-elegant)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold">MC</div>
                <div>
                  <h4 className="font-semibold text-foreground">Marcos Castro</h4>
                  <p className="text-sm text-muted-foreground">Barbeiro há 3 anos</p>
                </div>
              </div>
              <blockquote className="text-muted-foreground leading-relaxed mb-4">"Aumentei meus preços em 40% depois do curso. Os clientes percebem a diferença na qualidade dos cortes."</blockquote>
              <div className="flex text-accent">★★★★★</div>
            </Card>
            <Card className="p-8 border border-accent/30 bg-[image:var(--gradient-card)] shadow-[var(--shadow-elegant)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold">RA</div>
                <div>
                  <h4 className="font-semibold text-foreground">Rafael Alves</h4>
                  <p className="text-sm text-muted-foreground">Iniciante</p>
                </div>
              </div>
              <blockquote className="text-muted-foreground leading-relaxed mb-4">"Sai do zero total para ter agenda lotada em 3 meses. O método do Erik é incrível!"</blockquote>
              <div className="flex text-accent">★★★★★</div>
            </Card>
            <Card className="p-8 border border-accent/30 bg-[image:var(--gradient-card)] shadow-[var(--shadow-elegant)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold">LS</div>
                <div>
                  <h4 className="font-semibold text-foreground">Lucas Silva</h4>
                  <p className="text-sm text-muted-foreground">Barbeiro experiente</p>
                </div>
              </div>
              <blockquote className="text-muted-foreground leading-relaxed mb-4">"Mesmo com experiência, aprendi técnicas que revolucionaram meu trabalho. Recomendo demais!"</blockquote>
              <div className="flex text-accent">★★★★★</div>
            </Card>
          </div>
        </section>

        {/* Oferta e Preço */}
        <section className="container py-20">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h2 className="font-display text-4xl mb-4 text-foreground">Oferta Especial - Últimas Vagas</h2>
              <p className="text-muted-foreground text-lg">Promoção válida apenas para os próximos 50 alunos</p>
            </header>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Card className="p-8 border border-accent/30 bg-[image:var(--gradient-card)] shadow-[var(--shadow-elegant)] relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-accent text-background px-3 py-1 rounded-full text-sm font-semibold">
                  60% OFF
                </div>
                <h3 className="font-display text-2xl mb-6 text-foreground">Curso Completo de Barbearia</h3>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-accent">R$ 397</span>
                    <span className="text-lg text-muted-foreground line-through">R$ 997</span>
                  </div>
                  <p className="text-sm text-muted-foreground">ou 12x de R$ 39,90 sem juros</p>
                </div>
                <ul className="space-y-3 mb-8 text-muted-foreground">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 text-accent flex-shrink-0" size={16} /><span>+40 aulas práticas em alta qualidade</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 text-accent flex-shrink-0" size={16} /><span>Certificado reconhecido</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 text-accent flex-shrink-0" size={16} /><span>Suporte direto com Erik por 6 meses</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 text-accent flex-shrink-0" size={16} /><span>Grupo VIP no WhatsApp</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-1 text-accent flex-shrink-0" size={16} /><span>Bônus: E-book "Fidelização de Clientes"</span></li>
                </ul>
                <Button variant="hero" size="xl" className="w-full mb-4 text-sm md:text-base">
                  Garantir vaga agora
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Restam apenas <span className="text-accent font-semibold">23 vagas</span>
                </p>
              </Card>
              <div className="space-y-6">
                <Card className="p-6 border border-accent/30 bg-[image:var(--gradient-card)] shadow-[var(--shadow-elegant)]">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck className="text-accent" size={24} />
                    <h4 className="font-semibold text-foreground">Garantia Blindada</h4>
                  </div>
                  <p className="text-muted-foreground">7 dias para testar. Se não gostar, devolvemos 100% do seu dinheiro.</p>
                </Card>
                <Card className="p-6 border border-accent/30 bg-[image:var(--gradient-card)] shadow-[var(--shadow-elegant)]">
                  <div className="flex items-center gap-3 mb-3">
                    <Smartphone className="text-accent" size={24} />
                    <h4 className="font-semibold text-foreground">Acesso Vitalício</h4>
                  </div>
                  <p className="text-muted-foreground">Assista quando e onde quiser, no celular, tablet ou computador.</p>
                </Card>
                <Card className="p-6 border border-accent/30 bg-[image:var(--gradient-card)] shadow-[var(--shadow-elegant)]">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="text-accent" size={24} />
                    <h4 className="font-semibold text-foreground">Comunidade Exclusiva</h4>
                  </div>
                  <p className="text-muted-foreground">Faça parte do grupo VIP com mais de 2.000 barbeiros de sucesso.</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="container py-16">
          <header className="mb-8">
            <h2 className="font-display text-3xl mb-2">Perguntas frequentes</h2>
            <p className="text-muted-foreground">Dúvidas comuns sobre o curso do Erik.</p>
          </header>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>Quanto tempo terei acesso ao curso?</AccordionTrigger>
              <AccordionContent>Você terá acesso por 12 meses para assistir quando quiser, no seu ritmo.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>O curso é para iniciantes?</AccordionTrigger>
              <AccordionContent>Sim. Erik começa pelos fundamentos e avança até técnicas profissionais de barbearia.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Tem certificado?</AccordionTrigger>
              <AccordionContent>Sim, ao concluir as aulas e atividades você recebe certificado digital.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Como tiro dúvidas?</AccordionTrigger>
              <AccordionContent>Você terá suporte para dúvidas por e‑mail e comunidade exclusiva.</AccordionContent>
            </AccordionItem>
          </Accordion>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "Quanto tempo terei acesso ao curso?", acceptedAnswer: { "@type": "Answer", text: "Acesso por 12 meses para assistir quando quiser." } },
              { "@type": "Question", name: "O curso é para iniciantes?", acceptedAnswer: { "@type": "Answer", text: "Sim, começa do básico e vai até técnicas profissionais com Erik." } },
              { "@type": "Question", name: "Tem certificado?", acceptedAnswer: { "@type": "Answer", text: "Sim, certificado digital ao concluir." } },
              { "@type": "Question", name: "Como tiro dúvidas?", acceptedAnswer: { "@type": "Answer", text: "Suporte por e‑mail e comunidade exclusiva." } }
            ]
          }) }} />
        </section>

        {/* Urgência */}
        <section className="container py-16">
          <Card className="p-8 border-2 border-accent/50 bg-[image:var(--gradient-card)] shadow-[var(--shadow-gold)] text-center">
            <h3 className="font-display text-2xl mb-4 text-accent">⚠️ ATENÇÃO: Oferta por tempo limitado!</h3>
            <p className="text-muted-foreground mb-6 text-lg">Esta promoção de 60% OFF expira em:</p>
            <div className="flex justify-center gap-4 mb-6">
              <div className="bg-accent/20 border border-accent/40 rounded-lg p-4 min-w-[80px]">
                <div className="text-2xl font-bold text-accent">02</div>
                <div className="text-xs text-muted-foreground">DIAS</div>
              </div>
              <div className="bg-accent/20 border border-accent/40 rounded-lg p-4 min-w-[80px]">
                <div className="text-2xl font-bold text-accent">14</div>
                <div className="text-xs text-muted-foreground">HORAS</div>
              </div>
              <div className="bg-accent/20 border border-accent/40 rounded-lg p-4 min-w-[80px]">
                <div className="text-2xl font-bold text-accent">32</div>
                <div className="text-xs text-muted-foreground">MIN</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Depois disso, o valor volta para R$ 997</p>
          </Card>
        </section>

        {/* CTA Final */}
        <section id="cta" className="container py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl mb-4 text-foreground">Não perca esta oportunidade única!</h2>
            <p className="text-muted-foreground mb-8 text-xl">Junte-se aos mais de 2.847 barbeiros que já transformaram suas carreiras com Erik Roncaglio</p>
            <Button variant="hero" size="xl" className="mb-6 pulse text-sm md:text-base px-6 md:px-10">
              Garantir vaga agora
            </Button>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-sm">
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-full bg-accent/20 border border-accent/40">
                  <ShieldCheck className="text-accent" size={24} />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-foreground">Garantia Total</div>
                  <div className="text-muted-foreground">7 dias para testar</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-full bg-accent/20 border border-accent/40">
                  <Smartphone className="text-accent" size={24} />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-foreground">Acesso Imediato</div>
                  <div className="text-muted-foreground">Comece hoje mesmo</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-full bg-accent/20 border border-accent/40">
                  <Users className="text-accent" size={24} />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-foreground">Suporte VIP</div>
                  <div className="text-muted-foreground">Erik te ajuda diretamente</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CTA fixa (mobile) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-accent/30 bg-background/95 backdrop-blur">
        <div className="container py-3 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <p className="text-xs font-semibold text-accent">60% OFF • Últimas vagas</p>
            <p className="text-xs text-muted-foreground">De R$ 997 por R$ 397</p>
          </div>
          <Button asChild size="sm" variant="hero" className="pulse">
            <a href="#cta" aria-label="Garantir vaga">Garantir vaga</a>
          </Button>
        </div>
      </div>

      <footer className="border-t border-border py-8">
        <div className="container text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Barber Mentor — Todos os direitos reservados.</p>
        </div>
      </footer>
      
      <aside aria-label="selo de amostra — feito por Erik Roncaglio e Gulherme Motta para Vitor Daniel" className="fixed right-4 bottom-20 md:bottom-4 z-50">
        <div className="rounded-full bg-accent/15 border border-accent/40 backdrop-blur px-4 py-2 text-xs font-medium text-accent shadow-md">
          Amostra • Feito por <span className="font-semibold">Erik Roncaglio</span> e <span className="font-semibold">Gulherme Motta</span> para <span className="font-semibold">Vitor Daniel</span>
        </div>
      </aside>
    </div>
  );
};

export default Index;