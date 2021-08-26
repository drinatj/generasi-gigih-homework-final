import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchForm from './components/SearchForm';

test('loads and display greeting', async () => {
    render(<SearchForm/>)

    expect(screen.getByTestId('search_input')).toBeInTheDocument()
})