let notes=[]
for(let i=0; i<=2; i++){
//notes[i]=Number(prompt("saisir la note : "))
notes.push(Number(prompt("saisir une note")))
}
let somme=0
let Max=notes[0]
let Min=notes[0]
for (let i=0;i<=2;i++){
    somme+=notes[i]
    if(Max<notes[i]){
        Max=notes[i]
    }if(Min>notes[i]){
        Min=notes[i]
    }
}
let moyenne=somme/notes.length
console.log("------voici le tableau------" ,notes)
console.log( "la moyenne est : ",moyenne)
console.log("la note maximale est  ",Max)
console.log("la note minimale est  ",Min) 