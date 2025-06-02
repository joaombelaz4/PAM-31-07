import * as config from '../config.js';

export const getDDD = async (ddd) => {
    const url = `${config.url_api()}/ddd/v1/${ddd}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching DDD data:', error);
        throw error;
    }
}