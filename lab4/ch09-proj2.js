
document.addEventListener('DOMContentLoaded', (event) => {
    fetch("paintings.json")
    .then((response) => response.json())
    .then(function(data){
    const paintings = JSON.parse(JSON.stringify(data));
    const paintSec = document.querySelector("#paintings ul");
    for(let paint of paintings){
        li = document.createElement("li");
        const image = document.createElement('img');
        image.src = "/images/small/" + paint.id + ".jpg";
        
        li.dataset.id = paint.id;
        li.dataset.title = paint.title;
        li.dataset.artist = paint.artist;
        li.append(image);
        paintSec.appendChild(li);
    }
    const images = document.querySelectorAll("#paintings ul li");

    
    const parent = document.querySelector("section#paintings");
    parent.addEventListener("click", function(e){
        if(e.target && e.target.nodeName == "IMG"){
            let img = e.target;
            let picked = 0;
            const figure = document.querySelector("figure");
            const div = document.querySelector("div#summary");
            const h2 = document.querySelector("#title");
            const h3 = document.querySelector("#artist");
        
            // for(n of images){
            //     if(e.target.id == )
            // }
            figure.innerHTML = "";
            h2.innerHTML = "";
            h3.innerHTML = "";
            const image = document.createElement('img');
            let location = img.src;
            let find = 0;
            for(n of images){
                find = `http://127.0.0.1:5500/images/small/${n.dataset.id}.jpg`;
                h2.textContent = n.dataset.title;
                h3.textContent = n.dataset.artist;
                picked = n.dataset.id
                if(find === location)
                    {
                        break;
                    }
                }
            image.src = location.replace(/small/gi,"large");
            div.appendChild(h2);
            div.appendChild(h3);
            figure.appendChild(image);

            const paintings = JSON.parse(JSON.stringify(data));
            let calculation1 = 0;
            let calculation2 = 0;
            for(let p of paintings){
                if(picked == p.id){
                    for(let f of p.features){
                        const newDiv = document.createElement("div");
                        const description = document.querySelector("div#description");

                        newDiv.className = "box";
                        newDiv.style.position = "absolute";
                        newDiv.style.left = f.upperLeft[0] + "px";
                        newDiv.style.top = f.upperLeft[1] + "px";
                        calculation1 = f.lowerRight[0] - f.upperLeft[0];
                        newDiv.style.width = calculation1 + "px";
                        calculation2 = f.lowerRight[1] - f.upperLeft[1];
                        newDiv.style.height = calculation2 + "px";
                        newDiv.addEventListener("mouseover", function(e){
                            description.textContent = "";
                            description.textContent = f.description;
                        });
                        newDiv.addEventListener("mouseout", function(e){
                            description.textContent = "";
                        });
                        figure.appendChild(newDiv);
                        
                    }
                    
                }
            }

        }
    })
})
});
