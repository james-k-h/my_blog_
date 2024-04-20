'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { GithubIcon, LinkedinIcon } from '../Icons';
import Link from 'next/link';
import siteMetadata from '@/src/utils/siteMetaData';

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className="mt-4 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      <h4 className="mt-4 font-medium dark:font-bold text-center capitalize text-1xl sm:text-2xl lg:text-1xl px-4">
        Reviews, Discussion, Essays
      </h4>

      <div className="flex items-center mt-4">
        <a
          href={siteMetadata.linkedin}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.github}
          className="inline-block w-6 h-6 mr-4 fill-light"
          aria-label="Check my profile on Github"
          target="_blank"
        >
          <GithubIcon className="fill-light dark:fill-dark  hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>

      <div className="w-full  mt-4 md:mt-8 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
        <span className="text-center">&copy;2023 JKH</span>
        {/* <Link
          href="/sitemap.xml"
          className="text-center underline my-4 md:my-0"
        >
          sitemap.xml
        </Link> */}
      </div>
    </footer>
  );
};

export default Footer;
