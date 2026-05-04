/*class Produit{
    constructor(id, nom, prix,stock){
        this.id = id
        this.nom = nom
        this.prix = prix
        this.stock = stock
    }

    vendre(qte){
        let stockRestant = this.stock - qte
        console.log(stockRestant); // affiche stockRestant
    }
    reapprovisionnement(qte){
        let stockRestant = this.stock + qte
        console.log(stockRestant); // affiche stockRestant
    }
}
let produit= new Produit(20,'abed', 2500, 450)
produit.vendre(100)
produit.reapprovisionnement(250)
console.log(produit.id, produit.nom, produit.prix,);*/

class Inventaire{
    produits = []
    constructor(produits){
        this.produits = produits
    }
    ajouterProduit(produit){
        this.produits.push(produit)
        localStorage.setItem('produits', JSON.stringify(this.produits)) 
    }
    supprimerProduits(produit){
        
    }
}
let Pro = new Inventaire([])
Pro.ajouterProduit("mangue")
Pro.ajouterProduit("pomme")
