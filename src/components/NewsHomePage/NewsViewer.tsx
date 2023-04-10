import React from "react";
import { 
  FetchStatus,
} from '@tanstack/react-query'

import NewsList from '@/components/NewsList'

import { pagination } from '@/utils';
import { Spinner, Pagination } from 'react-bootstrap'
import { News } from '@/types.ds';

interface NewsViewProps{
  news: News[] | undefined;
  fetchStatus: FetchStatus;
  status:  "error" | "success" | "loading";
  error: unknown;
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (pageNumber: number) => void;
}

const NewsViewer: React.FC<NewsViewProps> = ({ 
  news,
  fetchStatus, 
  status,
  error,
  pageNumber,
  pageSize,
  totalCount,
  onPageChange,
}) => {
  let items: React.ReactNode[];
  let nroPages = 1;

  if (totalCount > 0) {
    nroPages = Math.ceil(totalCount / pageSize);
    items = pagination(pageNumber, nroPages).map((item: string | number) => {
      if (item === '...') {
        return <Pagination.Ellipsis key={item} />
      } else {
        return (
          <Pagination.Item 
            key={item} 
            active={pageNumber === item}
            onClick={() => onPageChange(Number(item))}
          >
            {item}
          </Pagination.Item>
        )
      }
    })
  }

  const PaginationView: React.FC = () => (
    <Pagination style={{ marginTop: 20 }}>
      <Pagination.First onClick={() => onPageChange(1)} />
      <Pagination.Prev disabled={pageNumber == 1} onClick={() => onPageChange(pageNumber - 1)} />
      {items}
      <Pagination.Next disabled={pageNumber === nroPages} onClick={() => onPageChange(pageNumber + 1)} />
      <Pagination.Last onClick={() => onPageChange(nroPages)} />
    </Pagination>
  )

  if (fetchStatus === 'fetching') {
    return <Spinner animation="border" />
  }

  if (status === 'success') {
    return (
      <>
        {
          news && news.length > 0 ? (
            <>
              <NewsList news={news} /> 
              <PaginationView />
            </>
          ) : <div>No news found</div>
        }
      </>
    )
  }

  if (status === 'error') {
    return <div>Service is not available</div>
  }

  return null;
}

export default NewsViewer;