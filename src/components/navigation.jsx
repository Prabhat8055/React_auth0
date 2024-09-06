import { useAuth0 } from "@auth0/auth0-react";

const Navigation = () => {
  const { loginWithRedirect ,isAuthenticated ,logout,user} = useAuth0();


  return (
    <nav className="nav">
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/images/brand_logo.png`} alt="kaka" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      {
        isAuthenticated &&<p>Welcome {user.name}</p>
      }
      {isAuthenticated ? (
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      ) : (
        <button className="login" onClick={() => loginWithRedirect()}>
          login
        </button>
      )}
    </nav>
  );
};
export default Navigation;
