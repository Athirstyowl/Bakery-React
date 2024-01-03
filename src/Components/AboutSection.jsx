import React from 'react';

const AboutSection = () => {
  return (
    <section className="my-5">
      <div className="py-5">
        <h1 className="text-center">About Chiffon Hugs</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <img alt="abc" src="images/new.jfif" className="img-fluid aboutimg" />
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <h2 className="display-5">Chiffon hugs is multi-cuisine bakery which focuses on different culinaries all around the globe</h2>
            <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae, eligendi dignissimos officia aliquid in et quasi, animi id velit error sequi ab doloribus odit beatae amet, maiores delectus. Doloribus!</p>
            <a href="visitus" className="button btn-success">| Visit Us |</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
