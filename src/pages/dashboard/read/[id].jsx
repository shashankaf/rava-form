import React from 'react'
import { useRouter } from 'next/router';

const ReadPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Student ID: {id}</h1>
      {/* Other content of the read page */}
    </div>
  );
};

export default ReadPage;
