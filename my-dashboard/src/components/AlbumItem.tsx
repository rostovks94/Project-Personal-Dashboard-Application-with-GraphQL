import { useQuery } from 'urql';
import { GET_USER_ALBUMS } from '../graphql/queries';

const AlbumItem = () => {
  const [result] = useQuery({
    query: GET_USER_ALBUMS,
    variables: { userId: '1' }, 
  });

  const { data, fetching, error } = result;

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.user.albums.data.map((album: any) => (
        <div key={album.id} className="card">
          <div className="card-body">
            <h5 className="card-title">{album.title}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlbumItem;