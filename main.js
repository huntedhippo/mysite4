// create object


let temp = {
    f:72,
    c: function () {
        return Math.round((this.f - 32) * 5 / 9)
    }
}

function warmer() {
    temp.f++;
    update()
}

function cooler() {
    temp.f--;
    update()
}
// initialise dashboard

function update() {
    document.getElementById("F").innerHTML = temp.f + "&deg;F";
    document.getElementById("C").innerHTML = temp.c() + "&deg;C";
}

update();