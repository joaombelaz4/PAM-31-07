import * as config from './config.js';

export const getDDD = async (cnpj) => {
    const url = `${config.url_api()}/cnpj/v1/${cnpj}`;
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
        console.error('Error fetching cnpj data:', error);
        throw error;
    }
}