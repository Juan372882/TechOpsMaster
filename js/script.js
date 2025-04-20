/* ========================== typing animation ========================== */
var typed = new Typed(".typing",{
    strings:["","Web Developer","Web Designer","Mobile Developer","Coder"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/* ========================== Aside ========================== */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            removeBackSection();
            for(let j=0; j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                    // allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 1200)
            {
                asideSectionTogglerBtn();
            }
        })
    }
    function removeBackSection()
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }
    }
    function addBackSection(num)
    {
        allSection[num].classList.add("back-section");
    }
    function showSection(element)
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element)
    {
        for(let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active");
                const target = element.getAttribute("href").split("#")[1];
                if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
                {
                    navList[i].querySelector("a").classList.add("active");
                }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex)
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
    const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () =>
    {
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn()
    {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++ )
        {
            allSection[i].classList.toggle("open");
        }
    }

/* ========================== Gallery Animation ========================== */
  const images = Array.from(document.querySelectorAll('.portfolio-image'));
  const modal = document.getElementById('galleryModal');
  const modalImg = document.getElementById('galleryImg');
  let currentIndex = 0;

  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      openGallery(index);
    });
  });

  function openGallery(index) {
    currentIndex = index;
    modal.classList.add('active');
    modalImg.src = images[currentIndex].src;
  }

  function closeGallery() {
    modal.classList.remove('active');
  }

  function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    modalImg.src = images[currentIndex].src;
  }

  // Cerrar con tecla ESC
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
  });

/* ========================== Mobile Animation ========================== */
  // Variables para swipe
  let startX = 0;
  let endX = 0;

  modal.addEventListener('touchstart', (e) => {
    startX = e.changedTouches[0].screenX;
  });

  modal.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const threshold = 50; // sensibilidad mínima para detectar swipe

    if (endX - startX > threshold) {
      changeImage(-1); // swipe a la derecha → imagen anterior
    } else if (startX - endX > threshold) {
      changeImage(1); // swipe a la izquierda → imagen siguiente
    }
  }