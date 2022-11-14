document.addEventListener("DOMContentLoaded", function() {

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
         
         
         const colorBox1 = document.createElement("div")
         colorBox1.classList.add("color-box")
         const colorBox2 = document.createElement("div")
         colorBox2.classList.add("color-box")
         const colorBox3 = document.createElement("div")
         colorBox3.classList.add("color-box")
         const colorBox4 = document.createElement("div")
         colorBox4.classList.add("color-box")
         const colorBox5 = document.createElement("div")
         colorBox5.classList.add("color-box")
         for(let s of p.scheme){
            //colorBox1.style.color = `rgb(${s.color.red},${s.color.green},${s.color.blue})`;
            colorBox1.style.backgroundColor = `rgb(${s.color.red},${s.color.green},${s.color.blue})`;
            preview.appendChild(colorBox1)
         }
         
         
         article.appendChild(preview)

      }
   })
});
//document.querySelector("#loader").style.display = "none";


 
