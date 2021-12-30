import { useSelector } from 'react-redux';

const profile = () => {
  const profile = useSelector((state) => state.user);
  console.log(profile);
  return (
    <>
      <div>
        <h1>Profile</h1>
        <img src={profile?.payload?.picture} alt={profile?.payload?.name} />
        <h3>Name: {profile?.payload?.name}</h3>
        <h3>Email: {profile?.payload?.email}</h3>
        <h3>ID: {profile?.payload?.id}</h3>
      </div>
    </>
  );
};

export default profile;
