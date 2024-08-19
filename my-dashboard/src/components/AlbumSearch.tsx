import React, { useState } from 'react';
import { useQuery } from 'urql';
import { GET_USER_ALBUMS } from '../graphql/queries';

const AlbumSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const [result] = useQuery({
    query: GET_USER_ALBUMS,
    variables: { userId: '1' },
  });

  const { data, fetching, error } = result;

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredAlbums = data.user.albums.data.filter((album: any) =>
    album.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search albums..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>
        {filteredAlbums.map((album: any) => (
          <div key={album.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{album.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumSearch;