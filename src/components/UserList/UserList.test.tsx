import { render, screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { describe, expect, it } from 'vitest';
import { mockServer } from '../../test-setup/mockServer';
import UserList from './UserList';

describe('PostList component', () => {
  it('renders the list of users', async () => {
    mockServer.use(
      http.get('https://jsonplaceholder.typicode.com/users', () => {
        return HttpResponse.json([
          { id: 1, name: 'Leanne Graham' },
          { id: 2, name: 'Ervin Howell' },
          { id: 3, name: 'Clementine Bauch' },
        ]);
      })
    );

    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
      expect(screen.getByText('Ervin Howell')).toBeInTheDocument();
      expect(screen.getByText('Clementine Bauch')).toBeInTheDocument();
    });

  });
});
