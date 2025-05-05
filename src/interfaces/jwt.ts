export interface IJWTHeader {
  alg: string;
  typ: string;
  [key: string]: unknown;
}

export interface IJWTPayload {
  sub?: string;
  name?: string;
  iat?: number;
  [key: string]: unknown;
}

export interface IDecodedJWT {
  header: IJWTHeader;
  payload: IJWTPayload;
  signature: string;
}
