using { grow } from '../../db/schema';

service ProjectService {
  entity Projects as projection on grow.Projects;
  entity Approvals as projection on grow.Approvals;
  action ping() returns String;
}
