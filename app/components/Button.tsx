import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  primary?: boolean;
}

export function Button({ label, onClick, primary = false }: ButtonProps) {
  const baseClasses = "px-4 py-2 rounded font-medium focus:outline-none";
  const colorClasses = primary 
    ? "bg-blue-600 text-white hover:bg-blue-700" 
    : "bg-gray-200 text-gray-800 hover:bg-gray-300";
  
  return (
    <button
      className={`${baseClasses} ${colorClasses}`}
      onClick={onClick}
      data-testid="button"
    >
      {label}
    </button>
  );
}
