import './Home.css';

function Home()
{    
    return(
        <body>
            <div class="sidenav">
                <br /><br /><br /><br /><br /><br />
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#skills">Skills</a>
                <a href="#interest">Interest</a>
                <a href="#awards">Awards</a>
            </div>

            <div class="main">
                {/* Home */}
                <section id="home">
                    <div class="card">
                        <div class="card-header">
                            Halaman Home
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><b>HOME</b></h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a scelerisque ipsum. Suspendisse blandit diam a quam porttitor placerat.</p>
                            <br />
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a scelerisque ipsum. Suspendisse blandit diam a quam porttitor placerat.</p>
                            <br />
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a scelerisque ipsum. Suspendisse blandit diam a quam porttitor placerat.</p>
                            <br /><br />
                            <a href="/" class="btn btn-primary btn-lg">Go Home</a>
                        </div>
                    </div>
                </section>

                <br />

                {/* About */}
                <section id="about">
                    <div class="card">
                        <div class="card-header">
                            Halaman About
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><b>ABOUT</b></h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a scelerisque ipsum. Suspendisse blandit diam a quam porttitor placerat.</p>
                            <br />
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a scelerisque ipsum. Suspendisse blandit diam a quam porttitor placerat.</p>
                            <br />
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a scelerisque ipsum. Suspendisse blandit diam a quam porttitor placerat.</p>
                            <br /><br />
                            <a href="/About" class="btn btn-primary btn-lg">Go About</a>
                        </div>
                    </div>
                </section>

                <br />

                {/* Experience */}
                <section id="experience">
                    <div class="card">
                        <div class="card-header">
                            Halaman Experience
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><b>EXPERIENCE</b></h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a scelerisque ipsum. Suspendisse blandit diam a quam porttitor placerat.</p>
                            <br />
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a scelerisque ipsum. Suspendisse blandit diam a quam porttitor placerat.</p>
                            <br />
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a scelerisque ipsum. Suspendisse blandit diam a quam porttitor placerat.</p>
                            <br /><br />
                            <a href="/Experience" class="btn btn-primary btn-lg">Go Experience</a>
                        </div>
                    </div>
                </section>

                <br />

                {/* Skills */}
                <section id="skills">
                    <div class="card">
                        <div class="card-header">
                            Halaman Skills
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><b>SKILLS</b></h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a scelerisque ipsum. Suspendisse blandit diam a quam porttitor placerat.</p>
                            <br />
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a scelerisque ipsum. Suspendisse blandit diam a quam porttitor placerat.</p>
                            <br />
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a scelerisque ipsum. Suspendisse blandit diam a quam porttitor placerat.</p>
                            <br /><br />
                            <a href="/Skills" class="btn btn-primary btn-lg">Go Skills</a>
                        </div>
                    </div>
                </section>

                <br />

                {/* Interest */}
                <section id="interest">
                    <div class="card">
                        <div class="card-header">
                            Halaman Interest
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><b>INTEREST</b></h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a scelerisque ipsum. Suspendisse blandit diam a quam porttitor placerat.</p>
                            <br />
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a scelerisque ipsum. Suspendisse blandit diam a quam porttitor placerat.</p>
                            <br />
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a scelerisque ipsum. Suspendisse blandit diam a quam porttitor placerat.</p>
                            <br /><br />
                            <a href="/Interest" class="btn btn-primary btn-lg">Go Interest</a>
                        </div>
                    </div>
                </section>

                <br />

                {/* Awards */}
                <section id="awards">
                    <div class="card">
                        <div class="card-header">
                            Halaman Awards
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><b>AWARDS</b></h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a scelerisque ipsum. Suspendisse blandit diam a quam porttitor placerat.</p>
                            <br />
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a scelerisque ipsum. Suspendisse blandit diam a quam porttitor placerat.</p>
                            <br />
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a scelerisque ipsum. Suspendisse blandit diam a quam porttitor placerat.</p>
                            <br /><br />
                            <a href="/Awards" class="btn btn-primary btn-lg">Go Awards</a>
                        </div>
                    </div>
                </section>
            </div>
        </body>
    );
}

export default Home;