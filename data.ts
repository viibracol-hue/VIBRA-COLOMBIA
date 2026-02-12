
import { Article, VideoContent, Category, InstagramPost } from './types';

export const CATEGORIES: Category[] = [
  'Música', 'Farándula', 'Noticias Rápidas', 'Entretenimiento', 
  'Opinión', 'Nacional', 'Internacional', 'Sucre', 'Viral'
];

export const MOCK_INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig1',
    imageUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800',
    caption: '¡Noche de concierto! La verdad también se hace viral en los escenarios más grandes de Colombia. 🔥 #VibraEnVivo',
    timestamp: 'Hace 1 hora',
    permalink: 'https://instagram.com',
    mediaType: 'IMAGE',
    likesCount: 1540
  },
  {
    id: 'ig2',
    imageUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800',
    caption: 'Silvia Rodriguez hoy en entrevista exclusiva. Nos contó todo lo que viene para VIBRA este 2025. 🎙️✨',
    timestamp: 'Hace 4 horas',
    permalink: 'https://instagram.com',
    mediaType: 'CAROUSEL_ALBUM',
    likesCount: 2890
  },
  {
    id: 'ig3',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
    caption: 'Tendencia: ¿Por qué todos están hablando de este nuevo ritmo? Aquí te lo explicamos. #Viral #Musica',
    timestamp: 'Hace 6 horas',
    permalink: 'https://instagram.com',
    mediaType: 'IMAGE',
    likesCount: 1200
  },
  {
    id: 'ig4',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800',
    caption: 'Detrás de cámaras en VIBRA Studio. ¡Estamos al aire! 📻🔴 #LaVerdadViral',
    timestamp: 'Hace 12 horas',
    permalink: 'https://instagram.com',
    mediaType: 'VIDEO',
    likesCount: 950
  }
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'El regreso de Shakira: ¿Viene gira por Colombia?',
    excerpt: 'Fuentes cercanas aseguran que la barranquillera está preparando el anuncio más grande de su carrera...',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://picsum.photos/seed/shakira/800/600',
    category: 'Música',
    author: 'Redacción VIBRA',
    date: 'Hace 2 horas'
  },
  {
    id: '2',
    title: 'Tendencias TikTok: El baile que todos están haciendo en Medellín',
    excerpt: 'No es solo un trend, es un movimiento cultural que está naciendo en las calles paisas.',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    image: 'https://picsum.photos/seed/tiktok/800/600',
    category: 'Viral',
    author: 'Silvia Rodriguez',
    date: 'Hace 5 horas'
  },
  {
    id: '3',
    title: 'Crisis en la farándula nacional: La separación del año',
    excerpt: 'Exclusiva: Conocemos los detalles detrás de la ruptura que tiene a todos hablando.',
    content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
    image: 'https://picsum.photos/seed/drama/800/600',
    category: 'Farándula',
    author: 'Silvia Rodriguez',
    date: 'Ayer'
  }
];

export const MOCK_VIDEOS: VideoContent[] = [
  {
    id: 'v1',
    title: 'Backstage en el concierto de Karol G',
    platform: 'TikTok',
    thumbnail: 'https://picsum.photos/seed/vg1/400/700',
    url: '#'
  },
  {
    id: 'v2',
    title: 'Entrevista exclusiva con la nueva estrella del Reggaetón',
    platform: 'Instagram',
    thumbnail: 'https://picsum.photos/seed/vg2/400/700',
    url: '#'
  },
  {
    id: 'v3',
    title: '¿Qué piensan los jóvenes colombianos de la IA?',
    platform: 'YouTube',
    thumbnail: 'https://picsum.photos/seed/vg3/400/700',
    url: '#'
  }
];
