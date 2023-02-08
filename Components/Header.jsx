import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <header className="text-center bg-blue-800 text-white px-2 flex justify-between px-[5%] py-[4px]">
      <div className="flex gap-2 text-xs">
        <span>
          <EnvelopeIcon className="text-yellow-500 h-4 " />
        </span>
        manojdhebe50@gmail.com
      </div>
      <div className="flex gap-2 text-xs">
        <span>
          <PhoneIcon className="text-yellow-500 h-4" />
        </span>
        9892605458
      </div>
    </header>
  );
};

export default Header;
