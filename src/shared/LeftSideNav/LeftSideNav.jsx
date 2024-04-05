import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  },[])
  return (
    <div>
      <h2 className="text-xl text-primary font-semibold mt-4">
        All Categories
      </h2>

      <div className="space-y-6 my-6">
        {categories.map((category) => (
          <Link
            to={`/category/${category.id}`}
            key={category.id}
            className="block text-xl text-[#9F9F9F] font-medium"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;