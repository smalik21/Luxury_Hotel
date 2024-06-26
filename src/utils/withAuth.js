"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';

const withAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();

        const token = localStorage.getItem('accessToken')

        useEffect(() => {
            if (!token) {
                router.replace('/');
            }
        }, []);

        if (!token) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
