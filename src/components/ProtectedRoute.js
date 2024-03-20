
import { useRouter } from "next/navigation";
import { useEffect } from 'react';
import { useAuth } from '../context/authContext';

const ProtectedRoute = (WrappedComponent) => {
  const ProtectedComponent = () => {
    const { userAuth } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!userAuth) {
        router.push('/login'); 
      }
    }, [userAuth, router]);

    return userAuth ? <WrappedComponent /> : null;
  };

  return ProtectedComponent;
};

export default ProtectedRoute;
