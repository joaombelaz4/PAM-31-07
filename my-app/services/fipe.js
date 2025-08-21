import * as config from './config.js';

export const getFipe = async (codigoFipe) => {
    const url = `${config.url_api()}/fipe/preco/v1/${codigoFipe}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    };
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            return;
        }
        
    return await response.json();
    } catch (error) {
        console.error('Error fetching fipe data:', error);
        throw error;
    }
}

// compatibilidade: alias para manter chamadas existentes que usam getDDD
export const getDDD = getFipe;