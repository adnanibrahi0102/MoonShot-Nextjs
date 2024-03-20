"use client"
import ProtectedRoute from '@/components/ProtectedRoute';
import Category from '@/components/Category'
export default function Home() {
  const ProtectedComp=ProtectedRoute(Category);
  return (
         <div>
             <ProtectedComp/>
         </div>
  );
}
