import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props ) => {
  return (
    <div className="container mx-auto px-5 sm:px-4 md:px-3 lg:px-4 xl:px-5 2xl:w-[1250px] transition-all duration-300">
      {children}
    </div>
  );
};

export default Container;
