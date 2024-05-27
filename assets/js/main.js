//Codigo del carrusel de miembors del equipo

const multipleItemCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(min-width:576px)").matches) {
    var carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false,
        wrap: false
    });

    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();

    var scrollPosition = 0;

    $(".carousel-control-next").on("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
            scrollPosition = scrollPosition + cardWidth;
            $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
        }
    });
    $(".carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
            scrollPosition = scrollPosition - cardWidth;
            $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
        }
    });
} else {
    $(multipleItemCarousel).addClass("slide");
}

//Codigo para validar el inicio de sesión
//TODO: Modificar para que funcione con la barra de navegación e indique al usuario que ya está en su cuenta
if (new URLSearchParams(window.location.search).has('login')) {
    Swal.fire({
        icon: 'success',
        title: '¡Bienvenido!',
        text: 'Has iniciado sesión correctamente.',
    });
}