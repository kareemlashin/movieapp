import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddDir, AddLoading} from './../action/dir.action';

export class dirStateModel {
  dir?: string;
  loading?: boolean | undefined;

}

@State<dirStateModel>({
  name: 'dir',
  defaults: {
    dir: 'ltr',
    loading: true

  }
})

export class dirState {


  @Selector()
  static getDir(state: dirStateModel) {
    return state.dir;
  }
  @Selector()
  static getLoading(state: dirStateModel) {
    return state.loading;
  }

  @Action(AddDir)
  addDir({ getState, setState }: StateContext<dirStateModel>, {payload}: any) {
    setState({
      dir: payload,
    });
  }

  @Action(AddLoading)
  addLoading({ getState, setState }: StateContext<dirStateModel>, { payload }: boolean | any) {
      setState({
        loading: payload,
      });
  }
}

