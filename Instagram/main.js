// https://www.instagram.com/graphql/query/?query_id=17865274345132052&id=303736538&first=10

window.addEventListener('load', main);

function main() {
    // fetch('https://www.instagram.com/graphql/query/?query_id=17865274345132052&id=303736538&first=10')
    // 213385402 london uk
    // London ID -> 546221062123305
    // Opstina Ljubinje ID -> 726445577486579
    // Barnosi ID -> 976258775\

}

function ucitajLjubinje() {
    fetch('https://www.instagram.com/graphql/query/?query_id=17865274345132052&id=303736538&first=10')
        .then(result => result.json())
        .then(podaci => {
            if (podaci.status == "ok") {
                console.log('U redu je.');
                document.getElementById('podaci').innerHTML = '';
                let niz = podaci.data.location.edge_location_to_media.edges;
                for (let count = 0; count < niz.length; count++) {
                    let slika = document.createElement('img');
                    let div = document.createElement("div");
                    let textDiv = document.createElement('div');
                    let description = niz[count].node.edge_media_to_caption.edges;
                    if (description.length == 1) {
                        textDiv.innerHTML = description[0].node.text;
                    }
                    slika.className = "images";
                    div.className = "imgdiv";
                    textDiv.className = "topRight";
                    slika.setAttribute("src", niz[count].node.display_url);
                    div.appendChild(slika);
                    div.appendChild(textDiv);
                    document.getElementById('podaci').appendChild(div);
                }
            } else {
                document.getElementById('podaci').innerHTML = 'Doslo je do greske.';
            }

        })
        .catch(error => {
            document.getElementById('podaci').innerHTML = 'Doslo je do greske.';
        });

}

function ucitajLondon() {
    fetch('https://www.instagram.com/graphql/query/?query_id=17865274345132052&id=546221062123305&first=10')
        .then(result => result.json())
        .then(podaci => {
            if (podaci.status == "ok") {
                console.log('U redu je.');
                document.getElementById('podaci').innerHTML = '';
                let niz = podaci.data.location.edge_location_to_media.edges;
                for (let count = 0; count < niz.length; count++) {
                    let slika = document.createElement('img');
                    let div = document.createElement("div");
                    let textDiv = document.createElement('div');
                    let description = niz[count].node.edge_media_to_caption.edges;
                    if (description.length == 1) {
                        textDiv.innerHTML = description[0].node.text;
                    }
                    slika.className = "images";
                    div.className = "imgdiv";
                    textDiv.className = "topRight";
                    slika.setAttribute("src", niz[count].node.display_url);
                    div.appendChild(slika);
                    div.appendChild(textDiv);
                    document.getElementById('podaci').appendChild(div);
                }

            } else {
                document.getElementById('podaci').innerHTML = 'Doslo je do greske 2.';
            }

        })
        .catch(error => {
            document.getElementById('podaci').innerHTML = 'Doslo je do greske.';
        });

}

function ucitajOpstinuLjubinje() {
    fetch('https://www.instagram.com/graphql/query/?query_id=17865274345132052&id=726445577486579&first=10')
        .then(result => result.json())
        .then(podaci => {
            if (podaci.status == "ok") {
                console.log('U redu je.');
                document.getElementById('podaci').innerHTML = '';
                let niz = podaci.data.location.edge_location_to_media.edges;
                for (let count = 0; count < niz.length; count++) {
                    let slika = document.createElement('img');
                    let div = document.createElement("div");
                    let textDiv = document.createElement('div');
                    let description = niz[count].node.edge_media_to_caption.edges;
                    if (description.length == 1) {
                        textDiv.innerHTML = description[0].node.text;
                    }
                    slika.className = "images";
                    div.className = "imgdiv";
                    textDiv.className = "topRight";
                    slika.setAttribute("src", niz[count].node.display_url);
                    div.appendChild(slika);
                    div.appendChild(textDiv);
                    document.getElementById('podaci').appendChild(div);
                }

            } else {
                document.getElementById('podaci').innerHTML = 'Doslo je do greske.';
            }

        })
        .catch(error => {
            document.getElementById('podaci').innerHTML = 'Doslo je do greske catch.';
        });

}

function ucitajBarnose() {
    fetch('https://www.instagram.com/graphql/query/?query_id=17865274345132052&id=976258775&first=10')
        .then(result => result.json())
        .then(podaci => {
            if (podaci.status == "ok") {
                console.log('U redu je.');
                document.getElementById('podaci').innerHTML = '';
                let niz = podaci.data.location.edge_location_to_media.edges;
                for (let count = 0; count < niz.length; count++) {
                    let slika = document.createElement('img');
                    let div = document.createElement("div");
                    let textDiv = document.createElement('div');
                    let description = niz[count].node.edge_media_to_caption.edges;
                    if (description.length == 1) {
                        textDiv.innerHTML = description[0].node.text;
                    }
                    slika.className = "images";
                    div.className = "imgdiv";
                    textDiv.className = "topRight";
                    slika.setAttribute("src", niz[count].node.display_url);
                    div.appendChild(slika);
                    div.appendChild(textDiv);
                    document.getElementById('podaci').appendChild(div);
                }

            } else {
                document.getElementById('podaci').innerHTML = 'Doslo je do greske.';
            }

        })
        .catch(error => {
            document.getElementById('podaci').innerHTML = 'Doslo je do greske.';
        });

}

function ucitajLondonUnitedKingdom() {
    fetch('https://www.instagram.com/graphql/query/?query_id=17865274345132052&id=213385402&first=10')
        .then(result => result.json())
        .then(podaci => {
            if (podaci.status == "ok") {
                console.log('U redu je.');
                document.getElementById('podaci').innerHTML = '';
                let niz = podaci.data.location.edge_location_to_media.edges;
                for (let count = 0; count < niz.length; count++) {
                    let slika = document.createElement('img');
                    let div = document.createElement("div");
                    let textDiv = document.createElement('div');
                    let description = niz[count].node.edge_media_to_caption.edges;
                    if (description.length == 1) {
                        textDiv.innerHTML = description[0].node.text;
                    }
                    slika.className = "images";
                    div.className = "imgdiv";
                    textDiv.className = "topRight";
                    slika.setAttribute("src", niz[count].node.display_url);
                    div.appendChild(slika);
                    div.appendChild(textDiv);
                    document.getElementById('podaci').appendChild(div);
                }

            } else {
                document.getElementById('podaci').innerHTML = 'Doslo je do greske.';
            }

        })
        .catch(error => {
            document.getElementById('podaci').innerHTML = 'Doslo je do greske.';
        });
    }

function ucitajBigBen() {
    fetch('https://www.instagram.com/graphql/query/?query_id=17865274345132052&id=1265760730152445&first=10')
        .then(result => result.json())
        .then(podaci => {
            if (podaci.status == "ok") {
                console.log('U redu je.');
                document.getElementById('podaci').innerHTML = '';
                let niz = podaci.data.location.edge_location_to_media.edges;
                for (let count = 0; count < niz.length; count++) {
                    let slika = document.createElement('img');
                    let div = document.createElement("div");
                    let textDiv = document.createElement('div');
                    let description = niz[count].node.edge_media_to_caption.edges;
                    if (description.length == 1) {
                        textDiv.innerHTML = description[0].node.text;
                    }
                    slika.className = "images";
                    div.className = "imgdiv";
                    textDiv.className = "topRight";
                    slika.setAttribute("src", niz[count].node.display_url);
                    div.appendChild(slika);
                    div.appendChild(textDiv);
                    document.getElementById('podaci').appendChild(div);
                }

            } else {
                document.getElementById('podaci').innerHTML = 'Doslo je do greske.';
            }

        })
        .catch(error => {
            document.getElementById('podaci').innerHTML = 'Doslo je do greske.';
        });
}

function ucitajLondonEye() {
    fetch('https://www.instagram.com/graphql/query/?query_id=17865274345132052&id=8562373&first=10')
        .then(result => result.json())
        .then(podaci => {
            if (podaci.status == "ok") {
                console.log('U redu je.');
                document.getElementById('podaci').innerHTML = '';
                let niz = podaci.data.location.edge_location_to_media.edges;
                for (let count = 0; count < niz.length; count++) {
                    let slika = document.createElement('img');
                    let div = document.createElement("div");
                    let textDiv = document.createElement('div');
                    let description = niz[count].node.edge_media_to_caption.edges;
                    if (description.length == 1) {
                        textDiv.innerHTML = description[0].node.text;
                    }
                    slika.className = "images";
                    div.className = "imgdiv";
                    textDiv.className = "topRight";
                    slika.setAttribute("src", niz[count].node.display_url);
                    div.appendChild(slika);
                    div.appendChild(textDiv);
                    document.getElementById('podaci').appendChild(div);
                }

            } else {
                document.getElementById('podaci').innerHTML = 'Doslo je do greske.';
            }

        })
        .catch(error => {
            document.getElementById('podaci').innerHTML = 'Doslo je do greske.';
        });
}

function ucitajTowerBridge() {
    fetch('https://www.instagram.com/graphql/query/?query_id=17865274345132052&id=35413&first=10')
        .then(result => result.json())
        .then(podaci => {
            if (podaci.status == "ok") {
                console.log('U redu je.');
                document.getElementById('podaci').innerHTML = '';
                let niz = podaci.data.location.edge_location_to_media.edges;
                for (let count = 0; count < niz.length; count++) {
                    let slika = document.createElement('img');
                    let div = document.createElement("div");
                    let textDiv = document.createElement('div');
                    let description = niz[count].node.edge_media_to_caption.edges;
                    if (description.length == 1) {
                        textDiv.innerHTML = description[0].node.text;
                    }
                    slika.className = "images";
                    div.className = "imgdiv";
                    textDiv.className = "topRight";
                    slika.setAttribute("src", niz[count].node.display_url);
                    div.appendChild(slika);
                    div.appendChild(textDiv);
                    document.getElementById('podaci').appendChild(div);
                }

            } else {
                document.getElementById('podaci').innerHTML = 'Doslo je do greske.';
            }

        })
        .catch(error => {
            document.getElementById('podaci').innerHTML = 'Doslo je do greske.';
        });
}