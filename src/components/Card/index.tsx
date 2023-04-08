import React from 'react'
import { Card } from 'react-bootstrap'

import styles from './styles.module.css'

interface Props extends News {
  onThumbnailClick?: (thumbnail: string) => void;
}

const truncateWithEllipsis = (text: string) => {
  const words = text.split(' ');
  if (words.length > 20) {
    return words.slice(0, 20).join(' ') + ' ...';
  }
  return text;
}

const NewsCard: React.FC<Props> = ({ 
  title, 
  body: description, 
  imageThumbnail,
  imageUrl,
  url, 
  onThumbnailClick = () => {}
}) => {
  const truncatedDescription: string = truncateWithEllipsis(description);

  return (
    <Card className={styles.container} data-testid="card">
      <Card.Body>
        <Card.Title className={styles.title}>{title}</Card.Title>
        {
          imageThumbnail && (
            <img 
              onClick={() => onThumbnailClick(imageUrl)} 
              className={styles.image} 
              src={imageThumbnail} 
              alt="News Image" 
            />
          )
        }
        <Card.Text data-testid="card-description" className={styles.description}>{truncatedDescription}</Card.Text>
        <Card.Link className={styles.readMore} href={url} target='_blank'>Read more ...</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default NewsCard