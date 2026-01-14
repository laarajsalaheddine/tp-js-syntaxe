        let montant // valeur intial est null par défaut
        let achats = [] // array pour stocker les achats
        let somme = 0 // variable pour stocker la somme
        let moyenne = 0 // variable pour stocker la moyenne
        let confirmer = confirm("Vous avez un achat à sasir ?")
        while (confirmer) {
            montant = Number(prompt("enter un montant"))            
            somme += montant
            achats.push(montant)
        }
        moyenne = somme / achats.length
        console.log(`Bilan des achat : `)
        for (let i = 0; i < achats.length; i++) {
            cosole.log(`le mantant d'achat n° ${i + 1} : ${achats[i]}`)
        }
        console.log(`Le total des achats est ${somme}`);
        console.log(`Le moyenne des achats est ${moyenne}`);