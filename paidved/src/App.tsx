import { useState } from 'react'
import styles from './App.module.css'

// ─── Types ───────────────────────────────────────────────────────────────────

interface Feature {
  icon: string
  title: string
  desc: string
  accent: 'red' | 'black'
}

interface Step {
  num: string
  icon: string
  title: string
  desc: string
}

interface Stat {
  value: string
  label: string
  accent: 'red' | 'black'
}

// ─── Data ────────────────────────────────────────────────────────────────────

const STEPS: Step[] = [
  { num: '01', icon: '🔍', title: 'Busque o produto',        desc: 'Digite o que quer ou cole um link de qualquer loja. O paidved entende tudo.' },
  { num: '02', icon: '⚡', title: 'Comparamos em segundos',  desc: 'Analisamos preço, frete, reputação do vendedor e prazo de entrega em centenas de lojas.' },
  { num: '03', icon: '🎯', title: 'Melhor oferta selecionada', desc: 'A opção ótima é escolhida automaticamente com base em custo-benefício real.' },
  { num: '04', icon: '✅', title: '1 clique e pronto',       desc: 'Seus dados de entrega e pagamento já estão salvos. Só apertar o botão.' },
]

const FEATURES: Feature[] = [
  { icon: '🤖', title: 'IA de preços',         desc: 'Algoritmo aprende seus hábitos e alerta quando o momento de comprar é ideal — antecipando promoções.', accent: 'red' },
  { icon: '🛡️', title: 'Fornecedor verificado', desc: 'Só sugerimos vendedores com histórico positivo, avaliações reais e política de troca confiável.', accent: 'black' },
  { icon: '💳', title: 'Pagamento seguro',      desc: 'Seus dados ficam criptografados. Suportamos Pix, cartão, boleto e carteiras digitais.', accent: 'red' },
  { icon: '📦', title: 'Rastreio unificado',    desc: 'Todas as encomendas em um só lugar, com notificações em tempo real de cada etapa da entrega.', accent: 'black' },
  { icon: '📊', title: 'Histórico inteligente', desc: 'Veja quanto economizou, quais categorias mais compra e receba sugestões personalizadas.', accent: 'red' },
  { icon: '🔔', title: 'Alertas de preço',      desc: 'Defina o preço-alvo e receba um aviso quando o produto baixar — sem precisar checar todo dia.', accent: 'black' },
]

const STATS: Stat[] = [
  { value: '98%',  label: 'Satisfação dos clientes',   accent: 'red' },
  { value: '2M+',  label: 'Produtos comparados',        accent: 'black' },
  { value: '1s',   label: 'Para concluir uma compra',   accent: 'red' },
  { value: 'R$320', label: 'Economia média por mês',    accent: 'black' },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logo}>
        <span className={styles.logoRed}>paid</span>
        <span className={styles.logoBlack}>ved</span>
      </a>
      <ul className={styles.navLinks}>
        <li><a href="#como-funciona">Como funciona</a></li>
        <li><a href="#recursos">Recursos</a></li>
        <li><a href="#demo">Demo</a></li>
      </ul>
      <button className={styles.navCta}>Começar grátis</button>
    </nav>
  )
}

function Hero() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => setClicked(false), 2200)
  }

  return (
    <section className={styles.hero}>
      <div className={styles.heroBlobRed} />
      <div className={styles.heroBlobBlack} />

      <div className={styles.badge}>
        <span className={styles.badgeDot}>⚡</span>
        Melhor preço garantido em todo o Brasil
      </div>

      <h1 className={styles.heroTitle}>
        Compre tudo<br />
        com <em>1 clique.</em><br />
        <span className={styles.heroBlack}>Sempre.</span>
      </h1>

      <p className={styles.heroSub}>
        Comparamos automaticamente preços, fornecedores e frete —<br />
        você só pressiona o botão.
      </p>

      <div className={styles.bigBtnWrap}>
        <button
          className={`${styles.bigBtn} ${clicked ? styles.bigBtnDone : ''}`}
          onClick={handleClick}
        >
          <span className={styles.btnPulse} />
          <span className={styles.btnIcon}>{clicked ? '✅' : '🛒'}</span>
          {clicked ? 'Pedido realizado!' : 'Comprar com 1 clique'}
        </button>
      </div>

      <div className={styles.trustRow}>
        {['Sem taxa extra', '+2 milhões de produtos', 'Devolução em 30 dias'].map((t, i) => (
          <span key={i} className={styles.trustItem}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="#111" strokeWidth="1.5"/>
              <path d="M4.5 7l2 2 3-3" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t}
          </span>
        ))}
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.statsGrid}>
        {STATS.map((s, i) => (
          <div key={i} className={styles.statItem}>
            <div className={`${styles.statNum} ${s.accent === 'red' ? styles.red : styles.statNumBlack}`}>
              {s.value}
            </div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className={styles.how} id="como-funciona">
      <div className={styles.sectionLabel}>Como funciona</div>
      <h2 className={styles.sectionTitle}>Simples como deve ser.</h2>
      <div className={styles.steps}>
        {STEPS.map((s) => (
          <div key={s.num} className={styles.step}>
            <div className={styles.stepNum}>{s.num}</div>
            <div className={styles.stepIcon}>{s.icon}</div>
            <h3 className={styles.stepTitle}>{s.title}</h3>
            <p className={styles.stepDesc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className={styles.features} id="recursos">
      <div className={`${styles.sectionLabel} ${styles.sectionLabelLight}`}>Recursos</div>
      <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>Tecnologia<br />a seu favor.</h2>
      <div className={styles.featuresGrid}>
        {FEATURES.map((f, i) => (
          <div key={i} className={styles.featCard}>
            <div className={`${styles.featIcon} ${f.accent === 'red' ? styles.featIconRed : styles.featIconBlack}`}>
              {f.icon}
            </div>
            <h3 className={styles.featTitle}>{f.title}</h3>
            <p className={styles.featDesc}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Demo() {
  const [bought, setBought] = useState(false)

  return (
    <section className={styles.demo} id="demo">
      <div className={styles.demoInner}>
        <div className={styles.demoVisual}>
          <span className={styles.demoBadge}>Melhor preço</span>
          <div className={styles.productImg}>🎧</div>
          <div className={styles.productName}>Fone de Ouvido Pro X1</div>
          <div className={styles.productBrand}>SoundTech · Disponível em 3 lojas</div>
          <div className={styles.priceRow}>
            <span className={styles.price}>R$ 189</span>
            <span className={styles.priceOld}>R$ 349</span>
            <span className={styles.priceSave}>−46%</span>
          </div>
          <button
            className={`${styles.demoBtn} ${bought ? styles.demoBtnDone : ''}`}
            onClick={() => { setBought(true); setTimeout(() => setBought(false), 2500) }}
          >
            {bought ? '✅ Pedido realizado!' : '🛒 Comprar com 1 clique'}
          </button>
        </div>

        <div className={styles.demoInfo}>
          <h2 className={styles.demoInfoTitle}>Tudo pronto.<br />Só comprar.</h2>
          <p className={styles.demoInfoDesc}>
            Nosso sistema já escolheu o melhor fornecedor, calculou o frete mais rápido e aplicou o cupom disponível. Você só aperta.
          </p>
          <ul className={styles.checks}>
            {[
              'Preço 46% mais barato que a média',
              'Entrega em 2 dias úteis',
              'Vendedor com 4.9 ★ de avaliação',
              'Cupom automático aplicado',
              'Garantia de 12 meses inclusa',
            ].map((item, i) => (
              <li key={i} className={styles.checkItem}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Cta() {
  return (
    <section className={styles.cta}>
      <h2 className={styles.ctaTitle}>Pronto para<br />comprar melhor?</h2>
      <p className={styles.ctaDesc}>Crie sua conta gratuitamente e faça sua primeira compra com 1 clique ainda hoje.</p>
      <button className={styles.ctaBtn}>🚀 Criar minha conta</button>
    </section>
  )
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#" className={styles.footerLogo}>
        <span className={styles.logoRed}>paid</span>
        <span style={{ color: '#fff' }}>ved</span>
      </a>
      <span>© 2025 paidved. Todos os direitos reservados.</span>
      <span>Feito com ❤️ no Brasil</span>
    </footer>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <Demo />
      <Cta />
      <Footer />
    </>
  )
}
