import React from 'react';
import type { SVGProps } from 'react';

export function CancelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
      ></path>
    </svg>
  );
}

export function ClosedEyeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={256}
      height={256}
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M234.42 162a12 12 0 1 1-20.84 12l-16.86-29.5a127.2 127.2 0 0 1-30.17 13.86l5.29 31.64a12 12 0 0 1-9.87 13.8a11 11 0 0 1-2 .17a12 12 0 0 1-11.82-10l-5.15-30.8a136.5 136.5 0 0 1-30.06 0l-5.1 30.83A12 12 0 0 1 96 204a11 11 0 0 1-2-.17A12 12 0 0 1 84.16 190l5.29-31.72a127.2 127.2 0 0 1-30.17-13.86L42.42 174a12 12 0 1 1-20.84-12L40 129.85a160 160 0 0 1-17.31-18.31a12 12 0 0 1 18.65-15.08C57.38 116.32 85.44 140 128 140s70.62-23.68 86.66-43.54a12 12 0 0 1 18.67 15.08A160 160 0 0 1 216 129.85Z"
      ></path>
    </svg>
  );
}

export function OpenEyeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M3 13c3.6-8 14.4-8 18 0"></path>
        <path d="M12 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></path>
      </g>
    </svg>
  );
}
