const $ = (selector) => document.querySelector(selector)

const initializeProject = () => {
    $("#top-text").value = "TOP TEXT"
    $("#bottom-text").value = "BOTTOM TEXT"
    $("#font-size").value = "40"
    $("#background-color__label").innerText = "#FFFFFF"
    $("#font-color__label").innerText = "#000000"
    $("#background-color__text__label").innerText = "#FFFFFF"
    $("#brightness-filter").value = "1"
    $("#opacity-filter").value = "1"
    $("#contrast-filter").value = "100"
    $("#blur-filter").value = "0"
}

initializeProject()

window.addEventListener("load", initializeProject)


/* ----------DARK AND LIGHT THEME---------- */


$("#dark-theme__btn").addEventListener("click", () => {
    if($("body").getAttribute("data-theme")){
        $("#dark-theme__btn").classList.remove("hidden")
        $("#light-theme__btn").classList.add("hidden")
        $("body").removeAttribute("data-theme", "ligth-theme")
    } else {
        $("#dark-theme__btn").classList.add("hidden")
        $("#light-theme__btn").classList.remove("hidden")
        $("body").setAttribute("data-theme", "ligth-theme")
    }
})

/* ----------OPEN AND CLOSE SETTINGS MENU---------- */

 
 $("#img-btn").addEventListener("click", () => {
    $("#img__settings").classList.remove("hidden")
    }   
)

$("#text-btn").addEventListener("click", () => {
    $("#text__settings").classList.remove("hidden")
    }  
    )
$("#text-btn").addEventListener("click", () => {
    $("#img__settings").classList.add("hidden")
}  
)
$("#img-btn").addEventListener("click", () => {
    $("#text__settings").classList.add("hidden")
}   
) 
$("#img__settings-close").addEventListener("click", () => {
   $("#img__settings").classList.add("hidden")
   }   
) 
$("#text__setting-close").addEventListener("click", () => {
   $("#text__settings").classList.add("hidden")
   }   
) 

/* ----------URL---------- */

$("#url").addEventListener("input", () => {
    
   // $(".meme__img-img").setAttribute("src", $("#url").value)
   $(".meme__img").style.backgroundImage = `url(${$("#url").value})`
})

/* ----------BACKGROUND-COLOR---------- */

$("#background-color__meme").addEventListener("input", () => {
    $(".meme__img").style.backgroundColor = $("#background-color__meme").value
    $("#background-color__label").innerText = $("#background-color__meme").value 

})

/* ***************FILTERS*************** */

const memeFilters = () => {
    $(".meme__img").style.filter = `brightness(${$("#brightness-filter").value})opacity(${$("#opacity-filter").value})contrast(${$("#contrast-filter").value}%)blur(${$("#blur-filter").value}px)`
}

/* ----------BRIGHTNESS---------- */

/* $("#brightness-filter").addEventListener("input", () => {
    $(".meme__img").style.filter = `brightness(${$("#brightness-filter").value})`
})      -don´t work-
*/

/* ----------OPACITY---------- */

/* $("#opacity-filter").addEventListener("input", () => {
    $(".meme__img").style.filter = `opacity(${$("#opacity-filter").value})`
})      -don´t work-
 */
/* ----------CONTRAST---------- */

/* $("#contrast-filter").addEventListener("input", () => {
    $(".meme__img").style.filter = `contrast(${$("#contrast-filter").value}%)`
})      -don´t work- 
*/

/* ************************************** */
/* ----------TOP TEXT---------- */

$("#top-text").addEventListener("input", () => {
    $(".meme__top-tex").innerText = $("#top-text").value
})

/* ----------BOTTOM TEXT---------- */

$("#bottom-text").addEventListener("input", () => {
    $(".meme__botton-tex").innerText = $("#bottom-text").value
})

/* ----------FONT-SIZE---------- */

$("#font-size").addEventListener("input", () => {
    $(".meme__top-tex").style.fontSize = `${$("#font-size").value}px`
    $(".meme__botton-tex").style.fontSize = `${$("#font-size").value}px`
})

/* ---------- FONT-COLOR----------*/

$("#font-color").addEventListener("input", () => {
    $(".meme__top-tex").style.color = $("#font-color").value
    $(".meme__botton-tex").style.color = $("#font-color").value
    $("#font-color__label").innerText = $("#font-color").value

})

/* ----------BACKGROUND-COLOR__FONT ----------*/

$("#background-color__text").addEventListener("input", () => {
    $("#meme__top-text").style.backgroundColor = $("#background-color__text").value
    $("#meme__bottom-text").style.backgroundColor = $("#background-color__text").value
    $("#background-color__text__label").innerText = $("#background-color__text").value

})