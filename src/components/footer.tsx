import { Mail, Phone,MapPin } from "lucide-react";

export const Footer = () => {
    return (
      <footer className="bg-gray-50  p-8 flex flex-col items-center border-t-[1px] md:border-none border-gray-200"> 
      <h2 className="text-2xl font-bold  text-center mb-4 text-[#d47f22]"> 
        DURGAPUR HOPE FOUNDATION
      </h2>
      <p className="text-lg text-gray-800 mb-8"> 
        The Path To Recovery Begins Here
      </p>

      <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
      {
        contact.map((contact, index)=>(
          <a
            key={index}
            href={contact.link}
            className=" no-underline flex justify-center items-center px-4 py-2 gap-3 bg-gray-200 text-gray-800  
             w-fit rounded-full 
            "
          >
            {contact.icon}
            {contact.name}
          </a>
        ))
      }
  </div>
      <p className="text-lg text-center text-gray-800 mb-8"> 
        Fuljhore Road, Fuljhore, Durgapur, West Bengal 713206, India
      </p>

      <p className="text-xs text-center text-gray-500 mb-8"> 
        &copy; 2021 DURGAPUR HOPE FOUNDATION. All rights reserved.
      </p>

      <button
        className="bg-orange-600 text-white py-2 px-4 rounded cursor-pointer text-base mb-8" 
      >
        Let&apos;s Chat!
      </button>
    </footer>
    );
  };
  
const contact = [
  {
    name:'Email',
    icon: <Mail color="#ed333b" />,
    link: 'mailto:durgapurhopefoundation@gmail.com'
  },
  {
    name:'Call',
    icon: <Phone color="#2ec27e" />,
    link: 'tel:+917001029801'
  },

]
//   <h2 className="text-2xl font-bold  mb-4 text-[#d47f22]"> 
//   DURGAPUR HOPE FOUNDATION
// </h2>
// <p className="text-lg text-gray-800 mb-8"> 
//   The Path To Recovery Begins Here
// </p>

// <div className="flex flex-wrap justify-center mb-8"> 
//   <a
//     href="mailto:durgapurhopefoundation@gmail.com"
//     className="text-blue-500 mr-4 no-underline" 
//   >
//     Email us at durgapurhopefoundation@gmail.com
//   </a>
//   <a
//     href="tel:+917001029801"
//     className="text-blue-500 mr-4 no-underline"
//   >
//     Call us at 7001029801
//   </a>
//   <a
//     href="tel:+919064287773"
//     className="text-blue-500 no-underline"
//   >
//     Call us at 9064287773
//   </a>
// </div>

// <p className="text-lg text-gray-800 mb-8"> 
//   Fuljhore Road, Fuljhore, Durgapur, West Bengal 713206, India
// </p>



// <button
//   className="bg-orange-600 text-white py-2 px-4 rounded cursor-pointer text-base mb-8" 
// >
//   Let&apos;s Chat!
// </button>

{/* <footer className=" p-8  bg-orange-600"> 
<div className="flex flex-col items-center justify-center">
  <span className="font-semibold text-white">DURGAPUR HOPE FOUNDATION</span>
 
 
  <p className="text-xs text-gray-500 mb-8"> 
&copy; 2021 DURGAPUR HOPE FOUNDATION. All rights reserved.
</p>
</div>
</footer> */}