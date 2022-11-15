document.addEventListener("DOMContentLoaded", function() {
   document.querySelector("#loader").style.display = "none";
   const url = "https://www.randyconnolly.com/funwebdev/3rd/api/colors/sample-colors.php";
   fetch(url)
   .then(resp => resp.json())
   .then(data => {
      localStorage.setItem("items", JSON.stringify(data))
      paints = JSON.parse(localStorage.getItem("items"))
      const article = document.querySelector(".scheme-group")
      for(let p of paints){
         const title = document.createElement("h3");
         title.textContent = p.title;
         article.appendChild(title)
         title.setAttribute("dataset-id",p.id)

         const section = document.createElement("section")
         section.classList.add("scheme")

         const preview = document.createElement("div")
         preview.classList.add("preview")
         

         for(let s of p.scheme){
            const colorBox1 = document.createElement("div")
            colorBox1.classList.add("color-box")
            colorBox1.style.backgroundColor = `rgb(${s.color.red},${s.color.green},${s.color.blue})`;
            preview.appendChild(colorBox1)
            
         }

         section.appendChild(preview)
         const divBtn = document.createElement("div")
         divBtn.classList.add("actions")
         const btn = document.createElement("button")
         btn.setAttribute("data-id", p.id)
         btn.textContent = "View"
         divBtn.appendChild(btn)
         section.appendChild(divBtn)
         
         article.appendChild(section)

         divBtn.addEventListener("click", function(){
            const fieldset = document.querySelector("aside fieldset")
            fieldset.innerHTML = ""
            for(let s of p.scheme){
            const h2 = document.querySelector("aside h2");
            h2.textContent = p.title;

            
            
            const divRow = document.createElement("div")
            divRow.classList.add("colorRow")
            const divDetail = document.createElement("div")
            divDetail.classList.add("detailBox")
            divDetail.style.backgroundColor = `rgb(${s.color.red},${s.color.green},${s.color.blue})`;

            const span1 = document.createElement("span")
            span1.textContent = s.web;

            const span2 = document.createElement("span")
            span2.textContent = `rgb(${s.color.red},${s.color.green},${s.color.blue})`;

            const label = document.createElement("label")
            label.textContent = s.name;


            divRow.appendChild(divDetail)
            divRow.appendChild(span1)
            divRow.appendChild(span2)
            divRow.appendChild(label)
            fieldset.appendChild(divRow)
         }
         })

      }
   })
});



 
