import { Credential } from './credential.model';

export interface AuthenticationModel {
  credential: Credential;
  token:      string;
}
