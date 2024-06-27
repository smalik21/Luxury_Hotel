"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [token, setToken] = useState(null);

    useEffect(() => {
      const accessToken = localStorage.getItem('token');
      setToken(accessToken);

      if (!accessToken) {
        router.replace('/guest-page');
      }
    }, [router]);

    if (!token) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
