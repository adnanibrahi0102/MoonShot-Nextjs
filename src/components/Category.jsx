
"use client"
import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import Pagination from '@/components/Pagination';

const Category = () => {
    faker.seed(123);
    const categories = Array.from({ length: 100 }, () => faker.commerce.department());
    

    const [page, setPage] = useState(1);
    const categoriesPerPage = 8;
    const totalPages = Math.ceil(categories.length / categoriesPerPage);
    const [selected,setSelected] = useState(null);
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    const toggleChecbox=(category)=>{
        setSelected(selected===category?null:category)
    }
    return (
        <div className='flex justify-center items-center mt-10'>
            <div className='border border-gray-300 bg-white rounded-lg p-8 shadow-md w-[420px]'>
                <div className='text-center mb-3'>
                    <h1 className='text-2xl font-semibold mb-5'>Please mark your interest</h1>
                    <p className='text-sm'>We will keep you notified.</p>
                </div>
                <h3 className='text-base font-semibold'>My saved interests!</h3>

                {/* Categories */}
                <div className="mt-4 space-y-2">
                    {categories.slice((page - 1) * categoriesPerPage, page * categoriesPerPage).map((category, index) => (
                        <label key={index} className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox mr-2"
                                onChange={() => toggleChecbox(category)}
                            />
                            <span className='font-semibold text-sm'>{category}</span>
                        </label>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <Pagination
                        totalPages={totalPages}
                        currentPage={page}
                        onPageChange={handlePageChange}
                    />
                )}
            </div>
        </div>
    );
};

export default Category;
