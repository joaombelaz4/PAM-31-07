import * as config from './config.js';

export const getFipe = async (codigoFipe) => {
    const code = String(codigoFipe || '').trim();
    if (!code) throw new Error('Código FIPE inválido');

    const url = `${config.url_api()}/fipe/preco/v1/${code}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 404) throw new Error('Código FIPE não encontrado');
            const text = await response.text().catch(() => '');
            throw new Error(`HTTP error ${response.status}: ${text}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching fipe data:', error);
        throw error;
    }
}

// compatibilidade: alias para manter chamadas existentes que usam getDDD
export const getDDD = getFipe;