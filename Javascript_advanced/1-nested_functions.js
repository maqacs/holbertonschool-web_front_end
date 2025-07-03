let globalVariable = "Welcome";
function outer() {
    alert(globalVariable);
    let course = "Holberton";
    function inner() {
        alert(globalVariable + course);
        let exclamation = "!";
        function incepton() {
            alert(globalVariable + course + exclamation);
        }
        incepton();
    }
    inner();
}
outer();