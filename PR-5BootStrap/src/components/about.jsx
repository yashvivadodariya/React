import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <div className="about-page">   

      {/* HERO SECTION */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>About Us</h1>
          <p>Home / <span>About Us</span></p>
        </div>
      </div>

      {/* MANUFACTURE SECTION */}
      <Container className="section-padding">
        <Row className="align-items-center">
          <Col lg={6}>
            <span className="sub-title">Sweet Escape</span>
            <h2 className="main-title">Manufacture</h2>
            <p className="section-text">
              Once the ingredients have cooled enough, it's time to pour them
              into molds and freeze in a brine bath. After that, the ice cream
              is ready to serve with love and joy.
            </p>
            <Button className="btn-red">View More →</Button>
          </Col>

          <Col lg={6}>
            <img
              src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/banner-7.jpg?v=1715587088"
              alt="Ice Cream"
              className="section-image"
            />
          </Col>
        </Row>
      </Container>

      {/* COUNTER SECTION */}
      <div className="counter-section">
        <Container>
          <Row className="text-center">
            <Col md={3}>
              <h3>115+</h3>
              <p>Branch Shop</p>
            </Col>
            <Col md={3}>
              <h3>85+</h3>
              <p>Staffs</p>
            </Col>
            <Col md={3}>
              <h3>120+</h3>
              <p>Flavor Variants</p>
            </Col>
            <Col md={3}>
              <h3>90%</h3>
              <p>Positive Review</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* HISTORY SECTION */}
      <Container className="section-padding">
        <Row className="align-items-center">
          <Col lg={6}>
            <img
              src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/banner-8.jpg?v=1715660504"
              alt="Ice Cream"
              className="section-image"
            />
          </Col>

          <Col lg={6}>
            <span className="sub-title">Frozen Joy</span>
            <h2 className="main-title">History Begin</h2>
            <p className="section-text">
              On hot summer days like today, in addition to a glass of cool
              beverage, a glass of ice cream can also help relieve some of the
              heat.
            </p>
            <Button className="btn-red">View More →</Button>
          </Col>
        </Row>
      </Container>

      {/* TESTIMONIAL */}
      <Container className="section-padding testimonial-section">
  <span className="sub-title left-align">Testimonial</span>
  <h2 className="main-title left-align">Ice Cream Shop</h2>

  <Row className="mt-5 justify-content-center">

    <Col md={4}>
      <div className="testimonial-card-horizontal">
        <div className="testimonial-header">
          <img
            src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/tes_180x.jpg?v=1714730064"
            alt="Mia Chen"
            className="testimonial-img-horizontal"
          />
          <div className="testimonial-info">
            <h5>Mia Chen</h5>
            <p className="designation">Graphic Designer</p>
          </div>
        </div>
        <p className="testimonial-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non mattis dui ut accumsan.
        </p>
      </div>
    </Col>

    <Col md={4}>
      <div className="testimonial-card-horizontal">
        <div className="testimonial-header">
          <img
            src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/tes-2_180x.jpg?v=1714719644"
            alt="Eshan B"
            className="testimonial-img-horizontal"
          />
          <div className="testimonial-info">
            <h5>Eshan B</h5>
            <p className="designation">CEO</p>
          </div>
        </div>
        <p className="testimonial-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non mattis dui ut accumsan.
        </p>
      </div>
    </Col>

    <Col md={4}>
      <div className="testimonial-card-horizontal">
        <div className="testimonial-header">
          <img
            src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/tes-1_180x.jpg?v=1715670691"
            alt="KPindia"
            className="testimonial-img-horizontal"
          />
          <div className="testimonial-info">
            <h5>KPindia</h5>
            <p className="designation">Designer</p>
          </div>
        </div>
        <p className="testimonial-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non mattis dui ut accumsan.
        </p>
      </div>
    </Col>

  </Row>
</Container>


      {/* NEWS SECTION */}
<Container className="section-padding news-section text-center">
  <span className="sub-title center-align">Our News</span>
  <h2 className="main-title center-align">Tastiest Updates</h2>

  <Row className="mt-5 justify-content-center">

    <Col md={4}>
      <div className="news-card">
        <img
          src="https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-7_540x.jpg?v=1719804468"
          alt="The Best Ice Cream You'll Never Eat"
          className="news-image"
        />
        <div className="news-content">
          <p className="news-category-date">
            <span className="category-red">BUSINESS TIPS</span> • Jun 30, 2024
          </p>
          <h5>The Best Ice Cream You'll Never Eat</h5>
        </div>
      </div>
    </Col>

    <Col md={4}>
      <div className="news-card">
        <img
          src="https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-5_1296x.jpg?v=1719804408"
          alt="Fancy Figs? Make This Ice Cream"
          className="news-image"
        />
        <div className="news-content">
          <p className="news-category-date">
            <span className="category-red">BUSINESS TIPS</span> • Jun 30, 2024
          </p>
          <h5>Fancy Figs? Make This Ice Cream</h5>
        </div>
      </div>
    </Col>

    <Col md={4}>
      <div className="news-card">
        <img
          src="https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-2_540x.jpg?v=1719804262"
          alt="The Art Of Crafting Gourmet Ice Cream"
          className="news-image"
        />
        <div className="news-content">
          <p className="news-category-date">
            <span className="category-red">BUSINESS TIPS</span> • Jun 30, 2024
          </p>
          <h5>The Art Of Crafting Gourmet Ice Cream</h5>
        </div>
      </div>
    </Col>

  </Row>

  <div className="mt-4">
    <button className="btn-red">Read More</button>
  </div>
</Container>


    </div>
  );
};

export default About;
