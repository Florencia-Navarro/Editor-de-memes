const $ = (selector) => document.querySelector(selector)

const initializeProject = () => {
    $("#background-color__meme").value = "#ffffff"
    $("#top-text").value = "TOP TEXT"
    $("#bottom-text").value = "BOTTOM TEXT"
    $("#font-size").value = "40"
    $("#background-color__label").innerText = "#FFFFFF"
    $("#font-color__label").innerText = "#000000"
    $("#background-color__text__label").innerText = "#FFFFFF"
    $("#background-color__text").value = "#ffffff"
    $("#brightness-filter").value = "1"
    $("#opacity-filter").value = "1"
    $("#contrast-filter").value = "100"
    $("#blur-filter").value = "0"
    $("#grayscale-filter").value = "0"
    $("#sepia-filter").value = "0"
    $("#hue-rotate-filter").value = "0"
    $("#saturate-filter").value = "100"
    $("#invert-filter").value = "0"
    $("#spacing").value = "17"
    $("#font__select").value = "Impact"
    $("#line-height").value = "1.2"
    $("#back__blend-mode").value = "unset"
}

initializeProject()

window.addEventListener("load", initializeProject)


/* ----------DARK AND LIGHT THEME---------- */


$("#dark-theme__btn").addEventListener("click", () => {
    $("#dark-theme__btn").classList.add("hidden")
    $("#light-theme__btn").classList.remove("hidden")
    $("body").setAttribute("data-theme", "ligth-theme")
    }
)

$("#light-theme__btn").addEventListener("click", () => {
    $("#dark-theme__btn").classList.remove("hidden")
    $("#light-theme__btn").classList.add("hidden")
    $("body").removeAttribute("data-theme", "ligth-theme")
    }
)

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

/* ----------IMAGE SETTINGS---------- */


/* ----------URL---------- */

$("#url").addEventListener("input", () => {
    $(".meme__img").style.backgroundImage = `url(${$("#url").value})`
    }
)

/* ----------BACKGROUND-COLOR---------- */

$("#background-color__meme").addEventListener("input", () => {
    $(".meme__img").style.backgroundColor = $("#background-color__meme").value
    $("#background-color__label").innerText = $("#background-color__meme").value 
    }
)

/* -----------BACKGROUND-BLEND-MODE----------- */

$("#back__blend-mode").addEventListener("input", () => {
    $(".meme__img").style.backgroundBlendMode = $("#back__blend-mode").value
    }
)

/* ***************FILTERS*************** */

const memeFilters = () => {
    $(".meme__img").style.filter = `brightness(${$("#brightness-filter").value})opacity(${$("#opacity-filter").value})contrast(${$("#contrast-filter").value}%)blur(${$("#blur-filter").value}px)grayscale(${$("#grayscale-filter").value}%)sepia(${$("#sepia-filter").value}%)hue-rotate(${$("#hue-rotate-filter").value}deg)saturate(${$("#saturate-filter").value}%)invert(${$("#invert-filter").value})`
}


/* ----------BRIGHTNESS---------- */

$("#brightness-filter").addEventListener("input", memeFilters)

/* ----------OPACITY---------- */

$("#opacity-filter").addEventListener("input", memeFilters)

/* ----------CONTRAST---------- */

$("#contrast-filter").addEventListener("input", memeFilters)

/* ----------BLUR---------- */

$("#blur-filter").addEventListener("input", memeFilters)

/* ----------GRAYSCALE---------- */

$("#grayscale-filter").addEventListener("input", memeFilters)

/* ----------SEPIA---------- */

$("#sepia-filter").addEventListener("input", memeFilters)

/* ----------HUE-ROTATE---------- */

$("#hue-rotate-filter").addEventListener("input", memeFilters)

/* ----------SATURATE---------- */

$("#saturate-filter").addEventListener("input", memeFilters)

/* ----------INVERT---------- */

$("#invert-filter").addEventListener("input", memeFilters)

const resetFilters = () => {
    $(".meme__img").style.filter = "brightness(1)"
    $("#brightness-filter").value = "1"
    $(".meme__img").style.filter ="opacity(1)"
    $("#opacity-filter").value = "1"
    $(".meme__img").style.filter = "contrast(100%)"
    $("#contrast-filter").value = "100"
    $(".meme__img").style.filter = "blur(0px)"
    $("#blur-filter").value = "0"
    $(".meme__img").style.filter = "grayscale(0%)"
    $("#grayscale-filter").value = "0"
    $(".meme__img").style.filter = "sepia(0%)"
    $("#sepia-filter").value = "0"
    $(".meme__img").style.filter = "hue-rotate(0deg)"
    $("#hue-rotate-filter").value = "0"
    $(".meme__img").style.filter = "saturate(100%)"
    $("#saturate-filter").value = "100"
    $(".meme__img").style.filter = "invert(0)"
    $("#invert-filter").value = "0"
}

$(".reset-btn").addEventListener("click", resetFilters)

/* ************************************** */

/* ----------TEXT SETTINGS---------- */


/* ----------TOP TEXT---------- */

$("#top-text").addEventListener("input", () => {
    $(".meme__top-tex").innerText = $("#top-text").value
    }
)

/* ------NO- TOP TEXT ------*/

$("#no-top-text").addEventListener("input", () => {    
    if ($("#no-top-text").checked){
        $(".meme__tex__top-cont").classList.add("hidden")
    } else {
        $(".meme__tex__top-cont").classList.remove("hidden")   
    }
    }
)

/* ----------BOTTOM TEXT---------- */

$("#bottom-text").addEventListener("input", () => {
    $(".meme__botton-tex").innerText = $("#bottom-text").value
    }
)

/* -------NO- BOTTOM TEXT------ */

$("#no-bottom-text").addEventListener("input", () => {    
    if ($("#no-bottom-text").checked){
        $(".meme__tex__bottom-cont").classList.add("hidden")
    } else {
        $(".meme__tex__bottom-cont").classList.remove("hidden")    
    }
    }
)

/* ----------FONT FAMILY---------- */

$("#font__select").addEventListener("input", () => {
    $(".meme__top-tex").style.fontFamily = $("#font__select").value
    $(".meme__botton-tex").style.fontFamily = $("#font__select").value
    }
)

/* ----------FONT-SIZE---------- */

$("#font-size").addEventListener("input", () => {
    $(".meme__top-tex").style.fontSize = `${$("#font-size").value}px`
    $(".meme__botton-tex").style.fontSize = `${$("#font-size").value}px`
    }
)

/* ----Align left---- */

$("#aling__left-btn").addEventListener("click", () => {
    $(".meme__top-tex").style.textAlign = "left"
    $(".meme__botton-tex").style.textAlign = "left"
    }
)

/* -----Align center----- */

$("#aling__center-btn").addEventListener("click", () => {
    $(".meme__top-tex").style.textAlign = "center"
    $(".meme__botton-tex").style.textAlign = "center"
    }
)

/* ----Align right----- */

$("#aling__right-btn").addEventListener("click", () => {
    $(".meme__top-tex").style.textAlign = "right"
    $(".meme__botton-tex").style.textAlign = "right"
    }
)

/* ---------- FONT-COLOR----------*/

$("#font-color").addEventListener("input", () => {
    $(".meme__top-tex").style.color = $("#font-color").value
    $(".meme__botton-tex").style.color = $("#font-color").value
    $("#font-color__label").innerText = $("#font-color").value
    }
)

/* ----------BACKGROUND-COLOR__FONT ----------*/

$("#background-color__text").addEventListener("input", () => {
    $("#meme__top-text").style.backgroundColor = $("#background-color__text").value
    $("#meme__bottom-text").style.backgroundColor = $("#background-color__text").value
    $("#background-color__text__label").innerText = $("#background-color__text").value
    }
)

/* ----------BACKGROUND TRANSPARENT--------- */

$("#background-transparent").addEventListener("input", ()=> {
    if($("#background-transparent").checked){
    $(".meme__tex__bottom-cont").classList.add("bottom-text-transparent")
    $(".meme__tex__top-cont").classList.add("top-text-transparent")
    } else { $(".meme__tex__bottom-cont").classList.remove("bottom-text-transparent")
    $(".meme__tex__top-cont").classList.remove("top-text-transparent")
    }
    }
)

/* -----OUTLINE----- */

/*  ----Outline-none------ */

$("#border__none").addEventListener("click", () => {
    $(".meme__top-tex").classList.remove("stroke-light")
    $(".meme__top-tex").classList.remove("stroke-dark")
    $(".meme__botton-tex").classList.remove("stroke-dark")
    $(".meme__botton-tex").classList.remove("stroke-light")
    }
)

/* ----Outline-light------ */

$("#border__light").addEventListener("click", () => {
    $(".meme__top-tex").classList.add("stroke-light")
    $(".meme__botton-tex").classList.add("stroke-light")
    $(".meme__top-tex").classList.remove("stroke-dark")
    $(".meme__botton-tex").classList.remove("stroke-dark")
    }
)

/* -----Outline-dark----- */

$("#border__dark").addEventListener("click", () => {
    $(".meme__top-tex").classList.add("stroke-dark")
    $(".meme__botton-tex").classList.add("stroke-dark")
    $(".meme__top-tex").classList.remove("stroke-light")
    $(".meme__botton-tex").classList.remove("stroke-light")
    }
)

/* ----------SPACING----------- */

$("#spacing").addEventListener("input", () => {
    $(".meme__tex__top-cont").style.padding = `${$("#spacing").value}px`
    $(".meme__tex__bottom-cont").style.padding = `${$("#spacing").value}px`
    }
)

/* ----------LINE-HEIGHT---------- */

$("#line-height").addEventListener("input", () => {
    $(".meme__tex__top-cont").style.lineHeight = $("#line-height").value
    $(".meme__tex__bottom-cont").style.lineHeight = $("#line-height").value
    }
)

/* -----------DOWNLOAD MEME---------- */

const downloadMeme = () => {
    domtoimage.toBlob($('#meme-container')).then((blob) => {
        saveAs(blob, 'mi-meme.png')
      })
}

$("#download-btn").addEventListener('click', downloadMeme)

