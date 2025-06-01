import { Organization, WebSite, WithContext } from "schema-dts";

export default function JsonLd() {
    const organizationData: WithContext<Organization> = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "BelloInfo",
        url: "https://belloinfo.com.br",
        logo: "https://belloinfo.com.br/icons/icon-512x512.png",
        sameAs: [
            "https://github.com/beliciobcardoso",
            "https://twitter.com/beliciobcardoso",
            "https://www.linkedin.com/company/beliciobcardoso"
        ],
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+55-XX-XXXXX-XXXX",
            contactType: "customer service",
            availableLanguage: "Portuguese"
        }
    };

    const websiteData: WithContext<WebSite> = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "BelloInfo - Soluções em TI",
        description: "Serviços de tecnologia da informação, desenvolvimento web e suporte técnico para empresas e pessoas físicas.",
        url: "https://belloinfo.com.br",
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: "https://belloinfo.com.br/busca?q={search_term_string}"
            }
            // Propriedade query-input removida porque não é suportada pelo tipo SearchActionLeaf
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
            />
        </>
    );
}
