export interface AuthToken {
  results: AuthToken[] | Promise<AuthToken[]>;
  success: string;
  expires_at: string;
  request_token: string;

}
