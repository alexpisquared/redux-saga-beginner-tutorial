export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'INCREMENT_IF_ODD':
      return state % 2 !== 0 ? state + 1 : state;
    case 'DECREMENT':
      return state - 1;
    case 'TRY_GO_RDX':
      return state - 10;
    case 'LET_GO_RDX':
      return state + 100;
    default:
      return state;
  }
}
