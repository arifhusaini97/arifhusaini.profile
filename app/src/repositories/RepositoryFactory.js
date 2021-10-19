import CandidateRepository from './Endpoints/CandidateRepository';
import UserRepository from './Endpoints/UserRepository';

const repositories = {
  candidates: CandidateRepository,
  user: UserRepository,
};
export default {
  get: (name) => repositories[name],
};
