import React, { Component } from "react";
import LandingLayoutController from "../components/landingLayout/landingLayoutController";

import "./landing.css";

export default class Landing extends Component {
  goto = link => this.props.history.push(link);

  render() {
    const { changeLanguage } = this.props;
    return <LandingLayoutController changeLanguage={changeLanguage} />;
  }

  temp() {
    return (
      <React.Fragment>
        <div style={{ width: "100%", marginTop: "0px", paddingTop: "0px" }}>
          <title>UpSkill</title>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />

          <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
          <link href="style.css" rel="stylesheet" type="text/css" />

          <link
            rel="stylesheet"
            href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
          />
          <link
            rel="stylesheet"
            href="assets/font-awesome-4.7.0/css/font-awesome.min.css"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Kaushan+Script"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700"
            rel="stylesheet"
            type="text/css"
          />
        </div>

        <div id="particles-js"></div>

        {/*<!-- Navigation start -->*/}
        <nav class="navbar navbar-expand-xl navbar-default navbar-fixed-top">
          <div class="container">
            {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
            <div class="navbar-header page-scroll">
              <button
                type="button"
                class="navbar-toggle orange-color"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand page-scroll" href="#page-top">
                <img
                  src="assets/images/Logo5.png"
                  height="50px"
                  alt="Upskill logo"
                  class="topLogo"
                />
              </a>
            </div>

            {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
          </div>
        </nav>
        {/*<!-- Navigation end -->*/}

        {/*<!-- Header start -->*/}
        <header class="header-all-pages">
          <div class="container">
            <div class="intro-text">
              <img
                src="assets/images/FullLogo4.svg"
                width="40%"
                alt="Upskill"
                class="upSkillLogo"
              />
              <div class="intro-lead-in">UpSkill your team</div>
              <div class="intro-lead-in">by looking UpSkills you need</div>
            </div>
          </div>
        </header>
        {/*<!-- Header end -->*/}

        {/*<!-- Benefits Section start -->*/}
        <section id="benefits" class="bg-light-gray">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 class="section-heading">Benefits</h2>
              </div>
            </div>

            <div class="row panels-row">
              <div class="panel panel-margin panel-default ">
                <div class="panel-heading orangeBorder">
                  <h3 class="panel-title text-dark text-centered">
                    Find the people you need
                  </h3>
                </div>
                <div class="panel-body text-muted text-centered">
                  Search for potential employees based on skills and other
                  requirements to fit your project better
                </div>
              </div>
              <div class="panel panel-margin panel-default">
                <div class="panel-heading orangeBorder">
                  <h3 class="panel-title text-dark text-centered">
                    Wherever. Whenever.
                  </h3>
                </div>
                <div class="panel-body text-muted text-centered">
                  Convenient web-based application can be accessed from
                  anywhere.
                </div>
              </div>
              <div class="panel panel-margin panel-default">
                <div class="panel-heading orangeBorder">
                  <h3 class="panel-title text-dark text-centered">
                    Find expertise
                  </h3>
                </div>
                <div class="panel-body text-muted text-centered">
                  Allow employees a way to find people who may be able to
                  provide insight on an issue​.
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<!-- Benefits Section end -->*/}

        {/*<!-- Features Section start -->*/}
        <section id="features" class="bg-white">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 class="section-heading">Features</h2>
              </div>
            </div>
            <div class="row text-center">
              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fa fa-circle fa-stack-2x text-primary"></i>
                  <i class="fa fa-user fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="service-heading">Assisted Profile Generation</h4>
                <p class="text-muted">
                  Automatically generate data to a new or existing profile from
                  project tracking softwares such as JIRA and Bitbucket
                </p>
              </div>
              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fa fa-circle fa-stack-2x text-primary"></i>
                  <i class="fa fa-database fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="service-heading">Skill Tracking</h4>
                <p class="text-muted">
                  Create your own profile with a listing of skills proficiencies
                  and projects for co-workers to view.
                </p>
              </div>

              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fa fa-circle fa-stack-2x text-primary"></i>
                  <i class="fa fa-search fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="service-heading">Dynamic Search</h4>
                <p class="text-muted">
                  Quickly search through all profiles for employees with your
                  desired skill proficiencies, projects, and more.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*<!-- Features Section end -->*/}

        {/*<!-- Prototype Section start -->*/}
        <section id="prototype" class="bg-light-gray">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 class="section-heading">Prototype</h2>
                <a href="https://xd.adobe.com/view/e0d1d1e0-f67f-4872-638a-5d8e084d80bd-96e0/?fullscreen">
                  <img
                    src="assets/images/prototype.png"
                    class="img-responsive img-centered prototype"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*<!-- Prototype Section end -->*/}

        {/*<!-- Architecture Section start -->*/}
        <section id="architecture" class="bg-white">
          <div class="container">
            <div class="row flex-row">
              <div class="col-lg-12 text-center">
                <h2 class="section-heading">Architecture</h2>
                <img
                  src="assets/images/UpSkill Architecture.png"
                  class="img-responsive img-centered architecture"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/*<!-- Architecture Section end -->*/}
        {/*<!-- Timeline Section start -->*/}
        <section id="timeline" class="bg-light-gray">
          <div class="container">
            <div class="row flex-row">
              <div class="col-lg-12 text-center">
                <h2 class="section-heading">Timeline</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="main-timeline">
                  <div class="timeline">
                    <div class="timeline-icon">
                      <i class="fa fa-pencil"></i>
                    </div>
                    <div class="timeline-content">
                      <h3 class="title">September</h3>
                      <p class="description">
                        Project proposal, planning and design of the solution.
                        <br />
                        Researching and discovering potential sources of
                        information.
                        <br />
                        Gathering technologies required to implement solution.
                      </p>
                    </div>
                  </div>
                  <div class="timeline">
                    <div class="timeline-icon">
                      <i class="fa fa-cog"></i>
                    </div>
                    <div class="timeline-content">
                      <h3 class="title">October</h3>
                      <p class="description">
                        Perform initialization of database and servers.
                        <br />
                        Develop data retrievers for GEDS, Jira and Bitbucket.
                        <br />
                        Create search web app.
                        <br />
                        Start work on info web app.
                      </p>
                    </div>
                  </div>
                  <div class="timeline">
                    <div class="timeline-icon">
                      <i class="fa fa-server"></i>
                    </div>
                    <div class="timeline-content">
                      <h3 class="title">November</h3>
                      <p class="description">
                        Add in LinkedIn parser.
                        <br />
                        Integrate APIs into info web app.
                        <br />
                        Begin QA testing to ensure requirements are met.
                      </p>
                    </div>
                  </div>
                  <div class="timeline">
                    <div class="timeline-icon">
                      <i class="fa fa-desktop"></i>
                    </div>
                    <div class="timeline-content">
                      <h3 class="title">December</h3>
                      <p class="description">
                        Preparation for final delivery.
                        <br />
                        Fix any bugs and issues.
                        {/*<!-- <br /> -->*/}
                        Deliver project once complete.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<!-- Timeline Section end -->*/}

        {/*<!-- Our Team Section start -->*/}
        <section id="ourTeam" class="bg-white">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 class="section-heading">Our Team</h2>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-4">
                <div class="team-member">
                  <img
                    src="assets/images/team/Mamadou.jpg"
                    class="team-image img-responsive"
                    alt=""
                  />
                  <h4>Mamadou Bah</h4>
                  <p class="text-muted">
                    Computer Engineering at University of Ottawa
                  </p>
                  <ul class="list-inline social-buttons">
                    <li>
                      <a href="https://github.com/Mousto097">
                        <i class="fa fa-github"></i>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.linkedin.com/in/mamadou-bah-9962a711b/">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="team-member">
                  <img
                    src="assets/images/team/Rizvi.jpg"
                    class="team-image img-responsive"
                    alt=""
                  />
                  <h4>Rizvi Rab</h4>
                  <p class="text-muted">
                    Software Engineering at University of Ottawa
                  </p>
                  <ul class="list-inline social-buttons">
                    <li>
                      <a href="https://github.com/Rizvida1">
                        <i class="fa fa-github"></i>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.linkedin.com/in/rizvi-rab-370327160/">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="team-member">
                  <img
                    src="assets/images/team/Trevor.jpg"
                    class="team-image img-responsive"
                    alt=""
                  />
                  <h4>Trevor Bivi</h4>
                  <p class="text-muted">
                    Software Engineering at Carleton University
                  </p>
                  <ul class="list-inline social-buttons">
                    <li>
                      <a href="https://github.com/TrevorBivi">
                        <i class="fa fa-github"></i>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.linkedin.com/in/trevor-bivi-736181193/">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<!-- Our Team Section end -->*/}

        {/*<!-- Contact Us Section start -->*/}
        <section id="contact" class="bg-light-gray">
          <div class="container">
            <div class="row flex-row">
              <div class="col-lg-12 text-center">
                <h2 class="section-heading">Contact Us</h2>
              </div>
            </div>
            <div class="row" id="cdh-div">
              <div>
                <a href="https://cdhstudio.ca/">
                  <img
                    class="center-logo"
                    src="assets/images/contact/cdhlogo.png"
                    alt="cdhstudio"
                  />
                </a>
              </div>
              <div id="cdh-email-div">
                <span class="fa-stack fa-4x">
                  <i class="fa fa-envelope fa-stack-1x fa-inverse"></i>
                </span>
                <span class="email-span-height">
                  <a
                    id="cdh-email"
                    href="mailto:cdhstudio@canada.ca"
                    class="email-span-font"
                  >
                    cdhstudio@canada.ca
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>
        {/*<!-- Contact Us Section end -->*/}

        {/*<!-- footer Section start -->*/}
        <footer class="bg-white">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <span class="copyright">Copyright &copy; UpSkill 2019</span>
              </div>
              <div class="col-md-4">
                <ul class="list-inline social-buttons">
                  <li>
                    <a href="https://github.com/CDH-Studio/UpSkill">
                      <i class="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul class="list-inline quicklinks">
                  <li>
                    {/*  <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        {/*<!-- footer Section end -->*/}

        {/*<!-- jQuery Version 1.11.0 -->*/}
        <script src="js/jquery-1.11.0.js"></script>

        {/*<!-- Bootstrap Core JavaScript -->*/}
        <script src="js/bootstrap.min.js"></script>

        {/*<!-- Plugin JavaScript -->*/}
        <script src="js/jquery.easing.min.js"></script>
        <script src="js/classie.js"></script>
        <script src="js/cbpAnimatedHeader.js"></script>

        {/*<!-- Contact Form JavaScript -->*/}
        <script src="js/jqBootstrapValidation.js"></script>

        {/*<!-- Custom Theme JavaScript -->*/}
        <script src="js/agency.js"></script>

        {/*<!-- Particle.js -->*/}
        <script src="js/particles.js" type="text/javascript"></script>
        <script src="app.js" type="text/javascript"></script>
      </React.Fragment>
    );
  }
}
