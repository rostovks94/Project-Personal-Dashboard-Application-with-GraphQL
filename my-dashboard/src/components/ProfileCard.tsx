import { useQuery } from 'urql';
import { GET_USER_PROFILE } from '../graphql/queries';
import '../css/ProfileCard.css'; 


const ProfileCard = () => {
  const [result] = useQuery({
    query: GET_USER_PROFILE,
    variables: { id: '1' }, 
  });

  const { data, fetching, error } = result;

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{data.user.name}</h5>
        <p className="card-text">Email: {data.user.email}</p>
        <p className="card-text">Phone: {data.user.phone}</p>
        <p className="card-text">Website: {data.user.website}</p>
        <p className="card-text">Company: {data.user.company.name}</p>
      </div>
    </div>
  );
};

export default ProfileCard;