import { siteConfig } from "@/config/site";

export async function GET() {
  const baseUrl = siteConfig.url;

  // Gerar a data atual para lastBuildDate
  const now = new Date();
  const lastBuildDate = now.toUTCString();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>BelloInfo - Soluções em TI</title>
    <link>${baseUrl}</link>
    <description>Serviços de tecnologia da informação, desenvolvimento web e suporte técnico para empresas e pessoas físicas.</description>
    <language>pt-br</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <item>
      <title>BelloInfo - Soluções em TI</title>
      <link>${baseUrl}</link>
      <description>Serviços de tecnologia da informação, desenvolvimento web e suporte técnico para empresas e pessoas físicas.</description>
      <pubDate>${lastBuildDate}</pubDate>
      <guid>${baseUrl}</guid>
    </item>
    <!-- Mais itens serão adicionados conforme o conteúdo do site for expandido -->
    <!-- 
    <item>
      <title>Desenvolvimento de Sites Modernos</title>
      <link>${baseUrl}/blog/desenvolvimento-sites-modernos</link>
      <description>Conheça as tecnologias mais modernas para desenvolvimento de sites e aplicações web em 2025.</description>
      <pubDate>${lastBuildDate}</pubDate>
      <guid>${baseUrl}/blog/desenvolvimento-sites-modernos</guid>
    </item>
    -->
    
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
