import React from 'react'
import { Link } from 'react-router-dom'
import {
    IconLockFilled,
} from '@tabler/icons-react'

export default function File() {
    return (
        <>
            <div className='text-[24px]/[30px] font-medium my-2'>
                Project Files (45)
            </div>
            <div className='grid xxl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mb-4'>
                <Link to="#" className='relative card bg-card-color rounded-xl md:p-6 p-4 flex flex-col justify-center items-center group'>
                    <div className="bg-primary p-5 w-[30px] inline-flex items-center justify-center absolute top-0 end-[20px] after:absolute after:end-0 after:top-[calc(100%-10px)] after:border-[15px] after:border-primary after:border-b-[5px] after:border-b-transparent ">
                        <IconLockFilled className='text-white w-[16px] h-[16px] relative z-[1]' />
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                        <path d="M15.5 0C13.3687 0 11.625 1.74375 11.625 3.875V58.125C11.625 60.2562 13.3687 62 15.5 62H54.25C56.3812 62 58.125 60.2562 58.125 58.125V15.5L42.625 0H15.5Z" fill="#E2E5E7"></path>
                        <path d="M46.5 15.5H58.125L42.625 0V11.625C42.625 13.7563 44.3687 15.5 46.5 15.5Z" fill="#B0B7BD"></path>
                        <path d="M58.125 27.125L46.5 15.5H58.125V27.125Z" fill="#CAD1D8"></path>
                        <path fill="#ff0000" d="M50.375 50.375C50.375 51.4406 49.5031 52.3125 48.4375 52.3125H5.8125C4.74687 52.3125 3.875 51.4406 3.875 50.375V31C3.875 29.9344 4.74687 29.0625 5.8125 29.0625H48.4375C49.5031 29.0625 50.375 29.9344 50.375 31V50.375Z"></path>
                        <path d="M12.3203 36.7099C12.3203 36.1984 12.7233 35.6404 13.3724 35.6404H16.9509C18.9659 35.6404 20.7794 36.9889 20.7794 39.5735C20.7794 42.0225 18.9659 43.3865 16.9509 43.3865H14.3644V45.4325C14.3644 46.1145 13.9304 46.5001 13.3724 46.5001C12.8609 46.5001 12.3203 46.1145 12.3203 45.4325V36.7099ZM14.3644 37.5914V41.4509H16.9509C17.9894 41.4509 18.8109 40.5345 18.8109 39.5735C18.8109 38.4904 17.9894 37.5914 16.9509 37.5914H14.3644Z" fill="white"></path>
                        <path d="M23.8136 46.5C23.3021 46.5 22.7441 46.221 22.7441 45.5409V36.7408C22.7441 36.1847 23.3021 35.7798 23.8136 35.7798H27.3612C34.4408 35.7798 34.2858 46.5 27.5007 46.5H23.8136ZM24.7901 37.6708V44.6109H27.3612C31.5443 44.6109 31.7303 37.6708 27.3612 37.6708H24.7901Z" fill="white"></path>
                        <path d="M36.7966 37.7948V40.2573H40.7472C41.3052 40.2573 41.8632 40.8153 41.8632 41.3559C41.8632 41.8674 41.3052 42.2859 40.7472 42.2859H36.7966V45.539C36.7966 46.0815 36.4111 46.498 35.8686 46.498C35.1866 46.498 34.77 46.0815 34.77 45.539V36.7388C34.77 36.1828 35.1885 35.7778 35.8686 35.7778H41.3071C41.9891 35.7778 42.3921 36.1828 42.3921 36.7388C42.3921 37.2348 41.9891 37.7928 41.3071 37.7928H36.7966V37.7948Z" fill="white"></path>
                        <path d="M48.4375 52.3125H11.625V54.25H48.4375C49.5031 54.25 50.375 53.3781 50.375 52.3125V50.375C50.375 51.4406 49.5031 52.3125 48.4375 52.3125Z" fill="#CAD1D8"></path>
                    </svg>
                    <h6 className='font-medium mt-4 transition-all group-hover:text-secondary'>
                        Project Requirements
                    </h6>
                    <p className='text-font-color-100'>
                        3 days ago<span className='ps-2'>5MB</span>
                    </p>
                </Link>
                <Link to="#" className='card bg-card-color rounded-xl md:p-6 p-4 flex flex-col justify-center items-center group'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                        <path d="M15.5 0C13.3687 0 11.625 1.74375 11.625 3.875V58.125C11.625 60.2562 13.3687 62 15.5 62H54.25C56.3812 62 58.125 60.2562 58.125 58.125V15.5L42.625 0H15.5Z" fill="#E2E5E7"></path>
                        <path d="M46.5 15.5H58.125L42.625 0V11.625C42.625 13.7563 44.3687 15.5 46.5 15.5Z" fill="#B0B7BD"></path>
                        <path d="M58.125 27.125L46.5 15.5H58.125V27.125Z" fill="#CAD1D8"></path>
                        <path fill="#2794eb" d="M50.375 50.375C50.375 51.4406 49.5031 52.3125 48.4375 52.3125H5.8125C4.74687 52.3125 3.875 51.4406 3.875 50.375V31C3.875 29.9344 4.74687 29.0625 5.8125 29.0625H48.4375C49.5031 29.0625 50.375 29.9344 50.375 31V50.375Z"></path>
                        <path d="M11.2101 46.5C10.6986 46.5 10.1406 46.219 10.1406 45.539V36.7408C10.1406 36.1828 10.6986 35.7798 11.2101 35.7798H14.7577C21.8373 35.7798 21.6804 46.5 14.8953 46.5H11.2101ZM12.1866 37.6688V44.609H14.7577C18.9408 44.609 19.1248 37.6688 14.7577 37.6688H12.1866Z" fill="white"></path>
                        <path d="M27.6091 46.655C24.7436 46.779 21.7676 44.8725 21.7676 41.077C21.7676 37.2659 24.7416 35.3923 27.6091 35.3923C30.3197 35.5299 33.1543 37.4054 33.1543 41.077C33.1543 44.7505 30.3197 46.655 27.6091 46.655ZM27.4386 37.4073C25.7026 37.4073 23.8136 38.6318 23.8136 41.0789C23.8136 43.5124 25.7046 44.7524 27.4386 44.7524C29.2211 44.7524 31.1257 43.5124 31.1257 41.0789C31.1257 38.6299 29.2211 37.4073 27.4386 37.4073Z" fill="white"></path>
                        <path d="M34.9775 41.0614C34.9775 38.0718 36.853 35.5007 40.4161 35.5007C41.7646 35.5007 42.8341 35.9037 43.9637 36.8802C44.3822 37.2658 44.4287 37.9478 44.0102 38.3818C43.5917 38.7519 42.9562 38.7073 42.5842 38.3353C41.9506 37.6688 41.2996 37.4847 40.4161 37.4847C38.031 37.4847 36.886 39.1742 36.886 41.0633C36.886 42.9853 38.0155 44.7504 40.4161 44.7504C41.2996 44.7504 42.1211 44.3919 42.8341 43.7583C43.3127 43.3863 43.9792 43.5704 44.2582 43.9444C44.5062 44.2854 44.6282 44.8588 44.0877 45.3994C43.0027 46.4088 41.7026 46.6103 40.4142 46.6103C36.667 46.6103 34.9775 44.0509 34.9775 41.0614Z" fill="white"></path>
                        <path d="M48.4375 52.3125H11.625V54.25H48.4375C49.5031 54.25 50.375 53.3781 50.375 52.3125V50.375C50.375 51.4406 49.5031 52.3125 48.4375 52.3125Z" fill="#CAD1D8"></path>
                    </svg>
                    <h6 className='font-medium mt-4 transition-all group-hover:text-secondary'>
                        Statement Dec 2021
                    </h6>
                    <p className='text-font-color-100'>
                        8 days ago<span className='ps-2'>2MB</span>
                    </p>
                </Link>
                <Link to="#" className='card bg-card-color rounded-xl md:p-6 p-4 flex flex-col justify-center items-center group'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                        <path d="M15.5 0C13.3687 0 11.625 1.74375 11.625 3.875V58.125C11.625 60.2562 13.3687 62 15.5 62H54.25C56.3812 62 58.125 60.2562 58.125 58.125V15.5L42.625 0H15.5Z" fill="#E2E5E7"></path>
                        <path d="M46.5 15.5H58.125L42.625 0V11.625C42.625 13.7563 44.3687 15.5 46.5 15.5Z" fill="#B0B7BD"></path>
                        <path d="M58.125 27.125L46.5 15.5H58.125V27.125Z" fill="#CAD1D8"></path>
                        <path fill="#FFB200" d="M50.375 50.375C50.375 51.4406 49.5031 52.3125 48.4375 52.3125H5.8125C4.74687 52.3125 3.875 51.4406 3.875 50.375V31C3.875 29.9344 4.74687 29.0625 5.8125 29.0625H48.4375C49.5031 29.0625 50.375 29.9344 50.375 31V50.375Z"></path>
                        <path d="M11.8825 38.1048C12.239 35.0978 16.7766 34.5573 18.9137 36.2003C19.9677 37.0508 18.8536 38.3993 17.9217 37.7173C16.7766 36.9907 14.1726 36.6498 13.8471 38.2579C13.4286 40.7999 20.1692 39.3448 20.0588 43.4659C19.9503 47.4009 14.2501 47.492 12.1111 45.7269C11.5996 45.3084 11.6151 44.6284 11.8961 44.2079C12.2971 43.8069 12.7466 43.6674 13.2736 44.1014C14.5446 44.9674 17.8132 45.6184 18.0457 43.4174C17.8461 41.1273 11.402 42.5049 11.8825 38.1048Z" fill="white"></path>
                        <path d="M32.1485 44.7349L32.3965 45.0274C33.4175 45.9574 32.0865 47.4764 31.048 46.4999L30.5229 46.0834C29.7169 46.6394 28.7733 46.9049 27.5178 46.9049C24.7918 46.9049 21.6763 45.0274 21.6763 41.2164C21.6763 37.4053 24.7743 35.4697 27.5178 35.4697C30.397 35.4697 33.218 37.4053 33.218 41.2164C33.218 42.6889 32.844 43.7758 32.1485 44.7349ZM31.2165 41.2164C31.2165 38.7538 29.281 37.5002 27.5159 37.5002C25.6113 37.5002 23.7358 38.7519 23.7358 41.2164C23.7358 43.0938 25.3304 44.8744 27.5159 44.8744C28.072 44.8744 28.6145 44.7349 29.157 44.5954L27.3919 42.9679C26.5704 41.9759 27.8724 40.5654 28.909 41.4799L30.6605 43.2294C31.046 42.6889 31.2165 42.0224 31.2165 41.2164Z" fill="white"></path>
                        <path d="M35.5005 36.7097C35.5005 36.1982 35.9345 35.7642 36.477 35.7642C36.973 35.7642 37.3915 36.2001 37.3915 36.7097V44.4713H41.6056C43.1226 44.4713 43.1556 46.4998 41.6056 46.4998H36.4789C35.9364 46.4998 35.5024 46.1143 35.5024 45.5563V36.7097H35.5005Z" fill="white"></path>
                        <path d="M48.4375 52.3125H11.625V54.25H48.4375C49.5031 54.25 50.375 53.3781 50.375 52.3125V50.375C50.375 51.4406 49.5031 52.3125 48.4375 52.3125Z" fill="#CAD1D8"></path>
                    </svg>
                    <h6 className='font-medium mt-4 transition-all group-hover:text-secondary'>
                        Project Backup v3
                    </h6>
                    <p className='text-font-color-100'>
                        15 days ago<span className='ps-2'>32MB</span>
                    </p>
                </Link>
                <Link to="#" className='card bg-card-color rounded-xl md:p-6 p-4 flex flex-col justify-center items-center group'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                        <path d="M15.5 0C13.3687 0 11.625 1.74375 11.625 3.875V58.125C11.625 60.2562 13.3687 62 15.5 62H54.25C56.3812 62 58.125 60.2562 58.125 58.125V15.5L42.625 0H15.5Z" fill="#E2E5E7"></path>
                        <path d="M46.5 15.5H58.125L42.625 0V11.625C42.625 13.7563 44.3687 15.5 46.5 15.5Z" fill="#B0B7BD"></path>
                        <path d="M58.125 27.125L46.5 15.5H58.125V27.125Z" fill="#CAD1D8"></path>
                        <path fill="#FF9A00" d="M50.375 50.375C50.375 51.4406 49.5031 52.3125 48.4375 52.3125H5.8125C4.74687 52.3125 3.875 51.4406 3.875 50.375V31C3.875 29.9344 4.74687 29.0625 5.8125 29.0625H48.4375C49.5031 29.0625 50.375 29.9344 50.375 31V50.375Z"></path>
                        <path d="M19.8862 46.5001C19.3902 46.2191 19.0802 45.6631 19.3902 45.0121L23.8349 36.3224C24.2534 35.5009 25.3694 35.4699 25.7569 36.3224L30.124 45.0121C30.7595 46.2191 28.884 47.1801 28.3279 45.9731L27.644 44.6091H21.9284L21.2619 45.9731C21.0158 46.5001 20.4423 46.6105 19.8862 46.5001ZM26.5454 42.565L24.7959 38.7384L22.8913 42.565H26.5454Z" fill="white"></path>
                        <path d="M31.9741 36.71C31.9741 35.439 34.0201 35.3925 34.0201 36.71V45.5528C34.0201 46.8393 31.9741 46.8703 31.9741 45.5528V36.71Z" fill="white"></path>
                        <path d="M48.4375 52.3125H11.625V54.25H48.4375C49.5031 54.25 50.375 53.3781 50.375 52.3125V50.375C50.375 51.4406 49.5031 52.3125 48.4375 52.3125Z" fill="#CAD1D8"></path>
                    </svg>
                    <h6 className='font-medium mt-4 transition-all group-hover:text-secondary'>
                        SWIFT Logo AI v3
                    </h6>
                    <p className='text-font-color-100'>
                        12 days ago<span className='ps-2'>1.2MB</span>
                    </p>
                </Link>
                <Link to="#" className='card bg-card-color rounded-xl md:p-6 p-4 flex flex-col justify-center items-center group'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                        <path d="M15.5 0C13.3687 0 11.625 1.74375 11.625 3.875V58.125C11.625 60.2562 13.3687 62 15.5 62H54.25C56.3812 62 58.125 60.2562 58.125 58.125V15.5L42.625 0H15.5Z" fill="#E2E5E7"></path>
                        <path d="M46.5 15.5H58.125L42.625 0V11.625C42.625 13.7563 44.3687 15.5 46.5 15.5Z" fill="#B0B7BD"></path>
                        <path d="M58.125 27.125L46.5 15.5H58.125V27.125Z" fill="#CAD1D8"></path>
                        <path fill="#1471B6" d="M50.375 50.375C50.375 51.4406 49.5031 52.3125 48.4375 52.3125H5.8125C4.74687 52.3125 3.875 51.4406 3.875 50.375V31C3.875 29.9344 4.74687 29.0625 5.8125 29.0625H48.4375C49.5031 29.0625 50.375 29.9344 50.375 31V50.375Z"></path>
                        <path d="M12.5859 41.0614C12.5859 38.0718 14.4595 35.5007 18.0245 35.5007C19.3711 35.5007 20.4406 35.9037 21.5721 36.8802C21.9906 37.2658 22.0351 37.9478 21.6166 38.3818C21.1981 38.7519 20.5626 38.7073 20.1926 38.3353C19.5571 37.6688 18.9061 37.4847 18.0245 37.4847C15.6394 37.4847 14.4924 39.1742 14.4924 41.0633C14.4924 42.9853 15.6239 44.7504 18.0245 44.7504C18.9061 44.7504 19.7276 44.3919 20.4406 43.7583C20.9211 43.3863 21.5876 43.5704 21.8646 43.9444C22.1126 44.2854 22.2366 44.8588 21.6941 45.3994C20.6091 46.4088 19.3091 46.6103 18.0226 46.6103C14.2754 46.6103 12.5859 44.0509 12.5859 41.0614Z" fill="white"></path>
                        <path d="M23.6994 38.1027C24.0559 35.0977 28.5935 34.5571 30.7325 36.2001C31.7865 37.0507 30.6705 38.3992 29.7405 37.7172C28.5935 36.9887 25.9915 36.6477 25.666 38.2577C25.2475 40.7997 31.9861 39.3447 31.8776 43.4638C31.7691 47.3989 26.069 47.4919 23.93 45.7249C23.4165 45.3083 23.434 44.6282 23.713 44.2078C24.116 43.8067 24.5635 43.6672 25.0925 44.0993C26.3615 44.9673 29.632 45.6183 29.8626 43.4154C29.665 41.1252 23.2189 42.5047 23.6994 38.1027Z" fill="white"></path>
                        <path d="M33.48 38.1027C33.8365 35.0977 38.3742 34.5571 40.5132 36.2001C41.5672 37.0507 40.4512 38.3992 39.5212 37.7172C38.3742 36.9887 35.7721 36.6477 35.4466 38.2577C35.0281 40.7997 41.7667 39.3447 41.6582 43.4638C41.5497 47.3989 35.8496 47.4919 33.7106 45.7249C33.1991 45.3083 33.2146 44.6282 33.4936 44.2078C33.8966 43.8067 34.3442 43.6672 34.8731 44.0993C36.1422 44.9673 39.4127 45.6183 39.6452 43.4154C39.4437 41.1252 32.9995 42.5047 33.48 38.1027Z" fill="white"></path>
                        <path d="M48.4375 52.3125H11.625V54.25H48.4375C49.5031 54.25 50.375 53.3781 50.375 52.3125V50.375C50.375 51.4406 49.5031 52.3125 48.4375 52.3125Z" fill="#CAD1D8"></path>
                    </svg>
                    <h6 className='font-medium mt-4 transition-all group-hover:text-secondary'>
                        style.min.css
                    </h6>
                    <p className='text-font-color-100'>
                        1 days ago<span className='ps-2'>423KB</span>
                    </p>
                </Link>
                <Link to="#" className='card bg-card-color rounded-xl md:p-6 p-4 flex flex-col justify-center items-center group'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                        <path d="M15.5 0C13.3687 0 11.625 1.74375 11.625 3.875V58.125C11.625 60.2562 13.3687 62 15.5 62H54.25C56.3812 62 58.125 60.2562 58.125 58.125V15.5L42.625 0H15.5Z" fill="#E2E5E7"></path>
                        <path d="M46.5 15.5H58.125L42.625 0V11.625C42.625 13.7563 44.3687 15.5 46.5 15.5Z" fill="#B0B7BD"></path>
                        <path d="M58.125 27.125L46.5 15.5H58.125V27.125Z" fill="#CAD1D8"></path>
                        <path fill="#2794eb" d="M50.375 50.375C50.375 51.4406 49.5031 52.3125 48.4375 52.3125H5.8125C4.74687 52.3125 3.875 51.4406 3.875 50.375V31C3.875 29.9344 4.74687 29.0625 5.8125 29.0625H48.4375C49.5031 29.0625 50.375 29.9344 50.375 31V50.375Z"></path>
                        <path d="M11.2101 46.5C10.6986 46.5 10.1406 46.219 10.1406 45.539V36.7408C10.1406 36.1828 10.6986 35.7798 11.2101 35.7798H14.7577C21.8373 35.7798 21.6804 46.5 14.8953 46.5H11.2101ZM12.1866 37.6688V44.609H14.7577C18.9408 44.609 19.1248 37.6688 14.7577 37.6688H12.1866Z" fill="white"></path>
                        <path d="M27.6091 46.655C24.7436 46.779 21.7676 44.8725 21.7676 41.077C21.7676 37.2659 24.7416 35.3923 27.6091 35.3923C30.3197 35.5299 33.1543 37.4054 33.1543 41.077C33.1543 44.7505 30.3197 46.655 27.6091 46.655ZM27.4386 37.4073C25.7026 37.4073 23.8136 38.6318 23.8136 41.0789C23.8136 43.5124 25.7046 44.7524 27.4386 44.7524C29.2211 44.7524 31.1257 43.5124 31.1257 41.0789C31.1257 38.6299 29.2211 37.4073 27.4386 37.4073Z" fill="white"></path>
                        <path d="M34.9775 41.0614C34.9775 38.0718 36.853 35.5007 40.4161 35.5007C41.7646 35.5007 42.8341 35.9037 43.9637 36.8802C44.3822 37.2658 44.4287 37.9478 44.0102 38.3818C43.5917 38.7519 42.9562 38.7073 42.5842 38.3353C41.9506 37.6688 41.2996 37.4847 40.4161 37.4847C38.031 37.4847 36.886 39.1742 36.886 41.0633C36.886 42.9853 38.0155 44.7504 40.4161 44.7504C41.2996 44.7504 42.1211 44.3919 42.8341 43.7583C43.3127 43.3863 43.9792 43.5704 44.2582 43.9444C44.5062 44.2854 44.6282 44.8588 44.0877 45.3994C43.0027 46.4088 41.7026 46.6103 40.4142 46.6103C36.667 46.6103 34.9775 44.0509 34.9775 41.0614Z" fill="white"></path>
                        <path d="M48.4375 52.3125H11.625V54.25H48.4375C49.5031 54.25 50.375 53.3781 50.375 52.3125V50.375C50.375 51.4406 49.5031 52.3125 48.4375 52.3125Z" fill="#CAD1D8"></path>
                    </svg>
                    <h6 className='font-medium mt-4 transition-all group-hover:text-secondary'>
                        Statement Nov 2021
                    </h6>
                    <p className='text-font-color-100'>
                        month ago<span className='ps-2'>1.5MB</span>
                    </p>
                </Link>
            </div>
        </>
    )
}
