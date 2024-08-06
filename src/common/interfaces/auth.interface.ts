export interface JwtSign {
  accessToken: string;
  refreshToken: string;
}

export interface IJwtPayload {
  sub: number;
  iat: number;
  exp: number;
}
