/*
 * System imports
 */
import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";

/*
 * Project imports
 */
import {User} from "../models/user.model";

@Injectable()
export class UserService {
  currentUser: Subject<User> = new BehaviorSubject<User>(null)

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser)
  }
}

export const USER_PROVIDERS: Array<any> = [
  {provide: UserService, useClass: UserService}
]
