const headerP = 
`
        <header class="header">

            <h3 class="title">CATEDRAS <br>PRIETO <br>SILVA</h3>
            <DIV class="menu">

                <a href="index.html">Inicio </a>
                |
                <a href="#"> Libros </a>
                |
                <a href="#"> Catedras </a>
                |
                <a href="#"> Contacto</a>


            </DIV>
        </header>

       
            
                
                <div class = "catedra">
                    <h4 class="cat_text">
                    
                        DERECHO ECOLÓGICO
                    
                    </h4>

                    <a class="mas" href="#">¡Más!</a>
                </div>

                <div class="descripcion">
                    <p>

                    Esta disciplina ha evolucionado en la región hacia el reconocimiento de la naturaleza como sujeto de derecho. Países como Bolivia y Ecuador han incorporado los Derechos de la Naturaleza en sus constituciones, permitiendo que elementos naturales (como ríos o bosques) sean representados legalmente para exigir su conservación.
                    <br>
                    <br>
                    <br>
                    En Venezuela, el marco jurídico está liderado por la Ley Orgánica del Ambiente. Esta norma consagra el derecho individual y colectivo a disfrutar de un ambiente seguro, sano y ecológicamente equilibrado. 
                    </p>
                </div>

              
            
        
`;

const footerP=
`
    <div class = information>
        Copyright © 2026 [ipf-Prieto Figueroa & Asociados]. Reservados todos los derechos.
    </div>


`;

const carrusel_lib=
`
    <div class="titulo" ><p>obtén Mis Libros Publicados</p></div>
            
            <button class="boton-carrusel anterior" onclick="desplazar(-1)">&#10094;</button>
            <button class="boton-carrusel siguiente" onclick="desplazar(1)">&#10095;</button>

            <div class="cont-carrusel">
                <nav class="libros" id="libro">

                    <!-- l: es una clase cuya unica funcion es de servir
                    como referencia para cada libro en el js-->  

                    <a href="#" class="l">
                        <div><img src="../imagenes/Derecho Ecologico.jpg"></div>
                        <h4>Derecho y Economía del Ambiente</h4>
                        <h3 class="precio">US$  35</h3>
                    
                    </a>
                    <a href="#" class="l">
                    
                        <div>
                            <img src="../imagenes/DerechoyJusticiaMil.jpg">
                        </div>
                        <h4>Derecho y Justicia Militar en Venezuela</h4>
                        <h3 class="precio">US$  25</h3>


                    </a>
                    <a href="#" class="l">
                        <div>
                            <img src="../imagenes/Educacion para la Paz.jpg" alt="">
                        </div>
                        <h2>Guerra por la Paz - Tomo I</h2>
                        <h2>Educación Para La Paz</h2>

                        <h3 class="precio">US$  25</h3>


                    </a>
                    <a href="#" class="l">
                        <div>
                            <img src="../imagenes/Nomenclatura de Guerra.jpg">
                        </div>
                        <h2>Guerra por la Paz - Tomo II</h2>
                        <h2>Nomenclatura de Guerra</h2>

                        <h3 class="precio">US$  25</h3>


                    </a>

                    <a href="#" class="l">
                        <div>
                            <img src="../imagenes/Conflictos y Guerras del Siglo XX.jpg">
                        </div>
                        <h2>Guerra por la Paz - Tomo III</h2>
                        <h2>Conflictos y Guerra del Siglo XX</h2>

                        <h3 class="precio">US$  50</h3>
                    </a>

                    <a href="#" class="l">
                        
                        <div>
                            <img src="../imagenes/Venezuela pais Dorado.jpg" alt="">
                        </div>
                        <h4>Venezuela Pais Dorado del Caribe y la Amazonía</h4>

                        <h3 class="precio">US$  85</h3>
                    </a>
                    
                    
                    
                    </nav>
            </div>

`