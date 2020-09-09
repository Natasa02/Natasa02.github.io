function checkJMBG() {
    let jmbg = document.getElementById("jmbg").value;

    document.getElementById("printResult").innerHTML = "";
    document.getElementById("printResult").innerHTML = "printResult";


    if (jmbg.length == 13) {
        let i = 0;
        let numbers = false;
        while (i < jmbg.length) {
            if (jmbg.charCodeAt(i) > 47 && jmbg.charCodeAt(i) < 58) {
                numbers = true;
            } else {
                return print("trebaju biti brojevi");
            }
            i++;
        }
        if (numbers == true) {
            if (checkDateOfBirth(jmbg) == true) {
                if (checkControlNum(jmbg) == true) {
                    //To Do print: day, month and year
                    let day = jmbg.substring(0, 2);
                    let month = jmbg.substring(2, 4);
                    let year = jmbg.substring(4, 7);
                    document.getElementById("printResult").className = "printValidResult";
                    print("Your date of birth is:")
                    print("Day: " + day);
                    print("Month: " + month);
    
                    if (year.charAt(0) == 0) {
                        print("Year: 2" + year);
                    } else if (year.charAt(0) == 9) {
                        print("Year: 1" + year);
                    }
                    checkPol(jmbg);
                    checkRegion(jmbg);
                }else{
                    print("JMBG not valid");
                }

            } else {
                print("JMBG not valid");
            }
        }
    } else {
        print("JMBG not valid");
    }

    
    
    
}

function print(message) {
    let h3 = document.createElement("h3");
    h3.innerHTML = message;
    document.getElementById("printResult").appendChild(h3);
    
}

function checkDateOfBirth(jmbg) {
    let day = parseInt(jmbg.substring(0, 2));
    let month = jmbg.substring(2, 4);
    let year = jmbg.substring(4, 7);

    if (year.charAt(0) == "0" || year.charAt(0) == "9") {
        if (month <= 12) {
            // print(month);
            if (day <= 31) {
                // print(day);
                return true
            } else {
                return false;
            }
        } else {
            return false;
        }

    } else {
        return false;
    }

}


function checkRegion(jmbg) {

    let region = parseInt(jmbg.substring(7, 9));
    let stranciBezDrzSFRJ = {
        "01": "stranac u BiH", "02": "stranac u Crnoj Gori", "03": "stranac u Hrvatskoj", "04": "stranac u Makedoniji", "05": "stranac u Sloveniji",
         "06": "stranac u Srbiji (bez pokrajina)", "07": "stranac u Vojvodini", "08":"stranci na Kosovu i Metohiji"
    };
    let bih = {
        "10": "Banja Luka", "11": "Bihać", "12": "Doboj", "13": "Goražde", "14": "Livno", "15": "Mostar",
         "16": "Prijedor", "17": "Sarajevo", "18": "Tuzla", "19": "Zenica"
    };
    let cg = {
        "21": "Podgorica", "22": "Nikšić", "23": "Pljevlja"
    };
    let hr = {
        "30": "Osijek, Slavonija regija", "31": "Bjelovar, Virovitica, Koprivnica, Pakrac, Podravina regija", "32": "Varaždin, Međimurje regija",
        "33": "Zagreb", "34": "Karlovac", "35": "Gospić, Lika regija", "36": "Rijeka, Pula, Istra i Primorje regija", "37": "Sisak, Banovina regija",
        "38": "Split, Zadar, Dubrovnik, Dalmacija regija", "39": "ostalo"
    };
    let mak = {
        "41": "Bitolj", "42": "Kumanovo", "43": "Ohrid", "44": "Prilep", "45": "Skoplje", "46": "Strumica",
        "47": "Tetovo", "48": "Vales", "49": "Štip"

    };
    let sl = {
        "50": "Slovenija"
    };
    let cenSrb = {
        "71": "Beograd regija", "72": "Šumadija", "73": "Niš", "74": "Južna morava", "75": "Zaječar", "76": "Podunavlje",
        "77": "Podrinje i Kolubara", "78": "Kraljevo", "79": "Užice"
    };
    let voj = {
        "80": "Novi Sad", "81": "Sombor", "82": "Subotica", "83": "Zrenjanin", "84": "Pančevo",
         "85": "Kikinda", "86": "Ruma", "87": "Sremska Mitrovica"
    };
    let kim = {
        "91": "Priština", "92": "Kosovska Mitrovica", "93": "Peć", "94": "Đakovica", "95": "Prizren", "96": "Kosovko Pomoravski okrug"
    };
    if (region >= 1 && region <= 8) {
        print("You are born near " + stranciBezDrzSFRJ[region.toString()]);
    }else if(region >=10 && region <=19){
        print("You are born near " + bih[region.toString()]);
    }else if(region >= 21 && region <= 23){
        print("You are born near " + cg[region.toString()]);
    }else if(region >= 30 && region <= 39){
        print("You are born  near " + hr[region.toString()]);
    }else if(region >= 41 && region <= 49){
        print("You are born  near " + mak[region.toString()])
    }else if(region == 50){
        print("You are born near " + sl[region.toString()])
    }else if(region >= 71 && region <= 79){
        print("You are born near " + cenSrb[region.toString()])
    }else if(region >= 80 && region <= 87){
        print("You are born near " + voj[region.toString()])
    }else if(region >= 91 && region <= 96){
        print("You are born near " + kim[region.toString()])
    }else {
        print("Unknown location of birth");
    }
    // print("You are born near " + region);

}

function checkPol(jmbg) {
    let pol = parseInt(jmbg.substring(9, 12));
    if (pol >= 000 && pol <= 499) {
        print("You are man");
    } else if (pol >= 500 && pol <= 999) {
        print("You are woman");
    } else {}


    // } else {}
    // if (pol >= 500 && pol <= 999) {
    //     print("You are woman");
    // } else {}
}
//  11 - ((7*(2+2)+ 6* (9+1)+5*(0+5)+ 4*(9+7)+ 3*(0+7)+ 2*(0+2)) % 11)
function checkControlNum(jmbg) {
    // let controlNum = 11 - ((7 * (jmbg.charAt(0) + jmbg.charAt(6)) + 6 * (jmbg.charAt(1) +
    //     jmbg.charAt(7)) + 5 * (jmbg.charAt(2) + jmbg.charAt(8)) + 4 * (jmbg.charAt(3) +
    //     jmbg.charAt(9)) + 3 * (jmbg.charAt(4) + jmbg.charAt(10)) + 2 * (jmbg.charAt(5) +
    //     jmbg.charAt(11))) % 11);
    // print(controlNum);
    // print(11 - ((7 * (2 + 2) + 6 * (9 + 1) + 5 * (0 + 5) + 4 * (9 + 7) + 3 * (0 + 7) + 2 * (0 + 2)) % 11));

    // let a1 = parseInt(jmbg.charAt(0));
    // let b2 = parseInt(jmbg.charAt(1));
    // let c3 = parseInt(jmbg.charAt(2));
    // let d4 = parseInt(jmbg.charAt(3));
    // let e5 = parseInt(jmbg.charAt(4));
    // let f6 = parseInt(jmbg.charAt(5));
    // let g7 = parseInt(jmbg.charAt(6));
    // let h8 = parseInt(jmbg.charAt(7));
    // let i9 = parseInt(jmbg.charAt(8));
    // let j10 = parseInt(jmbg.charAt(9));
    // let k11 = parseInt(jmbg.charAt(10));
    // let l12 = parseInt(jmbg.charAt(11));
    let jmbgChars = [];
    
    for (let i = 0; i <= 12; i++) {
        jmbgChars.push(parseInt(jmbg.charAt(i)));
        
    }

    let controlNum = 11 - ((7 * (jmbgChars[0] + jmbgChars[6]) + 6 * (jmbgChars[1] + jmbgChars[7]) +
        5 * (jmbgChars[2] + jmbgChars[8]) + 4 * (jmbgChars[3] + jmbgChars[9]) + 3 * (jmbgChars[4] + jmbgChars[10]) + 
        2 * (jmbgChars[5] + jmbgChars[11])) % 11);

    if (controlNum > 9){
        controlNum = 0;
    }            
    if (controlNum == jmbgChars[12]) {
        return true;
    }else{
        return false;
    }

}