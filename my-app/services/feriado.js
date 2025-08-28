import * as config from './config.js';

export const getDDD = async (ano) => {
    // valida ano
    const year = String(ano).trim();
    if (!/^[0-9]{4}$/.test(year)) {
        throw new Error('Ano inválido. Use formato YYYY, ex: 2025');
    }

    const url = `${config.url_api()}/feriados/v1/${year}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching ano data:', error);
        throw error;
    }
}