import { Link } from "react-router-dom"

const PortfolioDetail = () => {
    return (
        <main className="main">

            <div className="page-title" data-aos="fade">
                <div className="container">
                    <nav className="breadcrumbs">
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li className="current">Portfolio Details</li>
                        </ol>
                    </nav>
                    <h1>Portfolio Details</h1>
                </div>
            </div>

            <section id="portfolio-details" className="portfolio-details section">
                <div className="container" data-aos="fade-up">


                    <div className="row justify-content-between gy-4 mt-4">

                        <div className="col-lg-12" data-aos="fade-up">
                            <div className="portfolio-description">
                                <h2>WILL BE ADDED SOON</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis velit et illum ipsum, sunt maiores distinctio. Dolorem, autem officia? Optio dolore voluptatum cum. Explicabo molestias hic nobis velit exercitationem recusandae!</p>

                            </div>
                        </div>



                    </div>



                </div>
            </section>

        </main>
    )
}

export default PortfolioDetail