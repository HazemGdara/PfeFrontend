import {UserModel} from './user-model';
import {ProjetModel} from './projet-model';

export class RoleModel {
  constructor(
    public id: number, public nom: string, public users: UserModel[], public projets: ProjetModel[]) {
  }
}
