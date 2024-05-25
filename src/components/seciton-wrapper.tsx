import React from "react";
type SectionWrapperProps = {
  children: React.ReactNode;
};
export const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return (
    <section className="w-full  md:px-12 py-6">

      {children}


      </section>
  );
};