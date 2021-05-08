export const createFirestoreEntry = (entry) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // async call to db
    const firestore = getFirestore()
    firestore.collection("single_shuffle").add({
         ...entry,
         createdAt: new Date()
    }).then(() => 
    dispatch({ type: "CREATE_ENTRY", entry })).catch((err) => dispatch({type: "CREATE_ENTRY_ERROR", err}))
  };
};
