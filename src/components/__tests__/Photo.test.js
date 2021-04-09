import {
  render, screen,
} from '@testing-library/react';
import Photo from '../Photo';

describe('Photo', () => {
  test('renders Photo component', () => {
    const mockPhoto = {
      id: 'any',
      alt_description: 'any',
      urls: {
        regular: 'any',
      },
    };

    render(<Photo photo={mockPhoto} />);

    screen.debug();
  });
});
