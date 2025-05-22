// src/utils/contentful.js
import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const fetchProductsDirectly = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'laqueseria',
      order: '-sys.updatedAt',
    });

    return {
      products: response.items.map(item => ({
        name: item.fields.title,
        description: item.fields.description,
        price: item.fields.price,
        image: item.fields.imageUrl?.fields?.file?.url 
               ? `https:${item.fields.imageUrl.fields.file.url}` 
               : '',
        badge: item.fields.badgeLabel,
        categoryLabel: item.fields.categoryLabel,
        buyLink: item.fields.buyLink,
        updatedAt: item.sys.updatedAt
      })),
      lastUpdated: response.items[0]?.sys.updatedAt
    };
  } catch (error) {
    console.error('Error fetching from Contentful:', error);
    return { products: [], lastUpdated: null };
  }
};