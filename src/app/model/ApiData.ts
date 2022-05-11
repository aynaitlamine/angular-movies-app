export interface ApiData {
  results: [
    {
      backdrop_path: string;
      title: string;
      genre_ids: number[];
      original_language: string;
      original_title: string;
      poster_path: string;
      video: boolean;
      vote_average: number;
      overview: string;
      release_date: string;
      vote_count: number;
      id: number;
      adult: boolean;
      popularity: number;
      media_type: string;
    }
  ];
}
