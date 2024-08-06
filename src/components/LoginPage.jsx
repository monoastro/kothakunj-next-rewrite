// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import Logo from '../Images/logo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// function LoginPage({ onLogin }) {
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     if (email === 'my@email.com' && password === 'mypassword') {
//       onLogin(); // Call the onLogin function passed from the Header component
//       alert('Login successful');
//     } else {
//       alert('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <div className="container mx-auto mt-10 max-w-md pt-9 h-full">
//       <div className="mx-auto">
//         <img src={Logo} alt="logo" className="mx-auto w-40" />
//       </div>

//       <h1 className="text-3xl font-semibold mb-6 text-center pt-5 pb-10"> Welcome </h1>
//       <form className="space-y-4 text-left">
//         <div>
//           <label htmlFor="email" className="block font-semibold">
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="abc@xyz.com"
//             className="w-full border rounded-md px-4 py-3 pb-4"
//           />
//         </div>
//         <div className="relative">
//           <label htmlFor="password" className="block font-semibold">
//             Password
//           </label>
//           <div className="input-group">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               id="password"
//               name="password"
//               placeholder="P@ssw0rd"
//               className="w-full border rounded-md px-4 py-3 pb-4 pr-12"
//             />
//             <button
//               type="button"
//               className="absolute top-3 right-3 text-gray-500 focus:outline-none"
//               onClick={togglePasswordVisibility}
//             >
//               <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className='pt-8' />
//             </button>
//           </div>
//           <p className="text-right text-blue-500 hover:underline">
//             <a href="/forgot-password">Forgot Password?</a>
//           </p>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 mt-8"
//           onClick={handleLogin}
//         >
//           Login
//         </button>
//       </form>
//       <div className="mt-4 mb-16 pb-6 text-center">
//         <p>
//           Don't have an account?{' '}
//           <a href="/signup" className="text-blue-500 hover:underline">
//             Sign up here
//           </a>
      
//         </p>
//       </div>
//     </div>
//   );
// }

// LoginPage.propTypes = {
//   onLogin: PropTypes.func.isRequired,
// };

// export default LoginPage;


import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';

function LoginPage({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { setAuthData } = useAuth(); // Get setAuthData from AuthContext

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setAuthData(data.token); // Save token in AuthContext
        onLogin(); // Call the onLogin function passed from the Header component
        alert('Login successful');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mx-auto mt-10 max-w-md pt-9 h-full">
      <div className="mx-auto">
        <img src={Logo} alt="logo" className="mx-auto w-40" />
      </div>

      <h1 className="text-3xl font-semibold mb-6 text-center pt-5 pb-10"> Welcome </h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form className="space-y-4 text-left" onSubmit={handleLogin}>
        <div>
          <label htmlFor="email" className="block font-semibold">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="abc@xyz.com"
            className="w-full border rounded-md px-4 py-3 pb-4"
            required
          />
        </div>
        <div className="relative">
          <label htmlFor="password" className="block font-semibold">
            Password
          </label>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="P@ssw0rd"
              className="w-full border rounded-md px-4 py-3 pb-4 pr-12"
              required
            />
            <button
              type="button"
              className="absolute top-3 right-3 text-gray-500 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className='pt-8' />
            </button>
          </div>
          <p className="text-right text-blue-500 hover:underline">
            <a href="/forgot-password">Forgot Password?</a>
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 mt-8"
        >
          Login
        </button>
      </form>
      <div className="mt-4 mb-16 pb-6 text-center">
        <p>
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
