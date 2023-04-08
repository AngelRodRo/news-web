import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { 
  useQuery,
} from '@tanstack/react-query'

import {
  useFormik
} from 'formik';

import SearchInput from '@/components/SearchInput'
import SearchButton from '@/components/SearchButton'

import NewsViewer from './NewsViewer';
import ImageModal from './ImageModal';
import styles from './styles.module.css';

import { searchNews } from '@/api'

const News: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [pageSize] = useState(12);
  const [query, setQuery] = useState('');

  const formik = useFormik({
    initialValues: {
      query: '',
    },
    onSubmit: (values) => {
      setPageNumber(1);
      setQuery(values.query);
    },
  });

  const { status, fetchStatus, error, refetch, data } = useQuery({ 
    queryKey: ['news', query, pageNumber],
    queryFn: () => searchNews(query, pageNumber, pageSize),
    enabled: pageNumber >= 1,
    cacheTime: 300,
    refetchOnWindowFocus: false,
    refetchOnMount: false
  });
  
  const news = data?.news;
  const totalCount = data?.totalCount;

  useEffect(() => {
    document.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        refetch();
      }
    });
    
    return () => {
      document.removeEventListener('keyup', () => {});
    }
  }, []);

  return (
    <div data-testid="app" className="App">
      <Container style={{ padding: 20 }}>
        <h1>News search</h1>
        <form onSubmit={formik.handleSubmit}>
          <Row style={{ marginTop: 20 }}>
            <Col xl='10' className="d-grid">
              <SearchInput 
                name="query" 
                id="query" 
                value={formik.values.query}
                onChange={formik.handleChange}
              />
            </Col>
            <Col className="d-grid gap-2">
              <SearchButton className={styles.searchButton} disabled={Boolean(!formik.values.query)} />
            </Col>
          </Row>
        </form>
        <div 
          className={styles.newsViewer}
        >
          <NewsViewer 
            status={status}
            fetchStatus={fetchStatus}
            error={error}
            news={news}
            totalCount={totalCount || 0}
            pageNumber={pageNumber}
            pageSize={pageSize}
            onPageChange={(number) => setPageNumber(number)}
          />
        </div>
      </Container>
      <ImageModal />
    </div>
  )
}

export default News