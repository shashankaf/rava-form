import Link from "next/link";
import React from "react"
import localFont from 'next/font/local';

const goran = localFont({src: '../../pages/fonts/goran.ttf'})
const shasenem = localFont({src: '../../pages/fonts/shasenem.ttf'})

const SingleCourse = ({ item }) => {
  return (
    <div>
      <Link href={`/courses/${item.id}`}>
        <li>
          <div className="flex border-[1px] border-gray-100 
                          items-center gap-x-6 hover:shadow-sm 
                          hover:shadow-black rounded-lg transition-600 p-4
                         ">
            <div>
              <h3
                className={`${shasenem.className} text-xl font-semibold 
                            leading-7 tracking-tight text-gray-900`}
              >
                {item?.title}{" "}
              </h3>
              <p
                className={`${goran.className} text-lg font-semibold 
                          leading-6 text-indigo-600`}
              >
                {item?.teacher.name}
              </p>
            </div>
          </div>
        </li>
      </Link>
    </div>
  );
};

export default SingleCourse;
