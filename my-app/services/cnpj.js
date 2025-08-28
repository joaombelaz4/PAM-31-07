import * as config from './config.js';

export const getDDD = async (cnpj) => {
    // Remove qualquer caractere não numérico
    const cleanCnpj = cnpj.replace(/\D/g, '');
    
    // Verifica se tem 14 dígitos
    if (cleanCnpj.length !== 14) {
        throw new Error('CNPJ deve ter 14 dígitos');
    }

    const url = `${config.url_api()}/cnpj/v1/${cleanCnpj}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    };
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('CNPJ não encontrado');
            }
            throw new Error(`Erro ao buscar CNPJ: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching CNPJ data:', error);
        throw error;
    }
}