/**
 * For future. I will remove api proy. and use proySync replace It.
 * And by the refactor. I plan provide a asynchronous API
 * proyAsync
 */

class Proy {
  private rules: Map<string, unknown>
  constructor() {
    this.rules = new Map()
  }
  validate() {
    //
  }
  produce() {
    //
  }
  descriptor() {
    //
  }
}

export const proy = () => proyImpl()

export const proySync = proy

export const proyAsync = () => proyImpl()

const proyImpl = () => {
  //
}
