// const container = document.querySelector(".container");
// const photo = ["Bootstrap.jpg"];
// const elem = ["grey","blue"];
// for(let i=0; i<100; i++){
// document.write(`<img class = "left-nav" src = "${photo[0]}"width = 50px height = 50px <br>`);

//  const elem =` document.createElement("div")<br>`;

// }



//    class nav {
//     nav = ["hello","boot"];
//     photo = ["Bootstrap.jpg"];

//    hello() {
//         return ("hello in class")
//     }
// }
//     const a = new nav;
//     document.write(`${a.hello()}<br>`);
//     document.write(`${a.nav}`);
//     document.write(`<img class = "left-nav" src = "${a.photo}" width = 50px height = 50px`);]





class Template {



    photo = ["Bootstrap.jpg"];
    text = ["dashboard", "charts", "tables", "components", "example pages", "menu levels", "links"];
    icon = ['<i class="fa-solid fa-gauge"></i>', `<i class="fa-solid fa-chart-simple"></i>`, `<i class="fa-solid fa-table"></i> `,
        `<i class="fa-solid fa-wrench"></i>`, `<i class="fa-regular fa-file"></i>`, `<i class="fa-regular fa-user"></i>`, `<i class="fa-solid fa-link"></i>`];

    sub = [`<i class="fa-solid fa-comments"></i>`, `<i class="fa-solid fa-people-arrows"></i>`, `<i class="fa-solid fa-cart-shopping"></i>`, `<i class="fa-solid fa-ticket"></i>`];
    fon = ["view details"];

    box = ["26 new message!", `<i class="fa-solid fa-comments"></i>`, "26 new talks!", `<i class="fa-solid fa-people-arrows"></i>`, "26 new orders!", `
            <i class="fa-solid fa-cart-shopping"></i>`, "26 new tickets!", `<i class="fa-solid fa-ticket"></i>`];
    bg1 = ["blue", "green"];


    hello(data) {

        return (`${this.photo} ${this.text} ${this.icon} ${this.sub} ${this.fon} ${this.box}`)
    }

}
    const a = new Template;
    
    // document.write(`${a.hello()}`)
    document.write(`<div class="container">
        <header>
            <div class="nav">
            <div class="left-nav">
            <img src = "${a.photo}"></div> 
            <div class="right-nav">

                    <i class="fa-solid fa-message fa"></i>
                    <i class="fa-solid fa-bell fa"></i>
            <div class="search">
            <div class="search1">
                <input type="text" placeholder="search">
            </div>
            <i class="fa-solid fa-search"></i>

            </div>
        
        <div class="log">
            <a href="#">logout</a>
        </div>
        </div>
        </div> </header>
            

            <div class="section">

                <div class="left-section">
                    <div class="side-nav">
        <div class="text"><i>${a.icon[0]}</i>
        <h3>${a.text[0]}</h3></div>
        <div class="text"><i>${a.icon[1]}</i>
        <h3>${a.text[1]}</h3></div>
        <div class="text"><i>${a.icon[2]}</i>
        <h3>${a.text[2]}</h3></div>
        <div class="text"><i>${a.icon[3]}</i>
        <h3>${a.text[3]}</h3></div>
        <div class="text"><i>${a.icon[4]}</i>
        <h3>${a.text[4]}</h3></div>
        <div class="text"><i>${a.icon[5]}</i>
        <h3>${a.text[5]}</h3></div> </div>
        </div>
        <div class="right-section">
                    <div class="dash"> <a href="#">dashboard / </a>
                    <input type="text" placeholder="my dashboard">
                </div>
                <div class="box">
                        <div class="box1 bg1">
                            <div class="sub-box1">

                            <p>${a.box[0]}</p>
                                
                                <i>${a.box[1]}</i>
                            </div>
                            <div class="fon"><a href="#">${a.fon}</a></div>
                        </div>
                        <div class="box1 bg2">
                            <div class="sub-box1 ">

                            <p>${a.box[2]}</p>
                                
                            <i>${a.box[3]}</i>
                            </div>
                            <div class="fon">
                                <a href="#">${a.fon}</a></div>
                        </div>

                        <div class="box1 bg3">
                            <div class="sub-box1">

                            <p>${a.box[4]}</p>
                                
                            <i>${a.box[5]}</i>
                            </div>
                            <div class="fon"><a href="#">${a.fon}</a></div>
                        </div>

                        <div class="box1 bg4">
                            <div class="sub-box1">
                            <p>${a.box[6]}</p>
                                
                            <i>${a.box[7]}</i>
                            </div>
                            <div class="fon"><a href="#">${a.fon}</a></div>
                        </div>
                    </div>
                    <div class="chart">
                    <div class="chart1">

                        <i class="fa-solid fa-chart-area"></i>
                        <h3>area chart example</h3>
                    </div>


                </div>
                <div class="graph">
                    <div class="graph1">

                        <p>4000</p>
                        <div class="line">
                            <hr>
                        </div>
                    </div>
                    <div class="graph1">
                        <p>3000</p>
                        <div class="line">
                            <hr>
                        </div>
                    </div>
                    <div class="graph1">
                        <p>2000</p>
                        <div class="line">
                            <hr>
                        </div>
                    </div>
                    <div class="graph1">
                        <p>1000</p>
                        <div class="line">
                            <hr>
                        </div>
                    </div>
                    <div class="graph1">
                        <p>0</p>
                        <div class="line1">
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

    </section>
</div>`);