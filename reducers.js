export default function counterReducer(idx = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return idx + 1;
    case 'INCREMENT_IF_ODD':
      return idx % 2 !== 0 ? idx + 1 : idx;
    case 'DECREMENT':
      return idx - 1;
    case 'TRY_GO_RDX':
      return idx - 10;
    case 'LET_GO_RDX':
      return idx + 100;
    default:
      return idx;
  }
}
