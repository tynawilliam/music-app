import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  onClose: () => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchHistory: string[];
  setSearchHistory: React.Dispatch<React.SetStateAction<string[]>>;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  searchQuery,
  setSearchQuery,
  searchHistory,
  setSearchHistory,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const clearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem("searchHistory");
  };

  const addSearchTermToHistory = (term: string) => {
    const updatedHistory = [term, ...searchHistory].slice(0, 10);
    setSearchHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full flex justify-center items-start pt-14">
      <div
        className="relative bg-primary rounded-lg shadow-xl p-6 w-full md:w-3/4 lg:w-1/2"
        style={{ height: "80vh" }}
      >
        <div className="flex justify-between items-center pb-3">
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="p-2 w-full bg-secondary placeholder-zinc-500 rounded outline-none"
            onKeyDown={(e) => {
              if (e.key === "Enter" && searchQuery.trim() !== "") {
                addSearchTermToHistory(searchQuery.trim());
                setSearchQuery("");
              }
            }}
          />
        </div>
        <div
          className="overflow-y-auto"
          style={{ height: "calc(80vh - 140px)" }}
        >
          {" "}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-white">Recent Searches</h3>
            <div className="flex justify-between w-1/4">
              <button
                className="px-4 py-2 bg-secondary text-zinc-500 text-base font-medium rounded-md hover:bg-accent focus:outline-none"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                onClick={clearSearchHistory}
                className="px-4 py-2 bg-secondary text-zinc-500 text-base font-medium rounded-md hover:bg-accent focus:outline-none"
              >
                Clear
              </button>
            </div>
          </div>
          <ul className="list-disc pl-5 mb-4">
            {searchHistory.map((historyItem, index) => (
              <li key={index} className="text-sm text-gray-500 truncate">
                {historyItem}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-6">
          <h3 className="text-lg font-bold text-white mb-4">
            Based on what you like
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-secondary rounded-lg p-4 text-white">
              Indie Mix
            </div>
            <div className="bg-secondary rounded-lg p-4 text-white">
              House Mix
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary rounded-lg p-4 text-white">
              Pop Mix
            </div>
            <div className="bg-secondary rounded-lg p-4 text-white">
              Rock Mix
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(() => {
    const history = localStorage.getItem("searchHistory");
    if (history) {
      setSearchHistory(JSON.parse(history));
    }
  }, []);

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
          searchHistory={searchHistory}
          setSearchHistory={setSearchHistory}
        />
      )}
    </div>
  );
};

export default SearchBar;
