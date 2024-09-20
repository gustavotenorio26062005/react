import React from 'react';
import "./Planetas.css"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Planetas() {
    return(
    <>
    <h1>Devil may cry</h1>
    <img src="https://www.adrenaline.com.br/wp-content/uploads/2023/09/devil-may-cry-3-special-edition-capa-310x310.webp" alt="" srcset="" />
    </>
    )
}
/*const descricao = "Vergil é um personagem fictício da série de videojogos Devil May Cry criada e publicada pela Capcom; introduzido no primeiro Devil May Cry em 2001 como um dos filhos híbridos do cavaleiro demónio Sparda e também chefe de nome Nero Angelo."
const desc = {
    tipo: 'hack and slash',
    lancado: '2001',
    feito: 'Hideki Kamiya'
}*/
export function Terra({desc,descricao}) {

    return(
        <>
            <h2>Vergil</h2>
            <p>Feito por {desc.feito} Lançado em {desc.lancado} um jogo {desc.tipo}</p>
            <p className="text-center">{descricao}</p>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel"/>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" />
            <div class="carousel-inner">
                <div className="carousel-item active">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyStQPmD_Mi7pP11v10v5VdMTZA6U6vqvPe-Cf-EtN4GQimArLxaaKN5ix_RYKIri6puGacbYOMKD9n3MNWdEUYzdjhRJQpOBBQucLYqeLU9r34evvlKGkpC04Grez9xZKmv-LwT121YE/s1600/Vergil.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://store-images.s-microsoft.com/image/apps.34922.13883884071125451.e7212451-a97c-482e-bed4-8f193b79fa8c.ea2e3847-09ca-4bf5-98d9-fc88980516e0?q=90&w=480&h=270" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZtQ53AQdTMzC-GXhRuFqfixP69MeHWrJvDA&s" className="d-block w-100" alt="..."/>
                </div>
            </div>
        </>
    )
}