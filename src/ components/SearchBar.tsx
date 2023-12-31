import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  onClose: () => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  searchQuery,
  setSearchQuery,
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full flex justify-center items-start pt-14 md:pt-0">
      <div
        className="relative bg-primary h-[80vh] rounded-lg shadow-xl p-6 w-full md:w-[60vw]"
        style={{ maxHeight: "80vh" }}
      >
        <div className="flex justify-between items-center pb-3">
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="p-2 w-full bg-secondary placeholder-zinc-500 rounded outline-none"
          />
        </div>
        {/* other modal content */}
        <div className="mt-2 overflow-y-auto" style={{ maxHeight: "65vh" }}>
          {/* Search results or history would go here */}
          <p className="text-sm text-gray-500">
            Your search results or history will appear here...
          </p>
        </div>
        <div className="flex justify-end pt-2">
          <button
            className="fixed relative top-[60vh] px-4 py-2 bg-secondary text-zinc-500 text-base font-medium rounded-md hover:bg-accent focus:outline-none"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const SearchBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative w-full md:w-1/2 my-5">
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute text-zinc-500 left-3 top-1/2 transform -translate-y-1/2"
      />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
        className="w-full p-2 pl-10 bg-secondary placeholder-zinc-500 text-white rounded outline-none"
        onFocus={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      )}
    </div>
  );
};

export default SearchBar;
