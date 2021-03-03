import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DetailedPost from './DetailedPost';

describe('<DetailedPost />', () => {
  test('it should mount', () => {
    render(<DetailedPost />);
    
    const detailedPost = screen.getByTestId('DetailedPost');

    expect(detailedPost).toBeInTheDocument();
  });
});