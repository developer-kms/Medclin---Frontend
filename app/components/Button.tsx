// app/components/Button.tsx
'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  name: string;
  onClick?: () => void;
  href?: string; // Optional prop for navigation
}

const Button: React.FC<ButtonProps> = ({ name, onClick, href }) => {
  const button = (
    <button
      onClick={onClick}
      className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
    >
      {name}
    </button>
  );

  return href ? (
    <Link href={href}>
      {button}
    </Link>
  ) : (
    button
  );
};

export default Button;


// // app/components/Button.tsx
// 'use client';

// import React from 'react';
// import Link from 'next/link';

// interface ButtonProps {
//   name: string;
//   onClick?: () => void;
//   href?: string;
// }

// const Button: React.FC<ButtonProps> = ({name, onClick, href}) => {

//   const button = (
//     <button
//       onClick={onClick}
//       className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
//       >

//       {name}

//     </button>
//   )
//   return href ? (
//     <Link href={href}>
//       {button}
//     </Link>
//   ) : (
//     button
//   );
  
// };

// export default Button;
