// export const bindRefToState = (firebaseRef, stateVar) => {
//   firebaseRef.onSnapshot(res => {
//     const changes = res.docChanges()
//     changes.forEach(change => {
//       if(change.type == 'added') {
//         stateVar.push({
//           ...change.doc.data(),
//           id: change.doc.id
//         })
//       }
//     })
//   })
// }

export const bindRefToState = (firebaseRef, stateVar) => {
  let results = stateVar;
  firebaseRef.onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if (change.type == "added") {
        let doc = change.doc
        results.push({
          id: doc.id,
          ...doc.data()
        })
      }
    })
  })

  return results;
}
