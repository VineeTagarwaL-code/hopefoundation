import React from "react";
type SectionWrapperProps = {
  children: React.ReactNode;
};
export const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return (
    <section className="w-full px-2 md:px-32 py-12">

      {children}


      </section>
  );
};