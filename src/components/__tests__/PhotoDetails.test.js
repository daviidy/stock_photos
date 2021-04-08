import {
  render, screen,
} from '@testing-library/react';
import PhotoDetails from '../PhotoDetails';

describe('Photo', () => {
  test('renders Photo component', () => {
    const mockPhoto = {
      id: 'any',
      alt_description: 'any',
      urls: {
        regular: 'any',
      },
      user: {
        name: 'any',
      },
    };

    render(<PhotoDetails photo={mockPhoto} />);

    screen.debug();
  });
});
