
export type Category = 
  | 'Música' 
  | 'Farándula' 
  | 'Noticias Rápidas' 
  | 'Entretenimiento' 
  | 'Opinión' 
  | 'Nacional' 
  | 'Internacional' 
  | 'Sucre' 
  | 'Viral';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: Category;
  author: string;
  date: string;
  videoUrl?: string;
}

export interface VideoContent {
  id: string;
  title: string;
  platform: 'TikTok' | 'Instagram' | 'YouTube';
  thumbnail: string;
  url: string;
}

export interface ChatMessage {
  id: string;
  user: string;
  text: string;
  timestamp: string;
  isStaff?: boolean;
}

export interface CommunityPost {
  id: string;
  user: string;
  avatar: string;
  content: string;
  likes: number;
  time: string;
  image?: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  timestamp: string;
  permalink: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  likesCount: number;
}
