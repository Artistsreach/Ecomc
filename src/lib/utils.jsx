
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const PEXELS_API_KEY = 'YOUR_PEXELS_API_KEY';
export const PEXELS_API_URL = 'https://api.pexels.com/v1';

export const fetchPexelsImages = async (query, perPage = 1, orientation = 'landscape') => {
  if (PEXELS_API_KEY === 'YOUR_PEXELS_API_KEY') {
    console.warn('Pexels API key is not set. Using placeholder images.');
    const placeholderUrl = `https://via.placeholder.com/800x600.png?text=${encodeURIComponent(query)}`;
    return Array(perPage).fill({ 
      src: { large: placeholderUrl, medium: placeholderUrl, original: placeholderUrl }, 
      photographer: 'Placeholder' 
    });
  }

  const url = `${PEXELS_API_URL}/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=${orientation}`;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Pexels API error:', errorData);
      throw new Error(`Pexels API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.photos.map(photo => ({
      src: photo.src,
      photographer: photo.photographer,
      alt: photo.alt || `Photo by ${photo.photographer} of ${query}`
    }));
  } catch (error) {
    console.error('Error fetching Pexels images:', error);
    const placeholderUrl = `https://via.placeholder.com/800x600.png?text=${encodeURIComponent(query)}`;
     return Array(perPage).fill({ 
      src: { large: placeholderUrl, medium: placeholderUrl, original: placeholderUrl }, 
      photographer: 'Placeholder Error' 
    });
  }
};
