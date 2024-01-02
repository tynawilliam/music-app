import React, { useEffect, useState } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import AudioPlayer from "./AudioPlayer";
import { getFeaturedMusic } from "../utils/api";
import { SongItem } from "../types/types";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [songList, setSongList] = useState<SongItem[]>([]);
  useEffect(() => {
    const featuredMusic = async () => {
      const data = await getFeaturedMusic();
      setSongList(data);
    };

    featuredMusic();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <div className="flex flex-1 overflow-hidden">
        <aside className="fixed hidden h-full md:block md:w-1/5 xl:w-1/6">
          <LeftPanel />
        </aside>

        <main className="flex-1 overflow-y-auto pl-[20%] md:pl-[20%] xl:pl-[16.666667%]">
          {children}
        </main>

        <aside className="fixed hidden h-full right-0 md:block md:w-1/4 xl:w-1/5">
          <RightPanel />
        </aside>
      </div>

      <div className="fixed inset-x-0 bottom-0">
        <AudioPlayer audioList={songList} />
      </div>
    </div>
  );
};

export default Layout;
