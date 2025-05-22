import { client } from '../../utils/contentful';

export async function get({ url }) {
  try {
    // Forzar actualización ignorando caché
    const response = await client.getEntries({
      content_type: 'laqueseria',
      order: '-sys.updatedAt',
      limit: 1000,
      skip: 0,
      // Evitar caché
      headers: {
        'Cache-Control': 'no-cache'
      }
    });

    const products = response.items.map(item => ({
      // ...mapeo de productos igual que antes
    }));

    return new Response(JSON.stringify({
      products,
      lastUpdated: response.items[0]?.sys.updatedAt,
      timestamp: Date.now() // Añadir timestamp actual
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      products: [],
      lastUpdated: null,
      hasProducts: false,
      error: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}