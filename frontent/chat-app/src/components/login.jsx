import "./Username.css";
import { useNavigate } from 'react-router-dom';

function Login({username, setUsername, setUserInfo}) {
  

  const navigate = useNavigate()
  return (
    <div className="username-page">

      <div className="username-box">

        <div className="username-icon">
          U
        </div>

        <h2>Choose Username</h2>

        <p>
          Enter your username to continue
        </p>

        <input onChange={(e)=>{
      console.log(e.target.value)
      setUsername(e.target.value)
        }}
          type="text"
          placeholder="Enter username"
        />

        <button onClick={()=>{
          setUserInfo((previ)=>{
          return [...previ, {'user': username,
                     'msg': ''}]
          });

      navigate('/chat')
      
        }}>
          Continue
        </button>

      </div>

    </div>
  );
}

export default Login;