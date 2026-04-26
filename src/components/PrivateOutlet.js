import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

// Auth guard HOC for Next.js pages (replaces react-router Outlet pattern)
const withAuth = (WrappedComponent) => {
  const AuthGuard = ({ isAuthenticated, ...props }) => {
    const router = useRouter();

    useEffect(() => {
      if (isAuthenticated === false) {
        router.replace('/login');
      }
    }, [isAuthenticated, router]);

    if (isAuthenticated === null || isAuthenticated === false) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });

  return connect(mapStateToProps)(AuthGuard);
};

export default withAuth;
