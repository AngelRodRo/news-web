import React from 'react'
import NewsCard from '@/components/Card'

import styles from './styles.module.css'

import { useNews } from '@/context';

import { News } from '@/types.ds';

interface Props {
  news: News[];
}

const NewsList: React.FC<Props> = ({ news }) => {
  const { setImageUrl: setNewsImageUrl, setShowImageModal } = useNews();

  const handleThumbnailClick = (imageUrl: string) => {
    setShowImageModal(true);
    setNewsImageUrl(imageUrl);
  };

  return (
    <div className={styles.container} data-testid="news-list">
      <div className={styles.list}>
        {
          news.map((newsItem: News) => 
            <NewsCard 
              key={newsItem.id} 
              {...newsItem} 
              onThumbnailClick={handleThumbnailClick}
            />
          )
        }
      </div>
    </div>
  )
}

export default NewsList;

