import React from "react";
import { Form } from "react-bootstrap";

interface Props extends React.HTMLProps<HTMLInputElement> {
  value?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<Props> = ({ id, value, name, onChange }) => {
  return (
    <Form.Control
      id={id}
      name={name}
      value={value}
      data-testid="search-input"
      type="text"
      placeholder="Search"
      onChange={onChange}
    />
  );
};

export default SearchInput;