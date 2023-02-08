import { render, screen } from '@testing-library/react'
import Layout from '../components/Layout';
import '@testing-library/jest-dom'

describe('Layout', () => {
  it('Renders a header', () => {
    render(<Layout />);

    // Grab the Header component.
    const header = screen.getByTestId('woc-header');
    const brandTitle = screen.getByTestId('woc-brand-title');

    // Assertion 1: Header component should be rendered in the document when Homepage is called.
    expect(header).toBeInTheDocument();
    
    // Assertion 2: Header component is visible to user.
    expect(header).toBeVisible();

    // Assertion 3: Header should display brand-title of "Where in the world?", case-insensitive match.
    expect(brandTitle).toHaveTextContent(/Where in the world?/i);
  })
})