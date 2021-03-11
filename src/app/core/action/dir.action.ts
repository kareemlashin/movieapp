export class AddDir {
  static readonly type = '[dir] Add';

  constructor(public payload: string) {
  }
}
export class AddLoading {
  static readonly type = '[Loading] Add';

  constructor(public payload: boolean) {
  }
}
export class marginTop {
  static readonly type = '[marginTop] Add';

  constructor(public payload: any) {
  }
}
