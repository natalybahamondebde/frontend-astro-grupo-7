const strapiUrl = import.meta.env.STRAPI_API_URL || 'https://backend-restaurant-tz76.onrender.com/api';

export const STRAPI_BASE_URL = strapiUrl.replace('/api', '');

export const STRAPI_URL = strapiUrl;

export const fetchFromAPI = async (slag: string) => {
    try {
        const response = await fetch(`${STRAPI_URL}/${slag}?populate=*`);
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.error(error);
    }
};