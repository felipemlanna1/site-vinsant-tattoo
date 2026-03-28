import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WhatsappLogo, InstagramLogo, MapPin, Star, Clock, Needle, Palette, ShieldCheck, CalendarBlank, ArrowUp, List, X } from '@phosphor-icons/react'

const WHATSAPP = "5548991717768"
const INSTAGRAM = "https://instagram.com/vinsant_lopez"
const PHONE = "(48) 99171-7768"
const ADDRESS = "Lagoa da Conceicao, Florianopolis - SC"

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }
const stagger = { visible: { transition: { staggerChildren: 0.15 } } }

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Estilos', href: '#estilos' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ]
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="font-['Bebas_Neue'] text-3xl tracking-widest text-white hover:text-red-500 transition">VINSANT</a>
        <div className="hidden md:flex gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-gray-300 hover:text-red-400 transition uppercase tracking-wider">{l.label}</a>
          ))}
        </div>
        <a href={`https://wa.me/${WHATSAPP}?text=Ola! Gostaria de agendar uma sessao de tatuagem.`} target="_blank" rel="noopener" className="hidden md:flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition">
          <WhatsappLogo size={18} weight="duotone" /> Agendar
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={28} /> : <List size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800">
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-gray-300 hover:text-red-400 transition uppercase tracking-wider text-sm">{l.label}</a>
              ))}
              <a href={`https://wa.me/${WHATSAPP}?text=Ola! Gostaria de agendar uma sessao de tatuagem.`} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-red-700 text-white px-5 py-3 rounded-lg font-semibold">
                <WhatsappLogo size={18} weight="duotone" /> Agendar Sessao
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="./images/hero.jpg" alt="Vinsant Lopez Tattoo Studio" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>
      <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p variants={fadeUp} className="text-red-500 uppercase tracking-[0.3em] text-sm mb-4">Lagoa da Conceicao - Florianopolis</motion.p>
        <motion.h1 variants={fadeUp} className="font-['Bebas_Neue'] text-6xl md:text-8xl lg:text-9xl leading-none tracking-wider text-white mb-6">
          VINSANT<br /><span className="text-red-600">LOPEZ</span> TATTOO
        </motion.h1>
        <motion.p variants={fadeUp} className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Arte na pele com mais de 232 avaliacoes 5 estrelas. Cada tatuagem e unica, cada traco conta uma historia.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`https://wa.me/${WHATSAPP}?text=Ola! Quero agendar minha tattoo com Vinsant Lopez!`} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105">
            <WhatsappLogo size={24} weight="duotone" /> Agendar Sessao
          </a>
          <a href="#portfolio" className="flex items-center justify-center gap-2 border-2 border-gray-600 hover:border-red-500 text-white px-8 py-4 rounded-lg text-lg transition hover:text-red-400">
            <Palette size={24} weight="duotone" /> Ver Portfolio
          </a>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-10 flex justify-center gap-1">
          {[...Array(5)].map((_, i) => <Star key={i} size={20} weight="fill" className="text-yellow-500" />)}
          <span className="text-gray-400 ml-2 text-sm">232 avaliacoes no Google</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

function Sobre() {
  return (
    <section id="sobre" className="py-24 px-6 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <img src="./images/studio.jpg" alt="Estudio Vinsant Lopez Tattoo" className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover" />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
          <motion.span variants={fadeUp} className="text-red-500 uppercase tracking-widest text-sm font-semibold">Sobre o Artista</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-['Bebas_Neue'] text-white tracking-wider">ARTE QUE TRANSCENDE A PELE</motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed">
            Vinsant Lopez e um dos tatuadores mais reconhecidos de Florianopolis, com estudio proprio na Lagoa da Conceicao. Com anos de experiencia e uma paixao inabalavel pela arte, cada trabalho e criado do zero, respeitando a historia e personalidade de cada cliente.
          </motion.p>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed">
            Especializado em blackwork, geometrico e fineline, Vinsant combina tecnica impecavel com visao artistica para criar pecas que sao verdadeiras obras de arte.
          </motion.p>
          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6 pt-4">
            {[
              { num: '232+', label: 'Avaliacoes' },
              { num: '5.0', label: 'Estrelas' },
              { num: '10+', label: 'Anos exp.' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-['Bebas_Neue'] text-red-500">{s.num}</p>
                <p className="text-gray-500 text-sm">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Estilos() {
  const estilos = [
    { icon: <Needle size={40} weight="duotone" />, title: 'Blackwork', desc: 'Tracos solidos e preenchimentos em preto puro. Geometria, mandalas e padronagens complexas.' },
    { icon: <Palette size={40} weight="duotone" />, title: 'Fine Line', desc: 'Linhas delicadas e detalhadas. Botanica, lettering minimalista e designs sutis.' },
    { icon: <ShieldCheck size={40} weight="duotone" />, title: 'Geometrico', desc: 'Formas geometricas precisas, simetria perfeita. Sacred geometry e dotwork.' },
    { icon: <Star size={40} weight="duotone" />, title: 'Realismo', desc: 'Retratos e composicoes com alto nivel de detalhe e sombreamento realista.' },
  ]
  return (
    <section id="estilos" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-red-500 uppercase tracking-widest text-sm font-semibold">Especialidades</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-['Bebas_Neue'] text-white tracking-wider mt-3">ESTILOS DE TATUAGEM</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {estilos.map(e => (
            <motion.div key={e.title} variants={fadeUp} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-red-500/50 transition group">
              <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform">{e.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{e.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Portfolio() {
  const works = [
    { src: './images/tattoo-blackwork.jpg', title: 'Mandala Geometrica', style: 'Blackwork' },
    { src: './images/tattoo-fineline.jpg', title: 'Botanica Delicada', style: 'Fine Line' },
    { src: './images/artist-working.jpg', title: 'Processo Criativo', style: 'Em acao' },
    { src: './images/portfolio.jpg', title: 'Colecao de Designs', style: 'Portfolio' },
  ]
  return (
    <section id="portfolio" className="py-24 px-6 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-red-500 uppercase tracking-widest text-sm font-semibold">Trabalhos</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-['Bebas_Neue'] text-white tracking-wider mt-3">PORTFOLIO</motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 mt-4 max-w-xl mx-auto">Cada peca e unica e personalizada. Confira alguns dos nossos trabalhos mais recentes.</motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-6">
          {works.map(w => (
            <motion.div key={w.title} variants={fadeUp} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
              <img src={w.src} alt={w.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <span className="text-red-400 text-sm uppercase tracking-wider">{w.style}</span>
                  <h3 className="text-white text-xl font-semibold">{w.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-12">
          <a href={INSTAGRAM} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-lg font-semibold transition">
            <InstagramLogo size={22} weight="duotone" /> Ver Mais no Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function Depoimentos() {
  const reviews = [
    { name: 'Lucas M.', text: 'Trabalho incrivel! Vinsant entendeu exatamente o que eu queria e superou todas as expectativas. Recomendo demais!', stars: 5 },
    { name: 'Carolina S.', text: 'Melhor tatuador de Floripa! Ambiente super limpo, profissional e o resultado ficou perfeito. Ja agendei a proxima.', stars: 5 },
    { name: 'Rafael T.', text: 'Fiz minha primeira tattoo com o Vinsant e foi uma experiencia incrivel. Paciente, atencioso e artista de verdade.', stars: 5 },
  ]
  return (
    <section id="depoimentos" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-red-500 uppercase tracking-widest text-sm font-semibold">Depoimentos</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-['Bebas_Neue'] text-white tracking-wider mt-3">O QUE DIZEM NOSSOS CLIENTES</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
          {reviews.map(r => (
            <motion.div key={r.name} variants={fadeUp} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(r.stars)].map((_, i) => <Star key={i} size={18} weight="fill" className="text-yellow-500" />)}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">"{r.text}"</p>
              <p className="text-white font-semibold">{r.name}</p>
              <p className="text-gray-500 text-sm">Google Reviews</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black via-red-950/20 to-black">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto text-center">
        <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-['Bebas_Neue'] text-white tracking-wider mb-6">PRONTO PARA SUA PROXIMA TATTOO?</motion.h2>
        <motion.p variants={fadeUp} className="text-gray-400 text-lg mb-10">
          Agende sua sessao e transforme sua ideia em arte. Consulta gratuita para discutir seu projeto.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`https://wa.me/${WHATSAPP}?text=Ola Vinsant! Quero agendar uma consulta para discutir meu projeto de tattoo.`} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105 shadow-lg shadow-red-700/30">
            <WhatsappLogo size={24} weight="duotone" /> Agendar pelo WhatsApp
          </a>
          <a href={`tel:${PHONE.replace(/\D/g,'')}`} className="flex items-center justify-center gap-2 border-2 border-gray-600 hover:border-red-500 text-white px-8 py-4 rounded-lg text-lg transition hover:text-red-400">
            <CalendarBlank size={24} weight="duotone" /> Ligar Agora
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

function Contato() {
  return (
    <section id="contato" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">
          <motion.span variants={fadeUp} className="text-red-500 uppercase tracking-widest text-sm font-semibold">Contato</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-['Bebas_Neue'] text-white tracking-wider">VENHA NOS VISITAR</motion.h2>
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin size={28} weight="duotone" className="text-red-500 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold">Endereco</h4>
                <p className="text-gray-400">{ADDRESS}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <WhatsappLogo size={28} weight="duotone" className="text-red-500 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold">WhatsApp</h4>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener" className="text-gray-400 hover:text-red-400 transition">{PHONE}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <InstagramLogo size={28} weight="duotone" className="text-red-500 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold">Instagram</h4>
                <a href={INSTAGRAM} target="_blank" rel="noopener" className="text-gray-400 hover:text-red-400 transition">@vinsant_lopez</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock size={28} weight="duotone" className="text-red-500 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold">Horario</h4>
                <p className="text-gray-400">Seg - Sab: 10h as 20h</p>
                <p className="text-gray-400">Mediante agendamento</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
          <img src="./images/artist-working.jpg" alt="Vinsant Lopez trabalhando" className="rounded-2xl w-full aspect-square object-cover shadow-2xl" />
          <div className="absolute -bottom-6 -left-6 bg-red-700 text-white p-6 rounded-2xl shadow-xl">
            <p className="font-['Bebas_Neue'] text-4xl">232+</p>
            <p className="text-sm">avaliacoes 5 estrelas</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-['Bebas_Neue'] text-2xl tracking-widest text-white">VINSANT LOPEZ TATTOO</p>
        <p className="text-gray-500 text-sm">&copy; 2026 Vinsant Lopez Tattoo. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href={INSTAGRAM} target="_blank" rel="noopener" className="text-gray-500 hover:text-red-400 transition"><InstagramLogo size={24} weight="duotone" /></a>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener" className="text-gray-500 hover:text-red-400 transition"><WhatsappLogo size={24} weight="duotone" /></a>
        </div>
      </div>
    </footer>
  )
}

function ScrollTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const h = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  if (!show) return null
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-50 bg-red-700 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition">
      <ArrowUp size={24} />
    </button>
  )
}

function WhatsAppFloat() {
  return (
    <a href={`https://wa.me/${WHATSAPP}?text=Ola! Gostaria de agendar uma tattoo.`} target="_blank" rel="noopener" className="fixed bottom-6 left-6 z-50 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-xl transition transform hover:scale-110">
      <WhatsappLogo size={28} weight="fill" />
    </a>
  )
}

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Sobre />
      <Estilos />
      <Portfolio />
      <Depoimentos />
      <CTA />
      <Contato />
      <Footer />
      <ScrollTop />
      <WhatsAppFloat />
    </div>
  )
}
