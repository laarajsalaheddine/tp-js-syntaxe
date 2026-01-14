 let prenom = prompt("entrer votre prenom: ")
        let age = prompt("entrer votre age: ")
        age = Number(age)
        console.log(`type de prenom : ${typeof prenom}`)
        console.log(`type de age : ${typeof age}`)
        let f = age + 10
        console.log(`Bonjour ${prenom}, tu as ${age} ans. Dans 10 ans tu auras ${f} ans`)