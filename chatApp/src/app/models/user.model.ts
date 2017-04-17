/*
 * Project imports
 */
import { uuid } from '../utils/helpers'

/*
 * Model
 */
export class User {
  id: string

  constructor(public name: string,
              public avatarSrc: string) {
    this.id = uuid()
  }
}
