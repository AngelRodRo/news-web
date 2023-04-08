import React from 'react';
import { Button } from 'react-bootstrap';

interface Props {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const SearchButton: React.FC<Props> = ({ className, disabled, onClick }) => {
  return (
    <Button className={className} type='submit' size="lg"  data-testid="search-button" disabled={disabled} onClick={onClick}>
      Search
    </Button>
  );
};

export default SearchButton;