import { render, screen, fireEvent } from '@testing-library/react';
import Home from './pages/Home';

test('Render halaman home dengan benar', () => 
{
    render(<Home />);

    // mencari text tertentu
    const title = screen.getByText(/why do we need test ?/i);
    expect(title).toBeInTheDocument();

    // mencari button tertentu
    // pastikan button kita memiliki rle="button"
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent('Users List');

    // klik tombol Users List
    fireEvent.click(btn)
    // mencari tombol tertentu
    // pada halaman yang muncul karena klik tombol
    // pastikan button kita memiliki role="button"
});