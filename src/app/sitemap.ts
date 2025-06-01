import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // URL base do site
  const baseUrl = "https://belloinfo.com.br";

  // Data atual para lastModified
  const currentDate = new Date();

  return [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    // Adicione outras páginas do seu site conforme necessário
    // Por exemplo:
    {
      url: `${baseUrl}/servicos`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
