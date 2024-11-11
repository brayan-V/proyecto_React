const Footer = () =>{
    return(
        <footer className="bg-dark text-white mt-5 p-4 text-center">
        <div className="container">
            <p>&copy; 2024 Digital Dreams. Todos los derechos reservados.</p>
            <div>
                <a className="btn text-white" data-mdb-ripple-init style={{backgroundColor: '#3b5998'}} href="#!" role="button">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn text-white" data-mdb-ripple-init style={{backgroundColor: '#dd4b39'}} href="#!" role="button">
                <i className="fab fa-google"></i>
                </a>
                <a className="btn text-white" data-mdb-ripple-init style={{backgroundColor: '#ac2bac'}} href="#!" role="button">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
            <p>
                <a href="#" className="text-white">Política de Privacidad</a> | 
                <a href="#" className="text-white">Términos de Servicio</a>
            </p>
        </div>
    </footer>
    );
};

export default Footer;