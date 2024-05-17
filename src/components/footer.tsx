export const Footer = () => {
    return (
      <footer className="bg-gray-50  p-8 flex flex-col items-center"> 
        <h2 className="text-2xl font-bold  mb-4 text-[#d47f22]"> 
          DURGAPUR HOPE FOUNDATION
        </h2>
        <p className="text-lg text-gray-800 mb-8"> 
          The Path To Recovery Begins Here
        </p>
  
        <div className="flex flex-wrap justify-center mb-8"> 
          <a
            href="mailto:durgapurhopefoundation@gmail.com"
            className="text-blue-500 mr-4 no-underline" 
          >
            Email us at durgapurhopefoundation@gmail.com
          </a>
          <a
            href="tel:+917001029801"
            className="text-blue-500 mr-4 no-underline"
          >
            Call us at 7001029801
          </a>
          <a
            href="tel:+919064287773"
            className="text-blue-500 no-underline"
          >
            Call us at 9064287773
          </a>
        </div>
  
        <p className="text-lg text-gray-800 mb-8"> 
          Fuljhore Road, Fuljhore, Durgapur, West Bengal 713206, India
        </p>
  
        <p className="text-xs text-gray-500 mb-8"> 
          &copy; 2021 DURGAPUR HOPE FOUNDATION. All rights reserved.
        </p>
  
        <button
          className="bg-orange-600 text-white py-2 px-4 rounded cursor-pointer text-base mb-8" 
        >
          Let's Chat!
        </button>
      </footer>
    );
  };
  