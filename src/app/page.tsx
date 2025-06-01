import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

// Metadados específicos para a página inicial
export const metadata: Metadata = {
  title: 'BelloInfo - Soluções em Tecnologia da Informação',
  description: 'Serviços de TI de alta qualidade, incluindo desenvolvimento web, suporte técnico e consultoria para empresas e pessoas físicas.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: 'BelloInfo - Tecnologia para o seu Negócio',
    description: 'Soluções de TI personalizadas para impulsionar seu negócio com tecnologias modernas e suporte especializado.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'BelloInfo - Tecnologia da Informação',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BelloInfo - Tecnologia para o seu Negócio',
    description: 'Soluções de TI personalizadas para impulsionar seu negócio com tecnologias modernas e suporte especializado.',
    images: ['/opengraph-image.png'],
  }
};

import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center p-8 md:p-24 overflow-x-hidden">
        {/* Hero Section */}
        <section className="w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Soluções de <span className="text-primary">Tecnologia</span> para seu Negócio
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Desenvolvemos e implementamos soluções tecnológicas que impulsionam o crescimento do seu negócio.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild>
                <a href="#servicos" aria-label="Ver nossos serviços">Nossos Serviços</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contato" aria-label="Entre em contato">Fale Conosco</a>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative h-[300px] md:h-[400px] w-full">
            <Image
              src="/images/hero-image.svg"
              alt="BelloInfo Tecnologia - Soluções em Tecnologia da Informação"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="w-full max-w-6xl mx-auto py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Serviço 1 */}
            <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Image src="/window.svg" alt="Desenvolvimento" width={24} height={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Desenvolvimento Web</h3>
              <p className="text-muted-foreground">
                Criamos sites e aplicações web modernas, responsivas e otimizadas para SEO.
              </p>
            </div>

            {/* Serviço 2 */}
            <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Image src="/globe.svg" alt="Hospedagem" width={24} height={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hospedagem e Domínios</h3>
              <p className="text-muted-foreground">
                Oferecemos soluções completas de hospedagem e registro de domínios com suporte técnico.
              </p>
            </div>

            {/* Serviço 3 */}
            <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Image src="/file.svg" alt="Suporte" width={24} height={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Suporte Técnico</h3>
              <p className="text-muted-foreground">
                Suporte especializado para resolver problemas técnicos e manter seus sistemas funcionando.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-primary/5 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Pronto para transformar seu negócio?</h2>
            <p className="text-lg mb-8">Entre em contato conosco hoje para uma consultoria gratuita.</p>
            <Button size="lg" asChild>
              <a href="#contato" aria-label="Entre em contato conosco">Entrar em Contato</a>
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="w-full max-w-6xl mx-auto py-16 px-4 md:px-0 scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
              <div className="space-y-4 text-lg">
                <p className="flex items-center gap-2">
                  <span className="text-primary">📞</span> (XX) XXXXX-XXXX
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-primary">✉️</span> contato@belloinfo.com.br
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-primary">📍</span> São Paulo, SP - Brasil
                </p>
                <div className="flex gap-4 mt-6">
                  <a href="https://facebook.com/beliciobcardoso" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <div className="h-10 w-10 rounded-full bg-card border flex items-center justify-center">FB</div>
                  </a>
                  <a href="https://twitter.com/beliciobcardoso" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <div className="h-10 w-10 rounded-full bg-card border flex items-center justify-center">TW</div>
                  </a>
                  <a href="https://instagram.com/beliciobcardoso" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <div className="h-10 w-10 rounded-full bg-card border flex items-center justify-center">IG</div>
                  </a>
                  <a href="https://linkedin.com/company/beliciobcardoso" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <div className="h-10 w-10 rounded-full bg-card border flex items-center justify-center">LI</div>
                  </a>
                </div>
              </div>
            </div>
            {/* Contact Form Placeholder - em uma situação real seria implementado com formulário funcional */}
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Envie uma Mensagem</h3>
              <p className="text-muted-foreground mb-4">
                Preencha o formulário abaixo e entraremos em contato em breve.
              </p>
              <div className="space-y-4">
                <div className="h-10 w-full bg-muted rounded-md"></div>
                <div className="h-10 w-full bg-muted rounded-md"></div>
                <div className="h-32 w-full bg-muted rounded-md"></div>
                <Button className="w-full">Enviar Mensagem</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer with Schema.org Structured Data */}
        <footer className="w-full bg-card text-card-foreground py-12 mt-8">
          <div className="max-w-6xl mx-auto px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">BelloInfo</h3>
                <p className="text-muted-foreground">Soluções em Tecnologia da Informação para seu negócio desde 2021.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Serviços</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-primary">Desenvolvimento Web</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary">Hospedagem e Domínios</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary">Suporte Técnico</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary">Consultoria em TI</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Links Úteis</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-primary">Sobre Nós</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary">Blog</a></li>
                  <li><a href="#contato" className="text-muted-foreground hover:text-primary">Contato</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary">Política de Privacidade</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contato</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>contato@belloinfo.com.br</li>
                  <li>(XX) XXXXX-XXXX</li>
                  <li>São Paulo, SP - Brasil</li>
                </ul>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
              <p>© {new Date().getFullYear()} BelloInfo. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
