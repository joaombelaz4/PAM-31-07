export const getMunicipios = async (siglaUF) => {
  const url = `https://brasilapi.com.br/api/ibge/municipios/v1/${siglaUF}?providers=dados-abertos-br,gov,wikipedia`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Erro ao buscar municípios');
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar municípios:', error);
    throw error;
  }
};