export type SongItem = {
  id: string;
  title: string;
  artist: string;
  image: string;
  audioSrc: string;
};

export type SongCardProps = {
  song: SongItem;
  isActive: boolean;
  onSetActive: () => void;
};

export type ArtistItem = {
  id: string;
  name: string;
  image: string;
};

export type AudioPlayerProps = {
  audioList: SongItem[];
};
