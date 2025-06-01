import { Organization, WebSite, WithContext } from "schema-dts";

export default function JsonLd() {
    const organizationData: WithContext<Organization> = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "BelloInfo",
        url: "https://belloinfo.com.br",
        logo: "https://belloinfo.com.br/logo.png",
        sameAs: [
            "https://www.facebook.com/beliciobcardoso",
            "https://twitter.com/beliciobcardoso",
            "https://www.linkedin.com/company/beliciobcardoso",
            "https://www.instagram.com/beliciobcardoso" // Corrected Instagram URL
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
        name: "BelloInfo",
        url: "https://belloinfo.com.br",
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: "https://belloinfo.com.br/busca?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
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
