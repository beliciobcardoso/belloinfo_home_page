/**
 * Arquivo para configurar o envio de métricas Core Web Vitals para sua ferramenta de analytics
 */

export type CLSMetric = {
  id: string;
  name: "CLS";
  value: number;
  delta: number;
  entries: Array<{
    hadRecentInput: boolean;
    lastInputTime: number;
    value: number;
  }>;
};

export type LCPMetric = {
  id: string;
  name: "LCP";
  value: number;
  delta: number;
  entries: Array<{
    element: Element;
    startTime: number;
    loadTime: number;
    renderTime: number;
    size: number;
    url: string;
  }>;
};

export type FIDMetric = {
  id: string;
  name: "FID";
  value: number;
  delta: number;
  entries: Array<{
    duration: number;
    processingStart: number;
    processingEnd: number;
    startTime: number;
  }>;
};

export type INPMetric = {
  id: string;
  name: "INP";
  value: number;
  delta: number;
  entries: Array<{
    duration: number;
    processingStart: number;
    processingEnd: number;
    startTime: number;
  }>;
};

export type TTFBMetric = {
  id: string;
  name: "TTFB";
  value: number;
  delta: number;
  entries: Array<{
    activationStart: number;
    domComplete: number;
    domContentLoadedEventEnd: number;
    domContentLoadedEventStart: number;
    domInteractive: number;
    fetchStart: number;
    loadEventEnd: number;
    loadEventStart: number;
    requestStart: number;
    responseEnd: number;
    responseStart: number;
  }>;
};

export type NextWebVitalsMetric =
  | CLSMetric
  | LCPMetric
  | FIDMetric
  | INPMetric
  | TTFBMetric
  | {
      name: string;
      id: string;
      value: number;
      delta: number;
      entries: Array<unknown>;
    };

/**
 * Função que é chamada pelo Next.js quando as métricas de Web Vitals estão disponíveis
 * Isso pode ser configurado para enviar dados para qualquer serviço de analytics
 *
 * @param metric Métrica de Web Vitals
 */
export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log("Web Vitals:", metric);

  // Exemplo para enviar para um endpoint personalizado
  const apiEndpoint = "/api/collect-metrics";

  // Descomente para enviar para seu próprio endpoint
  /*
  if (process.env.NODE_ENV === 'production') {
    const body = JSON.stringify({
      dsn: 'https://belloinfo.com.br', // Data Source Name
      id: metric.id,
      page: window.location.pathname,
      href: window.location.href,
      event_name: metric.name,
      value: metric.value.toString(),
      speed: getConnectionSpeed(),
    });

    // Use `navigator.sendBeacon()` quando disponível, caso contrário use `fetch()`
    if (navigator.sendBeacon) {
      navigator.sendBeacon(apiEndpoint, body);
    } else {
      fetch(apiEndpoint, {
        body,
        method: 'POST',
        keepalive: true,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  */
}

// Função auxiliar para obter a velocidade de conexão
function getConnectionSpeed(): string {
  if (
    typeof navigator !== "undefined" &&
    "connection" in navigator &&
    navigator.connection &&
    "effectiveType" in navigator.connection
  ) {
    return (navigator.connection as any).effectiveType;
  }

  return "";
}
