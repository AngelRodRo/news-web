export type News = {
  id: string;
  title: string;
  description?: string;
  body: string;
  imageUrl: string;
  imageThumbnail?: string;
  url: string;
}

export type Image = {
  url: string;
  thumbnail: string;
}
