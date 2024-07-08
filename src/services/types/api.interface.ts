export interface Pokemon {
  name: string;
  sprites: string;
  url: string;
}

export interface ApiResponse {
  results: Pokemon[];
  totalResults: string;
  Response: string;
}
