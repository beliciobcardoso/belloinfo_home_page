"use client"
import { useReportWebVitals } from 'next/web-vitals';
import { reportWebVitals } from '@/lib/vitals';

export function WebVitals() {
    useReportWebVitals((metric) => {
        // Envia as métricas para nossa função de tratamento
        reportWebVitals(metric);

        // Exemplo de envio para o Google Analytics
        const analyticsId = process.env.NEXT_PUBLIC_GA_ID;
        if (!analyticsId) return;

        // Assume que o objeto `window.gtag` foi configurado no script de Google Analytics
        const { name, delta, id, value } = metric;
        window.gtag?.('event', name, {
            event_category: 'Web Vitals',
            // Google Analytics exige que o valor seja um inteiro
            value: Math.round(name === 'CLS' ? delta * 1000 : delta),
            // Usa um rótulo não dimensionável para que esses eventos não sejam agregados
            event_label: id,
            // Adiciona parâmetros personalizados que serão empacotados no campo "event_params"
            metric_name: name,
            metric_value: value,
            metric_delta: delta,
            metric_rating: getRating(name, value),
            non_interaction: true,
        });
    });

    return null;
}

// Atualizado de acordo com Web Vitals de maio de 2023
function getRating(metric: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    switch (metric) {
        case 'CLS':
            return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
        case 'FID':
            return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
        case 'LCP':
            return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
        case 'TTFB':
            return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor';
        case 'INP':
            return value <= 200 ? 'good' : value <= 500 ? 'needs-improvement' : 'poor';
        default:
            return 'good';
    }
}
