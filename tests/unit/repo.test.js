
// test failed :
// local storage n'est pas accessible :((
test('test accès repo localstorage', () => {
    let  repo = JSON.parse(localStorage.getItem("covoiturageRepo"));
    expect(repo.covoiturages[0].status).toBe("ouvert");
   
})