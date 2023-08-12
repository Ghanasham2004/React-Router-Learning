import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();
  return (
    <div>
      <h3>Hey, I'm a user,</h3>
      <h3>My I'd Is : {userId}</h3>
    </div>
  );
};

export default UserDetails;
