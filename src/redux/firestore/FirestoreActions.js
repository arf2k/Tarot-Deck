export const createFirestoreEntry = (entry) => {
  return (dispatch, getState) => {
    // async call to db
    dispatch({ type: "CREATE_ENTRY", entry });
  };
};
