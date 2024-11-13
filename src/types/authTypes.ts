// Represents a single AuthToken (e.g., contains request_token)
export interface AuthToken {
  request_token: string;
  // Add other properties if necessary
}

// Represents the response from the API that contains an array of AuthTokens
export interface AuthTokenResponse {
  results: AuthToken[]; // Array of AuthToken objects
  success: boolean; // Assuming success is a boolean, change if it's a string
  expires_at: string;
}

// Define User type
export interface User {
  id: string;
  // Add other properties as necessary
}

// Define AuthState type
export interface AuthState {
  user: User | null;
  token: string | null;
}

// Update RootState to include AuthState
export interface RootState {
  auth: AuthState;
  // other slices of state if any
}

